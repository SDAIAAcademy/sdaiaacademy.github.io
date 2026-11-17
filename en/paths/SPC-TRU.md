# SPC-TRU · Trustworthy AI Science

Track: Data Science

## Purpose

Teach specialists to produce scientific evidence about AI models: valid evaluations, causal accounts of their internals, safety evaluations and controls, and tested defences against attack, leakage and unfair treatment.

## Who it is for

Research scientists, data scientists and AI risk analysts who must say what a model can do, how it does it and how it fails, and defend that claim to reviewers.

## Suggested order

Start with SPC-TRU-301, on which the safety course SPC-TRU-303 builds. SPC-TRU-302 (interpretability) and SPC-TRU-304 (robustness, privacy and fairness) follow SPC-DLR-302 and can be taken in either order. SPC-EXP-402 deepens the statistics of evaluation, and SPC-RSP-401 is the natural capstone after any of these courses.

## Courses in order

In the order their prerequisites suggest.

### 1. [SPC-TRU-301 · Evaluation Science for AI Models](../courses/SPC-TRU-301.md)

- Level 300 · Develop · Intensive · 40 h · In development
- Explain the main threats to evaluation validity: construct mismatch, contamination, saturation, test awareness and grader error.
- Analyse a public benchmark for label errors and ambiguous items, and recompute model scores on the corrected set.
- Test models for training-data contamination with overlap search, perturbed item variants and completion probes.
- Evaluate a model-based judge against human labels, measure its position, length and self-preference biases, and decide where it may replace human graders.
- Design an agent evaluation that reports success over repeated trials, cost per solved task and failure categories.
- Build a new evaluation for a stated capability and report results with uncertainty, compute budget and known limits.

### 2. [SPC-TRU-302 · Interpretability of Neural Networks](../courses/SPC-TRU-302.md)

- Level 300 · Develop · Extended · 60 h · In development
- Needs: SPC-DLR-302
- Explain superposition, the linear representation hypothesis and the difference between correlational and causal evidence about model internals.
- Implement activation caching, the logit lens and linear probes, and compare probe accuracy with a control task.
- Diagnose the circuit behind a defined behaviour with activation and path patching, and test it by ablation.
- Build a sparse dictionary of model activations, evaluate its reconstruction, sparsity and interpretability, and steer behaviour with a chosen feature.
- Test two explanation methods for faithfulness with model randomisation, counterfactual inputs and a reasoning-trace consistency check.
- Deliver a reproduction and extension of a published interpretability result, and defend which conclusions the evidence supports.

### 3. [SPC-TRU-303 · AI Safety and Alignment Engineering](../courses/SPC-TRU-303.md)

- Level 300 · Develop · Extended · 60 h · In development
- Needs: SPC-TRU-301
- Compare misuse, misalignment and structural threat models, and describe how safety frameworks tie capability thresholds to safeguards.
- Draft a threat model naming actors, capabilities, harm pathways and the evidence that would rule each pathway in or out.
- Build a dangerous-capability evaluation from safe proxy tasks, with elicitation effort and thresholds fixed in advance.
- Evaluate sycophancy, reward hacking and sandbagging propensities, and test whether results change when the model can tell it is being evaluated.
- Design and stress-test a control protocol in which a trusted monitor reviews an untrusted model's actions.
- Defend a safety case that links each claim about a deployment to evaluation, red-team and monitoring evidence.

### 4. [SPC-TRU-304 · Trustworthy Machine Learning: Robustness, Privacy and Fairness](../courses/SPC-TRU-304.md)

- Level 300 · Develop · Extended · 60 h · In development
- Needs: SPC-DLR-302
- Explain threat models for evasion, poisoning, privacy and fairness harms in terms of attacker knowledge, capability and goal.
- Evaluate an adversarial defence with adaptive attacks and certified bounds, and identify gradient masking.
- Implement a backdoor attack and two detection methods, and measure attack success against clean accuracy.
- Audit a model for training-data leakage, then train with differential privacy and compare measured leakage with the formal bound.
- Test whether an unlearning method removes a forget set, using a retrained model as the reference.
- Design a fairness and uncertainty evaluation that states its measurement assumptions and checks stability under distribution shift.
