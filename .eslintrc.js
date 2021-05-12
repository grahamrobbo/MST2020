const OFF = 0,
	WARN = 1,
	ERROR = 2

module.exports = exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},

	globals: {
		sap: "readonly",
		jQuery: "readonly"
	},

	extends: "eslint:recommended",
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
			classes: true,
			defaultParams: true
		}
	},
	// See http://eslint.org/docs/rules/ for more details
	rules: {
		/* These rules recommended in SAPUI5 SDK documentation */
		//"block-scoped-var": WARN,
		"brace-style": [ERROR, "1tbs", { allowSingleLine: true }],
		"consistent-this": ERROR,
		//"global-strict": ERROR,
		strict: ERROR,
		"no-div-regex": ERROR,
		"no-floating-decimal": ERROR,
		"no-self-compare": ERROR,
		//"no-mixed-spaces-and-tabs": [ERROR, true],
		"no-nested-ternary": ERROR,
		//"no-unused-vars": [ERROR, {"vars":"all", "args":"none"}],
		radix: ERROR,
		//"space-after-keywords": [ERROR, "always"],
		"keyword-spacing": [ERROR],
		//"space-unary-word-ops": ERROR,
		"space-unary-ops": ERROR,
		"wrap-iife": [ERROR, "any"],

		camelcase: WARN,
		"consistent-return": WARN,
		"max-nested-callbacks": [WARN, 3],
		"new-cap": WARN,
		"no-extra-boolean-cast": WARN,
		"no-lonely-if": WARN,
		"no-new": WARN,
		//"no-new-wrappers": WARN,
		//"no-redeclare": WARN,
		"no-unused-expressions": WARN,
		"no-use-before-define": [WARN, "nofunc"],
		"no-warning-comments": WARN,
		//strict: WARN,
		"valid-jsdoc": [
			WARN,
			{
				requireReturn: false
			}
		],
		"default-case": WARN,

		"dot-notation": OFF,
		"eol-last": OFF,
		//"eqeqeq": OFF,
		"no-trailing-spaces": OFF,
		"no-underscore-dangle": OFF,
		quotes: OFF,
		/*              Possible Errors             */
		"no-cond-assign": [ERROR, "except-parens"],
		"no-debugger": [ERROR],
		"no-compare-neg-zero": [ERROR],
		"no-console": [OFF, { allow: [WARN, ERROR] }],
		"no-constant-condition": [ERROR],
		"no-control-regex": [ERROR],
		"no-dupe-args": [ERROR],
		"no-dupe-keys": [ERROR],
		"no-duplicate-case": [ERROR],
		"no-empty-character-class": [ERROR],
		"no-ex-assign": [ERROR],
		"no-extra-semi": [ERROR],
		"no-func-assign": [ERROR],
		"no-inner-declarations": [ERROR],
		"no-invalid-regexp": [ERROR],
		"no-irregular-whitespace": [ERROR],
		"no-obj-calls": [ERROR],
		"no-regex-spaces": [ERROR],
		"no-sparse-arrays": [ERROR],
		"no-unreachable": [ERROR],
		"no-unsafe-finally": [ERROR],
		"no-unsafe-negation": [ERROR],
		"use-isnan": [ERROR],
		"valid-typeof": [ERROR],

		/*              Best Practices              */
		curly: [ERROR, "multi"],
		eqeqeq: [ERROR, "always"],
		"guard-for-in": [ERROR],
		"no-caller": [ERROR],
		complexity: [ERROR, 7],
		"no-eq-null": [ERROR],
		"no-eval": [ERROR],
		"no-new-func": [ERROR],
		"no-new-wrappers": [ERROR],
		"no-new-object": [ERROR],
		"block-scoped-var": [ERROR],
		"no-iterator": [ERROR],
		"no-loop-func": [ERROR],
		"no-multi-str": [ERROR],
		"no-proto": [ERROR],
		"no-script-url": [ERROR],
		"no-case-declarations": [ERROR],
		"no-empty-pattern": [ERROR],
		"no-fallthrough": [ERROR],
		"no-global-assign": [ERROR],
		"no-octal": [ERROR],
		"no-redeclare": [ERROR],
		"no-self-assign": [ERROR],
		"no-unused-labels": [ERROR],
		"no-useless-escape": [ERROR],

		/*              Variables                   */
		"no-undef": [ERROR],
		"no-unused-vars": [ERROR],
		"no-shadow": [
			ERROR,
			{
				allow: [
					"element",
					"key",
					"i",
					"errorFlag",
					"window",
					"currentView",
					"recentView",
					"slideIndex",
					"type"
				]
			}
		],
		"no-delete-var": [ERROR],
		/*              Stylistic Issues            */
		"max-params": [ERROR, 5],
		"max-depth": [ERROR, 4],
		"max-statements": [ERROR, 20],
		semi: [ERROR, "never"],
		/* "linebreak-style": [ERROR, "unix"], */
		"comma-style": [ERROR, "last"],
		"no-mixed-spaces-and-tabs": [ERROR],
		/*              ECMAScript 6                */
		"constructor-super": [ERROR],
		"no-class-assign": [ERROR],
		"no-const-assign": [ERROR],
		"no-dupe-class-members": [ERROR],
		"no-new-symbol": [ERROR],
		"no-this-before-super": [ERROR],
		"require-yield": [ERROR]
		// Suggestions from vscode docs
		// https://github.com/Microsoft/vscode-docs/blob/master/docs/getstarted/tips-and-tricks.md#eslintrcjson
		// "no-const-assign": WARN,
		// "no-extra-semi": OFF,
		// "semi": OFF,
		// "no-fallthrough": OFF,
		// "no-empty": OFF,
		// "no-mixed-spaces-and-tabs": OFF,
		// "no-redeclare": OFF,
		// "no-this-before-super": WARN,
		// "no-undef": WARN,
		// "no-unreachable": WARN,
		// "no-use-before-define": OFF,
		// "constructor-super": WARN,
		// "curly": OFF,
		// "eqeqeq": OFF,
		// "func-names": OFF,
		// "valid-typeof": WARN
	}
}
