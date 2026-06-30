import { component, html, useState } from '@pionjs/pion'
import '../src/resizable-view'

const MultiplePanels = () => {
	const [outer, setOuter] = useState([0.5, 0.5])
	const [inner, setInner] = useState([0.5, 0.5])

	return html`
		<style>
			.container {
				height: 400px;
				width: 600px;
				border: 1px solid #ccc;
				margin: 0 20px;
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

			.top-panel {
				background: linear-gradient(45deg, #ff6b6b, #ffa726);
				color: white;
				padding: 10px 0;
			}

			.bottom-panel {
				background: linear-gradient(45deg, #4ecdc4, #45b7d1);
				color: white;
				padding: 10px 0;
			}

			h1 {
				margin: 20px;
				font-family: Arial, sans-serif;
			}
		</style>

		<h1>ResizableView Demo - Multiple Splits</h1>

		<cosmoz-resizable-view
			class="container"
			.initialSizes=${[0.5, 0.5]}
			@split-resize=${(e) => setOuter(e.detail.ratios)}
		>
			<div class="panel left-panel">
				<h3>Left Panel</h3>
			</div>
			<cosmoz-resizable-view
				direction="vertical"
				.initialSizes=${[0.5, 0.5]}
				@split-resize=${(e) => setInner(e.detail.ratios)}
			>
				<div class="panel top-panel">
					<h3>Top Panel</h3>
				</div>
				<div class="panel bottom-panel">
					<h3>Bottom Panel</h3>
				</div>
			</cosmoz-resizable-view>
		</cosmoz-resizable-view>

		<div class="stats" style="margin: 20px; font-family: monospace;">
			<p>Outer: ${Math.round(outer[0] * 100)}% / ${Math.round(outer[1] * 100)}%</p>
			<p>Inner: ${Math.round(inner[0] * 100)}% / ${Math.round(inner[1] * 100)}%</p>
		</div>
	`
}

customElements.define(
	'multiple-panels',
	component(MultiplePanels, { useShadowDOM: true })
)