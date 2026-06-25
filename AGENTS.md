# World Cup 2026 Live Viewer

## Stack
- HTML + CSS (variables, grid, flex) + Vanilla JS
- API: `https://worldcup26.ir` (endpoints: `/get/teams`, `/get/games`, `/get/groups`, `/get/stadiums`)
- Build: esbuild (`npm run build`)
- Hosting: GitHub Pages (`matiascoronadool-tech/world-cup-2026`)

## Project Structure
```
fifa-worldcup-2026/
├── src/app.js          # Source JS (edit here)
├── dist/app.js         # Built output (minified)
├── index.html          # Main page (renamed from layout.html)
├── style.css           # All styles
├── AGENTS.md           # This file — persistent context
├── package.json        # Build scripts
└── .opencode/          # opencode config (instructions, agents)
```

## Build & Deploy
```bash
npm run build                     # Build JS to dist/app.js
git add -A && git commit -m "msg" && git push   # Deploy to GitHub Pages
```
GitHub Pages auto-deploys from `master` branch. URL: `https://matiascoronadool-tech.github.io/world-cup-2026/`

## Design
- Theme: **Osaka Jade** (Omarchy). Dark green-black bg (`#111c18`), pale green-yellow text (`#C1C497`), jade accent (`#509475`).
- Layout: sidebar (220px) + content grid. Header with language toggle (top-right: EN/ES).
- All colors defined as CSS variables in `:root`.

## Features Implemented
- **3 tabs**: Played Today (by group), Coming Matches (by date, closest first), Past Played (nested date>group accordion)
- **Timezones**: API returns ET (America/New_York, EDT +4h). Converted to user local via `Intl.DateTimeFormat`.
- **Ticker**: ~103 World Cup facts, shuffled on load, rotates every 10.5s with 600ms fade.
- **i18n**: EN/ES toggle (top-right header). Full translations including ~120 country names, UI strings, months/days, stage labels, and all facts.
- **Accordions**: Click-to-toggle, first opens by default. Past tab has nested date → group accordion.
- **Language persistence**: Stored in `localStorage` under `wc26-lang`.

## Key Technical Details
- `parseDateET()`: parses `"MM/dd/yyyy HH:mm"` as ET by adding 4h to UTC.
- `teamName()`: translates country names when `currentLang === 'es'` using `TEAM_NAMES_ES` map.
- `renderMatches()`: accepts a `groupBy` function reference. Date sorting uses `groupBy === groupByDate` (reference check, not name — avoids esbuild mangling).
- `cachedData`: stores fetched API data; `renderAll()` re-renders everything on language switch.
- `window.loadData = loadData`: exposed globally for retry button onclick.

## Known Issues
- `Cross-Origin-Resource-Policy: same-origin` on API may restrict some cross-origin usage.
- `file://` protocol blocks fetch. Must serve via HTTP (`npx serve .`).

## Things to Not Change
- The color scheme is tied to the user's Omarchy theme (Osaka Jade). Keep colors consistent.
- The reference comparison `groupBy === groupByDate` must stay (not `.name`), or esbuild will break the sort.
- `dist/` is committed to GitHub for Pages. Always rebuild before push.
