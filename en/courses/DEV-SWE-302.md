# DEV-SWE-302 · Agent-Ready Engineering Organisations: Parallel Agents, Review and Governance

- Track: AI Engineering
- Path: [Software Engineering for AI Builders](../paths/DEV-SWE.md)
- Level: Level 300 · Develop
- Format: Workshop: two days with labs and a short build project, with guided pre-work
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants set up how a team works with coding agents. On a synthetic repository with twelve open issues, they run background agents in parallel, version and evaluate the shared harness of context files, skills and hooks, set permission tiers and release lanes, size review queues to capacity, and measure delivery honestly.

## Learning outcomes

By the end, the participant can:

- Configure parallel background agents on isolated workspaces with a merge and conflict policy.
- Configure permission tiers, sandboxing and an egress allowlist for team agents.
- Design a versioned team harness with an owner, a changelog and a regression task set.
- Design release lanes and a review-queue policy that route changes by risk and fit reviewer capacity.
- Evaluate claims about agent productivity using delivery measures with stated uncertainty.

## Prerequisites

- [DEV-SWE-201 · Software Engineering with Coding Agents](DEV-SWE-201.md)
- [DEV-SWE-204 · Testing and Verification of AI-Assisted Code](DEV-SWE-204.md)
- Reviews work in a team repository with continuous integration

## Topics

### Parallel agents

- Steer, queue and notify
- Worktrees and containers per task
- Agents per reviewer

### The harness as a product

- Ownership and versioning
- Evaluating harness changes
- Removing instructions models no longer need

### Permissions and lanes

- Approval fatigue
- Sandboxes, egress control and audit trails
- Agentic, supervised and assisted lanes

### Review and measurement

- Risk-tiered queues
- Oversight in name only
- Why throughput counts mislead
- Token spend per merged change
