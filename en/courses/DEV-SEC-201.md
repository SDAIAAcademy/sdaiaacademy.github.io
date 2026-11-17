# DEV-SEC-201 · Secure Development of AI Applications

- Track: AI Engineering
- Path: [Security and Privacy Engineering for AI](../paths/DEV-SEC.md)
- Level: Level 200 · Apply
- Format: Workshop: two days with labs and a hardening project
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants make an insecure helpdesk assistant, with retrieval over synthetic policy documents and two tools, fit to ship. They map its weaknesses to public risk lists, treat model output as untrusted input, keep secrets server-side, scan dependencies and model files, carry each user's permissions into retrieval and log without personal data. Injection in depth is DEV-SEC-301; testing agent-written code is DEV-SWE-204.

## Learning outcomes

By the end, the participant can:

- Distinguish risks of the model as a component from risks of the model as an agent.
- Implement validation and encoding of model output before it reaches a query, a web page or a shell.
- Configure secret handling so that no key appears in prompts, client code, logs or history.
- Apply document-level access control to retrieval.
- Review a small AI application and decide whether it may ship.

## Prerequisites

- Has built a small language model application with a tool, in Python with tests and Git

## Next courses

- [DEV-SEC-301 · Securing Language Model and Agent Applications](DEV-SEC-301.md)
- [DEV-SEC-302 · AI Red Teaming and Adversarial Testing](DEV-SEC-302.md)

## Topics

### Risk vocabulary

- Public risk lists for language model and agentic applications
- Why injection has no model-level fix

### Inputs and outputs

- Output as untrusted input
- Schema validation and context encoding
- Unbounded consumption and rate limits

### Secrets, permissions and dependencies

- Server-side keys and secret stores
- User permissions carried into retrieval
- Pinned dependencies and invented package names
- Unsafe model file formats

### Logging

- Security events worth logging
- Redacting personal data
