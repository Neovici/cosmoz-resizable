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

export const BasicDemo: Story = {
	render: () =>
		html`<cosmoz-resizable-view
			style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
			.initialSizes=${[0.5, 0.5]}
		>
			<div
				id="prev"
				style="background:#ff6b6b; display:flex; align-items:center; justify-content:center; color:white;"
			>
				<h3>Left Panel</h3>
			</div>
			<div
				id="next"
				style="background:#4ecdc4; display:flex; align-items:center; justify-content:center; color:white;"
			>
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
			'Handle is rendered in shadow DOM between named slots',
			async () => {
				await waitFor(() => {
					const handle = canvasElement.shadowRoot?.querySelector(
						'cosmoz-resize-handle',
					);
					expect(handle).not.toBeNull();
				});
			},
		);

		await step('Panels get initial flex-basis from initialSizes', async () => {
			await waitFor(() => {
				const prev = canvasElement.querySelector('#prev') as HTMLElement;
				expect(prev.style.flexBasis).toBe('50%');
			});
		});
	},
};

export const VerticalDemo: Story = {
	render: () =>
		html`<cosmoz-resizable-view
			style="display:flex; flex-direction:column; width:600px; height:400px; border:1px solid #ccc;"
			direction="vertical"
			.initialSizes=${[0.5, 0.5]}
		>
			<div
				style="background:#ff6b6b; display:flex; align-items:center; justify-content:center; color:white; padding:20px;"
			>
				<h3>Top Panel</h3>
			</div>
			<div
				style="background:#4ecdc4; display:flex; align-items:center; justify-content:center; color:white; padding:20px;"
			>
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
			.initialSizes=${[0.5, 0.5]}
		>
			<div
				style="background:#ff6b6b; display:flex; align-items:center; justify-content:center; color:white;"
			>
				<h3>Left Panel</h3>
			</div>
			<cosmoz-resizable-view direction="vertical" .initialSizes=${[0.5, 0.5]}>
				<div
					style="background:#ffa726; display:flex; align-items:center; justify-content:center; color:white; padding:10px;"
				>
					<h3>Top Panel</h3>
				</div>
				<div
					style="background:#45b7d1; display:flex; align-items:center; justify-content:center; color:white; padding:10px;"
				>
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
