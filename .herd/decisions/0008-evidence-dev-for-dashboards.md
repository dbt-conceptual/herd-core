---
status: accepted
date: 2026-02-10
decision-maker: Faust
principle: Unix philosophy
scope: architecture
superseded-by: null
---

# Evidence.dev for Herd dashboards

## Context

The Herd needed operational dashboards — agent performance, ticket velocity, QA metrics, cost tracking. The question was whether to build custom frontend (React) or use a tool purpose-built for SQL-to-dashboard.

## Decision

Evidence.dev. SQL + Markdown → dashboards. No custom frontend code needed. Queries run against DuckDB directly. Gauss writes the SQL and markdown, Pikasso doesn't need to touch it.

The dashboards are code — versioned in git, reviewed in PRs, deployed as static pages. This fits the same workflow as everything else in the project.

## Alternatives Considered

* Custom React dashboard (Pikasso) — rejected because it's a large surface area to build and maintain for what amounts to SQL query presentation
* Streamlit — rejected because it requires a running Python server; Evidence compiles to static HTML
* Metabase/Superset — rejected because they require separate infrastructure and don't version in git

## Consequences

* 10 dashboards built and QA'd in a single session — fast time to value
* Deployment to GitHub Pages is straightforward (static output)
* Dashboard changes go through the same PR/QA flow as code
* Gauss (data viz agent) can own the full stack — SQL queries + Evidence markdown
