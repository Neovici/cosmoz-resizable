export type ResizerDirection = 'horizontal' | 'vertical'

export interface MousePosition {
	x: number
	y: number
}

export type ResizePhase = 'start' | 'move' | 'end'

export interface ResizeEventDetail {
	phase: ResizePhase
	mousePosition: MousePosition
}

export type Ratio = number | `${number}%`
export type AbsoluteSize = number | `${number}px` | `${number}vw` | `${number}vh`
export type SizeSpec = Ratio | AbsoluteSize | [Ratio, AbsoluteSize]

export interface ResizerElements {
	previous: HTMLElement
	next: HTMLElement
	container: HTMLElement
}

export interface ResizeCallbackData {
	ratios: [number, number]
	px: number
}

export interface ResizeConfig {
	elements: ResizerElements
	direction: ResizerDirection
	minSize?: number
	maxSize?: number
	onResizeStart?: () => void
	onResize?: (data: ResizeCallbackData) => void
	onResizeEnd?: (data: { ratios: [number, number] }) => void
}

export type ResizeHandler = (e: CustomEvent<ResizeEventDetail>) => void

export interface ParsedSize {
	ratio?: number
	absolute?: number
}

export interface PersistAdapter {
	get(key: string): number | undefined
	set(key: string, value: number): void
	subscribe?(key: string, cb: (value: number) => void): () => void
}