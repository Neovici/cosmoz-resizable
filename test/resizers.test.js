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
	fn.callCount = () => calls.length;
	fn.firstCall = () => calls[0];
	return fn;
};

const setupContainer = (rect) => {
	const container = document.createElement('div');
	Object.defineProperty(container, 'getBoundingClientRect', {
		value: () => rect,
	});
	return container;
};

const setupPrevious = (style = {}) => {
	const previous = document.createElement('div');
	Object.defineProperty(previous, 'getBoundingClientRect', {
		value: () => ({ width: 0, height: 0 }),
	});
	Object.defineProperty(window, 'getComputedStyle', {
		value: () => ({
			minWidth: style.minWidth ?? '0px',
			minHeight: style.minHeight ?? '0px',
		}),
		configurable: true,
	});
	return previous;
};

describe('createFlexResize', () => {
	let onResize, onResizeEnd;

	beforeEach(() => {
		onResize = spy();
		onResizeEnd = spy();
	});

	afterEach(() => {
		delete window.getComputedStyle;
	});

	it('on start: captures snapshot, does not call onResize', () => {
		const container = setupContainer({
			left: 0,
			top: 0,
			width: 1000,
			height: 600,
		});
		const previous = setupPrevious();
		const handler = createFlexResize({
			container,
			previous,
			direction: 'horizontal',
			onResize,
			onResizeEnd,
		});

		handler(makeEvent('start', 500, 0));
		expect(onResize.callCount()).to.equal(0);
	});

	it('on move: calls onResize with clamped px', () => {
		const container = setupContainer({
			left: 0,
			top: 0,
			width: 1000,
			height: 600,
		});
		const previous = setupPrevious();
		const handler = createFlexResize({
			container,
			previous,
			direction: 'horizontal',
			onResize,
		});

		handler(makeEvent('start', 500, 0));
		handler(makeEvent('move', 500, 0));
		expect(onResize.firstCall()[0]).to.equal(500);
	});

	it('clamps to computed min-width (horizontal)', () => {
		const container = setupContainer({
			left: 0,
			top: 0,
			width: 1000,
			height: 600,
		});
		const previous = setupPrevious({ minWidth: '100px' });
		const handler = createFlexResize({
			container,
			previous,
			direction: 'horizontal',
			onResize,
		});

		handler(makeEvent('start', 50, 0));
		handler(makeEvent('move', 50, 0));
		expect(onResize.firstCall()[0]).to.equal(100);
	});

	it('clamps to computed min-height (vertical)', () => {
		const container = setupContainer({
			left: 0,
			top: 0,
			width: 600,
			height: 1000,
		});
		const previous = setupPrevious({ minHeight: '200px' });
		const handler = createFlexResize({
			container,
			previous,
			direction: 'vertical',
			onResize,
		});

		handler(makeEvent('start', 0, 50));
		handler(makeEvent('move', 0, 50));
		expect(onResize.firstCall()[0]).to.equal(200);
	});

	it('on end: calls onResizeEnd', () => {
		const container = setupContainer({
			left: 0,
			top: 0,
			width: 1000,
			height: 600,
		});
		const previous = setupPrevious();
		const handler = createFlexResize({
			container,
			previous,
			direction: 'horizontal',
			onResizeEnd,
		});

		handler(makeEvent('start', 500, 0));
		handler(makeEvent('end', 300, 0));
		expect(onResizeEnd.callCount()).to.equal(1);
	});

	it('vertical direction uses y axis', () => {
		const container = setupContainer({
			left: 0,
			top: 0,
			width: 600,
			height: 1000,
		});
		const previous = setupPrevious();
		const handler = createFlexResize({
			container,
			previous,
			direction: 'vertical',
			onResize,
		});

		handler(makeEvent('move', 0, 300));
		expect(onResize.firstCall()[0]).to.equal(300);
	});

	it('handles move without prior start (lazy snapshot)', () => {
		const container = setupContainer({
			left: 0,
			top: 0,
			width: 1000,
			height: 600,
		});
		const previous = setupPrevious();
		const handler = createFlexResize({
			container,
			previous,
			direction: 'horizontal',
			onResize,
		});

		handler(makeEvent('move', 400, 0));
		expect(onResize.firstCall()[0]).to.equal(400);
	});
});
