---
'@neovici/cosmoz-resizable': minor
---

Add a `reversed` attribute to `cosmoz-resizable-view` that flips the visual order of the panels using `row-reverse` / `column-reverse` flex directions: the previous panel renders on the right (horizontal) or bottom (vertical), and the resize handle drags from that end edge accordingly.

- The `cosmoz-resize-handle` inside the view receives `data-reversed` to mirror its enlarged hit area and hover highlight to the correct side.
- Works with `initial-size`, `min-size`, `max-size` and `persist` unchanged — sizes stay relative to the previous panel.
