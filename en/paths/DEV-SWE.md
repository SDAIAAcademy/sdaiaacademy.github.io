# DEV-SWE · Software Engineering for AI Builders

Track: AI Engineering

## Purpose

Teach developers the software engineering that AI products need, and the practice of building software by directing and verifying coding agents.

## Who it is for

Software engineers, AI engineers and technical leads who build products that contain models, or who build any software with coding agents.

## Suggested order

Start with DEV-SWE-201 (working with coding agents) and DEV-SWE-204 (verifying their output), add DEV-SWE-202 and DEV-SWE-203 for the service and interface layers, then take DEV-SWE-301 (system design), DEV-SWE-302 (team operation of agents) and DEV-SWE-303 (deciding what to build); language model applications continue in DEV-LLM and evaluation in DEV-EVL.

## Courses in order

In the order their prerequisites suggest.

### 1. [DEV-SWE-201 · Software Engineering with Coding Agents](../courses/DEV-SWE-201.md)

- Level 200 · Apply · Intensive · 36 h · In development
- Needs: FND-PRG-102
- Explain how a coding agent searches code, spends its context and uses subagents, and identify its common failure modes.
- Prepare a specification and plan that split a feature into slices an agent can execute and a reviewer can verify.
- Configure an agent-ready repository with a context file, a skill, a check-running hook, a read-only protocol server and permission settings.
- Apply risk-based review to agent changes, setting review depth by blast radius.
- Analyse unfamiliar code and an agent diff without assistance, predicting behaviour and locating defects.
- Deliver a feature with a coding agent from specification to merged change, with tests and a review record.

### 2. [DEV-SWE-202 · Back-End Services and Interfaces for AI Applications](../courses/DEV-SWE-202.md)

- Level 200 · Apply · Intensive · 30 h · In development
- Needs: FND-PRG-105
- Distinguish request-response, streaming and asynchronous job patterns and state which fits a given model call.
- Implement a typed API contract that validates model output and maps provider failures to stable error codes.
- Implement token streaming with cancellation and clean handling of client disconnects.
- Implement queued jobs with idempotency keys, retries with backoff and a status endpoint.
- Configure sign-in, per-user authorisation and quotas.
- Build a service that persists state, recovers from a restart and meets a latency budget under load.

### 3. [DEV-SWE-203 · Front Ends for AI Applications: Streaming, Chat and Generative Interfaces](../courses/DEV-SWE-203.md)

- Level 200 · Apply · Workshop · 16 h · In development
- Describe the events an agent sends to an interface and how an open agent-to-interface protocol carries them.
- Implement streamed rendering and conversation state that survive stops, retries, edits and reloads.
- Implement approval prompts that state an action, its target and its effect, with a fallback for interactive components.
- Test the interface for keyboard use, screen-reader announcement of streamed text and right-to-left layout.
- Build a chat and agent interface that streams, recovers from failure, gates actions on approval and passes the accessibility audit.

### 4. [DEV-SWE-204 · Testing and Verification of AI-Assisted Code](../courses/DEV-SWE-204.md)

- Level 200 · Apply · Workshop · 16 h · In development
- Needs: FND-PRG-104
- Prepare acceptance tests before delegating and protect them from agent edits.
- Implement property-based tests that find defects example tests miss.
- Measure suite strength with mutation testing and kill surviving mutants.
- Configure code, dependency and secret scanning and triage findings.
- Build a verification pipeline that accepts a correct agent change and rejects faulty ones.

### 5. [DEV-SWE-301 · System Design for AI Products](../courses/DEV-SWE-301.md)

- Level 300 · Develop · Intensive · 30 h · In development
- Needs: DEV-SWE-202, DEV-LLM-201
- Explain how non-determinism, token-priced compute, provider limits and model changes alter service design.
- Prepare a latency and cost budget per user task, including time to first token and cost per successful task.
- Analyse the failure modes of a design and attach a detection signal and degradation response to each.
- Design the decomposition and state placement of an AI product.
- Build a walking skeleton whose degradation paths hold the budget under injected faults.
- Review a peer design and defend one's own when the panel changes a constraint.

### 6. [DEV-SWE-302 · Agent-Ready Engineering Organisations: Parallel Agents, Review and Governance](../courses/DEV-SWE-302.md)

- Level 300 · Develop · Workshop · 16 h · In development
- Needs: DEV-SWE-201, DEV-SWE-204
- Configure parallel background agents on isolated workspaces with a merge and conflict policy.
- Configure permission tiers, sandboxing and an egress allowlist for team agents.
- Design a versioned team harness with an owner, a changelog and a regression task set.
- Design release lanes and a review-queue policy that route changes by risk and fit reviewer capacity.
- Evaluate claims about agent productivity using delivery measures with stated uncertainty.

### 7. [DEV-SWE-303 · Shaping the Build: Product Sense and Forward-Deployed Practice](../courses/DEV-SWE-303.md)

- Level 300 · Develop · Workshop · 16 h · In development
- Needs: DEV-SWE-201
- Analyse a workflow from interviews to find where AI would change an outcome users care about.
- Design a specification with success metrics, non-goals, acceptance criteria written as evaluation cases, data needs and risks.
- Test the riskiest assumption with a time-boxed prototype and short user sessions.
- Decide whether to stop, iterate or build, backed by a value case with sensitivity.
- Deliver a hand-over package the client team can run and change alone.
