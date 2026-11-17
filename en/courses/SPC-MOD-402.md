# SPC-MOD-402 · Simulation and Agent-Based Modelling

- Track: Data Science
- Path: [Machine Learning and Modelling](../paths/SPC-MOD.md)
- Level: Level 400 · Evaluate
- Format: Workshop: two days with labs, guided pre-work and a tracked follow-up task
- Total hours: 16 h
- Audience: specialist
- Status: In development

## Description

Participants build a discrete-event model of a service centre and an agent-based model of how people adopt a new public service, validate both, calibrate unknown parameters against observed patterns, and compare policies through scenario experiments with replications and sensitivity analysis. Starter models are provided, so lab time goes to experiments and validation.

## Learning outcomes

By the end, the participant can:

- Build a discrete-event model of a queueing service and compare staffing policies with replications and common random numbers.
- Build an agent-based model of adoption and document it with a standard protocol.
- Calibrate model parameters against observed aggregate patterns and report their uncertainty.
- Analyse which inputs drive outputs with designed experiments and global sensitivity analysis.
- Evaluate scenarios for a policy decision and defend what the model can and cannot support.

## Prerequisites

- [SPC-STA-201 · Statistical Inference by Simulation](SPC-STA-201.md)
- Writes Python classes and fits probability distributions to data

## Topics

### Choosing an approach

- Discrete-event, agent-based and system dynamics models
- When plain Monte Carlo is enough
- Optimisation is in SPC-MOD-304; physical twins in DEV-PHY-301

### Building the models

- Entities, resources, queues and input modelling
- Warm-up, run length and replications
- Agents, rules, networks and emergence
- Language-model agents as simulated people and their limits

### Calibration and validation

- Verification against analytic cases
- Pattern-oriented and predictive validation
- Approximate Bayesian computation and history matching

### Scenario analysis

- Experimental designs over parameters
- Global sensitivity analysis
