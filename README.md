# Agentic Codespace

A GitHub Codespace with three AI coding agents installed with `npm install -g`:

| Agent | npm package | Command |
|---|---|---|
| OpenCode | `@opencode/cli` | `opencode` |
| Codex | `@openai/codex` | `codex` |
| Claude Code | `@anthropic-ai/claude-code` | `claude` |

## Start it

Click **Code → Codespaces → Create codespace on main**. The three agents are installed
while the codespace is being created.

## Sign in

Each agent asks you to log in the first time you run it:

- `opencode`: run `opencode auth login` and pick a provider
- `codex`: sign in with your ChatGPT account, or set `OPENAI_API_KEY`
- `claude`: sign in with your Claude account, or set `ANTHROPIC_API_KEY`

To keep API keys out of the repo, add them as
[Codespaces secrets](https://github.com/settings/codespaces) instead of typing them in.

## The app

This repository contains a small discount calculator built with React, Vite, and
Tailwind CSS. Enter an original amount and a discount percentage, and it shows
how much you save and the final price.

- Run it locally with `./start_dev_server.sh` (or `npm run dev`).
- Build it with `npm run build`.
- Every push to `main` publishes it to GitHub Pages via
  `.github/workflows/deploy.yml`.

