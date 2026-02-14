---
status: accepted
date: 2026-02-14
decision-maker: Faust
principle: self-sufficient agents
scope: workflow
superseded-by: null
---

# All agents must be aware of MCP and docs, and report inconsistencies

## Context

As the Herd grows — more agents, more tools, more documentation — agents were operating without awareness of the MCP server's capabilities or the system documentation. They'd ask questions that were already answered in docs, or miss using available tooling.

## Decision

Every agent must be aware of:

1. **The Herd MCP Server** — what tools it provides (herd_log, herd_status, herd_transition, etc.) and when to use them instead of manual alternatives.
2. **The Herd documentation** (`.herd/docs/`) — system docs covering overview, agents, workflow, HDR, templates, MCP server, schema, and dashboards.
3. **The project documentation** — `CLAUDE.md` and `docs/` for dbt-conceptual specifics.

If an agent finds an inconsistency between documentation and actual code/behavior — something that doesn't work as documented, a schema that doesn't match the reference, a command that behaves differently than described — they report it to Mini-Mao. Mini-Mao creates a bug ticket and informs the Architect. Agents do not fix inconsistencies themselves (unless they are the assigned agent for that fix).

## Consequences

* Agents become more self-sufficient — consult docs before escalating questions
* Inconsistencies get caught systematically instead of silently accumulating
* MCP tools get used instead of manual workarounds (e.g., herd_log vs raw curl)
* Adds to spawn prompt length and agent startup time (acceptable tradeoff)
