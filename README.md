# Ziyue Wu — personal site

Portfolio site for a product manager working on language learning. Static, fast, no tracking. The page is laid out as a CELTA lesson plan: a bar at the bottom tracks the stage, who's talking and the lesson clock as you scroll. Doodles (an avatar that follows your cursor, a classroom and a pair-learning scene that flip when clicked) carry the personality.

## Stack

- **Astro** — builds every page to plain HTML at build time, so there is no client-side framework to ship
- **Tailwind** — styling, with the design tokens defined in `src/styles/global.css`
- Deployed on **Vercel**

## Where the content lives

Text and links are data, not markup. To change what the site says, edit these two files — the components read from them and should not be touched for a copy change:

| File | Holds |
| :--- | :--- |
| `src/data/site.ts` | Name, tagline, email, external profile links, the CV button toggle |
| `src/data/projects.ts` | The project cards, the research → product items, the pair-learning doodle captions |
| `src/data/teaching.ts` | CELTA facts, the 36 report ratings, classroom habits → product decisions |
| `src/data/lesson.ts` | The lesson-plan stages (must match section ids), the contact chat lines |

An empty string for a link hides that link automatically, so filling one in is all that is needed to make it appear.

## Running it locally

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies (first time only) |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview that build before deploying |

## Working on this repo

Remaining tasks, and the rules for changing anything, are in `BUILD-PLAN.md`. Plain-language explanations of how each feature works are in `LEARNING.md`.
