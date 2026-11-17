# DEV-AGT-402 · Agent Platforms: Sandboxes, Durable Execution and Identity

- Track: AI Engineering
- Path: [Agentic Systems](../paths/DEV-AGT.md)
- Level: Level 400 · Evaluate
- Format: Intensive: 3 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: specialist
- Status: In development

## Description

Participants build the platform layer that lets many teams run agents safely: isolated execution, state that survives failure, tools that are safe to retry, and an identity for every agent acting on a person's behalf. On a provided Linux lab host with a single-node cluster they compare isolation tiers, enforce egress allowlists, move credentials out of the sandbox into a proxy, run agent sessions on a durable workflow engine with replay, make tools idempotent, issue scoped, short-lived delegated tokens at each hop, and run the platform for several synthetic tenants with quotas, kill switches and cost attribution. Day-to-day operation, trace replay and agent versioning continue in DEV-OPS-303.

## Learning outcomes

By the end, the participant can:

- Measure start-up time and density of process, container, user-space kernel and micro virtual machine isolation for one agent workload, and compare the attack surface each tier exposes.
- Design a sandbox with an egress allowlist, scoped mounts and a credential-holding proxy so that generated code never sees a secret.
- Build durable agent sessions on a workflow engine with checkpointed state, replay and idempotent tool calls.
- Build delegated authorisation in which each hop exchanges its token for a narrower, short-lived one and no access decision rests on nested actor claims.
- Design multi-tenant operation with per-tenant isolation, quotas, rate limits, kill switches and cost attribution.
- Audit an agent platform design against a control checklist covering isolation, state, identity, monitoring and human escalation.

## Prerequisites

- [DEV-AGT-301 · Agentic Systems Engineering: Loops, Context and Harnesses](DEV-AGT-301.md)
- [DEV-OPS-201 · Deploying AI Services: Containers, Serving and Monitoring](DEV-OPS-201.md)
- Deploys a containerised service with configuration and secrets kept out of the image
- Explains an OAuth 2 token's audience, scopes and lifetime
- Applies and inspects container cluster manifests from the command line

## Topics

### Platform shape

- Session log, harness and sandbox as separate replaceable parts
- Control plane and execution plane
- What the platform owns and what agent teams own
- Managed agent runtimes and self-hosted platforms compared

### Execution isolation

- Isolation tiers: process, container, user-space kernel, micro virtual machine
- Read-only, read-write and no-delete mounts
- Resolving symbolic links before path checks
- An egress allowlist is a capability grant
- Snapshots and reset between tasks
- Isolation that blinds endpoint monitoring

### Secrets and tool proxies

- Credentials never inside the sandbox
- Proxies holding vaulted tokens
- Custom proxies as the weak part

### Durable execution

- Event history, checkpoints and replay
- Determinism constraints on workflow code
- Timers and waits for human approval
- Changing code while workflows are running

### Safe tools

- Idempotency keys
- Exactly-once effects and the outbox pattern
- Compensation for steps that cannot be undone
- Dry runs and previews

### Agent identity and delegated authorisation

- Workload identity for agents
- Token exchange at every hop
- Narrow scopes and short lifetimes
- Consent records for actions on a person's behalf
- Revoking an agent's access mid-run
- The state of agent identity standards

### Multi-tenant operation

- Quotas, rate limits and noisy neighbours
- Kill switches and step budgets
- Cost attribution per tenant and per accepted task
- Audit logs and action-level monitoring
- Placement driven by data classification
