import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

import {
  agnostic20ConfigName,
  useAgnosticPluginName,
  enforceEffectiveDirectivesRuleName,
} from "../_commons/constants/bases.js";

/**
 * Makes the agnostic20 config for the use-agnostic ESLint plugin.
 * @param {import('eslint').ESLint.Plugin} plugin The use-agnostic ESLint plugin itself.
 * @returns The agnostic20 config's name as a key and its config as its value.
 */
export const makeAgnostic20Config = (plugin) => ({
  [agnostic20ConfigName]: defineConfig([
    {
      plugins: {
        [useAgnosticPluginName]: plugin,
      },
      rules: {
        [`${useAgnosticPluginName}/${enforceEffectiveDirectivesRuleName}`]:
          "warn",
      },
      languageOptions: {
        // for compatibility with .ts and .tsx
        parser: tseslint.parser,
      },
    },
  ]),
});
