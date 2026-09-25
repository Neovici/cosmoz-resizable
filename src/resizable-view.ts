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
import {
	PersistedState,
	ResizableViewProps,
	ResizeHandleElement,
	ResizerDirection,
} from './types';

const isVisible = (el: HTMLElement): boolean =>
	getComputedStyle(el).display !== 'none';

const slotted = (slot: HTMLSlotElement | undefined): HTMLElement | undefined =>
	slot?.assignedElements()[0] as HTMLElement | undefined;

const slotHasVisible = (slot: HTMLSlotElement | undefined): boolean =>
	slot?.assignedElements().some((el) => isVisible(el as HTMLElement)) ?? false;

const observeVisibility = (
	host: HTMLElement,
	previousPanel: HTMLElement,
	previousSlot: HTMLSlotElement | undefined,
	nextPanel: HTMLElement,
	nextSlot: HTMLSlotElement | undefined,
): ResizeObserver => {
	const update = () => {
		const prevVisible = slotHasVisible(previousSlot);
		const nextVisible = slotHasVisible(nextSlot);
		previousPanel.toggleAttribute('data-hidden', !prevVisible);
		nextPanel.toggleAttribute('data-hidden', !nextVisible);
		host.toggleAttribute('data-single-panel', !(prevVisible && nextVisible));
	};
	const ro = new ResizeObserver(() => queueMicrotask(update));
	const observeSlot = (slot: HTMLSlotElement | undefined) => {
		slot?.assignedElements().forEach((el) => ro.observe(el));
	};
	observeSlot(previousSlot);
	observeSlot(nextSlot);
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

const setupResize = ({
	host,
	handle,
	direction,
	persistRef,
	prevPanelRef,
	nextPanelRef,
	prevSlotRef,
	nextSlotRef,
}: {
	host: HTMLElement;
	handle: HTMLElement | undefined;
	direction: ResizerDirection;
	persistRef: {
		current: ((state: PersistedState) => void) | undefined;
	};
	prevPanelRef: { current: HTMLElement | undefined };
	nextPanelRef: { current: HTMLElement | undefined };
	prevSlotRef: { current: HTMLSlotElement | undefined };
	nextSlotRef: { current: HTMLSlotElement | undefined };
}): (() => void) | undefined => {
	const previousPanel = prevPanelRef.current;
	const nextPanel = nextPanelRef.current;
	const previous = slotted(prevSlotRef.current);
	const next = slotted(nextSlotRef.current);
	if (!previousPanel || !nextPanel || !previous || !next || !handle) {
		return undefined;
	}

	const handler = createFlexResize({
		container: host,
		previous: previousPanel,
		direction,
		onResize: (px) => {
			previousPanel.style.flexBasis = `${px}px`;
		},
		onResizeEnd: () => {
			requestAnimationFrame(() => {
				const rect = previousPanel.getBoundingClientRect();
				const actualPx = direction === 'horizontal' ? rect.width : rect.height;
				persistRef.current?.({ px: actualPx });
			});
		},
	});
	handle.addEventListener('resize-handle', handler as EventListener);

	const ro = observeVisibility(
		host,
		previousPanel,
		prevSlotRef.current,
		nextPanel,
		nextSlotRef.current,
	);

	return () => {
		handle.removeEventListener('resize-handle', handler as EventListener);
		ro.disconnect();
	};
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
	maxSize,
	maxSizeHorizontal,
	maxSizeVertical,
}: ResizableViewProps) => {
	const host = useHost();
	const handleRef = useRef<HTMLElement>();
	const prevSlotRef = useRef<HTMLSlotElement>();
	const nextSlotRef = useRef<HTMLSlotElement>();
	const defaultSlotRef = useRef<HTMLSlotElement>();
	const prevPanelRef = useRef<HTMLDivElement>();
	const nextPanelRef = useRef<HTMLDivElement>();
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
			const previous = prevPanelRef.current;
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

	const onDefaultSlotChange = useCallback(() => {
		defaultSlotRef.current
			?.assignedElements()
			.forEach((el) => el.setAttribute('slot', 'previous'));
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
		applySizeVars(host, 'max', maxSize, maxSizeHorizontal, maxSizeVertical);
	}, [
		host,
		initialSize,
		initialSizeHorizontal,
		initialSizeVertical,
		minSize,
		minSizeHorizontal,
		minSizeVertical,
		maxSize,
		maxSizeHorizontal,
		maxSizeVertical,
	]);

	useEffect(() => {
		if (!panelsReady) return;

		const teardown = setupResize({
			host,
			handle: handleRef.current,
			direction,
			persistRef,
			prevPanelRef,
			nextPanelRef,
			prevSlotRef,
			nextSlotRef,
		});

		return teardown;
	}, [direction, adapter, persist, host, panelsReady]);

	return html`<slot
			${ref(defaultSlotRef)}
			@slotchange=${onDefaultSlotChange}
		></slot>
		<div
			class="panel"
			data-panel="previous"
			${ref(prevPanelRef)}
			part="panel-previous"
		>
			<slot
				name="previous"
				${ref(prevSlotRef)}
				@slotchange=${onSlotChange}
			></slot>
		</div>
		<cosmoz-resize-handle
			direction=${direction}
			${ref(handleRef)}
		></cosmoz-resize-handle>
		<div class="panel" data-panel="next" ${ref(nextPanelRef)} part="panel-next">
			<slot name="next" ${ref(nextSlotRef)} @slotchange=${onSlotChange}></slot>
		</div>`;
};

declare global {
	interface HTMLElementTagNameMap {
		'cosmoz-resizable-view': HTMLElement & ResizableViewProps;
		'cosmoz-resize-handle': HTMLElement & ResizeHandleElement;
	}
}

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
			'max-size',
			'max-size-horizontal',
			'max-size-vertical',
		],
	}),
);

export { ResizableView };
