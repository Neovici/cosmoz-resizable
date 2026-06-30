import { html } from '@pionjs/pion'
import '../demo/basic-demo'
import '../demo/vertical-demo'
import '../demo/multiple-panels'

export default {
	title: 'Components/ResizableView',
	tags: ['autodocs']
}

export const BasicDemo = () => html`<basic-demo></basic-demo>`

BasicDemo.parameters = {
	docs: {
		description: {
			story: 'Basic horizontal split demo using <cosmoz-resizable-view>.'
		}
	}
}

export const VerticalDemo = () => html`<vertical-demo></vertical-demo>`

VerticalDemo.parameters = {
	docs: {
		description: {
			story: 'Vertical split demo using <cosmoz-resizable-view>.'
		}
	}
}

export const MultiplePanels = () => html`<multiple-panels></multiple-panels>`

MultiplePanels.parameters = {
	docs: {
		description: {
			story: 'Demo with nested split views using <cosmoz-resizable-view>.'
		}
	}
}