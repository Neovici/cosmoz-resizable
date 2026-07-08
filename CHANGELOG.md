# @neovici/cosmoz-resizable

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
