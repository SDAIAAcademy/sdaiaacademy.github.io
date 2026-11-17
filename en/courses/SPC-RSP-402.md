# SPC-RSP-402 · Frontier Seminar: Agent Research and Multi-Agent Systems

- Track: Data Science
- Path: [Research Practice and Frontier](../paths/SPC-RSP.md)
- Level: Level 400 · Evaluate
- Format: Seminar: six weekly sessions of reading, presentation and small replications, rebuilt each term from current conference tutorials and workshops
- Total hours: 24 h
- Audience: specialist
- Status: In development

## Description

A reading and replication seminar on open research problems in language-model agents: memory, long-horizon tasks, goal tracking and coordination among several agents. Each week participants read two or three current papers, present one, and run a small controlled experiment that tests a claim, such as whether a memory design helps once the model and token budget are fixed, or whether several agents beat one agent given the same compute. The seminar ends with a replication note and a research proposal. Building production agents is taught in DEV-AGT-301; this seminar studies them.

## Learning outcomes

By the end, the participant can:

- Explain the main open problems in agent research, namely memory, long horizons, goal drift, credit assignment and coordination, with the strongest current evidence on each.
- Review an agent paper's experimental design, including harness confounds, budget matching and sensitivity to task length.
- Design a controlled experiment that isolates one agent component while holding the model, tools and token budget fixed.
- Build a replication of a small published result on long-horizon or multi-agent behaviour, reporting success over repeated trials with intervals.
- Design a research proposal on one open problem, with hypotheses, an evaluation design and the result that would count as failure.

## Prerequisites

- Has built an agent loop with tool calling and memory, as in DEV-AGT-301, or equivalent
- Runs controlled experiments with seeds and reports intervals, as in SPC-RSP-301
- Reads machine learning papers fluently

## Topics

### Measuring agents fairly

- Harness, tools and budget as confounds
- Success over repeated trials and task-length curves
- Benchmark validity and contamination in agent tasks

### Memory and context

- Context as a budget: summarisation and retrieval memory
- Learned versus engineered memory
- Interference and stale state

### Long horizons and goal tracking

- Planning, replanning and goal drift
- Credit assignment and reinforcement learning on trajectories
- Self-verification and where it fails

### Multi-agent systems

- Debate, division of labour and coordination protocols
- Compute-matched comparison with a single agent
- Cascading errors, collusion and injected instructions between agents
- Game-theoretic and multi-agent reinforcement learning views

### Agents doing research

- Automated experiment loops and what they complete
- Where research judgement still fails
- Oversight of autonomous agents in experiments
