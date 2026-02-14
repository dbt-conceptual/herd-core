---
status: accepted
date: 2026-02-14
decision-maker: Faust
principle: "separation of concerns — interfaces in core, implementations in adapters"
scope: architecture
superseded-by: null
---

# Package split: core defines interfaces, adapters implement, MCP server delegates

## Context

During herd-core readiness work, the Architect confirmed the package split mapping. The question was where each piece of the current dbt-conceptual `.herd/` infrastructure lands when extracted into separate packages.

## Decision

herd-core owns the MCP server runtime and the 5 adapter protocols. The server exposes tools (herd_log, herd_spawn, herd_transition, etc.) and delegates to whichever adapter implementations are configured. It never touches DuckDB, Linear, Slack, or GitHub directly.

The split:

| Current location (dbt-conceptual) | Target package | What it implements |
|---|---|---|
| `.herd/dbt/` (schema models) | `herd-store-duckdb` | Schema definition |
| `.herd/evidence/` (dashboards) | `herd-store-duckdb` | Observability layer |
| `.herd/mcp/` DuckDB read/write | `herd-store-duckdb` | StoreAdapter |
| `.herd/mcp/` Linear API calls | `herd-ticket-linear` | TicketAdapter |
| `.herd/mcp/` Slack posting | `herd-notify-slack` | NotifyAdapter |
| `.herd/mcp/` GitHub PR/branch ops | `herd-repo-github` | RepoAdapter |
| `.herd/mcp/` agent spawning logic | `herd-agent-claude` | AgentAdapter |
| `.herd/mcp/` FastMCP server + tool handlers | `herd-core` | Orchestration surface |

The store package (`herd-store-duckdb`) is notably rich: it ships the dbt models (schema), the StoreAdapter implementation (persistence), and the Evidence dashboards (observability). Everything that touches DuckDB lives together.

## Consequences

* Good — each adapter is independently installable and testable
* Good — herd-core has zero external dependencies; all integration complexity lives in adapters
* Good — the store package is self-contained: schema + persistence + dashboards
* Acceptable tradeoff — `.herd/mcp/` must be decomposed carefully; current code has cross-cutting concerns that need untangling
