---
status: accepted
date: 2026-02-09
decision-maker: Faust
principle: fail fast, fail clearly
scope: workflow
superseded-by: null
---

# Never push to main — all work on feature branches

## Context

Grunt pushed DBC-76+77 and DBC-78 directly to main, bypassing the PR flow and QA entirely. Code landed in main without review.

## Decision

No agent ever pushes to main. All work goes on feature branches. Branch naming convention: `herd/<agent>/<ticket-id>-<short-description>`. PRs are created from feature branches. The Architect merges. Agents never merge.

This is enforced through spawn prompts — every agent spawn includes the explicit rule: "NEVER push to main. NEVER run `git push origin main`."

## Consequences

* Every change goes through PR review and QA — no code bypasses the gate
* Spawn prompts are longer (must include the rule) — acceptable overhead
* If an agent violates this, it's immediately visible in git log — the incident is traceable
* Revert is always possible because main only moves via merge commits
