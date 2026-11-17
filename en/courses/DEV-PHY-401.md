# DEV-PHY-401 · Safety Engineering for Autonomous Systems

- Track: AI Engineering
- Path: [Physical AI and Robotics Engineering](../paths/DEV-PHY.md)
- Level: Level 400 · Evaluate
- Format: Workshop: two days of analysis and simulation labs, ending in a defended safety case
- Total hours: 16 h
- Audience: specialist
- Status: In development

## Description

On a synthetic warehouse vehicle with learned perception, participants analyse hazards, specify the operational design domain, write a safety case linked to test evidence, fault-test a runtime monitor, measure human takeover in simulation and turn a public incident into new hazards and tests.

## Learning outcomes

By the end, the participant can:

- Apply system-theoretic hazard analysis to a system with learned perception and specify its operational design domain.
- Build a structured safety case linking claims to test evidence, with its defeaters.
- Design and fault-test a runtime monitor and fallback that keep the system in its safety envelope.
- Measure human takeover time and mode errors and derive interface requirements.
- Review a published incident and decide the changes to hazards, tests and the safety case.

## Prerequisites

- DEV-PHY-301, DEV-PHY-302, or work on a system that senses and acts
- Edits Python simulation scripts
- Has applied a risk assessment method (LDS-AIG-204)

## Topics

### Learned components and safety

- Functional safety and safety of the intended functionality
- Distribution shift and specification gaps
- IEC 61508, ISO 26262, ISO 21448, ISO/PAS 8800, UL 4600, ISO 3691-4

### Hazard analysis

- Fault trees and failure modes and effects
- System-Theoretic Process Analysis (STPA)
- Operational design domains and triggering conditions

### Safety cases and runtime assurance

- Goal Structuring Notation (GSN) and defeaters
- Scenario-based testing and domain coverage
- Simplex architectures and safety filters
- Out-of-distribution monitors

### Oversight and incidents

- Takeover time and mode confusion
- Automation bias and nominal oversight
- Just culture and incident feedback into tests
