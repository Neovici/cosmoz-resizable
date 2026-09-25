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
	const min =
		direction === 'horizontal'
			? (parsePx(style.minWidth) ?? 0)
			: (parsePx(style.minHeight) ?? 0);
	const max =
		direction === 'horizontal'
			? (parsePx(style.maxWidth) ?? Infinity)
			: (parsePx(style.maxHeight) ?? Infinity);
	return { min, max };
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
): number => {
	const raw = axis(mousePosition, rect, direction);
	// min wins over max, matching CSS flexbox behavior.
	return Math.max(Math.min(raw, bounds.max), bounds.min);
};

export const createFlexResize = (config: ResizeConfig): ResizeHandler => {
	let _snapshot:
		| { rect: DOMRect; bounds: { min: number; max: number } }
		| undefined;

	return (e) => {
		const { phase, mousePosition } = e.detail;

		if (phase === 'start') {
			_snapshot = snapshot(config);
			return;
		}

		if (phase !== 'move' && phase !== 'end') return;
		if (!_snapshot) _snapshot = snapshot(config);

		const px = computePx(
			mousePosition,
			_snapshot.rect,
			config.direction,
			_snapshot.bounds,
		);

		if (phase === 'move') {
			config.onResize?.(px);
		} else {
			config.onResizeEnd?.();
			_snapshot = undefined;
		}
	};
};

export { getMousePosition };
