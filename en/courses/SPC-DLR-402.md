# SPC-DLR-402 · Efficient Deep Learning: Compression, Quantisation and Long Context

- Track: Data Science
- Path: [Deep Learning and Model Development](../paths/SPC-DLR.md)
- Level: Level 400 · Evaluate
- Format: Extended: 10 weeks part-time, one lecture and one long lab a week, four graded assignments, a supervised test and a compression capstone
- Total hours: 60 h
- Audience: specialist
- Status: In development

## Description

Participants make models smaller, faster and able to read longer inputs, and measure what each method costs in quality. They prune convolutional and transformer models, quantise weights, activations and the key-value cache to 8 and 4 bits after and during training, distil a compressed student, extend a model's context window, and train a small mixture-of-experts (MoE) layer. Each change is judged on a quality, latency and memory frontier measured on real hardware. Serving engineering is DEV-INF-401; on-device deployment is DEV-INF-303.

## Learning outcomes

By the end, the participant can:

- Apply magnitude, structured and semi-structured (N:M) pruning, and measure accuracy against sparsity and real speed-up.
- Build a post-training quantisation pipeline with calibration, per-channel and group scaling, and outlier handling.
- Diagnose quality loss after compression by locating sensitive layers and outliers, and repair it with mixed precision or quantisation-aware training.
- Build a long-context extension of a small model and evaluate it beyond single-fact retrieval tests.
- Implement a mixture-of-experts layer with routing and a load-balancing loss.
- Design a compression plan for a target device or budget and defend it with a measured frontier.

## Prerequisites

- [SPC-DLR-302 · Deep Learning from First Principles](SPC-DLR-302.md)
- [SPC-DLR-303 · Building a Language Model from Scratch](SPC-DLR-303.md)
- Profiles a training or inference step and reads the trace (SPC-DLR-304 recommended)
- Has run logit-level distillation (SPC-DLR-306 recommended)

## Topics

### Measuring efficiency

- Latency, throughput, memory and energy
- Quality, latency and memory frontiers
- Memory-bound decoding and what hardware accelerates

### Pruning and distillation

- Magnitude, structured and N:M sparsity
- Distilling compressed students
- Neural architecture search in brief

### Quantisation

- Integer and low-bit floating formats
- Calibration, group scaling and outliers
- Quantisation-aware training
- Key-value cache quantisation

### Long context

- Cost of attention with length
- Positional interpolation and rotary scaling
- Sliding-window, sparse and linear attention, and state-space hybrids
- Testing long context honestly

### Sparse experts

- Routing, load balancing and capacity
- Active against total parameters
- Consequences for serving
