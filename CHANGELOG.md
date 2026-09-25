# @neovici/cosmoz-resizable

## 2.3.0

### Minor Changes

- 3b5470e: Wrap `previous`/`next` slots in shadow-DOM panel `<div>`s so the component owns panel layout, instead of styling slotted elements directly.
  - Slotted content is forced to fill its panel (`flex: 1 1 100% !important`, `min-width/height: 0 !important`) — outside flex/min/max styles on user elements no longer affect panel layout, and the component no longer writes inline `flex-basis` to user elements.
  - Panels apply `contain: layout style`, isolating layout/style invalidation inside each panel.
  - `initial-size` / `min-size` and persisted sizes now style the panel wrappers; new `panel-previous` / `panel-next` `part` attributes expose them for external styling.
  - Hidden-panel behavior: a slotted panel hidden via `display: none` collapses its wrapper to zero size (`data-hidden`) instead of removing it, and `data-single-panel` is still set.
  - New `max-size` attribute (+ `-horizontal` / `-vertical` variants), symmetric with `min-size`: caps the previous/next panel during drag and in layout, replacing the old pattern of capping via CSS `max-width`/`max-height` on slotted children.

- 6fd8a1c: Add a `reversed` attribute to `cosmoz-resizable-view` that flips the visual order of the panels using `row-reverse` / `column-reverse` flex directions: the previous panel renders on the right (horizontal) or bottom (vertical), and the resize handle drags from that end edge accordingly.
  - The `cosmoz-resize-handle` inside the view receives `data-reversed` to mirror its enlarged hit area and hover highlight to the correct side.
  - Works with `initial-size`, `min-size`, `max-size` and `persist` unchanged — sizes stay relative to the previous panel.

- b33d99a: Add typed element interfaces and `HTMLElementTagNameMap` augmentation for `cosmoz-resizable-view` and `cosmoz-resize-handle`, so `querySelector('cosmoz-resizable-view')` returns a fully typed element (props like `direction`, `persist`, `initialSize`, ... readable in JS). New exported types `ResizableViewProps` and `ResizeHandleProps`.

## 2.2.1

### Patch Changes

- ab7c74f: Fix parseSizeAttr to preserve `calc()` and `var()` values containing spaces when splitting on whitespace. Previously `initial-size="calc(100% - 240px)"` would be mangled into separate tokens.

## 2.2.0

### Minor Changes

- 0752d58: Add default (unnamed) slot that redirects unslotted children to `previous` slot — safety net for callers that forget `slot="previous"`.

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
