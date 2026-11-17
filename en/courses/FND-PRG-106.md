# FND-PRG-106 · Code Reading and Debugging without Assistance

- Track: Data & AI Foundations
- Path: [Programming and Software Practice](../paths/FND-PRG.md)
- Level: Level 100 · Explain
- Format: Workshop: two days of drills and a supervised practical
- Total hours: 12 h
- Audience: beginner
- Status: In development

## Description

Participants practise reading unfamiliar code and finding faults without help, the skills most at risk when practice is delegated to an assistant. Through predict-the-output drills, hand tracing, Parsons problems and seeded-bug hunts in a small data-processing codebase, they learn a repeatable method: reproduce, isolate, hypothesise, test, fix, and add a regression check.

## Learning outcomes

By the end, the participant can:

- Read unfamiliar code and state its output, including the effects of aliasing, scope and mutation.
- Explain what a traceback or failing assertion reveals about where and what a fault is.
- Apply the reproduce, isolate, hypothesise, test and fix method to locate defects, keeping a log.
- Use a step debugger, breakpoints and targeted logging to inspect program state.
- Distinguish assistant use that keeps debugging skill, such as asking for explanations, from use that erodes it.

## Prerequisites

- [FND-PRG-101 · Python Programming for Data and AI](FND-PRG-101.md)
- Runs terminal commands; Git commands are supplied

## Topics

### Reading and structured practice

- Predict-the-output and hand tracing
- Parsons problems with distractor lines
- Faded worked examples
- Explaining code aloud
- Finding entry points and call paths in a multi-file codebase

### A debugging method

- Reproduce and shrink the failing case
- Isolate by halving input and code
- Fix, then add a regression check
- Bisecting history

### Tools without assistants

- Tracebacks and error messages
- Step debugger and breakpoints
- Assertions and logging

### Assistants afterwards

- Evidence on skill loss from delegation
- Verifying a suggested fix
