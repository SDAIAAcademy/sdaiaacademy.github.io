# LDS-AIG-301 · Assessing Models and Systems: Fairness, Robustness and Safety Evidence

- Track: Executives & Leaders
- Path: [AI Governance, Risk and Assurance](../paths/LDS-AIG.md)
- Level: Level 300 · Develop
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: specialist
- Status: In development

## Description

Participants produce and judge the technical evidence that a risk or governance function relies on. In provided notebooks they measure subgroup error rates with uncertainty, test models under distribution shift and input perturbation, measure harmful and ungrounded outputs of a bilingual language model assistant, and audit a supplier's evaluation report for gaps. Data are synthetic credit, hiring and service-assistant cases with planted defects. The capstone is an independent assessment report and model card for one system, defended live. Building evaluation pipelines is DEV-EVL-301; research methods for robustness and fairness are SPC-TRU-304.

## Learning outcomes

By the end, the participant can:

- Explain why common group fairness criteria cannot all hold at once and which criterion suits which decision context.
- Compute subgroup performance and fairness metrics with confidence intervals and flag differences that exceed a stated tolerance.
- Test model behaviour under distribution shift and input perturbation, including Arabic and English text variants.
- Measure harmful, ungrounded and policy-violating outputs of a language model assistant with a test set and a calibrated grader.
- Prepare post-deployment checks for drift and subgroup degradation with thresholds, data sources and owners.
- Audit a supplier's evaluation report for contamination, test awareness, missing subgroups, unreported uncertainty and mismatch with intended use.
- Evaluate whether a system's evidence supports deployment at its risk level and recommend approval with conditions, or rejection.

## Prerequisites

- Computes and interprets a confidence interval and a difference between two proportions
- Reads a confusion matrix and computes precision, recall and false positive rate
- Runs, edits and re-runs cells in a provided Python notebook
- Places an AI system on a risk level and states what that level requires (LDS-AIG-201, or LDS-AIG-204 for risk analysts)

## Topics

### Evidence for assurance

- What assurance needs from evaluation
- Intended use, risk level and strength of evidence
- Independence and conflicts of interest
- The gap between test results and deployed behaviour
- Explanation methods as evidence, and their limits

### Fairness measurement

- Group criteria: demographic parity, equalised odds, calibration within groups
- Incompatibility results and choosing a criterion
- Small subgroups and intervals
- Intersectional slices
- Proxies, missing protected attributes and the lawful use of sensitive data for bias testing
- Mitigation options and their side effects

### Reliability under change

- Distribution shift and temporal drift
- Input perturbation, including dialect, spelling and script variation
- Uncertainty and calibration
- Stress and edge cases

### Evaluating generative systems

- Harm categories and test-set design
- Groundedness and hallucination checks
- Model-graded checks calibrated against people
- Red-team results as evidence
- Contamination and test awareness

### Reading evaluation reports

- Model cards and system cards
- Benchmark claims and what they omit
- Vendor and third-party reports
- Requesting the missing evidence

### From results to decisions

- Tolerance thresholds per risk level
- Conditions of approval
- Monitoring requirements
- Writing the assessment report, model card and fairness position statement
