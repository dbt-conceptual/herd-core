---
status: accepted
date: 2026-02-09
decision-maker: Faust
principle: Principles > Capabilities > Implementation > Technology
scope: architecture
superseded-by: null
---

# Data Vault 2.0 for Herd MCP analytics

## Context

The Herd MCP Server needed a data model to store agent activity, ticket lifecycle, and operational metrics. The question was what modeling approach to use for the DuckDB analytics layer.

## Decision

Data Vault 2.0. Hubs for business keys (agent, ticket, session, skill, craft_standard, finding, decision). Satellites for descriptive attributes with SCD Type 2. Links for relationships. Insert-only ledger pattern with content-addressable versioning via hashdiffs.

This gives temporal history out of the box — we can see how any entity changed over time. The mart layer (dimensions and facts) provides the query-friendly interface.

## Alternatives Considered

* Flat tables — rejected because no temporal history, can't track entity changes over time
* Star schema directly — rejected because it conflates staging and presentation; harder to add new sources later
* Event sourcing — considered but overkill for the volume; Data Vault gives us the temporal benefits without the complexity

## Consequences

* Full audit trail of all agent activity — every state change is preserved
* More tables than a flat approach (28 tables across app, vault, and mart layers)
* DuckDB handles the volume easily — no performance concern at Herd scale
* The medallion architecture (bronze → silver → gold) provides clear data flow
