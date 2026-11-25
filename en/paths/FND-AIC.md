# FND-AIC · AI Concepts and Responsible Practice

Track: Data & AI Foundations

## Purpose

Give future builders and analysts a tested grasp of how machine learning and language models behave, how to read evidence about them, and how to build and document responsibly from the first project.

## Who it is for

Graduates, career changers and computing professionals preparing for Developer or Specialist courses, who can run a Python notebook but have not yet studied AI methods.

## Suggested order

Start with FND-AIC-101 and FND-AIC-102, which most level 200 Developer and Specialist courses assume, and take the short FND-AIC-103 and FND-AIC-104 before a first build; FND-AIC-106 runs alongside a first project, and FND-AIC-105 is optional for career changers heading towards AI research or agent work. They lead to DEV-LLM-201, DEV-MLE-201 and SPC-MOD-201.

## Courses in order

In the order their prerequisites suggest.

### 1. [FND-AIC-101 · How Machine Learning Works](../courses/FND-AIC-101.md)

- Level 100 · Explain · Intensive · 30 h · Available
- Needs: FND-PRG-101
- Explain how a supervised learner fits a prediction rule by minimising a loss.
- Distinguish training, validation and test data, and identify overfitting and underfitting from plotted curves.
- Identify target, duplicate, preprocessing and temporal leakage in modelling pipelines.
- Implement a train, validate and test workflow comparing a baseline, a linear model and a decision tree.
- Compute confusion-matrix metrics and choose a threshold from error costs and the base rate.
- Draft a one-page model card with intended use, data, metrics by subgroup and known limits.

### 2. [FND-AIC-102 · How Language Models Work](../courses/FND-AIC-102.md)

- Level 100 · Explain · Workshop · 16 h · In development
- Explain how a model generates text by repeated next-token prediction and how sampling settings change the output.
- Measure token counts for parallel Arabic and English text across two tokenisers.
- Describe how pretraining, post-training and reasoning effort shape an assistant's answers, and what a knowledge cut-off limits.
- Implement a minimal tool-calling loop and mark which steps the model and the program each perform.
- Identify typical failure modes in model transcripts and name a check that catches each.

### 3. [FND-AIC-103 · Reading AI Evidence: Benchmarks, Claims and Statistics](../courses/FND-AIC-103.md)

- Level 100 · Explain · Workshop · 8 h · In development
- Explain what a benchmark measures and name threats to its validity, such as contamination, saturation and invalid items.
- Identify why two reported scores are not comparable: partial credit, attempts, harness, token budget or grader.
- Compute an interval for a reported accuracy difference and decide whether it exceeds sampling noise.
- Explain how adoption and productivity figures differ by denominator, time window and self-reported or measured effect.
- Draft an evidence brief that separates what a published AI claim shows from what it asserts, using its model card.

### 4. [FND-AIC-104 · Responsible Data and AI Practice for Builders](../courses/FND-AIC-104.md)

- Level 100 · Explain · Workshop · 12 h · In development
- Explain the data protection principles that shape a build, from lawful basis to transfer and breach notice.
- Classify project data by sensitivity and decide what may go to an external model service.
- Analyse model and dataset licences, including attribution and non-commercial terms, against a stated use.
- Identify the build check and user disclosure that each AI ethics principle requires.
- Apply security hygiene to a repository: remove secrets, pin and audit dependencies, validate model output.

### 5. [FND-AIC-105 · Classical AI: Search, Planning and Knowledge Representation](../courses/FND-AIC-105.md)

- Level 100 · Explain · Intensive · 30 h · In development
- Needs: FND-PRG-101
- Describe a problem as states, actions, goal and costs, and distinguish when search, constraints, planning or logic fits it.
- Implement uniform-cost and A* search with an admissible heuristic and measure the nodes each expands.
- Implement a constraint model of a timetabling problem with hard rules and soft preferences.
- Explain how a classical planner derives a plan from action definitions and why each step can be checked.
- Implement eligibility rules in logic and use an inference engine to answer queries and expose conflicts.
- Compare a classical method and a language-model-only attempt for correctness, verifiability, cost and explanation.

### 6. [FND-AIC-106 · Technical Writing for Data and AI Work](../courses/FND-AIC-106.md)

- Level 100 · Explain · Workshop · 12 h · Available
- Identify the reader, purpose and required sections of five common technical document types.
- Draft a README that lets a stranger install, run and check a small project.
- Draft a one-page decision memo with options, trade-offs, a recommendation and the conditions that would change it.
- Prepare an experiment report and a model card that state uncertainty, results by data slice and known limits.
- Compare an unassisted draft with an assisted revision for accuracy, clarity and invented content.
