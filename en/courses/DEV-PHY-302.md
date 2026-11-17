# DEV-PHY-302 · Robot Learning Systems: Data, Policies and Deployment

- Track: AI Engineering
- Path: [Physical AI and Robotics Engineering](../paths/DEV-PHY.md)
- Level: Level 300 · Develop
- Format: Intensive: 4 teaching days and a capstone day at robot stations, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: practitioner
- Status: In development

## Description

In teams of two or three at a station with a low-cost open arm and a leader arm for teleoperation, participants collect and audit demonstrations, train an imitation policy, fine-tune a small pretrained action model, evaluate both over many trials in simulation and on the arm, and deploy the better one with a timed control loop, limits and a stop. Methods research belongs to SPC-GEN-401 and safety cases to DEV-PHY-401; this course is about data, evaluation and deployment.

## Learning outcomes

By the end, the participant can:

- Collect teleoperated demonstrations and audit them for synchronisation, task success and coverage of starting conditions.
- Train an imitation policy and fine-tune a small pretrained action model on the same data at matched compute.
- Evaluate policies with randomised starting conditions and enough trials to separate them.
- Deploy a policy with a control loop that meets its rate, enforces joint, workspace and speed limits and stops on command.
- Diagnose the dominant failure of a deployed policy and decide what data to collect next.

## Prerequisites

- [DEV-PHY-201 · Sensors, Perception and Compute for Physical AI](DEV-PHY-201.md)
- Trains and debugs a neural network, as taught in DEV-MLE-202
- Has run a physics simulation; DEV-PHY-301 is recommended

## Topics

### Robot learning as a system

- Observation and action spaces, control rates and latency
- Where learned policies fail: contact, long horizons, novelty
- Control, imitation or reinforcement learning

### Demonstration data

- Teleoperation with leader arms, phones and headsets
- Episodes, synchronisation and dataset formats
- Quality audits, coverage and licences

### Policies

- Behaviour cloning and compounding error
- Action chunking and diffusion policies
- Fine-tuning pretrained vision-language-action models

### Evaluation

- Trial protocols, randomised starts and seeds
- Success rates with confidence intervals
- Simulation benchmarks versus real trials

### Deployment

- Inference latency and asynchronous action execution
- Limits, watchdogs and stops
- Logging for replay and collecting corrections
