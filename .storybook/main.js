export default {
	stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)'],
	addons: ['@storybook/addon-docs', '@storybook/addon-vitest'],
	framework: {
		name: '@storybook/web-components-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
};
