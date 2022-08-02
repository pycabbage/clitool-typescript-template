/** @type {import("@typescript-eslint/utils").TSESLint.Linter.Config } */
module.exports  = {
  extends: [
    "google",
    "prettier",
    "plugin:jest/recommended",
    "prettier"
  ],
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "jest"
  ],
  rules: {
    "quotes": [
      "warn",
      "double",
    ],
    "require-jsdoc": "off",
  },
};
