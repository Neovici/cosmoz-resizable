import { css } from '@pionjs/pion';

export const styles = css`
	:host {
		display: flex;
		position: relative;
		z-index: 1;
		user-select: none;
		touch-action: none;
		background: var(--cz-queue-gutter-bg, var(--cz-header-bg-color, #fff));
	}

	:host::before {
		content: '';
		display: block;
		flex: none;
		background: var(--cz-queue-gutter-bg, var(--cz-header-bg-color, #bbb));
		pointer-events: none;
		transition: background 150ms ease;
	}

	:host::after {
		content: '';
		position: absolute;
		inset: 0;
	}

	:host([data-direction='horizontal']) {
		flex-direction: column;
		align-items: center;
		min-height: 100%;
		width: var(--cosmoz-resize-handle-size, 1px);
		cursor: col-resize;
	}

	:host([data-direction='horizontal'])::before {
		width: 1px;
		flex: 1;
	}

	:host([data-direction='horizontal'])::after {
		inset-inline: calc(var(--cosmoz-resize-handle-hit-area, 4px) * -1);
	}

	:host([data-direction='vertical']) {
		flex-direction: row;
		align-items: center;
		height: var(--cosmoz-resize-handle-size, 1px);
		width: 100%;
		cursor: row-resize;
	}

	:host([data-direction='vertical'])::before {
		height: 1px;
		flex: 1;
	}

	:host([data-direction='vertical'])::after {
		inset-block: calc(var(--cosmoz-resize-handle-hit-area, 4px) * -1);
	}

	:host(:hover)::before {
		background: var(
			--cosmoz-resize-handle-hover-color,
			var(--cz-color-border-primary, var(--cz-accent-color))
		);
		transition-delay: 150ms;
	}

	:host([data-dragging])::before {
		background: var(
			--cosmoz-resize-handle-active-color,
			var(--cz-color-border-brand, var(--cz-accent-color))
		);
		transition-delay: 0s;
	}
`;
