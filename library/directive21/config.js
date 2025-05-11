import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

import {
  directive21ConfigName,
  useAgnosticPluginName,
  enforceCommentedDirectivesRuleName,
} from "../_commons/constants/bases.js";

/**
 * Makes the directive21 config for the use-agnostic ESLint plugin.
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
