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
import { parseSizeAttr } from './parse-size';
import { styles } from './resizable-view.css';
import './resize-handle';
import { createFlexResize } from './resizers';
import { PersistedState, ResizerDirection } from './types';

interface ResizableViewProps {
	direction?: ResizerDirection;
	persist?: string;
	initialSize?: string;
	initialSizeHorizontal?: string;
	initialSizeVertical?: string;
	minSize?: string;
	minSizeHorizontal?: string;
	minSizeVertical?: string;
}

const isVisible = (el: HTMLElement): boolean =>
	getComputedStyle(el).display !== 'none';

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
	if (state == null) {
		previous.style.flexBasis = '';
		return;
	}
	previous.style.flexBasis = `${state.px}px`;
};

const applySizeVars = (
	host: HTMLElement,
	varSuffix: string,
	base?: string,
	horizontal?: string,
	vertical?: string,
) => {
	const set = (suffix: string, value?: string) => {
		const { previous, next } = parseSizeAttr(value ?? null);
		const prevProp = `--resizable-previous-${varSuffix}${suffix}`;
		const nextProp = `--resizable-next-${varSuffix}${suffix}`;
		if (previous != null) {
			host.style.setProperty(prevProp, previous);
		} else {
			host.style.removeProperty(prevProp);
		}
		if (next != null) {
			host.style.setProperty(nextProp, next);
		} else {
			host.style.removeProperty(nextProp);
		}
	};
	set('', base);
	set('-horizontal', horizontal);
	set('-vertical', vertical);
};

const ResizableView = ({
	direction = 'horizontal',
	persist,
	initialSize,
	initialSizeHorizontal,
	initialSizeVertical,
	minSize,
	minSizeHorizontal,
	minSizeVertical,
}: ResizableViewProps) => {
	const host = useHost();
	const handleRef = useRef<HTMLElement>();
	const prevSlotRef = useRef<HTMLSlotElement>();
	const nextSlotRef = useRef<HTMLSlotElement>();
	const [panelsReady, setPanelsReady] = useState(false);

	const persistKey = persist ? `${persist}:${direction}` : undefined;

	const adapter = useMemo(
		() => (persist ? localStorageAdapter() : undefined),
		[persist],
	);

	const persistState = usePersist(
		adapter,
		persistKey,
		(state: PersistedState | undefined) => {
			const previous = slotted(prevSlotRef.current);
			if (!previous) return;
			restore(previous, state);
		},
	);

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
		applySizeVars(
			host,
			'basis',
			initialSize,
			initialSizeHorizontal,
			initialSizeVertical,
		);
		applySizeVars(host, 'min', minSize, minSizeHorizontal, minSizeVertical);
	}, [
		host,
		initialSize,
		initialSizeHorizontal,
		initialSizeVertical,
		minSize,
		minSizeHorizontal,
		minSizeVertical,
	]);

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
			onResizeEnd: () => {
				requestAnimationFrame(() => {
					const rect = previous.getBoundingClientRect();
					const actualPx =
						direction === 'horizontal' ? rect.width : rect.height;
					persistRef.current?.({ px: actualPx });
				});
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
		observedAttributes: [
			'direction',
			'persist',
			'initial-size',
			'initial-size-horizontal',
			'initial-size-vertical',
			'min-size',
			'min-size-horizontal',
			'min-size-vertical',
		],
	}),
);

export { ResizableView };
