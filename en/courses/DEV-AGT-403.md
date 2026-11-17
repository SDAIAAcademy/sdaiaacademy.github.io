# DEV-AGT-403 · Agent System Design Reviews

- Track: AI Engineering
- Path: [Agentic Systems](../paths/DEV-AGT.md)
- Level: Level 400 · Evaluate
- Format: Studio: six weeks part-time of coached review rounds, ending in a written review and a panel defence
- Total hours: 30 h
- Audience: specialist
- Status: In development

## Description

Participants review agent system designs the way an architecture board should: first asking whether an agent is needed at all, then setting the autonomy level, tracing failure and cost, and writing a review the design owner can act on. In coached rounds on design dossiers built from public engineering write-ups and synthetic proposals, each participant reviews several designs with peers, then leads a full written review of one design and defends it before a panel that includes an experienced agent engineer.

## Learning outcomes

By the end, the participant can:

- Decide whether a proposed system needs an agent, a fixed workflow or no model at all, from the task's environment, context and verifiability.
- Evaluate a design's autonomy level, task horizon, persistent state and authority, and set human oversight proportionate to the risk.
- Diagnose likely failure modes and compounding risks using a published agentic failure taxonomy and risk list.
- Evaluate the cost of a design per accepted task, including retries, reasoning tokens, cache behaviour and human review time.
- Review the evaluation and release plan of a design for outcome grading, consistency over trials and regression gates.
- Defend a written design review before a panel and revise it in response to challenge.

## Prerequisites

- [DEV-AGT-301 · Agentic Systems Engineering: Loops, Context and Harnesses](DEV-AGT-301.md)
- Has completed DEV-AGT-401 or DEV-AGT-402, or has shipped an agent system to real users
- Writes a structured technical document such as an architecture decision record

## Topics

### The design review as a practice

- Review versus approval
- Roles: owner, reviewer, panel
- Decision records
- Writing findings the owner can act on

### Is an agent needed

- Fixed workflow, agent or deterministic code
- Environment, context and verifiability as predictors
- The task contract: goal, environment, permitted actions, observations, completion criteria

### Autonomy and oversight

- Levels of autonomy
- Horizon, state and authority as exposures
- Risk-tiered human oversight
- Approval theatre and fatigue
- Kill switches and escalation paths

### Failure analysis

- Agentic failure taxonomies
- Compounding error over many steps
- Goal hijack, tool misuse and privilege abuse
- Memory poisoning and cascading failures
- Recovery paths

### Cost and capacity

- Cost per accepted task, not per token
- Token mix: cache reads, reasoning, retries
- Model tiering and routing
- Latency budgets
- Energy use of agentic workloads

### Evidence a design must bring

- Evaluation plans and consistency metrics
- Harness ablation evidence
- Containment and identity evidence
- Operational readiness and runbooks

### Governance fit

- Data classification and personal data
- Documentation of tool access and operational limits
- Accountability for agent actions
- Mapping a design to a risk management framework
