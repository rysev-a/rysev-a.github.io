---
ref: cs-core
lang: en
order: 3
permalink: /projects/cs-core/
title: CS.Core
kind: Education platform
icon: chart-pie-two
summary: "An audio course on programming, \"from zero to your own web service\": 12 books and 316 chapters with animated slides, quizzes, sandboxed code checks and interactive labs."
tags: [Rust, Leptos, axum, SurrealDB, Docker, Playwright]
links:
  - { label: Website, url: "https://cs-core.tech" }
  - { label: Source, url: "https://github.com/rysev-a/dev-learn" }
---

## What it is

CS.Core is a course that takes you from discrete maths and the transistor all the way to designing your own web service.
Every chapter has animated slides, voice-over text, a theory quiz and hands-on practice right in the browser. It runs at
[cs-core.tech](https://cs-core.tech) as a trial launch on a single small machine.

## The books

| Book | Chapters |
|---|---|
| Discrete Mathematics | 10 |
| Python as a First Language | 52 |
| Algorithms and Data Structures | 19 |
| Computer Architecture | 22 |
| From Assembler to C | 14 |
| Diving into Unix | 17 |
| Computer Networks | 20 |
| Virtualization | 16 |
| Databases | 32 |
| Learning Rust | 51 |
| Modern Frontend | 39 |
| System Design | 24 |

## Inside a chapter

- **Theory:** animated slides whose diagrams are built from data — cells, pointers, gates, regions, code.
- **Questions:** a quiz; only the server knows the correct answers.
- **Practice:** code exercises in Python, JavaScript, SQL, C and Rust, checked in a sandbox with no network.
- **Labs:** circuits made of gates, assembly and RISC-V, a network simulator, virtualization, a high-load service diagram,
  HTML and CSS. Lab solutions are re-checked on the server with the same code that runs in the browser.

## How it's built

```
browser (Leptos, wasm) ──► Traefik ──► frontend (Caddy, static files)
                                   └─► backend (axum) ──► SurrealDB
worker (Python) ──► dind ──► sandboxes (python, node, rust, gcc, sqlite)
```

The lab engines are shared Rust crates that run both in the browser (wasm) and on the server. Playwright tests cover every
book and lab, and the whole system can be run from prebuilt images.
