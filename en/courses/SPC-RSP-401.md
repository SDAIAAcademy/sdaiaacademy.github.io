# SPC-RSP-401 · Reproduction Capstone: Reproduce and Extend a Published Result

- Track: Data Science
- Path: [Research Practice and Frontier](../paths/SPC-RSP.md)
- Level: Level 400 · Evaluate
- Format: Studio: twelve weeks part-time, individual and coached, with proposal, mid-point and panel reviews
- Total hours: 100 h
- Audience: specialist
- Status: In development

## Description

Each participant chooses a result from a recent peer-reviewed paper, reproduces it within an agreed compute budget, extends it with one well-designed experiment, and reports both against a reproducibility checklist. A mid-point review checks the reproduction before extension starts. Credit goes to measurement quality, not agreement with the paper: a carefully measured failure to reproduce, with its likely causes tested, can earn full marks.

## Learning outcomes

By the end, the participant can:

- Defend the choice of a target result on feasibility, licence position and compute budget.
- Reproduce the target result, measuring variation across seeds and logging every deviation from the paper.
- Diagnose the causes of any gap between the reproduced and the published result.
- Design and run one extension that tests the claim beyond its original conditions, such as a new dataset, scale, language or ablation.
- Deliver a reproducibility report that meets a published checklist for code, data, compute, statistics and ethics.
- Defend the findings, including any negative result, under questioning from a panel.

## Prerequisites

- [SPC-RSP-301 · Research Practice Studio](SPC-RSP-301.md)
- Has completed a model development course at level 300, such as SPC-DLR-302, SPC-DLR-303 or SPC-GEN-301, or can show equivalent work
- Writes research-grade training code and profiles a training run

## Topics

### Choosing a target

- What makes a result reproducible within budget
- Licences of code, data and model weights
- Estimating compute from the paper

### Reproduction method

- Environment capture and the limits of determinism
- Seeds, variance and how many runs are enough
- Deviation logs and contacting authors

### Diagnosing gaps

- Unreported hyperparameters and preprocessing
- Evaluation mismatches and contamination
- Hardware and numerical precision effects

### Extension design

- Out-of-distribution and cross-lingual tests, including Arabic
- Ablations and scaling probes
- Plans and stopping rules fixed before the runs

### Reporting

- Reproducibility checklists
- Negative results that others can use
- Releasing artefacts responsibly
