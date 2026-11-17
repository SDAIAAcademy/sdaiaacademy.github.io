# DEV-EVL-302 · Evaluating Agents: Trajectories, Simulation and Consistency

- Track: AI Engineering
- Path: [Evaluation and Quality Engineering for AI Systems](../paths/DEV-EVL.md)
- Level: Level 300 · Develop
- Format: Workshop: two days with labs and a short evaluation project, with guided pre-work
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants evaluate a tool-using agent for a synthetic travel-booking service. They grade the sandbox's final state and the transcript, drive dialogues with a simulated user holding a hidden goal, repeat tasks to measure consistency and cost per completed job, and repair evaluations that mislead.

## Learning outcomes

By the end, the participant can:

- Implement final-state outcome checks and transcript checks on tool use, side effects and policy.
- Configure a simulated user with a persona, a hidden goal and a stop rule, and measure its fidelity.
- Compute one-success and every-success rates over k trials with small-sample intervals, and the cost per completed job.
- Diagnose and repair an agent evaluation that gives a misleading score.
- Build capability and regression suites for an agent and defend which metric should gate its release.

## Prerequisites

- [DEV-EVL-301 · Evaluation-Driven Development for Language Model Applications](DEV-EVL-301.md)
- Has built a tool-calling agent, for example in DEV-AGT-301
- Computes a proportion and its confidence interval

## Next courses

- [DEV-AGT-401 · Harness Engineering for Long-Running and Multi-Agent Systems](DEV-AGT-401.md)

## Topics

### Grading agents

- State, tool, side-effect and policy checks
- Several valid paths, not one reference trajectory
- Capability versus regression suites

### Simulated users and environments

- Persona, hidden goal, stop rule and goal leakage
- Mock tools with resettable state

### Consistency and cost

- Pass at k versus pass to the power k (75% per trial: about 42% for three of three)
- Task-level intervals; cost and turns per completed job

### When evaluations mislead

- State leaking between trials
- Agents reading answer keys or version history
- Infrastructure noise and ambiguous tasks
