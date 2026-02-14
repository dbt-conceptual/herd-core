---
status: accepted
date: 2026-02-14
decision-maker: Faust
principle: single pane of glass
scope: architecture
superseded-by: null
---

# Herd MCP must be the single pane for all common agent flows

## Context

HDR-0010 established that ticket operations should sync Linear and DuckDB in one call. The Architect generalized this: any time Mini-Mao or an agent performs multiple fragmented steps to complete a common action, the MCP should be extended to handle it as a single call.

## Decision

The Herd MCP server is the integration layer. Every common workflow that currently requires multiple tools, manual SQL, or coordination across systems should be consolidated into a single MCP tool call. When Mini-Mao notices a fragmented multi-step pattern, propose the MCP extension to the Architect for confirmation before ticketing.

This applies to all flows, not just tickets. Spawning, PR lifecycle, session management, Slack posting, status updates — if agents do it regularly, the MCP should handle it.

## Consequences

* MCP server grows in scope from "operational tracker" to "operational orchestrator" — more code, more integration points
* Agents become simpler — one tool call instead of multi-step coordination
* Mini-Mao's coordination overhead decreases — the MCP handles the plumbing
* Linear API key, GitHub token, and Slack token all live in the MCP server config — single configuration point
