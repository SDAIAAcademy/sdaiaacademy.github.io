# DEV-MLE-305 · Geospatial and Earth-Observation AI Engineering

- Track: AI Engineering
- Path: [Machine Learning Engineering](../paths/DEV-MLE.md)
- Level: Level 300 · Develop
- Format: Workshop: two days with labs and a tracked follow-up task
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants build an Earth-observation pipeline from open satellite archives: they search a scene catalogue, mask clouds, cut chips aligned with vector labels, fine-tune an open foundation model for land-cover segmentation and detect change between two dates. Validation uses spatially separated folds and ground-truth points. Spatial joins and map design are in SPC-ANL-302.

## Learning outcomes

By the end, the participant can:

- Prepare analysis-ready image chips with cloud masking, reprojection and labels rasterised from vector data.
- Configure spatially blocked cross-validation and compute per-class accuracy against ground-truth points.
- Evaluate a fine-tuned open Earth-observation foundation model against a segmentation baseline trained from scratch.
- Build a change-detection workflow and estimate the changed area with a confidence interval.
- Prepare predictions as cloud-optimised rasters and vector layers with a model card.

## Prerequisites

- [DEV-MLE-202 · Deep Learning Engineering](DEV-MLE-202.md)
- Has trained an image segmentation or classification model (DEV-MLE-301 or equivalent)
- Has handled vector map data in Python or a desktop GIS

## Topics

### Geospatial data

- Raster, vector and coordinate reference systems
- Multispectral bands, indices and radar
- Catalogues and cloud-optimised formats

### Models

- Segmentation baselines
- Fine-tuning open Earth-observation foundation models
- Multi-date change detection

### Validation and delivery

- Spatial autocorrelation and blocked folds
- Error matrices and area estimation
- Shift across regions and seasons
- Tiled inference and licences of imagery
