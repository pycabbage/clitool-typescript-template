/** @type {import("@typescript-eslint/utils").TSESLint.Linter.Config } */

module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": [
    "google",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "plugins": [
    "@typescript-eslint",
  ],
  "rules": {
    "quotes": [
      "warn",
      "double",
    ],
    "require-jsdoc": 0,
  },
};
