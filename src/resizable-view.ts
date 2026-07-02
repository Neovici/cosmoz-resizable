import { component, useEffect, useHost, useMemo, useRef } from '@pionjs/pion';
import { html } from 'lit-html';
import './cosmoz-resize-handle';
import { localStorageAdapter, usePersist } from './hooks/use-persist';
import { styles } from './resizable-view.css';
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
		const root = host.shadowRoot;
		if (!root) return;
		const previous = root
			.querySelector<HTMLSlotElement>('slot[name="previous"]')
			?.assignedElements()[0] as HTMLElement | undefined;
		const next = root
			.querySelector<HTMLSlotElement>('slot[name="next"]')
			?.assignedElements()[0] as HTMLElement | undefined;
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

	const onSlotChange = () => {
		const root = host.shadowRoot;
		if (!root) return;

		const prevSlot = root.querySelector<HTMLSlotElement>(
			'slot[name="previous"]',
		);
		const nextSlot = root.querySelector<HTMLSlotElement>('slot[name="next"]');
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

		const handle = root.querySelector('cosmoz-resize-handle');
		if (!prev || !next || !handle) return;

		const containerSize = containerSizeOf(host, direction);
		const bounds = resolveBounds(minSize, maxSize, containerSize);
		const restored = adapter?.get?.(persistKey ?? '');
		const splitPx =
			restored !== undefined
				? clampSplitPx(restored * containerSize, bounds)
				: computeInitial(initialSizes, bounds, containerSize);
		const { ratios } = applySizes(prev, next, splitPx, containerSize);
		ratioRef.current = ratios[0];
		dispatchSplitResize(host, ratios);
	};

	useEffect(() => {
		host.setAttribute('data-direction', direction);
		const root = host.shadowRoot;
		const handle = root?.querySelector('cosmoz-resize-handle');
		if (handle) handle.setAttribute('data-direction', direction);
	}, [direction]);

	useEffect(() => {
		const root = host.shadowRoot;
		if (!root) return;
		const previous = root
			.querySelector<HTMLSlotElement>('slot[name="previous"]')
			?.assignedElements()[0] as HTMLElement | undefined;
		const next = root
			.querySelector<HTMLSlotElement>('slot[name="next"]')
			?.assignedElements()[0] as HTMLElement | undefined;
		const handle = root.querySelector('cosmoz-resize-handle');
		if (!previous || !next || !handle) return;

		const bounds = resolveBounds(
			minSize,
			maxSize,
			containerSizeOf(host, direction),
		);
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
	}, [minSize, maxSize, persistRatio, direction]);

	return html`<slot hidden @slotchange=${onSlotChange}></slot
		><slot name="previous" @slotchange=${onSlotChange}></slot
		><cosmoz-resize-handle direction=${direction}></cosmoz-resize-handle
		><slot name="next" @slotchange=${onSlotChange}></slot>`;
};

customElements.define(
	'cosmoz-resizable-view',
	component(ResizableView, {
		styleSheets: [styles],
		observedAttributes: ['direction'],
	}),
);

export { ResizableView };
