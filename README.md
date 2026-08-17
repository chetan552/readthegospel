# Read The Gospel

A quiet place to read the true gospel of Jesus Christ — a Next.js 15 site hosting the
four-step gospel path by Zac Poonen, indexes of the 72 Basic Christian Teachings and the
70 Through the Bible expositions (audio on cfcindia.com), and an about page.

## Stack

- Next.js 15 (App Router), React 19, TypeScript
- Styling: one plain CSS file (`app/globals.css`) — no CSS framework
- Fonts: self-hosted via `next/font` — EB Garamond (display serif), Lora (reading serif), Outfit (UI sans)
- Tests: Vitest + Testing Library (jsdom)

## Commands

```bash
npm run dev        # dev server
npm run build      # production build
npm start          # serve production build
npm test           # run component tests once
npm run test:watch # tests in watch mode
```

## Design system

All visual design lives in `app/globals.css`, driven by CSS custom properties on
`:root` (light) and `[data-theme="dark"]`. Every text color pair is verified
≥ 4.5:1 contrast (WCAG 2.2 AA) on its worst-case surface.

### Palette

| Token | Light | Dark | Role |
|---|---|---|---|
| `--bg` / `--bg-deep` | `#f5efe3` / `#ece2d0` | `#161310` / `#100e0c` | warm page background |
| `--paper` | `#faf6ec` | `#1e1a15` | cards and panels |
| `--ink` | `#221c14` | `#f3eadc` | primary text |
| `--ink-soft` | `#554c3f` | `#c9beab` | secondary text |
| `--muted` | `#6b6153` | `#a29a8a` | metadata |
| `--accent` | `#4c6a54` | `#8fb599` | sage green — the single restrained accent |
| `--accent-strong` | `#3d5745` | `#a8c3ad` | accent hover states |
| `--accent-contrast` | `#fff9f1` | `#16211a` | text on accent buttons |
| `--gold` | `#7a6127` | `#cfa95e` | micro-highlights only: kickers, scripture citations, step labels |
| `--quote-tint` | `#edf0e6` | `#232a24` | scripture panel background |
| `--prompt-tint` | `#e8ecdf` | `#1f2620` | prayer/action panel background |

A subtle noise texture (`body::before`) sits over the background for warmth; a
soft sage radial glow opens the page. Radii are 12–16px; shadows are low and
warm. Gradients are used only behind the page, never on reading surfaces.

### Typography

- **EB Garamond** (`--font-display`) — large editorial headings, the hero verse, scripture panels
- **Lora** (`--font-serif`) — reading text, body
- **Outfit** (`--font-sans`) — navigation, buttons, labels, metadata

Reading prose is 1.19rem / 1.85 line height in a 700px centered column
(`.narrow`). Articles open with a sage dropcap.

### Components

| Component | Purpose |
|---|---|
| `components/ui/Button.tsx` | The one CTA control: `variant="primary"\|"ghost"`, `href` → internal `<Link>`, external `<a target="_blank">`, no `href` → `<button>` |
| `components/ui/PageHeader.tsx` | Standard page intro (kicker + h1 + lede) for non-article pages |
| `components/ui/BottomActionBar.tsx` | Mobile-only (≤860px) fixed bottom bar carrying the next step in the reading flow, with safe-area padding |
| `components/ArticleLayout.tsx` | Shared article shell: breadcrumb, hero, media/language rows, prose panel, author card, desktop next-step card, bottom bar |
| `components/Header.tsx` | Sticky header: logo, nav with active underline, theme toggle, mobile menu sheet |
| `components/ReadingProgress.tsx` | Reading progress bar with `role="progressbar"` aria state |

### Theme

`components/ThemeScript.tsx` sets `data-theme` from `localStorage["rtg-theme"]`
(or system preference) before first paint; `ThemeToggle` flips it. Dark mode is
a designed palette, not an inversion. The logo (dark lettering) receives a light
pill background in dark mode.

### Accessibility notes

- Global `:focus-visible` ring (3px sage, 3px offset)
- 44px minimum touch targets for interactive controls
- Color is never the sole indicator (active nav uses underline + weight; links underline on hover)
- `prefers-reduced-motion` disables all transitions/animations
- Skip link, semantic landmarks, `aria-current` on active nav, `aria-expanded`/`aria-controls` on the menu
- All type is rem-based; content has no fixed widths (zoom-safe)

### SEO

- Keyword-focused, honest meta titles and descriptions on every page (never fabricated dates or hidden text)
- `app/sitemap.ts` and `app/robots.ts` (generated at build; `/contact` and 404 excluded)
- JSON-LD structured data: `WebSite` on the home page, `Article` + `BreadcrumbList` on article pages
- Canonical URLs via `alternates.canonical` on every page; OpenGraph + Twitter cards with a generated 1200×630 image (`app/opengraph-image.tsx`)

### Content provenance

All articles and teaching titles are by Zac Poonen, shared to make the true
gospel freely readable. The original site is [readthegospel.com](https://readthegospel.com);
teachings link out to [cfcindia.com](https://www.cfcindia.com/).
