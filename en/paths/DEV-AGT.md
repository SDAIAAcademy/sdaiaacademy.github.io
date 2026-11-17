# DEV-AGT · Agentic Systems

Track: AI Engineering

## Purpose

Teach developers to build, integrate, contain and judge systems in which a model works in a loop, calls tools and acts over many steps on someone's behalf.

## Who it is for

Software and AI engineers who already build language model applications and now design, ship or review agents, agent platforms and agent integrations.

## Suggested order

Start with DEV-AGT-301 (the loop, context and harness), add DEV-AGT-302 (protocol servers) and DEV-AGT-303 (interface agents) as the work requires, then DEV-AGT-401 (long-running and multi-agent harnesses) and DEV-AGT-402 (agent platforms), and finish with DEV-AGT-403 (design reviews); agent evaluation, security and operations continue in DEV-EVL-302, DEV-SEC-301 and DEV-OPS-303.

## Courses in order

In the order their prerequisites suggest.

### 1. [DEV-AGT-301 · Agentic Systems Engineering: Loops, Context and Harnesses](../courses/DEV-AGT-301.md)

- Level 300 · Develop · Intensive · 40 h · In development
- Needs: DEV-LLM-201
- Distinguish a fixed workflow, a single agent in a loop and a multi-agent design, and state which one a given task needs.
- Implement an agent loop from scratch that calls typed tools, handles tool errors and stops on explicit completion criteria.
- Measure and reduce context use with compaction, offloading of large tool results to files and progressive disclosure of skills.
- Configure a protocol server and a skill so that an agent discovers and uses them without changes to the agent's code.
- Build a state-graph agent with checkpoints and a human approval gate before every irreversible action.
- Evaluate an agent with transcript and outcome graders over repeated trials and report consistency and cost per completed task.
- Defend the containment design of an agent that combines private data, untrusted content and a possible exfiltration path.

### 2. [DEV-AGT-302 · Protocol Servers and Agent Integrations](../courses/DEV-AGT-302.md)

- Level 300 · Develop · Workshop · 16 h · In development
- Needs: DEV-AGT-301
- Explain what the current protocol revision changed and which deprecated features a new server must not depend on.
- Build a stateless protocol server with typed tools, resources and a stable tool order that an unmodified agent can list and call over local and remote transports.
- Configure delegated authorisation so that each tool call carries a short-lived token scoped to one user and one kind of action.
- Test a server with contract, error-path and hostile-input tests, including a tool description that changes after approval.
- Design the integration of several servers behind a gateway with a registry, allowlists, rate limits and audit logs.
- Implement an agent-to-agent service that accepts a delegated task through a signed capability card and reports task state, streamed updates and results.

### 3. [DEV-AGT-303 · Computer-Use and Browser Agents](../courses/DEV-AGT-303.md)

- Level 300 · Develop · Workshop · 16 h · In development
- Needs: DEV-AGT-301
- Compare screenshot, accessibility-tree and document object model observation for cost, reliability and exposure to injected content.
- Implement a browser agent that completes multi-step form tasks with element grounding, waiting and error recovery.
- Measure partial and complete task success, consistency over repeated trials and cost per completed task.
- Configure containment for an interface agent with a disposable profile, a domain allowlist, no stored credentials, confirmation gates and a step budget.
- Diagnose the causes of failed interface-agent runs and redesign the agent or the task to remove the most frequent cause.
- Decide whether an interface agent, a scripted automation or an API integration fits a process, using measured cost, latency and risk.

### 4. [DEV-AGT-401 · Harness Engineering for Long-Running and Multi-Agent Systems](../courses/DEV-AGT-401.md)

- Level 400 · Evaluate · Intensive · 36 h · In development
- Needs: DEV-AGT-301, DEV-EVL-302
- Implement planner, generator and evaluator roles that exchange work through files and stop on completion criteria agreed before work starts.
- Design a memory layer that writes, consolidates, retrieves and forgets, and guards against stale notes, over-recording and concurrent overwrites.
- Build an orchestrator that runs asynchronous subagents it can steer, queue and be notified by, and that receives summaries rather than full transcripts.
- Build durable sessions whose event log is separate from the harness, so that a run resumes after the harness or sandbox is killed.
- Evaluate harness components by ablation with the model held fixed, reporting success over repeated trials, cost and wall-clock time per accepted task.
- Decide whether a multi-agent design or a single agent with subagents fits a task, and defend the choice with measured coordination cost.

### 5. [DEV-AGT-402 · Agent Platforms: Sandboxes, Durable Execution and Identity](../courses/DEV-AGT-402.md)

- Level 400 · Evaluate · Intensive · 30 h · In development
- Needs: DEV-AGT-301, DEV-OPS-201
- Measure start-up time and density of process, container, user-space kernel and micro virtual machine isolation for one agent workload, and compare the attack surface each tier exposes.
- Design a sandbox with an egress allowlist, scoped mounts and a credential-holding proxy so that generated code never sees a secret.
- Build durable agent sessions on a workflow engine with checkpointed state, replay and idempotent tool calls.
- Build delegated authorisation in which each hop exchanges its token for a narrower, short-lived one and no access decision rests on nested actor claims.
- Design multi-tenant operation with per-tenant isolation, quotas, rate limits, kill switches and cost attribution.
- Audit an agent platform design against a control checklist covering isolation, state, identity, monitoring and human escalation.

### 6. [DEV-AGT-403 · Agent System Design Reviews](../courses/DEV-AGT-403.md)

- Level 400 · Evaluate · Studio · 30 h · In development
- Needs: DEV-AGT-301
- Decide whether a proposed system needs an agent, a fixed workflow or no model at all, from the task's environment, context and verifiability.
- Evaluate a design's autonomy level, task horizon, persistent state and authority, and set human oversight proportionate to the risk.
- Diagnose likely failure modes and compounding risks using a published agentic failure taxonomy and risk list.
- Evaluate the cost of a design per accepted task, including retries, reasoning tokens, cache behaviour and human review time.
- Review the evaluation and release plan of a design for outcome grading, consistency over trials and regression gates.
- Defend a written design review before a panel and revise it in response to challenge.
