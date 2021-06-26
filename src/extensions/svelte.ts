// https://github.com/sveltejs/prettier-plugin-svelte
const config = {
	plugins: ["prettier-plugin-svelte"],

	overrides: [{
		files: "*.svelte",
		options: {
			parser: "svelte",
		},
	}],

	svelteSortOrder: "options-scripts-markup-styles",
	svelteStrictMode: false,
	svelteBracketNewLine: true,
	svelteAllowShorthand: true,
	svelteIndentScriptAndStyle: true,
};

export default config;
