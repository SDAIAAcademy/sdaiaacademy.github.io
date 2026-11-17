# DEV-EVL-301 · Evaluation-Driven Development for Language Model Applications

- Track: AI Engineering
- Path: [Evaluation and Quality Engineering for AI Systems](../paths/DEV-EVL.md)
- Level: Level 300 · Develop
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 28 h
- Audience: practitioner
- Status: In development

## Description

Participants learn to treat evaluation as the specification of a language model application. They read traces of a working but unreliable assistant, name its failure modes, turn them into code-based checks and calibrated model-graded checks, and wire the suite into a regression gate. The course uses one synthetic case study from start to finish, and every number a participant reports comes from a run they executed.

## Learning outcomes

By the end, the participant can:

- Distinguish code-based checks, model-graded checks and human review, and state when each is the cheapest reliable instrument.
- Carry out open and axial coding of application traces to produce a failure taxonomy with counts.
- Implement code-based evaluators for structure, grounding and policy rules.
- Calibrate a model-graded evaluator against human labels and report its agreement with a confidence interval.
- Decide between two candidate configurations of an application using a statistically sound comparison.
- Build a regression gate that blocks a change when a critical failure mode gets worse.

## Prerequisites

- Has called a language model API from Python and parsed a structured response
- Reads a confusion matrix and computes precision and recall

## Next courses

- [DEV-EVL-302 · Evaluating Agents: Trajectories, Simulation and Consistency](DEV-EVL-302.md)
- [DEV-EVL-303 · Evaluating Retrieval and Grounded Generation](DEV-EVL-303.md)
- [DEV-EVL-401 · Evaluation Programmes and Release Gates](DEV-EVL-401.md)

## Topics

### Why evaluation is the specification

- Non-determinism and the three gulfs between intent, prompt and behaviour
- Benchmarks versus application evaluations
- What leaderboards do and do not tell you

### Error analysis

- Collecting and sampling traces
- Open coding and axial coding
- Failure taxonomies and saturation
- Prioritising by frequency and severity

### Evaluators

- Assertions and reference-based metrics
- Model-graded checks: binary criteria over rating scales
- Calibrating a grader against human labels
- Correcting observed pass rates for grader error

### Comparing systems

- Paired comparisons and bootstrap intervals
- Sample size and minimum effect of interest
- Cost, latency and quality as one decision

### Evaluation in the delivery pipeline

- Golden sets, versioning and data leakage
- Regression gates in continuous integration
- From offline suites to online monitoring
- Human review queues

### Responsible evaluation

- Subgroup and language slices, including Arabic and English
- Privacy of traces and labelled data
- Documenting limits in a system card
