# CLAUDE.md

Guidance for Claude Code (and any AI assistant) working in this repository.

## Project

A Japanese-language learning web app (JLPT-style prep): reading, writing,
listening, speaking, vocabulary, grammar, and articles, with premium gating
and user accounts.

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
