import { defineConfig } from "eslint/config";

import {
  agnostic20ConfigName,
  useAgnosticPluginName,
  enforceEffectiveDirectivesRuleName,
  typeScriptAndJSXCompatible,
} from "../_commons/constants/bases.js";

/**
 * @typedef {import('../../types/agnostic20/_commons/typedefs.js').Plugin} Plugin
 */

/**
 * $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#MAKEAGNOSTIC20CONFIG
 * @param {Plugin} plugin $COMMENT#JSDOC#PARAMS#PLUGIN
 * @returns $COMMENT#JSDOC#RETURNS#AGNOSTIC20#MAKEAGNOSTIC20CONFIG
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
      languageOptions: typeScriptAndJSXCompatible,
    },
  ]),
});
