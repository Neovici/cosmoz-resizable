import { css } from '@pionjs/pion'

export const styles = css` <style>
	:host {
		display: block;
		background: var(--cosmoz-resize-handle-background, #e0e0e0);
		user-select: none;
		position: relative;
		z-index: 1;
		touch-action: none;
	}

	:host([data-direction='horizontal']) {
		min-height: 100%;
		width: var(--cosmoz-resize-handle-size, 4px);
		cursor: col-resize;
	}

	:host([data-direction='vertical']) {
		height: var(--cosmoz-resize-handle-size, 4px);
		width: 100%;
		cursor: row-resize;
	}

	:host(:hover) {
		background: var(--cosmoz-resize-handle-hover-background, #ccc);
	}

	:host([data-dragging]) {
		background: var(--cosmoz-resize-handle-dragging-background, #007acc);
		cursor: grabbing;
	}
</style>`