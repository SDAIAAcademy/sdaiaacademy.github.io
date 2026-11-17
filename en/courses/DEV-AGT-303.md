# DEV-AGT-303 · Computer-Use and Browser Agents

- Track: AI Engineering
- Path: [Agentic Systems](../paths/DEV-AGT.md)
- Level: Level 300 · Develop
- Format: Workshop: two days with labs and a short build project, with guided pre-work
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants build agents that act through graphical and web interfaces, and learn when not to. In a containerised desktop and a locally hosted synthetic services portal, they compare screenshot and page-structure observation, ground actions on interface elements, recover from unexpected dialogs, and fence the agent with a disposable browser profile, a domain allowlist and confirmation before irreversible actions. They measure partial and complete task success separately, price each completed task, and recommend whether an API or a scripted automation would do the job better.

## Learning outcomes

By the end, the participant can:

- Compare screenshot, accessibility-tree and document object model observation for cost, reliability and exposure to injected content.
- Implement a browser agent that completes multi-step form tasks with element grounding, waiting and error recovery.
- Measure partial and complete task success, consistency over repeated trials and cost per completed task.
- Configure containment for an interface agent with a disposable profile, a domain allowlist, no stored credentials, confirmation gates and a step budget.
- Diagnose the causes of failed interface-agent runs and redesign the agent or the task to remove the most frequent cause.
- Decide whether an interface agent, a scripted automation or an API integration fits a process, using measured cost, latency and risk.

## Prerequisites

- [DEV-AGT-301 · Agentic Systems Engineering: Loops, Context and Harnesses](DEV-AGT-301.md)
- Reads HTML and uses browser developer tools to inspect page elements
- Has run a containerised application with a mapped port

## Topics

### Acting through interfaces

- Observation: screenshots, accessibility trees and page structure
- Action spaces: click, type, scroll, keys, navigation
- Coordinate grounding and element grounding
- Labelled element overlays
- Why interface steps are slow and costly

### Browser agents

- Headed and headless browsers
- Waiting, synchronisation and dynamic pages
- Tabs, downloads and file uploads
- Test accounts only; no real credentials

### Desktop agents

- Virtual displays in containers and virtual machines
- Screen scaling and coordinate frames
- Legacy forms and dialogs

### Measuring success

- Partial credit versus completed tasks
- State-based checks on the back end
- Public interface benchmarks and their limits
- Consistency over repeated trials
- Cost and time per completed task

### Safety limits

- Page content as untrusted input
- Injection through visible text, hidden elements and pop-ups
- Confirmation before irreversible actions
- Payments, credentials and bot-detection challenges kept out of scope
- Human takeover and hand-back in the middle of a task
- Personal data in screenshots and recordings

### When an API is the better tool

- Scripted automation as the baseline
- Hybrid designs: API where it exists, interface where it does not
- Turning a successful agent run into a replayable script
- Maintenance cost when interfaces change
