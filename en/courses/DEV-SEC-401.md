# DEV-SEC-401 · Security Architecture for AI Platforms

- Track: AI Engineering
- Path: [Security and Privacy Engineering for AI](../paths/DEV-SEC.md)
- Level: Level 400 · Evaluate
- Format: Intensive: 3 teaching days and a design review day, with guided pre-work and a tracked follow-up task
- Total hours: 24 h
- Audience: specialist
- Status: In development

## Description

Participants design and review the security architecture of a shared platform on which many teams run assistants and agents against an organisation's data. For a fictional ministry platform they set an identity for every agent and the person it acts for, least privilege across tools, stores and indexes derived from data classification, isolation tiers matched to code trust and sensitivity, action-level monitoring with kill switches, and the assurance evidence auditors ask for. They critique a rival design and defend a reference architecture before a panel. Building these parts is DEV-AGT-402; sovereign placement is DEV-INF-405.

## Learning outcomes

By the end, the participant can:

- Design an identity model that binds every agent action to an agent, a delegating person and a scoped grant.
- Design least-privilege access across tools, stores and indexes derived from data classification.
- Decide isolation tiers by code trust, tenant and data sensitivity.
- Design action monitoring that detects unsafe tool-call sequences.
- Prepare a control map to an AI controls framework and national controls.
- Review two competing platform security designs and recommend one.

## Prerequisites

- [DEV-SEC-301 · Securing Language Model and Agent Applications](DEV-SEC-301.md)
- Has designed or reviewed a production service used by several teams
- Reads OAuth flows and access-control policies

## Topics

### Threat model of a shared platform

- Cross-tenant leakage and confused deputies
- Shared prompt caches and indexes as tenant channels
- Cascading failures and rogue agents
- Insider and supplier threats

### Identity for agents

- Workload identity and attestation
- Token exchange at every hop
- Never deciding access from nested actor claims
- Consent, revocation and immature standards

### Least privilege across tools and data

- Classification-driven policy
- Permission-aware retrieval and index partitioning
- Toxic flows: private data, untrusted content, exits

### Isolation tiers

- Container, user-space kernel and micro virtual machine
- Confidential computing
- Egress architecture and credential proxies

### Monitoring and assurance

- Action-level audit trails
- Kill switches and blast radius
- Control frameworks and evidence packs
- Decision records
