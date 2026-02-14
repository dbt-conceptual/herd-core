---
status: accepted
date: 2026-02-14
decision-maker: Faust
principle: feedback loops
scope: architecture
superseded-by: null
---

# Agent Decision Records flow through Slack for human feedback

## Context

Agents record implementation decisions in `herd.decision_record` (DuckDB), but these are invisible to humans. The Architect has no way to review, correct, or add context to agent reasoning without being in the session. Agent decisions happen in isolation — good or bad, they persist without oversight until QA catches downstream effects.

## Decision

Agent Decision Records get a Slack feedback loop:

1. **On record**: When an agent writes a `decision_record` to DuckDB, also post it to `#herd-decisions` channel. Include: decision type, context, what was decided, rationale, ticket reference.

2. **On catchup**: When an agent runs `herd_catchup`, also scan `#herd-decisions` for threads relevant to that agent (by mention, ticket, or topic). Fetch human replies AND other agent replies from those threads.

3. **Cross-agent participation**: Any agent can read and reply to threads in `#herd-decisions`, not just the original poster. This creates cross-agent learning — Grunt posts a decision, Wardenstein pushes back, Pikasso reads the thread on catchup and learns the pattern. The channel is a collaborative reasoning space.

4. **Summarize, don't dump**: The raw thread content is not useful to agents. Produce a compact, actionable summary that guides the agent's current task. Not "here are 12 messages" — instead: "Your decision X was approved with note Y. Wardenstein flagged concern Z. Decision W was corrected by Architect: use A instead of B."

5. **Long-term memory**: The summary becomes part of the agent's operational context. Decisions + human commentary + peer agent feedback, distilled into guidance. The DuckDB record is the system of record; Slack is the feedback channel; the summary is the working memory.

## Consequences

* Architect gains async oversight of agent reasoning without being in every session
* Human corrections propagate to agents on next catchup — no need to wait for QA rejection
* Agents build better instincts over time — repeated corrections on similar decisions create patterns
* `#herd-decisions` becomes a reviewable log of all agent reasoning across the project
* MCP needs: enhance `herd_catchup` to scan `#herd-decisions`, add a `herd_record_decision` tool (or extend existing recording to auto-post)
* Summarization quality is critical — too verbose wastes context, too terse loses signal
