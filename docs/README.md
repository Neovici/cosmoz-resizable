# cosmoz-resizable

A lightweight web component for resizable split layouts — drag a divider between two panels to resize them.

Part of the [Neovici](https://neovici.se) design system.

## Installation

```bash
npm install @neovici/cosmoz-resizable
```

## Usage

```javascript
import '@neovici/cosmoz-resizable';
```

```html
<cosmoz-resizable-view style="width: 100%; height: 400px;">
	<div>Left panel (default: redirected to previous)</div>
	<div slot="next">Right panel</div>
</cosmoz-resizable-view>

<!-- Explicit panels, initial size and bounds -->
<cosmoz-resizable-view
	initial-size="300px"
	min-size="200"
	max-size="60%"
	persist="my-split"
>
	<div slot="previous">List</div>
	<div slot="next">Details</div>
</cosmoz-resizable-view>

<!-- Vertical split -->
<cosmoz-resizable-view direction="vertical" initial-size="50%">
	<div slot="previous">Top panel</div>
	<div slot="next">Bottom panel</div>
</cosmoz-resizable-view>
```

The host must have a definite width and height (e.g. `width: 100%; height: 400px;` or a flex parent that sizes it).

## Components

### `<cosmoz-resizable-view>`

A slot-based split view that inserts a `<cosmoz-resize-handle>` between two panels. Each named slot is wrapped in a shadow-DOM panel `<div>` that the component sizes; slotted content is forced to fill its panel. Supports persistence and drag clamping.

### `<cosmoz-resize-handle>`

A standalone pointer-event courier between two flex items. On drag it dispatches a bubbling `resize-handle` event with `{ phase: 'start' | 'move' | 'end', mousePosition: { x, y } }` (mouse and touch). Wire it to `createFlexResize` yourself when you don't want the full view:

```javascript
import { createFlexResize } from '@neovici/cosmoz-resizable';

handle.addEventListener(
	'resize-handle',
	createFlexResize({
		container: host,
		previous: prevEl,
		direction: 'horizontal',
		onResize: (px) => {
			prevEl.style.flexBasis = `${px}px`;
		},
	}),
);
```

## Attributes

| Attribute                 | Type   | Default      | Description                                                     |
| ------------------------- | ------ | ------------ | --------------------------------------------------------------- |
| `direction`               | string | `horizontal` | Split direction: `horizontal` (col-resize) or `vertical`        |
| `persist`                 | string | —            | Persistence key; stores the previous panel size in localStorage |
| `initial-size`            | string | —            | Initial panel sizes (see Size values)                           |
| `initial-size-horizontal` | string | —            | Override for `direction="horizontal"`                           |
| `initial-size-vertical`   | string | —            | Override for `direction="vertical"`                             |
| `min-size`                | string | —            | Minimum panel sizes; drag and layout respect it                 |
| `min-size-horizontal`     | string | —            | Override for `direction="horizontal"`                           |
| `min-size-vertical`       | string | —            | Override for `direction="vertical"`                             |
| `max-size`                | string | —            | Maximum panel sizes; drag and layout respect it                 |
| `max-size-horizontal`     | string | —            | Override for `direction="horizontal"`                           |
| `max-size-vertical`       | string | —            | Override for `direction="vertical"`                             |

Direction-specific variants take precedence over the base attribute when the active direction matches.

## Size values

`initial-size`, `min-size` and `max-size` accept one or two values separated by whitespace or a comma: the first applies to the **previous** panel, the second to the **next** panel.

```html
<!-- Previous: 300px, Next: unbounded -->
<cosmoz-resizable-view initial-size="300px"></cosmoz-resizable-view>

<!-- Previous: 25%, Next: 200px -->
<cosmoz-resizable-view initial-size="25%, 200px"></cosmoz-resizable-view>

<!-- Any CSS size works, incl. calc() and var() -->
<cosmoz-resizable-view max-size="calc(100% - 240px)"></cosmoz-resizable-view>
```

| Value       | Meaning                            |
| ----------- | ---------------------------------- |
| `300`       | Unitless numbers get `px` appended |
| `300px`     | Absolute pixels                    |
| `25%`       | Percentage of the container        |
| `calc(...)` | Any CSS size expression            |
| `var(--x)`  | Any CSS custom property            |

Defaults: the previous panel starts at `auto` (content size), the next fills the remaining space. `min-size` defaults to `0`, `max-size` defaults to unbounded.

## Slots

| Slot       | Description                                              |
| ---------- | -------------------------------------------------------- |
| default    | Unslotted children are redirected to the `previous` slot |
| `previous` | First panel (sized by the handle)                        |
| `next`     | Second panel (fills the remaining space)                 |

```html
<cosmoz-resizable-view>
	<div>List</div>
	<!-- no slot needed -->
	<div slot="next">Details</div>
</cosmoz-resizable-view>
```

## Panel behavior

- Slotted content is **forced to fill its panel** (`flex: 1 1 100% !important`, `min-width/height: 0 !important`), so outside styles on your elements cannot break the split layout. Multiple children in one slot share the panel space.
- The component writes `flex-basis` on its own panel wrappers, never on your elements.
- Panels use `contain: layout style` for render isolation. Note this makes each panel the containing block for `position: fixed` descendants; overlays should use the Popover API (`popover` attribute), which escapes containment via the top layer.
- A panel hidden with `display: none` collapses its wrapper and hides the handle (`data-single-panel` is set on the host). Showing it again restores the split.
- While dragging, the handle sets `data-dragging` on itself.

## CSS Parts

| Part             | Description                |
| ---------------- | -------------------------- |
| `panel-previous` | The previous panel wrapper |
| `panel-next`     | The next panel wrapper     |

## Styling

The panels are styled by the component, but can be adjusted externally via parts:

```css
cosmoz-resizable-view::part(panel-previous) {
	background: var(--cz-header-bg-color);
}
```

### CSS custom properties

| Property                                     | Default | Description                      |
| -------------------------------------------- | ------- | -------------------------------- |
| `--cosmoz-resize-handle-size`                | `2px`   | Width/height of the drag handle  |
| `--resizable-previous-basis`                 | `auto`  | Flex-basis of the previous panel |
| `--resizable-next-basis`                     | `0`     | Flex-basis of the next panel     |
| `--resizable-{previous,next}-min`            | `0`     | Panel minimum size (active axis) |
| `--resizable-{previous,next}-min-horizontal` |         | Horizontal-direction override    |
| `--resizable-{previous,next}-min-vertical`   |         | Vertical-direction override      |
| `--resizable-{previous,next}-max`            | `none`  | Panel maximum size (active axis) |
| `--resizable-{previous,next}-max-horizontal` |         | Horizontal-direction override    |
| `--resizable-{previous,next}-max-vertical`   |         | Vertical-direction override      |

The attributes above set these custom properties on the host; you can also set them directly for CSS-only integrations.

## Persistence

Set `persist` to remember the previous panel size (in pixels) per direction across sessions and synchronize between open tabs. The value is stored in `localStorage` under `cosmoz-resizable-view:<persist>:<direction>`.

```html
<cosmoz-resizable-view persist="mail-split">...</cosmoz-resizable-view>
```

## Primitives

Exported for advanced use:

- `createFlexResize(config)` — factory returning a `ResizeHandler` for flex-basis sizing with min/max clamping
- `parseSizeAttr(raw)` — parses size attribute strings into `{ previous, next }` values
- `usePersist(adapter, key, onRestore)` / `localStorageAdapter()` — pluggable persistence hook and adapter
- `ResizableView`, `ResizeHandle` — component definitions

## Events

| Event           | Detail                                                 | Target                 |
| --------------- | ------------------------------------------------------ | ---------------------- |
| `resize-handle` | `{ phase: 'start' \| 'move' \| 'end', mousePosition }` | `cosmoz-resize-handle` |

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook:start

# Run tests
npm run test

# Build
npm run build
```

## License

Apache-2.0
