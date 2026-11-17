# DEV-MLE-303 · Recommender and Ranking Systems Engineering

- Track: AI Engineering
- Path: [Machine Learning Engineering](../paths/DEV-MLE.md)
- Level: Level 300 · Develop
- Format: Intensive: 3 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: practitioner
- Status: In development

## Description

Participants build a two-stage recommender on a public interaction log: candidate generation with matrix factorisation, a two-tower model and an approximate nearest-neighbour index, then a learned ranker with business rules and diversity re-ranking. They evaluate offline with time-based splits, estimate a new policy's effect from logged data, and design an online test with guardrails. Cold start, popularity bias and feedback loops are treated as engineering problems with measurable controls. Experiment statistics in depth are in SPC-EXP-301, and policy learning in SPC-EXP-401.

## Learning outcomes

By the end, the participant can:

- Prepare an interaction dataset with implicit-feedback labels, time-based splits and leakage checks.
- Implement candidate generation with matrix factorisation and a two-tower model served from an approximate nearest-neighbour index.
- Build a learned ranking stage with business rules and diversity re-ranking over retrieved candidates.
- Compute an off-policy estimate of a new ranking policy from logged data, with its variance.
- Design an online experiment for a ranking change, with primary metric, guardrails, duration and feedback-loop risk.
- Diagnose cold-start and popularity-bias failures and select controls for new users, new items and long-tail exposure.

## Prerequisites

- [DEV-MLE-201 · Machine Learning Engineering: Baselines, Validation and Pipelines](DEV-MLE-201.md)
- [DEV-MLE-202 · Deep Learning Engineering](DEV-MLE-202.md)
- Writes SQL joins and window functions over event tables

## Topics

### Framing

- Explicit and implicit feedback
- Relevance, diversity, novelty and value
- Multi-stage architecture and latency per stage

### Candidate generation

- Matrix factorisation and item similarity
- Two-tower models and negative sampling
- Approximate nearest-neighbour indexes
- Sequence-aware and language-model-based retrieval

### Ranking

- Pointwise, pairwise and listwise losses
- Gradient-boosted rankers
- Re-ranking for diversity, freshness and rules

### Evaluation

- Time-based splits and leakage
- Recall, NDCG and coverage
- Why sampled-negative metrics mislead
- Position bias and click models
- Off-policy estimation
- Interleaving and guarded online tests

### Feedback loops and operations

- Cold start
- Popularity bias and exposure fairness
- Feature freshness and retraining cadence
- Detecting self-reinforcing loops
