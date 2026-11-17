# SPC-ANL-302 · Geospatial Analytics

- Track: Data Science
- Path: [Analysis and Business Intelligence](../paths/SPC-ANL.md)
- Level: Level 300 · Develop
- Format: Workshop: two days with labs, guided pre-work and a short defended project
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants answer location questions with open vector data on a laptop. They correct coordinate reference systems, geocode addresses, use spatial joins and network distance to measure access to services, map rates rather than counts, and test whether a cluster is stronger than chance. The workshop ends with a service-access analysis on open geodata, defended live. Imagery and learned models are DEV-MLE-305.

## Learning outcomes

By the end, the participant can:

- Explain how projections and the modifiable areal unit problem can change a spatial result.
- Apply spatial joins, buffers and distance measures to compute access to services.
- Prepare maps with normalised measures, suitable class breaks and colour schemes.
- Diagnose spatial clustering with global and local autocorrelation and judge whether a hot spot is meaningful.
- Deliver a service-access analysis with stated assumptions and limits.

## Prerequisites

- [SPC-ANL-201 · Exploratory Analysis and Visualisation](SPC-ANL-201.md)
- Writes dataframe or SQL analyses with joins and grouping

## Topics

### Spatial data

- Reference systems and projections
- GeoJSON, GeoPackage and GeoParquet
- Geocoding addresses and match errors
- Open geodata and licences

### Spatial operations

- Joins, overlays and buffers
- Network distance and travel-time areas
- Hexagonal and square grids

### Map design

- Rates by population or area
- Unstable rates in small areas
- Class breaks, colour and Arabic labels

### Spatial statistics and privacy

- Global and local autocorrelation
- Modifiable areal unit and edge effects
- Re-identification and minimum-count aggregation
