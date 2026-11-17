# SPC-ANL-202 · Analysis with AI Assistants: Delegate, Verify, Reproduce

- Track: Data Science
- Path: [Analysis and Business Intelligence](../paths/SPC-ANL.md)
- Level: Level 200 · Apply
- Format: Workshop: two days with labs, guided pre-work and a peer-rerun project
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants analyse data with a coding agent in a notebook. They decide which steps to delegate, brief the agent with acceptance checks, and confirm results by recomputing key numbers another way. Each lab ends with a verification note: what the agent produced, how it was checked, what was wrong. They measure run-to-run variability and package an analysis that a peer reruns from logged prompts, code and data.

## Learning outcomes

By the end, the participant can:

- Prepare a delegation plan marking which steps stay with the analyst, and a brief stating question, data, constraints and acceptance checks.
- Test assisted analyses by recomputing headline numbers and checking joins, filters and denominators.
- Measure run-to-run variability by repeating one request and comparing code, numbers and conclusions.
- Deliver an assisted analysis package that another analyst can rerun and audit.

## Prerequisites

- [SPC-ANL-201 · Exploratory Analysis and Visualisation](SPC-ANL-201.md)
- Writes and debugs short dataframe or SQL analyses without assistance

## Topics

### Delegation and briefing

- Where agents fail on data work
- What stays with the analyst: framing, causal claims, sign-off
- Checks written before the run

### Verification

- Second-route recomputation
- Row counts, cardinality and denominators
- Agents that try many analyses and report one
- Narrative checked against numbers

### Reproducibility

- Asking the same question several times
- Logging prompts, model and transcripts
- Pinned data versions and environments
