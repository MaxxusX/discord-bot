import js from "@eslint/js";
import stylisticjs from "@stylistic/eslint-plugin-js";
import globals from "globals";

export default [
	js.configs.recommended,
	{
		plugins: {
			"@stylistic/js": stylisticjs,
		},
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				...globals.node,
				...globals.es2021,
			},
		},
		files: ["**/*.js"],
		ignores: ["/node_modules", "/.git"],
		rules: {
			strict: [
				"error",
				"global",
			],
			"@stylistic/js/quotes": [
				"error",
				"double",
			],
			"@stylistic/js/quote-props": [
				"error",
				"as-needed",
			],
			"@stylistic/js/indent": [
				"error",
				"tab",
			],
			"@stylistic/js/linebreak-style": [
				"error",
				"windows",
			],
			"@stylistic/js/semi": [
				"error",
				"always",
				{
					omitLastInOneLineBlock: false,
					omitLastInOneLineClassBody: false,
				},
			],
			"@stylistic/js/no-extra-semi": "off",
			"no-extra-semi": "off",
		},
	},
];