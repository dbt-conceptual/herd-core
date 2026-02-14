# Spawn Checklist — {Agent Name}

## Pre-Spawn Verification

- [ ] Read `.herd/roles/{agent}.md` — full content included in prompt
- [ ] Read `.herd/craft.md` — agent's section AND "All Agents — Shared Standards" section included
- [ ] Read `CLAUDE.md` — project guidelines included
- [ ] Slack token: `export HERD_SLACK_TOKEN="..."` included
- [ ] Session start protocol: agent instructed to follow startup sequence
- [ ] Skills context: equivalent instructions for agent's skills included
- [ ] Branch protection rule: CRITICAL GIT RULE block included
- [ ] Commit+push posting: agent instructed to post on every commit
- [ ] Slack URL format: `<url|display text>` requirement stated
- [ ] Model target: {opus | sonnet} specified in Task call
- [ ] MCP awareness: agent told about Herd MCP tools and to consult `.herd/docs/mcp-server.md`
- [ ] Docs awareness: agent told to consult `.herd/docs/` and `CLAUDE.md` when unsure
- [ ] Inconsistency reporting: agent told to report doc/code mismatches to Mini-Mao

## Assignment

- **Ticket**: {TICKET-ID}
- **Title**: {ticket title}
- **Description**: {full ticket description or link}
- **Branch**: `herd/{agent}/{ticket-id}-{short-description}`
- **Worktree**: `/private/tmp/{agent}-{ticket-id}` (if using worktree)

## File Ownership Check

- [ ] No other active agent is editing the same files
- [ ] Files expected to change: {list}

## Post-Spawn

- [ ] Linear ticket moved to In Progress
- [ ] STATUS.md updated with active work
- [ ] Worktree added to `settings.local.json` additionalDirectories (if applicable)
