---
ref: post-ai-comments
title: From a comment on the page to a code change
description: How AI Comments lets you point at part of a page, write what to change, and have an agent do it.
date: 2026-11-27 12:00:00 +0300
---

Reviewing a web page usually means screenshots, arrows and a long message. [AI Comments](/projects/ai-comments/) replaces that
with comments placed right on the page, which an AI agent then works through.

## The loop

1. **Point.** Drag over the part of the page you mean and write what should change.
2. **Collect.** Comments wait as drafts until you are ready; then you send them as a named batch.
3. **Work.** An agent takes the batch, changes the code and reports progress on each card — the percentage moves live.
4. **Review.** A finished comment carries the agent's note on what changed. Reply to send it back for another round, or
   archive it.

## Why a file and a CLI

All state lives in one JSON file in the project. The page, the board and the agent all read and write the same file, so
nothing depends on a single process staying alive. The agent uses three commands — `take`, `progress` and `done` — which
makes it easy to plug in any agent: Claude started by the server, an editor's agent, or a person on another machine.

The code is on [GitHub](https://github.com/rysev-a/ai-comments).
