# DEV-PRJ-401 · AI Systems Capstone: Production Readiness Review

- Track: AI Engineering
- Path: [Practicums](../paths/DEV-PRJ.md)
- Level: Level 400 · Evaluate
- Format: Studio: about eight weeks part-time, an individual review of an existing AI system with four coached rounds and a panel defence
- Total hours: 60 h
- Audience: specialist
- Status: In development

## Description

Each participant takes one existing AI system through a production readiness review and decides whether it may go live. The system is a sanitised copy from the participant's organisation, the DEV-PRJ-301 system, or an Academy reference system with seeded weaknesses, run in a sandbox. Participants reconstruct its architecture, load-test and fault-inject it against service objectives, cost it per successful outcome, threat-model and probe it, audit its governance evidence, and defend a go, conditional-go or no-go decision before a panel.

## Learning outcomes

By the end, the participant can:

- Evaluate the architecture against its requirements and reconstruct the key decisions and risks.
- Evaluate reliability against service objectives for latency and quality under load and injected faults.
- Audit cost per successful outcome and identify the largest cost levers.
- Audit security with a threat model and targeted tests of model, data, tool and supply-chain paths.
- Review governance evidence for classification, personal data, impact assessment, oversight, incidents and retirement.
- Decide go, conditional go or no-go and defend the decision and its conditions before a panel.

## Prerequisites

- DEV-PRJ-301, or has shipped and operated an AI system people depend on
- Two of DEV-OPS-401, DEV-SEC-301, DEV-EVL-401 and DEV-INF-404, or equivalent work
- Writes architecture decision records and reads latency percentiles

## Topics

### The readiness review

- Scope, independence and evidence standards
- Checklists versus judgement
- Findings with severity and owners

### Architecture and reliability

- Decision records
- Service objectives for latency and quality
- Auditing evaluation suites and release gates
- Load testing to a goodput target and fault injection

### Cost and security

- Token, compute and human review costs
- Threat models for model, data and agent paths
- Supply chain, signing and bills of materials

### Governance and operations

- Personal data flows and classification
- System cards and impact assessment
- Oversight, incident response and retirement

### The decision

- Go, conditional go and no-go
- Conditions with owners and dates
- Briefing decision makers
