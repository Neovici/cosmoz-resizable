import { component } from '@pionjs/pion';
import { html, nothing } from 'lit-html';
import { ref } from 'lit-html/directives/ref.js';
import { useHandleTooltip } from './hooks/use-handle-tooltip';
import useResizeHandle from './hooks/use-resize-handle';
import { styles } from './resize-handle.css';
import { ResizeHandleProps } from './types';

const ResizeHandle = ({
	direction = 'horizontal',
	label,
}: ResizeHandleProps) => {
	useResizeHandle(direction);
	const tipRef = useHandleTooltip(label, direction);

	return label
		? html`<div popover="manual" part="tooltip" ${ref(tipRef)}>${label}</div>`
		: nothing;
};

customElements.define(
	'cosmoz-resize-handle',
	component(ResizeHandle, {
		styleSheets: [styles],
		observedAttributes: ['direction', 'reversed', 'label'],
	}),
);

export { ResizeHandle };
