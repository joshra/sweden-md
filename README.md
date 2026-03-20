# Sweden.md

> An AI-native open knowledge base about Sweden, modeled after the projection-based structure of `taiwan-md`.

`sweden-md` uses `knowledge/` as the single source of truth. Content is synchronized into `src/content/`, and Astro renders the public site from that projected content layer.

## Structure

```text
knowledge/           ← SSOT for editorial markdown
├── About/
├── Culture/
├── Geography/
├── History/
├── Nature/
├── Society/
├── Technology/
└── en/

scripts/sync.sh      ← sync knowledge/ into src/content/
src/
├── layouts/
├── pages/
├── utils/
└── content/         ← generated projection layer
```

## Getting started

```bash
npm install
npm run sync
npm run dev
```

## Working rule

After every content or code update, rebuild the project before considering the change complete:

```bash
ASTRO_TELEMETRY_DISABLED=1 npm run build
```

## Deployment

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that:

- installs dependencies with `npm ci`
- synchronizes `knowledge/` into `src/content/`
- builds the Astro site
- deploys the generated `dist/` output to GitHub Pages

The Astro site is configured for the custom domain `https://sweden.com.tw`. The deployment output also includes `public/CNAME` so GitHub Pages can keep the custom domain attached during deploys.

## Current scope

- Mirrors the high-level `taiwan-md` architecture
- Includes bilingual starter content for Sweden
- Supports category pages and article pages generated from markdown
- Keeps the content workflow simple: edit `knowledge/`, then run `npm run sync`

## Editorial standard

- Full article guide: `EDITORIAL.md`
- Agent writing instructions: `AGENTS.md`
- Draft template: `knowledge/About/文章模板.md`
- Existing editorial note: `knowledge/About/編輯原則.md`
