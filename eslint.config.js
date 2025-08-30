import eslint from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import functional from "eslint-plugin-functional";
import perfectionist from "eslint-plugin-perfectionist";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist", "**/*.d.ts"],
  },
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  eslintPluginAstro.configs.recommended,
  eslintPluginAstro.configs["jsx-a11y-recommended"],
  perfectionist.configs["recommended-natural"],
  functional.configs.recommended,
);
