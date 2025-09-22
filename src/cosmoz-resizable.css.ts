import { css } from '@pionjs/pion'

export const styles = css` <style>
      :host {
        display: block;
        background: var(--cz-resize-handle-background, #e0e0e0);
        user-select: none;
        position: relative;
        z-index: 1;
      }

      :host([data-direction='horizontal']) {
        min-height: 100%;
        width: var(--cz-resize-handle-size, 4px);
        cursor: col-resize;
      }

      :host([data-direction='vertical']) {
        height: var(--cz-resize-handle-size, 4px);
        width: 100%;
        cursor: row-resize;
      }

      :host(:hover) {
        background: var(--cz-resize-handle-hover-background, #ccc);
      }

      :host([data-dragging]) {
        background: var(--cz-resize-handle-dragging-background, #007acc);
        cursor: grabbing;
      }
    </style>`
