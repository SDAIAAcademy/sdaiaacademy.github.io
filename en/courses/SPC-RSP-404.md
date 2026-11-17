# SPC-RSP-404 · Frontier Seminar: Neurosymbolic Methods and AI for Mathematics

- Track: Data Science
- Path: [Research Practice and Frontier](../paths/SPC-RSP.md)
- Level: Level 400 · Evaluate
- Format: Seminar: six weekly sessions of reading, presentation and hands-on work with solvers, verifiers and proof assistants, rebuilt each term from current conference tutorials
- Total hours: 24 h
- Audience: specialist
- Status: In development

## Description

A reading and hands-on seminar on systems that combine learned models with symbolic tools: language models that call solvers, generated programs checked by verifiers, and proofs checked by a proof assistant. Each week participants read current papers and run a small experiment: proving lemmas with a model, verifying generated code against formal specifications, solving constraint problems with a model plus a solver, and checking whether autoformalised statements say what the informal ones say.

## Learning outcomes

By the end, the participant can:

- Explain the main neurosymbolic patterns: a model proposes and a solver checks, a model guides search, differentiable logic, and learned heuristics inside solvers.
- Use a language model with a proof assistant to prove a set of small lemmas and report success over repeated attempts.
- Build a generate-and-verify loop that writes code with a formal specification and rejects any output the verifier does not accept.
- Evaluate the faithfulness of autoformalised statements against their informal originals.
- Review a neurosymbolic or AI-for-mathematics paper for what its verification guarantees, its contamination risk and its compute budget.

## Prerequisites

- Writes proofs at the level of a discrete mathematics course, as in FND-MTH-105, or equivalent
- Has used search, logic or constraint solving, as in FND-AIC-105, or equivalent
- Calls a language model API from Python and parses structured output
- No proof-assistant experience is assumed; the tracked pre-work introduces one

## Topics

### Neurosymbolic patterns

- Model proposes, solver or verifier checks
- Learned guidance for search and solvers
- Differentiable and probabilistic logic

### Theorem proving and autoformalisation

- Tactic prediction versus whole-proof generation
- Reinforcement learning from verifier feedback
- Misformalisation and human review of statements
- Benchmarks, contamination and success over attempts

### Verified code generation

- Specifications, pre- and postconditions, invariants
- Solver-backed verification-aware languages
- Property-based testing as a weaker check
- What a verified program still does not guarantee

### AI and mathematical research

- Recorded AI contributions to open problems and how they were checked
- Credit and disclosure of AI contributions
