# SPC-DLR · Deep Learning and Model Development

Track: Data Science

## Purpose

Teach specialists to build, train, adapt and compress neural networks and language models from first principles, and to back every claim about them with measured evidence.

## Who it is for

Machine learning engineers, research scientists and strong data scientists who train or adapt models as an end in itself, not only build applications on them.

## Suggested order

SPC-DLR-301 bridges the mathematics; SPC-DLR-302 and SPC-DLR-303 build networks and a small language model from scratch; SPC-DLR-304 and SPC-DLR-305 add training systems, data and scaling; SPC-DLR-306 and SPC-DLR-401 cover post-training and SPC-DLR-402 efficiency, with SPC-RSP-401 as the reproduction capstone.

## Courses in order

In the order their prerequisites suggest.

### 1. [SPC-DLR-301 · Mathematics for Model Builders](../courses/SPC-DLR-301.md)

- Level 300 · Develop · Extended · 45 h · In development
- Apply eigen and singular value decompositions to explain and compress the weight matrices of a trained network.
- Compute gradients and Jacobians of vector and matrix expressions in matrix notation.
- Build a scalar reverse-mode automatic differentiation engine and use it to train a two-layer network.
- Analyse how step size, momentum and adaptive scaling interact with curvature and conditioning.
- Compute entropy, cross-entropy, divergence and bits per byte, and derive training losses from maximum likelihood.
- Diagnose and fix numerical failures such as overflow, cancellation and precision loss in low-precision formats.

### 2. [SPC-DLR-302 · Deep Learning from First Principles](../courses/SPC-DLR-302.md)

- Level 300 · Develop · Extended · 80 h · In development
- Needs: SPC-DLR-301
- Build a tensor library with automatic differentiation, layers, losses and optimisers on the SPC-DLR-301 engine.
- Implement and train multilayer, convolutional, recurrent and transformer models in a standard framework.
- Apply schedules, normalisation, initialisation and width-aware hyperparameter transfer when tuning a model.
- Diagnose why a training run fails or underperforms and fix the cause.
- Measure the quality of learned representations with linear probes and nearest-neighbour retrieval.
- Design and run a controlled ablation that tests a claim about architecture, optimisation or generalisation.

### 3. [SPC-DLR-303 · Building a Language Model from Scratch](../courses/SPC-DLR-303.md)

- Level 300 · Develop · Extended · 80 h · In development
- Needs: SPC-DLR-302
- Build a byte-level BPE tokeniser and compare its compression across languages.
- Build a decoder-only transformer and its training loop from tensor operations.
- Compute parameters, operations and memory for a configuration, and choose a model size and token count within budget.
- Implement sampling strategies and a KV cache for generation.
- Diagnose instability in language model training from logged loss, gradient norms and activation statistics.
- Evaluate a trained small language model on held-out loss, benchmarks and samples, and document its limits.

### 4. [SPC-DLR-304 · Training Systems for Large Models](../courses/SPC-DLR-304.md)

- Level 300 · Develop · Extended · 60 h · In development
- Needs: SPC-DLR-303
- Compute the arithmetic, memory and communication cost of a training configuration and predict its step time with a roofline model.
- Analyse a profiler trace of a training step, attributing time to kernels, transfers, data loading and communication.
- Build a fused attention kernel with tiling and an online softmax.
- Build data-parallel training with sharded optimiser state from collective communication primitives.
- Optimise end-to-end training throughput under a fixed memory limit without changing results beyond a stated tolerance.
- Analyse tensor, pipeline, sequence and expert parallelism plans for a model too large for one node.

### 5. [SPC-DLR-305 · Data and Scaling for Foundation Models](../courses/SPC-DLR-305.md)

- Level 300 · Develop · Intensive · 40 h · In development
- Needs: SPC-DLR-303
- Prepare a text pipeline from raw web archives covering extraction, language identification, quality filters and personal-data removal.
- Implement near-duplicate detection with MinHash and decontaminate the corpus against evaluation sets.
- Evaluate a filter, synthetic dataset or mixture by training small models on its output at equal compute.
- Build a scaling-law fit from small runs and use it to decide model size and token count for a budget.
- Draft a data card recording sources, licences, opt-out handling, filters and known gaps.

### 6. [SPC-DLR-306 · Post-Training I: Fine-Tuning, Preference Optimisation and Distillation](../courses/SPC-DLR-306.md)

- Level 300 · Develop · Extended · 60 h · In development
- Needs: SPC-DLR-303
- Prepare instruction and preference datasets with chat templates, loss masking, decontamination and licence checks.
- Build supervised fine-tuning runs with full-parameter and low-rank adapter variants and decide between them.
- Build a reward model and a DPO run from their loss functions.
- Apply sequence-level and logit-level distillation from a larger teacher to a smaller student.
- Apply weight-merging methods to combine checkpoints tuned for different skills.
- Evaluate an adapted model for improvements, forgetting, instruction following and safety regressions.

### 7. [SPC-DLR-401 · Post-Training II: Reinforcement Learning for Language Models](../courses/SPC-DLR-401.md)

- Level 400 · Evaluate · Extended · 60 h · In development
- Needs: SPC-DLR-306
- Build an RL training loop for a language model with group-relative advantages, clipping and a divergence penalty.
- Design verifiable reward functions for maths, code and format tasks that reject known exploits.
- Diagnose reward hacking and pathologies such as length inflation, format gaming and entropy collapse, and fix them.
- Evaluate test-time compute strategies and choose an allocation for a fixed inference budget.
- Decide whether RL, fine-tuning on filtered samples or distillation gives the largest improvement on a task at equal compute.
- Prepare verified agent trajectories from a sandboxed environment and use them for rejection-sampling fine-tuning.

### 8. [SPC-DLR-402 · Efficient Deep Learning: Compression, Quantisation and Long Context](../courses/SPC-DLR-402.md)

- Level 400 · Evaluate · Extended · 60 h · In development
- Needs: SPC-DLR-302, SPC-DLR-303
- Apply magnitude, structured and semi-structured (N:M) pruning, and measure accuracy against sparsity and real speed-up.
- Build a post-training quantisation pipeline with calibration, per-channel and group scaling, and outlier handling.
- Diagnose quality loss after compression by locating sensitive layers and outliers, and repair it with mixed precision or quantisation-aware training.
- Build a long-context extension of a small model and evaluate it beyond single-fact retrieval tests.
- Implement a mixture-of-experts layer with routing and a load-balancing loss.
- Design a compression plan for a target device or budget and defend it with a measured frontier.
