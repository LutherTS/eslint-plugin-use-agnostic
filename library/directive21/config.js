import { defineConfig } from "eslint/config";

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
    },
  ]),
});

/* Notes
I might have separated the config itself (the array) from the object.
Or since this is for the config of the plugin, I could just manually create the config itself without the plugin argument below.
Or, I can just create the inner config on the file itself.
*/
