import { MousePosition, ParsedSize, SizeSpec, Ratio, AbsoluteSize } from './types'

export const getMousePosition = (e: MouseEvent | TouchEvent): MousePosition => {
	if (e instanceof MouseEvent) {
		return { x: e.clientX, y: e.clientY }
	} else if (e.touches && e.touches.length > 0) {
		return { x: e.touches[0].clientX, y: e.touches[0].clientY }
	}
	return { x: 0, y: 0 }
}

export const toRatio = (pixel: number, containerSize: number): number =>
	containerSize > 0 ? pixel / containerSize : 0

export const toPixel = (ratio: number, containerSize: number): number =>
	ratio * containerSize

const RATIO_RE = /^(\d+(?:\.\d+)?)%$/u
const PX_RE = /^(\d+(?:\.\d+)?)px$/u
const VW_RE = /^(\d+(?:\.\d+)?)vw$/u
const VH_RE = /^(\d+(?:\.\d+)?)vh$/u

const viewportPx = (value: string): number | undefined => {
	const vw = value.match(VW_RE)
	if (vw) return (Number(vw[1]) / 100) * window.innerWidth
	const vh = value.match(VH_RE)
	if (vh) return (Number(vh[1]) / 100) * window.innerHeight
	const px = value.match(PX_RE)
	if (px) return Number(px[1])
	return undefined
}

const parseRatio = (value: Ratio): number | undefined => {
	if (typeof value === 'number') return value
	const m = value.match(RATIO_RE)
	return m ? Number(m[1]) / 100 : undefined
}

const parseAbsolute = (value: number | string): number | undefined => {
	if (typeof value === 'number') return value
	return viewportPx(value)
}

export const parseSize = (spec: SizeSpec, bareAsRatio = false): ParsedSize => {
	if (Array.isArray(spec)) {
		return {
			ratio: parseRatio(spec[0] as Ratio),
			absolute: parseAbsolute(spec[1] as number | string),
		}
	}
	if (typeof spec === 'number') {
		return bareAsRatio ? { ratio: spec } : { absolute: spec }
	}
	const ratio = parseRatio(spec as Ratio)
	if (ratio !== undefined) return { ratio }
	return { absolute: viewportPx(spec as string) }
}

const combine = (
	parsed: ParsedSize,
	containerSize: number,
	isFloor: boolean
): number | undefined => {
	const { ratio, absolute } = parsed
	const ratioPx = ratio !== undefined ? ratio * containerSize : undefined
	if (ratioPx !== undefined && absolute !== undefined) {
		return isFloor ? Math.max(ratioPx, absolute) : Math.min(ratioPx, absolute)
	}
	return ratioPx ?? absolute
}

export const resolveSize = (
	spec: SizeSpec | undefined,
	containerSize: number,
	isFloor: boolean,
	bareAsRatio = false
): number | undefined => {
	if (spec === undefined) return undefined
	const parsed = parseSize(spec, bareAsRatio)
	return combine(parsed, containerSize, isFloor)
}

const isAbsoluteLike = (v: unknown, bareAsRatio: boolean): boolean =>
	typeof v === 'string'
		? PX_RE.test(v) || VW_RE.test(v) || VH_RE.test(v)
		: typeof v === 'number' && (bareAsRatio ? v > 1 : true)

const isRatioLike = (v: unknown): boolean =>
	(typeof v === 'number' && v >= 0 && v <= 1) ||
	(typeof v === 'string' && RATIO_RE.test(v))

export const isPerPanel = (
	spec: SizeSpec | [SizeSpec, SizeSpec],
	bareAsRatio = false
): boolean => {
	if (!Array.isArray(spec)) return false
	const [first, second] = spec
	if (Array.isArray(first) || Array.isArray(second)) return true
	if (isRatioLike(first) && isAbsoluteLike(second, bareAsRatio)) return false
	return true
}

const resolvePanelBounds = (
	spec: SizeSpec | [SizeSpec, SizeSpec] | undefined,
	containerSize: number,
	isFloor: boolean,
	bareAsRatio = false
): [number | undefined, number | undefined] => {
	if (spec === undefined) return [undefined, undefined]
	if (isPerPanel(spec, bareAsRatio)) {
		const [prev, next] = spec as [SizeSpec, SizeSpec]
		return [
			resolveSize(prev, containerSize, isFloor, bareAsRatio),
			resolveSize(next, containerSize, isFloor, bareAsRatio),
		]
	}
	return [
		resolveSize(spec as SizeSpec, containerSize, isFloor, bareAsRatio),
		undefined,
	]
}

export const clampSplit = (
	splitPx: number,
	minPx: number | undefined,
	maxPx: number | undefined
): number => {
	let s = splitPx
	if (minPx !== undefined) s = Math.max(s, minPx)
	if (maxPx !== undefined) s = Math.min(s, maxPx)
	return Math.max(0, s)
}

export const resolveBounds = (
	minSize: SizeSpec | [SizeSpec, SizeSpec] | undefined,
	maxSize: SizeSpec | [SizeSpec, SizeSpec] | undefined,
	containerSize: number
): {
	prevMin: number | undefined
	prevMax: number | undefined
	nextMin: number | undefined
	nextMax: number | undefined
} => {
	const [pMin, nMin] = resolvePanelBounds(minSize, containerSize, true)
	const [pMax, nMax] = resolvePanelBounds(maxSize, containerSize, false)
	return {
		prevMin: pMin,
		prevMax: pMax,
		nextMin: nMin,
		nextMax: nMax,
	}
}

export const applySizes = (
	previous: HTMLElement,
	next: HTMLElement,
	prevPx: number,
	containerSize: number
): { ratios: [number, number] } => {
	const prevRatio = containerSize > 0 ? prevPx / containerSize : 0
	const nextRatio = 1 - prevRatio
	previous.style.flexBasis = `${prevRatio * 100}%`
	next.style.flexBasis = `${nextRatio * 100}%`
	return { ratios: [prevRatio, nextRatio] }
}

const parseRatioVal = (v: SizeSpec): number => {
	if (Array.isArray(v)) {
		const r = v[0] as Ratio
		return typeof r === 'number' ? r : Number(r.match(RATIO_RE)?.[1] ?? 50) / 100
	}
	if (typeof v === 'number') return v
	const m = (v as string).match(RATIO_RE)
	return m ? Number(m[1]) / 100 : 0.5
}

const parseAbsolutePx = (v: string | number): number => {
	if (typeof v === 'number') return v
	return viewportPx(v) ?? 0
}

export const computeInitial = (
	initialSizes: [SizeSpec, SizeSpec],
	bounds: ReturnType<typeof resolveBounds>,
	containerSize: number
): number => {
	const prevSpec = initialSizes[0]
	let preferred: number
	if (Array.isArray(prevSpec)) {
		const [ratio, abs] = prevSpec as [Ratio, AbsoluteSize]
		const ratioVal =
			typeof ratio === 'number' ? ratio : Number(ratio.match(RATIO_RE)?.[1] ?? 50) / 100
		preferred = Math.min(ratioVal * containerSize, parseAbsolutePx(abs))
	} else {
		preferred = parseRatioVal(prevSpec) * containerSize
	}
	let lo = 0
	let hi = containerSize
	if (bounds.prevMin !== undefined) lo = Math.max(lo, bounds.prevMin)
	if (bounds.prevMax !== undefined) hi = Math.min(hi, bounds.prevMax)
	if (bounds.nextMax !== undefined) lo = Math.max(lo, containerSize - bounds.nextMax)
	if (bounds.nextMin !== undefined) hi = Math.min(hi, containerSize - bounds.nextMin)
	if (hi < lo) return bounds.prevMax ?? hi
	return Math.max(lo, Math.min(preferred, hi))
}

export const clampSplitPx = (
	splitPx: number,
	bounds: ReturnType<typeof resolveBounds>
): number => {
	let s = splitPx
	if (bounds.prevMin !== undefined) s = Math.max(s, bounds.prevMin)
	if (bounds.prevMax !== undefined) s = Math.min(s, bounds.prevMax)
	return Math.max(0, s)
}

export { resolvePanelBounds }