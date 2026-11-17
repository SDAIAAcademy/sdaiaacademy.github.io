# DEV-INF-304 · Embedded Machine Learning on Microcontrollers

- Track: AI Engineering
- Path: [Infrastructure, Performance and Architecture](../paths/DEV-INF.md)
- Level: Level 300 · Develop
- Format: Workshop: two bench days with one board per pair and a live demonstration
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants build a sensing device that runs a neural network in a few hundred kilobytes of memory and a few milliwatts of power. On a low-cost board they record and label sensor data, train and quantise a tiny model, deploy it as firmware and measure latency, memory and energy per inference.

## Learning outcomes

By the end, the participant can:

- Compute the flash, RAM and energy budget of a sensing application, including the tensor arena and duty cycle.
- Prepare a sensor dataset and feature pipeline with a documented collection protocol.
- Deploy a full-integer quantised model to a microcontroller and diagnose the memory, latency and accuracy problems that appear.
- Deliver a sensing device that meets a stated memory, latency and battery-life target under real conditions.

## Prerequisites

- [DEV-INF-201 · Machine Learning Systems on One Machine](DEV-INF-201.md)
- Reads and edits simple C or C++ code, or completes the provided two-hour firmware pre-work

## Topics

### Constraints of tiny devices

- Flash, SRAM, clock and power envelopes
- Always-on sensing and duty cycling
- Benchmarks for tiny inference

### From sensor to model

- Windowing, spectral and inertial features
- Small convolutional networks and autoencoders
- Quantisation-aware training and integer kernels

### Deployment and measurement

- Model as firmware: arena sizing and operators
- Energy per inference and battery life
- Desk accuracy versus field accuracy
