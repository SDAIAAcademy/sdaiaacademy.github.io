# DEV-LLM-205 · Voice and Conversational Applications

- Track: AI Engineering
- Path: [Language Model Application Engineering](../paths/DEV-LLM.md)
- Level: Level 200 · Apply
- Format: Workshop: two days with labs and a short build project, with guided pre-work
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants build a voice agent fast enough to talk to. They compare a cascaded speech-to-text-to-speech pipeline with a single speech-to-speech session, handle turn-taking and interruption, measure the latency of every stage, connect a browser or telephony channel, and test recognition on Arabic dialects and code-switched speech. The case study is a synthetic bilingual appointment line with scripted callers and synthetic voices. Hosted real-time speech access and a telephony sandbox are provided; recognition and synthesis engineering in depth is DEV-MLE-302.

## Learning outcomes

By the end, the participant can:

- Distinguish cascaded, speech-to-speech and full-duplex voice architectures by latency, control and inspectable text.
- Implement a cascaded agent with voice activity detection, streaming recognition, tools and streaming synthesis.
- Configure end-of-turn detection and interruption handling.
- Measure word and character error rates on dialect and code-switched speech.
- Build a voice channel that confirms key details and hands over to a person.

## Prerequisites

- [DEV-LLM-201 · Building Applications on Language Models](DEV-LLM-201.md)
- Writes asynchronous Python

## Topics

### Architectures

- Cascaded pipelines
- Speech-to-speech sessions
- Full-duplex with a separate back end

### Conversation mechanics

- End-of-turn detection
- Interruptions
- Confirming names, numbers and dates

### Latency budgets

- Streaming at every stage
- Time to first audio
- Tool calls during speech

### Channels and Arabic speech

- Browser media and telephony
- Dialects and code-switching
- Synthesis quality
