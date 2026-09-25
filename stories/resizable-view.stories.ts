import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/resizable-view';
import '../src/resize-handle';

const meta: Meta = {
	title: 'Components/ResizableView',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

const panelStyle = (bg: string) =>
	`background:${bg}; display:flex; align-items:center; justify-content:center; color:white;`;

export const BasicDemo: Story = {
	render: () =>
		html`<cosmoz-resizable-view
			style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
			initial-size="50%"
		>
			<div slot="previous" id="prev" style="${panelStyle('#ff6b6b')}">
				<h3>Left Panel</h3>
			</div>
			<div slot="next" id="next" style="${panelStyle('#4ecdc4')}">
				<h3>Right Panel</h3>
			</div>
		</cosmoz-resizable-view>`,
	async play({ canvasElement, step }) {
		await step('Renders both panels', async () => {
			await waitFor(() => {
				const prev = canvasElement.querySelector('#prev');
				expect(prev).not.toBeNull();
			});
			expect(canvasElement.querySelector('#next')).not.toBeNull();
		});

		await step(
			'Handle is rendered in shadow DOM between panel wrappers',
			async () => {
				await waitFor(() => {
					const handle = canvasElement.shadowRoot?.querySelector(
						'cosmoz-resize-handle',
					);
					expect(handle).not.toBeNull();
				});
			},
		);
	},
};

export const VerticalDemo: Story = {
	render: () =>
		html`<cosmoz-resizable-view
			style="display:flex; flex-direction:column; width:600px; height:400px; border:1px solid #ccc;"
			direction="vertical"
			initial-size="50%"
		>
			<div slot="previous" style="${panelStyle('#ff6b6b')} padding:20px;">
				<h3>Top Panel</h3>
			</div>
			<div slot="next" style="${panelStyle('#4ecdc4')} padding:20px;">
				<h3>Bottom Panel</h3>
			</div>
		</cosmoz-resizable-view>`,
	async play({ canvasElement, step }) {
		await step('Renders with vertical direction', async () => {
			const el = canvasElement.querySelector(
				'cosmoz-resizable-view',
			) as HTMLElement;
			await waitFor(() => {
				expect(el.getAttribute('data-direction')).toBe('vertical');
			});
			await waitFor(() => {
				const handle = el.shadowRoot?.querySelector('cosmoz-resize-handle');
				expect(handle?.getAttribute('data-direction')).toBe('vertical');
			});
		});
	},
};

export const MultiplePanels: Story = {
	render: () =>
		html`<cosmoz-resizable-view
			style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
			initial-size="50%"
		>
			<div slot="previous" style="${panelStyle('#ff6b6b')}">
				<h3>Left Panel</h3>
			</div>
			<cosmoz-resizable-view
				slot="next"
				direction="vertical"
				style="display:flex;"
				initial-size="50%"
			>
				<div slot="previous" style="${panelStyle('#ffa726')} padding:10px;">
					<h3>Top Panel</h3>
				</div>
				<div slot="next" style="${panelStyle('#45b7d1')} padding:10px;">
					<h3>Bottom Panel</h3>
				</div>
			</cosmoz-resizable-view>
		</cosmoz-resizable-view>`,
	async play({ canvasElement, step }) {
		await step('Renders nested resizable views', async () => {
			await waitFor(() => {
				const outer = canvasElement.shadowRoot?.querySelector(
					'cosmoz-resize-handle',
				);
				expect(outer).not.toBeNull();
				const inner = canvasElement.querySelector(
					'cosmoz-resizable-view cosmoz-resizable-view',
				) as HTMLElement | null;
				expect(inner).not.toBeNull();
				expect(
					inner?.shadowRoot?.querySelector('cosmoz-resize-handle'),
				).not.toBeNull();
			});
		});
	},
};

export const ListDetailsSplit: Story = {
	render: () =>
		html`<cosmoz-resizable-view
			style="display:flex; width:800px; height:300px; border:1px solid #ccc;"
			initial-size="25%"
			min-size="300"
		>
			<div id="list" slot="previous" style="${panelStyle('#ff6b6b')}">
				<h3>List (25% or 300px min)</h3>
			</div>
			<div id="details" slot="next" style="${panelStyle('#4ecdc4')}">
				<h3>Details</h3>
			</div>
		</cosmoz-resizable-view>`,
	async play({ canvasElement, step }) {
		await step('Previous panel respects min-size', async () => {
			await waitFor(() => {
				const el = canvasElement.querySelector(
					'cosmoz-resizable-view',
				) as HTMLElement;
				const panel = el.shadowRoot!.querySelector(
					'.panel[data-panel=\'previous\']',
				) as HTMLElement;
				expect(panel.offsetWidth).toBeGreaterThanOrEqual(300);
			});
		});
	},
};

export const CappedInitialSize: Story = {
	render: () =>
		html`<cosmoz-resizable-view
			style="display:flex; width:1000px; height:300px; border:1px solid #ccc;"
			initial-size="360px"
			max-size="360"
		>
			<div id="list" slot="previous" style="${panelStyle('#ff6b6b')}">
				<h3>List (capped at 360px)</h3>
			</div>
			<div id="details" slot="next" style="${panelStyle('#4ecdc4')}">
				<h3>Details</h3>
			</div>
		</cosmoz-resizable-view>`,
	async play({ canvasElement, step }) {
		await step('Previous panel capped at 360px', async () => {
			const el = canvasElement.querySelector(
				'cosmoz-resizable-view',
			) as HTMLElement;
			const handle = el.shadowRoot!.querySelector(
				'cosmoz-resize-handle',
			) as HTMLElement;
			const rect = handle.getBoundingClientRect();
			const fire = (phase: string, x: number, y: number) =>
				handle.dispatchEvent(
					new CustomEvent('resize-handle', {
						detail: { phase, mousePosition: { x, y } },
						bubbles: true,
					}),
				);
			fire('start', rect.left, rect.top);
			fire('move', 900, rect.top);
			await waitFor(() => {
				const panel = el.shadowRoot!.querySelector(
					'.panel[data-panel=\'previous\']',
				) as HTMLElement;
				expect(panel.offsetWidth).toBeLessThanOrEqual(360);
			});
		});
	},
};
