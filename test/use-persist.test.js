import { expect } from '@open-wc/testing'
import { localStorageAdapter } from '../src/hooks/use-persist'

const key = 'test-split'

describe('use-persist', () => {
	let adapter

	beforeEach(() => {
		localStorage.clear()
		adapter = localStorageAdapter()
	})

	afterEach(() => {
		localStorage.clear()
	})

	it('get returns undefined for missing key', () => {
		expect(adapter.get(key)).to.be.undefined
	})

	it('set then get returns the value', async () => {
		adapter.set(key, 0.45)
		await new Promise((r) => setTimeout(r, 150))
		expect(adapter.get(key)).to.equal(0.45)
	})

	it('debounces writes (~100ms)', async () => {
		adapter.set(key, 0.1)
		adapter.set(key, 0.2)
		adapter.set(key, 0.3)
		expect(localStorage.getItem('cosmoz-resizable-view:' + key)).to.be.null
		await new Promise((r) => setTimeout(r, 150))
		expect(localStorage.getItem('cosmoz-resizable-view:' + key)).to.equal('0.3')
	})

	it('clamps invalid values on restore', async () => {
		adapter.set(key, 0.5)
		await new Promise((r) => setTimeout(r, 150))
		localStorage.setItem('cosmoz-resizable-view:' + key, '1.5')
		expect(adapter.get(key)).to.be.undefined
		localStorage.setItem('cosmoz-resizable-view:' + key, 'NaN')
		expect(adapter.get(key)).to.be.undefined
	})

	it('subscribe receives cross-tab updates via storage event', async () => {
		adapter.set(key, 0.5)
		await new Promise((r) => setTimeout(r, 150))
		let received
		const unsub = adapter.subscribe(key, (v) => {
			received = v
		})
		window.dispatchEvent(
			new StorageEvent('storage', {
				key: 'cosmoz-resizable-view:' + key,
				newValue: '0.6',
			})
		)
		expect(received).to.equal(0.6)
		unsub()
	})

	it('subscribe cleanup stops callbacks', async () => {
		adapter.set(key, 0.5)
		await new Promise((r) => setTimeout(r, 150))
		let received
		const unsub = adapter.subscribe(key, (v) => {
			received = v
		})
		unsub()
		window.dispatchEvent(
			new StorageEvent('storage', {
				key: 'cosmoz-resizable-view:' + key,
				newValue: '0.7',
			})
		)
		expect(received).to.be.undefined
	})
})