import js from "@eslint/js";
import globals from "globals";
import playwright from "eslint-plugin-playwright";

export default [
  js.configs.recommended,
  {
    ...playwright.configs["flat/recommended"],
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "playwright/no-wait-for-timeout": "warn",
    },
  },
];
