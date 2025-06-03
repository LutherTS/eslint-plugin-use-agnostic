import { defineConfig } from "eslint/config";

import {
  agnostic20ConfigName,
  useAgnosticPluginName,
  enforceEffectiveDirectivesRuleName,
  typeScriptCompatible,
} from "../_commons/constants/bases.js";

/**
 * @typedef {import('../../types/agnostic20/_commons/typedefs.js').Plugin} Plugin
 */

/**
 * Makes the agnostic20 config for the use-agnostic ESLint plugin.
 * @param {Plugin} plugin The use-agnostic ESLint plugin itself.
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
      languageOptions: typeScriptCompatible,
    },
  ]),
});
