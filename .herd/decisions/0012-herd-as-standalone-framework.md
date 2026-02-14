---
status: accepted
date: 2026-02-14
decision-maker: Faust
principle: modularity
scope: architecture
superseded-by: null
---

# The Herd will be extracted into a standalone, reusable framework

## Context

The Herd currently lives inside the dbt-conceptual repo as `.herd/`. But its components — MCP server, DuckDB operational schema, role files, craft standards, templates, agent coordination — are project-agnostic. Any dbt project (or any software project using AI agents) could use the same framework.

The Architect stated the intent to split the Herd into a separate repository, installable via `pip install` or fetched from GitHub into a target project.

## Decision

The Herd will eventually be extracted into its own repository as a standalone multi-agent coordination framework. This means:

1. All new MCP server features should be built project-agnostic where possible
2. Project-specific configuration (team IDs, agent definitions, state mappings) should be driven by config or init commands, not hardcoded
3. The coupling between Herd infrastructure and DBC-specific code should be minimized
4. Distribution via `pip install` or direct GitHub fetch into a project directory

## Consequences

* New MCP extensions (DBC-125 through 128) should avoid hardcoding DBC-specific values — use config/env
* `seed_db.py` becomes a project-specific init script, not part of the core framework
* Role files and craft standards become templates that projects customize
* Linear integration needs configurable team/project IDs, not hardcoded UUIDs
* The `vault_refresh.py` dbt integration becomes optional/pluggable
* Timeline is "at some point" — not blocking current work, but guiding design choices
