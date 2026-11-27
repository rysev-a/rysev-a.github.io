---
ref: ai-comments
lang: en
order: 4
permalink: /projects/ai-comments/
title: AI Comments
kind: Server + extension
icon: sparkles
summary: "Select an area of a page, write what to change, and an AI agent picks it up — it edits the code and reports progress back to the same page, live."
tags: [Vite plugin, Browser extension, Claude, CLI]
links:
  - { label: Source, url: "https://github.com/rysev-a/ai-comments" }
---

## What it is

Review comments on a web page, worked off by Claude or by any other agent. You select an area of the page and write what to
change; when you send the comments, an agent takes them, changes the code and reports its progress back to the same page.

```
add comment ─▶ draft ─▶ send (batch) ─▶ sent ─▶ processing 40 % ─▶ done ─▶ archive
```

## On the page

- **Add:** drag over an area, write the comment, save it as a draft or send it to the agent right away.
- **Board:** every comment as a card on a kanban board — draft, sent, processing, done, archive. Cards are grouped by batch,
  and you drag them between columns.
- **Threads:** the agent's note on a finished comment is its reply; you can answer and send the comment back for another round.

## How the agent works

By default the server starts `claude -p` in the project root when comments are sent. In external mode it starts nothing, and
the batch waits for an agent elsewhere — another machine, an editor's agent, or a person. Either way the agent uses a small CLI:

```
ai-comments take                          sent → processing
ai-comments progress <id> <0-100> [note]  live progress on the card
ai-comments done <id> [note]              processing → done
```

All state lives in one JSON file in the project, so the board updates live and nothing is lost if the page closes.
