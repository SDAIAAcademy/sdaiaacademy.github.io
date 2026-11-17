# SPC-EXP-201 · Designing and Reading Experiments

- Track: Data Science
- Path: [Experimentation and Causal Inference](../paths/SPC-EXP.md)
- Level: Level 200 · Apply
- Format: Workshop: two days with labs, short guided pre-work and a tracked follow-up task
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants design a randomised experiment from a decision question and read its results without fooling themselves. They write a pre-registration with a hypothesis, primary and guardrail metrics, a unit of randomisation and a sample size computed by formula and checked by simulation. They analyse a synthetic experiment log, test whether the randomisation worked, and measure by simulation how peeking, many metrics and a mismatched unit of analysis inflate false wins. The workshop ends with a written critique of a flawed result and a design pack for one experiment.

## Learning outcomes

By the end, the participant can:

- Distinguish a randomised experiment, a quasi-experiment and an observational comparison, and explain what causal claim each can support.
- Draft a pre-registration that states the decision, hypothesis, unit of randomisation, primary and guardrail metrics and the analysis plan.
- Compute the sample size and run time needed to detect a minimum effect of interest, and check the answer by simulation.
- Analyse a completed two-arm experiment with a difference in means, a confidence interval and a sample ratio mismatch test.
- Measure the false-positive rate caused by repeated peeking and by testing many metrics in the same experiment.
- Review a reported experiment result and decide whether it supports the decision it claims to support.

## Prerequisites

- [FND-MTH-104 · Statistics by Simulation: Variation, Estimation and Testing](FND-MTH-104.md)
- Writes short analysis scripts in Python or R with a dataframe library
- Equivalent knowledge of sampling variation and bootstrap intervals, shown in the placement test, is accepted in place of FND-MTH-104

## Next courses

- [SPC-EXP-301 · Online Experiments at Scale](SPC-EXP-301.md)
- [SPC-EXP-303 · Measuring the Impact of AI Deployments](SPC-EXP-303.md)

## Topics

### From decision to hypothesis

- The decision and what result would change it
- Estimands: whose outcome, compared with what
- Primary, secondary and guardrail metrics
- Pre-registration and analysis plans

### Randomisation and control

- Units of randomisation: person, session, cluster
- Simple, stratified and blocked assignment
- Control groups and A/A tests
- Factorial designs and interactions in brief
- Consent and review for experiments on people

### Sample size and power

- Minimum effect of interest
- Variance, baseline rates and traffic
- Formula versus simulation
- Run time and weekly cycles

### Analysis

- Difference in means and proportions
- Confidence intervals and p-values read correctly
- Sample ratio mismatch
- Unit of analysis versus unit of randomisation
- Non-compliance and intention-to-treat analysis

### Reading a result without fooling yourself

- Peeking and optional stopping
- Many metrics and post-hoc subgroups
- Novelty effects, dropout and survivorship
- Practical versus statistical significance

### Reporting

- Results table and decision
- Uncertainty in plain words
- What the experiment does not show
