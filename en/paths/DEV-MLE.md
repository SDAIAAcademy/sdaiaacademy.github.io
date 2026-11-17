# DEV-MLE · Machine Learning Engineering

Track: AI Engineering

## Purpose

Teach developers to turn validated modelling approaches into trained, tested and reproducible models and data pipelines that hold up on production data.

## Who it is for

Software, data and AI engineers who train, fine-tune or own learned models inside products and services, and data scientists moving into engineering roles.

## Suggested order

Start with DEV-MLE-201 (baselines, validation and reproducible pipelines), then DEV-MLE-202 (training neural networks) and DEV-MLE-203 (feature and labelling pipelines); specialise by modality or problem in DEV-MLE-301 to DEV-MLE-306, and continue to operations in DEV-OPS-301 and performance in DEV-INF-401.

## Courses in order

In the order their prerequisites suggest.

### 1. [DEV-MLE-201 · Machine Learning Engineering: Baselines, Validation and Pipelines](../courses/DEV-MLE-201.md)

- Level 200 · Apply · Intensive · 36 h · In development
- Needs: FND-AIC-101
- Explain why a validation estimate turns optimistic when splits ignore groups, time order or duplicate entities.
- Implement a baseline ladder from a constant predictor through a regularised linear model to gradient-boosted trees tuned under a fixed budget, then test an automated or pretrained challenger.
- Configure a grouped or time-ordered validation scheme and report its gap to a naive random split.
- Analyse a training pipeline for target, temporal, preprocessing and entity leakage and remove each source.
- Calibrate predicted probabilities and choose a decision threshold from stated error costs.
- Build a reproducible training pipeline that another engineer re-runs to the same metrics.

### 2. [DEV-MLE-202 · Deep Learning Engineering](../courses/DEV-MLE-202.md)

- Level 200 · Apply · Intensive · 36 h · In development
- Needs: DEV-MLE-201
- Compute gradients by reverse-mode automatic differentiation and estimate the memory held by saved activations.
- Implement a training loop with learning-rate scheduling, checkpointing, resumption and fixed seeds.
- Diagnose faults in broken training runs using overfit-one-batch tests, loss and gradient-norm curves and data checks.
- Apply transfer learning from an open-weight model, comparing frozen, partial and full fine-tuning with training from scratch.
- Measure throughput and peak memory, then apply mixed precision, data-loading and batch-size changes.
- Use experiment tracking to run a bounded hyperparameter search and report results across seeds.

### 3. [DEV-MLE-203 · Feature, Training-Data and Labelling Pipelines](../courses/DEV-MLE-203.md)

- Level 200 · Apply · Workshop · 16 h · In development
- Needs: DEV-MLE-201
- Explain how point-in-time errors, stale features and training-serving skew enter a prediction system.
- Implement an as-of join that uses only feature values available at each label's time.
- Configure shared feature definitions with offline materialisation and online retrieval.
- Test a deployed model for training-serving skew by comparing logged and recomputed features.
- Build a labelling flow that samples by model uncertainty, pre-labels, routes to human review and versions the labels.

### 4. [DEV-MLE-301 · Computer Vision Engineering](../courses/DEV-MLE-301.md)

- Level 300 · Develop · Intensive · 36 h · In development
- Needs: DEV-MLE-202
- Prepare an image dataset by auditing labels, near-duplicates and leakage by site, and writing annotation guidelines.
- Apply transfer learning from convolutional and transformer backbones with a stated augmentation policy.
- Compute mean average precision over intersection-over-union thresholds and analyse detection errors by type.
- Build a video pipeline that detects, tracks and counts objects crossing a line.
- Optimise a vision model to a latency, memory and accuracy budget through resolution, export and quantisation.
- Evaluate a vision system under field conditions and decide whether it is fit for release.

### 5. [DEV-MLE-302 · Speech and Audio Systems Engineering](../courses/DEV-MLE-302.md)

- Level 300 · Develop · Intensive · 30 h · In development
- Needs: DEV-MLE-202
- Prepare a speech dataset with segmentation, transcript normalisation rules and speaker-disjoint splits.
- Measure word and character error rates, real-time factor and latency by dialect, speaker group and channel.
- Optimise an open-weight recogniser for a target domain and dialect by fine-tuning, and decide whether the improvement justifies its cost.
- Implement voice activity detection and speaker diarisation, and compute the diarisation error rate.
- Test an open text-to-speech model with a recognise-back check and a small listening panel.
- Build a streaming transcription service that meets a latency budget and degrades gracefully under load.

### 6. [DEV-MLE-303 · Recommender and Ranking Systems Engineering](../courses/DEV-MLE-303.md)

- Level 300 · Develop · Intensive · 30 h · In development
- Needs: DEV-MLE-201, DEV-MLE-202
- Prepare an interaction dataset with implicit-feedback labels, time-based splits and leakage checks.
- Implement candidate generation with matrix factorisation and a two-tower model served from an approximate nearest-neighbour index.
- Build a learned ranking stage with business rules and diversity re-ranking over retrieved candidates.
- Compute an off-policy estimate of a new ranking policy from logged data, with its variance.
- Design an online experiment for a ranking change, with primary metric, guardrails, duration and feedback-loop risk.
- Diagnose cold-start and popularity-bias failures and select controls for new users, new items and long-tail exposure.

### 7. [DEV-MLE-304 · Multimodal Systems Engineering](../courses/DEV-MLE-304.md)

- Level 300 · Develop · Workshop · 16 h · In development
- Needs: DEV-LLM-201
- Implement question answering and field extraction from images with schema validation.
- Use boxes and points returned by the model to check that each answer refers to the right region.
- Evaluate an open-weight and a hosted vision-language model for accuracy, hallucination, cost and latency, and choose one.
- Build a video pipeline that samples frames, answers time-stamped questions and routes low-confidence segments to human review.
- Explain where image resolution, cropping and frame sampling lose information a model needs.

### 8. [DEV-MLE-305 · Geospatial and Earth-Observation AI Engineering](../courses/DEV-MLE-305.md)

- Level 300 · Develop · Workshop · 16 h · In development
- Needs: DEV-MLE-202
- Prepare analysis-ready image chips with cloud masking, reprojection and labels rasterised from vector data.
- Configure spatially blocked cross-validation and compute per-class accuracy against ground-truth points.
- Evaluate a fine-tuned open Earth-observation foundation model against a segmentation baseline trained from scratch.
- Build a change-detection workflow and estimate the changed area with a confidence interval.
- Prepare predictions as cloud-optimised rasters and vector layers with a model card.

### 9. [DEV-MLE-306 · Forecasting Systems in Production](../courses/DEV-MLE-306.md)

- Level 300 · Develop · Workshop · 16 h · In development
- Needs: SPC-MOD-302
- Implement a rolling-origin backtest that scores point and quantile forecasts against naive floors.
- Test statistical, gradient-boosted and pretrained zero-shot forecasters under one backtest.
- Apply hierarchical reconciliation across product and region levels.
- Build a scheduled pipeline with input checks, versioned models and forecasts stored with their intervals.
- Design monitoring and retraining rules that catch accuracy decay and structural breaks without reacting to noise.
