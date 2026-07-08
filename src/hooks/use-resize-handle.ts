import { useEffect, useHost } from '@pionjs/pion';
import { getMousePosition } from '../resizers';
import { MousePosition, ResizePhase, ResizerDirection } from '../types';

const useResizeHandle = (direction: ResizerDirection = 'horizontal') => {
	const host = useHost();

	useEffect(() => {
		host.setAttribute('data-direction', direction);
	}, [direction]);

	useEffect(() => {
		const fire = (phase: ResizePhase, mousePosition: MousePosition) => {
			host.dispatchEvent(
				new CustomEvent('resize-handle', {
					detail: { phase, mousePosition },
					bubbles: true,
				}),
			);
		};

		let raf = 0;
		let lastMovePos: MousePosition | undefined;

		const flushMove = () => {
			raf = 0;
			if (!lastMovePos) return;
			fire('move', lastMovePos);
			lastMovePos = undefined;
		};

		const onPointerMove = (e: MouseEvent | TouchEvent) => {
			lastMovePos = getMousePosition(e);
			if (!raf) raf = requestAnimationFrame(flushMove);
		};

		const onPointerUp = (e: MouseEvent | TouchEvent) => {
			if (raf) {
				cancelAnimationFrame(raf);
				flushMove();
			}
			host.removeAttribute('data-dragging');
			fire('end', getMousePosition(e));
			document.removeEventListener('mousemove', onPointerMove);
			document.removeEventListener('mouseup', onPointerUp);
			document.removeEventListener('touchmove', onPointerMove);
			document.removeEventListener('touchend', onPointerUp);
		};

		const startDrag = (e: MouseEvent | TouchEvent) => {
			host.setAttribute('data-dragging', 'true');
			fire('start', getMousePosition(e));
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
			if (raf) cancelAnimationFrame(raf);
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
