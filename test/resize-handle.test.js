import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import '../src/resize-handle';

describe('cosmoz-resize-handle', () => {
	it('is defined', async () => {
		const el = await fixture(
			html`<cosmoz-resize-handle></cosmoz-resize-handle>`,
		);
		expect(el.tagName.toLowerCase()).to.equal('cosmoz-resize-handle');
	});

	it('defaults to horizontal direction', async () => {
		const el = await fixture(
			html`<cosmoz-resize-handle></cosmoz-resize-handle>`,
		);
		await waitUntil(() => el.getAttribute('data-direction'));
		expect(el.getAttribute('data-direction')).to.equal('horizontal');
	});

	it('sets direction from attribute', async () => {
		const el = await fixture(
			html`<cosmoz-resize-handle direction="vertical"></cosmoz-resize-handle>`,
		);
		await waitUntil(() => el.getAttribute('data-direction'));
		expect(el.getAttribute('data-direction')).to.equal('vertical');
	});

	it('fires resize event with phase=start on mousedown', async () => {
		const el = await fixture(
			html`<cosmoz-resize-handle></cosmoz-resize-handle>`,
		);
		await waitUntil(() => el.hasAttribute('data-direction'));
		let detail = null;
		el.addEventListener('resize-handle', (e) => {
			detail = e.detail;
		});
		el.dispatchEvent(
			new MouseEvent('mousedown', { clientX: 100, clientY: 50, bubbles: true }),
		);
		expect(detail).to.not.be.null;
		expect(detail.phase).to.equal('start');
		expect(detail.mousePosition).to.deep.equal({ x: 100, y: 50 });
	});

	it('sets data-dragging on mousedown', async () => {
		const el = await fixture(
			html`<cosmoz-resize-handle></cosmoz-resize-handle>`,
		);
		await waitUntil(() => el.hasAttribute('data-direction'));
		el.dispatchEvent(
			new MouseEvent('mousedown', { clientX: 100, clientY: 50 }),
		);
		expect(el.getAttribute('data-dragging')).to.equal('true');
	});

	it('fires resize with phase=move on mousemove (rAF-batched)', async () => {
		const el = await fixture(
			html`<cosmoz-resize-handle></cosmoz-resize-handle>`,
		);
		await waitUntil(() => el.hasAttribute('data-direction'));
		const phases = [];
		el.addEventListener('resize-handle', (e) => phases.push(e.detail.phase));
		el.dispatchEvent(
			new MouseEvent('mousedown', { clientX: 100, clientY: 50 }),
		);
		document.dispatchEvent(
			new MouseEvent('mousemove', { clientX: 200, clientY: 50 }),
		);
		expect(phases).to.deep.equal(['start']);
		await waitUntil(() => phases.includes('move'), undefined, {
			timeout: 3000,
		});
		expect(phases).to.deep.equal(['start', 'move']);
		expect(phases[1]).to.equal('move');
	});

	it('fires resize with phase=end and clears dragging on mouseup', async () => {
		const el = await fixture(
			html`<cosmoz-resize-handle></cosmoz-resize-handle>`,
		);
		await waitUntil(() => el.hasAttribute('data-direction'));
		const phases = [];
		el.addEventListener('resize-handle', (e) => phases.push(e.detail.phase));
		el.dispatchEvent(
			new MouseEvent('mousedown', { clientX: 100, clientY: 50 }),
		);
		document.dispatchEvent(new MouseEvent('mouseup'));
		expect(phases).to.deep.equal(['start', 'end']);
		expect(el.hasAttribute('data-dragging')).to.be.false;
	});

	it('cleans up listeners after mouseup', async () => {
		const el = await fixture(
			html`<cosmoz-resize-handle></cosmoz-resize-handle>`,
		);
		await waitUntil(() => el.hasAttribute('data-direction'));
		let count = 0;
		el.addEventListener('resize-handle', () => {
			count++;
		});
		el.dispatchEvent(
			new MouseEvent('mousedown', { clientX: 100, clientY: 50 }),
		);
		document.dispatchEvent(new MouseEvent('mouseup'));
		const before = count;
		document.dispatchEvent(
			new MouseEvent('mousemove', { clientX: 300, clientY: 50 }),
		);
		expect(count).to.equal(before);
	});

	it('supports touchstart with preventDefault [chromium only]', async () => {
		if (typeof TouchEvent === 'undefined') return;
		const el = await fixture(
			html`<cosmoz-resize-handle></cosmoz-resize-handle>`,
		);
		await waitUntil(() => el.hasAttribute('data-direction'));
		let detail = null;
		el.addEventListener('resize-handle', (e) => {
			detail = e.detail;
		});
		const touchEvent = new TouchEvent('touchstart', {
			touches: [
				new Touch({ identifier: 0, target: el, clientX: 100, clientY: 50 }),
			],
			cancelable: true,
		});
		el.dispatchEvent(touchEvent);
		expect(touchEvent.defaultPrevented).to.be.true;
		expect(detail).to.not.be.null;
		expect(detail.phase).to.equal('start');
	});

	it('fires move/end on touchmove/touchend [chromium only]', async () => {
		if (typeof TouchEvent === 'undefined') return;
		const el = await fixture(
			html`<cosmoz-resize-handle></cosmoz-resize-handle>`,
		);
		await waitUntil(() => el.hasAttribute('data-direction'));
		const phases = [];
		el.addEventListener('resize-handle', (e) => phases.push(e.detail.phase));
		el.dispatchEvent(
			new TouchEvent('touchstart', {
				touches: [
					new Touch({ identifier: 0, target: el, clientX: 100, clientY: 50 }),
				],
				cancelable: true,
			}),
		);
		document.dispatchEvent(
			new TouchEvent('touchmove', {
				touches: [
					new Touch({ identifier: 0, target: el, clientX: 200, clientY: 50 }),
				],
			}),
		);
		document.dispatchEvent(new TouchEvent('touchend', { touches: [] }));
		// touchend flushes pending rAF synchronously, so move+end are both present
		expect(phases).to.deep.equal(['start', 'move', 'end']);
		expect(el.hasAttribute('data-dragging')).to.be.false;
	});

	describe('label tooltip', () => {
		const hover = (el, type, x = 0, y = 120) =>
			el.dispatchEvent(
				new PointerEvent(type, {
					pointerType: 'mouse',
					clientX: x,
					clientY: y,
				}),
			);
		const tipOf = (el) => el.shadowRoot.querySelector('[popover]');
		const isOpen = (el) => tipOf(el)?.matches(':popover-open') ?? false;

		it('renders no tooltip without a label', async () => {
			const el = await fixture(
				html`<cosmoz-resize-handle></cosmoz-resize-handle>`,
			);
			await waitUntil(() => el.hasAttribute('data-direction'));
			expect(tipOf(el)).to.be.null;
		});

		it('shows the label after hovering and hides it on leave', async () => {
			const el = await fixture(
				html`<div style="display:flex;height:300px">
					<cosmoz-resize-handle label="Drag to resize"></cosmoz-resize-handle>
				</div>`,
			).then((c) => c.querySelector('cosmoz-resize-handle'));
			await waitUntil(() => tipOf(el));
			expect(tipOf(el).textContent).to.equal('Drag to resize');

			hover(el, 'pointerenter');
			expect(isOpen(el)).to.be.false;
			await waitUntil(() => isOpen(el), 'tooltip did not open', {
				timeout: 2000,
			});
			const tip = tipOf(el).getBoundingClientRect();
			expect(tip.left).to.be.greaterThan(el.getBoundingClientRect().right);
			expect(tip.top + tip.height / 2).to.be.closeTo(120, 1);

			hover(el, 'pointerleave');
			expect(isOpen(el)).to.be.false;
		});

		it('does not show the label once dragging starts', async () => {
			const el = await fixture(
				html`<cosmoz-resize-handle
					label="Drag to resize"
				></cosmoz-resize-handle>`,
			);
			await waitUntil(() => tipOf(el));
			hover(el, 'pointerenter');
			hover(el, 'pointerdown');
			await new Promise((r) => setTimeout(r, 800));
			expect(isOpen(el)).to.be.false;
		});
	});
});
