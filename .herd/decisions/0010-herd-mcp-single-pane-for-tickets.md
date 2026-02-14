---
status: accepted
date: 2026-02-14
decision-maker: Faust
principle: single source of truth
scope: architecture
superseded-by: null
---

# Herd MCP is the single pane of glass for ticket operations

## Context

During MCP server testing, the workflow for ticket management required 4 separate calls across 2 systems (Linear MCP + Herd MCP + manual DuckDB SQL). Tickets created in Linear didn't exist in DuckDB. Assignments in DuckDB didn't update Linear. Status changes had to be made in both places independently.

## Decision

The Herd MCP server should be the single interface for all ticket lifecycle operations. When an agent calls `herd_assign`, `herd_transition`, or any ticket-related tool, the server must:

1. Create or update the ticket in Linear (via Linear API)
2. Create or update the ticket in DuckDB
3. Keep both systems in sync in a single call

Agents should never need to call the Linear MCP directly for ticket operations. The Herd MCP wraps Linear.

## Alternatives Considered

* Keep Linear MCP and Herd MCP as separate tools, agents call both -- rejected because it's fragmented, error-prone, and creates drift between systems

## Consequences

* Herd MCP needs Linear API integration (API key, GraphQL client) -- adds complexity but removes coordination burden
* Agents make one call instead of four -- significant workflow improvement
* DuckDB becomes the operational audit log while Linear remains the project management view -- both stay in sync
* The Linear MCP remains available for read-only queries (list issues, search) but writes go through Herd MCP
