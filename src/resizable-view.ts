import {
	component,
	useCallback,
	useEffect,
	useHost,
	useMemo,
	useRef,
	useState,
} from '@pionjs/pion';
import { html } from 'lit-html';
import { ref } from 'lit-html/directives/ref.js';
import { localStorageAdapter, usePersist } from './hooks/use-persist';
import { styles } from './resizable-view.css';
import './resize-handle';
import { createFlexResize } from './resizers';
import { PersistAdapter, ResizerDirection, SizeSpec } from './types';
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
	const ratioRef = useRef<number>(0.5);
	const handleRef = useRef<HTMLElement>();
	const prevSlotRef = useRef<HTMLSlotElement>();
	const nextSlotRef = useRef<HTMLSlotElement>();
	const [panelsReady, setPanelsReady] = useState(false);

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
		const previous = prevSlotRef.current?.assignedElements()[0] as
			| HTMLElement
			| undefined;
		const next = nextSlotRef.current?.assignedElements()[0] as
			| HTMLElement
			| undefined;
		if (!previous || !next) return;
		const containerSize = containerSizeOf(host, direction);
		const { ratios } = applySizes(
			previous,
			next,
			value * containerSize,
			containerSize,
		);
		dispatchSplitResize(host, ratios);
	});

	const onSlotChange = useCallback(() => {
		const root = host.shadowRoot;
		if (!root) return;

		const prevSlot = prevSlotRef.current;
		const nextSlot = nextSlotRef.current;
		const defaultSlot = root.querySelector<HTMLSlotElement>('slot:not([name])');
		if (!prevSlot || !nextSlot || !defaultSlot) return;

		let prev = prevSlot.assignedElements()[0] as HTMLElement | undefined;
		let next = nextSlot.assignedElements()[0] as HTMLElement | undefined;

		const unassigned = defaultSlot
			.assignedElements()
			.filter((el) => !el.hasAttribute('slot')) as HTMLElement[];

		if (!prev && unassigned.length > 0) {
			prev = unassigned.shift() as HTMLElement;
			prev.setAttribute('slot', 'previous');
		}
		if (!next && unassigned.length > 0) {
			next = unassigned.shift() as HTMLElement;
			next.setAttribute('slot', 'next');
		}

		const handle = handleRef.current;
		if (prev && next && handle) setPanelsReady(true);
	}, []);

	useEffect(() => {
		host.setAttribute('data-direction', direction);
		handleRef.current?.setAttribute('data-direction', direction);
	}, [direction]);

	useEffect(() => {
		if (!panelsReady) return;
		const handle = handleRef.current;
		const previous = prevSlotRef.current?.assignedElements()[0] as
			| HTMLElement
			| undefined;
		const next = nextSlotRef.current?.assignedElements()[0] as
			| HTMLElement
			| undefined;
		if (!previous || !next || !handle) return;

		const containerSize = containerSizeOf(host, direction);
		const bounds = resolveBounds(minSize, maxSize, containerSize);

		const restored = adapter?.get?.(persistKey ?? '');
		const splitPx =
			restored !== undefined
				? clampSplitPx(restored * containerSize, bounds)
				: computeInitial(initialSizes, bounds, containerSize);
		const { ratios } = applySizes(previous, next, splitPx, containerSize);
		ratioRef.current = ratios[0];
		dispatchSplitResize(host, ratios);

		const handler = createFlexResize({
			elements: { previous, next, container: host },
			direction,
			minSize: bounds.prevMin,
			maxSize: bounds.prevMax,
			onResize: ({ ratios, px }) => {
				const cs = containerSizeOf(host, direction);
				applySizes(previous, next, px, cs);
				ratioRef.current = ratios[0];
				dispatchSplitResize(host, ratios);
			},
			onResizeEnd: ({ ratios }) => {
				persistRatio?.(ratios[0]);
			},
		});
		handle.addEventListener('resize', handler as EventListener);

		return () => {
			handle.removeEventListener('resize', handler as EventListener);
		};
	}, [minSize, maxSize, persistRatio, direction, panelsReady]);

	return html`<slot hidden @slotchange=${onSlotChange}></slot
		><slot
			name="previous"
			${ref(prevSlotRef)}
			@slotchange=${onSlotChange}
		></slot
		><cosmoz-resize-handle
			direction=${direction}
			${ref(handleRef)}
		></cosmoz-resize-handle
		><slot name="next" ${ref(nextSlotRef)} @slotchange=${onSlotChange}></slot>`;
};

customElements.define(
	'cosmoz-resizable-view',
	component(ResizableView, {
		styleSheets: [styles],
		observedAttributes: ['direction'],
	}),
);

export { ResizableView };
