---
'@neovici/cosmoz-resizable': minor
---

Add typed element interfaces and `HTMLElementTagNameMap` augmentation for `cosmoz-resizable-view` and `cosmoz-resize-handle`, so `querySelector('cosmoz-resizable-view')` returns a fully typed element (attribute-reflected props like `direction`, `persist`, `initialSize`, ... readable in JS). New exported types `ResizableViewElement` and `ResizeHandleElement`.
