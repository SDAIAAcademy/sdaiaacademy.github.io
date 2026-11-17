# FND-AIC-105 · Classical AI: Search, Planning and Knowledge Representation

- Track: Data & AI Foundations
- Path: [AI Concepts and Responsible Practice](../paths/FND-AIC.md)
- Level: Level 100 · Explain
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: beginner
- Status: In development

## Description

Participants solve problems with the methods that predate machine learning and still run timetables, routes, configurations and rule checks. They implement heuristic search on an open road map, model a timetable for a constraint solver, run a classical planner, and encode eligibility rules in logic to find conflicts, then compare each result with a language-model-only attempt. The course suits career changers bridging to degree-level AI foundations and engineers who give agents solvers and planners as tools.

## Learning outcomes

By the end, the participant can:

- Describe a problem as states, actions, goal and costs, and distinguish when search, constraints, planning or logic fits it.
- Implement uniform-cost and A* search with an admissible heuristic and measure the nodes each expands.
- Implement a constraint model of a timetabling problem with hard rules and soft preferences.
- Explain how a classical planner derives a plan from action definitions and why each step can be checked.
- Implement eligibility rules in logic and use an inference engine to answer queries and expose conflicts.
- Compare a classical method and a language-model-only attempt for correctness, verifiability, cost and explanation.

## Prerequisites

- [FND-PRG-101 · Python Programming for Data and AI](FND-PRG-101.md)
- Writes Python functions over lists and dictionaries; FND-PRG-103 or FND-MTH-105 helps but is not required

## Topics

### Search

- State spaces and problem formulation
- Uninformed search, heuristics and A*
- Local search and simulated annealing
- Game search and Monte Carlo tree search in brief

### Constraint satisfaction

- Variables, domains, hard and soft constraints
- Backtracking and propagation
- SAT and constraint-programming solvers
- Where integer programming takes over (SPC-MOD-304)

### Planning

- Actions with preconditions and effects
- Planning domain definition language
- Plan validation and replanning

### Logic and knowledge representation

- Propositional and first-order logic
- Forward and backward chaining
- Ontologies in brief (DEV-DAT-304)

### Where classical methods still win

- Guarantees and audit trails
- Models that propose and solvers that check
- Solvers and planners as agent tools
