# SPC-RSP-301 · Research Practice Studio

- Track: Data Science
- Path: [Research Practice and Frontier](../paths/SPC-RSP.md)
- Level: Level 300 · Develop
- Format: Studio: eight weeks part-time with weekly coached clinics, an exchanged peer review and a final defence
- Total hours: 60 h
- Audience: specialist
- Status: In development

## Description

Participants practise a research group's working habits on one small question: structured paper reading, reproducing a published result on a small budget, a tracked follow-up experiment across seeds, sound statistics, a short paper, a peer review and an open-source contribution. They also supervise a research agent running overnight experiments and decide which of its results to accept.

## Learning outcomes

By the end, the participant can:

- Prepare a reading note that states a paper's claim, evidence, baselines, compute and threats to validity.
- Reproduce one figure or table from a published paper within a stated compute budget and explain any gap.
- Design and run a tracked follow-up experiment with a stated hypothesis, controls and a seed count justified by a power estimate.
- Compute the uncertainty of model comparisons across seeds and data splits, correcting for multiple comparisons.
- Review a peer's short paper for soundness, clarity, reproducibility and ethics.
- Audit a research agent's overnight experiment results, deciding for each whether to accept, rerun or reject it.

## Prerequisites

- Trains, evaluates and debugs a neural network or gradient-boosted model in Python, as in SPC-DLR-302 or SPC-MOD-201
- Computes a confidence interval and runs a two-sample test, as in FND-MTH-104 or SPC-STA-201
- Uses Git for daily work

## Next courses

- [SPC-RSP-401 · Reproduction Capstone: Reproduce and Extend a Published Result](SPC-RSP-401.md)

## Topics

### Reading and positioning

- Three-pass reading and reading notes
- Related work and citation checks
- Claims, evidence and threats to validity

### Reproduction and experiment design

- Configurations, seeds and environment capture
- Compute budgets; debugging on a CPU first
- Baselines, controls and ablations

### Tracking and statistics

- Experiment tracking and run metadata
- Seed variance, paired comparisons, bootstrap intervals
- Multiple comparisons and forking paths

### Supervising research agents

- Automated experiment loops and what they optimise
- Overfitting to the validation set by search
- Audit trails and acceptance rules

### Writing, review and open science

- Paper structure, figures, compute reporting and limitations
- Reviewing against a reproducibility and ethics checklist
- Authorship, AI disclosure, fabricated citations
- Contributing to open-source research code
