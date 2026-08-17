# Read The Gospel

A place to read the true gospel of Jesus Christ — a Next.js 15 site hosting the
four-step gospel path by Zac Poonen, indexes of the 72 Basic Christian Teachings and the
70 Through the Bible expositions (audio on cfcindia.com), and an about page.

## Getting started

Prerequisites: **Node.js ≥ 20** (see `engines` in `package.json`).

```bash
npm install     # install dependencies
npm run dev     # start the dev server at http://localhost:3000
```

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build into `.next/` |
| `npm start` | Serve the production build |
| `npm run lint` | Lint |
| `npm test` | Run component tests once |
| `npm run test:watch` | Tests in watch mode |

## Site structure

| Route | Content |
|---|---|
| `/` | Home: the gospel verse, the four steps, and links to both teaching series |
| `/the-true-gospel-and-the-false` | Step 1 of the gospel path |
| `/the-gospel-message` | Step 2 of the gospel path |
| `/counterfeit-revival` | Step 3 of the gospel path |
| `/the-video-tape-of-our-memory` | Step 4 of the gospel path |
| `/teachings` | Index of both teaching series |
| `/basic-christian-teachings` | 72 teachings linking out to cfcindia.com audio pages |
| `/through-the-bible` | 70 book-by-book expositions (Old + New Testament) |
| `/about` | Why the site exists, and the author (with portrait) |
| `/contact` | 308-redirects to `https://cfcindia.com/locate-us` — no contact form is hosted |

Article pages render in reading order with breadcrumbs ("Step N of 4"), a next-step
action at the end (and a fixed bottom bar on mobile), reading progress, and language
links where the original articles have translations.

## Project layout

```
app/                    # App Router pages, layout, globals.css, sitemap, robots, og image
  about/                # About page (portrait in public/zac-poonen-profile.jpg)
  the-true-gospel-and-the-false/  # etc. — one folder per article
components/             # Shared UI
  ui/                   # Button, PageHeader, BottomActionBar
  __tests__/            # Vitest + Testing Library component tests
  ArticleLayout.tsx     # Article shell (breadcrumb, panels, next-step, progress)
  Header.tsx Footer.tsx ThemeScript.tsx ThemeToggle.tsx ReadingProgress.tsx Logo.tsx
lib/
  site.ts               # Site metadata, nav, author blurb — edit copy here
  articles.ts           # readingPath (the four articles), Article type, getArticle()
  teachings.ts          # basicTeachings, oldTestament, newTestament
public/                 # Logo (light + dark variants), favicon, author portrait
```

## Content model

- **`lib/site.ts`** — `site` (name, URL, tagline, visible + SEO descriptions), `nav`
  (header links), `author` (name, blurb, "more" link). Page copy and navigation live
  here, not in components.
- **`lib/articles.ts`** — `readingPath` holds the four gospel-path articles in order;
  `getArticle(slug)` looks one up. Article bodies are JSX rendered by
  `components/ArticleLayout.tsx`; adding a step to the path means updating
  `readingPath` and the adjacent `next`/`previous` links.
- **`lib/teachings.ts`** — `basicTeachings` (72), `oldTestament` + `newTestament`
  (70 total). Each item is `{ number, title, href }` pointing at the cfcindia.com
  audio page. The indexes are generated from these arrays.

Content fidelity note: theological prose is frozen byte-identical to the source
articles; markup/classNames may change, never wording.

## Stack

- Next.js 15 (App Router), React 19, TypeScript
- Styling: one plain CSS file (`app/globals.css`) — no CSS framework
- Fonts: self-hosted via `next/font` — EB Garamond (display serif), Lora (reading serif), Outfit (UI sans)
- Tests: Vitest + Testing Library (jsdom)

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
| `components/Logo.tsx` | Renders both logo variants; CSS shows the one matching the theme |
| `components/ReadingProgress.tsx` | Reading progress bar with `role="progressbar"` aria state |

### Theme

`components/ThemeScript.tsx` sets `data-theme` from `localStorage["rtg-theme"]`
(or system preference) before first paint; `ThemeToggle` flips it. Dark mode is
a designed palette, not an inversion.

The logo ships in two variants (both in `public/`): `readthegospel-logo.gif`
(dark lettering for light mode) and `readthegospel-logo-dark.png` (light
lettering and sage leaves, recolored to sit directly on the dark background).
If the source logo ever changes, regenerate the dark variant by pixel-remapping
it the same way: blue badge → `#161310`, lettering → `#f3eadc`, leaves →
`#8fb599`, alpha preserved.

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

## Testing

Vitest + Testing Library with jsdom; 14 tests across
`components/__tests__/` (ArticleLayout, Button, Header, ThemeToggle).
`vitest.setup.ts` polyfills `localStorage` (Vitest 4's jsdom environment does not
expose one).

```bash
npm test              # run once
npm run test:watch    # watch mode
```

## Deployment (Vercel)

The site deploys to Vercel from the GitHub repo
(`https://github.com/chetan552/readthegospel`, branch `main`) — push to `main`
and Vercel builds automatically. The Next.js preset is auto-detected; no
environment variables or server-side state are required (the contact form was
removed for exactly that reason — `/contact` redirects to cfcindia.com).

**Domain.** The canonical domain is `readthegospel.com`. The original site
currently lives on an AWS Lightsail instance; the plan is to retire it in favor
of Vercel:

1. In the Vercel project: **Settings → Domains → Add** `readthegospel.com` and
   `www.readthegospel.com`.
2. At the domain registrar, point the nameservers at Vercel
   (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`).
3. Vercel issues the SSL certificate and handles the www ↔ apex redirect
   automatically. Keep the Lightsail instance running during propagation — there
   is no downtime window.
4. Once traffic has moved, snapshot the Lightsail instance, delete it, its
   static IP, and any leftover Route 53 / Lightsail DNS zone.

## Content provenance

All articles and teaching titles are by Zac Poonen, shared to make the true
gospel freely readable. The original site is [readthegospel.com](https://readthegospel.com);
teachings link out to [cfcindia.com](https://www.cfcindia.com/).
