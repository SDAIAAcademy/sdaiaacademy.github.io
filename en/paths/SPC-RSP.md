# SPC-RSP · Research Practice and Frontier

Track: Data Science

## Purpose

Teach specialists to produce evidence others can trust: read, reproduce, design and report experiments, carry a decision question to a defended recommendation, and follow the research frontier critically.

## Who it is for

AI research scientists, data scientists and research engineers who produce models, methods and evidence, and technical leads who must judge research claims.

## Suggested order

SPC-RSP-101 is an optional awareness seminar on emerging hardware. SPC-RSP-301 (research practice) is the entry point for the stream; data scientists continue to the SPC-RSP-302 practicum, and research scientists continue to the SPC-RSP-401 reproduction capstone and the rotating frontier seminars SPC-RSP-402 to SPC-RSP-404.

## Courses in order

In the order their prerequisites suggest.

### 1. [SPC-RSP-101 · Emerging Computing Paradigms for AI](../courses/SPC-RSP-101.md)

- Level 100 · Explain · Seminar · 12 h · In development
- Explain what a gate-based quantum computer, a spiking neural network and an analogue optical matrix multiplier each compute natively.
- Distinguish demonstrated results, plausible near-term results and unsupported claims for machine learning on each paradigm.
- Identify the bottlenecks that limit practical advantage: data loading, noise and error correction, precision and conversion costs, training methods and software maturity.
- Use a circuit simulator to train a two-qubit variational classifier and compare it with a classical baseline on the same data.
- Analyse an announcement of hardware advantage for AI and draft an assessment of its baseline, problem size, end-to-end cost and missing comparisons.

### 2. [SPC-RSP-301 · Research Practice Studio](../courses/SPC-RSP-301.md)

- Level 300 · Develop · Studio · 60 h · In development
- Prepare a reading note that states a paper's claim, evidence, baselines, compute and threats to validity.
- Reproduce one figure or table from a published paper within a stated compute budget and explain any gap.
- Design and run a tracked follow-up experiment with a stated hypothesis, controls and a seed count justified by a power estimate.
- Compute the uncertainty of model comparisons across seeds and data splits, correcting for multiple comparisons.
- Review a peer's short paper for soundness, clarity, reproducibility and ethics.
- Audit a research agent's overnight experiment results, deciding for each whether to accept, rerun or reject it.

### 3. [SPC-RSP-302 · Data Science Practicum](../courses/SPC-RSP-302.md)

- Level 300 · Develop · Practicum · 100 h · In development
- Needs: SPC-STA-201, SPC-MOD-201
- Design a decision question from a sponsor's request, with options, a success metric, constraints and the evidence that would change the decision.
- Prepare a data audit covering provenance, quality, classification, personal data and fitness for the question.
- Design an analysis plan matched to the question type (descriptive, predictive, causal or optimisation) and fix it before outcomes are examined.
- Build and validate the analysis with baselines, sensitivity checks and stated uncertainty for every number the recommendation relies on.
- Defend a recommendation and its limits to the sponsor and a technical panel, including what evidence would reverse it.
- Prepare a hand-over pack with a decision log, an analysis card, a monitoring suggestion and open risks.

### 4. [SPC-RSP-401 · Reproduction Capstone: Reproduce and Extend a Published Result](../courses/SPC-RSP-401.md)

- Level 400 · Evaluate · Studio · 100 h · In development
- Needs: SPC-RSP-301
- Defend the choice of a target result on feasibility, licence position and compute budget.
- Reproduce the target result, measuring variation across seeds and logging every deviation from the paper.
- Diagnose the causes of any gap between the reproduced and the published result.
- Design and run one extension that tests the claim beyond its original conditions, such as a new dataset, scale, language or ablation.
- Deliver a reproducibility report that meets a published checklist for code, data, compute, statistics and ethics.
- Defend the findings, including any negative result, under questioning from a panel.

### 5. [SPC-RSP-402 · Frontier Seminar: Agent Research and Multi-Agent Systems](../courses/SPC-RSP-402.md)

- Level 400 · Evaluate · Seminar · 24 h · In development
- Explain the main open problems in agent research, namely memory, long horizons, goal drift, credit assignment and coordination, with the strongest current evidence on each.
- Review an agent paper's experimental design, including harness confounds, budget matching and sensitivity to task length.
- Design a controlled experiment that isolates one agent component while holding the model, tools and token budget fixed.
- Build a replication of a small published result on long-horizon or multi-agent behaviour, reporting success over repeated trials with intervals.
- Design a research proposal on one open problem, with hypotheses, an evaluation design and the result that would count as failure.

### 6. [SPC-RSP-403 · Frontier Seminar: AI for Science](../courses/SPC-RSP-403.md)

- Level 400 · Evaluate · Seminar · 24 h · In development
- Explain how scientific foundation models differ from language models in training data, inductive biases, outputs and validation.
- Use an open-weight scientific model to produce predictions on public data and compare them with a domain baseline.
- Design an evaluation split that prevents leakage through sequence similarity, spatial proximity or temporal overlap.
- Review a published AI-for-science claim for its baselines, its validation against experiment or observation, and its uncertainty.
- Design a validation plan for using a scientific model in a domain project, naming the experimental or field evidence required.

### 7. [SPC-RSP-404 · Frontier Seminar: Neurosymbolic Methods and AI for Mathematics](../courses/SPC-RSP-404.md)

- Level 400 · Evaluate · Seminar · 24 h · In development
- Explain the main neurosymbolic patterns: a model proposes and a solver checks, a model guides search, differentiable logic, and learned heuristics inside solvers.
- Use a language model with a proof assistant to prove a set of small lemmas and report success over repeated attempts.
- Build a generate-and-verify loop that writes code with a formal specification and rejects any output the verifier does not accept.
- Evaluate the faithfulness of autoformalised statements against their informal originals.
- Review a neurosymbolic or AI-for-mathematics paper for what its verification guarantees, its contamination risk and its compute budget.
