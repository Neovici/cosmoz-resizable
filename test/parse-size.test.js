import { expect } from '@open-wc/testing';
import { parseSizeAttr } from '../src/parse-size';

describe('parseSizeAttr', () => {
	it('parses whitespace-separated values', () => {
		expect(parseSizeAttr('200 100')).to.deep.equal({
			previous: '200px',
			next: '100px',
		});
	});

	it('parses comma-separated values', () => {
		expect(parseSizeAttr('200, 100')).to.deep.equal({
			previous: '200px',
			next: '100px',
		});
	});

	it('single value applies to previous only', () => {
		expect(parseSizeAttr('200')).to.deep.equal({
			previous: '200px',
			next: undefined,
		});
	});

	it('preserves percentage units', () => {
		expect(parseSizeAttr('60%')).to.deep.equal({
			previous: '60%',
			next: undefined,
		});
	});

	it('preserves calc() with internal spaces (comma-separated)', () => {
		expect(parseSizeAttr('calc(100% - 200px), 300px')).to.deep.equal({
			previous: 'calc(100% - 200px)',
			next: '300px',
		});
	});

	it('preserves other CSS units (em, rem, vw, vh)', () => {
		expect(parseSizeAttr('2em 3rem')).to.deep.equal({
			previous: '2em',
			next: '3rem',
		});
	});

	it('returns empty for null', () => {
		expect(parseSizeAttr(null)).to.deep.equal({});
	});

	it('returns empty for empty string', () => {
		expect(parseSizeAttr('')).to.deep.equal({});
	});

	it('returns empty for whitespace-only string', () => {
		expect(parseSizeAttr('   ')).to.deep.equal({});
	});
});
