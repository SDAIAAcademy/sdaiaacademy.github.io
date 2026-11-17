# SPC-DLR-302 · Deep Learning from First Principles

- Track: Data Science
- Path: [Deep Learning and Model Development](../paths/SPC-DLR.md)
- Level: Level 300 · Develop
- Format: Extended: 12 weeks part-time, two sessions a week (concepts, then a supervised lab), weekly build modules, two supervised tests and a reproduction capstone
- Total hours: 80 h
- Audience: specialist
- Status: In development

## Description

Participants build deep learning from the bottom up, then test what they believe about it. They extend their scalar engine from SPC-DLR-301 into a small NumPy tensor library with broadcasting, layers and optimisers, and train a convolutional network with it. They then use a standard framework to train convolutional, recurrent and transformer models on public data, transfer hyperparameters across widths, probe a self-supervised encoder and run controlled ablations over several seeds. Production training pipelines are DEV-MLE-202.

## Learning outcomes

By the end, the participant can:

- Build a tensor library with automatic differentiation, layers, losses and optimisers on the SPC-DLR-301 engine.
- Implement and train multilayer, convolutional, recurrent and transformer models in a standard framework.
- Apply schedules, normalisation, initialisation and width-aware hyperparameter transfer when tuning a model.
- Diagnose why a training run fails or underperforms and fix the cause.
- Measure the quality of learned representations with linear probes and nearest-neighbour retrieval.
- Design and run a controlled ablation that tests a claim about architecture, optimisation or generalisation.

## Prerequisites

- [SPC-DLR-301 · Mathematics for Model Builders](SPC-DLR-301.md)
- Writes object-oriented Python and NumPy code
- Has trained a classical model and reported held-out metrics, at the depth of FND-AIC-101

## Next courses

- [SPC-DLR-303 · Building a Language Model from Scratch](SPC-DLR-303.md)
- [SPC-DLR-402 · Efficient Deep Learning: Compression, Quantisation and Long Context](SPC-DLR-402.md)
- [SPC-GEN-301 · Diffusion and Flow Matching from Scratch](SPC-GEN-301.md)
- [SPC-GEN-302 · Vision and Multimodal Foundation Models](SPC-GEN-302.md)
- [SPC-GEN-303 · Speech and Arabic Language Modelling](SPC-GEN-303.md)
- [SPC-GEN-304 · Reinforcement Learning and Decision Making](SPC-GEN-304.md)
- [SPC-TRU-302 · Interpretability of Neural Networks](SPC-TRU-302.md)
- [SPC-TRU-304 · Trustworthy Machine Learning: Robustness, Privacy and Fairness](SPC-TRU-304.md)

## Topics

### Automatic differentiation and frameworks

- Reverse mode on tensors
- Broadcasting and its gradients
- Saved activations and memory

### Optimisation and scaling rules

- Momentum, AdamW, warm-up and decay
- Initialisation and normalisation
- Hyperparameter transfer across width
- Newer optimisers as claims to test

### Architectures and inductive bias

- Residual and convolutional networks
- Recurrent and state-space models in one session
- Attention and the transformer block

### Generalisation

- Regularisation and augmentation
- Overparameterisation and double descent
- Distribution shift and calibration

### Representation learning

- Contrastive and masked self-supervision
- Linear probes and embedding geometry
- Transfer to new tasks

### Experimental practice

- Debugging on a CPU before spending accelerator hours
- Seeds, variance and intervals
- Experiment tracking
