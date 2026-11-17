# SPC-TRU-304 · Trustworthy Machine Learning: Robustness, Privacy and Fairness

- Track: Data Science
- Path: [Trustworthy AI Science](../paths/SPC-TRU.md)
- Level: Level 300 · Develop
- Format: Extended: 10 weeks part-time, a weekly lecture and lab, four graded labs and an evaluation paper
- Total hours: 60 h
- Audience: specialist
- Status: In development

## Description

Participants attack and defend machine learning models and measure what each defence buys. They evaluate adversarial defences without being misled by gradient masking, plant and detect backdoors, run membership-inference and extraction attacks on models trained on synthetic records, train with differential privacy and audit the guarantee, check whether unlearning removes what it claims, and examine fairness and uncertainty under distribution shift. De-identification and subgroup audits are in SPC-MOD-306, calibration basics in SPC-MOD-301 and pipeline privacy engineering in DEV-SEC-303.

## Learning outcomes

By the end, the participant can:

- Explain threat models for evasion, poisoning, privacy and fairness harms in terms of attacker knowledge, capability and goal.
- Evaluate an adversarial defence with adaptive attacks and certified bounds, and identify gradient masking.
- Implement a backdoor attack and two detection methods, and measure attack success against clean accuracy.
- Audit a model for training-data leakage, then train with differential privacy and compare measured leakage with the formal bound.
- Test whether an unlearning method removes a forget set, using a retrained model as the reference.
- Design a fairness and uncertainty evaluation that states its measurement assumptions and checks stability under distribution shift.

## Prerequisites

- [SPC-DLR-302 · Deep Learning from First Principles](SPC-DLR-302.md)
- Trains and evaluates an image or tabular classifier
- Reads probability and optimisation notation

## Topics

### Evaluation discipline

- Threat models
- Adaptive attacks and gradient masking
- Reporting at low false-positive rates

### Adversarial robustness

- Gradient-based attacks and adversarial training
- Certified defences by randomised smoothing
- Adversarial suffixes against language models

### Poisoning, backdoors and model theft

- Dirty-label and clean-label poisoning
- Poisoning of fine-tuning data
- Detection and removal
- Model stealing and output watermarks

### Privacy and unlearning

- Membership inference and training-data extraction
- Differentially private training and privacy accounting
- Empirical auditing of privacy guarantees
- Exact and approximate unlearning

### Uncertainty and fairness research methods

- Conformal prediction under distribution shift
- Out-of-distribution detection and selective prediction
- Fairness criteria and impossibility results
- Measurement error in labels and group attributes
