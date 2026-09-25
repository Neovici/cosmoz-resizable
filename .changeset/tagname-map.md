---
'@neovici/cosmoz-resizable': minor
---

Add typed element interfaces and `HTMLElementTagNameMap` augmentation for `cosmoz-resizable-view` and `cosmoz-resize-handle`, so `querySelector('cosmoz-resizable-view')` returns a fully typed element (props like `direction`, `persist`, `initialSize`, ... readable in JS). New exported types `ResizableViewProps` and `ResizeHandleElement`.
