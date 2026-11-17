# FND-PRG-103 · Data Structures, Algorithms and Complexity

- Track: Data & AI Foundations
- Path: [Programming and Software Practice](../paths/FND-PRG.md)
- Level: Level 100 · Explain
- Format: Extended: 12 weekly three-hour sessions with labs, graded problem sets and a final project
- Total hours: 60 h
- Audience: beginner
- Status: In development

## Description

Participants implement the core data structures and algorithms in Python, measure them, and connect each to the data and model code they will write later. They build a dynamic array, a hash map, a heap, a search tree and a graph, analyse sorting and search by counting operations and by timing, and explain why a join, a deduplication or a nearest-neighbour lookup is fast or slow. The emphasis is reasoning about time and memory on realistic inputs, not interview puzzles.

## Learning outcomes

By the end, the participant can:

- Explain big-O notation and identify the cost class of a given piece of code.
- Compare arrays, linked structures, hash tables, heaps and trees by operation cost and memory layout.
- Implement a dynamic array, a hash map with collision handling, a binary heap and a binary search tree.
- Implement and measure sorting, binary search and graph traversal, and relate the timings to predicted complexity.
- Analyse a slow data-processing function and change its structure or algorithm to remove the bottleneck.
- Design and build a small in-memory index and defend its structures against a time and memory budget.

## Prerequisites

- [FND-PRG-101 · Python Programming for Data and AI](FND-PRG-101.md)
- Uses school algebra, including powers and logarithms

## Topics

### Cost models

- Counting operations and big-O
- Best, average and worst case
- Amortised cost
- Recursion, divide and conquer, and simple recurrences

### Sequences and hashing

- Dynamic arrays and memory layout
- Linked lists and when they lose
- Hashing, collisions and load factor
- How Python's dictionaries work

### Ordering and searching

- Comparison sorts and stable sort keys
- Binary search
- Heaps and top-k selection

### Trees and graphs

- Search trees and balance
- Tries for text prefixes
- Breadth-first and depth-first search
- Shortest paths with Dijkstra's algorithm

### Memory and data code

- Object overhead and contiguous data
- Streaming data that does not fit in memory
- Joins as hashing or sorting
- Nearest-neighbour search and why indexes approximate
- Edit distance by dynamic programming
