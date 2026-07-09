# @neovici/cosmoz-resizable

## 2.1.0

### Minor Changes

- ae6b960: feat: attribute-driven sizing API with direction-aware persistence
  - `initial-size` / `min-size` attributes (+ `-horizontal` / `-vertical` variants) replace CSS var plumbing
  - Unitless values auto-appended with `px` (e.g. `min-size="200"` → `200px`); values with units or CSS functions pass through unchanged
  - Direction-prefixed persist key: `${persist}:${direction}` — separate stored size per direction
  - Persist stores actual rendered size via rAF + getBoundingClientRect instead of mouse position
  - Stale inline `flexBasis` cleared on direction change when no stored value for the new direction
  - `isVisible` checks `display` instead of bounding rect — prevents `data-single-panel` oscillation
  - `readBounds` simplified to min-only (flexbox enforces effective max via other panel's min)
  - `onResizeEnd` no longer receives `px` param
  - CSS custom properties (`--resizable-previous-*`, `--resizable-next-*`) are internal implementation detail

## 2.0.0

### Major Changes

- 1d807d8: Rewrite to CSS-driven flex model with rAF-batched drag.

  **Breaking:** Explicit `slot="previous"` and `slot="next"` required on slotted elements. Removed `initialSizes`, `minSize`, `useResizable`, `SizeSpec`, ratio support, `PersistAdapter` object form on `persist` prop.

## 1.1.1

### Patch Changes

- 8176a7b: Fix `homepage` URL in `package.json` — was pointing to non-existent `Neovici/resizable`, now correctly `Neovici/cosmoz-resizable`.

## 1.1.0

### Minor Changes

- e172f39: Enhance cosmoz-resizable with touch support, constraints, `<cosmoz-resizable-view>` preset, pluggable persistence, `useResizable` hook. Element renamed `<cosmoz-resizable>` → `<cosmoz-resize-handle>`, `useImperativeApi`/`expandTo` removed, `@neovici/cosmoz-utils` dependency dropped.
