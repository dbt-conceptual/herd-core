---
status: accepted
date: 2026-02-07
decision-maker: Faust
principle: Principles > Capabilities > Implementation > Technology
scope: architecture
superseded-by: null
---

# conceptual.yml is the single source of truth

## Context

The conceptual model needed a canonical home. Options were: store it in dbt meta tags, in a separate database, in multiple YAML files, or in a single dedicated file.

## Decision

`conceptual.yml` in the project root is the single source of truth for the conceptual model. Everything flows from it — dbt model stubs, governance metadata, validation, diagrams, coverage. It's YAML, it's versioned in git, it diffs cleanly in PRs, and it requires no special tooling to read.

The file defines domains, concepts, relationships, and governance in one place. dbt models reference concepts via tags. The scanner reads both to produce state.

## Alternatives Considered

* dbt meta tags as primary — rejected because governance metadata would be scattered across hundreds of model files with no single view
* Database storage — rejected because it introduces infrastructure and breaks git-native workflow
* Multiple files per domain — rejected for now (planned as future feature when models exceed 40+ concepts)

## Consequences

* Simple mental model — one file to understand the whole conceptual layer
* Git-friendly — PRs show exactly what changed in the conceptual model
* Scales to ~40 concepts comfortably; beyond that, multi-file support will be needed
* All tooling (validate, export, sync, serve) reads from one canonical location
