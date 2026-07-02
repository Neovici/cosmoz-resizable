import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import '../src/resizable-view';

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
				<div id="prev" style="background:red">prev</div>
				<div id="next" style="background:blue">next</div>
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
		const prevAssigned = prevSlot.assignedElements()[0];
		expect(prevAssigned?.id).to.equal('prev');
		expect(prevAssigned?.getAttribute('slot')).to.equal('previous');
		const nextAssigned = nextSlot.assignedElements()[0];
		expect(nextAssigned?.id).to.equal('next');
		expect(nextAssigned?.getAttribute('slot')).to.equal('next');
	});

	it('respects existing slot attributes', async () => {
		const el = await fixture(
			html`<cosmoz-resizable-view>
				<div id="prev" slot="previous">prev</div>
				<div id="next" slot="next">next</div>
			</cosmoz-resizable-view>`,
		);
		await waitUntil(
			() =>
				el.shadowRoot.querySelector('slot[name="previous"]').assignedElements()
					.length > 0,
			undefined,
			{ timeout: 3000 },
		);
		const prevAssigned = el.shadowRoot
			.querySelector('slot[name="previous"]')
			.assignedElements()[0];
		expect(prevAssigned?.id).to.equal('prev');
		const nextAssigned = el.shadowRoot
			.querySelector('slot[name="next"]')
			.assignedElements()[0];
		expect(nextAssigned?.id).to.equal('next');
	});

	it('applies initial flex-basis to panels', async () => {
		const el = await fixture(
			html`<cosmoz-resizable-view .initialSizes=${[0.3, 0.7]}>
				<div id="prev" style="background:red">prev</div>
				<div id="next" style="background:blue">next</div>
			</cosmoz-resizable-view>`,
		);
		await waitUntil(
			() => el.shadowRoot.querySelector('cosmoz-resize-handle'),
			undefined,
			{ timeout: 3000 },
		);
		const prev = el.querySelector('#prev');
		const next = el.querySelector('#next');
		expect(prev.style.flexBasis).to.equal('30%');
		expect(next.style.flexBasis).to.equal('70%');
	});

	it('dispatches split-resize event on init', async () => {
		let eventDetail = null;
		const el = await fixture(
			html`<cosmoz-resizable-view
				.initialSizes=${[0.4, 0.6]}
				@split-resize=${(e) => {
					eventDetail = e.detail;
				}}
			>
				<div>prev</div>
				<div>next</div>
			</cosmoz-resizable-view>`,
		);
		await waitUntil(
			() => el.shadowRoot.querySelector('cosmoz-resize-handle'),
			undefined,
			{ timeout: 3000 },
		);
		expect(eventDetail).to.not.be.null;
		expect(eventDetail.ratios).to.deep.equal([0.4, 0.6]);
	});

	it('respects initial tuple cap', async () => {
		const el = await fixture(
			html`<cosmoz-resizable-view
				style="display:flex; width:1000px; height:600px;"
				.initialSizes=${[[0.5, '200px'], 0.5]}
			>
				<div id="prev">prev</div>
				<div id="next">next</div>
			</cosmoz-resizable-view>`,
		);
		await waitUntil(
			() => el.shadowRoot.querySelector('cosmoz-resize-handle'),
			undefined,
			{ timeout: 3000 },
		);
		const prev = el.querySelector('#prev');
		expect(parseFloat(prev.style.flexBasis)).to.equal(20);
	});
});
