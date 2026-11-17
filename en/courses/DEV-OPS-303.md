# DEV-OPS-303 · Operating AI Agents: Durable Execution, Sandboxing and Replay

- Track: AI Engineering
- Path: [Operations and Reliability](../paths/DEV-OPS.md)
- Level: Level 300 · Develop
- Format: Workshop: two days with labs and an operations shift
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants operate a small agent fleet on a provided cluster. They version each agent as one bundle, keep durable sessions alive through crashes and upgrades, test that tools are safe to retry, run sandboxes with quotas and egress policies, replay recorded traces to reproduce incidents, and throttle or stop agents at a gateway. Platform construction is in DEV-AGT-402.

## Learning outcomes

By the end, the participant can:

- Implement an agent bundle that pins model, prompts, tool schemas, skills and harness settings.
- Test tool idempotency by injecting crashes, timeouts and duplicate deliveries.
- Diagnose an agent failure by replaying its recorded trace against two versions.
- Decide whether to drain, pin or migrate in-flight sessions for an upgrade, then carry it out.
- Configure per-agent rate and spend limits, tool allowlists and a kill switch.

## Prerequisites

- [DEV-AGT-301 · Agentic Systems Engineering: Loops, Context and Harnesses](DEV-AGT-301.md)
- [DEV-OPS-302 · Operating Language Model Applications: Tracing, Evaluation Gates and Safe Releases](DEV-OPS-302.md)
- DEV-AGT-402, or has run agents on a durable workflow engine

## Topics

### Versioning agents

- Session, harness and sandbox split
- The agent bundle
- In-flight sessions during upgrades

### Durable execution

- Checkpoints and orphaned sessions
- Idempotency keys and duplicates
- Approval waits and timeouts
- Health signals: steps, tool errors, stuck sessions

### Sandboxes and controls

- Warm pools, quotas and egress policies
- Rate, spend and step budgets
- Kill switches and runbooks

### Replay

- Recorded tool responses
- Replay for reproduction and regression
