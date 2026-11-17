# FND-PRG-104 · Software Testing, Code Review and Documentation

- Track: Data & AI Foundations
- Path: [Programming and Software Practice](../paths/FND-PRG.md)
- Level: Level 100 · Explain
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: beginner
- Status: In development

## Description

Participants take a small, untested data-cleaning library and make it trustworthy. They write unit and integration tests, design cases from a specification, isolate files, time and network calls with fixtures and test doubles, review each other's pull requests against a checklist, write a README and reference documentation, and package the library so it installs and passes its tests in a clean environment. Property and mutation testing and the verification of agent-written code follow in DEV-SWE-204.

## Learning outcomes

By the end, the participant can:

- Distinguish unit, integration and end-to-end tests, and explain what each can and cannot show.
- Design test cases from a specification using equivalence partitions, boundary values and error cases.
- Implement unit and integration tests with fixtures and test doubles for files, time and network calls.
- Review a pull request for correctness, tests, readability and security, and write actionable comments.
- Prepare a README and reference documentation, and package the library for installation.
- Deliver a tested, reviewed and documented release with automated checks on every change.

## Prerequisites

- [FND-PRG-101 · Python Programming for Data and AI](FND-PRG-101.md)
- [FND-PRG-102 · Command Line, Git and Reproducible Environments](FND-PRG-102.md)

## Next courses

- [DEV-SWE-204 · Testing and Verification of AI-Assisted Code](DEV-SWE-204.md)

## Topics

### What to test

- Tests as executable specification
- Test levels and their costs
- What coverage hides

### Designing tests

- Partitions and boundary values
- Empty, missing and mixed-script text
- Regression tests from bug reports

### Test tooling

- Fixtures and parametrised tests
- Test doubles for files, time and network
- Tests in CI on each pull request

### Code review

- Checklists and small pull requests
- Giving and receiving comments
- Assistant-generated code held to the same standard

### Documentation and packaging

- README and quick start
- Docstrings and generated reference pages
- Semantic versioning and a change log
- Building and installing a package
