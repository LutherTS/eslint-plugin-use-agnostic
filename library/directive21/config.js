import { defineConfig } from "eslint/config";

import {
  directive21ConfigName,
  useAgnosticPluginName,
  enforceCommentedDirectivesRuleName,
  typeScriptAndJSXCompatible,
} from "../_commons/constants/bases.js";

/**
 * @typedef {import('../../types/directive21/_commons/typedefs.js').Plugin} Plugin
 */

/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#MAKEDIRECTIVE21CONFIG
 * @param {Plugin} plugin $COMMENT#JSDOC#PARAMS#PLUGIN
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#MAKEDIRECTIVE21CONFIG
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
      languageOptions: typeScriptAndJSXCompatible,
    },
  ]),
});
