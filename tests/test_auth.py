"""Tests for GitHub OAuth provider (HDR-0040)."""

from __future__ import annotations

import time
from unittest.mock import AsyncMock, MagicMock, patch

import pytest
from mcp.server.auth.provider import (
    AccessToken,
    AuthorizationCode,
    AuthorizationParams,
    RefreshToken,
)
from mcp.shared.auth import OAuthClientInformationFull
from pydantic import AnyUrl

from herd_mcp.auth import (
    ADVISOR_TOOLS,
    HerdOAuthProvider,
    PendingAuth,
    _ACCESS_TOKEN_TTL_SECONDS,
    is_tool_allowed_for_advisor,
)

# ---------------------------------------------------------------------------
# Fixtures
# ---------------------------------------------------------------------------


@pytest.fixture
def provider() -> HerdOAuthProvider:
    """Create a test OAuth provider with mock GitHub credentials."""
    return HerdOAuthProvider(
        github_client_id="test-client-id",
        github_client_secret="test-client-secret",
        allowed_users=["feriksen", "testuser"],
        public_url="https://herd-mcp.eriksen.live",
    )


@pytest.fixture
def sample_client() -> OAuthClientInformationFull:
    """Create a sample registered OAuth client."""
    return OAuthClientInformationFull(
        client_id="test-registered-client",
        client_secret="test-secret",
        redirect_uris=["https://example.com/callback"],
    )


@pytest.fixture
def sample_params() -> AuthorizationParams:
    """Create sample authorization parameters."""
    return AuthorizationParams(
        state="test-state-123",
        scopes=["herd:advisor"],
        code_challenge="test-challenge-abc",
        redirect_uri=AnyUrl("https://example.com/callback"),
        redirect_uri_provided_explicitly=True,
    )


# ---------------------------------------------------------------------------
# Client Registration
# ---------------------------------------------------------------------------


class TestClientRegistration:
    """Tests for dynamic client registration (RFC 7591)."""

    @pytest.mark.asyncio
    async def test_register_client_assigns_id(
        self, provider: HerdOAuthProvider
    ) -> None:
        """Registration assigns a unique client_id."""
        client = OAuthClientInformationFull(
            redirect_uris=["https://example.com/callback"],
        )
        await provider.register_client(client)

        assert client.client_id is not None
        assert len(client.client_id) > 10

    @pytest.mark.asyncio
    async def test_register_client_assigns_secret(
        self, provider: HerdOAuthProvider
    ) -> None:
        """Registration assigns a client_secret."""
        client = OAuthClientInformationFull(
            redirect_uris=["https://example.com/callback"],
        )
        await provider.register_client(client)

        assert client.client_secret is not None
        assert len(client.client_secret) > 20

    @pytest.mark.asyncio
    async def test_register_client_stored(self, provider: HerdOAuthProvider) -> None:
        """Registered client is retrievable via get_client."""
        client = OAuthClientInformationFull(
            redirect_uris=["https://example.com/callback"],
        )
        await provider.register_client(client)

        retrieved = await provider.get_client(client.client_id or "")
        assert retrieved is not None
        assert retrieved.client_id == client.client_id

    @pytest.mark.asyncio
    async def test_get_client_unknown_returns_none(
        self, provider: HerdOAuthProvider
    ) -> None:
        """Looking up an unknown client returns None."""
        result = await provider.get_client("nonexistent-id")
        assert result is None

    @pytest.mark.asyncio
    async def test_register_sets_timestamps(self, provider: HerdOAuthProvider) -> None:
        """Registration sets issued_at and secret_expires_at."""
        client = OAuthClientInformationFull(
            redirect_uris=["https://example.com/callback"],
        )
        before = int(time.time())
        await provider.register_client(client)

        assert client.client_id_issued_at is not None
        assert client.client_id_issued_at >= before
        assert client.client_secret_expires_at == 0  # Does not expire


# ---------------------------------------------------------------------------
# Authorization Flow
# ---------------------------------------------------------------------------


class TestAuthorize:
    """Tests for the authorize step (redirect to GitHub)."""

    @pytest.mark.asyncio
    async def test_authorize_returns_github_url(
        self,
        provider: HerdOAuthProvider,
        sample_client: OAuthClientInformationFull,
        sample_params: AuthorizationParams,
    ) -> None:
        """authorize() returns a GitHub OAuth URL."""
        url = await provider.authorize(sample_client, sample_params)
        assert "github.com/login/oauth/authorize" in url
        assert f"client_id={provider.github_client_id}" in url

    @pytest.mark.asyncio
    async def test_authorize_includes_callback_url(
        self,
        provider: HerdOAuthProvider,
        sample_client: OAuthClientInformationFull,
        sample_params: AuthorizationParams,
    ) -> None:
        """authorize() includes our callback URL in redirect_uri."""
        url = await provider.authorize(sample_client, sample_params)
        assert "herd-mcp.eriksen.live/github/callback" in url

    @pytest.mark.asyncio
    async def test_authorize_stores_pending_auth(
        self,
        provider: HerdOAuthProvider,
        sample_client: OAuthClientInformationFull,
        sample_params: AuthorizationParams,
    ) -> None:
        """authorize() stores pending auth for callback retrieval."""
        assert len(provider.pending_auth) == 0
        await provider.authorize(sample_client, sample_params)
        assert len(provider.pending_auth) == 1

    @pytest.mark.asyncio
    async def test_authorize_includes_scope(
        self,
        provider: HerdOAuthProvider,
        sample_client: OAuthClientInformationFull,
        sample_params: AuthorizationParams,
    ) -> None:
        """authorize() requests read:user scope from GitHub."""
        url = await provider.authorize(sample_client, sample_params)
        assert "scope=read:user" in url


# ---------------------------------------------------------------------------
# Authorization Code
# ---------------------------------------------------------------------------


class TestAuthorizationCode:
    """Tests for authorization code load and exchange."""

    @pytest.mark.asyncio
    async def test_load_unknown_code_returns_none(
        self,
        provider: HerdOAuthProvider,
        sample_client: OAuthClientInformationFull,
    ) -> None:
        """Loading an unknown authorization code returns None."""
        result = await provider.load_authorization_code(sample_client, "nonexistent")
        assert result is None

    @pytest.mark.asyncio
    async def test_load_stored_code(
        self,
        provider: HerdOAuthProvider,
        sample_client: OAuthClientInformationFull,
    ) -> None:
        """Loading a stored authorization code returns it."""
        code = AuthorizationCode(
            code="test-code",
            scopes=["herd:advisor"],
            expires_at=time.time() + 300,
            client_id="test-registered-client",
            code_challenge="test-challenge",
            redirect_uri=AnyUrl("https://example.com/callback"),
            redirect_uri_provided_explicitly=True,
        )
        provider.auth_codes["test-code"] = code

        result = await provider.load_authorization_code(sample_client, "test-code")
        assert result is not None
        assert result.code == "test-code"

    @pytest.mark.asyncio
    async def test_exchange_code_returns_token(
        self,
        provider: HerdOAuthProvider,
        sample_client: OAuthClientInformationFull,
    ) -> None:
        """Exchanging an auth code returns an OAuthToken."""
        code = AuthorizationCode(
            code="exchange-test",
            scopes=["herd:advisor"],
            expires_at=time.time() + 300,
            client_id="test-registered-client",
            code_challenge="test-challenge",
            redirect_uri=AnyUrl("https://example.com/callback"),
            redirect_uri_provided_explicitly=True,
        )
        provider.auth_codes["exchange-test"] = code

        token = await provider.exchange_authorization_code(sample_client, code)
        assert token.access_token is not None
        assert token.token_type == "Bearer"
        assert token.expires_in == _ACCESS_TOKEN_TTL_SECONDS

    @pytest.mark.asyncio
    async def test_exchange_code_consumes_code(
        self,
        provider: HerdOAuthProvider,
        sample_client: OAuthClientInformationFull,
    ) -> None:
        """Exchanging an auth code removes it (one-time use)."""
        code = AuthorizationCode(
            code="consume-test",
            scopes=["herd:advisor"],
            expires_at=time.time() + 300,
            client_id="test-registered-client",
            code_challenge="test-challenge",
            redirect_uri=AnyUrl("https://example.com/callback"),
            redirect_uri_provided_explicitly=True,
        )
        provider.auth_codes["consume-test"] = code

        await provider.exchange_authorization_code(sample_client, code)
        assert "consume-test" not in provider.auth_codes

    @pytest.mark.asyncio
    async def test_exchange_code_stores_access_token(
        self,
        provider: HerdOAuthProvider,
        sample_client: OAuthClientInformationFull,
    ) -> None:
        """Exchanging an auth code stores the new access token."""
        code = AuthorizationCode(
            code="store-test",
            scopes=["herd:advisor"],
            expires_at=time.time() + 300,
            client_id="test-registered-client",
            code_challenge="test-challenge",
            redirect_uri=AnyUrl("https://example.com/callback"),
            redirect_uri_provided_explicitly=True,
        )
        provider.auth_codes["store-test"] = code

        token = await provider.exchange_authorization_code(sample_client, code)
        assert token.access_token in provider.access_tokens

    @pytest.mark.asyncio
    async def test_exchange_code_transfers_github_username(
        self,
        provider: HerdOAuthProvider,
        sample_client: OAuthClientInformationFull,
    ) -> None:
        """Exchanging an auth code transfers the GitHub username mapping."""
        code = AuthorizationCode(
            code="username-test",
            scopes=["herd:advisor"],
            expires_at=time.time() + 300,
            client_id="test-registered-client",
            code_challenge="test-challenge",
            redirect_uri=AnyUrl("https://example.com/callback"),
            redirect_uri_provided_explicitly=True,
        )
        provider.auth_codes["username-test"] = code
        provider.code_github_users["username-test"] = "feriksen"

        token = await provider.exchange_authorization_code(sample_client, code)
        assert provider.token_github_users[token.access_token] == "feriksen"
        assert "username-test" not in provider.code_github_users


# ---------------------------------------------------------------------------
# Access Token
# ---------------------------------------------------------------------------


class TestAccessToken:
    """Tests for access token load and validation."""

    @pytest.mark.asyncio
    async def test_load_unknown_token_returns_none(
        self, provider: HerdOAuthProvider
    ) -> None:
        """Loading an unknown access token returns None."""
        result = await provider.load_access_token("nonexistent")
        assert result is None

    @pytest.mark.asyncio
    async def test_load_valid_token(self, provider: HerdOAuthProvider) -> None:
        """Loading a valid access token returns it."""
        token = AccessToken(
            token="valid-token",
            client_id="test-client",
            scopes=["herd:advisor"],
            expires_at=int(time.time()) + 3600,
        )
        provider.access_tokens["valid-token"] = token

        result = await provider.load_access_token("valid-token")
        assert result is not None
        assert result.token == "valid-token"

    @pytest.mark.asyncio
    async def test_load_expired_token_returns_none(
        self, provider: HerdOAuthProvider
    ) -> None:
        """Loading an expired access token returns None and cleans up."""
        token = AccessToken(
            token="expired-token",
            client_id="test-client",
            scopes=["herd:advisor"],
            expires_at=int(time.time()) - 100,
        )
        provider.access_tokens["expired-token"] = token
        provider.token_github_users["expired-token"] = "feriksen"

        result = await provider.load_access_token("expired-token")
        assert result is None
        assert "expired-token" not in provider.access_tokens
        assert "expired-token" not in provider.token_github_users


# ---------------------------------------------------------------------------
# Refresh Token (not supported)
# ---------------------------------------------------------------------------


class TestRefreshToken:
    """Tests for refresh token handling (not supported per HDR-0040)."""

    @pytest.mark.asyncio
    async def test_load_refresh_token_returns_none(
        self,
        provider: HerdOAuthProvider,
        sample_client: OAuthClientInformationFull,
    ) -> None:
        """load_refresh_token always returns None."""
        result = await provider.load_refresh_token(sample_client, "any-token")
        assert result is None

    @pytest.mark.asyncio
    async def test_exchange_refresh_token_raises(
        self,
        provider: HerdOAuthProvider,
        sample_client: OAuthClientInformationFull,
    ) -> None:
        """exchange_refresh_token always raises NotImplementedError."""
        refresh = RefreshToken(
            token="test",
            client_id="test",
            scopes=["herd:advisor"],
        )
        with pytest.raises(NotImplementedError, match="HDR-0040"):
            await provider.exchange_refresh_token(
                sample_client, refresh, ["herd:advisor"]
            )


# ---------------------------------------------------------------------------
# Token Revocation
# ---------------------------------------------------------------------------


class TestRevocation:
    """Tests for token revocation."""

    @pytest.mark.asyncio
    async def test_revoke_access_token(self, provider: HerdOAuthProvider) -> None:
        """Revoking an access token removes it from the store."""
        token = AccessToken(
            token="revoke-me",
            client_id="test-client",
            scopes=["herd:advisor"],
            expires_at=int(time.time()) + 3600,
        )
        provider.access_tokens["revoke-me"] = token
        provider.token_github_users["revoke-me"] = "feriksen"

        await provider.revoke_token(token)
        assert "revoke-me" not in provider.access_tokens
        assert "revoke-me" not in provider.token_github_users

    @pytest.mark.asyncio
    async def test_revoke_unknown_token_is_noop(
        self, provider: HerdOAuthProvider
    ) -> None:
        """Revoking an unknown token does not raise."""
        token = AccessToken(
            token="unknown-token",
            client_id="test-client",
            scopes=[],
        )
        await provider.revoke_token(token)  # Should not raise

    @pytest.mark.asyncio
    async def test_revoke_refresh_token_is_noop(
        self, provider: HerdOAuthProvider
    ) -> None:
        """Revoking a refresh token is a no-op (not supported)."""
        token = RefreshToken(
            token="refresh-noop",
            client_id="test-client",
            scopes=[],
        )
        await provider.revoke_token(token)  # Should not raise


# ---------------------------------------------------------------------------
# GitHub Callback
# ---------------------------------------------------------------------------


class TestGitHubCallback:
    """Tests for the GitHub OAuth callback flow."""

    @pytest.mark.asyncio
    async def test_callback_invalid_state(self, provider: HerdOAuthProvider) -> None:
        """Callback with invalid state returns error."""
        result, error = await provider.handle_github_callback(
            "some-code", "invalid-state"
        )
        assert result is None
        assert "Invalid or expired" in error

    @pytest.mark.asyncio
    async def test_callback_github_code_exchange_failure(
        self,
        provider: HerdOAuthProvider,
        sample_client: OAuthClientInformationFull,
        sample_params: AuthorizationParams,
    ) -> None:
        """Callback fails gracefully when GitHub code exchange fails."""
        # Set up pending auth
        state = "test-github-state"
        provider.pending_auth[state] = PendingAuth(
            client=sample_client,
            params=sample_params,
        )

        with patch.object(provider, "_exchange_github_code", return_value=None):
            result, error = await provider.handle_github_callback("bad-code", state)
        assert result is None
        assert "Failed to exchange" in error

    @pytest.mark.asyncio
    async def test_callback_github_user_fetch_failure(
        self,
        provider: HerdOAuthProvider,
        sample_client: OAuthClientInformationFull,
        sample_params: AuthorizationParams,
    ) -> None:
        """Callback fails gracefully when GitHub user API fails."""
        state = "test-github-state"
        provider.pending_auth[state] = PendingAuth(
            client=sample_client,
            params=sample_params,
        )

        with (
            patch.object(provider, "_exchange_github_code", return_value="gh-token"),
            patch.object(provider, "_get_github_username", return_value=None),
        ):
            result, error = await provider.handle_github_callback("code", state)
        assert result is None
        assert "Failed to retrieve" in error

    @pytest.mark.asyncio
    async def test_callback_unauthorized_user(
        self,
        provider: HerdOAuthProvider,
        sample_client: OAuthClientInformationFull,
        sample_params: AuthorizationParams,
    ) -> None:
        """Callback rejects users not in the allowed list."""
        state = "test-github-state"
        provider.pending_auth[state] = PendingAuth(
            client=sample_client,
            params=sample_params,
        )

        with (
            patch.object(provider, "_exchange_github_code", return_value="gh-token"),
            patch.object(provider, "_get_github_username", return_value="evil-hacker"),
        ):
            result, error = await provider.handle_github_callback("code", state)
        assert result is None
        assert "not authorized" in error

    @pytest.mark.asyncio
    async def test_callback_success(
        self,
        provider: HerdOAuthProvider,
        sample_client: OAuthClientInformationFull,
        sample_params: AuthorizationParams,
    ) -> None:
        """Callback succeeds for an allowed user."""
        state = "test-github-state"
        provider.pending_auth[state] = PendingAuth(
            client=sample_client,
            params=sample_params,
        )

        with (
            patch.object(provider, "_exchange_github_code", return_value="gh-token"),
            patch.object(provider, "_get_github_username", return_value="feriksen"),
        ):
            result, error = await provider.handle_github_callback("code", state)
        assert result is not None
        assert error == ""
        assert "example.com/callback" in result
        assert "code=" in result
        assert "state=test-state-123" in result

    @pytest.mark.asyncio
    async def test_callback_stores_auth_code(
        self,
        provider: HerdOAuthProvider,
        sample_client: OAuthClientInformationFull,
        sample_params: AuthorizationParams,
    ) -> None:
        """Successful callback stores an authorization code."""
        state = "test-github-state"
        provider.pending_auth[state] = PendingAuth(
            client=sample_client,
            params=sample_params,
        )

        with (
            patch.object(provider, "_exchange_github_code", return_value="gh-token"),
            patch.object(provider, "_get_github_username", return_value="feriksen"),
        ):
            await provider.handle_github_callback("code", state)

        assert len(provider.auth_codes) == 1
        code = next(iter(provider.auth_codes.values()))
        assert code.scopes == ["herd:advisor"]
        assert code.client_id == "test-registered-client"

    @pytest.mark.asyncio
    async def test_callback_records_github_username(
        self,
        provider: HerdOAuthProvider,
        sample_client: OAuthClientInformationFull,
        sample_params: AuthorizationParams,
    ) -> None:
        """Successful callback records GitHub username for the auth code."""
        state = "test-github-state"
        provider.pending_auth[state] = PendingAuth(
            client=sample_client,
            params=sample_params,
        )

        with (
            patch.object(provider, "_exchange_github_code", return_value="gh-token"),
            patch.object(provider, "_get_github_username", return_value="feriksen"),
        ):
            await provider.handle_github_callback("code", state)

        assert len(provider.code_github_users) == 1
        username = next(iter(provider.code_github_users.values()))
        assert username == "feriksen"

    @pytest.mark.asyncio
    async def test_callback_consumes_pending_auth(
        self,
        provider: HerdOAuthProvider,
        sample_client: OAuthClientInformationFull,
        sample_params: AuthorizationParams,
    ) -> None:
        """Callback consumes the pending auth entry (replay protection)."""
        state = "test-github-state"
        provider.pending_auth[state] = PendingAuth(
            client=sample_client,
            params=sample_params,
        )

        with (
            patch.object(provider, "_exchange_github_code", return_value="gh-token"),
            patch.object(provider, "_get_github_username", return_value="feriksen"),
        ):
            await provider.handle_github_callback("code", state)

        assert state not in provider.pending_auth


# ---------------------------------------------------------------------------
# Tool Authorization Matrix (HDR-0040)
# ---------------------------------------------------------------------------


class TestToolAuthorization:
    """Tests for the advisor tool whitelist."""

    def test_advisor_tools_are_allowed(self) -> None:
        """All ADVISOR_TOOLS are accepted by is_tool_allowed_for_advisor."""
        for tool in ADVISOR_TOOLS:
            assert is_tool_allowed_for_advisor(tool), f"{tool} should be allowed"

    def test_non_advisor_tools_are_blocked(self) -> None:
        """Non-advisor tools are rejected."""
        blocked_tools = [
            "herd_assign",
            "herd_transition",
            "herd_review",
            "herd_decommission",
            "herd_standdown",
            "herd_harvest_tokens",
            "herd_record_decision",
            "herd_assume",
            "herd_remember",
            "herd_checkin",
            "herd_create_ticket",
            "herd_list_tickets",
        ]
        for tool in blocked_tools:
            assert not is_tool_allowed_for_advisor(tool), f"{tool} should be blocked"

    def test_advisor_tools_count(self) -> None:
        """Verify the exact count of advisor tools matches HDR-0040."""
        assert len(ADVISOR_TOOLS) == 8

    def test_unknown_tool_is_blocked(self) -> None:
        """An unknown tool name is blocked."""
        assert not is_tool_allowed_for_advisor("herd_nonexistent")
        assert not is_tool_allowed_for_advisor("")


# ---------------------------------------------------------------------------
# GitHub API Helpers (mocked)
# ---------------------------------------------------------------------------


class TestGitHubAPIHelpers:
    """Tests for GitHub API helper methods."""

    @pytest.mark.asyncio
    async def test_exchange_github_code_success(
        self, provider: HerdOAuthProvider
    ) -> None:
        """_exchange_github_code returns token on success."""
        mock_response = AsyncMock()
        mock_response.status = 200
        mock_response.json = AsyncMock(return_value={"access_token": "gho_test123"})

        mock_session = AsyncMock()
        mock_session.post = MagicMock(
            return_value=AsyncMock(
                __aenter__=AsyncMock(return_value=mock_response),
                __aexit__=AsyncMock(return_value=False),
            )
        )

        with patch(
            "aiohttp.ClientSession",
            return_value=AsyncMock(
                __aenter__=AsyncMock(return_value=mock_session),
                __aexit__=AsyncMock(return_value=False),
            ),
        ):
            result = await provider._exchange_github_code("test-code")

        assert result == "gho_test123"

    @pytest.mark.asyncio
    async def test_exchange_github_code_http_error(
        self, provider: HerdOAuthProvider
    ) -> None:
        """_exchange_github_code returns None on HTTP error."""
        mock_response = AsyncMock()
        mock_response.status = 500

        mock_session = AsyncMock()
        mock_session.post = MagicMock(
            return_value=AsyncMock(
                __aenter__=AsyncMock(return_value=mock_response),
                __aexit__=AsyncMock(return_value=False),
            )
        )

        with patch(
            "aiohttp.ClientSession",
            return_value=AsyncMock(
                __aenter__=AsyncMock(return_value=mock_session),
                __aexit__=AsyncMock(return_value=False),
            ),
        ):
            result = await provider._exchange_github_code("test-code")

        assert result is None

    @pytest.mark.asyncio
    async def test_exchange_github_code_error_response(
        self, provider: HerdOAuthProvider
    ) -> None:
        """_exchange_github_code returns None on error in response body."""
        mock_response = AsyncMock()
        mock_response.status = 200
        mock_response.json = AsyncMock(return_value={"error": "bad_verification_code"})

        mock_session = AsyncMock()
        mock_session.post = MagicMock(
            return_value=AsyncMock(
                __aenter__=AsyncMock(return_value=mock_response),
                __aexit__=AsyncMock(return_value=False),
            )
        )

        with patch(
            "aiohttp.ClientSession",
            return_value=AsyncMock(
                __aenter__=AsyncMock(return_value=mock_session),
                __aexit__=AsyncMock(return_value=False),
            ),
        ):
            result = await provider._exchange_github_code("test-code")

        assert result is None

    @pytest.mark.asyncio
    async def test_get_github_username_success(
        self, provider: HerdOAuthProvider
    ) -> None:
        """_get_github_username returns login on success."""
        mock_response = AsyncMock()
        mock_response.status = 200
        mock_response.json = AsyncMock(return_value={"login": "feriksen", "id": 12345})

        mock_session = AsyncMock()
        mock_session.get = MagicMock(
            return_value=AsyncMock(
                __aenter__=AsyncMock(return_value=mock_response),
                __aexit__=AsyncMock(return_value=False),
            )
        )

        with patch(
            "aiohttp.ClientSession",
            return_value=AsyncMock(
                __aenter__=AsyncMock(return_value=mock_session),
                __aexit__=AsyncMock(return_value=False),
            ),
        ):
            result = await provider._get_github_username("gho_test")

        assert result == "feriksen"

    @pytest.mark.asyncio
    async def test_get_github_username_http_error(
        self, provider: HerdOAuthProvider
    ) -> None:
        """_get_github_username returns None on HTTP error."""
        mock_response = AsyncMock()
        mock_response.status = 401

        mock_session = AsyncMock()
        mock_session.get = MagicMock(
            return_value=AsyncMock(
                __aenter__=AsyncMock(return_value=mock_response),
                __aexit__=AsyncMock(return_value=False),
            )
        )

        with patch(
            "aiohttp.ClientSession",
            return_value=AsyncMock(
                __aenter__=AsyncMock(return_value=mock_session),
                __aexit__=AsyncMock(return_value=False),
            ),
        ):
            result = await provider._get_github_username("bad-token")

        assert result is None


# ---------------------------------------------------------------------------
# Full OAuth Flow Integration
# ---------------------------------------------------------------------------


class TestFullOAuthFlow:
    """End-to-end tests for the complete OAuth flow (mocked GitHub)."""

    @pytest.mark.asyncio
    async def test_full_flow(self, provider: HerdOAuthProvider) -> None:
        """Test the complete OAuth flow from registration to token use."""
        # Step 1: Register client
        client = OAuthClientInformationFull(
            redirect_uris=["https://claude.ai/callback"],
        )
        await provider.register_client(client)
        assert client.client_id is not None

        # Step 2: Authorize (get GitHub redirect URL)
        params = AuthorizationParams(
            state="flow-state-123",
            scopes=["herd:advisor"],
            code_challenge="flow-challenge",
            redirect_uri=AnyUrl("https://claude.ai/callback"),
            redirect_uri_provided_explicitly=True,
        )
        github_url = await provider.authorize(client, params)
        assert "github.com" in github_url

        # Step 3: Simulate GitHub callback
        # Get the state from pending_auth
        github_state = next(iter(provider.pending_auth.keys()))

        with (
            patch.object(provider, "_exchange_github_code", return_value="gh-token"),
            patch.object(provider, "_get_github_username", return_value="feriksen"),
        ):
            redirect_url, error = await provider.handle_github_callback(
                "github-code", github_state
            )

        assert redirect_url is not None
        assert error == ""

        # Step 4: Load the authorization code
        auth_code_value = next(iter(provider.auth_codes.keys()))
        loaded_code = await provider.load_authorization_code(client, auth_code_value)
        assert loaded_code is not None

        # Step 5: Exchange authorization code for access token
        oauth_token = await provider.exchange_authorization_code(client, loaded_code)
        assert oauth_token.access_token is not None
        assert oauth_token.token_type == "Bearer"

        # Step 6: Verify access token loads correctly
        access = await provider.load_access_token(oauth_token.access_token)
        assert access is not None
        assert access.client_id == client.client_id

        # Step 7: Verify GitHub username is tracked
        assert provider.token_github_users[oauth_token.access_token] == "feriksen"

        # Step 8: Revoke token
        await provider.revoke_token(access)
        assert await provider.load_access_token(oauth_token.access_token) is None
