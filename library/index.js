import fs from "fs";

import {
  enforceEffectiveDirectivesRuleName,
  enforceCommentedDirectivesRuleName,
} from "./_commons/constants/bases.js";

import enforceEffectiveDirectivesImportRules from "./agnostic20/_commons/rules/import-rules.js";
import enforceCommentedDirectivesImportRules from "./directive21/_commons/rules/import-rules.js";

import { makeAgnostic20Config } from "./agnostic20/config.js";
import { makeDirective21Config } from "./directive21/config.js";

/**
 * @typedef {import("../types/_commons/typedefs.js").PackageJson} PackageJson
 * @typedef {import("../types/_commons/typedefs.js").Plugin} Plugin
 */

/** @type {PackageJson} */
const packageJSON = JSON.parse(
  fs.readFileSync(new URL("../package.json", import.meta.url), "utf8")
);

/** @type {Plugin} */
const plugin = {
  meta: { ...packageJSON },
  configs: {}, // applied below
  rules: {
    [enforceEffectiveDirectivesRuleName]: enforceEffectiveDirectivesImportRules,
    [enforceCommentedDirectivesRuleName]: enforceCommentedDirectivesImportRules,
  },
  processors: {}, // not used
};

Object.assign(plugin.configs, makeAgnostic20Config(plugin));
Object.assign(plugin.configs, makeDirective21Config(plugin));

export default plugin;

export {
  // for use in eslint.config.js
  useAgnosticPluginName,
  agnostic20ConfigName,
  directive21ConfigName,
  enforceEffectiveDirectivesRuleName,
  enforceCommentedDirectivesRuleName,
} from "./_commons/constants/bases.js";
