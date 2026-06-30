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

## Deliberately not installed

- **Skills (277+) / agents (67):** mostly off-topic for a Japanese-learning app
  (investor outreach, market research, slides, other languages) and they add
  large context/auto-load overhead. Can be added selectively on request.
- **Hooks (`hooks/`):** execute JS on assistant lifecycle events; a behavioral
  change best opted into deliberately rather than auto-installed.
- **Other language rule packs** (Go, Python, Swift, etc.): not part of this stack.
