import { expect } from '@open-wc/testing';
import { createFlexResize } from '../src/resizers';

const makeEvent = (phase, x, y) =>
	new CustomEvent('resize-handle', {
		detail: { phase, mousePosition: { x, y } },
	});

const spy = () => {
	const calls = [];
	const fn = (...args) => calls.push(args);
	fn.calls = calls;
	fn.called = () => calls.length > 0;
	fn.callCount = () => calls.length;
	fn.firstCall = () => calls[0];
	return fn;
};

describe('createFlexResize', () => {
	let previous, next, container, handler, onResize, onResizeEnd, onResizeStart;

	beforeEach(() => {
		previous = document.createElement('div');
		next = document.createElement('div');
		container = document.createElement('div');
		container.appendChild(previous);
		container.appendChild(next);
		Object.defineProperty(container, 'getBoundingClientRect', {
			value: () => ({ left: 0, top: 0, width: 1000, height: 600 }),
		});
		onResize = spy();
		onResizeEnd = spy();
		onResizeStart = spy();
		handler = createFlexResize({
			elements: { previous, next, container },
			direction: 'horizontal',
			minSize: 100,
			maxSize: 800,
			onResizeStart,
			onResize,
			onResizeEnd,
		});
	});

	it('on start: snapshots container, calls onResizeStart', () => {
		handler(makeEvent('start', 500, 0));
		expect(onResizeStart.callCount()).to.equal(1);
		expect(onResize.callCount()).to.equal(0);
	});

	it('on move: calls onResize with clamped ratios + px', () => {
		handler(makeEvent('start', 500, 0));
		handler(makeEvent('move', 500, 0));
		expect(onResize.callCount()).to.equal(1);
		const { ratios, px } = onResize.firstCall()[0];
		expect(px).to.equal(500);
		expect(ratios).to.deep.equal([0.5, 0.5]);
	});

	it('clamps to minSize', () => {
		handler(makeEvent('start', 50, 0));
		handler(makeEvent('move', 50, 0));
		const { px } = onResize.firstCall()[0];
		expect(px).to.equal(100);
	});

	it('clamps to maxSize', () => {
		handler(makeEvent('start', 900, 0));
		handler(makeEvent('move', 900, 0));
		const { px } = onResize.firstCall()[0];
		expect(px).to.equal(800);
	});

	it('on end: calls onResizeEnd with ratios', () => {
		handler(makeEvent('start', 500, 0));
		handler(makeEvent('end', 300, 0));
		expect(onResizeEnd.callCount()).to.equal(1);
		const { ratios } = onResizeEnd.firstCall()[0];
		expect(ratios).to.deep.equal([0.3, 0.7]);
	});

	it('vertical direction uses y axis', () => {
		handler = createFlexResize({
			elements: { previous, next, container },
			direction: 'vertical',
			onResize,
		});
		handler(makeEvent('move', 0, 300));
		const { px } = onResize.firstCall()[0];
		expect(px).to.equal(300);
	});

	it('handles move without prior start (lazy snapshot)', () => {
		handler(makeEvent('move', 400, 0));
		expect(onResize.callCount()).to.equal(1);
		const { px } = onResize.firstCall()[0];
		expect(px).to.equal(400);
	});
});
