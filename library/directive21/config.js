import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

import {
  directive21ConfigName,
  useAgnosticPluginName,
  enforceCommentedDirectivesRuleName,
} from "../_commons/constants/bases.js";

/**
 * Makes the directive21 config for the use-agnostic ESLint plugin.
 * @param {import('eslint').ESLint.Plugin} plugin The use-agnostic ESLint plugin itself.
 * @returns The directive21 config's name as a key and its config as its value.
 */
export const makeDirective21Config = (plugin) => ({
  [directive21ConfigName]: defineConfig([
    {
      plugins: {
        [useAgnosticPluginName]: plugin,
      },
      rules: {
        [`${useAgnosticPluginName}/${enforceCommentedDirectivesRuleName}`]:
          "warn",
      },
      languageOptions: {
        // for compatibility with .ts and .tsx
        parser: tseslint.parser,
      },
    },
  ]),
});
