# The Herd

**Agent team governance framework.**

Execution-agnostic roles, authority models, decision capture, and craft
standards for AI agent teams.

> Your agent framework runs the agents. The Herd runs the team.

## Status

Pre-release — package name reserved. First functional release coming soon.

## What is The Herd?

The Herd is a governance framework for AI agent teams. It provides:

- **Canonical role definitions** with authority boundaries
- **Craft standards** that shape how agents work, not just what they do
- **Decision capture** (HDR — Herd Decision Records) from natural conversation
- **Pluggable execution** — bring your own agent engine (Claude Code, Codex, CrewAI, or anything else)
- **Team topology** — multi-team, multi-machine, multi-engine in one config file
- **QA gates** with tiered validation (automated + architectural review)

## Architecture

The Herd is modular by design:

| Package | Purpose |
|---------|---------|
| `herd-core` | Core framework, interfaces, topology, roles, HDR, craft |
| `herd-agent-claude` | Execution adapter for Claude Code CLI |
| `herd-store-duckdb` | Storage adapter (local DuckDB + MotherDuck) |
| `herd-ticket-linear` | Ticket lifecycle adapter (reference implementation) |
| `herd-repo-github` | Repository operations (PRs, branches, commits) |
| `herd-notify-slack` | Notification output |

## Quick Start (coming soon)

```bash
pip install herd-core herd-agent-claude herd-store-duckdb
herd init
```

## License

MIT
