export interface ResizableProps {
  resizer?: ResizerFunction
}

export type ResizerDirection = 'horizontal' | 'vertical'

export interface ResizerConfig {
  direction: ResizerDirection
  onResize?: (data: { previousSize: string; nextSize: string }) => void
}

export interface PanelSizes {
  previousSize: string
  nextSize: string
}

export interface ResizerFunction {
  (mousePosition: MousePosition, elements: ResizerElements): PanelSizes | null
  direction: ResizerDirection
  onResize?: (data: { previousSize: string; nextSize: string }) => void
}

export interface ResizerElements {
  previous: HTMLElement
  next: HTMLElement
  container: HTMLElement
}

export interface MousePosition {
  x: number
  y: number
}
