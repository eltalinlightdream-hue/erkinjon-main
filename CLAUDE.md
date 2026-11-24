# CLAUDE.md

Guidance for Claude Code (and any AI assistant) working in this repository.

## Project

A language-learning web app, mainly IELTS prep (reading, writing, listening,
speaking, vocabulary, articles) plus a Japanese section (alphabet, grammar,
topics), with premium gating and user accounts.

**Stack**

- **Framework:** TanStack Start + TanStack Router (file-based routes in `src/routes`)
- **UI:** React 19, Tailwind CSS v4, shadcn/Radix UI primitives in `src/components/ui`
- **Data/auth:** Supabase (`src/integrations/supabase`), Row Level Security; migrations in `supabase/migrations`
- **Runtime/tooling:** Bun, Vite 7, ESLint + Prettier, TypeScript (strict)
- **Deploy:** Vercel / Cloudflare (`vercel.json`, `wrangler.jsonc`)

**Common commands**

```bash
bun run dev      # local dev server (vite)
bun run build    # production build
bun run lint     # eslint
bun run format   # prettier --write
```

## Conventions

- Server logic lives in `*.functions.ts` files under `src/lib` (TanStack server functions). Keep data access there, not in components.
- Supabase keys in `.env` are **public** client keys protected by RLS — safe to commit. The `service_role` key is never committed; it is set in the deploy environment only.
- Match the style of surrounding files: shadcn-style UI components, `cn()` from `src/lib/utils.ts` for class merging, Zod for validation, TanStack Query for server state.

## Reading passages

Each reading passage is a standalone HTML file in `public/passages/`, listed in
`src/lib/reading-data.ts` (`htmlFile`). Every new passage **must**:

1. **Load the shared bridge** just before `</body>`:
   `<script src="/passages/test-progress-bridge.js"></script>`.
   It records completion and also loads `public/passages/synonym-table.js`, which
   adds the **Keyword & Synonym Matching** table under the questions
   (`#questions-container`) automatically. Rows come from the page's question
   numbers (`.progress-item` / `name="qN"` inputs), so keep those conventions.
2. **Include model synonym answers.** Add this block right before the bridge
   script, with one entry per question number (1–3 pairs each):

   ```html
   <script type="application/json" id="synonym-answers">
   {
     "7": [{ "question": "various parts of a tree", "passage": "the leaves, roots and bark of trees" }],
     "8": [{ "question": "nests are created in", "passage": "eggs are laid in soil" }]
   }
   </script>
   ```

   - `question`: the key words/phrase from the question.
   - `passage`: the paraphrase/synonym the passage actually uses, quoted from
     the text (trim with `...`). For Not Given items, point to the nearest
     related text and note that nothing confirms it.
   - Valid JSON only (double quotes, no trailing commas). Students see these
     only after they submit.

   Reference example: `public/passages/C20_T1_P1_The_Kakapo.html`.

Do not add a separate copy of the table to a passage; the shared script owns it.

## Coding rules (ECC rule packs)

Curated coding-standard packs from the [ECC](https://github.com/affaan-m/ECC)
project live under `.claude/rules/ecc/`. Each file carries `paths:` frontmatter
indicating which files it governs. **Before writing or reviewing code, consult
the matching rule files:**

- **All work** → `.claude/rules/ecc/common/` (coding-style, patterns, security, performance, testing, code-review, git-workflow, development-workflow)
- **`*.ts` / `*.tsx`** → `.claude/rules/ecc/typescript/`
- **React components (`*.tsx`, `src/components/**`, `src/routes/**`)** → `.claude/rules/ecc/react/`
- **Frontend / UI surfaces** → `.claude/rules/ecc/web/` (note `web/design-quality.md` — avoid generic template UI)

Language packs extend the `common/` baseline. When guidance conflicts with an
existing, consistent pattern already in this codebase, prefer the codebase's
established pattern and note the discrepancy.

## Skills (ECC, `.claude/skills/`)

Curated ECC skills are installed under `.claude/skills/`. Claude Code
auto-discovers each `SKILL.md`; invoke one when a task matches its description
(or the user types `/skill-name`). Installed set and when they fire:

| Skill | Use it when |
|-------|-------------|
| `postgres-patterns` | Writing/optimizing Supabase (Postgres) queries, schema, indexes, RLS |
| `database-migrations` | Creating or changing `supabase/migrations` |
| `react-patterns` / `react-performance` / `react-testing` | Building, optimizing, or testing React components |
| `frontend-patterns` | General frontend structure/state/data-fetching |
| `design-system` | Generating or auditing UI consistency (shadcn/Tailwind) |
| `motion-ui` | Animations / transitions (e.g. reveal, decorations) |
| `error-handling` | Error boundaries, server-function failures, `error-capture.ts` |
| `e2e-testing` | Playwright end-to-end tests |
| `security-review` | Auth, user input, secrets, API endpoints, premium/sensitive features |
| `bun-runtime` | Bun-specific tooling/runtime questions |
| `coding-standards` | Broad code-quality passes |
| `documentation-lookup` | Confirming library/framework APIs (TanStack, Supabase, Radix) |

> Caveat: `documentation-lookup` is written around the Context7 MCP server,
> which may not be configured here — treat it as "check current docs before
> coding" guidance; use available fetch/search tools if Context7 is absent.

> Some rule files reference ECC-specific agents/tooling (e.g. a `planner` or
> `tdd-guide` agent, or `gh` search) that are **not** installed here. Treat
> those as aspirational guidance, not hard requirements.
