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

	it('preserves calc() with internal spaces (whitespace-separated)', () => {
		expect(parseSizeAttr('calc(100% - 240px)')).to.deep.equal({
			previous: 'calc(100% - 240px)',
			next: undefined,
		});
	});

	it('preserves calc() with number as previous (whitespace-separated)', () => {
		expect(parseSizeAttr('0 calc(100% - 200px)')).to.deep.equal({
			previous: '0px',
			next: 'calc(100% - 200px)',
		});
	});

	it('preserves two calc() values (whitespace-separated)', () => {
		expect(parseSizeAttr('calc(50% - 100px) calc(25% + 50px)')).to.deep.equal({
			previous: 'calc(50% - 100px)',
			next: 'calc(25% + 50px)',
		});
	});

	it('preserves var() values (whitespace-separated)', () => {
		expect(parseSizeAttr('var(--my-var) 200px')).to.deep.equal({
			previous: 'var(--my-var)',
			next: '200px',
		});
	});
});
