# FND-MTH-102 · Calculus and Optimisation for Machine Learning

- Track: Data & AI Foundations
- Path: [Mathematics and Statistics](../paths/FND-MTH.md)
- Level: Level 100 · Explain
- Format: Extended: 8 weeks part-time, one session and one lab a week, weekly graded problem sets and a capstone
- Total hours: 45 h
- Audience: beginner
- Status: Available
- Open the course: https://sdaiaacademy.github.io/fnd-mth-102/
- The whole course in one file: https://sdaiaacademy.github.io/fnd-mth-102/llms-full.txt
- Practice questions: https://sdaiaacademy.github.io/fnd-mth-102/practice.html

## Description

Participants work through the calculus that trains models: derivatives as local linear approximations, gradients, Jacobians and the chain rule on computational graphs. They backpropagate by hand, then write a small reverse-mode automatic differentiation engine and check it against a framework. They run batch, stochastic and momentum gradient descent, read loss curves, and handle convexity and constraints. The capstone trains a small network with their own engine; tensor-level differentiation and modern optimisers follow in SPC-DLR-302.

## Learning outcomes

By the end, the participant can:

- Explain derivatives, partial derivatives, gradients and Jacobians as local linear approximations.
- Distinguish convex from non-convex objectives and describe how saddle points and step size shape gradient descent.
- Explain how a constraint moves the optimum of a small problem, using the Lagrangian and the meaning of its multiplier.
- Compute gradients of a composite function by applying the chain rule backwards through a computational graph.
- Implement reverse-mode automatic differentiation for scalar operations and verify it with finite-difference checks.
- Apply batch, stochastic and momentum gradient descent and diagnose divergence or slow convergence from loss curves.

## Prerequisites

- [FND-MTH-101 · Linear Algebra for Machine Learning](FND-MTH-101.md)
- School calculus: derivatives of polynomials and exponentials, or the pre-work refresher
- Writes short Python programs with functions and loops (FND-PRG-101 or equivalent)

## Format and days

### Day 1: Change and approximation

- Derivatives as local lines

### Day 2: Several variables

- Gradients and Jacobians

### Day 3: The chain rule on graphs

- Graphs and the chain rule

### Day 4: Reverse mode in code

- A reverse-mode engine

### Day 5: Gradient descent

- Descent and loss curves

### Day 6: The shape of a loss

- Convexity and curvature

### Day 7: Stable losses and penalties

- Stable losses and penalties

### Day 8: Constraints

- Constraints and prices

### Day 9: Capstone oral checks


## Topics

### Change and approximation

- Derivatives and the tangent-line approximation
- Partial derivatives, gradients and Jacobians
- Taylor expansions and finite differences

### The chain rule on graphs

- Computational graphs
- Forward and reverse mode
- Backpropagation by hand
- The chain rule with vectors and matrices

### Gradient-based optimisation

- Gradient descent and step size
- Stochastic and mini-batch gradients
- Momentum and adaptive step methods
- Learning-rate warm-up and decay
- Reading loss curves

### Shape and constraints

- Convexity, local minima and saddle points
- Curvature, the Hessian and the largest stable step
- Numerically stable softmax and log-sum-exp
- Regularisation as a penalty
- Lagrange multipliers and projected gradients
