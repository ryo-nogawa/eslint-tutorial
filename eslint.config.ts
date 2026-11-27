import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    plugins: {
      "@stylistic": stylistic,
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { projectService: true },
    },
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  tseslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    rules: {
      "no-console": "warn",
      camelcase: ["warn", { properties: "never" }],
      "@stylistic/semi": ["warn", "always"],
      "@typescript-eslint/switch-exhaustiveness-check": "warn",
    },
  },
]);
