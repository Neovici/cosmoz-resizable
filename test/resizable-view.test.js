import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import '../src/resizable-view';

// Suppress the harmless "ResizeObserver loop completed with undelivered
// notifications" error. Intercepts mocha's window.onerror assignment via
// a setter that wraps the handler with a filter.
let _onerror = null;
Object.defineProperty(window, 'onerror', {
	get() {
		return _onerror;
	},
	set(v) {
		_onerror = (msg, ...rest) => {
			if (typeof msg === 'string' && msg.includes('ResizeObserver loop'))
				{return true;}
			return v?.(msg, ...rest);
		};
	},
});

describe('cosmoz-resizable-view', () => {
	it('is defined', async () => {
		const el = await fixture(
			html`<cosmoz-resizable-view></cosmoz-resizable-view>`,
		);
		expect(el.tagName.toLowerCase()).to.equal('cosmoz-resizable-view');
	});

	it('renders a handle in shadow DOM between named slots', async () => {
		const el = await fixture(
			html`<cosmoz-resizable-view>
				<div id="prev" slot="previous">prev</div>
				<div id="next" slot="next">next</div>
			</cosmoz-resizable-view>`,
		);
		await waitUntil(
			() => el.shadowRoot.querySelector('cosmoz-resize-handle'),
			undefined,
			{ timeout: 3000 },
		);
		const handle = el.shadowRoot.querySelector('cosmoz-resize-handle');
		expect(handle).to.exist;
		const prevSlot = el.shadowRoot.querySelector('slot[name="previous"]');
		const nextSlot = el.shadowRoot.querySelector('slot[name="next"]');
		expect(prevSlot).to.exist;
		expect(nextSlot).to.exist;
		expect(prevSlot.assignedElements()[0]?.id).to.equal('prev');
		expect(nextSlot.assignedElements()[0]?.id).to.equal('next');
	});

	it('does not auto-assign unslotted children', async () => {
		const el = await fixture(
			html`<cosmoz-resizable-view>
				<div id="prev">prev</div>
				<div id="next">next</div>
			</cosmoz-resizable-view>`,
		);
		await waitUntil(
			() => el.shadowRoot.querySelector('cosmoz-resize-handle'),
			undefined,
			{ timeout: 3000 },
		);
		const prevSlot = el.shadowRoot.querySelector('slot[name="previous"]');
		const nextSlot = el.shadowRoot.querySelector('slot[name="next"]');
		expect(prevSlot.assignedElements().length).to.equal(0);
		expect(nextSlot.assignedElements().length).to.equal(0);
	});

	it('sets data-single-panel when one panel is display:none', async () => {
		const el = await fixture(
			html`<cosmoz-resizable-view
				style="display:flex; width:600px; height:300px;"
			>
				<div id="prev" slot="previous" style="background:red">prev</div>
				<div id="next" slot="next" style="background:blue">next</div>
			</cosmoz-resizable-view>`,
		);
		await waitUntil(
			() => el.shadowRoot.querySelector('cosmoz-resize-handle'),
			undefined,
			{ timeout: 3000 },
		);
		expect(el.hasAttribute('data-single-panel')).to.be.false;

		const prev = el.querySelector('#prev');
		prev.style.display = 'none';
		await waitUntil(() => el.hasAttribute('data-single-panel'), undefined, {
			timeout: 3000,
		});
		expect(el.hasAttribute('data-single-panel')).to.be.true;

		const handle = el.shadowRoot.querySelector('cosmoz-resize-handle');
		expect(getComputedStyle(handle).display).to.equal('none');
	});

	it('removes data-single-panel when panel becomes visible again', async () => {
		const el = await fixture(
			html`<cosmoz-resizable-view
				style="display:flex; width:600px; height:300px;"
			>
				<div id="prev" slot="previous" style="background:red">prev</div>
				<div id="next" slot="next" style="background:blue">next</div>
			</cosmoz-resizable-view>`,
		);
		await waitUntil(
			() => el.shadowRoot.querySelector('cosmoz-resize-handle'),
			undefined,
			{ timeout: 3000 },
		);

		const prev = el.querySelector('#prev');
		prev.style.display = 'none';
		await waitUntil(() => el.hasAttribute('data-single-panel'), undefined, {
			timeout: 3000,
		});
		expect(el.hasAttribute('data-single-panel')).to.be.true;

		prev.style.display = '';
		await waitUntil(() => !el.hasAttribute('data-single-panel'), undefined, {
			timeout: 3000,
		});
		expect(el.hasAttribute('data-single-panel')).to.be.false;

		const handle = el.shadowRoot.querySelector('cosmoz-resize-handle');
		expect(getComputedStyle(handle).display).to.not.equal('none');
	});

	it('overrides flex-basis with 0 when data-single-panel is set', async () => {
		const el = await fixture(
			html`<cosmoz-resizable-view
				style="display:flex; width:600px; height:300px;"
			>
				<div id="prev" slot="previous" style="background:red; flex-basis: 30%;">
					prev
				</div>
				<div id="next" slot="next" style="background:blue">next</div>
			</cosmoz-resizable-view>`,
		);
		await waitUntil(
			() => el.shadowRoot.querySelector('cosmoz-resize-handle'),
			undefined,
			{ timeout: 3000 },
		);

		const prev = el.querySelector('#prev');
		prev.style.display = 'none';
		await waitUntil(() => el.hasAttribute('data-single-panel'), undefined, {
			timeout: 3000,
		});
		const next = el.querySelector('#next');
		expect(getComputedStyle(next).flexBasis).to.equal('0px');
	});

	it('restores persisted px as flex-basis on mount', async () => {
		localStorage.setItem(
			'cosmoz-resizable-view:test-restore',
			JSON.stringify({ px: 250 }),
		);
		const el = await fixture(
			html`<cosmoz-resizable-view
				style="display:flex; width:600px; height:300px;"
				persist="test-restore"
			>
				<div id="prev" slot="previous">prev</div>
				<div id="next" slot="next">next</div>
			</cosmoz-resizable-view>`,
		);
		const prev = el.querySelector('#prev');
		await waitUntil(
			() => prev.style.flexBasis === '250px',
			'flex-basis should be restored to 250px',
			{ timeout: 3000 },
		);
		expect(prev.style.flexBasis).to.equal('250px');
		localStorage.removeItem('cosmoz-resizable-view:test-restore');
	});
});
