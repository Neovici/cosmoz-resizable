import { component } from '@pionjs/pion';
import { nothing } from 'lit-html';
import { styles } from './cosmoz-resize-handle.css';
import useResizeHandle from './hooks/use-resize-handle';
import { ResizerDirection } from './types';

interface ResizeHandleProps {
	direction?: ResizerDirection;
}

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
