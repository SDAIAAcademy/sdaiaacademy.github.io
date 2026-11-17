# SPC-TRU-302 · Interpretability of Neural Networks

- Track: Data Science
- Path: [Trustworthy AI Science](../paths/SPC-TRU.md)
- Level: Level 300 · Develop
- Format: Extended: 10 weeks part-time, a weekly lecture and lab, four graded assignments and a replication project
- Total hours: 60 h
- Audience: specialist
- Status: In development

## Description

Participants open up trained networks and test claims about how they compute. On small open-weight transformers and toy models, they cache activations, train linear probes, reverse-engineer induction and indirect-object circuits with activation patching, train a sparse dictionary on a residual stream and steer the model with its features. Every claim is tested by intervention, and the course spends as long on what explanations fail to show as on how to produce them. The project replicates and extends one published result.

## Learning outcomes

By the end, the participant can:

- Explain superposition, the linear representation hypothesis and the difference between correlational and causal evidence about model internals.
- Implement activation caching, the logit lens and linear probes, and compare probe accuracy with a control task.
- Diagnose the circuit behind a defined behaviour with activation and path patching, and test it by ablation.
- Build a sparse dictionary of model activations, evaluate its reconstruction, sparsity and interpretability, and steer behaviour with a chosen feature.
- Test two explanation methods for faithfulness with model randomisation, counterfactual inputs and a reasoning-trace consistency check.
- Deliver a reproduction and extension of a published interpretability result, and defend which conclusions the evidence supports.

## Prerequisites

- [SPC-DLR-302 · Deep Learning from First Principles](SPC-DLR-302.md)
- Implements a transformer block and training loop
- Uses projections, bases and singular value decomposition fluently

## Topics

### Foundations

- The residual stream view of a transformer
- Superposition and toy models
- Correlational versus causal evidence

### Probing

- Linear probes and control tasks
- Logit lens and tuned lens
- World-state probes in synthetic game models

### Circuits and causal interventions

- Activation, path and attribution patching
- Induction heads and in-context learning
- Ablation, faithfulness and completeness

### Feature dictionaries

- Sparse autoencoders and transcoders
- Dead features, feature splitting and reconstruction error
- Automated feature labelling and attribution graphs

### Steering and editing

- Steering vectors and persona directions
- Locating and editing factual associations
- Side effects of interventions

### Limits of explanation

- Sanity checks for attribution maps
- Interpretability illusions
- Faithfulness of reasoning-model traces
- What an audit can rest on
