# SPC-ANL-201 · Exploratory Analysis and Visualisation

- Track: Data Science
- Path: [Analysis and Business Intelligence](../paths/SPC-ANL.md)
- Level: Level 200 · Apply
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: practitioner
- Status: In development

## Description

Participants start every analysis from written questions, then use summaries and charts to examine distributions, relationships and change over time in public and synthetic datasets. They build charts with a grammar-of-graphics library, choose encodings and scales that do not mislead, and test by resampling whether an apparent pattern could be chance. Every step lives in a notebook that reruns from raw data. The capstone is an exploratory report on an unseen dataset, defended live.

## Learning outcomes

By the end, the participant can:

- Distinguish exploratory from confirmatory analysis and explain why an exploratory pattern needs a fresh test.
- Prepare an analysis plan listing questions, units of observation, variables and the comparison that answers each question.
- Analyse distributions and pairwise relationships with summaries and charts suited to each variable type.
- Use a grammar of graphics to map variables to position, colour and facets, with honest scales and baselines.
- Test whether an apparent difference or correlation could arise by chance, using permutation or bootstrap resampling.
- Build a reproducible exploratory report stating findings, open questions and limits.

## Prerequisites

- [FND-DAT-102 · Data Wrangling with DataFrames](FND-DAT-102.md)
- Computes and reads means, medians, quantiles and standard deviations
- Has run a permutation test or bootstrap interval (FND-MTH-104 or the pre-work notebook)

## Next courses

- [SPC-ANL-202 · Analysis with AI Assistants: Delegate, Verify, Reproduce](SPC-ANL-202.md)
- [SPC-ANL-203 · Metrics, Semantic Models and Dashboards](SPC-ANL-203.md)
- [SPC-ANL-301 · Data Storytelling and Decision Briefings](SPC-ANL-301.md)
- [SPC-ANL-302 · Geospatial Analytics](SPC-ANL-302.md)
- [SPC-MOD-307 · Problem Framing, Product Sense and Analytical Review](SPC-MOD-307.md)

## Topics

### Questions before charts

- Analysis questions and units of observation
- Provenance and data dictionaries
- Exploratory versus confirmatory work

### Distributions and relationships

- Shape, skew, outliers and missing values
- Scatter plots, overplotting and binning
- Confounding and Simpson's paradox
- Trend, seasonality and breaks

### Grammar of graphics and perception

- Aesthetics, geometries, scales and facets
- Accuracy of visual encodings
- Colour, including colour-vision deficiency
- Baselines, dual axes and truncated scales
- Showing uncertainty with intervals and bands
- Bilingual and right-to-left chart labels

### Checking patterns and notebooks

- Permutation tests and bootstrap intervals
- Forking paths and recording dead ends
- Notebooks that rerun from raw data
