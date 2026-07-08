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
import { PersistedState, ResizerDirection } from './types';

interface ResizableViewProps {
	direction?: ResizerDirection;
	persist?: string;
}

const isVisible = (el: HTMLElement): boolean => {
	const { width, height } = el.getBoundingClientRect();
	return width > 0 && height > 0;
};

const slotted = (slot: HTMLSlotElement | undefined): HTMLElement | undefined =>
	slot?.assignedElements()[0] as HTMLElement | undefined;

const observeVisibility = (
	host: HTMLElement,
	previous: HTMLElement,
	next: HTMLElement,
): ResizeObserver => {
	const update = () => {
		const both = isVisible(previous) && isVisible(next);
		host.toggleAttribute('data-single-panel', !both);
	};
	const ro = new ResizeObserver(() => queueMicrotask(update));
	ro.observe(previous);
	ro.observe(next);
	update();
	return ro;
};

const restore = (previous: HTMLElement, state: PersistedState | undefined) => {
	if (state == null) return;
	previous.style.flexBasis = `${state.px}px`;
};

const ResizableView = ({
	direction = 'horizontal',
	persist,
}: ResizableViewProps) => {
	const host = useHost();
	const handleRef = useRef<HTMLElement>();
	const prevSlotRef = useRef<HTMLSlotElement>();
	const nextSlotRef = useRef<HTMLSlotElement>();
	const [panelsReady, setPanelsReady] = useState(false);

	const adapter = useMemo(
		() => (persist ? localStorageAdapter() : undefined),
		[persist],
	);

	const persistState = usePersist(adapter, persist, (state: PersistedState) => {
		const previous = slotted(prevSlotRef.current);
		if (!previous) return;
		restore(previous, state);
	});

	const persistRef = useRef(persistState);
	persistRef.current = persistState;

	const onSlotChange = useCallback(() => {
		const prev = prevSlotRef.current?.assignedElements()[0];
		const next = nextSlotRef.current?.assignedElements()[0];
		if (prev && next) setPanelsReady(true);
	}, []);

	useEffect(() => {
		host.setAttribute('data-direction', direction);
	}, [direction]);

	useEffect(() => {
		if (!panelsReady) return;

		const previous = slotted(prevSlotRef.current);
		const next = slotted(nextSlotRef.current);
		const handle = handleRef.current;
		if (!previous || !next || !handle) return;

		const handler = createFlexResize({
			container: host,
			previous,
			direction,
			onResize: (px) => {
				previous.style.flexBasis = `${px}px`;
			},
			onResizeEnd: (px) => {
				persistRef.current?.({ px });
			},
		});
		handle.addEventListener('resize-handle', handler as EventListener);

		const ro = observeVisibility(host, previous, next);

		return () => {
			handle.removeEventListener('resize-handle', handler as EventListener);
			ro.disconnect();
		};
	}, [direction, adapter, persist, host, panelsReady]);

	return html`<slot
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
		observedAttributes: ['direction', 'persist'],
	}),
);

export { ResizableView };
