import {
	MousePosition,
	ResizeConfig,
	ResizeHandler,
	ResizerDirection,
} from './types';

const getMousePosition = (e: MouseEvent | TouchEvent): MousePosition => {
	if (e instanceof MouseEvent) {
		return { x: e.clientX, y: e.clientY };
	}
	if (e.touches && e.touches.length > 0) {
		return { x: e.touches[0].clientX, y: e.touches[0].clientY };
	}
	return { x: 0, y: 0 };
};

const axis = (
	position: MousePosition,
	rect: DOMRect,
	direction: ResizerDirection,
): number =>
	direction === 'horizontal' ? position.x - rect.left : position.y - rect.top;

const parsePx = (value: string): number | undefined => {
	const n = parseFloat(value);
	return Number.isNaN(n) ? undefined : n;
};

const readBounds = (
	el: HTMLElement,
	direction: ResizerDirection,
): { min: number; max: number } => {
	const style = getComputedStyle(el);
	if (direction === 'horizontal') {
		return {
			min: parsePx(style.minWidth) ?? 0,
			max: parsePx(style.maxWidth) ?? Infinity,
		};
	}
	return {
		min: parsePx(style.minHeight) ?? 0,
		max: parsePx(style.maxHeight) ?? Infinity,
	};
};

const snapshot = (config: ResizeConfig) => {
	const rect = config.container.getBoundingClientRect();
	return { rect, bounds: readBounds(config.previous, config.direction) };
};

const computePx = (
	mousePosition: MousePosition,
	rect: DOMRect,
	direction: ResizerDirection,
	bounds: { min: number; max: number },
): number =>
	Math.max(
		bounds.min,
		Math.min(axis(mousePosition, rect, direction), bounds.max),
	);

export const createFlexResize = (config: ResizeConfig): ResizeHandler => {
	let snap: { rect: DOMRect; bounds: { min: number; max: number } } | undefined;

	return (e) => {
		const { phase, mousePosition } = e.detail;

		if (phase === 'start') {
			snap = snapshot(config);
			return;
		}

		if (phase !== 'move' && phase !== 'end') return;
		if (!snap) snap = snapshot(config);

		const px = computePx(
			mousePosition,
			snap.rect,
			config.direction,
			snap.bounds,
		);

		if (phase === 'move') {
			config.onResize?.(px);
		} else {
			config.onResizeEnd?.(px);
			snap = undefined;
		}
	};
};

export { getMousePosition };
