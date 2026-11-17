# DEV-SEC-301 · Securing Language Model and Agent Applications

- Track: AI Engineering
- Path: [Security and Privacy Engineering for AI](../paths/DEV-SEC.md)
- Level: Level 300 · Develop
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: practitioner
- Status: In development

## Description

Participants attack, then defend, a synthetic procurement agent that reads supplier email, searches documents, keeps memory and acts through Model Context Protocol (MCP) servers. They threat-model it, run injection and exfiltration attacks, then contain it with a sandbox and egress allowlist, scoped delegated tokens, hardened protocol servers, measured guardrails and well-placed approvals. Platform isolation and identity are DEV-AGT-402; red-team programmes are DEV-SEC-302.

## Learning outcomes

By the end, the participant can:

- Prepare a threat model naming trust boundaries, private data, untrusted inputs and exit paths.
- Test the agent against injection and exfiltration through documents, images, links and tool arguments.
- Design containment that removes private data, untrusted content or the exit path from each high-risk flow.
- Build delegated authorisation with scoped, short-lived tokens exchanged at each hop.
- Measure guardrails on attack and benign sets and set thresholds.
- Evaluate the residual risk of a hardened agent and decide which actions still need approval.

## Prerequisites

- [DEV-SEC-201 · Secure Development of AI Applications](DEV-SEC-201.md)
- Has built an agent that calls tools in a loop (DEV-AGT-301 or equivalent)
- Runs containers locally

## Next courses

- [DEV-SEC-401 · Security Architecture for AI Platforms](DEV-SEC-401.md)

## Topics

### Threat modelling agents

- Trust boundaries, data flows and STRIDE applied to agents
- Private data, untrusted content and exit paths
- Risk lists and adversary technique mapping

### Injection and exfiltration

- Direct, indirect and cross-modal injection
- Exfiltration through permitted paths
- Memory and retrieval poisoning

### Containment and authorisation

- Sandboxes for generated code
- An egress allowlist is a capability grant
- Token exchange, audience, scope and lifetime
- Forbidden token passthrough and the confused deputy

### Protocol servers and tools

- Tool poisoning and changes after approval
- Hostile text in tool results
- Request forgery during metadata discovery
- Local, shadow and over-scoped servers

### Guardrails, approvals and audit

- Classifier error rates and false refusals
- Approval fatigue
- Action logs for investigation
