/* eslint-disable react/prop-types */

module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4],
        semi: [2, "never"],
        "space-before-function-paren": ["error", "never"],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        "multiline-ternary": ["error", "always-multiline"],
        "prefer-const": [
            "error",
            {
                destructuring: "any",
                ignoreReadBeforeAssign: true
            }
        ],
        "no-unneeded-ternary": ["error", { defaultAssignment: true }]
    }
}
