# DEV-SWE-203 · Front Ends for AI Applications: Streaming, Chat and Generative Interfaces

- Track: AI Engineering
- Path: [Software Engineering for AI Builders](../paths/DEV-SWE.md)
- Level: Level 200 · Apply
- Format: Workshop: two days with labs and a short build project, with guided pre-work
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants build the interface of an assistant and an agent against a provided back end that replays recorded event streams. They render streamed content, keep conversation state consistent through edits and reloads, show tool calls with approval prompts, and display agent-returned interactive components with a text fallback. Every lab is tested for accessibility, including screen readers and right-to-left Arabic. Interaction design for product teams is LDS-PRD-203.

## Learning outcomes

By the end, the participant can:

- Describe the events an agent sends to an interface and how an open agent-to-interface protocol carries them.
- Implement streamed rendering and conversation state that survive stops, retries, edits and reloads.
- Implement approval prompts that state an action, its target and its effect, with a fallback for interactive components.
- Test the interface for keyboard use, screen-reader announcement of streamed text and right-to-left layout.
- Build a chat and agent interface that streams, recovers from failure, gates actions on approval and passes the accessibility audit.

## Prerequisites

- Builds a small web application in a component framework
- Calls an HTTP API from the browser

## Topics

### Streaming

- Server-sent events and fetch streams
- Incremental Markdown and tables
- Sanitising model output: HTML, links and remote images
- Stop, retry and partial failure

### Conversation state

- The server as source of truth
- Edits, branches and resumption

### Tools and generative interfaces

- Approval prompts people read
- Agent-returned components and fallbacks
- Shared state and interrupts

### Accessible, bilingual interfaces

- Live regions and focus
- Right-to-left and mixed-direction text
- Disclosing AI-generated content
