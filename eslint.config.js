import { defineConfig, globalIgnores } from "eslint/config";

import useAgnostic, {
  useAgnosticPluginName,
  agnostic20ConfigName,
  // enforceEffectiveDirectivesRuleName
  /* added for directive21 */
  directive21ConfigName,
  // enforceCommentedDirectivesRuleName
} from "eslint-plugin-use-agnostic";

/* added for directive21 */
import { EXTENSIONS } from "./library/_commons/constants/bases.js";
import {
  validPath21,
  invalidPath21,
} from "./tests/_commons/constants/bases.js";

/* added for directive21 */
const directive21TestFiles = EXTENSIONS.map((e) => `**/*${e}`)
  .map((e) => {
    return [validPath21 + "/" + e, invalidPath21 + "/" + e];
  })
  .flat();

export default defineConfig([
  globalIgnores([".next", ".react-router", "node_modules"]),
  {
    files: [
      "**/*.tsx",
      "**/*.ts",
      "**/*.jsx",
      "**/*.js",
      "**/*.mjs",
      "**/*.cjs",
    ],
    plugins: {
      [useAgnosticPluginName]: useAgnostic,
    },
    extends: [`${useAgnosticPluginName}/${agnostic20ConfigName}`],
  },
  /* added for directive21 */
  {
    files: directive21TestFiles,
    plugins: {
      [useAgnosticPluginName]: useAgnostic,
    },
    extends: [`${useAgnosticPluginName}/${directive21ConfigName}`],
  },
]);
