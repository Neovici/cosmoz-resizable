import { expect, waitUntil } from '@open-wc/testing';
import { component, html as pionHtml } from '@pionjs/pion';
import { useResizable } from '../src/hooks/use-resizable';

import '../src/resize-handle';

let counter = 0;
const makeHost = (opts) => {
	const tag = `test-resizable-host-${counter++}`;
	const Host = () => {
		useResizable(opts);
		return pionHtml`<div id="container" style="display:flex; width:1000px; height:600px;">
			<div id="list" style="background:red">list</div>
			<div id="queue" style="background:blue">queue</div>
		</div>`;
	};
	customElements.define(tag, component(Host, { useShadowDOM: true }));
	return tag;
};

const mount = (tag) => {
	const el = document.createElement(tag);
	document.body.appendChild(el);
	return el;
};

describe('useResizable', () => {
	afterEach(() => {
		document
			.querySelectorAll(
				'[class^="test-resizable-host-"], [id^="test-resizable-host-"]',
			)
			.forEach((el) => el.remove());
		document.querySelectorAll('*').forEach((el) => {
			if (
				el.tagName &&
				el.tagName.toLowerCase().startsWith('test-resizable-host-')
			) {
				el.remove();
			}
		});
	});

	it('inserts a handle between #list and #queue when activeTab=split', async () => {
		const tag = makeHost({ activeTab: 'split' });
		const el = mount(tag);
		await waitUntil(() => el.shadowRoot.querySelector('cosmoz-resize-handle'));
		const handle = el.shadowRoot.querySelector('cosmoz-resize-handle');
		expect(handle).to.exist;
		const list = el.shadowRoot.querySelector('#list');
		expect(handle).to.equal(list.nextElementSibling);
		el.remove();
	});

	it('does not insert handle when activeTab != split', async () => {
		const tag = makeHost({ activeTab: 'queue' });
		const el = mount(tag);
		await new Promise((r) => setTimeout(r, 200));
		expect(el.shadowRoot.querySelector('cosmoz-resize-handle')).to.be.null;
		el.remove();
	});

	it('applies initial flex-basis', async () => {
		const tag = makeHost({
			activeTab: 'split',
			initialSizes: [0.3, 0.7],
		});
		const el = mount(tag);
		await waitUntil(() => el.shadowRoot.querySelector('cosmoz-resize-handle'));
		const list = el.shadowRoot.querySelector('#list');
		const queue = el.shadowRoot.querySelector('#queue');
		expect(list.style.flexBasis).to.equal('30%');
		expect(queue.style.flexBasis).to.equal('70%');
		el.remove();
	});

	it('cleanup removes handle and resets flex-basis', async () => {
		const tag = makeHost({ activeTab: 'split' });
		const el = mount(tag);
		await waitUntil(() => el.shadowRoot.querySelector('cosmoz-resize-handle'));
		const list = el.shadowRoot.querySelector('#list');
		el.remove();
		await new Promise((r) => setTimeout(r, 50));
		expect(el.shadowRoot.querySelector('cosmoz-resize-handle')).to.be.null;
		expect(list.style.flexBasis).to.equal('');
	});
});
