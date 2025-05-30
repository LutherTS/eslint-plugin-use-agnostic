import { defineConfig, globalIgnores } from "eslint/config";

import useAgnostic, {
  useAgnosticPluginName,
  agnostic20ConfigName,
  // enforceEffectiveDirectivesRuleName
  directive21ConfigName,
  // enforceCommentedDirectivesRuleName
} from "eslint-plugin-use-agnostic";

import { EXTENSIONS } from "./library/_commons/constants/bases.js";
import {
  validPath20,
  invalidPath20,
  validPath21,
  invalidPath21,
} from "./tests/_commons/constants/bases.js";

/**
 * Makes the paths of the files to be linted for agnostic20 and directive21.
 * @param {string} validPath The directory for the valid paths.
 * @param {string} invalidPath The directory for the invalid paths.
 * @returns The paths of the files to be linted for agnostic20 and directive21.
 */
const makeTestFiles = (validPath, invalidPath) =>
  EXTENSIONS.map((e) => `**/*${e}`)
    .map((e) => {
      return [validPath + "/" + e, invalidPath + "/" + e];
    })
    .flat();

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
