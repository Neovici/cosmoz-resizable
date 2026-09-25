import { component } from '@pionjs/pion';
import { nothing } from 'lit-html';
import useResizeHandle from './hooks/use-resize-handle';
import { styles } from './resize-handle.css';
import { ResizeHandleProps } from './types';

const ResizeHandle = ({ direction = 'horizontal' }: ResizeHandleProps) => {
	useResizeHandle(direction);

	return nothing;
};

customElements.define(
	'cosmoz-resize-handle',
	component(ResizeHandle, {
		styleSheets: [styles],
		observedAttributes: ['direction'],
	}),
);

export { ResizeHandle };
