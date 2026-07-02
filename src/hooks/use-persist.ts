import { useEffect } from '@pionjs/pion';
import { PersistAdapter } from '../types';

const clamp = (v: number): number | undefined =>
	typeof v === 'number' && !Number.isNaN(v) && v >= 0 && v <= 1 ? v : undefined;

export const localStorageAdapter = (
	prefix = 'cosmoz-resizable-view:',
): PersistAdapter => {
	const subscribers = new Map<string, Set<(value: number) => void>>();
	let writeTimer: ReturnType<typeof setTimeout> | undefined;
	const pending = new Map<string, number>();

	const flush = () => {
		writeTimer = undefined;
		for (const [key, value] of pending) {
			try {
				localStorage.setItem(prefix + key, String(value));
			} catch {
				// storage full or unavailable — ignore
			}
		}
		pending.clear();
	};

	const schedule = (key: string, value: number) => {
		pending.set(key, value);
		if (writeTimer === undefined) {
			writeTimer = setTimeout(flush, 100);
		}
	};

	const onStorage = (e: StorageEvent) => {
		if (e.key === null || !e.key.startsWith(prefix) || e.newValue === null)
			{return;}
		const key = e.key.slice(prefix.length);
		const value = clamp(Number(e.newValue));
		if (value === undefined) return;
		const subs = subscribers.get(key);
		if (!subs) return;
		for (const cb of subs) cb(value);
	};

	if (typeof window !== 'undefined') {
		window.addEventListener('storage', onStorage);
	}

	return {
		get(key: string): number | undefined {
			let raw: string | null;
			try {
				raw = localStorage.getItem(prefix + key);
			} catch {
				return undefined;
			}
			if (raw === null) return undefined;
			return clamp(Number(raw));
		},
		set(key: string, value: number) {
			schedule(key, value);
		},
		subscribe(key: string, cb: (value: number) => void): () => void {
			let subs = subscribers.get(key);
			if (!subs) {
				subs = new Set();
				subscribers.set(key, subs);
			}
			subs.add(cb);
			return () => {
				const s = subscribers.get(key);
				if (!s) return;
				s.delete(cb);
				if (s.size === 0) subscribers.delete(key);
			};
		},
	};
};

export const usePersist = (
	adapter: PersistAdapter | undefined,
	key: string | undefined,
	onRestore: (value: number) => void,
): ((value: number) => void) | undefined => {
	useEffect(() => {
		if (!adapter || !key) return;
		const restored = adapter.get(key);
		if (restored !== undefined) onRestore(restored);
		const unsubscribe = adapter.subscribe?.(key, onRestore);
		return unsubscribe;
	}, [adapter, key, onRestore]);

	if (!adapter || !key) return undefined;
	return (value: number) => adapter.set(key, value);
};
