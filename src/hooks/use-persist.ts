import { useEffect, useRef } from '@pionjs/pion';
import { PersistAdapter, PersistedState } from '../types';

const isPersistedState = (v: unknown): v is PersistedState => {
	if (typeof v !== 'object' || v == null) return false;
	const obj = v as Record<string, unknown>;
	return typeof obj.px === 'number' && obj.px >= 0 && !Number.isNaN(obj.px);
};

const parseState = (raw: string): PersistedState | undefined => {
	try {
		const parsed = JSON.parse(raw);
		if (isPersistedState(parsed)) return parsed;
	} catch {
		// ignore unparseable values
	}
	return undefined;
};

export const localStorageAdapter = (
	prefix = 'cosmoz-resizable-view:',
): PersistAdapter & { destroy: () => void } => {
	const subscribers = new Map<string, Set<(value: PersistedState) => void>>();
	let writeTimer: ReturnType<typeof setTimeout> | undefined;
	const pending = new Map<string, PersistedState>();

	const flush = () => {
		writeTimer = undefined;
		for (const [key, value] of pending) {
			try {
				localStorage.setItem(prefix + key, JSON.stringify(value));
			} catch {
				// storage full or unavailable — ignore
			}
		}
		pending.clear();
	};

	const schedule = (key: string, value: PersistedState) => {
		pending.set(key, value);
		if (writeTimer == null) {
			writeTimer = setTimeout(flush, 100);
		}
	};

	const onStorage = (e: StorageEvent) => {
		if (e.key == null || !e.key.startsWith(prefix) || e.newValue == null) {
			return;
		}
		const key = e.key.slice(prefix.length);
		const value = parseState(e.newValue);
		if (value == null) return;
		const subs = subscribers.get(key);
		if (!subs) return;
		for (const cb of subs) cb(value);
	};

	if (typeof window !== 'undefined') {
		window.addEventListener('storage', onStorage);
	}

	return {
		get(key: string): PersistedState | undefined {
			let raw: string | null;
			try {
				raw = localStorage.getItem(prefix + key);
			} catch {
				return undefined;
			}
			if (raw == null) return undefined;
			return parseState(raw);
		},
		set(key: string, value: PersistedState) {
			schedule(key, value);
		},
		subscribe(key: string, cb: (value: PersistedState) => void): () => void {
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
		destroy() {
			if (typeof window !== 'undefined') {
				window.removeEventListener('storage', onStorage);
			}
			if (writeTimer != null) {
				clearTimeout(writeTimer);
				flush();
			}
		},
	};
};

export const usePersist = (
	adapter: PersistAdapter | undefined,
	key: string | undefined,
	onRestore: (value: PersistedState) => void,
): ((value: PersistedState) => void) | undefined => {
	const onRestoreRef = useRef(onRestore);
	onRestoreRef.current = onRestore;

	useEffect(() => {
		if (!adapter || !key) return;
		const restored = adapter.get(key);
		if (restored != null) onRestoreRef.current?.(restored);
		const unsubscribe = adapter.subscribe?.(key, (v) =>
			onRestoreRef.current?.(v),
		);
		return () => {
			unsubscribe?.();
			(adapter as PersistAdapter & { destroy?: () => void }).destroy?.();
		};
	}, [adapter, key]);

	if (!adapter || !key) return undefined;
	return (value: PersistedState) => adapter.set(key, value);
};
