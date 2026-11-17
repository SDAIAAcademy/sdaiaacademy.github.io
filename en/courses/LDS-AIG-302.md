# LDS-AIG-302 · Generative AI and Agent Controls Laboratory

- Track: Executives & Leaders
- Path: [AI Governance, Risk and Assurance](../paths/LDS-AIG.md)
- Level: Level 300 · Develop
- Format: Intensive: 3 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 24 h
- Audience: specialist
- Status: In development

## Description

In containerised labs on synthetic targets, participants configure and test the controls that make generative AI and agents governable: input and output guardrails, groundedness checks, sandboxes with egress limits, tool allow-lists and scoped credentials, approval gates, rate limits, a kill-switch and audit logging. They attack a provided staff helpdesk agent with open red-team tools, map findings to public risk lists and a threat knowledge base, harden the agent and assemble a control evidence pack for a risk committee. Cross-listed with DEV-SEC; building these controls into application code is DEV-SEC-301, and full red-team programmes are DEV-SEC-302.

## Learning outcomes

By the end, the participant can:

- Identify the main risk classes of language model and agent applications and distinguish model-as-component risks from model-as-actor risks.
- Configure input and output guardrails, groundedness checks and content filters, and measure their effect on blocked attacks and false refusals.
- Configure an agent sandbox with tool allow-lists, scoped credentials, egress limits, rate limits, human approval for high-impact actions and a kill-switch.
- Implement audit logging of prompts, retrieved content, tool calls, approvals and policy decisions, with filtering of personal data.
- Design and run a red-team exercise against an agent, with scope, rules of engagement, attack scenarios and severity scoring.
- Evaluate whether the hardened agent's residual risk is acceptable for its risk level and assemble the control evidence pack.

## Prerequisites

- [LDS-AIG-201 · AI Governance Foundations: Principles, Roles and Lifecycle Controls](LDS-AIG-201.md)
- Uses a terminal to run provided commands and edits YAML or JSON configuration files
- Describes how a language model assistant calls tools and retrieves documents
- Scores a risk by likelihood and impact against a stated appetite (LDS-AIG-204 or equivalent)

## Topics

### Threat model for generative systems

- Untrusted input everywhere: direct, indirect and cross-modal prompt injection
- Poisoned retrieval content and agent memory
- Model as component versus model as actor
- Public risk lists for language model and agentic applications
- Threat knowledge bases of adversary tactics and techniques

### Guardrails

- Input and output filters
- Safety classifiers and their error rates
- Groundedness and citation checks
- Structured output validation
- False refusals as a cost

### Agent containment

- Sandboxes and egress control
- Tool allow-lists, agent identity and scoped credentials
- Memory boundaries
- Approval gates for high-impact actions
- Rate limits, budgets and kill-switches

### Tool servers and connectors

- What a tool server can reach
- Reviewing tool descriptions for poisoning
- Least privilege for connectors

### Red teaming

- Scope and rules of engagement
- Manual and automated probing
- Scoring severity and likelihood
- Turning findings into regression tests

### Logging and evidence for audit

- What to log and what not to log
- Trace schemas and retention
- Reconstructing an incident
- Control evidence packs and residual-risk sign-off
