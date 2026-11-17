# DEV-INF-405 · Regulated and Sovereign Deployment Architecture

- Track: AI Engineering
- Path: [Infrastructure, Performance and Architecture](../paths/DEV-INF.md)
- Level: Level 400 · Evaluate
- Format: Workshop: two days with four labs and a defended design
- Total hours: 16 h
- Audience: specialist
- Status: In development

## Description

Participants turn data rules into deployment architecture for a fictional health and government assistant. They classify data, prompts, embeddings, logs and model weights, trace every flow leaving the approved jurisdiction, place each component, and make the placement verifiable with customer-held keys, attestation, egress denial and signed model import.

## Learning outcomes

By the end, the participant can:

- Classify a system's data and AI artefacts and analyse every flow crossing a jurisdiction or trust boundary.
- Design a placement that puts each component in an allowed location.
- Design and test key custody, attestation, egress denial and signed model import.
- Defend a hybrid deployment design and its evidence pack.

## Prerequisites

- Has completed DEV-INF-404, DEV-SEC-401 or DEV-DAT-401, or designs deployment architectures at work
- Reads a data classification policy and a data-protection impact assessment

## Topics

### Rules to requirements

- Classification and impact assessment
- Transfer bases, safeguards and risk assessment
- Hosting rules that defer to data rules

### Placement options

- In-country regions, national providers, on premises, air gap
- Hosted model APIs: processing region, retention, sub-processors
- Local open-weight serving; hybrid splits and leakage

### Verifiable controls and evidence

- Customer-held keys, remote attestation and default-deny egress
- Signed models and bills of materials
- Evidence packs and approved exceptions
