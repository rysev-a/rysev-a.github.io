# alexeirysev.dev

Personal site, built by GitHub Pages with Jekyll. English pages live at `/`, Russian ones at `/ru/`.

## Add a blog post

Create a Markdown file — GitHub Pages builds it on push:

- English: `_posts/YYYY-MM-DD-slug.md` → `/blog/slug/`
- Russian: `ru/_posts/YYYY-MM-DD-slug.md` → `/ru/blog/slug/`

```yaml
---
ref: post-slug          # the same value in both languages links the translations
title: Post title
description: One sentence shown in the post list.
date: 2026-11-27 10:00:00 +0300
---
```

## Add a project

Create `_projects/en/<slug>.md` and `_projects/ru/<slug>.md` with the same `ref`. Copy the front matter of an existing
project (`title`, `kind`, `icon`, `order`, `permalink`, `summary`, `tags`, `links`); the body is the detail page. Icons are
in `icons/` (`icon: music-notes` means `icons/music-notes.svg`).

## Preview locally

```sh
gem install jekyll -v 3.10.0 kramdown-parser-gfm
jekyll serve        # http://localhost:4000
```
