import {
	MousePosition,
	ResizeConfig,
	ResizeHandler,
	ResizerDirection,
} from './types';

const axis = (
	position: MousePosition,
	rect: DOMRect,
	direction: ResizerDirection,
): number =>
	direction === 'horizontal' ? position.x - rect.left : position.y - rect.top;

const size = (rect: DOMRect, direction: ResizerDirection): number =>
	direction === 'horizontal' ? rect.width : rect.height;

const clamp = (value: number, min?: number, max?: number): number => {
	let v = value;
	if (min !== undefined) v = Math.max(v, min);
	if (max !== undefined) v = Math.min(v, max);
	return Math.max(0, v);
};

const ratios = (clamped: number, containerSize: number): [number, number] => {
	const safe = containerSize > 0 ? containerSize : 1;
	const prev = clamped / safe;
	return [prev, 1 - prev];
};

const ensureRect = (
	state: { rect: DOMRect | undefined; size: number },
	elements: ResizeConfig['elements'],
	direction: ResizerDirection,
): DOMRect => {
	if (!state.rect) {
		state.rect = elements.container.getBoundingClientRect();
		state.size = size(state.rect, direction);
	}
	return state.rect;
};

export const createFlexResize = (config: ResizeConfig): ResizeHandler => {
	const state = { rect: undefined as DOMRect | undefined, size: 0 };

	const onPhase = (
		phase: 'move' | 'end',
		mousePosition: MousePosition,
		c: ResizeConfig,
	) => {
		const rect = ensureRect(state, c.elements, c.direction);
		const clamped = clamp(
			axis(mousePosition, rect, c.direction),
			c.minSize,
			c.maxSize,
		);
		const r = ratios(clamped, state.size);
		if (phase === 'move') {
			c.onResize?.({ ratios: r, px: clamped });
		} else {
			c.onResizeEnd?.({ ratios: r });
			state.rect = undefined;
		}
	};

	return (e) => {
		const { phase, mousePosition } = e.detail;
		if (phase === 'start') {
			state.rect = config.elements.container.getBoundingClientRect();
			state.size = size(state.rect, config.direction);
			config.onResizeStart?.();
			return;
		}
		if (phase === 'move' || phase === 'end') {
			onPhase(phase, mousePosition, config);
		}
	};
};
