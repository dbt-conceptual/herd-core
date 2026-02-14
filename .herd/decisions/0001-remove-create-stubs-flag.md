---
status: accepted
date: 2026-02-11
decision-maker: Faust
principle: bidirectional by default
scope: cli
superseded-by: null
---

# Remove --create-stubs flag — sync is bidirectional by default

## Context

The `sync` command had a `--create-stubs` flag that controlled whether stub files were generated for concepts that didn't have corresponding dbt models. This made sync's default behavior one-directional (read-only), with stubs as an opt-in.

## Decision

Remove the flag. Sync is bidirectional by default — it always creates stubs. One command, one behavior, predictable outcome. If you don't want stubs, don't run sync. The flag added a mode that made the command's behavior context-dependent, which violates the principle of least surprise.

## Consequences

* Users who relied on `--create-stubs` get the same behavior by default — no migration needed
* CLI becomes simpler — fewer flags, fewer modes, fewer things to explain
* Documentation and help text become cleaner
* Breaking change for users who ran `sync` without the flag and expected no stubs — acceptable tradeoff, the behavior was confusing
