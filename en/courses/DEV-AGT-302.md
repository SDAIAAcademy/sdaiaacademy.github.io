# DEV-AGT-302 · Protocol Servers and Agent Integrations

- Track: AI Engineering
- Path: [Agentic Systems](../paths/DEV-AGT.md)
- Level: Level 300 · Develop
- Format: Workshop: two days with labs and a short build project, with guided pre-work
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants build, secure and test servers that expose an organisation's tools and data to any compliant agent, then connect agents across team boundaries. On a synthetic case-management system they design a stateless Model Context Protocol (MCP) server with typed tools and resources, run it over local and remote transports, add delegated authorisation with narrow scopes, write contract and hostile-input tests, place it behind a gateway with a registry entry, and expose one capability as an Agent2Agent (A2A) service with a signed agent card. Full attack-and-harden work on servers continues in DEV-SEC-301.

## Learning outcomes

By the end, the participant can:

- Explain what the current protocol revision changed and which deprecated features a new server must not depend on.
- Build a stateless protocol server with typed tools, resources and a stable tool order that an unmodified agent can list and call over local and remote transports.
- Configure delegated authorisation so that each tool call carries a short-lived token scoped to one user and one kind of action.
- Test a server with contract, error-path and hostile-input tests, including a tool description that changes after approval.
- Design the integration of several servers behind a gateway with a registry, allowlists, rate limits and audit logs.
- Implement an agent-to-agent service that accepts a delegated task through a signed capability card and reports task state, streamed updates and results.

## Prerequisites

- [DEV-AGT-301 · Agentic Systems Engineering: Loops, Context and Harnesses](DEV-AGT-301.md)
- Builds and tests an HTTP service with authentication
- Reads an OAuth 2 authorisation flow and explains the role of scopes and token audience

## Topics

### The protocol for server builders

- Hosts, clients and servers
- Tools, resources and prompts
- Capability discovery
- Extensions and their maturity stages
- Interactive interfaces returned by servers as an extension, with a text fallback
- How the specification changes and how long deprecated features last

### Stateless server design

- No sessions: every request stands alone
- Input and output schemas in JSON Schema
- Stable tool order for prompt caching
- Large results, pagination and links to files
- Asking the client for input without server-initiated requests
- Long-running work through the tasks extension

### Transports and deployment

- Local standard input and output
- Streamable HTTP for remote servers
- Packaging servers in containers
- Versioning a server without breaking clients

### Authorisation

- OAuth-based delegation and protected resource metadata
- Client registration now that dynamic registration is deprecated
- Token audience, scope minimisation and lifetimes
- Why token passthrough is forbidden
- Confused-deputy risk in authorisation proxies
- Request forgery during metadata discovery

### Testing servers

- The reference inspector and scripted clients
- Contract and error-path tests
- Tool poisoning and changes after approval
- Hostile text in tool results

### Gateways and registries

- Central gateways and allowlists
- Shadow servers and inventory
- Rate limits, audit logs and secrets
- Server descriptions for registries

### Agent-to-agent interoperation

- Agent cards, tasks, messages, parts and artefacts
- Protocol bindings: JSON-RPC, gRPC and HTTP with JSON
- Streaming and push notifications
- When to expose a tool server and when an agent service
