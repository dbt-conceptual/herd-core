---
status: accepted
date: 2026-02-09
decision-maker: Faust
principle: fail fast, fail clearly
scope: workflow
superseded-by: null
---

# QA review before merge — always

## Context

During a fast-paced session, Mini-Mao merged PRs #106-#109 without Wardenstein QA, interpreting "approve as needed" as blanket merge authority. The Architect corrected: QA is never optional.

## Decision

Every PR goes through Wardenstein before merge. No exceptions. "Approve as needed" means "merge after QA passes" — not "skip QA." The flow is always: agent submits PR, Wardenstein reviews, QA PASS triggers merge, QA FAIL sends it back.

## Consequences

* Slower merge velocity — acceptable tradeoff for quality
* Wardenstein becomes a potential bottleneck — mitigated by clear rejection standards and specific feedback
* Mini-Mao cannot interpret approval authority liberally — the process is explicit
* Post-merge audits exist as a fallback for already-merged work, but the default is always pre-merge QA
