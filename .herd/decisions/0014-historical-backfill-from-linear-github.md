---
status: accepted
date: 2026-02-14
decision-maker: Faust
principle: completeness
scope: data
superseded-by: null
---

# Backfill HerdDB with historical data from Linear and GitHub

## Context

The Herd DuckDB only contains tickets and activity from the current session. Historical tickets (DBC-1 through DBC-119), PRs (#84 through #124), and project data exist in Linear and GitHub but not in DuckDB. This makes dashboards and metrics show only a thin slice of reality.

## Decision

Add a backfill capability that reads historical data from Linear and GitHub and populates HerdDB. Use a sentinel agent instance (`backfill-000`) for all historical records to distinguish them from live operational data.

### What gets backfilled

- **From Linear**: tickets (`ticket_def`), projects (`project_def`), initiatives (`initiative_def`), status history where available
- **From GitHub**: PRs (`pr_def`), commits (`agent_instance_pr_activity`), merge timestamps
- **Agent attribution**: Infer from branch prefix — `herd/grunt/*` → agent_code `grunt`, etc.

### What does NOT get backfilled

- Token costs (`agent_instance_token_activity`) — we don't have historical session data
- Agent instance sessions — only the sentinel `backfill-000` exists
- Review findings — would require parsing PR comments, not worth the complexity

### The zero-key pattern

All backfilled activity records use `agent_instance_code = 'backfill-000'`. This preserves referential integrity without claiming a real agent session.

### The is_historical flag

Add `is_historical` as a flag/attribute in:
- Vault-related (DWH) tables — so the transformation layer carries the distinction
- Dimension tables — so dashboards can filter easily

Cost-based dashboards MUST filter `WHERE is_historical = false` (no token cost data for historical records). Velocity, throughput, and lifecycle dashboards CAN include historical data for full project visibility.

### Idempotency

Backfill uses upsert (insert if missing, update if changed). Safe to re-run.

## Consequences

* Dashboards show full project history from day one
* Velocity and throughput metrics become meaningful
* Cost dashboards correctly exclude historical records (no token data)
* Backfill is a separate task/script, not part of normal MCP operations
* `is_historical` flag in dimensions makes filtering trivial for Gauss
* Linear API pagination needed (may hit rate limits on large backlogs)
* GitHub API pagination needed (commits, PRs)
