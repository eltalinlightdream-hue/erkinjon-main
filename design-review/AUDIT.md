# Design & UX audit — abduraimov-erkinjon.com (IELTS prep)

Generated during the Step 3 audit. Baseline screenshots: `design-review/before/`
(13 pages × desktop 1440px / mobile 390px, `deviceScaleFactor: 2`).

Captures are clipped at 5,000 logical px tall. Eight of the 26 exceed that — most
dramatically `/reading` at 97,178px on mobile, which is itself finding #9 below.
Images are palette-quantised to 256 colours (flat UI, visually lossless) to keep
the directory at 13 MB rather than 90 MB.

## Stack as built

| Concern | Reality |
|---|---|
| Framework | TanStack Start + TanStack Router (file routes, `src/routes`) |
| Styling | Tailwind v4 (CSS-first `@theme inline`), shadcn/Radix, `src/styles.css` (840 lines) |
| Tokens | Already a mature CSS custom-property system — light `:root` + `.dark` |
| Fonts | Fraunces (serif display) + Inter (sans) + JetBrains Mono, via Google Fonts |
| Data | Supabase + RLS; TanStack Query |
| Run | `bun run dev` (needs `--host 127.0.0.1` in IPv6-less sandboxes) |

**The product is IELTS / English exam prep for Uzbek learners** — not a
Japanese-learning app. The root `CLAUDE.md` describes the wrong product. Japanese
is one secondary nav section among many.

## Part 1 — Web Interface Guidelines review

### src/routes/index.tsx
- `src/routes/index.tsx:130-145` — placeholder testimonials shipped live: `name: "Student name"`, `score: "Band —"`, quotes that are instructions to the author.
- `src/routes/index.tsx:212-214` — placeholder hero stats shipped live: `value: "—"`, `label: "Students taught (add real number)"`.
- `src/routes/index.tsx:186-193` — `<Button>` nested inside `<Link>` renders `<button>` inside `<a>`: invalid HTML, double focus stop. Use `<Button asChild>`.
- `src/routes/index.tsx:410-417` — same nesting, repeated in the closing CTA.
- `src/routes/index.tsx:74-110` — `01`–`05` numbered markers on content that is not a sequence (Practice, Materials, Videos, Articles, Free) — implies ordered steps that do not exist.
- `src/routes/index.tsx:166` — hero headline uses `<em>` for visual accent only; italic+colour on "guided practice" carries no semantic emphasis.

### src/routes/practice.tsx
- `src/routes/practice.tsx:71` — heading hierarchy: page `<h1>` is `text-3xl md:text-4xl`, smaller than the home `<h1>` at `text-4xl md:text-6xl lg:text-7xl`. Inconsistent page-title scale across routes.
- Otherwise ✓ pass.

### src/components/site-layout.tsx
- `src/components/site-layout.tsx:787` — no skip-to-content link anywhere before `<main>`; keyboard users traverse the full nav on every route.
- `src/components/site-layout.tsx:182` — `<nav>` has no `aria-label`; with a second `<nav>` in the footer, neither is distinguishable to screen readers.
- Icon buttons ✓ pass — `aria-label` present at :416, :425, :491.

### src/components/reveal.tsx
- ✓ pass. Hydration-safe, falls back to visible without IntersectionObserver, neutralised under reduced motion.

### src/styles.css
- `src/styles.css:323-329` — universal `*, *::before, *::after` transition on 4 properties including `box-shadow`. Applies to every element on every page to animate a theme toggle; `box-shadow` is not compositor-friendly.
- `src/styles.css:834` — `filter: blur(1.4px)` on the full-screen `<canvas>` that repaints every rAF tick — re-filters the whole viewport each frame.
- Reduced motion ✓ pass (`:792-815`, thorough).

### Cross-cutting
- `src/routes/articles.tsx:157` — 57 `<img>` with no `width`/`height`. Measured: all 57 lack dimensions → cumulative layout shift. (`aspect-[16/9]` on the wrapper limits but does not eliminate it.)
- `src/routes/reading.tsx:204` — 288 passages rendered unvirtualized. Measured: **6,066 DOM nodes, 33,731px tall, 4.3s to networkidle**. Guideline threshold is 50.
- No URL state: filters, search and status on `/reading` live in `useState`, so a filtered view can't be shared or deep-linked.
- Site ignores `prefers-color-scheme`. Measured: with OS dark set, `<html>` stays `class="light"`. The `.dark` theme is well built but only reachable via the manual toggle.

### Measured contrast failures (WCAG AA)

| Element | Colours | Ratio | Required | Verdict |
|---|---|---|---|---|
| Eyebrow label, 11px/600 | `#C8553D` on `#FAF6F0` | **4.04** | 4.5 | **fail** |
| Primary button, 14px | `#FFF9F4` on `#C8553D` | **4.17** | 4.5 | **fail** |
| Hero `<em>`, 72px | `#C8553D` on `#FAF6F0` | 4.04 | 3.0 | pass (large) |
| Body copy, 18px | `#6F6357` on `#FAF6F0` | 5.42 | 4.5 | pass |

The terracotta `#C8553D` is the single cause of both failures. It is used for
every eyebrow, every primary CTA, and every active nav link.

## Part 2 — Design direction

### The core problem: the design has three identities at once

1. **Italian atelier.** `styles.css` is themed "Italian study atelier — giorno/sera". The hero eyebrow reads *"Scuola d'inglese"*, the footer *"Lo studio è il viaggio"*.
2. **Japanese.** Legacy tokens `--sakura`, `--matcha`, `--washi` are aliased onto the Italian palette. A whole Japanese nav section remains.
3. **Minecraft.** `--mc-grass`, `--mc-dirt`, `--mc-stone`, `--mc-obsidian`, `--mc-redstone` tokens and `minecraft-characters.tsx` / `minecraft-decorations.tsx` components.

The actual product is **IELTS prep for Uzbek learners, taught free by a Band 8.0
teacher in Fergana**. None of the three identities is that. Italian styling on an
English-exam site for Uzbek students is the most visible mismatch — it reads as
decoration borrowed from elsewhere rather than a considered choice.

### The palette is the current default AI-design look

The `frontend-design` skill names, as its first calibration example, "a warm cream
background (near #F4F1EA) with a high-contrast serif display and a terracotta
accent (often near #D97757)". The site is `#FAF6F0` cream + Fraunces serif display
+ `#C8553D` terracotta. It also hits five further named tells:

- tracked-out ALL-CAPS eyebrow above every heading
- middle-dot meta strings (`Scuola d'inglese · IELTS preparation`)
- `→` appended to link and button text (`Start Practising Free →`, `Start →`)
- identical rounded cards, one radius, one soft shadow, regardless of hierarchy
- numbered `01`/`02`/`03` markers on non-sequential content

This is worth saying plainly: the design is competent and internally consistent.
It just converges on what every generated site currently looks like, so it reads
as templated rather than as this teacher's school.

### Proposed direction

`ui-ux-pro-max` was queried four ways. Its literal top matches were poor fits —
"Claymorphism + Baloo 2/Comic Neue" (keyed to *children's* apps) and "AI-Native
UI + purple" (keyed to chatbots). Neither suits adults preparing for a
university-entry exam. The useful hits were its **Editorial Grid / Magazine**
style entry and its **Academic/Research** font pairing. Combined with the LMS
palette entry, the recommendation:

**Direction: disciplined academic editorial.** A study-desk feel — the authority
of a textbook, the warmth of a small school — with Uzbek rather than Italian
reference points.

| Axis | Proposal | Why |
|---|---|---|
| Base | Keep a warm paper ground, but shift off `#FAF6F0` cream toward a cooler, less fashionable off-white | Breaks the cream+terracotta cliché while keeping the warmth that suits a teacher's site |
| Primary | Replace terracotta with a deeper ink-blue or teal that clears 4.5:1 on paper and as a button fill | Fixes both measured contrast failures at the root; teal is the LMS-catalogue convention for learning progress |
| Accent | Keep one warm tone (amber/ochre) strictly for achievement and progress | Colour becomes semantic — progress vs. action — rather than decorative |
| Serif | Keep a serif display, but one with less of the current moment on it than Fraunces | Retains editorial authority, drops the tell |
| Sans | Keep Inter, or move to Atkinson Hyperlegible for body | Atkinson is designed for legibility; this audience reads dense exam passages for 20 min at a time |
| Structure | Break the uniform card grid: let the four skills differ in weight by how much they're used | Hierarchy through scale contrast rather than uniform emphasis |

Band scores (6.5 / 7.0 / 8.0) are the one number this audience cares about. They
are the natural place to spend the design's boldness — currently they are set in
the same serif as everything else, and two of three are `—`.

## Part 3 — Prioritised recommendations

### Quick wins — small, safe, high payoff

1. **Remove or fill the placeholder content.** Three fake testimonials and two `—`
   stats are live on the homepage. "(add real number)" is visible to every
   visitor and is actively damaging to trust on a site whose pitch is a real
   teacher's real band score. Either fill them or delete the sections.
2. **Fix the two contrast failures.** Darken the primary to clear 4.5:1 for the
   eyebrow and the button fill. One token change, site-wide effect.
3. **Fix `<Button>` inside `<Link>`** (4 places) with `asChild` — invalid HTML and
   a double tab stop on the main CTAs.
4. **Add a skip-to-content link** and `aria-label` on the two `<nav>`s.
5. **Add `width`/`height` to the 57 article images** — removes the layout shift.
6. **Scope the global `*` transition** to a `.theme-transition` class toggled during
   theme switch, instead of every element on every page.
7. **Restore the wordmark on mobile** — the header currently shows only the diamond
   glyph under `lg`, so the teacher's name disappears on phones.
8. **Drop the `→` from button labels** and the `01`–`05` numerals from the
   non-sequential feature list.

### Medium — a few files each

9. **Virtualize `/reading`** (288 items, 6,066 nodes, 4.3s). Also `/listening` and
   `/articles`. Biggest single performance win on the site.
10. **Put `/reading` filters, search and status into URL search params** so a
    filtered view is shareable and survives a refresh.
11. **Respect `prefers-color-scheme`** on first visit, with the manual toggle as
    an override. The dark theme already exists and is good.
12. **Unify page-title scale** across routes — `/practice` and the home page
    currently disagree by three steps.
13. **Retire the dead token families** (`--mc-*`, `--sakura`/`--matcha`/`--washi`)
    and the Minecraft components, or commit to them deliberately.
14. **Reconsider the particle-network canvas.** A blurred full-screen rAF canvas
    costs real frames and says nothing about IELTS. If atmosphere is wanted,
    something static and cheaper would carry more meaning.

### Bigger — a real redesign pass

15. **Re-theme from Italian atelier to the actual product.** New palette per the
    table above; strip the Italian copy (`Scuola d'inglese`, `Lo studio è il
    viaggio`) unless it is a deliberate brand choice.
16. **Rebuild the homepage hero around proof rather than a serif headline.** The
    strongest asset is a free Band 8.0 teacher. Lead with that, not with
    "Master IELTS with *guided practice*".
17. **Give the four skills distinct treatment** instead of four identical cards —
    differentiate by how much each is actually used.
18. **Design the practice/test-taking screens as the product's core.** The marketing
    pages are polished; the place a student spends an hour deserves at least
    equal attention.
19. **Correct `CLAUDE.md`**, which documents a Japanese-learning app and will
    mislead every future contributor and AI session.

## Appendix — environment notes

- `package.json` and `bun.lock` were mutually inconsistent at HEAD (`package.json`
  wanted `@tanstack/react-start ~1.168.60`; the lock pinned `1.167.50`). A clean
  `bun install` resolved a tree where `start-server-core` 1.169.40 destructured
  `getMatchedRoutes` as a tuple while `router-core` 1.168.17 returned an object —
  **every route returned HTTP 500**. Deleting `node_modules` + `bun.lock` and
  re-resolving produced a working tree (`react-router` 1.170.42 / `router-core`
  1.171.35). `bun.lock` is therefore modified in the working tree; `package.json`
  is untouched. This needs a decision: commit the regenerated lock, or pin
  `package.json` back.
- `bun.lock` pins 41 packages to `europe-west1/4-npm.pkg.dev` (Lovable's registry
  mirror), which this sandbox blocks by default.
