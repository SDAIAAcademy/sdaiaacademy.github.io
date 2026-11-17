# SPC-DLR-304 · Training Systems for Large Models

- Track: Data Science
- Path: [Deep Learning and Model Development](../paths/SPC-DLR.md)
- Level: Level 300 · Develop
- Format: Extended: 10 weeks part-time, one lecture and one long lab a week on a provided multi-GPU node, four graded assignments, a supervised test and a performance capstone
- Total hours: 60 h
- Audience: specialist
- Status: In development

## Description

Participants make a language model train faster and larger on the hardware they have. They account for floating-point operations (FLOPs), memory and communication before running anything, profile a training step, write a fused attention kernel and test it against a reference, fit a larger model into memory with mixed precision and activation checkpointing, and build sharded data parallelism from collective primitives, tracking model FLOPs utilisation (MFU) throughout. Labs debug on CPU processes, then run on a provided multi-GPU node. Fleet operation at scale is DEV-INF-402.

## Learning outcomes

By the end, the participant can:

- Compute the arithmetic, memory and communication cost of a training configuration and predict its step time with a roofline model.
- Analyse a profiler trace of a training step, attributing time to kernels, transfers, data loading and communication.
- Build a fused attention kernel with tiling and an online softmax.
- Build data-parallel training with sharded optimiser state from collective communication primitives.
- Optimise end-to-end training throughput under a fixed memory limit without changing results beyond a stated tolerance.
- Analyse tensor, pipeline, sequence and expert parallelism plans for a model too large for one node.

## Prerequisites

- [SPC-DLR-303 · Building a Language Model from Scratch](SPC-DLR-303.md)
- Explains processes, memory hierarchy and caches, at the depth of FND-PRG-105
- Reads simple C or array-kernel code

## Topics

### Resource accounting

- FLOPs and memory per training step
- Arithmetic intensity and the roofline model
- Model FLOPs utilisation

### Profiling and benchmarking

- Timers, synchronisation and warm-up
- Profiler traces
- Variance and honest benchmarks

### Kernels

- GPU execution model and memory hierarchy
- Tiling and fusion
- Compilers against hand-written kernels

### Precision and memory

- Low-precision formats including 8-bit floating point
- Loss scaling
- Activation checkpointing, accumulation and offloading

### Distributed training

- Collective operations and their cost
- Data parallelism and sharded state
- Tensor, pipeline, sequence and expert parallelism
- Checkpointing and restart
