import { useEffect, useHost, useRef } from '@pionjs/pion';
import { ResizerDirection } from '../types';

const DELAY = 600;
const GAP = 8;

const position = (
	tip: HTMLElement,
	handle: HTMLElement,
	direction: ResizerDirection,
	{ x, y }: { x: number; y: number },
) => {
	const h = handle.getBoundingClientRect();
	const t = tip.getBoundingClientRect();
	if (direction === 'horizontal') {
		const after = h.right + GAP;
		const left = after + t.width > innerWidth ? h.left - GAP - t.width : after;
		tip.style.left = `${left}px`;
		tip.style.top = `${y - t.height / 2}px`;
		return;
	}
	const below = h.bottom + GAP;
	const top = below + t.height > innerHeight ? h.top - GAP - t.height : below;
	tip.style.top = `${top}px`;
	tip.style.left = `${x - t.width / 2}px`;
};

/**
 * Shows `label` in a popover next to the pointer after hovering the handle
 * for a while. The popover lives in the top layer, so it escapes the
 * `contain` and `overflow` of ancestor panels.
 */
export const useHandleTooltip = (
	label: string | undefined,
	direction: ResizerDirection,
) => {
	const host = useHost();
	const tipRef = useRef<HTMLElement>();

	useEffect(() => {
		const tip = tipRef.current;
		if (!label || !tip) return;

		let timer: ReturnType<typeof setTimeout> | undefined;
		let pointer = { x: 0, y: 0 };

		const hide = () => {
			clearTimeout(timer);
			timer = undefined;
			if (tip.matches(':popover-open')) tip.hidePopover();
		};

		const show = () => {
			timer = undefined;
			if (host.hasAttribute('data-dragging') || !host.isConnected) return;
			tip.showPopover();
			position(tip, host, direction, pointer);
		};

		const onEnter = (e: PointerEvent) => {
			if (e.pointerType === 'touch') return;
			pointer = { x: e.clientX, y: e.clientY };
			clearTimeout(timer);
			timer = setTimeout(show, DELAY);
		};

		const onMove = (e: PointerEvent) => {
			pointer = { x: e.clientX, y: e.clientY };
			if (tip.matches(':popover-open')) position(tip, host, direction, pointer);
		};

		host.addEventListener('pointerenter', onEnter);
		host.addEventListener('pointermove', onMove);
		host.addEventListener('pointerleave', hide);
		host.addEventListener('pointerdown', hide);

		return () => {
			hide();
			host.removeEventListener('pointerenter', onEnter);
			host.removeEventListener('pointermove', onMove);
			host.removeEventListener('pointerleave', hide);
			host.removeEventListener('pointerdown', hide);
		};
	}, [host, label, direction]);

	return tipRef;
};
