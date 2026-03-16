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
 * Makes the directive21 config for the use-agnostic ESLint plugin.
 * @param {Plugin} plugin The use-agnostic ESLint plugin itself.
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
        // new
        "no-restricted-syntax": [
          "warn",
          {
            selector:
              "CallExpression[callee.object.name='Object'][callee.property.name='create'][arguments.0.value=null]",
            message:
              "Avoid using `Object.create(null)` within the React folder. Instead, use a plain object as the RSC model requires plain objects for serialization.",
          },
        ],
      },
      languageOptions: typeScriptAndJSXCompatible,
    },
  ]),
});
