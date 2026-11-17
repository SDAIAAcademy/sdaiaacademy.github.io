# DEV-EVL · Evaluation and Quality Engineering for AI Systems

Track: AI Engineering

## Purpose

Teach developers to measure whether an AI system does its job, find out why it fails, and keep it from regressing.

## Who it is for

Developers, data scientists and product owners who ship or approve systems built on language models and other learned components.

## Suggested order

Start with DEV-EVL-301 (error analysis and a first evaluation suite), continue to agent and retrieval evaluation (DEV-EVL-302, DEV-EVL-303) and annotation operations (DEV-EVL-304), then to evaluation programmes and release gates (DEV-EVL-401).

## Courses in order

In the order their prerequisites suggest.

### 1. [DEV-EVL-301 · Evaluation-Driven Development for Language Model Applications](../courses/DEV-EVL-301.md)

- Level 300 · Develop · Intensive · 28 h · In development
- Distinguish code-based checks, model-graded checks and human review, and state when each is the cheapest reliable instrument.
- Carry out open and axial coding of application traces to produce a failure taxonomy with counts.
- Implement code-based evaluators for structure, grounding and policy rules.
- Calibrate a model-graded evaluator against human labels and report its agreement with a confidence interval.
- Decide between two candidate configurations of an application using a statistically sound comparison.
- Build a regression gate that blocks a change when a critical failure mode gets worse.

### 2. [DEV-EVL-302 · Evaluating Agents: Trajectories, Simulation and Consistency](../courses/DEV-EVL-302.md)

- Level 300 · Develop · Workshop · 16 h · In development
- Needs: DEV-EVL-301
- Implement final-state outcome checks and transcript checks on tool use, side effects and policy.
- Configure a simulated user with a persona, a hidden goal and a stop rule, and measure its fidelity.
- Compute one-success and every-success rates over k trials with small-sample intervals, and the cost per completed job.
- Diagnose and repair an agent evaluation that gives a misleading score.
- Build capability and regression suites for an agent and defend which metric should gate its release.

### 3. [DEV-EVL-303 · Evaluating Retrieval and Grounded Generation](../courses/DEV-EVL-303.md)

- Level 300 · Develop · Workshop · 12 h · In development
- Needs: DEV-EVL-301
- Design a retrieval test set covering Arabic and English, dialect and spelling variants, and unanswerable and multi-passage questions.
- Compute rank-aware retrieval metrics for two retrievers and compare them with a paired interval.
- Implement claim-level support, citation and completeness checks and calibrate the model-graded step against human labels.
- Diagnose the main source of failure in a grounded-generation system and decide which component to change first.

### 4. [DEV-EVL-304 · Annotation, Golden Data and Human Review Operations](../courses/DEV-EVL-304.md)

- Level 300 · Develop · Workshop · 16 h · In development
- Draft a labelling guideline with definitions, decision rules and edge cases, and revise it after a pilot.
- Compute chance-corrected agreement by category and rater to find ambiguous categories.
- Measure a language model labeller's reliability against adjudicated labels before and after a prompt change.
- Design a golden evaluation set with a sampling plan, adjudication, versioning and leakage safeguards.
- Design and cost a human review queue: sampling rules, capacity, quality checks and a route into the evaluation set.

### 5. [DEV-EVL-401 · Evaluation Programmes and Release Gates](../courses/DEV-EVL-401.md)

- Level 400 · Evaluate · Intensive · 30 h · In development
- Needs: DEV-EVL-301
- Design a risk-tiered evaluation policy stating the suites, sample sizes, human review and sign-off each tier requires.
- Design release criteria with blocking thresholds, non-inferiority margins and re-evaluation triggers fixed in advance, and back-test them.
- Audit a public benchmark or vendor claim for validity, contamination, harness sensitivity and dependence on token budget.
- Design a monitoring plan linking production signals to offline suites and turning incidents into regression cases.
- Analyse the running cost of an evaluation programme across grader calls, review hours and infrastructure, and allocate it by tier.
- Defend a release recommendation, presenting the evidence with its uncertainty and residual risk.
