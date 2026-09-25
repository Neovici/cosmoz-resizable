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
			if (typeof msg === 'string' && msg.includes('ResizeObserver loop')) {
				return true;
			}
			return v?.(msg, ...rest);
		};
	},
});

const getPanel = (el, name) =>
	el.shadowRoot.querySelector(`.panel[data-panel='${name}']`);

describe('cosmoz-resizable-view', () => {
	it('is defined', async () => {
		const el = await fixture(
			html`<cosmoz-resizable-view></cosmoz-resizable-view>`,
		);
		expect(el.tagName.toLowerCase()).to.equal('cosmoz-resizable-view');
	});

	it('renders handle between wrapped panel divs in shadow DOM', async () => {
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
		expect(getPanel(el, 'previous')).to.exist;
		expect(getPanel(el, 'next')).to.exist;
	});

	it('redirects unslotted children to previous slot', async () => {
		const el = await fixture(
			html`<cosmoz-resizable-view>
				<div id="prev">prev</div>
				<div id="next" slot="next">next</div>
			</cosmoz-resizable-view>`,
		);
		await waitUntil(
			() => el.shadowRoot.querySelector('cosmoz-resize-handle'),
			undefined,
			{ timeout: 3000 },
		);
		const prevSlot = el.shadowRoot.querySelector('slot[name="previous"]');
		const nextSlot = el.shadowRoot.querySelector('slot[name="next"]');
		await waitUntil(() => prevSlot.assignedElements().length > 0, undefined, {
			timeout: 3000,
		});
		expect(prevSlot.assignedElements()[0]?.id).to.equal('prev');
		expect(nextSlot.assignedElements()[0]?.id).to.equal('next');
	});

	it('wraps panels with contain: layout style', async () => {
		const el = await fixture(
			html`<cosmoz-resizable-view
				style="display:flex; width:600px; height:300px;"
			>
				<div id="prev" slot="previous">prev</div>
				<div id="next" slot="next">next</div>
			</cosmoz-resizable-view>`,
		);
		await waitUntil(() => getPanel(el, 'previous'), undefined, {
			timeout: 3000,
		});
		expect(getComputedStyle(getPanel(el, 'previous')).contain).to.include(
			'layout',
		);
		expect(getComputedStyle(getPanel(el, 'previous')).contain).to.include(
			'style',
		);
	});

	it('forces slotted content to full panel width', async () => {
		const el = await fixture(
			html`<cosmoz-resizable-view
				style="display:flex; width:600px; height:300px;"
				initial-size="200px"
			>
				<div id="prev" slot="previous">prev</div>
				<div id="next" slot="next">next</div>
			</cosmoz-resizable-view>`,
		);
		await waitUntil(
			() => getComputedStyle(getPanel(el, 'previous')).width === '200px',
			undefined,
			{ timeout: 3000 },
		);
		const prev = el.querySelector('#prev');
		const panel = getPanel(el, 'previous');
		expect(prev.offsetWidth).to.equal(panel.clientWidth);
	});

	it('outside flex styles on slotted content don\'t leak into panel layout', async () => {
		const el = await fixture(
			html`<cosmoz-resizable-view
				style="display:flex; width:600px; height:300px;"
				initial-size="200px"
			>
				<div id="prev" slot="previous" style="flex: 0 0 50%; min-width: 400px;">
					prev
				</div>
				<div id="next" slot="next" style="flex: 2 2 300px;">next</div>
			</cosmoz-resizable-view>`,
		);
		await waitUntil(
			() => getComputedStyle(getPanel(el, 'previous')).width === '200px',
			undefined,
			{ timeout: 3000 },
		);
		const panel = getPanel(el, 'previous');
		const prev = el.querySelector('#prev');
		// Panel keeps its initial size regardless of the child's flex/min-width.
		expect(getComputedStyle(panel).flexBasis).to.equal('200px');
		expect(prev.offsetWidth).to.equal(panel.clientWidth);
	});

	it('sets data-single-panel and hides wrapper when one panel is display:none', async () => {
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
		expect(getPanel(el, 'previous').hasAttribute('data-hidden')).to.be.false;

		const prev = el.querySelector('#prev');
		prev.style.display = 'none';
		await waitUntil(() => el.hasAttribute('data-single-panel'), undefined, {
			timeout: 3000,
		});
		expect(el.hasAttribute('data-single-panel')).to.be.true;
		expect(getPanel(el, 'previous').hasAttribute('data-hidden')).to.be.true;
		const hiddenPanel = getPanel(el, 'previous');
		expect(getComputedStyle(hiddenPanel).flexBasis).to.equal('0px');
		expect(hiddenPanel.offsetWidth).to.equal(0);

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
		expect(getPanel(el, 'previous').hasAttribute('data-hidden')).to.be.false;

		const handle = el.shadowRoot.querySelector('cosmoz-resize-handle');
		expect(getComputedStyle(handle).display).to.not.equal('none');
	});

	it('gives visible panel flex 1 1 0 when data-single-panel is set', async () => {
		const el = await fixture(
			html`<cosmoz-resizable-view
				style="display:flex; width:600px; height:300px;"
				initial-size="60%"
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
		const nextPanel = getPanel(el, 'next');
		expect(getComputedStyle(nextPanel).flexGrow).to.equal('1');
		expect(getComputedStyle(nextPanel).flexBasis).to.equal('0px');
	});

	it('restores persisted px as flex-basis on previous panel', async () => {
		localStorage.setItem(
			'cosmoz-resizable-view:test-restore:horizontal',
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
		const prevPanel = getPanel(el, 'previous');
		await waitUntil(
			() => prevPanel.style.flexBasis === '250px',
			'flex-basis should be restored to 250px',
			{ timeout: 3000 },
		);
		expect(prevPanel.style.flexBasis).to.equal('250px');
		expect(el.querySelector('#prev').style.flexBasis).to.equal('');
		localStorage.removeItem('cosmoz-resizable-view:test-restore:horizontal');
	});

	it('clears stale flexBasis when no persisted value exists', async () => {
		const el = await fixture(
			html`<cosmoz-resizable-view
				style="display:flex; width:600px; height:300px;"
				persist="test-clear"
				initial-size="60%"
			>
				<div id="prev" slot="previous" style="flex-basis: 999px">prev</div>
				<div id="next" slot="next">next</div>
			</cosmoz-resizable-view>`,
		);
		const prevPanel = getPanel(el, 'previous');
		await waitUntil(
			() => prevPanel.style.flexBasis === '',
			'flex-basis should be cleared when no stored value',
			{ timeout: 3000 },
		);
		expect(prevPanel.style.flexBasis).to.equal('');
	});

	it('clears stale flexBasis on direction change with no stored value', async () => {
		localStorage.setItem(
			'cosmoz-resizable-view:test-direction:horizontal',
			JSON.stringify({ px: 300 }),
		);
		const el = await fixture(
			html`<cosmoz-resizable-view
				style="display:flex; width:600px; height:600px;"
				persist="test-direction"
				direction="horizontal"
			>
				<div id="prev" slot="previous">prev</div>
				<div id="next" slot="next">next</div>
			</cosmoz-resizable-view>`,
		);
		const prevPanel = getPanel(el, 'previous');
		await waitUntil(
			() => prevPanel.style.flexBasis === '300px',
			'horizontal flex-basis should be restored',
			{ timeout: 3000 },
		);
		expect(prevPanel.style.flexBasis).to.equal('300px');

		el.setAttribute('direction', 'vertical');
		await waitUntil(
			() => prevPanel.style.flexBasis === '',
			'flex-basis should be cleared after direction change with no vertical stored value',
			{ timeout: 3000 },
		);
		expect(prevPanel.style.flexBasis).to.equal('');

		localStorage.removeItem('cosmoz-resizable-view:test-direction:horizontal');
	});

	it('initial-size attribute sets flex-basis on previous panel', async () => {
		const el = await fixture(
			html`<cosmoz-resizable-view
				style="display:flex; width:600px; height:300px;"
				initial-size="60%"
			>
				<div id="prev" slot="previous">prev</div>
				<div id="next" slot="next">next</div>
			</cosmoz-resizable-view>`,
		);
		await waitUntil(
			() => el.shadowRoot.querySelector('cosmoz-resize-handle'),
			undefined,
			{ timeout: 3000 },
		);
		expect(getComputedStyle(getPanel(el, 'previous')).flexBasis).to.equal(
			'60%',
		);
	});

	it('min-size attribute sets min-width on panels in horizontal', async () => {
		const el = await fixture(
			html`<cosmoz-resizable-view
				style="display:flex; width:600px; height:300px;"
				min-size="200 100"
			>
				<div id="prev" slot="previous">prev</div>
				<div id="next" slot="next">next</div>
			</cosmoz-resizable-view>`,
		);
		await waitUntil(
			() => el.shadowRoot.querySelector('cosmoz-resize-handle'),
			undefined,
			{ timeout: 3000 },
		);
		expect(getComputedStyle(getPanel(el, 'previous')).minWidth).to.equal(
			'200px',
		);
		expect(getComputedStyle(getPanel(el, 'next')).minWidth).to.equal('100px');
	});

	it('single-value unitless min-size applies to previous panel only', async () => {
		const el = await fixture(
			html`<cosmoz-resizable-view
				style="display:flex; width:600px; height:300px;"
				min-size="200"
			>
				<div id="prev" slot="previous">prev</div>
				<div id="next" slot="next">next</div>
			</cosmoz-resizable-view>`,
		);
		await waitUntil(
			() => el.shadowRoot.querySelector('cosmoz-resize-handle'),
			undefined,
			{ timeout: 3000 },
		);
		// Unitless values get px appended.
		expect(getComputedStyle(getPanel(el, 'previous')).minWidth).to.equal(
			'200px',
		);
		expect(getComputedStyle(getPanel(el, 'next')).minWidth).to.equal('0px');
	});

	it('min-size-vertical overrides in vertical direction', async () => {
		const el = await fixture(
			html`<cosmoz-resizable-view
				style="display:flex; width:600px; height:600px;"
				direction="vertical"
				min-size="200"
				min-size-vertical="300"
			>
				<div id="prev" slot="previous">prev</div>
				<div id="next" slot="next">next</div>
			</cosmoz-resizable-view>`,
		);
		await waitUntil(
			() => el.shadowRoot.querySelector('cosmoz-resize-handle'),
			undefined,
			{ timeout: 3000 },
		);
		expect(getComputedStyle(getPanel(el, 'previous')).minHeight).to.equal(
			'300px',
		);
	});
});
