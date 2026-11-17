# DEV-PHY-201 · Sensors, Perception and Compute for Physical AI

- Track: AI Engineering
- Path: [Physical AI and Robotics Engineering](../paths/DEV-PHY.md)
- Level: Level 200 · Apply
- Format: Workshop: two lab days on a shared sensor kit and a tracked follow-up task
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

On a kit with a colour camera, a depth camera, an inertial measurement unit (IMU) and a single-board computer, participants measure sensor noise, calibrate the camera-IMU pair, record synchronised streams, fuse inertial data into an orientation estimate and run a quantised detector within a latency budget, ending with a node that reports object positions in 3D.

## Learning outcomes

By the end, the participant can:

- Explain how cameras, depth sensors and inertial units measure, and the main error sources of each.
- Calibrate camera intrinsics and the camera-IMU extrinsics and time offset.
- Implement synchronised recording and an inertial orientation filter with consistent frames.
- Measure the end-to-end latency of a quantised detector on embedded compute, stage by stage.
- Build a real-time node that reports 3D positions of one object class from colour and depth images.

## Prerequisites

- Writes Python with NumPy on Linux
- Uses rotation matrices and Gaussian noise (FND-MTH-101, FND-MTH-103)
- Has run a pretrained image model

## Next courses

- [DEV-PHY-301 · Simulation and Digital Twins for AI Systems](DEV-PHY-301.md)
- [DEV-PHY-302 · Robot Learning Systems: Data, Policies and Deployment](DEV-PHY-302.md)

## Topics

### Sensors and their errors

- Pinhole model, distortion and shutters
- Stereo, structured-light, time-of-flight and lidar depth
- IMU bias, noise and drift

### Calibration, time and frames

- Target-based calibration
- Camera-IMU extrinsics and time offset
- Timestamps, synchronisation and transforms

### Fusion

- Complementary and Kalman filters
- Back-projecting detections with depth
- Visual-inertial odometry and mapping in brief

### Real-time perception on embedded compute

- Latency budgets from motion to decision
- Quantised models in an interchange format
- Dropped frames and thermal throttling
