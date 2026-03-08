// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import pluginJest from "eslint-plugin-jest";

const eslintConfig = defineConfig([...nextVitals, ...nextTs, {
  // update this to match your test files
  // files: ["**/*.spec.js", "**/*.test.js"],
  // plugins: { jest: pluginJest },
  // languageOptions: {
  //   globals: pluginJest.environments.globals.globals,
  // },
  rules: {
    quotes: ["warn", "single"],
    // "jest/no-disabled-tests": "warn",
    // "jest/no-focused-tests": "error",
    // "jest/no-identical-title": "error",
    // "jest/prefer-to-have-length": "warn",
    // "jest/valid-expect": "error",
  },
}, // Override default ignores of eslint-config-next.
globalIgnores([
  // Default ignores of eslint-config-next:
  ".next/**",
  "out/**",
  "build/**",
  "next-env.d.ts",
]), ...storybook.configs["flat/recommended"]]);

export default eslintConfig;
