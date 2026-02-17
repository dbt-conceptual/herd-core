"""GitHub OAuth provider for public MCP server exposure (HDR-0040).

Implements FastMCP's OAuthAuthorizationServerProvider protocol using GitHub
as the identity provider. Users authenticate via GitHub OAuth, and access
is gated by a username whitelist (ALLOWED_GITHUB_USERS).

Flow:
    1. Client registers dynamically (RFC 7591)
    2. Client requests authorization -> redirect to GitHub
    3. GitHub callback -> verify user in whitelist -> issue auth code
    4. Client exchanges auth code for access token
    5. Access token verified on each MCP request

In-memory token storage is intentional per HDR-0040: no Redis,
re-auth on server restart. Acceptable for single-user deployment.
"""

from __future__ import annotations

import logging
import secrets
import time
from dataclasses import dataclass, field

import aiohttp
from mcp.server.auth.provider import (
    AccessToken,
    AuthorizationCode,
    AuthorizationParams,
    RefreshToken,
)
from mcp.shared.auth import OAuthClientInformationFull, OAuthToken

logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# HDR-0040 Tool Authorization Matrix
# ---------------------------------------------------------------------------

#: Tools accessible to OAuth-authenticated advisor sessions.
#: Chain of command: advisor talks to leaders, leaders command agents.
ADVISOR_TOOLS: frozenset[str] = frozenset(
    {
        "herd_status",  # read
        "herd_recall",  # read
        "herd_metrics",  # read
        "herd_graph",  # read
        "herd_catchup",  # read
        "herd_log",  # write - #herd-feed only
        "herd_send",  # write - Steve & Leonardo only
        "herd_spawn",  # write - Steve & Leonardo only
    }
)

# GitHub OAuth endpoints
_GITHUB_AUTHORIZE_URL = "https://github.com/login/oauth/authorize"
_GITHUB_TOKEN_URL = "https://github.com/login/oauth/access_token"
_GITHUB_USER_URL = "https://api.github.com/user"

# Token lifetimes
_AUTH_CODE_TTL_SECONDS = 300  # 5 minutes
_ACCESS_TOKEN_TTL_SECONDS = 3600  # 1 hour


@dataclass
class PendingAuth:
    """State held between authorize() and the GitHub callback.

    Attributes:
        client: The OAuth client requesting authorization.
        params: The authorization parameters from the MCP framework.
    """

    client: OAuthClientInformationFull
    params: AuthorizationParams


@dataclass
class HerdOAuthProvider:
    """GitHub-backed OAuth provider for Herd MCP server.

    Uses GitHub as the identity layer and an in-memory store for tokens.
    Access is restricted to usernames listed in ``allowed_users``.

    Implements the ``OAuthAuthorizationServerProvider`` protocol from
    ``mcp.server.auth.provider`` with concrete types
    ``AuthorizationCode``, ``RefreshToken``, ``AccessToken``.

    Args:
        github_client_id: GitHub OAuth App client ID.
        github_client_secret: GitHub OAuth App client secret.
        allowed_users: GitHub usernames permitted to authenticate.
        public_url: Public base URL of the MCP server
            (e.g., ``https://herd-mcp.eriksen.live``).
    """

    github_client_id: str
    github_client_secret: str
    allowed_users: list[str]
    public_url: str

    # In-memory stores (intentional per HDR-0040)
    clients: dict[str, OAuthClientInformationFull] = field(default_factory=dict)
    auth_codes: dict[str, AuthorizationCode] = field(default_factory=dict)
    access_tokens: dict[str, AccessToken] = field(default_factory=dict)
    pending_auth: dict[str, PendingAuth] = field(default_factory=dict)

    # Maps auth code -> GitHub username for logging/audit
    code_github_users: dict[str, str] = field(default_factory=dict)

    # Maps access token -> GitHub username for tool-level authorization
    token_github_users: dict[str, str] = field(default_factory=dict)

    async def get_client(self, client_id: str) -> OAuthClientInformationFull | None:
        """Look up a registered OAuth client by ID.

        Args:
            client_id: The client identifier issued during registration.

        Returns:
            Client information if found, None otherwise.
        """
        return self.clients.get(client_id)

    async def register_client(self, client_info: OAuthClientInformationFull) -> None:
        """Register a new OAuth client (RFC 7591 dynamic registration).

        Assigns a unique client_id and stores the client metadata.
        Required by claude.ai which uses dynamic client registration.

        Args:
            client_info: Client metadata from the registration request.
        """
        client_id = secrets.token_urlsafe(32)
        client_info.client_id = client_id
        client_info.client_secret = secrets.token_urlsafe(48)
        client_info.client_id_issued_at = int(time.time())
        client_info.client_secret_expires_at = 0  # Does not expire
        self.clients[client_id] = client_info
        logger.info("Registered OAuth client: %s", client_id[:8])

    async def authorize(
        self,
        client: OAuthClientInformationFull,
        params: AuthorizationParams,
    ) -> str:
        """Begin the authorization flow by redirecting to GitHub.

        Stores the authorization parameters so the GitHub callback can
        complete the flow and redirect back to the client.

        Args:
            client: The registered OAuth client.
            params: Authorization parameters including state, scopes,
                code_challenge, and redirect_uri.

        Returns:
            GitHub OAuth authorize URL for browser redirect.
        """
        # Generate a state token for the GitHub leg of the flow
        github_state = secrets.token_urlsafe(32)

        # Store pending auth so callback can retrieve it
        self.pending_auth[github_state] = PendingAuth(
            client=client,
            params=params,
        )

        # Build GitHub authorize URL
        callback_url = f"{self.public_url}/github/callback"
        github_url = (
            f"{_GITHUB_AUTHORIZE_URL}"
            f"?client_id={self.github_client_id}"
            f"&redirect_uri={callback_url}"
            f"&state={github_state}"
            f"&scope=read:user"
        )

        logger.info(
            "Redirecting to GitHub OAuth for client %s",
            client.client_id[:8] if client.client_id else "unknown",
        )
        return github_url

    async def load_authorization_code(
        self,
        client: OAuthClientInformationFull,
        authorization_code: str,
    ) -> AuthorizationCode | None:
        """Load a previously issued authorization code.

        Called by the MCP framework during the token exchange step
        to validate the authorization code.

        Args:
            client: The client presenting the code.
            authorization_code: The code string to look up.

        Returns:
            AuthorizationCode if found and valid, None otherwise.
        """
        return self.auth_codes.get(authorization_code)

    async def exchange_authorization_code(
        self,
        client: OAuthClientInformationFull,
        authorization_code: AuthorizationCode,
    ) -> OAuthToken:
        """Exchange an authorization code for an access token.

        Generates a new opaque access token, stores it in memory,
        and removes the consumed authorization code.

        Args:
            client: The client exchanging the code.
            authorization_code: The validated AuthorizationCode object.

        Returns:
            OAuthToken with the new access token.
        """
        # Generate opaque access token
        token_value = secrets.token_urlsafe(48)
        now = int(time.time())

        access_token = AccessToken(
            token=token_value,
            client_id=client.client_id or "",
            scopes=authorization_code.scopes,
            expires_at=now + _ACCESS_TOKEN_TTL_SECONDS,
        )

        self.access_tokens[token_value] = access_token

        # Transfer GitHub username mapping to access token
        github_user = self.code_github_users.pop(authorization_code.code, None)
        if github_user:
            self.token_github_users[token_value] = github_user

        # Consume the authorization code (one-time use)
        self.auth_codes.pop(authorization_code.code, None)

        logger.warning(
            "Issued access token for client %s (GitHub user: %s, scopes: %s, "
            "token prefix: %s, store size: %d)",
            client.client_id[:8] if client.client_id else "unknown",
            github_user or "unknown",
            access_token.scopes,
            token_value[:12],
            len(self.access_tokens),
        )

        return OAuthToken(
            access_token=token_value,
            token_type="Bearer",
            expires_in=_ACCESS_TOKEN_TTL_SECONDS,
            scope=" ".join(authorization_code.scopes),
        )

    async def load_access_token(self, token: str) -> AccessToken | None:
        """Load and validate an access token.

        Called by the MCP framework on every authenticated request
        to verify the bearer token.

        Args:
            token: The bearer token string.

        Returns:
            AccessToken if valid and not expired, None otherwise.
        """
        logger.warning(
            "load_access_token called — token prefix: %s, store size: %d",
            token[:12] if token else "(empty)",
            len(self.access_tokens),
        )
        access_token = self.access_tokens.get(token)
        if access_token is None:
            logger.warning(
                "Token not found in store. Stored token prefixes: %s",
                [k[:12] for k in self.access_tokens],
            )
            return None

        # Check expiration
        if access_token.expires_at and access_token.expires_at < int(time.time()):
            # Clean up expired token
            self.access_tokens.pop(token, None)
            self.token_github_users.pop(token, None)
            return None

        logger.info(
            "Token verified — client: %s, scopes: %s",
            access_token.client_id[:8] if access_token.client_id else "unknown",
            access_token.scopes,
        )
        return access_token

    async def load_refresh_token(
        self,
        client: OAuthClientInformationFull,
        refresh_token: str,
    ) -> RefreshToken | None:
        """Load a refresh token. Not supported, returns None.

        Re-authentication via GitHub is acceptable for single-user
        deployment (HDR-0040).

        Args:
            client: The client requesting token refresh.
            refresh_token: The refresh token string.

        Returns:
            Always None (refresh tokens not supported).
        """
        return None

    async def exchange_refresh_token(
        self,
        client: OAuthClientInformationFull,
        refresh_token: RefreshToken,
        scopes: list[str],
    ) -> OAuthToken:
        """Exchange a refresh token. Not supported.

        Args:
            client: The client requesting token refresh.
            refresh_token: The refresh token to exchange.
            scopes: Requested scopes.

        Raises:
            NotImplementedError: Always, refresh not supported.
        """
        raise NotImplementedError("Refresh tokens not supported (HDR-0040)")

    async def revoke_token(
        self,
        token: AccessToken | RefreshToken,
    ) -> None:
        """Revoke an access or refresh token.

        Removes the token from the in-memory store. If the token
        is already invalid or unknown, this is a no-op.

        Args:
            token: The token object to revoke.
        """
        if isinstance(token, AccessToken):
            self.access_tokens.pop(token.token, None)
            self.token_github_users.pop(token.token, None)
            logger.info("Revoked access token for client %s", token.client_id[:8])

    # ------------------------------------------------------------------
    # GitHub callback helpers
    # ------------------------------------------------------------------

    async def handle_github_callback(
        self,
        code: str,
        state: str,
    ) -> tuple[str, str] | tuple[None, str]:
        """Process the GitHub OAuth callback.

        Exchanges the GitHub authorization code for a GitHub token,
        verifies the user is in the allowed list, generates an MCP
        authorization code, and returns the redirect URL for the client.

        Args:
            code: GitHub authorization code from the callback.
            state: State parameter matching the pending authorization.

        Returns:
            Tuple of (redirect_url, empty string) on success, or
            (None, error_message) on failure.
        """
        # Look up pending authorization
        pending = self.pending_auth.pop(state, None)
        if pending is None:
            return None, "Invalid or expired state parameter"

        # Exchange GitHub code for GitHub access token
        github_token = await self._exchange_github_code(code)
        if github_token is None:
            return None, "Failed to exchange GitHub authorization code"

        # Get GitHub username
        github_username = await self._get_github_username(github_token)
        if github_username is None:
            return None, "Failed to retrieve GitHub user identity"

        # Check whitelist
        if github_username not in self.allowed_users:
            logger.warning(
                "GitHub user %s attempted access but is not in allowed list",
                github_username,
            )
            return None, f"User {github_username} is not authorized"

        # Generate our authorization code
        auth_code_value = secrets.token_urlsafe(48)
        now = time.time()

        # Ensure herd:advisor scope is always present — clients may
        # not request it explicitly, which would leave scopes=[] and
        # cause RequireAuthMiddleware to reject the token.
        scopes = list(pending.params.scopes) if pending.params.scopes else []
        if "herd:advisor" not in scopes:
            scopes.append("herd:advisor")

        auth_code = AuthorizationCode(
            code=auth_code_value,
            scopes=scopes,
            expires_at=now + _AUTH_CODE_TTL_SECONDS,
            client_id=pending.client.client_id or "",
            code_challenge=pending.params.code_challenge,
            redirect_uri=pending.params.redirect_uri,
            redirect_uri_provided_explicitly=(
                pending.params.redirect_uri_provided_explicitly
            ),
        )

        self.auth_codes[auth_code_value] = auth_code
        self.code_github_users[auth_code_value] = github_username

        # Build redirect URL back to the client
        redirect_uri = str(pending.params.redirect_uri)
        separator = "&" if "?" in redirect_uri else "?"
        redirect_url = f"{redirect_uri}{separator}code={auth_code_value}"
        if pending.params.state:
            redirect_url += f"&state={pending.params.state}"

        logger.info(
            "GitHub OAuth callback successful for user %s, "
            "issuing auth code for client %s",
            github_username,
            pending.client.client_id[:8] if pending.client.client_id else "unknown",
        )

        return redirect_url, ""

    async def _exchange_github_code(self, code: str) -> str | None:
        """Exchange a GitHub authorization code for a GitHub access token.

        Args:
            code: The authorization code from GitHub's callback.

        Returns:
            GitHub access token string, or None on failure.
        """
        async with aiohttp.ClientSession() as session:
            async with session.post(
                _GITHUB_TOKEN_URL,
                json={
                    "client_id": self.github_client_id,
                    "client_secret": self.github_client_secret,
                    "code": code,
                },
                headers={"Accept": "application/json"},
            ) as resp:
                if resp.status != 200:
                    logger.error("GitHub token exchange failed: HTTP %d", resp.status)
                    return None

                data = await resp.json()
                token = data.get("access_token")
                if not token:
                    error = data.get("error", "unknown")
                    logger.error("GitHub token exchange returned error: %s", error)
                    return None

                return str(token)

    async def _get_github_username(self, token: str) -> str | None:
        """Retrieve the authenticated GitHub user's login name.

        Args:
            token: GitHub access token.

        Returns:
            GitHub username string, or None on failure.
        """
        async with aiohttp.ClientSession() as session:
            async with session.get(
                _GITHUB_USER_URL,
                headers={
                    "Authorization": f"Bearer {token}",
                    "Accept": "application/json",
                },
            ) as resp:
                if resp.status != 200:
                    logger.error("GitHub user API failed: HTTP %d", resp.status)
                    return None

                data = await resp.json()
                login = data.get("login")
                return str(login) if login else None


def is_tool_allowed_for_advisor(tool_name: str) -> bool:
    """Check if a tool is accessible to OAuth-authenticated advisor sessions.

    Per HDR-0040, only a subset of tools are exposed to the public
    MCP endpoint. This preserves the chain of command: the advisor
    talks to leaders, leaders command agents.

    Args:
        tool_name: The MCP tool name to check.

    Returns:
        True if the tool is in the ADVISOR_TOOLS whitelist.
    """
    return tool_name in ADVISOR_TOOLS
