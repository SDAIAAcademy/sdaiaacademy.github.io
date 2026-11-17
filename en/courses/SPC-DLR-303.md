# SPC-DLR-303 · Building a Language Model from Scratch

- Track: Data Science
- Path: [Deep Learning and Model Development](../paths/SPC-DLR.md)
- Level: Level 300 · Develop
- Format: Extended: 12 weeks part-time, one lecture and one long lab a week, five graded assignments, a supervised test and an end-to-end training capstone
- Total hours: 80 h
- Audience: specialist
- Status: In development

## Description

Participants write every part of a small decoder-only language model themselves, without model libraries: a byte-level byte-pair encoding (BPE) tokeniser trained on Arabic and English text, the transformer, the optimiser and training loop, and decoding with a key-value (KV) cache. After debugging on a CPU they train a model end to end on public text within a fixed accelerator budget, evaluate it and publish it with a model card. Training systems are SPC-DLR-304, data pipelines SPC-DLR-305 and post-training SPC-DLR-306.

## Learning outcomes

By the end, the participant can:

- Build a byte-level BPE tokeniser and compare its compression across languages.
- Build a decoder-only transformer and its training loop from tensor operations.
- Compute parameters, operations and memory for a configuration, and choose a model size and token count within budget.
- Implement sampling strategies and a KV cache for generation.
- Diagnose instability in language model training from logged loss, gradient norms and activation statistics.
- Evaluate a trained small language model on held-out loss, benchmarks and samples, and document its limits.

## Prerequisites

- [SPC-DLR-302 · Deep Learning from First Principles](SPC-DLR-302.md)
- Writes and debugs PyTorch or JAX training code
- Uses the command line, version control and a remote machine, at the depth of FND-PRG-102

## Next courses

- [SPC-DLR-304 · Training Systems for Large Models](SPC-DLR-304.md)
- [SPC-DLR-305 · Data and Scaling for Foundation Models](SPC-DLR-305.md)
- [SPC-DLR-306 · Post-Training I: Fine-Tuning, Preference Optimisation and Distillation](SPC-DLR-306.md)
- [SPC-DLR-402 · Efficient Deep Learning: Compression, Quantisation and Long Context](SPC-DLR-402.md)

## Topics

### Tokenisation

- Unicode and Arabic script normalisation
- Training and applying BPE
- Vocabulary size and unequal token costs across languages

### The transformer

- Causal multi-head and grouped-query attention
- Rotary positions
- Pre-normalisation and gated feed-forward layers

### Training

- Next-token cross-entropy
- AdamW, warm-up and cosine schedules
- Clipping, accumulation, mixed precision and checkpoints
- Resource accounting before a run

### Decoding

- Temperature, top-k and nucleus sampling
- The KV cache
- Batched generation

### Evaluation

- Perplexity and bits per byte
- Benchmarks scored by likelihood
- Contamination checks
- Reading samples critically
