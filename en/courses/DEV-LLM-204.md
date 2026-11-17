# DEV-LLM-204 · Document Intelligence: Parsing, Extraction and Multimodal Retrieval

- Track: AI Engineering
- Path: [Language Model Application Engineering](../paths/DEV-LLM.md)
- Level: Level 200 · Apply
- Format: Workshop: two days with labs and a short build project, with guided pre-work
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants turn scanned and digital documents into checked data. They compare parsers and vision models on Arabic and English pages, score parsing on its own, extract fields from forms and tables with validation rules, index page images beside parsed text, and send low-confidence fields to human review. The data is a synthetic set of tender forms, invoices and reports with tables, stamps and mixed scripts.

## Learning outcomes

By the end, the participant can:

- Compare pipeline parsers, small document models and general vision-language models for layout, tables and Arabic text.
- Measure parsing quality separately from extraction with edit distance and table-structure scores.
- Implement schema-based extraction with field rules and cross-field checks.
- Implement retrieval that indexes page images alongside parsed text.
- Build a pipeline that routes low-confidence fields to human review.

## Prerequisites

- [DEV-LLM-201 · Building Applications on Language Models](DEV-LLM-201.md)
- Validates model output against a schema in Python

## Topics

### Parsing

- Born-digital text layers versus scanned pages
- Character recognition, layout and reading order
- Right-to-left and mixed scripts
- Specialised versus general vision models

### Tables and forms

- Table structure
- Fields, checkboxes and stamps

### Extraction with validation

- Schemas and field rules
- Cross-field checks
- Confidence and abstention
- Hidden text and instructions in documents

### Retrieval and review

- Page images as retrieval units
- Human review queues and their cost
