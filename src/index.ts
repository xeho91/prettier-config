import type { Options } from "prettier";

// https://prettier.io/docs/en/options.html
const config: Options = {
	printWidth: 85,

	tabWidth: 4,
	useTabs: true,

	singleQuote: false,
	quoteProps: "consistent",

	semi: true,
	trailingComma: "all",

	bracketSpacing: true,
	arrowParens: "always",

	rangeStart: 0,
	rangeEnd: Infinity,

	endOfLine: "lf",

	// @ts-ignore
	overrides: [
		{
			files: ["*.yaml", "*.yml"],
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
		{
			files: "*.svelte",
			options: {
				parser: "svelte",
			},
		},
	],

	plugins: ["prettier-plugin-svelte"],

	// https://github.com/sveltejs/prettier-plugin-svelte
	svelteSortOrder: "options-scripts-markup-styles",
	svelteStrictMode: false,
	svelteBracketNewLine: true,
	svelteAllowShorthand: true,
	svelteIndentScriptAndStyle: true,

};

module.exports = config;
