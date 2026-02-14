---
status: accepted
date: 2026-02-14
decision-maker: Faust
principle: Unix philosophy
scope: architecture
superseded-by: null
---

# Agents become self-driven via Herd REST API

## Context

Subagents spawned via Claude Code's Task tool don't inherit MCP server connections. They can't use `herd_log`, `herd_transition`, or any MCP tool — forcing Mini-Mao to act as message relay for Slack posts, ticket transitions, and status queries. This is the #1 operational friction point.

The Architect approved exposing the full MCP tool surface as HTTP REST endpoints (option 2), then expanded scope: agents should handle their own catchup, ticket lifecycle, Slack posting, and participation in #herd-decisions threads — making them fully autonomous from spawn to completion.

## Decision

The Herd MCP server will expose an HTTP REST API alongside its MCP protocol. All 11+ MCP tools become REST endpoints. Agents interact via simple `curl` calls to `$HERD_API_URL`.

Key shifts:

1. **Self-service catchup**: Agents call `GET /api/catchup` on startup instead of receiving pre-digested context from Mini-Mao
2. **Self-service lifecycle**: Agents transition their own tickets (`POST /api/transition`), post their own Slack updates (`POST /api/log`), and hand off to QA directly
3. **Decision participation**: Agents read and reply to #herd-decisions threads via the API, enabling the cross-agent feedback loop (HDR-0013) without Mini-Mao as intermediary
4. **Thread replies**: The log endpoint supports `channel` + `thread_ts` for replying to existing conversations

Mini-Mao's role shifts from **message relay** to **pure orchestration**: deciding what to assign, when to spawn, and handling cross-agent coordination and escalation. The judgment calls — not the mechanical forwarding.

### Spawn prompt simplification

Before: role file + craft standards + CLAUDE.md + Slack token + curl instructions + "tell Mini-Mao to transition" + pre-digested catchup context

After: role file + craft standards + `HERD_API_URL=http://localhost:8420` + "start with catchup, check your assignment, use the Herd API for everything"

## Alternatives Considered

* CLI wrapper (`python3 -m herd_mcp post "message"`) — rejected: simpler but less capable, doesn't support queries or thread replies
* File-based queue (agents write to `.herd/outbox/`) — rejected: requires polling, no real-time responses, adds complexity

## Consequences

* Agents become fully autonomous from spawn to session end — Good
* Mini-Mao spawn prompts shrink dramatically — Good
* Cross-agent decision participation happens organically without coordination overhead — Good
* MCP server becomes a persistent local service (must be running for agents to function) — Acceptable Tradeoff
* Graceful degradation needed: agents must still function (minus posting) if server is down — Required
* REST API must be project-agnostic for standalone framework extraction (HDR-0012) — Constraint
* Implementation: DBC-130
