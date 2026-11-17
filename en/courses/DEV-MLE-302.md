# DEV-MLE-302 · Speech and Audio Systems Engineering

- Track: AI Engineering
- Path: [Machine Learning Engineering](../paths/DEV-MLE.md)
- Level: Level 300 · Develop
- Format: Intensive: 3 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: practitioner
- Status: In development

## Description

Participants build a speech pipeline end to end: they prepare audio and transcripts, benchmark and fine-tune open-weight recognisers, add voice activity detection and speaker diarisation, stream recognition within a latency budget, and test synthesised speech for read-back. Arabic is the main case, with Modern Standard Arabic, dialects, code-switching with English, and the normalisation rules that decide whether an error rate means anything. Voice agents and turn-taking are in DEV-LLM-205; training speech models from scratch is in SPC-GEN-303.

## Learning outcomes

By the end, the participant can:

- Prepare a speech dataset with segmentation, transcript normalisation rules and speaker-disjoint splits.
- Measure word and character error rates, real-time factor and latency by dialect, speaker group and channel.
- Optimise an open-weight recogniser for a target domain and dialect by fine-tuning, and decide whether the improvement justifies its cost.
- Implement voice activity detection and speaker diarisation, and compute the diarisation error rate.
- Test an open text-to-speech model with a recognise-back check and a small listening panel.
- Build a streaming transcription service that meets a latency budget and degrades gracefully under load.

## Prerequisites

- [DEV-MLE-202 · Deep Learning Engineering](DEV-MLE-202.md)
- Has containerised a small web service (DEV-OPS-201 or equivalent)
- Reads Arabic script, or brings another language with dialect variation for the labs

## Topics

### Speech fundamentals

- Spectrograms and log-mel features
- Encoder-decoder, connectionist temporal classification and transducer recognisers
- Self-supervised multilingual encoders
- Acoustic models, vocoders and voice cloning

### Arabic speech data

- Dialects and code-switching
- Normalising diacritics, letter variants and numerals
- Punctuation and inverse text normalisation
- Open corpora and their licences

### Recognition and diarisation

- Long-form segmentation
- Speaker embeddings and diarisation
- Adapters versus full fine-tuning
- Noise, reverberation and data augmentation
- Hallucinated text on silence

### Streaming and deployment

- Chunked and streaming decoding
- Real-time factor and batching
- Quantised models on CPU
- Monitoring channel and accent drift

### Evaluation and responsible use

- Error rates with intervals
- Listening tests
- Voice as biometric personal data
