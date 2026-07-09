const addUnit = (value: string): string => {
	const trimmed = value.trim();
	if (trimmed === '') return trimmed;
	const n = Number(trimmed);
	return Number.isNaN(n) ? trimmed : `${n}px`;
};

export const parseSizeAttr = (
	raw: string | null,
): { previous?: string; next?: string } => {
	if (raw == null || raw.trim() === '') return {};
	const parts = raw.includes(',')
		? raw.split(/,\s*/u)
		: (raw.match(/(?:[^\s()]+\([^)]*\)|\([^)]*\)|[^\s]+)/gu) ?? [raw]);
	return {
		previous: addUnit(parts[0]),
		next: parts.length > 1 ? addUnit(parts[1]) : undefined,
	};
};
