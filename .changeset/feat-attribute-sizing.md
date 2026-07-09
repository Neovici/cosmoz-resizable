---
'@neovici/cosmoz-resizable': minor
---

feat: attribute-driven sizing API with direction-aware persistence

- `initial-size` / `min-size` attributes (+ `-horizontal` / `-vertical` variants) replace CSS var plumbing
- Unitless values auto-appended with `px` (e.g. `min-size="200"` → `200px`); values with units or CSS functions pass through unchanged
- Direction-prefixed persist key: `${persist}:${direction}` — separate stored size per direction
- Persist stores actual rendered size via rAF + getBoundingClientRect instead of mouse position
- Stale inline `flexBasis` cleared on direction change when no stored value for the new direction
- `isVisible` checks `display` instead of bounding rect — prevents `data-single-panel` oscillation
- `readBounds` simplified to min-only (flexbox enforces effective max via other panel's min)
- `onResizeEnd` no longer receives `px` param
- CSS custom properties (`--resizable-previous-*`, `--resizable-next-*`) are internal implementation detail
