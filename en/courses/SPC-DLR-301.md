# SPC-DLR-301 · Mathematics for Model Builders

- Track: Data Science
- Path: [Deep Learning and Model Development](../paths/SPC-DLR.md)
- Level: Level 300 · Develop
- Format: Extended: 9 weeks part-time, one lecture and one lab a week, weekly problem sets, two supervised tests and a capstone notebook
- Total hours: 45 h
- Audience: specialist
- Status: In development

## Description

Participants rebuild the mathematics of deep learning, deriving each idea on paper and checking it in code. They compress trained weight matrices with the singular value decomposition, derive and verify gradients of softmax, normalisation and attention, write a small scalar reverse-mode automatic differentiation engine (extended to tensors in SPC-DLR-302), predict from curvature when gradient descent diverges, and measure language-model losses in bits. A placement test routes each participant to bridging units for the gaps it finds, so the cohort starts level.

## Learning outcomes

By the end, the participant can:

- Apply eigen and singular value decompositions to explain and compress the weight matrices of a trained network.
- Compute gradients and Jacobians of vector and matrix expressions in matrix notation.
- Build a scalar reverse-mode automatic differentiation engine and use it to train a two-layer network.
- Analyse how step size, momentum and adaptive scaling interact with curvature and conditioning.
- Compute entropy, cross-entropy, divergence and bits per byte, and derive training losses from maximum likelihood.
- Diagnose and fix numerical failures such as overflow, cancellation and precision loss in low-precision formats.

## Prerequisites

- Writes Python functions and NumPy array code, at the depth of FND-PRG-101
- First-year university calculus, linear algebra and probability (FND-MTH-101 to FND-MTH-103 or equivalent); a placement test routes each gap to a bridging unit

## Next courses

- [SPC-DLR-302 · Deep Learning from First Principles](SPC-DLR-302.md)

## Topics

### Linear algebra for networks

- Linear maps, norms and tensor shapes
- Eigen and singular value decompositions
- Low rank and conditioning

### Calculus and automatic differentiation

- Jacobians and vector-Jacobian products
- Forward and reverse mode
- Gradient checking

### Probability and estimation

- Expectation and estimator variance
- Maximum likelihood and the losses it produces
- Monte Carlo estimates

### Optimisation

- Convexity, curvature and the Hessian
- Momentum and adaptive methods
- Stochastic gradient noise

### Information theory

- Entropy, cross-entropy and divergence
- Perplexity and bits per byte
- Prediction as compression

### Numerics

- Floating-point formats and rounding
- Stable softmax and log-sum-exp
- Variance propagation and initialisation
