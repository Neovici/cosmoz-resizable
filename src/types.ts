export type ResizerDirection = 'horizontal' | 'vertical';

/**
 * Interface implemented by `<cosmoz-resizable-view>` (attribute-reflected
 * props). Augment `HTMLElementTagNameMap` with it for typed lookups.
 */
export interface ResizableViewElement {
	direction?: ResizerDirection;
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
 * Interface implemented by `<cosmoz-resize-handle>`.
 */
export interface ResizeHandleElement {
	direction?: ResizerDirection;
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
	onResize?: (px: number) => void;
	onResizeEnd?: () => void;
}
