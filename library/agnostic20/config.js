import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

import {
  agnostic20ConfigName,
  useAgnosticPluginName,
  enforceEffectiveDirectivesRuleName,
} from "../_commons/constants/bases.js";

/**
 * Makes the agnostic20 config for the use-agnostic ESLint plugin.
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
