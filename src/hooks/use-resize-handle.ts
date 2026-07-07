import { useEffect, useHost } from '@pionjs/pion';
import { ResizePhase, ResizerDirection } from '../types';
import { getMousePosition } from '../utils';

const useResizeHandle = (direction: ResizerDirection = 'horizontal') => {
	const host = useHost();

	useEffect(() => {
		host.setAttribute('data-direction', direction);
	}, [direction]);

	useEffect(() => {
		const fire = (phase: ResizePhase, e: MouseEvent | TouchEvent) => {
			const mousePosition = getMousePosition(e);
			host.dispatchEvent(
				new CustomEvent('resize-handle', {
					detail: { phase, mousePosition },
					bubbles: true,
				}),
			);
		};

		const onPointerMove = (e: MouseEvent | TouchEvent) => fire('move', e);

		const onPointerUp = (e: MouseEvent | TouchEvent) => {
			host.removeAttribute('data-dragging');
			fire('end', e);
			document.removeEventListener('mousemove', onPointerMove);
			document.removeEventListener('mouseup', onPointerUp);
			document.removeEventListener('touchmove', onPointerMove);
			document.removeEventListener('touchend', onPointerUp);
		};

		const startDrag = (e: MouseEvent | TouchEvent) => {
			host.setAttribute('data-dragging', 'true');
			fire('start', e);
			document.addEventListener('mousemove', onPointerMove);
			document.addEventListener('mouseup', onPointerUp);
			document.addEventListener('touchmove', onPointerMove, { passive: false });
			document.addEventListener('touchend', onPointerUp);
		};

		const onMouseDown = (e: MouseEvent) => {
			e.preventDefault();
			startDrag(e);
		};

		const onTouchStart = (e: TouchEvent) => {
			e.preventDefault();
			startDrag(e);
		};

		host.addEventListener('mousedown', onMouseDown);
		host.addEventListener('touchstart', onTouchStart, { passive: false });

		return () => {
			host.removeEventListener('mousedown', onMouseDown);
			host.removeEventListener('touchstart', onTouchStart);
			document.removeEventListener('mousemove', onPointerMove);
			document.removeEventListener('mouseup', onPointerUp);
			document.removeEventListener('touchmove', onPointerMove);
			document.removeEventListener('touchend', onPointerUp);
		};
	}, [host]);

	return null;
};

export default useResizeHandle;
