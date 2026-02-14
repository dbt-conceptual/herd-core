# The Herd — Operations Guide

## Overview

The Herd is a multi-agent AI development team for the dbt-conceptual project. It uses Claude Code Agent Teams with a Team Lead pattern for orchestration.

## Environment Setup

```bash
export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1
export HERD_SLACK_TOKEN="<your-slack-bot-token>"  # xoxb-... Bot User OAuth Token
```

**Slack Setup:**
- Create a Slack App with `chat:write` and `chat:write.customize` scopes
- Install to workspace, copy Bot User OAuth Token
- Invite bot to channels: `#introductions`, `#herd-feed`, `#herd-blocked`, `#herd-decisions`

## Team Structure

| Role | Minion | Function | Can Merge? |
|------|--------|----------|------------|
| Architect | Human (Faust) | Technical decisions, PR approval, priority | Yes |
| Team Lead | Mini-Mao | Orchestration, status tracking, ticket drafting | No |
| Backend | Grunt | Python/dbt implementation | No |
| Frontend | Pikasso | React/TypeScript implementation | No |
| QA | Wardenstein | Testing, quality gates, rejection authority | No |
| Docs | Shakesquill | Documentation, changelog | No |

## Starting a Session

### As Architect
```bash
# Start Mini-Mao as Team Lead
claude --agent-teams "Read .herd/roles/mini-mao.md and begin your session. Report status."
```

### As Team Lead (Mini-Mao)
When spawning teammates:
```bash
# Spawn Grunt for backend work
claude --agent-teams "Read .herd/roles/grunt.md. Your assignment: <ticket-id> - <description>"

# Spawn Pikasso for frontend work
claude --agent-teams "Read .herd/roles/pikasso.md. Your assignment: <ticket-id> - <description>"

# Spawn Wardenstein for QA
claude --agent-teams "Read .herd/roles/wardenstein.md. Review: <ticket-id>"

# Spawn Shakesquill for docs
claude --agent-teams "Read .herd/roles/shakesquill.md. Document: <ticket-id>"
```

## Workflow States (Linear)

```
Triage → Backlog → Assigned → In Progress → QA Review → PR Submitted → Architect Review → Done
                                    ↓
                              (Rejected) → In Progress (loop)
```

## Communication Channels

| Channel | Purpose |
|---------|---------|
| #herd-feed | All status updates, handoffs, completions |
| #herd-blocked | Blocked work requiring Architect attention |
| #introductions | First-time minion introductions only |

## Directory Structure

```
.herd/
├── roles/
│   ├── grunt.md
│   ├── pikasso.md
│   ├── shakesquill.md
│   ├── wardenstein.md
│   └── mini-mao.md
├── craft.md                  # Shared quality standards, indexed by role
├── operations.md             # This file
├── handoffs/
│   └── DBT-<id>.md
├── sessions/
│   └── <role>-<date>.md
├── STATUS.md
└── linear-config.md
```

## File Conventions

### Branch Naming
```
herd/<minion>/<ticket-id>-<short-description>
```
Examples:
- `herd/grunt/DBT-15-yaml-validation`
- `herd/pikasso/DBT-18-concept-cards`

### Handoff Files
Location: `.herd/handoffs/<ticket-id>.md`
Required sections:
- What was done
- What to verify (for QA)
- What to document (for docs)
- Open questions for Architect

### Session Files
Location: `.herd/sessions/<minion>-<date>.md`
Written at end of each session for context continuity.

## Quality Gates

### Before QA Review
- [ ] All tests pass locally (`pytest`)
- [ ] Linting passes (`ruff check`)
- [ ] Coverage >80% on new code
- [ ] Handoff file created

### Before PR Submit
- [ ] Wardenstein QA passed
- [ ] No unresolved conflicts
- [ ] Branch up to date with main

### Before Merge (Architect only)
- [ ] Code review complete
- [ ] All CI checks green
- [ ] Documentation updated (if user-facing)

## Escalation Patterns

### Minion → Team Lead
- File ownership conflicts (two agents editing same files)
- Stale handoffs (>24h unactioned)
- Unclear requirements

### Team Lead → Architect
- Priority decisions
- Architectural questions
- "Good enough" decisions
- Blocked work requiring technical decision

## First-Time Introduction

Every minion posts ONCE to #introductions when first activated. After posting, create a marker file:
```
.herd/sessions/<minion>-introduced.marker
```
Check for this file before posting again.

## Daily Standup (Mini-Mao)

Mini-Mao generates daily brief:
1. What's in progress (by minion)
2. What's blocked
3. What's waiting for Architect review
4. Stale handoffs (>24h)
5. Dependency conflicts

## Parallel Work Rules

- Multiple minions CAN work simultaneously on different tickets
- Minions MUST NOT edit the same files without coordination
- Mini-Mao tracks ownership to prevent conflicts
- If conflict detected: stop, escalate to Team Lead

## Viewing All Teammates

Use tmux split pane mode:
```bash
# Create 4-pane layout for team visibility
tmux new-session -d -s herd
tmux split-window -h
tmux split-window -v
tmux select-pane -t 0
tmux split-window -v
tmux select-layout tiled
tmux attach -t herd
```

## Emergency Procedures

### If a minion goes rogue
1. Kill the agent process
2. Revert uncommitted changes: `git checkout -- .`
3. Report incident in #herd-blocked
4. Architect reviews before resuming

### If Linear is unavailable
1. Use `.herd/STATUS.md` as source of truth
2. Manual ticket tracking until restored
3. Sync to Linear when available
