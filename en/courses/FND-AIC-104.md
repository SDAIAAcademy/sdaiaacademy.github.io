# FND-AIC-104 · Responsible Data and AI Practice for Builders

- Track: Data & AI Foundations
- Path: [AI Concepts and Responsible Practice](../paths/FND-AIC.md)
- Level: Level 100 · Explain
- Format: Workshop: one and a half days with labs and a tracked follow-up task
- Total hours: 12 h
- Audience: beginner
- Status: In development

## Description

Participants make a synthetic build, a complaint-triage assistant that calls a language model, responsible before it is written: they classify its data, decide what may go to an external model service, check licences, turn ethics principles into checks, clean a seeded repository and write the user disclosure. DEV-SEC-201 and DEV-SEC-303 go deeper.

## Learning outcomes

By the end, the participant can:

- Explain the data protection principles that shape a build, from lawful basis to transfer and breach notice.
- Classify project data by sensitivity and decide what may go to an external model service.
- Analyse model and dataset licences, including attribution and non-commercial terms, against a stated use.
- Identify the build check and user disclosure that each AI ethics principle requires.
- Apply security hygiene to a repository: remove secrets, pin and audit dependencies, validate model output.

## Prerequisites

- Has run a small Python project under version control (FND-PRG-102 or equivalent)

## Topics

### Data protection and classification

- Personal data in prompts, logs and training
- Lawful basis, minimisation, retention, transfer
- Classification and external services
- Pseudonymisation and its limits

### Licences and provenance

- Open-weight and dataset licences
- Attribution and use restrictions
- Ownership of generated content

### Ethics principles as build checks

- Subgroup fairness tests
- Transparency and disclosure
- Human oversight and ownership
- Risk tiers setting the depth of checks

### Security hygiene

- Secrets, keys and dependency pinning
- Untrusted input, output and logs
