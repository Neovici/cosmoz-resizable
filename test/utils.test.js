import { expect } from '@open-wc/testing';
import {
	applySizes,
	clampSplitPx,
	computeInitial,
	parseSize,
	resolveBounds,
	resolveSize,
} from '../src/utils';

describe('utils', () => {
	describe('parseSize', () => {
		it('parses bare number as absolute by default', () => {
			expect(parseSize(300)).to.deep.equal({ absolute: 300 });
		});

		it('parses bare number as ratio with bareAsRatio', () => {
			expect(parseSize(0.3, true)).to.deep.equal({ ratio: 0.3 });
		});

		it('parses px string', () => {
			expect(parseSize('300px')).to.deep.equal({ absolute: 300 });
		});

		it('parses % string as ratio', () => {
			expect(parseSize('30%')).to.deep.equal({ ratio: 0.3 });
		});

		it('parses ratio number with bareAsRatio', () => {
			expect(parseSize(0.3, true)).to.deep.equal({ ratio: 0.3 });
		});

		it('parses tuple [ratio, absolute]', () => {
			expect(parseSize([0.3, '300px'])).to.deep.equal({
				ratio: 0.3,
				absolute: 300,
			});
		});

		it('parses tuple with % ratio', () => {
			expect(parseSize(['30%', 300])).to.deep.equal({
				ratio: 0.3,
				absolute: 300,
			});
		});
	});

	describe('resolveSize', () => {
		it('resolves px', () => {
			expect(resolveSize(300, 1000, false)).to.equal(300);
		});

		it('resolves ratio to px with bareAsRatio', () => {
			expect(resolveSize(0.3, 1000, false, true)).to.equal(300);
		});

		it('resolves % to px', () => {
			expect(resolveSize('30%', 1000, false)).to.equal(300);
		});

		it('tuple cap takes min', () => {
			expect(resolveSize([0.5, '300px'], 1000, false)).to.equal(300);
			expect(resolveSize([0.2, '300px'], 1000, false)).to.equal(200);
		});

		it('tuple floor takes max', () => {
			expect(resolveSize([0.1, '200px'], 1000, true)).to.equal(200);
			expect(resolveSize([0.3, '200px'], 1000, true)).to.equal(300);
		});

		it('returns undefined for undefined', () => {
			expect(resolveSize(undefined, 1000, false)).to.be.undefined;
		});
	});

	describe('resolveBounds', () => {
		it('resolves single minSize to prevMin', () => {
			const b = resolveBounds(200, undefined, 1000);
			expect(b.prevMin).to.equal(200);
			expect(b.nextMin).to.be.undefined;
		});

		it('resolves per-panel minSize', () => {
			const b = resolveBounds([200, 150], undefined, 1000);
			expect(b.prevMin).to.equal(200);
			expect(b.nextMin).to.equal(150);
		});

		it('resolves per-panel maxSize', () => {
			const b = resolveBounds(
				undefined,
				[
					[0.7, '700px'],
					[0.7, 700],
				],
				1000,
			);
			expect(b.prevMax).to.equal(700);
			expect(b.nextMax).to.equal(700);
		});
	});

	describe('computeInitial', () => {
		it('clamps preferred to initial tuple cap', () => {
			const bounds = resolveBounds(undefined, undefined, 1000);
			expect(computeInitial([0.3, 0.7], bounds, 1000)).to.equal(300);
			expect(computeInitial([[0.3, '200px'], 0.7], bounds, 1000)).to.equal(200);
		});

		it('clamps to prevMin', () => {
			const bounds = resolveBounds(400, undefined, 1000);
			expect(computeInitial([0.3, 0.7], bounds, 1000)).to.equal(400);
		});

		it('clamps to prevMax', () => {
			const bounds = resolveBounds(undefined, 200, 1000);
			expect(computeInitial([0.3, 0.7], bounds, 1000)).to.equal(200);
		});
	});

	describe('clampSplitPx', () => {
		it('clamps to min', () => {
			const bounds = resolveBounds(200, undefined, 1000);
			expect(clampSplitPx(100, bounds)).to.equal(200);
		});

		it('clamps to max', () => {
			const bounds = resolveBounds(undefined, 300, 1000);
			expect(clampSplitPx(500, bounds)).to.equal(300);
		});
	});

	describe('applySizes', () => {
		it('sets flex-basis on both panels', () => {
			const prev = document.createElement('div');
			const next = document.createElement('div');
			const { ratios } = applySizes(prev, next, 300, 1000);
			expect(prev.style.flexBasis).to.equal('30%');
			expect(next.style.flexBasis).to.equal('70%');
			expect(ratios).to.deep.equal([0.3, 0.7]);
		});

		it('handles zero container', () => {
			const prev = document.createElement('div');
			const next = document.createElement('div');
			const { ratios } = applySizes(prev, next, 100, 0);
			expect(ratios).to.deep.equal([0, 1]);
		});
	});
});
