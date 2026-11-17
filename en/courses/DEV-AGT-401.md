# DEV-AGT-401 · Harness Engineering for Long-Running and Multi-Agent Systems

- Track: AI Engineering
- Path: [Agentic Systems](../paths/DEV-AGT.md)
- Level: Level 400 · Evaluate
- Format: Intensive: 3 teaching days and a capstone day, with guided pre-work and a tracked follow-up ablation study
- Total hours: 36 h
- Audience: specialist
- Status: In development

## Description

Participants design and measure harnesses for agents that run for hours, hand work between roles and keep memory across sessions. They build planner, generator and evaluator roles with file-based hand-offs and completion criteria agreed before work starts, design a memory layer that writes, consolidates, retrieves and forgets, run asynchronous subagents that an orchestrator can steer, and make sessions survive restarts. Throughout, they hold the model fixed and remove harness components one at a time to find which still pay, and they finish with a harness design defended on measured evidence. Labs use scaled-down tasks and a course-provided call budget on hosted open-weight models; workflow engines and idempotent tools are taught in DEV-AGT-402.

## Learning outcomes

By the end, the participant can:

- Implement planner, generator and evaluator roles that exchange work through files and stop on completion criteria agreed before work starts.
- Design a memory layer that writes, consolidates, retrieves and forgets, and guards against stale notes, over-recording and concurrent overwrites.
- Build an orchestrator that runs asynchronous subagents it can steer, queue and be notified by, and that receives summaries rather than full transcripts.
- Build durable sessions whose event log is separate from the harness, so that a run resumes after the harness or sandbox is killed.
- Evaluate harness components by ablation with the model held fixed, reporting success over repeated trials, cost and wall-clock time per accepted task.
- Decide whether a multi-agent design or a single agent with subagents fits a task, and defend the choice with measured coordination cost.

## Prerequisites

- [DEV-AGT-301 · Agentic Systems Engineering: Loops, Context and Harnesses](DEV-AGT-301.md)
- [DEV-EVL-302 · Evaluating Agents: Trajectories, Simulation and Consistency](DEV-EVL-302.md)
- Has built and evaluated an agent with tools, memory and a state graph
- Computes a confidence interval for a pass rate and runs a paired comparison

## Topics

### Long-running agents

- Task length at a given reliability and the limits of that measure
- Premature wrap-up near the context limit
- Agents that praise their own work
- Cost and time per accepted task

### Role separation

- Planner, generator and evaluator
- Agreed completion criteria before work
- File-based hand-offs
- When a separate evaluator pays and when it does not
- Evaluators that find a bug and then excuse it

### Context over long horizons

- Compaction versus context reset
- Progressive disclosure and tool search
- Subagents for isolation, and why pulling their transcripts back undoes the benefit
- Cache-aware layout and model switches at natural boundaries

### Memory design

- Notes written in session
- Offline consolidation against transcripts
- A small injected index
- Agent-maintained knowledge bases plus search
- Dating, distrusting and forgetting facts
- Concurrent writers

### Asynchronous and multi-agent work

- Steer, queue and notify
- Coordination topologies: orchestrator-worker, pipeline, peer
- Inter-agent message design
- Delegation across organisations by protocol
- No trust or privilege escalation through delegation
- Cascading failures between agents

### Durable sessions

- Session log, harness and sandbox as replaceable parts
- Resuming from the log after a crash
- Checkpoints at hand-offs
- Background and overnight runs and their review load

### Harness ablation and maintenance

- Holding the model fixed
- Ablation design and repeated trials
- Confidence intervals and practical significance
- Retesting the harness after every model upgrade
- The harness as a versioned product with an owner
