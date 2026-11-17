# SPC-GEN-303 · Speech and Arabic Language Modelling

- Track: Data Science
- Path: [Generative, Multimodal and Embodied Models](../paths/SPC-GEN.md)
- Level: Level 300 · Develop
- Format: Extended: 10 weeks part-time, one two-hour session and one lab a week, weekly graded assignments and a capstone
- Total hours: 60 h
- Audience: specialist
- Status: In development

## Description

Participants train and adapt the models behind spoken and written Arabic. They fine-tune a self-supervised speech encoder and an encoder-decoder recogniser on public Arabic speech, report error rates by dialect, and fine-tune a text-to-speech model judged by listening tests. For text, they design an Arabic-aware tokeniser, continue pretraining and align a small open-weight model, and evaluate it against audited Arabic and cultural benchmarks. Applications are DEV-LLM-302 and DEV-MLE-302.

## Learning outcomes

By the end, the participant can:

- Explain how Arabic morphology, optional diacritics, dialects and code-switching affect tokenisation, recognition and evaluation.
- Fine-tune a speech encoder and an encoder-decoder recogniser for Arabic and report error rates by dialect.
- Fine-tune a pretrained text-to-speech model for Arabic and measure its intelligibility and naturalness.
- Design an Arabic and English tokeniser and justify its vocabulary by fertility and downstream loss.
- Build a continued-pretraining and alignment run that improves a small open-weight model in Arabic without losing English ability.
- Evaluate an Arabic model for knowledge, instruction-following, dialect and cultural appropriateness, and audit the benchmarks used.

## Prerequisites

- [SPC-DLR-302 · Deep Learning from First Principles](SPC-DLR-302.md)
- Has trained a small transformer language model end to end, as in SPC-DLR-303
- Reads Arabic script, or pairs with someone who does for error analysis

## Topics

### Speech recognition

- Self-supervised speech encoders
- Connectionist temporal classification and encoder-decoder models
- Error rates, normalisation and diacritics

### Speech synthesis

- Acoustic models, vocoders, codec tokens and speech language models
- Listening tests and objective proxies
- Voice cloning and consent

### Tokenisation and multilinguality

- Tokeniser fertility on Arabic
- Morphological segmentation
- Cross-lingual transfer and vocabulary extension

### Arabic pretraining and alignment

- Filtering, deduplication and dialect identification
- Mixing ratios and forgetting
- Preference data for cultural norms

### Arabic evaluation

- Knowledge, exam and instruction-following benchmarks
- Cultural and dialect evaluation sets
- Contamination and translated-benchmark artefacts
