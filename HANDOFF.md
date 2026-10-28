# Handoff (2026-10-28)

Read this first in a new session, then BUILD-PLAN.md (Log at the bottom) for history.
Branch: `claude/personal-portfolio-design-xfpe3p`. Everything below is decided unless marked open.

## How to work with Ziyue
- Reply in Chinese, conclusion first, short and actionable (ADHD). No compliments, no "Sure/Great".
- Best interpretation first, then ask. Discuss design choices with the "why" before building.
- Her own copy (notes, "what I learned" lines): guide her with questions, never write it for her.
- Don't copy any reference site's layout. Deploy / PR only when she asks.

## Current direction (homepage redesign, not started)
- Rejected: the "CELTA lesson plan" concept, the guided tour (Guide.astro), the lesson-plan sticky, Classroom.app (already deleted).
- Wanted: portfolio-first. Content visible immediately, plain names, minimal cute line art (Noritake, the HEYTEA logo illustrator; also Yu Nagaba, Nori Okawa, Karlotta Freier).
- First line-art mockup: `docs/mockups/lineart-mockup.html` (+ .png). She was still collecting references.
- Reference spencerhong.com: learn the principle, not the look (he forbids copying). The visuals come from his own identity (genome PhD + grandfather's calligraphy). Transferable: navigation is the metaphor, callout-line labels, an Explore timeline, an "Are you an AI agent?" plain-text page.
- My recommendation for her metaphor: speech science (a sound wave / spectrogram whose segments are the sections). Open: her personal second influence (handwriting, Chinese name, family, the supermarket story).

## Next feature: MSc learning timeline (replaces the Research window)
DECIDED: build it with the "Messy Stacking Sections" pattern from ITomPoland/ui-components (MIT; keep his copyright notice
in the file we adapt). Ziyue approved adding GSAP + Lenis as dependencies for this. Sheets of paper land tilted, straighten, pin.
Needs a reduced-motion / phone fallback (plain stacked cards). Reference clone was only read, not run.
Per-sheet content format (~40 words): course · lecturer · term / one idea (<=15 words) / what it changed in how I build or
teach (<=20 words) / optional evidence (<=10 words). Ziyue writes it (Chinese notes OK); we only fix grammar and trim.
Build the layout with TODO(Ziyue) placeholders first if her answers are not in yet.
Zooms out four times: sound → people → brain → between people.
1. Signals and Systems · Prof. Stuart Rosen (not "Steward") · line art: sound wave
2. Multilingualism · speech bubbles in several scripts
3. Neuroscience of language · Andrea (surname: open) · brain
4. Dissertation · Prof. Gabriella Vigliocco (multimodal communication lab, active vs passive roles in paired word learning) · two people talking with gestures
Each stop: two lines from Ziyue: what I learned / what it changed in how I build. Waiting on her answers to: (1) the most surprising thing in the course, (2) what she now looks at differently when designing or teaching.

## Other open items
- She rewrites the two v1/v2 notes in `src/data/storyDemo.ts` (`TODO(Ziyue)`).
- UCL degree title, supervisor credit wording, video titles, English wording of student cases.
- A git stash with the ink-fluid experiment can be dropped.

## Dev notes
- `npm run build`; preview `npx astro preview --port 4321`. Playwright is preinstalled (`require('playwright')`).
- Desk events: `desk:open`, `desk:close`, `desk:request {id}`, `avatar:laugh`. `<Window id>` ↔ `data-open="<id>"`.
- Cloud network blocks noritake.org and spencerhong.com: ask for screenshots.
