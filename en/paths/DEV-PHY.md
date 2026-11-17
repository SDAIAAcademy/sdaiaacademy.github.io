# DEV-PHY · Physical AI and Robotics Engineering

Track: AI Engineering

## Purpose

Teach developers to build, test and make safe AI systems that sense and act in the physical world: perception on real sensors, simulation and digital twins, learned robot policies and safety engineering.

## Who it is for

Computer vision, machine learning and embedded engineers who build robots, vehicles, drones and industrial automation with learned components, and the architects and risk analysts who sign them off.

## Suggested order

Start with DEV-PHY-201 (sensors and real-time perception), continue to DEV-PHY-301 (simulation and digital twins) and DEV-PHY-302 (robot learning systems), and finish with DEV-PHY-401 (safety engineering). Vision models are taught in DEV-MLE-301, on-device runtimes in DEV-INF-303 and DEV-INF-304, and research-grade robot learning in SPC-GEN-401.

## Courses in order

In the order their prerequisites suggest.

### 1. [DEV-PHY-201 · Sensors, Perception and Compute for Physical AI](../courses/DEV-PHY-201.md)

- Level 200 · Apply · Workshop · 16 h · In development
- Explain how cameras, depth sensors and inertial units measure, and the main error sources of each.
- Calibrate camera intrinsics and the camera-IMU extrinsics and time offset.
- Implement synchronised recording and an inertial orientation filter with consistent frames.
- Measure the end-to-end latency of a quantised detector on embedded compute, stage by stage.
- Build a real-time node that reports 3D positions of one object class from colour and depth images.

### 2. [DEV-PHY-301 · Simulation and Digital Twins for AI Systems](../courses/DEV-PHY-301.md)

- Level 300 · Develop · Intensive · 30 h · In development
- Needs: DEV-PHY-201
- Configure a physics simulation of an arm and conveyor cell, choosing time step, contact and solver settings.
- Generate a labelled synthetic image dataset with randomised lighting, texture, pose and camera placement.
- Evaluate the synthetic-to-real gap of a detector and decide the mix of synthetic and real training data.
- Apply system identification to fit the friction, damping and mass of a simulated arm to logged trajectories.
- Build a digital twin that ingests replayed telemetry, stays synchronised and flags divergence from the asset.
- Evaluate a twin against acceptance criteria for one stated use and decide the domain in which its answers hold.

### 3. [DEV-PHY-302 · Robot Learning Systems: Data, Policies and Deployment](../courses/DEV-PHY-302.md)

- Level 300 · Develop · Intensive · 36 h · In development
- Needs: DEV-PHY-201
- Collect teleoperated demonstrations and audit them for synchronisation, task success and coverage of starting conditions.
- Train an imitation policy and fine-tune a small pretrained action model on the same data at matched compute.
- Evaluate policies with randomised starting conditions and enough trials to separate them.
- Deploy a policy with a control loop that meets its rate, enforces joint, workspace and speed limits and stops on command.
- Diagnose the dominant failure of a deployed policy and decide what data to collect next.

### 4. [DEV-PHY-401 · Safety Engineering for Autonomous Systems](../courses/DEV-PHY-401.md)

- Level 400 · Evaluate · Workshop · 16 h · In development
- Apply system-theoretic hazard analysis to a system with learned perception and specify its operational design domain.
- Build a structured safety case linking claims to test evidence, with its defeaters.
- Design and fault-test a runtime monitor and fallback that keep the system in its safety envelope.
- Measure human takeover time and mode errors and derive interface requirements.
- Review a published incident and decide the changes to hazards, tests and the safety case.
