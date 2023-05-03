module.exports = {
	env: {
		node: true,
		browser: true
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
	],
	rules: {
		'vue/html-indent': ['error', 'tab'],
		'vue/html-quotes': ['error', 'double'],
		'vue/max-attributes-per-line': 'off',
		'vue/multi-word-component-names': 'off',
		'vue/no-unused-vars': 'error',
		'object-curly-spacing': ['error', 'always'],
		'quotes': ['error', 'single'],
		'space-before-blocks': ['error', 'always'],
	}
}