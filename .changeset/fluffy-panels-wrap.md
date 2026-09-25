---
'@neovici/cosmoz-resizable': minor
---

Wrap `previous`/`next` slots in shadow-DOM panel `<div>`s so the component owns panel layout, instead of styling slotted elements directly.

- Slotted content is forced to fill its panel (`flex: 1 1 100% !important`, `min-width/height: 0 !important`) — outside flex/min/max styles on user elements no longer affect panel layout, and the component no longer writes inline `flex-basis` to user elements.
- Panels apply `contain: layout style`, isolating layout/style invalidation inside each panel.
- `initial-size` / `min-size` and persisted sizes now style the panel wrappers; new `panel-previous` / `panel-next` `part` attributes expose them for external styling.
- Hidden-panel behavior: a slotted panel hidden via `display: none` collapses its wrapper to zero size (`data-hidden`) instead of removing it, and `data-single-panel` is still set.
