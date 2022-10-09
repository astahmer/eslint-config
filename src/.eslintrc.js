// @ts-check
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
    extends: ["./.eslintrc.build.js"],
    rules: {
        // better DX
        "import/no-unused-modules": "off",
        "unused-imports/no-unused-imports": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "no-empty": "off",
    },
});
