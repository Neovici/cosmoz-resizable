# @neovici/resizable

A pionjs web component package for resizable split layouts.

## Components

### `<cosmoz-resize-handle>`

A pure pointer-event courier. Fires a single `resize` event with `{ phase: 'start' | 'move' | 'end', mousePosition: { x, y } }`. Supports mouse and touch.

### `<cosmoz-resizable-view>`

A slot-based preset that auto-inserts a `<cosmoz-resize-handle>` between 2 slotted children. Manages flex-basis sizing, fires `split-resize` events, and supports persistence.

```html
<cosmoz-resizable-view
	direction="horizontal"
	.initialSizes=${[[0.3, '300px'], 0.7]}
	.minSize=${200}
	.maxSize=${[undefined, 700]}
	persist="my-split"
>
	<div>Left panel</div>
	<div>Right panel</div>
</cosmoz-resizable-view>
```

### `useResizable` hook

Imperative preset replacing `useSplit` from cosmoz-queue. Wires a split between `#list` and `#queue` in the host's shadow DOM when `activeTab === 'split'`. Override selectors with `previousSelector` / `nextSelector`. Supports `direction`, `persist`, `minSize`, `maxSize`, `initialSizes`.

```js
useResizable({
	activeTab,
	direction: 'horizontal',
	initialSizes: [0.3, 0.7],
	minSize: 200,
	persist: 'my-split',
});
```

## Primitives

- `createFlexResize(config)` — factory returning a `ResizeHandler` for flex-basis sizing
- `parseSize` / `resolveSize` / `toRatio` / `toPixel` / `applySizes` — unit math utilities
- `usePersist` / `localStorageAdapter` — pluggable persistence adapters

## SizeSpec format

```ts
type SizeSpec =
	| number // bare: ratio in initialSizes, px in minSize/maxSize
	| `${number}%` // ratio of container
	| `${number}px` // absolute pixels
	| `${number}vw` // viewport width
	| `${number}vh` // viewport height
	| [Ratio, AbsoluteSize]; // tuple: min(ratio·C, abs) for caps, max for floors
```
