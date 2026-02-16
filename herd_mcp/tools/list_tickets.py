"""Ticket listing tool implementation."""

from __future__ import annotations

import logging
from typing import TYPE_CHECKING

from herd_core.types import TicketPriority

if TYPE_CHECKING:
    from herd_mcp.adapters import AdapterRegistry

logger = logging.getLogger(__name__)

# Map priority enum values to human-readable strings.
PRIORITY_NAMES: dict[int, str] = {
    0: "none",
    1: "urgent",
    2: "high",
    3: "normal",
    4: "low",
}


async def execute(
    status: str | None,
    assignee: str | None,
    agent_name: str | None,
    registry: AdapterRegistry | None = None,
) -> dict:
    """List open/active tickets from the TicketAdapter.

    Args:
        status: Optional status filter (e.g., "backlog", "todo", "in_progress").
        assignee: Optional assignee filter (agent name or user ID).
        agent_name: Calling agent identity.
        registry: Optional adapter registry for dependency injection.

    Returns:
        Dict with list of tickets and count.
    """
    if not registry or not registry.tickets:
        return {"success": False, "error": "TicketAdapter not configured"}

    # Build filters dict
    filters: dict[str, str] = {}
    if status:
        filters["status"] = status
    if assignee:
        filters["assignee"] = assignee

    # Fetch tickets via adapter
    try:
        ticket_records = registry.tickets.list_tickets(**filters)
    except Exception as e:
        logger.warning("Failed to list tickets via adapter: %s", e)
        return {"success": False, "error": f"Adapter error: {e}"}

    # Transform TicketRecord objects to simple dicts
    tickets = []
    for rec in ticket_records:
        # Convert priority enum to string if it's an enum
        priority_str = "none"
        if isinstance(rec.priority, TicketPriority):
            priority_str = PRIORITY_NAMES.get(rec.priority.value, "none")
        elif isinstance(rec.priority, int):
            priority_str = PRIORITY_NAMES.get(rec.priority, "none")

        tickets.append(
            {
                "id": rec.id,
                "title": rec.title,
                "status": rec.status,
                "priority": priority_str,
                "assignee": rec.assignee,
            }
        )

    return {
        "success": True,
        "count": len(tickets),
        "tickets": tickets,
    }
