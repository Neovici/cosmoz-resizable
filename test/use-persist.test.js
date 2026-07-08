import { expect } from '@open-wc/testing';
import { localStorageAdapter } from '../src/hooks/use-persist';

const key = 'test-split';
const prefix = 'cosmoz-resizable-view:';

describe('use-persist', () => {
	let adapter;

	beforeEach(() => {
		localStorage.clear();
		adapter = localStorageAdapter();
	});

	afterEach(() => {
		localStorage.clear();
	});

	it('get returns undefined for missing key', () => {
		expect(adapter.get(key)).to.be.undefined;
	});

	it('set then get returns {px}', async () => {
		adapter.set(key, { px: 300 });
		await new Promise((r) => setTimeout(r, 150));
		expect(adapter.get(key)).to.deep.equal({ px: 300 });
	});

	it('debounces writes (~100ms)', async () => {
		adapter.set(key, { px: 100 });
		adapter.set(key, { px: 200 });
		adapter.set(key, { px: 300 });
		expect(localStorage.getItem(prefix + key)).to.be.null;
		await new Promise((r) => setTimeout(r, 150));
		expect(localStorage.getItem(prefix + key)).to.equal(
			JSON.stringify({ px: 300 }),
		);
	});

	it('rejects invalid px on restore', async () => {
		adapter.set(key, { px: 300 });
		await new Promise((r) => setTimeout(r, 150));
		localStorage.setItem(prefix + key, JSON.stringify({ px: -10 }));
		expect(adapter.get(key)).to.be.undefined;
	});

	it('rejects non-object on restore', () => {
		localStorage.setItem(prefix + key, '0.45');
		expect(adapter.get(key)).to.be.undefined;
	});

	it('rejects NaN on restore', () => {
		localStorage.setItem(prefix + key, JSON.stringify({ px: NaN }));
		expect(adapter.get(key)).to.be.undefined;
	});

	it('subscribe receives cross-tab updates via storage event', async () => {
		adapter.set(key, { px: 300 });
		await new Promise((r) => setTimeout(r, 150));
		let received;
		const unsub = adapter.subscribe(key, (v) => {
			received = v;
		});
		window.dispatchEvent(
			new StorageEvent('storage', {
				key: prefix + key,
				newValue: JSON.stringify({ px: 400 }),
			}),
		);
		expect(received).to.deep.equal({ px: 400 });
		unsub();
	});

	it('subscribe cleanup stops callbacks', async () => {
		adapter.set(key, { px: 300 });
		await new Promise((r) => setTimeout(r, 150));
		let received;
		const unsub = adapter.subscribe(key, (v) => {
			received = v;
		});
		unsub();
		window.dispatchEvent(
			new StorageEvent('storage', {
				key: prefix + key,
				newValue: JSON.stringify({ px: 400 }),
			}),
		);
		expect(received).to.be.undefined;
	});
});
