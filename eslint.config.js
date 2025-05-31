import { defineConfig, globalIgnores } from "eslint/config";

import useAgnostic, {
  useAgnosticPluginName,
  agnostic20ConfigName,
  // enforceEffectiveDirectivesRuleName
  directive21ConfigName,
  // enforceCommentedDirectivesRuleName
} from "eslint-plugin-use-agnostic";

import { makeTestFiles } from "./eslint/_commons/utilities/helpers.js";
import {
  validPath20,
  invalidPath20,
  validPath21,
  invalidPath21,
} from "./tests/_commons/constants/bases.js";

export default defineConfig([
  globalIgnores([".next", ".react-router", "node_modules"]),
  {
    files: makeTestFiles(validPath20, invalidPath20),
    plugins: {
      [useAgnosticPluginName]: useAgnostic,
    },
    extends: [`${useAgnosticPluginName}/${agnostic20ConfigName}`],
  },
  {
    files: makeTestFiles(validPath21, invalidPath21),
    plugins: {
      [useAgnosticPluginName]: useAgnostic,
    },
    extends: [`${useAgnosticPluginName}/${directive21ConfigName}`],
  },
]);
