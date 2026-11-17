# DEV-SEC-305 · AI for Security Operations

- Track: AI Engineering
- Path: [Security and Privacy Engineering for AI](../paths/DEV-SEC.md)
- Level: Level 300 · Develop
- Format: Workshop: two days with labs and a short build project
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

On a lab network with synthetic telemetry and vulnerable applications, participants build and measure AI assistance for security operations: alert triage scored against analyst labels, detection rules tested on recorded attacks, model-assisted review of code and configuration beside static analysers, and generated fuzzing harnesses. They defend the tools against attacker text in logs and keep containment behind human approval. Staff use of AI tools is USE-PRO-212.

## Learning outcomes

By the end, the participant can:

- Build an alert-triage assistant that ranks and summarises alerts with cited evidence.
- Test model-drafted detection rules before deployment.
- Measure model-assisted code and configuration review and generated fuzzing harnesses against static analysis.
- Test a security assistant against injection hidden in log fields and tickets.
- Design the handling of AI-generated findings from verification to approved containment.

## Prerequisites

- Reads security alerts, logs and incident tickets
- Writes Python and has called a language model API

## Topics

### Help and harm

- Invented findings and confident errors
- Attacker-controlled text in telemetry
- Gain against an unaided baseline

### Detection and triage

- Enrichment and ranking with cited evidence
- Detection rules in an open format

### Review and discovery

- Model review beside static analysers
- Fuzzing harness generation
- Reproducing a crash before reporting

### Safe handling

- Human approval for containment
- Sensitive telemetry and model placement
- Authorised scope and coordinated disclosure
