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

> Some rule files reference ECC-specific agents/tooling (e.g. a `planner` or
> `tdd-guide` agent, or `gh` search) that are **not** installed here. Treat
> those as aspirational guidance, not hard requirements.
