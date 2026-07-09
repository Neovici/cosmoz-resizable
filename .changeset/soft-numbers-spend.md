---
'@neovici/cosmoz-resizable': patch
---

Fix parseSizeAttr to preserve `calc()` and `var()` values containing spaces when splitting on whitespace. Previously `initial-size="calc(100% - 240px)"` would be mangled into separate tokens.
