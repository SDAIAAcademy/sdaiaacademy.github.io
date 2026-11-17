# DEV-MLE-202 · Deep Learning Engineering

- Track: AI Engineering
- Path: [Machine Learning Engineering](../paths/DEV-MLE.md)
- Level: Level 200 · Apply
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: practitioner
- Status: In development

## Description

Participants make neural networks train, tell a bug from a hard problem, and spend accelerator time well. They check automatic differentiation by hand, write a training loop that checkpoints and resumes, diagnose seeded faults, fine-tune open-weight pretrained models against training from scratch, and raise throughput with mixed precision and better data loading. Labs debug on a laptop CPU first, then use a fixed budget of GPU hours on a free notebook service or Academy machines.

## Learning outcomes

By the end, the participant can:

- Compute gradients by reverse-mode automatic differentiation and estimate the memory held by saved activations.
- Implement a training loop with learning-rate scheduling, checkpointing, resumption and fixed seeds.
- Diagnose faults in broken training runs using overfit-one-batch tests, loss and gradient-norm curves and data checks.
- Apply transfer learning from an open-weight model, comparing frozen, partial and full fine-tuning with training from scratch.
- Measure throughput and peak memory, then apply mixed precision, data-loading and batch-size changes.
- Use experiment tracking to run a bounded hyperparameter search and report results across seeds.

## Prerequisites

- [DEV-MLE-201 · Machine Learning Engineering: Baselines, Validation and Pipelines](DEV-MLE-201.md)
- Writes Python classes and works with NumPy arrays
- Applies the chain rule to a small composite function (FND-MTH-102 or equivalent)

## Next courses

- [DEV-MLE-301 · Computer Vision Engineering](DEV-MLE-301.md)
- [DEV-MLE-302 · Speech and Audio Systems Engineering](DEV-MLE-302.md)
- [DEV-MLE-303 · Recommender and Ranking Systems Engineering](DEV-MLE-303.md)
- [DEV-MLE-305 · Geospatial and Earth-Observation AI Engineering](DEV-MLE-305.md)
- [DEV-INF-402 · Scaling Machine Learning Systems: Distributed Training and Fleets](DEV-INF-402.md)

## Topics

### Tensors and automatic differentiation

- Shapes, broadcasting and devices
- Reverse mode and gradient checking
- Memory held by saved activations
- Building blocks: linear, convolution, attention, normalisation, residual

### The training loop

- Loaders, losses and reductions
- Optimisers and learning-rate schedules
- Regularisation, early stopping and validation curves
- Checkpointing, resumption and determinism

### Debugging training

- Overfit one batch first
- Reading loss and gradient-norm curves
- Exploding, vanishing and dead units
- Data and label bugs

### Pretrained models and transfer

- Choosing an open-weight backbone and checking its licence
- Frozen, partial and full fine-tuning
- Adapters in brief (depth in DEV-LLM-301)

### Throughput and experiments

- Mixed precision, loss scaling and graph compilation
- Data-loading bottlenecks and gradient accumulation
- Profiling and GPU-hour accounting
- Seeds, bounded search and ablations; multi-device training is DEV-INF-402
