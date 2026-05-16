# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Prabandham is a static, plain-HTML/CSS literary site that publishes serialized novels. There is **no build system, no JS framework, no test suite, no package manager** — every page is a hand-authored `.html` file linked to a shared stylesheet. Deployment is drag-and-drop to Netlify.

## Running locally

Open `index.html` directly in a browser, or serve the directory with any static server, e.g.:

```
python3 -m http.server 8000
```

There is nothing to install, build, or compile.

## Architecture

### Site structure
- `index.html` — homepage with a `.books-grid` of `<a class="book-card">` entries, one per book. Each card links into a book subdirectory.
- `styles.css` — **shared** stylesheet used by the homepage and every chapter page. Defines CSS variables, typography (Cormorant Garamond + Cinzel from Google Fonts), the `prefers-color-scheme: dark` palette, and all the `.chapter-*`, `.book-card`, `.ad-*`, `.breadcrumb-nav` classes the books rely on. Treat it as the canonical design system — changes here affect every page.
- `ads.js` — currently unused at runtime. It holds AdSense placeholder templates and the `ADSENSE_PUBLISHER_ID` constant for when the site is approved. Actual ad slots are inlined as `<div class="ad-placeholder">` blocks in each chapter file.
- `the-weight-of-maat/`, `the-second-voice/`, `ananda/` — one directory per book. Each has its own `index.html` (book landing / table of contents) and per-chapter HTML files. Books may add a book-local stylesheet (e.g. `second-voice-styles.css`, `ananda-styles.css`) that is loaded *after* the shared `../styles.css` to override or extend it. `the-weight-of-maat` uses an inline `<style>` block in its title page instead of a separate file. `ananda` is a single-page novel (no chapter files).

### Page conventions (all chapter pages share this skeleton)
1. `<link rel="stylesheet" href="../styles.css">` — relative path from the book subdirectory.
2. A `<!-- AdSense head script will go here after approval -->` placeholder in `<head>`.
3. `<nav class="breadcrumb-nav">` with `Home / Book / Chapter` links.
4. Three ad slots per chapter: a top horizontal banner (`ad-top`), a mid-chapter rectangle (`ad-mid`) placed at a `<div class="scene-break">— ✦ —</div>` break, and a bottom horizontal banner (`ad-bottom`). Each is a `<div class="ad-placeholder">` that will be swapped for an `<ins class="adsbygoogle">` block post-approval.
5. Chapter body uses `.dropcap-para` for the opening paragraph and `.body-para` for subsequent paragraphs; `.epigraph` for chapter opening quotes; `.chapter-title`, `.chapter-subtitle`, `.chapter-label` for headers.

### Adding a new book
Mirror the existing book directories: create `new-book/`, give it an `index.html` table of contents, add per-chapter files following the skeleton above, and add a new `<a class="book-card">` entry to the root `index.html` `.books-grid`. Reuse `../styles.css`; only add a book-local stylesheet if the book needs visual treatment distinct from the shared design system.

### AdSense integration (when approved)
Two coordinated changes per chapter file: (a) replace the `<!-- AdSense head script ... -->` comment in `<head>` with the actual `<script async src="...adsbygoogle.js?client=ca-pub-XXX">` tag, and (b) replace each `<div class="ad-placeholder">…</div>` with the corresponding `<ins class="adsbygoogle">` snippet for that slot. `ads.js` contains reference templates for the three slot types but is not loaded by any page — it exists as documentation, not as a runtime dependency.

## Deployment

Drag the entire repo folder onto Netlify's drop zone, or wire up Git-based continuous deployment. No build command, no publish-directory configuration needed — it's already a flat static site.
