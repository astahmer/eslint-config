// @ts-check
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
    root: true,
    parserOptions: {
        jsx: true,
        ecmaVersion: 2022,
        ecmaFeatures: {
            jsx: true,
        },
    },
    reportUnusedDisableDirectives: true,
    settings: {
        react: {
            version: "detect", // React version. "detect" automatically picks the version you have installed.
        },
    },
    plugins: ["react", "react-hooks", "unused-imports", "simple-import-sort"],
    extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "@astahmer/eslint-config-ts",
    ],
    rules: {
        // https://www.npmjs.com/package/eslint-plugin-react
        "react/jsx-pascal-case": "error",
        "react/jsx-no-useless-fragment": "error",
        "react/jsx-no-leaked-render": "error",
        "react/jsx-no-constructed-context-values": "warn",
        "react/prop-types": ["error", { ignore: ["children"] }], // lots of false positive on children
        "react/no-children-prop": "off",

        // https://github.com/arcanis/eslint-plugin-arca/blob/d31cc29f89e583ab58cf365818801e1da7ae514b/README.md
        "arca/jsx-no-html-attrs": "off", // has false positives

        // https://github.dev/antfu/eslint-config/blob/e9f0988b4da7ea13a86def1f6245d5e96a04f7a9/packages/typescript/index.js#L20-L24
        "jsx-quotes": ["error", "prefer-double"],
        "react/react-in-jsx-scope": "off",
    },
    overrides: [
        {
            // or whatever matches stories specified in .storybook/main.js
            files: ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
            rules: {
                "arca/no-default-export": "off",
                "import/no-unused-modules": "off",
            },
        },
        // https://github.com/remix-run/remix/blob/e77e2eb731551db1e70c7c3bd5f73389b97a9574/packages/remix-eslint-config/index.js
        {
            files: ["**/views/**/*.js?(x)", "**/views/**/*.tsx"],
            rules: {
                // Routes may use default exports without a name. At the route level
                // identifying components for debugging purposes is less of an issue, as
                // the route boundary is more easily identifiable.
                "react/display-name": "off",
            },
        },
    ],
});
