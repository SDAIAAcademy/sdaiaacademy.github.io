# DEV-SWE-201 · Software Engineering with Coding Agents

- Track: AI Engineering
- Path: [Software Engineering for AI Builders](../paths/DEV-SWE.md)
- Level: Level 200 · Apply
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: practitioner
- Status: In development

## Description

Participants deliver working software by directing a coding agent through four steps: specify, plan, execute and verify. On a synthetic appointment-booking service with legacy code and thin tests, they study agent transcripts, write specifications an agent can follow, make the repository agent-ready, and review agent changes at a depth matched to risk. One supervised checkpoint is taken without AI assistance.

## Learning outcomes

By the end, the participant can:

- Explain how a coding agent searches code, spends its context and uses subagents, and identify its common failure modes.
- Prepare a specification and plan that split a feature into slices an agent can execute and a reviewer can verify.
- Configure an agent-ready repository with a context file, a skill, a check-running hook, a read-only protocol server and permission settings.
- Apply risk-based review to agent changes, setting review depth by blast radius.
- Analyse unfamiliar code and an agent diff without assistance, predicting behaviour and locating defects.
- Deliver a feature with a coding agent from specification to merged change, with tests and a review record.

## Prerequisites

- [FND-PRG-102 · Command Line, Git and Reproducible Environments](FND-PRG-102.md)
- Writes and debugs small Python programs without assistance
- Writes and runs unit tests

## Next courses

- [DEV-SWE-302 · Agent-Ready Engineering Organisations: Parallel Agents, Review and Governance](DEV-SWE-302.md)
- [DEV-SWE-303 · Shaping the Build: Product Sense and Forward-Deployed Practice](DEV-SWE-303.md)

## Topics

### How coding agents work

- The loop: read, plan, edit, run, observe
- Code search, context limits and compaction
- Progress notes for work that spans sessions
- Failure modes: over-engineering, stopping short, skipped verification, destructive actions

### Specify and plan

- Measurable acceptance criteria
- Agent-led questioning before work
- Choosing autonomy: steer, supervise or delegate
- When not to use an agent

### The agent-ready repository

- A short context file pointing into documentation
- Instruction files that grow long, stale or contradictory
- Skills and hooks
- Protocol servers, read-only first
- Architecture enforced by linters and tests

### Permissions and safety

- Allow, ask and deny settings
- Sandboxes and secrets out of reach
- Untrusted repositories: injected instructions and configuration that runs on open
- What may be sent to an external model

### Verify and review

- Tests as the acceptance gate
- Reading diffs for intent, scope and side effects
- Removing agent-made technical debt
