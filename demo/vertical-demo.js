import { component, html, useState } from '@pionjs/pion';
import '../src/resizable-view';

const VerticalDemo = () => {
	const [ratios, setRatios] = useState([0.5, 0.5]);

	return html`
		<style>
			.container {
				height: 600px;
				width: 600px;
				border: 1px solid #ccc;
			}

			.panel {
				background: #f5f5f5;
				padding: 20px;
				border: 1px solid #ddd;
				overflow: auto;
				display: flex;
				align-items: center;
				justify-content: center;
				font-family: Arial, sans-serif;
			}

			.top-panel {
				background: linear-gradient(45deg, #ff6b6b, #ffa726);
				color: white;
			}

			.bottom-panel {
				background: linear-gradient(45deg, #4ecdc4, #45b7d1);
				color: white;
			}

			.stats {
				margin: 20px;
				padding: 10px;
				background: #f9f9f9;
				border-radius: 4px;
				font-family: monospace;
			}

			h1 {
				margin: 20px;
				font-family: Arial, sans-serif;
			}
		</style>

		<h1>ResizableView Demo - Vertical Split</h1>

		<div class="stats">
			<p>Top Panel: ${Math.round(ratios[0] * 100)}%</p>
			<p>Bottom Panel: ${Math.round(ratios[1] * 100)}%</p>
		</div>

		<cosmoz-resizable-view
			class="container"
			direction="vertical"
			.initialSizes=${[0.5, 0.5]}
			@resize-panels=${(e) => setRatios(e.detail.ratios)}
		>
			<div class="panel top-panel">
				<h3>Top Panel</h3>
			</div>
			<div class="panel bottom-panel">
				<h3>Bottom Panel</h3>
			</div>
		</cosmoz-resizable-view>
	`;
};

customElements.define(
	'vertical-demo',
	component(VerticalDemo, { useShadowDOM: true }),
);
