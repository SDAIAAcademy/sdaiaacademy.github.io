# FND-MTH · Mathematics and Statistics

Track: Data & AI Foundations

## Purpose

Give participants the linear algebra, calculus, probability, statistics and discrete mathematics that data and AI work rests on, with every idea computed by hand and then in code.

## Who it is for

Career changers and non-computing graduates closing bridging gaps before advanced study, and computing graduates refreshing the mathematics behind models; a placement test lets participants skip any course whose content they already command.

## Suggested order

Take FND-MTH-101 before FND-MTH-102, and FND-MTH-103 before FND-MTH-104; FND-MTH-105 stands alone. FND-MTH-104 hands over to SPC-STA-201, and FND-MTH-101 to FND-MTH-103 prepare for the SPC-MOD and SPC-DLR streams, where SPC-DLR-301 takes the same mathematics to model-builder depth.

## Courses in order

In the order their prerequisites suggest.

### 1. [FND-MTH-101 · Linear Algebra for Machine Learning](../courses/FND-MTH-101.md)

- Level 100 · Explain · Extended · 45 h · Available
- Explain the geometric meaning of vectors, dot products, norms, projections and matrix products.
- Describe what rank, eigenvalues and singular values reveal about a matrix and name one machine learning use of each.
- Identify ill-conditioned or rank-deficient systems and explain their effect on a least-squares fit.
- Compute products, inverses, projections and decompositions by hand for small matrices and in array code for large ones.
- Implement least squares through QR factorisation and compare it with the normal equations.
- Apply the singular value decomposition to build low-rank approximations and principal components.

### 2. [FND-MTH-102 · Calculus and Optimisation for Machine Learning](../courses/FND-MTH-102.md)

- Level 100 · Explain · Extended · 45 h · Available
- Needs: FND-MTH-101
- Explain derivatives, partial derivatives, gradients and Jacobians as local linear approximations.
- Distinguish convex from non-convex objectives and describe how saddle points and step size shape gradient descent.
- Explain how a constraint moves the optimum of a small problem, using the Lagrangian and the meaning of its multiplier.
- Compute gradients of a composite function by applying the chain rule backwards through a computational graph.
- Implement reverse-mode automatic differentiation for scalar operations and verify it with finite-difference checks.
- Apply batch, stochastic and momentum gradient descent and diagnose divergence or slow convergence from loss curves.

### 3. [FND-MTH-103 · Probability for Data and AI](../courses/FND-MTH-103.md)

- Level 100 · Explain · Extended · 45 h · In development
- Explain conditional probability, independence and Bayes rule, and identify base-rate errors in worded claims.
- Describe the common discrete and continuous distributions and identify which fits a described process.
- Explain the law of large numbers and the central limit theorem and identify where the normal approximation fails.
- Compute expectations, variances and conditional probabilities analytically and confirm them by seeded simulation.
- Implement reproducible Monte Carlo simulations that report each estimate with its standard error.
- Compute likelihood, entropy, cross-entropy and Kullback-Leibler divergence and relate them to training losses.

### 4. [FND-MTH-104 · Statistics by Simulation: Variation, Estimation and Testing](../courses/FND-MTH-104.md)

- Level 100 · Explain · Extended · 45 h · In development
- Needs: FND-MTH-103
- Distinguish population, sample, parameter, statistic and sampling distribution, and explain what a standard error measures.
- Explain what p-values and confidence intervals mean and identify misreadings of them.
- Identify multiple-testing, forking-path and confounding problems in a reported analysis.
- Compute bootstrap intervals for means, medians, group differences and regression slopes.
- Implement permutation tests and report each result as an effect size with an interval.
- Apply family-wise and false-discovery-rate corrections and measure by simulation how often uncorrected tests produce false findings.

### 5. [FND-MTH-105 · Discrete Mathematics and Logic for Computing](../courses/FND-MTH-105.md)

- Level 100 · Explain · Extended · 40 h · In development
- Identify whether a relation is a function, an equivalence or an order, and which properties it has.
- Distinguish valid from invalid arguments and translate plain-language rules into propositional and predicate logic.
- Describe direct, contradiction and induction proofs and identify the gap in a flawed proof.
- Apply induction and loop invariants to prove simple claims about integers, sets and recursive code.
- Compute counts of arrangements, selections and collisions and verify them by enumeration.
- Use a graph model of dependencies to find cycles and compute a topological order.
