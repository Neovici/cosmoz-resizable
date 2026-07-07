import { css } from '@pionjs/pion';

export const styles = css`
	:host {
		display: flex;
		position: relative;
		z-index: 1;
		user-select: none;
		touch-action: none;
		background: var(--cz-queue-gutter-bg, transparent);
	}

	:host::before {
		content: '';
		display: block;
		flex: none;
		background: var(--cz-queue-gutter-divider-bg, #bbb);
		pointer-events: none;
	}

	:host::after {
		content: '';
		position: absolute;
		inset: -3px;
	}

	:host([data-direction='horizontal']) {
		flex-direction: column;
		align-items: center;
		min-height: 100%;
		width: var(--cosmoz-resize-handle-size, 2px);
		cursor: col-resize;
	}

	:host([data-direction='horizontal'])::before {
		width: 1px;
		flex: 1;
	}

	:host([data-direction='vertical']) {
		flex-direction: row;
		align-items: center;
		height: var(--cosmoz-resize-handle-size, 2px);
		width: 100%;
		cursor: row-resize;
	}

	:host([data-direction='vertical'])::before {
		height: 1px;
		flex: 1;
	}

	:host(:hover)::before,
	:host([data-dragging])::before {
		background: var(
			--cz-queue-gutter-divider-hover-color,
			var(--cz-accent-color, #007acc)
		);
		box-shadow: 0 0 0 1px
			var(
				--cz-queue-gutter-divider-hover-color,
				var(--cz-accent-color, #007acc)
			);
	}
`;
