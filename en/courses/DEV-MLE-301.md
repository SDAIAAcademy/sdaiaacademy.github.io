# DEV-MLE-301 · Computer Vision Engineering

- Track: AI Engineering
- Path: [Machine Learning Engineering](../paths/DEV-MLE.md)
- Level: Level 300 · Develop
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: practitioner
- Status: In development

## Description

Participants build vision systems that survive field conditions. On public inspection images and street-scene video they audit annotations, fine-tune convolutional and transformer backbones, train detectors and segmenters, track and count objects, and fit a model to a latency budget. Every lab ends with a test under changed lighting, blur or camera position. Vision-language models are DEV-MLE-304; on-device runtimes are DEV-INF-303.

## Learning outcomes

By the end, the participant can:

- Prepare an image dataset by auditing labels, near-duplicates and leakage by site, and writing annotation guidelines.
- Apply transfer learning from convolutional and transformer backbones with a stated augmentation policy.
- Compute mean average precision over intersection-over-union thresholds and analyse detection errors by type.
- Build a video pipeline that detects, tracks and counts objects crossing a line.
- Optimise a vision model to a latency, memory and accuracy budget through resolution, export and quantisation.
- Evaluate a vision system under field conditions and decide whether it is fit for release.

## Prerequisites

- [DEV-MLE-202 · Deep Learning Engineering](DEV-MLE-202.md)
- Reads precision-recall curves and computes precision and recall by hand

## Topics

### Visual data

- Boxes, masks, keypoints and annotation formats
- Guidelines, agreement and label noise
- Near-duplicates and leakage by scene or site
- Augmentation and what it assumes; sensors are DEV-PHY-201

### Backbones and tasks

- Convolutional networks and vision transformers
- Self-supervised open-weight backbones and their licences
- Detection, semantic, instance and promptable segmentation
- Keypoints and pose in brief; document text is DEV-LLM-204
- Open-vocabulary detectors as zero-shot baselines

### Video

- Frame sampling against latency
- Tracking by detection and identity metrics
- Counting and event rules

### Evaluation and release

- Precision-recall, average precision and overlap metrics
- The gap between test and production
- Corruption and shift tests; monitoring camera drift

### Deployment constraints

- Resolution, batch size and numeric precision
- Export to an interchange format and quantisation
- Measuring latency and memory on CPU and accelerators
