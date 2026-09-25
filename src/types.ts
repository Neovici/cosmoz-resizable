export type ResizerDirection = 'horizontal' | 'vertical';

/**
 * Props of `<cosmoz-resizable-view>`; implemented by the element (see the
 * `HTMLElementTagNameMap` augmentation for typed lookups).
 */
export interface ResizableViewProps {
	direction?: ResizerDirection;
	/**
	 * Set via the `reversed` attribute; reflected to `host.reversed`.
	 */
	reversed?: boolean;
	persist?: string;
	initialSize?: string;
	initialSizeHorizontal?: string;
	initialSizeVertical?: string;
	minSize?: string;
	minSizeHorizontal?: string;
	minSizeVertical?: string;
	maxSize?: string;
	maxSizeHorizontal?: string;
	maxSizeVertical?: string;
}

/**
 * Props of `<cosmoz-resize-handle>`; implemented by the element (see the
 * `HTMLElementTagNameMap` augmentation for typed lookups).
 */
export interface ResizeHandleProps {
	direction?: ResizerDirection;
	/**
	 * Set via the `reversed` attribute; observed so `handle.reversed` is
	 * readable in JS. Rendering only needs CSS `:host([reversed])`.
	 */
	reversed?: boolean;
}

export interface MousePosition {
	x: number;
	y: number;
}

export type ResizePhase = 'start' | 'move' | 'end';

export interface ResizeEventDetail {
	phase: ResizePhase;
	mousePosition: MousePosition;
}

export type ResizeHandler = (e: CustomEvent<ResizeEventDetail>) => void;

export interface PersistedState {
	px: number;
}

export interface PersistAdapter {
	get(key: string): PersistedState | undefined;
	set(key: string, value: PersistedState): void;
	subscribe?(key: string, cb: (value: PersistedState) => void): () => void;
}

export interface ResizeConfig {
	container: HTMLElement;
	previous: HTMLElement;
	direction: ResizerDirection;
	/**
	 * Visual order is flipped (row-reverse / column-reverse), so the
	 * previous panel grows from the container's end edge instead of its start.
	 */
	reversed?: boolean;
	onResize?: (px: number) => void;
	onResizeEnd?: () => void;
}
