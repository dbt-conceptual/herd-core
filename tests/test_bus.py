"""Tests for DiskCache-backed persistent message bus."""

from __future__ import annotations

from datetime import UTC, datetime, timedelta
from pathlib import Path

import pytest

from herd_mcp.bus import (
    LEADER_AGENTS,
    MAX_MESSAGE_AGE,
    MECHANICAL_AGENTS,
    Message,
    MessageBus,
    ParsedAddress,
    parse_address,
)

# ---------------------------------------------------------------------------
# Address parsing tests
# ---------------------------------------------------------------------------


class TestParseAddress:
    """Test address parsing for all seven documented formats."""

    def test_agent_only(self) -> None:
        """Parse bare agent name: mason."""
        result = parse_address("mason")
        assert result == ParsedAddress(agent="mason", instance=None, team=None)

    def test_agent_with_team(self) -> None:
        """Parse agent@team: mason@avalon."""
        result = parse_address("mason@avalon")
        assert result == ParsedAddress(agent="mason", instance=None, team="avalon")

    def test_agent_instance_team(self) -> None:
        """Parse agent.instance@team: mason.inst-abc@avalon."""
        result = parse_address("mason.inst-abc@avalon")
        assert result == ParsedAddress(
            agent="mason", instance="inst-abc", team="avalon"
        )

    def test_anyone_bare(self) -> None:
        """Parse @anyone broadcast."""
        result = parse_address("@anyone")
        assert result == ParsedAddress(agent="@anyone", instance=None, team=None)

    def test_anyone_with_team(self) -> None:
        """Parse @anyone@avalon broadcast with team scope."""
        result = parse_address("@anyone@avalon")
        assert result == ParsedAddress(agent="@anyone", instance=None, team="avalon")

    def test_everyone_bare(self) -> None:
        """Parse @everyone broadcast."""
        result = parse_address("@everyone")
        assert result == ParsedAddress(agent="@everyone", instance=None, team=None)

    def test_everyone_with_team(self) -> None:
        """Parse @everyone@avalon broadcast with team scope."""
        result = parse_address("@everyone@avalon")
        assert result == ParsedAddress(agent="@everyone", instance=None, team="avalon")


# ---------------------------------------------------------------------------
# Message serialization tests
# ---------------------------------------------------------------------------


class TestMessageSerialization:
    """Test Message to_dict / from_dict round-trip."""

    def test_round_trip(self) -> None:
        """Serialize and deserialize preserves all fields."""
        msg = Message(
            id="abc123",
            from_addr="steve@avalon",
            to_addr="mason@avalon",
            body="build the thing",
            type="directive",
            priority="urgent",
            sent_at=datetime(2026, 2, 16, 12, 0, 0, tzinfo=UTC),
            read_by={"inst-1", "inst-2"},
        )
        data = msg.to_dict()
        restored = Message.from_dict(data)

        assert restored.id == msg.id
        assert restored.from_addr == msg.from_addr
        assert restored.to_addr == msg.to_addr
        assert restored.body == msg.body
        assert restored.type == msg.type
        assert restored.priority == msg.priority
        assert restored.sent_at == msg.sent_at
        assert restored.read_by == msg.read_by

    def test_from_dict_defaults(self) -> None:
        """Missing optional fields get sensible defaults."""
        data = {
            "id": "xyz",
            "from_addr": "steve",
            "to_addr": "mason",
            "body": "hello",
            "sent_at": datetime.now(UTC).isoformat(),
        }
        msg = Message.from_dict(data)
        assert msg.type == "inform"
        assert msg.priority == "normal"
        assert msg.read_by == set()


# ---------------------------------------------------------------------------
# MessageBus send/read tests (with DiskCache)
# ---------------------------------------------------------------------------


@pytest.fixture
def bus_path(tmp_path: Path) -> Path:
    """Provide a temporary directory for DiskCache storage."""
    return tmp_path / "messages"


class TestMessageBusSendRead:
    """Test basic send and read cycle."""

    @pytest.mark.asyncio
    async def test_direct_send_read(self, bus_path: Path) -> None:
        """Send to mason, read as mason returns the message."""
        bus = MessageBus(storage_path=bus_path)
        msg = await bus.send("steve@avalon", "mason", "build the thing")

        assert msg.id
        assert msg.from_addr == "steve@avalon"
        assert msg.to_addr == "mason"
        assert msg.body == "build the thing"
        assert msg.priority == "normal"

        inbox = await bus.read("mason")
        assert len(inbox) == 1
        assert inbox[0].id == msg.id
        bus.close()

    @pytest.mark.asyncio
    async def test_direct_message_consumed(self, bus_path: Path) -> None:
        """Direct messages are consumed on read and not returned again."""
        bus = MessageBus(storage_path=bus_path)
        await bus.send("steve", "mason", "first task")

        first_read = await bus.read("mason")
        assert len(first_read) == 1

        second_read = await bus.read("mason")
        assert len(second_read) == 0
        bus.close()

    @pytest.mark.asyncio
    async def test_empty_inbox(self, bus_path: Path) -> None:
        """Reading with no pending messages returns empty list."""
        bus = MessageBus(storage_path=bus_path)
        inbox = await bus.read("mason")
        assert inbox == []
        bus.close()

    @pytest.mark.asyncio
    async def test_message_not_delivered_to_wrong_agent(self, bus_path: Path) -> None:
        """Messages to mason are not delivered to fresco."""
        bus = MessageBus(storage_path=bus_path)
        await bus.send("steve", "mason", "for mason only")

        inbox = await bus.read("fresco")
        assert len(inbox) == 0

        # mason should still get it
        inbox = await bus.read("mason")
        assert len(inbox) == 1
        bus.close()


# ---------------------------------------------------------------------------
# Persistence tests (survive restart)
# ---------------------------------------------------------------------------


class TestPersistence:
    """Test that messages survive simulated MCP server restarts."""

    @pytest.mark.asyncio
    async def test_messages_survive_restart(self, bus_path: Path) -> None:
        """Messages sent before shutdown are available after restart."""
        # Session 1: send messages
        bus1 = MessageBus(storage_path=bus_path)
        await bus1.send("steve@avalon", "mason", "task alpha")
        await bus1.send("steve@avalon", "mason", "task beta")
        bus1.close()

        # Session 2: new bus instance (simulates restart)
        bus2 = MessageBus(storage_path=bus_path)
        inbox = await bus2.read("mason")
        assert len(inbox) == 2
        bodies = {m.body for m in inbox}
        assert "task alpha" in bodies
        assert "task beta" in bodies
        bus2.close()

    @pytest.mark.asyncio
    async def test_consumed_messages_not_rehydrated(self, bus_path: Path) -> None:
        """Messages consumed before shutdown are not returned after restart."""
        # Session 1: send and consume
        bus1 = MessageBus(storage_path=bus_path)
        await bus1.send("steve", "mason", "consumed task")
        inbox = await bus1.read("mason")
        assert len(inbox) == 1
        bus1.close()

        # Session 2: should be empty
        bus2 = MessageBus(storage_path=bus_path)
        inbox = await bus2.read("mason")
        assert len(inbox) == 0
        bus2.close()

    @pytest.mark.asyncio
    async def test_expired_messages_pruned_on_rehydrate(self, bus_path: Path) -> None:
        """Expired messages are not rehydrated after restart."""
        # Session 1: manually insert an expired message via disk
        bus1 = MessageBus(storage_path=bus_path)
        expired_msg = Message(
            id="expired-1",
            from_addr="steve",
            to_addr="mason",
            body="old news",
            sent_at=datetime.now(UTC) - MAX_MESSAGE_AGE - timedelta(minutes=5),
        )
        bus1._disk[expired_msg.id] = expired_msg.to_dict()
        bus1.close()

        # Session 2: expired message should not appear
        bus2 = MessageBus(storage_path=bus_path)
        inbox = await bus2.read("mason")
        assert len(inbox) == 0
        # Verify it was cleaned from disk too
        assert expired_msg.id not in bus2._disk
        bus2.close()

    @pytest.mark.asyncio
    async def test_everyone_read_by_survives_restart(self, bus_path: Path) -> None:
        """@everyone read_by tracking persists across restarts."""
        # Session 1: send broadcast, mason reads it
        bus1 = MessageBus(storage_path=bus_path)
        await bus1.send("steve", "@everyone", "standup in 5")
        await bus1.read("mason", instance="inst-m1")
        bus1.close()

        # Session 2: mason should NOT get it again, fresco should
        bus2 = MessageBus(storage_path=bus_path)
        inbox_mason = await bus2.read("mason", instance="inst-m1")
        assert len(inbox_mason) == 0

        inbox_fresco = await bus2.read("fresco", instance="inst-f1")
        assert len(inbox_fresco) == 1
        bus2.close()

    @pytest.mark.asyncio
    async def test_anyone_consumed_not_rehydrated(self, bus_path: Path) -> None:
        """@anyone messages consumed before restart are gone after restart."""
        bus1 = MessageBus(storage_path=bus_path)
        await bus1.send("steve", "@anyone", "who wants this?")
        inbox = await bus1.read("mason")
        assert len(inbox) == 1
        bus1.close()

        bus2 = MessageBus(storage_path=bus_path)
        inbox = await bus2.read("fresco")
        assert len(inbox) == 0
        bus2.close()

    @pytest.mark.asyncio
    async def test_message_fields_preserved(self, bus_path: Path) -> None:
        """All message fields are preserved across restart."""
        bus1 = MessageBus(storage_path=bus_path)
        await bus1.send(
            "steve@avalon",
            "mason@avalon",
            "urgent fix",
            msg_type="directive",
            priority="urgent",
        )
        bus1.close()

        bus2 = MessageBus(storage_path=bus_path)
        inbox = await bus2.read("mason", team="avalon")
        assert len(inbox) == 1
        restored = inbox[0]
        assert restored.from_addr == "steve@avalon"
        assert restored.to_addr == "mason@avalon"
        assert restored.body == "urgent fix"
        assert restored.type == "directive"
        assert restored.priority == "urgent"
        bus2.close()


# ---------------------------------------------------------------------------
# Team scoping tests
# ---------------------------------------------------------------------------


class TestTeamScoping:
    """Test that team-scoped messages don't leak across teams."""

    @pytest.mark.asyncio
    async def test_team_scoped_delivery(self, bus_path: Path) -> None:
        """mason@avalon reaches mason on team avalon."""
        bus = MessageBus(storage_path=bus_path)
        await bus.send("steve@avalon", "mason@avalon", "avalon task")

        inbox = await bus.read("mason", team="avalon")
        assert len(inbox) == 1
        bus.close()

    @pytest.mark.asyncio
    async def test_team_scoped_isolation(self, bus_path: Path) -> None:
        """mason@avalon does NOT reach mason on team metropolis."""
        bus = MessageBus(storage_path=bus_path)
        await bus.send("steve@avalon", "mason@avalon", "avalon only")

        inbox = await bus.read("mason", team="metropolis")
        assert len(inbox) == 0
        bus.close()

    @pytest.mark.asyncio
    async def test_unscoped_message_reaches_any_team(self, bus_path: Path) -> None:
        """Bare 'mason' reaches mason regardless of team."""
        bus = MessageBus(storage_path=bus_path)
        await bus.send("steve", "mason", "for any mason")

        inbox = await bus.read("mason", team="avalon")
        assert len(inbox) == 1
        bus.close()

    @pytest.mark.asyncio
    async def test_instance_scoped_message(self, bus_path: Path) -> None:
        """mason.inst-abc@avalon only matches instance inst-abc."""
        bus = MessageBus(storage_path=bus_path)
        await bus.send("steve", "mason.inst-abc@avalon", "instance specific")

        # Wrong instance
        inbox = await bus.read("mason", instance="inst-xyz", team="avalon")
        assert len(inbox) == 0

        # Right instance
        inbox = await bus.read("mason", instance="inst-abc", team="avalon")
        assert len(inbox) == 1
        bus.close()


# ---------------------------------------------------------------------------
# @anyone competing consumer tests
# ---------------------------------------------------------------------------


class TestAnyoneConsumer:
    """Test @anyone competing consumer pattern."""

    @pytest.mark.asyncio
    async def test_anyone_first_reader_consumes(self, bus_path: Path) -> None:
        """@anyone message is consumed by the first qualified reader."""
        bus = MessageBus(storage_path=bus_path)
        await bus.send("steve", "@anyone", "who wants this?")

        inbox = await bus.read("mason")
        assert len(inbox) == 1

        inbox = await bus.read("fresco")
        assert len(inbox) == 0
        bus.close()

    @pytest.mark.asyncio
    async def test_anyone_excludes_mechanical(self, bus_path: Path) -> None:
        """@anyone messages are not delivered to mechanical agents."""
        bus = MessageBus(storage_path=bus_path)
        await bus.send("steve", "@anyone", "not for bots")

        for mech in MECHANICAL_AGENTS:
            inbox = await bus.read(mech)
            assert (
                len(inbox) == 0
            ), f"Mechanical agent {mech} should not receive @anyone"

        inbox = await bus.read("mason")
        assert len(inbox) == 1
        bus.close()

    @pytest.mark.asyncio
    async def test_anyone_with_team_scope(self, bus_path: Path) -> None:
        """@anyone@avalon only matches agents on team avalon."""
        bus = MessageBus(storage_path=bus_path)
        await bus.send("steve", "@anyone@avalon", "avalon volunteers only")

        inbox = await bus.read("mason", team="metropolis")
        assert len(inbox) == 0

        inbox = await bus.read("fresco", team="avalon")
        assert len(inbox) == 1
        bus.close()


# ---------------------------------------------------------------------------
# @everyone broadcast tests
# ---------------------------------------------------------------------------


class TestEveryoneBroadcast:
    """Test @everyone broadcast pattern."""

    @pytest.mark.asyncio
    async def test_everyone_all_agents_get_it(self, bus_path: Path) -> None:
        """@everyone delivers to every agent that reads."""
        bus = MessageBus(storage_path=bus_path)
        await bus.send("steve", "@everyone", "team standup in 5")

        inbox_mason = await bus.read("mason", instance="inst-m1")
        assert len(inbox_mason) == 1

        inbox_fresco = await bus.read("fresco", instance="inst-f1")
        assert len(inbox_fresco) == 1

        inbox_mason_again = await bus.read("mason", instance="inst-m1")
        assert len(inbox_mason_again) == 0
        bus.close()

    @pytest.mark.asyncio
    async def test_everyone_tracked_by_read_by(self, bus_path: Path) -> None:
        """@everyone messages track which instances have read them."""
        bus = MessageBus(storage_path=bus_path)
        msg = await bus.send("steve", "@everyone", "broadcast")

        await bus.read("mason", instance="inst-m1")
        assert "inst-m1" in msg.read_by

        await bus.read("fresco", instance="inst-f1")
        assert "inst-f1" in msg.read_by
        bus.close()

    @pytest.mark.asyncio
    async def test_everyone_with_team_scope(self, bus_path: Path) -> None:
        """@everyone@avalon only reaches agents on team avalon."""
        bus = MessageBus(storage_path=bus_path)
        await bus.send("steve", "@everyone@avalon", "avalon broadcast")

        inbox = await bus.read("mason", instance="inst-m1", team="metropolis")
        assert len(inbox) == 0

        inbox = await bus.read("mason", instance="inst-m2", team="avalon")
        assert len(inbox) == 1
        bus.close()


# ---------------------------------------------------------------------------
# Leader visibility tests
# ---------------------------------------------------------------------------


class TestLeaderVisibility:
    """Test that leaders see all @team traffic for their team."""

    @pytest.mark.asyncio
    async def test_leader_sees_team_direct_messages(self, bus_path: Path) -> None:
        """Steve (leader) sees messages sent to mason@avalon."""
        bus = MessageBus(storage_path=bus_path)
        await bus.send("fresco@avalon", "mason@avalon", "hey mason")

        assert "steve" in LEADER_AGENTS
        inbox = await bus.read("steve", team="avalon")
        assert len(inbox) == 1
        bus.close()

    @pytest.mark.asyncio
    async def test_leader_does_not_see_other_team_traffic(self, bus_path: Path) -> None:
        """Steve on avalon does NOT see messages scoped to metropolis."""
        bus = MessageBus(storage_path=bus_path)
        await bus.send("leonardo@metro", "mason@metropolis", "metro task")

        inbox = await bus.read("steve", team="avalon")
        assert len(inbox) == 0
        bus.close()

    @pytest.mark.asyncio
    async def test_non_leader_does_not_get_visibility(self, bus_path: Path) -> None:
        """Non-leader agent does NOT see other agents' team-scoped messages."""
        bus = MessageBus(storage_path=bus_path)
        await bus.send("steve@avalon", "mason@avalon", "for mason")

        assert "fresco" not in LEADER_AGENTS
        inbox = await bus.read("fresco", team="avalon")
        assert len(inbox) == 0
        bus.close()


# ---------------------------------------------------------------------------
# Message expiry tests
# ---------------------------------------------------------------------------


class TestMessageExpiry:
    """Test periodic pruning of expired messages."""

    @pytest.mark.asyncio
    async def test_expired_messages_pruned(self, bus_path: Path) -> None:
        """Messages older than MAX_MESSAGE_AGE are pruned on read."""
        bus = MessageBus(storage_path=bus_path)
        expired_msg = Message(
            id="expired-1",
            from_addr="steve",
            to_addr="mason",
            body="old news",
            sent_at=datetime.now(UTC) - MAX_MESSAGE_AGE - timedelta(minutes=5),
        )
        bus._messages.append(expired_msg)
        bus._disk[expired_msg.id] = expired_msg.to_dict()

        inbox = await bus.read("mason")
        assert len(inbox) == 0
        # Verify removed from disk too
        assert expired_msg.id not in bus._disk
        bus.close()

    @pytest.mark.asyncio
    async def test_fresh_messages_not_pruned(self, bus_path: Path) -> None:
        """Messages within MAX_MESSAGE_AGE are not pruned."""
        bus = MessageBus(storage_path=bus_path)
        msg = await bus.send("steve", "mason", "fresh message")

        inbox = await bus.read("mason")
        assert len(inbox) == 1
        assert inbox[0].id == msg.id
        bus.close()


# ---------------------------------------------------------------------------
# Priority field tests
# ---------------------------------------------------------------------------


class TestPriority:
    """Test priority field handling."""

    @pytest.mark.asyncio
    async def test_default_priority_is_normal(self, bus_path: Path) -> None:
        """Messages default to normal priority."""
        bus = MessageBus(storage_path=bus_path)
        msg = await bus.send("steve", "mason", "regular task")
        assert msg.priority == "normal"
        bus.close()

    @pytest.mark.asyncio
    async def test_urgent_priority(self, bus_path: Path) -> None:
        """Urgent priority is preserved."""
        bus = MessageBus(storage_path=bus_path)
        msg = await bus.send("steve", "mason", "fire", priority="urgent")
        assert msg.priority == "urgent"
        bus.close()


# ---------------------------------------------------------------------------
# Multiple messages ordering
# ---------------------------------------------------------------------------


class TestMessageOrdering:
    """Test that messages are delivered in send order."""

    @pytest.mark.asyncio
    async def test_fifo_ordering(self, bus_path: Path) -> None:
        """Messages are delivered in FIFO order."""
        bus = MessageBus(storage_path=bus_path)
        await bus.send("steve", "mason", "first")
        await bus.send("steve", "mason", "second")
        await bus.send("steve", "mason", "third")

        inbox = await bus.read("mason")
        assert len(inbox) == 3
        assert inbox[0].body == "first"
        assert inbox[1].body == "second"
        assert inbox[2].body == "third"
        bus.close()
