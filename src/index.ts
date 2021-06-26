/* eslint-disable unicorn/prefer-module, @typescript-eslint/no-var-requires */
import merge from "deepmerge";

function hasModule(name: string) {
	try {
		require.resolve(name);
		return true;
	} catch {
		return false;
	}
}

const configurations = [
	require("./global").default,
	hasModule("svelte") && require("./extensions/svelte").default,
	require("./extensions/yaml").default,
].filter(Boolean);

module.exports = merge.all(configurations);
