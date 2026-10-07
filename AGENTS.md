# AGENTS.md

## What this is
A RTL (Persian) Tailwind CSS template recreating the homepage of the Fanamoozan
vocational-training academy site. Pure front-end: Vite + React 18 + Tailwind CSS v4.
There is no backend, no database and no external credentials.

## Run it
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
The dev server listens on host port 3000 (the preview entry point).

## Non-obvious setup notes
- `node_modules` is a **named Docker volume** (`web_node_modules`), not the bind-mounted
  repo directory. `npm install` runs on container start from the lockfile-free
  `package.json`. If dependencies change, run
  `docker compose -f docker-compose.base44.yml up -d --force-recreate web`
  or `docker compose ... exec web npm install <pkg>` — do NOT delete the volume's
  parent data and never `rm -rf node_modules` on the host (it is not the source of truth).
- Tailwind v4: there is **no `tailwind.config.js`**. Theme tokens live in `src/index.css`
  under `@theme` (colors `gold-*`, `mint-*`, `navy-*`, `cream`, `ink`, `muted`; font
  `--font-sans` = Vazirmatn). Add new design tokens there.
- The layout is RTL — `dir="rtl"` is set on `<html>` in `index.html`. Persian digits are
  produced by `toFa()` in `src/data/site.js`.
- Department icons and course thumbnails are **hotlinked** from `fanamoozan.com`
  (see `src/data/site.js`). They need outbound network in the browser; the layout still
  holds without them.
- `vite.config.js` extends the dev-server host allowlist with
  `.<BASE44_SANDBOX_HOST_DOMAIN>` **only when `BASE44_PREVIEW_MODE` is exactly `"1"`**.
  With the flag unset/other, Vite keeps its default localhost-only allowlist. Do not
  hardcode any `BASE44_*` value.

## Verify
- `curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/` → `200`
- The served page is dev-server source (unhashed modules), so source edits hot-reload.
