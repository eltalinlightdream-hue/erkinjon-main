# ECC rule packs — what we installed

Source: [affaan-m/ECC](https://github.com/affaan-m/ECC) (`rules/` directory, `main`), an
Anthropic-hackathon-winning agent-harness toolkit for Claude Code. ECC is dev
tooling (skills/agents/rules/hooks for the assistant), not an application
library — so the relevant, high-value part for this project is its coding-rule
packs that match our stack.

## Packs taken (verbatim)

| Pack | Why it applies here |
|------|---------------------|
| `common/` | Baseline coding-style, patterns, security, performance, testing, code-review, git + development workflow |
| `typescript/` | Strict TypeScript across the whole codebase |
| `react/` | React 19 components and hooks |
| `web/` | Frontend/UI surfaces, incl. `design-quality.md` anti-template UI standards |

Activated via the project `CLAUDE.md` "Coding rules" section.

## Skills installed (`.claude/skills/`)

A curated 14-skill set was selected from ECC's real catalog (per `agent.yaml`)
to match this stack — see the table in the project `CLAUDE.md`. In short:
`postgres-patterns`, `database-migrations`, `react-patterns`,
`react-performance`, `react-testing`, `frontend-patterns`, `design-system`,
`motion-ui`, `error-handling`, `e2e-testing`, `security-review`, `bun-runtime`,
`coding-standards`, `documentation-lookup`. All are single-file `SKILL.md`
skills copied verbatim.

> Note: ECC's catalog does **not** include dedicated Supabase-auth, react-query,
> zod, youtube, TTS/STT, shadcn, vercel, or stripe skills (despite some
> third-party listings suggesting otherwise). `postgres-patterns` is the
> Supabase-relevant one; the rest of those concerns are covered by the rule
> packs and general frontend/backend skills.

## Deliberately not installed

- **Agents (67) & remaining skills:** mostly off-topic for a Japanese-learning
  app (investor outreach, market research, slides, other language ecosystems)
  and they add large context/auto-load overhead. Can be added selectively on request.
- **Hooks (`hooks/`):** execute JS on assistant lifecycle events; a behavioral
  change best opted into deliberately rather than auto-installed.
- **Other language rule packs** (Go, Python, Swift, etc.): not part of this stack.
