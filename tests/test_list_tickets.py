"""Tests for herd_list_tickets tool."""

from __future__ import annotations

import asyncio
from unittest.mock import MagicMock

import pytest

from herd_core.types import TicketPriority, TicketRecord
from herd_mcp.adapters import AdapterRegistry
from herd_mcp.tools import list_tickets


@pytest.fixture
def mock_tickets_adapter():
    """Provide a mock TicketAdapter that returns ticket records."""
    adapter = MagicMock()
    return adapter


@pytest.fixture
def registry_with_tickets(mock_tickets_adapter):
    """Provide an AdapterRegistry with ticket adapter."""
    return AdapterRegistry(
        tickets=mock_tickets_adapter,
        write_lock=asyncio.Lock(),
    )


@pytest.fixture
def registry_no_tickets():
    """Provide an AdapterRegistry without ticket adapter."""
    return AdapterRegistry(
        write_lock=asyncio.Lock(),
    )


@pytest.mark.asyncio
async def test_list_tickets_success(registry_with_tickets, mock_tickets_adapter):
    """Test successful ticket listing with tickets returned."""
    # Setup mock to return ticket records
    mock_tickets_adapter.list_tickets.return_value = [
        TicketRecord(
            id="DBC-100",
            title="First ticket",
            description="Description 1",
            status="todo",
            priority=TicketPriority.HIGH,
            assignee="mason",
            labels=["bug"],
            org="herd-ag",
            team="avalon",
            repo=None,
            host="avalon",
        ),
        TicketRecord(
            id="DBC-101",
            title="Second ticket",
            description="Description 2",
            status="in_progress",
            priority=TicketPriority.NORMAL,
            assignee="steve",
            labels=["feature"],
            org="herd-ag",
            team="avalon",
            repo=None,
            host="avalon",
        ),
    ]

    result = await list_tickets.execute(
        status=None,
        assignee=None,
        agent_name="mason",
        registry=registry_with_tickets,
    )

    assert result["success"] is True
    assert result["count"] == 2
    assert len(result["tickets"]) == 2

    # Check first ticket
    assert result["tickets"][0]["id"] == "DBC-100"
    assert result["tickets"][0]["title"] == "First ticket"
    assert result["tickets"][0]["status"] == "todo"
    assert result["tickets"][0]["priority"] == "high"
    assert result["tickets"][0]["assignee"] == "mason"

    # Check second ticket
    assert result["tickets"][1]["id"] == "DBC-101"
    assert result["tickets"][1]["title"] == "Second ticket"
    assert result["tickets"][1]["status"] == "in_progress"
    assert result["tickets"][1]["priority"] == "normal"
    assert result["tickets"][1]["assignee"] == "steve"

    # Verify adapter was called with no filters
    mock_tickets_adapter.list_tickets.assert_called_once_with()


@pytest.mark.asyncio
async def test_list_tickets_empty_result(registry_with_tickets, mock_tickets_adapter):
    """Test listing when no tickets match filters."""
    mock_tickets_adapter.list_tickets.return_value = []

    result = await list_tickets.execute(
        status="done",
        assignee=None,
        agent_name="mason",
        registry=registry_with_tickets,
    )

    assert result["success"] is True
    assert result["count"] == 0
    assert result["tickets"] == []


@pytest.mark.asyncio
async def test_list_tickets_no_adapter(registry_no_tickets):
    """Test error when TicketAdapter is not configured."""
    result = await list_tickets.execute(
        status=None,
        assignee=None,
        agent_name="mason",
        registry=registry_no_tickets,
    )

    assert result["success"] is False
    assert "TicketAdapter not configured" in result["error"]


@pytest.mark.asyncio
async def test_list_tickets_no_registry():
    """Test error when registry is None."""
    result = await list_tickets.execute(
        status=None,
        assignee=None,
        agent_name="mason",
        registry=None,
    )

    assert result["success"] is False
    assert "TicketAdapter not configured" in result["error"]


@pytest.mark.asyncio
async def test_list_tickets_adapter_error(registry_with_tickets, mock_tickets_adapter):
    """Test graceful handling when adapter raises an exception."""
    mock_tickets_adapter.list_tickets.side_effect = Exception("Linear API timeout")

    result = await list_tickets.execute(
        status=None,
        assignee=None,
        agent_name="mason",
        registry=registry_with_tickets,
    )

    assert result["success"] is False
    assert "Adapter error" in result["error"]
    assert "Linear API timeout" in result["error"]


@pytest.mark.asyncio
async def test_list_tickets_priority_enum_conversion(
    registry_with_tickets, mock_tickets_adapter
):
    """Test that priority enum values are converted to strings correctly."""
    mock_tickets_adapter.list_tickets.return_value = [
        TicketRecord(
            id="DBC-200",
            title="Urgent ticket",
            description=None,
            status="todo",
            priority=TicketPriority.URGENT,
            assignee=None,
            labels=[],
            org="herd-ag",
            team="avalon",
            repo=None,
            host="avalon",
        ),
        TicketRecord(
            id="DBC-201",
            title="Low priority ticket",
            description=None,
            status="todo",
            priority=TicketPriority.LOW,
            assignee=None,
            labels=[],
            org="herd-ag",
            team="avalon",
            repo=None,
            host="avalon",
        ),
        TicketRecord(
            id="DBC-202",
            title="No priority ticket",
            description=None,
            status="todo",
            priority=TicketPriority.NONE,
            assignee=None,
            labels=[],
            org="herd-ag",
            team="avalon",
            repo=None,
            host="avalon",
        ),
    ]

    result = await list_tickets.execute(
        status=None,
        assignee=None,
        agent_name="mason",
        registry=registry_with_tickets,
    )

    assert result["success"] is True
    assert result["count"] == 3
    assert result["tickets"][0]["priority"] == "urgent"
    assert result["tickets"][1]["priority"] == "low"
    assert result["tickets"][2]["priority"] == "none"


@pytest.mark.asyncio
async def test_list_tickets_priority_int_conversion(
    registry_with_tickets, mock_tickets_adapter
):
    """Test that integer priority values are converted to strings correctly."""
    # Create a mock ticket record with raw int priority (not enum)
    mock_ticket = MagicMock()
    mock_ticket.id = "DBC-300"
    mock_ticket.title = "Test ticket"
    mock_ticket.status = "todo"
    mock_ticket.priority = 2  # Raw int instead of enum
    mock_ticket.assignee = None

    mock_tickets_adapter.list_tickets.return_value = [mock_ticket]

    result = await list_tickets.execute(
        status=None,
        assignee=None,
        agent_name="mason",
        registry=registry_with_tickets,
    )

    assert result["success"] is True
    assert result["tickets"][0]["priority"] == "high"


@pytest.mark.asyncio
async def test_list_tickets_filters_passed_through(
    registry_with_tickets, mock_tickets_adapter
):
    """Test that status and assignee filters are correctly passed to adapter."""
    mock_tickets_adapter.list_tickets.return_value = []

    # Test with status filter only
    await list_tickets.execute(
        status="in_progress",
        assignee=None,
        agent_name="mason",
        registry=registry_with_tickets,
    )
    mock_tickets_adapter.list_tickets.assert_called_with(status="in_progress")

    # Test with assignee filter only
    mock_tickets_adapter.list_tickets.reset_mock()
    await list_tickets.execute(
        status=None,
        assignee="mason",
        agent_name="mason",
        registry=registry_with_tickets,
    )
    mock_tickets_adapter.list_tickets.assert_called_with(assignee="mason")

    # Test with both filters
    mock_tickets_adapter.list_tickets.reset_mock()
    await list_tickets.execute(
        status="todo",
        assignee="steve",
        agent_name="mason",
        registry=registry_with_tickets,
    )
    mock_tickets_adapter.list_tickets.assert_called_with(
        status="todo", assignee="steve"
    )

    # Test with no filters
    mock_tickets_adapter.list_tickets.reset_mock()
    await list_tickets.execute(
        status=None,
        assignee=None,
        agent_name="mason",
        registry=registry_with_tickets,
    )
    mock_tickets_adapter.list_tickets.assert_called_with()
