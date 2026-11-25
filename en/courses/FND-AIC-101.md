# FND-AIC-101 · How Machine Learning Works

- Track: Data & AI Foundations
- Path: [AI Concepts and Responsible Practice](../paths/FND-AIC.md)
- Level: Level 100 · Explain
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: beginner
- Status: Available
- Open the course: https://sdaiaacademy.github.io/fnd-aic-101/
- The whole course in one file: https://sdaiaacademy.github.io/fnd-aic-101/llms-full.txt
- Practice questions: https://sdaiaacademy.github.io/fnd-aic-101/practice.html

## Description

Participants work out how supervised learning turns labelled examples into predictions, by hand first and then in code. They fit a nearest-neighbour rule and a linear model on paper, make a model overfit on purpose, choose a decision threshold from error costs and base rates, and hunt leaks seeded in a pipeline. Labs run on a laptop with small public or synthetic tabular data, and the capstone is an honest modelling report with a model card, defended in person.

## Learning outcomes

By the end, the participant can:

- Explain how a supervised learner fits a prediction rule by minimising a loss.
- Distinguish training, validation and test data, and identify overfitting and underfitting from plotted curves.
- Identify target, duplicate, preprocessing and temporal leakage in modelling pipelines.
- Implement a train, validate and test workflow comparing a baseline, a linear model and a decision tree.
- Compute confusion-matrix metrics and choose a threshold from error costs and the base rate.
- Draft a one-page model card with intended use, data, metrics by subgroup and known limits.

## Prerequisites

- [FND-PRG-101 · Python Programming for Data and AI](FND-PRG-101.md)
- Writes short Python functions and loops; a passed placement exercise is accepted instead of FND-PRG-101
- Uses school algebra; the derivative of a squared error is taught in the pre-work

## Next courses

- [DEV-LLM-202 · Applied Natural Language Processing Engineering](DEV-LLM-202.md)
- [DEV-MLE-201 · Machine Learning Engineering: Baselines, Validation and Pipelines](DEV-MLE-201.md)
- [DEV-INF-201 · Machine Learning Systems on One Machine](DEV-INF-201.md)
- [SPC-MOD-201 · Machine Learning for Tabular Data: Baselines and Validation](SPC-MOD-201.md)

## Format and days

### Day 1: Learning from examples

- Features, labels and prediction rules
- Loss and gradient descent
- Nearest neighbours and linear models by hand
- Training, validation and test sets

### Day 2: Generalisation and measuring

- Model complexity, overfitting and regularisation
- Cross-validation and learning curves
- Confusion matrix, precision and recall
- Thresholds, error costs and base rates

### Day 3: Data and leakage

- Regression errors against a naive baseline
- Encoding, scaling and missing values
- Pipelines fitted on training data only
- Target, duplicate and temporal leakage

### Day 4: Model families and limits

- Trees, linear models and small neural networks
- Distribution shift
- Subgroup error gaps and the model card
- Where language models fit, and the capstone

### Day 5: Capstone: a modelling report and its defence


## Topics

### Learning from examples

- Features, labels and prediction rules
- Loss and gradient descent
- Nearest neighbours and linear models by hand

### Generalisation

- Training, validation and test sets
- Model complexity, overfitting and regularisation
- Cross-validation and learning curves

### Measuring a model

- Confusion matrix, precision and recall
- Thresholds, error costs and base rates
- Regression errors against a naive baseline

### Data and leakage

- Encoding, scaling and missing values
- Pipelines fitted on training data only
- Target, duplicate and temporal leakage

### Model families and limits

- Trees, linear models and small neural networks
- Distribution shift and subgroup error gaps
- Where language models fit (FND-AIC-102)
