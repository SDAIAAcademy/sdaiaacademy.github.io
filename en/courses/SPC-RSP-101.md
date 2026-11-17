# SPC-RSP-101 · Emerging Computing Paradigms for AI

- Track: Data Science
- Path: [Research Practice and Frontier](../paths/SPC-RSP.md)
- Level: Level 100 · Explain
- Format: Seminar: three half-day sessions of briefing, simulator labs and claim review; the claim set is refreshed every six months
- Total hours: 12 h
- Audience: specialist
- Status: In development

## Description

Participants examine three kinds of hardware proposed for learning workloads: quantum, neuromorphic, and optical or analogue computing. For each they learn the computational model, run a small simulation on a laptop, and sort published claims into demonstrated, plausible and unsupported. The seminar ends with a written assessment of an unseen announcement. It is an awareness course: it prepares specialists and technical leads to read hardware claims critically and to judge when a paradigm deserves monitoring or a pilot, not to build on these platforms.

## Learning outcomes

By the end, the participant can:

- Explain what a gate-based quantum computer, a spiking neural network and an analogue optical matrix multiplier each compute natively.
- Distinguish demonstrated results, plausible near-term results and unsupported claims for machine learning on each paradigm.
- Identify the bottlenecks that limit practical advantage: data loading, noise and error correction, precision and conversion costs, training methods and software maturity.
- Use a circuit simulator to train a two-qubit variational classifier and compare it with a classical baseline on the same data.
- Analyse an announcement of hardware advantage for AI and draft an assessment of its baseline, problem size, end-to-end cost and missing comparisons.

## Prerequisites

- Works with vectors and matrices at the level of FND-MTH-101; complex numbers are revised in session
- Runs a Python notebook and has trained a small model such as a linear classifier
- No physics background is assumed

## Topics

### Why new hardware for learning

- Energy and memory-bandwidth limits of digital accelerators
- What advantage means: speed, energy, sample efficiency, cost
- Reading a hardware claim: baseline, problem size, end-to-end time

### Quantum computing and learning

- Qubits, gates, measurement and circuits
- Variational circuits and quantum kernels
- Data loading, barren plateaus and dequantised algorithms
- Annealing and optimisation claims against classical solvers
- Error correction: what has been shown and what remains

### Neuromorphic computing

- Spiking neurons and event-based sensors
- Training spiking networks: surrogate gradients and conversion
- Where low-power event processing has been demonstrated

### Optical and analogue computing

- Matrix multiplication in light and in memory arrays
- Noise, precision and analogue-digital conversion costs
- Inference versus training on analogue hardware

### Judging claims

- Demonstrated, plausible, unsupported
- Signals worth monitoring
- When a pilot is justified
