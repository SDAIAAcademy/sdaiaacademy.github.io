# FND-MTH-101 · Linear Algebra for Machine Learning

- Track: Data & AI Foundations
- Path: [Mathematics and Statistics](../paths/FND-MTH.md)
- Level: Level 100 · Explain
- Format: Extended: 8 weeks part-time, one session and one lab a week, weekly graded problem sets and a capstone
- Total hours: 45 h
- Audience: beginner
- Status: Available
- Open the course: https://sdaiaacademy.github.io/fnd-mth-101/
- The whole course in one file: https://sdaiaacademy.github.io/fnd-mth-101/llms-full.txt
- Practice questions: https://sdaiaacademy.github.io/fnd-mth-101/practice.html

## Description

Participants compute each idea of linear algebra twice: by hand on small cases and in array code on real data. They treat data as vectors, matrices as transformations, least squares as projection, and eigen and singular value decompositions as ways to find structure. Labs use public embeddings and images and a synthetic link graph. The capstone is a low-rank analysis of a public dataset, defended orally.

## Learning outcomes

By the end, the participant can:

- Explain the geometric meaning of vectors, dot products, norms, projections and matrix products.
- Describe what rank, eigenvalues and singular values reveal about a matrix and name one machine learning use of each.
- Identify ill-conditioned or rank-deficient systems and explain their effect on a least-squares fit.
- Compute products, inverses, projections and decompositions by hand for small matrices and in array code for large ones.
- Implement least squares through QR factorisation and compare it with the normal equations.
- Apply the singular value decomposition to build low-rank approximations and principal components.

## Prerequisites

- School algebra: solving equations and reading graphs of functions
- Writes short Python programs with lists, loops and functions (FND-PRG-101 or equivalent)

## Next courses

- [FND-MTH-102 · Calculus and Optimisation for Machine Learning](FND-MTH-102.md)
- [SPC-MOD-304 · Optimisation and Operations Research for Decisions](SPC-MOD-304.md)

## Format and days

### Day 1: Vectors and similarity

- Vectors, dot products and similarity

### Day 2: Matrices as maps, and their cost

- Matrix products, attention scores and FLOPs

### Day 3: Span, rank and linear systems

- Span, rank and linear systems

### Day 4: Orthogonal projection and QR

- Orthogonal projection and QR

### Day 5: Least squares and conditioning

- Least squares and conditioning

### Day 6: Eigenvectors and link ranking

- Eigenvectors and link ranking

### Day 7: Singular values and low rank

- The SVD and principal components

### Day 8: Low rank in practice, and working numerically

- Low rank in practice

### Day 9: Capstone oral checks


## Topics

### Vectors and similarity

- Vectors as data points and directions
- Dot product, norms and cosine similarity
- Embeddings and distance in high dimensions
- Attention scores as a matrix of dot products

### Matrices as transformations

- Matrix products as composition of maps
- Span, independence, basis and rank
- Linear systems
- Counting floating-point operations (FLOPs) and memory

### Orthogonality and least squares

- Orthogonal projection
- QR factorisation
- Least squares, normal equations and conditioning

### Eigenvalues and singular values

- Eigenvectors of symmetric matrices
- Covariance and principal component analysis (PCA)
- Power iteration and link ranking
- Singular value decomposition (SVD) and low-rank structure in recommenders and model adaptation

### Working numerically

- Vectorisation and broadcasting
- Floating-point limits
- Checking code against hand computation
