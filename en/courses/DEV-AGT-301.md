# DEV-AGT-301 · Agentic Systems Engineering: Loops, Context and Harnesses

- Track: AI Engineering
- Path: [Agentic Systems](../paths/DEV-AGT.md)
- Level: Level 300 · Develop
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 40 h
- Audience: practitioner
- Status: In development

## Description

Participants build an agent the way the field now builds them: a model in a loop that calls typed tools inside a sandbox, with most of the engineering in the harness around it. They write the loop from scratch, treat context as a budget, add memory files, skills and Model Context Protocol servers, compare agent frameworks with their own harness, put human approval gates into a state graph, and finish with an agent that is traced, evaluated and contained. One synthetic case study runs through all four days, and the capstone is a research agent over a synthetic document corpus.

## Learning outcomes

By the end, the participant can:

- Distinguish a fixed workflow, a single agent in a loop and a multi-agent design, and state which one a given task needs.
- Implement an agent loop from scratch that calls typed tools, handles tool errors and stops on explicit completion criteria.
- Measure and reduce context use with compaction, offloading of large tool results to files and progressive disclosure of skills.
- Configure a protocol server and a skill so that an agent discovers and uses them without changes to the agent's code.
- Build a state-graph agent with checkpoints and a human approval gate before every irreversible action.
- Evaluate an agent with transcript and outcome graders over repeated trials and report consistency and cost per completed task.
- Defend the containment design of an agent that combines private data, untrusted content and a possible exfiltration path.

## Prerequisites

- [DEV-LLM-201 · Building Applications on Language Models](DEV-LLM-201.md)
- Writes and tests Python that calls an HTTP API and validates a JSON response against a schema
- Has built a small application that sends prompts to a language model and parses structured output
- Uses Git and runs code in a container from the command line

## Next courses

- [DEV-AGT-302 · Protocol Servers and Agent Integrations](DEV-AGT-302.md)
- [DEV-AGT-303 · Computer-Use and Browser Agents](DEV-AGT-303.md)
- [DEV-AGT-401 · Harness Engineering for Long-Running and Multi-Agent Systems](DEV-AGT-401.md)
- [DEV-AGT-402 · Agent Platforms: Sandboxes, Durable Execution and Identity](DEV-AGT-402.md)
- [DEV-AGT-403 · Agent System Design Reviews](DEV-AGT-403.md)
- [DEV-OPS-303 · Operating AI Agents: Durable Execution, Sandboxing and Replay](DEV-OPS-303.md)

## Topics

### From model to agent

- Three API shapes: chat messages, item lists and provider-neutral responses
- Structured outputs with validation
- Typed tool schemas and tool errors
- The agent loop written from scratch
- Completion criteria and step budgets

### Context engineering

- Context as a budget
- Retrieval for agents: the cheapest tool that works first
- Compaction, resets and offloading tool results to files
- Cache-aware layout of prompts and tools
- Instruction bloat and how to avoid it

### Memory, skills and protocols

- Repository context files and the nearest-file rule
- Skills loaded in stages
- Memory files: write, consolidate, retrieve, forget
- Model Context Protocol: hosts, clients, servers, tools and resources
- Agent-to-agent delegation at concept level

### Harness anatomy

- Tools, context, state and feedback as the harness
- Agent frameworks and hosted agents compared with an own loop
- Loop engineering and verification inside the loop
- Removing scaffolding when a newer model no longer needs it

### Graphs and human gates

- State graphs, checkpoints and interrupts
- Approval at defined risk thresholds
- Approval prompts nobody reads
- Subagents for isolation; when multiple agents pay

### Evaluating agents

- Tasks, trials, graders, transcripts and outcomes
- Success in at least one versus all of k trials
- Capability suites and regression suites
- A smoke evaluation in continuous integration

### Securing and shipping agents

- The agentic application risk list from the Open Worldwide Application Security Project (OWASP)
- Private data, untrusted content and exfiltration: remove one leg
- Sandboxes, egress control and least-privilege tools
- Tracing with the OpenTelemetry generative AI conventions, still in development
- Serving an agent behind an API
