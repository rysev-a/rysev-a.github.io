---
ref: learn-music
lang: en
order: 2
permalink: /projects/learn-music/
title: Learn Music
kind: Learning app
icon: music-notes
summary: "A browser app for learning to read sheet music. It renders the score, plays it back at the tempo you set, and checks what you play note by note."
tags: [JavaScript, Web Audio, Notation, No build step]
links:
  - { label: Source, url: "https://github.com/rysev-a/learn-music" }
---

## What it is

Learn Music is a small trainer for reading notes. It shows two staves: **Original** — a bar of a real piece — and **My notes**,
where you write down what you read. The app compares the two and shows where you went wrong, then plays both so you can hear
the difference.

## How a lesson goes

1. Pick a piece and an exercise from the library. Exercises are cut bar by bar from real music — for example, Carcassi's
   Op. 60 No. 1, split into groups of four bars.
2. Read the Original and enter the notes on the piano board or with the computer keyboard (rows of keys map to octaves).
3. Check: the checker compares your notes with the Original, note by note.
4. Listen: playback uses sampled piano sounds, at a tempo you choose — and you can save favourite tempos.

## Details

- A note editor with a grid from whole notes down to sixteenths and triplets, a second voice, key signatures and time signatures.
- A full-screen board with only the staves and a tool column — handy on a phone held sideways.
- A tool panel you can reorder and colour; everything is remembered in the browser.
- Plain ES modules and no build step: `python3 -m http.server` is enough to run it. The logic is covered by `node --test`.
