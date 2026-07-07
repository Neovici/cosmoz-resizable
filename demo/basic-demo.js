import { component, html, useState } from '@pionjs/pion';
import '../src/resizable-view';

const BasicDemo = () => {
	const [ratios, setRatios] = useState([0.5, 0.5]);

	return html`
		<style>
			.container {
				height: 400px;
				width: 600px;
				border: 1px solid #ccc;
				margin: 20px;
			}

			.panel {
				background: #f5f5f5;
				border: 1px solid #ddd;
				padding: 20px;
				overflow: auto;
				display: flex;
				align-items: center;
				justify-content: center;
				font-family: Arial, sans-serif;
			}

			.left-panel {
				background: linear-gradient(45deg, #ff6b6b, #ffa726);
				color: white;
			}

			.right-panel {
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

		<h1>ResizableView Demo - Horizontal Split</h1>

		<div class="stats">
			<p>Left Panel: ${Math.round(ratios[0] * 100)}%</p>
			<p>Right Panel: ${Math.round(ratios[1] * 100)}%</p>
		</div>

		<cosmoz-resizable-view
			class="container"
			.initialSizes=${[0.5, 0.5]}
			@resize-panels=${(e) => setRatios(e.detail.ratios)}
		>
			<div class="panel left-panel">
				<h3>Left Panel</h3>
			</div>
			<div class="panel right-panel">
				<h3>Right Panel</h3>
			</div>
		</cosmoz-resizable-view>
	`;
};

customElements.define(
	'basic-demo',
	component(BasicDemo, { useShadowDOM: true }),
);
