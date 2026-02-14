---
status: accepted
date: 2026-02-07
decision-maker: Faust
principle: informed ownership
scope: herd
superseded-by: null
---

# 100% AI-generated codebase

## Context

dbt-conceptual is built entirely by AI agents coordinated through The Herd. The Architect (Faust) designs, decides, and reviews. The agents implement.

## Decision

Every line of code is AI-generated. The Architect writes no code directly. This is a deliberate experiment in AI-assisted software development — testing the boundaries of what's possible when humans architect and AI implements.

This isn't about replacing developers. It's about understanding where the leverage is. The Architect's value is in design decisions, quality judgment, and architectural direction. The agents' value is in consistent execution against governed standards.

## Consequences

* Proves AI can produce production-quality code under architectural governance
* Requires rigorous craft standards (craft.md) to maintain quality without human code review of every line
* QA (Wardenstein) becomes critical — the final gate before code ships
* Every commit is attributed to the implementing agent via commit prefix ([grunt], [pikasso], etc.)
* The Architect must review PRs for architectural drift, not syntax — fundamentally different review posture
