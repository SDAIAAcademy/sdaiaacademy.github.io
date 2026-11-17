# SPC-TRU-301 · Evaluation Science for AI Models

- Track: Data Science
- Path: [Trustworthy AI Science](../paths/SPC-TRU.md)
- Level: Level 300 · Develop
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 40 h
- Audience: specialist
- Status: In development

## Description

Participants treat a benchmark score as a measurement and state what it measures, how precisely and at what cost. They audit a public benchmark for label errors and construct validity, test models for contamination, validate a model-based judge against human labels, report results with uncertainty and compute budgets, and build a small agent evaluation in a sandbox. Statistical depth is in SPC-EXP-402; evaluation of applications and agents for developers is in DEV-EVL-301 and DEV-EVL-302.

## Learning outcomes

By the end, the participant can:

- Explain the main threats to evaluation validity: construct mismatch, contamination, saturation, test awareness and grader error.
- Analyse a public benchmark for label errors and ambiguous items, and recompute model scores on the corrected set.
- Test models for training-data contamination with overlap search, perturbed item variants and completion probes.
- Evaluate a model-based judge against human labels, measure its position, length and self-preference biases, and decide where it may replace human graders.
- Design an agent evaluation that reports success over repeated trials, cost per solved task and failure categories.
- Build a new evaluation for a stated capability and report results with uncertainty, compute budget and known limits.

## Prerequisites

- Runs and scores open-weight language models from Python
- Computes bootstrap intervals and standard errors, as in SPC-STA-201
- Runs containers from the command line

## Next courses

- [SPC-TRU-303 · AI Safety and Alignment Engineering](SPC-TRU-303.md)

## Topics

### Measurement and benchmark design

- Constructs and what a score can claim
- Item writing, keys and adjudication
- Item response theory in brief
- Saturation; private and refreshed test sets
- Datasheets with Arabic and dialect coverage

### Contamination and test awareness

- Overlap search against training corpora
- Perturbed variants, canaries and dated test sets
- Models that detect tests

### Model-based judges

- Pointwise, pairwise and reference-guided judging
- Position, length and self-preference bias
- When a judge may replace people

### Reporting under a budget

- Clustered and paired comparisons
- Prompts, settings and seeds as conditions
- Rankings that shift with test-time compute

### Agent evaluations

- Sandboxes and programmatic checkers
- Repeated trials, transcripts and environment bugs
