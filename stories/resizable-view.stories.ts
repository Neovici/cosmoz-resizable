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

export const ReversedDemo: Story = {
	render: () =>
		html`<cosmoz-resizable-view
			style="display:flex; width:600px; height:300px;"
			reversed
			initial-size="50%"
		>
			<div slot="previous" id="prev" style="${panelStyle('#ff6b6b')}">
				<h3>Previous (visually right)</h3>
			</div>
			<div slot="next" id="next" style="${panelStyle('#4ecdc4')}">
				<h3>Next (visually left)</h3>
			</div>
		</cosmoz-resizable-view>`,
	async play({ canvasElement, step }) {
		// Typed via the HTMLElementTagNameMap augmentation.
		const getView = () =>
			canvasElement.querySelector('cosmoz-resizable-view')!;
		const getPanel = () =>
			getView().shadowRoot!.querySelector(
				'.panel[data-panel=\'previous\']',
			) as HTMLElement;
		const getHandle = () =>
			getView().shadowRoot!.querySelector(
				'cosmoz-resize-handle',
			) as HTMLElement;
		// Retry-friendly drag: firing inside waitFor tolerates the async
		// handler swap after toggling `reversed`.
		const dragTo = async (x: number, width: number) => {
			const rect = getView().getBoundingClientRect();
			await waitFor(() => {
				getHandle().dispatchEvent(
					new CustomEvent('resize-handle', {
						detail: { phase: 'start', mousePosition: { x, y: rect.top } },
						bubbles: true,
					}),
				);
				getHandle().dispatchEvent(
					new CustomEvent('resize-handle', {
						detail: { phase: 'move', mousePosition: { x, y: rect.top } },
						bubbles: true,
					}),
				);
				expect(getPanel().getBoundingClientRect().width).toBe(width);
			});
		};

		await step('Renders with reversed visual order', async () => {
			await waitFor(() => {
				const el = getView();
				expect(el.hasAttribute('reversed')).toBe(true);
				expect(el.reversed).toBe(true);
				const prev = getPanel();
				expect(prev.getBoundingClientRect().right).toBe(
					el.getBoundingClientRect().right,
				);
			});
		});

		await step(
			'Dragging resizes the previous panel from the right edge',
			async () => {
				await dragTo(getView().getBoundingClientRect().left + 150, 450);
			},
		);

		await step('Removing reversed restores left-edge dragging', async () => {
			const el = getView();
			el.removeAttribute('reversed');
			await waitFor(() => {
				expect(getComputedStyle(el).flexDirection).toBe('row');
				expect(el.reversed).toBeFalsy();
				expect(getPanel().getBoundingClientRect().left).toBe(
					el.getBoundingClientRect().left,
				);
			});
			await dragTo(getView().getBoundingClientRect().left + 200, 200);
		});

		await step('Re-adding reversed resumes right-edge dragging', async () => {
			const el = getView();
			el.setAttribute('reversed', '');
			await waitFor(() => {
				expect(getComputedStyle(el).flexDirection).toBe('row-reverse');
				expect(el.reversed).toBe(true);
				expect(getPanel().getBoundingClientRect().right).toBe(
					el.getBoundingClientRect().right,
				);
			});
			await dragTo(getView().getBoundingClientRect().left + 100, 500);
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
