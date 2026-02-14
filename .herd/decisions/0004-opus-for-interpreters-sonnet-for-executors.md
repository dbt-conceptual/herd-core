---
status: accepted
date: 2026-02-10
decision-maker: Faust
principle: Principles > Capabilities > Implementation > Technology
scope: herd
superseded-by: null
---

# Opus for interpreters, Sonnet for executors

## Context

Running all agents on Opus is expensive. Token costs were roughly 5x higher than needed for implementation agents that follow clear specs.

## Decision

Divide the roster by cognitive demand. If the agent interprets, judges, or synthesizes — Opus. If the agent executes against governed standards — Sonnet.

**Opus**: Mini-Mao (coordination, judgment, tradeoffs), Wardenstein (deep reasoning, pattern detection), Shakesquill (synthesis, voice interpretation).

**Sonnet**: Grunt (structured implementation), Pikasso (component building), Gauss (analytical SQL, governed charts).

## Alternatives Considered

* All Opus — rejected because implementation agents don't need that level of reasoning for structured tasks
* All Sonnet — rejected because coordination and QA require deeper judgment

## Consequences

* Roughly halves implementation agent costs
* Sonnet agents need clearer specs and more context in spawn prompts — they follow instructions well but don't improvise as effectively
* QA remains Opus-level thorough — the gate doesn't get cheaper
* Model assignments documented in MEMORY.md and enforced in spawn prompts
