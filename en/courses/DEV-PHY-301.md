# DEV-PHY-301 · Simulation and Digital Twins for AI Systems

- Track: AI Engineering
- Path: [Physical AI and Robotics Engineering](../paths/DEV-PHY.md)
- Level: Level 300 · Develop
- Format: Intensive: 3 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: practitioner
- Status: In development

## Description

Participants use simulation to produce data and decisions they can trust. They build a simulated arm and conveyor cell, generate labelled synthetic images with domain randomisation, measure how a detector trained on them fares on real public images, fit simulator parameters to logged trajectories of a low-cost arm, and keep a digital twin synchronised with replayed telemetry. The capstone is a validated twin that answers one operational question and states where it must not be used.

## Learning outcomes

By the end, the participant can:

- Configure a physics simulation of an arm and conveyor cell, choosing time step, contact and solver settings.
- Generate a labelled synthetic image dataset with randomised lighting, texture, pose and camera placement.
- Evaluate the synthetic-to-real gap of a detector and decide the mix of synthetic and real training data.
- Apply system identification to fit the friction, damping and mass of a simulated arm to logged trajectories.
- Build a digital twin that ingests replayed telemetry, stays synchronised and flags divergence from the asset.
- Evaluate a twin against acceptance criteria for one stated use and decide the domain in which its answers hold.

## Prerequisites

- [DEV-PHY-201 · Sensors, Perception and Compute for Physical AI](DEV-PHY-201.md)
- Trains and evaluates a neural network, as taught in DEV-MLE-202
- Reads basic rigid-body mechanics: mass, friction, torque

## Topics

### Simulation foundations

- Rigid-body dynamics, contact and friction
- Simulated cameras, depth and inertial noise
- Determinism, seeds, speed and fidelity

### Synthetic data

- Procedural scenes and automatic labels
- Domain randomisation versus photorealism
- Label quality and coverage checks

### Closing the reality gap

- Measuring the gap on real data
- System identification
- Learned simulators and world models in brief

### Digital twins

- Models, shadows and twins
- Asset information models and telemetry synchronisation
- Co-simulation with Functional Mock-up Interface (FMI) units
- What-if analysis and virtual commissioning

### Validation and use

- Validity domains and acceptance criteria
- Comparing simulated and real runs statistically
- Drift between twin and asset
