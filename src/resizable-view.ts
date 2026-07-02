import { component, useEffect, useHost, useMemo, useRef } from '@pionjs/pion';
import { html } from 'lit-html';
import './cosmoz-resize-handle';
import { localStorageAdapter, usePersist } from './hooks/use-persist';
import { styles } from './resizable-view.css';
import { createFlexResize } from './resizers';
import {
	PersistAdapter,
	ResizeHandler,
	ResizerDirection,
	SizeSpec,
} from './types';
import {
	applySizes,
	clampSplitPx,
	computeInitial,
	resolveBounds,
} from './utils';

interface ResizableViewProps {
	direction?: ResizerDirection;
	initialSizes?: [SizeSpec, SizeSpec];
	minSize?: SizeSpec | [SizeSpec, SizeSpec];
	maxSize?: SizeSpec | [SizeSpec, SizeSpec];
	persist?: string | PersistAdapter;
}

const dispatchSplitResize = (host: HTMLElement, ratios: [number, number]) =>
	host.dispatchEvent(
		new CustomEvent('split-resize', { detail: { ratios }, bubbles: true }),
	);

const containerSizeOf = (host: HTMLElement, direction: ResizerDirection) => {
	const rect = host.getBoundingClientRect();
	return direction === 'horizontal' ? rect.width : rect.height;
};

const ResizableView = ({
	direction = 'horizontal',
	initialSizes = [0.5, 0.5],
	minSize,
	maxSize,
	persist,
}: ResizableViewProps) => {
	const host = useHost();
	const panelsRef = useRef<
		| {
				previous: HTMLElement;
				next: HTMLElement;
				handle: HTMLElement;
		  }
		| undefined
	>(undefined);
	const ratioRef = useRef<number>(0.5);
	const handlerRef = useRef<ResizeHandler | undefined>(undefined);

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
		const panels = panelsRef.current;
		if (!panels) return;
		const containerSize = containerSizeOf(host, direction);
		const { ratios } = applySizes(
			panels.previous,
			panels.next,
			value * containerSize,
			containerSize,
		);
		dispatchSplitResize(host, ratios);
	});

	const applyInitial = (
		previous: HTMLElement,
		next: HTMLElement,
		container: HTMLElement,
	) => {
		const containerSize = containerSizeOf(container, direction);
		const bounds = resolveBounds(minSize, maxSize, containerSize);
		const restored = adapter?.get?.(persistKey ?? '');
		const splitPx =
			restored !== undefined
				? clampSplitPx(restored * containerSize, bounds)
				: computeInitial(initialSizes, bounds, containerSize);
		const { ratios } = applySizes(previous, next, splitPx, containerSize);
		ratioRef.current = ratios[0];
		dispatchSplitResize(host, ratios);
	};

	const wireHandler = () => {
		const panels = panelsRef.current;
		if (!panels) return;
		const containerSize = containerSizeOf(host, direction);
		const bounds = resolveBounds(minSize, maxSize, containerSize);
		const handler = createFlexResize({
			elements: {
				previous: panels.previous,
				next: panels.next,
				container: host,
			},
			direction,
			minSize: bounds.prevMin,
			maxSize: bounds.prevMax,
			onResize: ({ ratios, px }) => {
				applySizes(panels.previous, panels.next, px, containerSize);
				ratioRef.current = ratios[0];
				dispatchSplitResize(host, ratios);
			},
			onResizeEnd: ({ ratios }) => {
				persistRatio?.(ratios[0]);
			},
		});
		handlerRef.current = handler;
		panels.handle.addEventListener('resize', handler as EventListener);
	};

	const unwireHandler = () => {
		const panels = panelsRef.current;
		const handler = handlerRef.current;
		if (panels && handler) {
			panels.handle.removeEventListener('resize', handler as EventListener);
		}
		handlerRef.current = undefined;
	};

	const setupPanels = () => {
		const children = (Array.from(host.children) as HTMLElement[]).filter(
			(el) => el.tagName.toLowerCase() !== 'cosmoz-resize-handle',
		);
		if (children.length < 2) return;

		const [previous, next] = children;
		let handle = host.querySelector(
			'cosmoz-resize-handle',
		) as HTMLElement | null;
		if (!handle) {
			handle = document.createElement('cosmoz-resize-handle') as HTMLElement;
			host.insertBefore(handle, next);
		} else if (handle !== previous.nextElementSibling) {
			host.insertBefore(handle, next);
		}
		handle.setAttribute('data-direction', direction);
		panelsRef.current = { previous, next, handle };
		applyInitial(previous, next, host);
		unwireHandler();
		wireHandler();
	};

	useEffect(() => {
		host.setAttribute('data-direction', direction);
		const panels = panelsRef.current;
		if (panels) {
			panels.handle.setAttribute('data-direction', direction);
		}
	}, [direction]);

	useEffect(() => {
		const panels = panelsRef.current;
		if (!panels) return;
		unwireHandler();
		wireHandler();
		return unwireHandler;
	}, [minSize, maxSize, persistRatio, direction]);

	return html`<slot @slotchange=${() => setupPanels()}></slot>`;
};

customElements.define(
	'cosmoz-resizable-view',
	component(ResizableView, {
		styleSheets: [styles],
		observedAttributes: ['direction'],
	}),
);

export { ResizableView };
