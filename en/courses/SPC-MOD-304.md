# SPC-MOD-304 · Optimisation and Operations Research for Decisions

- Track: Data Science
- Path: [Machine Learning and Modelling](../paths/SPC-MOD.md)
- Level: Level 300 · Develop
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: practitioner
- Status: In development

## Description

Participants turn decisions about resources, schedules and routes into mathematical models, solve them with open solvers and check that answers make operational sense. They formulate linear and mixed-integer programmes for allocation and staffing, solve rostering and vehicle routing with constraint programming, test plans under uncertain demand by Monte Carlo simulation, and judge forecasts by the decision cost they cause. Cases use synthetic demand on open map data. Discrete-event simulation is SPC-MOD-402.

## Learning outcomes

By the end, the participant can:

- Distinguish linear, integer, constraint and scenario-based formulations and identify which a problem needs.
- Implement a linear programme for allocation and interpret shadow prices for a manager.
- Implement a staff roster with hard and soft rules and measure solve time and optimality gap as it grows.
- Analyse a plan under uncertain demand by Monte Carlo simulation against a scenario-based alternative.
- Build a predict-then-optimise pipeline and evaluate forecasts by the decision regret they cause.
- Design a decision model from a stakeholder brief, verify it against the owner's rules and defend its trade-offs.

## Prerequisites

- [FND-MTH-101 · Linear Algebra for Machine Learning](FND-MTH-101.md)
- [SPC-MOD-201 · Machine Learning for Tabular Data: Baselines and Validation](SPC-MOD-201.md)
- Simulates random variables in Python

## Topics

### Formulation

- Variables, objectives and constraints
- Linear programming, duality and sensitivity
- Multiple objectives and trade-off curves
- Algebraic modelling languages

### Integer and combinatorial models

- Binary variables and logical constraints
- Assignment and location structures
- Branch and bound and optimality gaps
- Diagnosing infeasible and unbounded models

### Scheduling and routing

- Rostering with constraint programming
- Vehicle routing with time windows
- Local search when exact methods stall

### Uncertainty and prediction

- Monte Carlo evaluation of plans
- Two-stage and scenario formulations
- Decision regret versus forecast error
- Language models drafting formulations, verified by tests
