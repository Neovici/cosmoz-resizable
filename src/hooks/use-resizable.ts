import { useEffect, useHost, useMemo, useRef } from '@pionjs/pion';
import { createFlexResize } from '../resizers';
import { PersistAdapter, ResizerDirection, SizeSpec } from '../types';
import {
	applySizes,
	clampSplitPx,
	computeInitial,
	resolveBounds,
} from '../utils';
import { localStorageAdapter, usePersist } from './use-persist';

interface UseResizableOpts {
	direction?: ResizerDirection;
	initialSizes?: [SizeSpec, SizeSpec];
	minSize?: SizeSpec | [SizeSpec, SizeSpec];
	maxSize?: SizeSpec | [SizeSpec, SizeSpec];
	persist?: string | PersistAdapter;
	activeTab?: string;
	previousSelector?: string;
	nextSelector?: string;
}

const containerSizeOf = (
	el: HTMLElement,
	direction: ResizerDirection,
): number => {
	const rect = el.getBoundingClientRect();
	return direction === 'horizontal' ? rect.width : rect.height;
};

const resolvePanels = (
	root: ShadowRoot,
	prevSel: string,
	nextSel: string,
): { previous: HTMLElement; next: HTMLElement } | undefined => {
	const previous = root.querySelector(prevSel) as HTMLElement | null;
	const next = root.querySelector(nextSel) as HTMLElement | null;
	if (!previous || !next) return undefined;
	return { previous, next };
};

interface HandlerOpts {
	previous: HTMLElement;
	next: HTMLElement;
	container: HTMLElement;
	direction: ResizerDirection;
	bounds: ReturnType<typeof resolveBounds>;
	containerSize: number;
	ratioRef: { current: number | undefined };
	persistRatio: ((v: number) => void) | undefined;
}

const buildHandler = ({
	previous,
	next,
	container,
	direction,
	bounds,
	containerSize,
	ratioRef,
	persistRatio,
}: HandlerOpts) =>
	createFlexResize({
		elements: { previous, next, container },
		direction,
		minSize: bounds.prevMin,
		maxSize: bounds.prevMax,
		onResize: ({ ratios: r, px }) => {
			applySizes(previous, next, px, containerSize);
			ratioRef.current = r[0];
		},
		onResizeEnd: ({ ratios: r }) => {
			persistRatio?.(r[0]);
		},
	});

const initialSplitPx = (
	initialSizes: [SizeSpec, SizeSpec],
	adapter: PersistAdapter | undefined,
	persistKey: string | undefined,
	bounds: ReturnType<typeof resolveBounds>,
	containerSize: number,
): number => {
	const restored = adapter?.get?.(persistKey ?? '');
	if (restored !== undefined) {
		return clampSplitPx(restored * containerSize, bounds);
	}
	return computeInitial(initialSizes, bounds, containerSize);
};

const attachHandle = (
	container: HTMLElement,
	next: HTMLElement,
	direction: ResizerDirection,
	handler: EventListener,
): HTMLElement => {
	const handle = document.createElement('cosmoz-resize-handle') as HTMLElement;
	handle.setAttribute('data-direction', direction);
	container.insertBefore(handle, next);
	handle.addEventListener('resize-handle', handler);
	return handle;
};

const useResizable = ({
	direction = 'horizontal',
	initialSizes = [0.5, 0.5],
	minSize,
	maxSize,
	persist,
	activeTab,
	previousSelector = '#list',
	nextSelector = '#queue',
}: UseResizableOpts) => {
	const host = useHost();
	const ratioRef = useRef<number>(0.5);

	const adapter = useMemo<PersistAdapter | undefined>(() => {
		if (typeof persist === 'string') return localStorageAdapter();
		if (persist && typeof persist === 'object') return persist;
		return undefined;
	}, [persist]);

	const persistKey = useMemo<string | undefined>(() => {
		if (typeof persist === 'string') return persist;
		if (persist && typeof persist === 'object') return 'default';
		return undefined;
	}, [persist]);

	const persistRatio = usePersist(adapter, persistKey, (value) => {
		ratioRef.current = value;
	});

	useEffect(() => {
		if (activeTab !== undefined && activeTab !== 'split') return;

		const root = host.shadowRoot;
		if (!root) return;
		const panels = resolvePanels(root, previousSelector, nextSelector);
		if (!panels) return;

		const { previous, next } = panels;
		const container = previous.parentElement!;

		const containerSize = containerSizeOf(container, direction);
		const bounds = resolveBounds(minSize, maxSize, containerSize);
		const splitPx = initialSplitPx(
			initialSizes,
			adapter,
			persistKey,
			bounds,
			containerSize,
		);
		const { ratios } = applySizes(previous, next, splitPx, containerSize);
		ratioRef.current = ratios[0];

		const handler = buildHandler({
			previous,
			next,
			container,
			direction,
			bounds,
			containerSize,
			ratioRef,
			persistRatio,
		});
		const handle = attachHandle(
			container,
			next,
			direction,
			handler as EventListener,
		);

		return () => {
			handle.removeEventListener('resize-handle', handler as EventListener);
			container.removeChild(handle);
			previous.style.flexBasis = '';
			next.style.flexBasis = '';
		};
	}, [
		activeTab,
		direction,
		previousSelector,
		nextSelector,
		adapter,
		persistKey,
		persistRatio,
		minSize,
		maxSize,
	]);
};

export { useResizable };
