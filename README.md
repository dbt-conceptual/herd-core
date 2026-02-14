# The Herd

**Agent team governance framework.**

Execution-agnostic roles, authority models, decision capture, and craft
standards for AI agent teams.

> Your agent framework runs the agents. The Herd runs the team.

## Status

Alpha release (0.0.1) with full type system, adapter protocols, configuration,
and operational query layer. Tests and CI in place.

## Installation

```bash
pip install herd-core
```

Requires Python 3.10+. Zero external dependencies -- stdlib only.

## What is The Herd?

The Herd is a governance framework for AI agent teams. Most agent frameworks
handle execution -- spawning agents, routing messages, managing tool calls.
The Herd handles everything above that: who can do what, how quality is
enforced, how decisions are captured, and how the team operates as a unit.
It is execution-agnostic. Bring your own agent engine (Claude Code, Codex,
CrewAI, or anything else) and plug it in through a typed adapter protocol.

## Architecture

The Herd uses a **protocol-based adapter design** with five capability
boundaries. Each adapter is a `@runtime_checkable` Protocol (PEP 544),
so implementations use structural subtyping -- no inheritance required.

The type system has two hierarchies:

- **Entity** -- mutable domain records with identity, timestamps, and soft
  deletes. Persisted via `StoreAdapter.save()`, retrieved via `.get()` and
  `.list()`.
- **Event** -- immutable, append-only audit trail records. Written once via
  `StoreAdapter.append()`, never updated or deleted.

### Packages

| Package | Purpose | Adapter |
|---------|---------|---------|
| `herd-core` | Framework interfaces, types, config, queries | -- |
| `herd-store-duckdb` | DuckDB/MotherDuck persistence + dbt schema + Evidence dashboards | StoreAdapter |
| `herd-agent-claude` | Claude Code CLI execution | AgentAdapter |
| `herd-ticket-linear` | Linear.app ticket lifecycle | TicketAdapter |
| `herd-repo-github` | GitHub PRs, branches, commits | RepoAdapter |
| `herd-notify-slack` | Slack messaging | NotifyAdapter |

## Quick Start

```python
from herd_core import (
    HerdConfig,
    AgentRecord,
    TicketRecord,
    LifecycleEvent,
    AgentState,
    TicketPriority,
    OperationalQueries,
    StoreAdapter,
)

# Configure the project
config = HerdConfig(project="my-project")

# Entities are mutable domain records with identity
agent = AgentRecord(
    id="agent-001",
    agent="grunt",
    model="claude-sonnet-4-5",
    ticket_id="PROJ-42",
    state=AgentState.RUNNING,
    branch="herd/grunt/proj-42-fix-auth",
)

ticket = TicketRecord(
    id="PROJ-42",
    title="Fix authentication flow",
    status="in_progress",
    priority=TicketPriority.HIGH,
    labels=["bug", "auth"],
)

# Events are immutable audit trail records
event = LifecycleEvent(
    entity_id="agent-001",
    event_type="started",
    instance_id="agent-001",
    detail="Agent spawned on PROJ-42",
)

# The query layer composes StoreAdapter calls into typed results
def run_queries(store: StoreAdapter) -> None:
    queries = OperationalQueries(store)
    active = queries.active_agents()
    timeline = queries.ticket_timeline("PROJ-42")
    costs = queries.cost_summary()
    blocked = queries.blocked_tickets()
```

## Type Inventory

All 29 public exports from `herd_core`:

| Category | Types |
|----------|-------|
| Entities (7) | `AgentRecord`, `TicketRecord`, `PRRecord`, `DecisionRecord`, `ReviewRecord`, `ModelRecord`, `SprintRecord` |
| Events (5) | `LifecycleEvent`, `TicketEvent`, `PREvent`, `ReviewEvent`, `TokenEvent` |
| Enums (2) | `AgentState`, `TicketPriority` |
| Base classes (2) | `Entity`, `Event` |
| Return types (6) | `SpawnContext`, `SpawnResult`, `TransitionResult`, `PostResult`, `ThreadMessage`, `CommitInfo` |
| Config (1) | `HerdConfig` (with `TicketConfig`, `NotifyConfig`, `AgentConfig`, `StoreConfig`, `RepoConfig`) |
| Protocols (5) | `StoreAdapter`, `AgentAdapter`, `TicketAdapter`, `RepoAdapter`, `NotifyAdapter` |
| Queries (1) | `OperationalQueries` |

## Adapter Protocol Example

Adapters implement the protocol structurally -- no base class needed.
Here is a minimal `StoreAdapter` skeleton:

```python
from __future__ import annotations

from typing import Any, TypeVar

from herd_core import Entity, Event, StoreAdapter

E = TypeVar("E", bound=Entity)


class MyStore:
    """A custom store backend. Implements StoreAdapter structurally."""

    def get(self, entity_type: type[E], id: str) -> E | None:
        ...  # Look up by type and id

    def list(self, entity_type: type[E], **filters: Any) -> list[E]:
        ...  # Query with field-value filters

    def save(self, record: Entity) -> str:
        ...  # Upsert, return id

    def delete(self, entity_type: type[E], id: str) -> None:
        ...  # Soft-delete (set deleted_at)

    def append(self, event: Event) -> None:
        ...  # Append-only, never update

    def count(self, entity_type: type[E], **filters: Any) -> int:
        ...  # Count matching records

    def events(self, event_type: type[Event], **filters: Any) -> list[Event]:
        ...  # Query the activity ledger


# Structural subtyping -- no inheritance, just matching signatures
assert isinstance(MyStore(), StoreAdapter)
```

All five adapter protocols follow this pattern. See
[`herd_core/adapters/`](herd_core/adapters/) for the full protocol
definitions.

## License

MIT
