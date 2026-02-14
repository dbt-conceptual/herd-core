---
status: accepted
date: 2026-02-14
decision-maker: Faust
principle: Unix philosophy
scope: architecture
superseded-by: null
---

# Mini-Mao activates from Slack via persistent MCP daemon

## Context

The Architect currently directs the Herd by opening VSCode, starting a Claude Code session, and typing commands. This requires being at a workstation with the IDE open. The MCP server (DBC-130) is becoming a persistent daemon with a REST API. The Architect asked: can posting in a Slack channel automatically fire up Mini-Mao?

## Decision

The Herd MCP server will run as a persistent local daemon with a Slack Socket Mode client. When the Architect posts in `#mao`, the daemon spawns a Mini-Mao session via the Claude Code CLI (local, uses the Architect's subscription). The session stays alive until idle timeout or explicit termination.

### Architecture

```
Slack (#mao)  ←→  Socket Mode  ←→  MCP Daemon  →  claude CLI  →  Mini-Mao session
                                         ↕                              ↕
                                      DuckDB                    Sub-agents (Grunt, etc.)
                                         ↕                              ↕
                                    REST API  ←←←←←←←←←←←←←←←  curl $HERD_API_URL
```

### Activation flow

1. MCP daemon runs as `launchd` service (macOS), always listening
2. Slack Socket Mode connects to Slack workspace — no public URL needed
3. Architect posts in `#mao` channel
4. Daemon receives event, spawns `claude` CLI process with Mini-Mao context
5. Mini-Mao does catchup, reads the message, responds
6. Response piped back to the Slack thread
7. Conversation continues in-thread: one thread = one session

### Session lifecycle

- **Start**: Any message in `#mao` from an authorized user
- **Active**: Mini-Mao responds in thread, spawns sub-agents as normal
- **End** (any of):
  - **Idle timeout**: 2-3 minutes of silence → graceful shutdown (session log, summary post)
  - **Explicit sleep**: "go to sleep" / "stand down" → graceful shutdown with acknowledgment
  - **Explicit terminate**: "terminate now" → immediate stop, minimal ceremony
- **Daemon persists**: Session ending does NOT stop the daemon. Daemon runs until explicitly stopped or machine reboots.

### Key design choices

- **Claude Code CLI** (not API): Uses the Architect's existing subscription. No separate API costs. Runs locally with full tool access.
- **Socket Mode** (not webhooks): No public endpoint needed. Works behind NAT/firewall. Slack pushes events via WebSocket.
- **Thread-scoped sessions**: Each Slack thread is an independent Mini-Mao session. Multiple threads can run concurrently.
- **Auth**: Only respond to messages from authorized Slack user IDs (configured in daemon config).

### Dependencies

- DBC-130: REST API (so sub-agents can communicate back)
- HDR-0015: Self-driven agents via REST (so spawned agents operate autonomously)
- `slack_sdk` Python package (Socket Mode support built in)
- `claude` CLI available on PATH

## Alternatives Considered

- Slack webhooks — rejected: requires public URL (ngrok or cloud), fragile, unnecessary complexity
- Anthropic API directly — rejected: doesn't use subscription, loses Claude Code tool ecosystem
- Discord/other platform — rejected: team already uses Slack, no reason to fragment

## Consequences

* Architect can direct the Herd from phone, tablet, anywhere — Good
* No IDE needed for routine operations — Good
* Full audit trail in Slack threads — Good
* Requires MCP daemon running as persistent service — Acceptable Tradeoff
* `slack_sdk` becomes a new dependency — Acceptable Tradeoff
* Claude Code CLI must be installed and authenticated on the machine — Constraint
* Security: daemon only responds to configured Slack user IDs — Required
* Implementation: needs new ticket (DBC-132 or similar)
