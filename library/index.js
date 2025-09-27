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

// NEW: eslint-plugin-use-agnostic is effectively the premier implementation of the Directive-First Architecture. As such, the following imports are to access its constants and utilities across other implementations of the Directive-First Architecture, such as eXtra JSX.

export {
  // directives
  NO_DIRECTIVE,
  USE_SERVER,
  USE_CLIENT,
  USE_AGNOSTIC,
  // directives array
  directivesArray,
  // directives set
  directivesSet,
  // mapping directives with effective directives
  directives_effectiveDirectives,
} from "./agnostic20/_commons/constants/bases.js";

export {
  getDirectiveFromModule,
  getDirectiveFromCurrentModule,
  getDirectiveFromImportedModule,
  getEffectiveDirective,
  isImportBlocked as isImportBlockedAgnostic20,
} from "./agnostic20/_commons/utilities/helpers.js";

export {
  // commented directives
  USE_SERVER_LOGICS,
  USE_CLIENT_LOGICS,
  USE_AGNOSTIC_LOGICS,
  USE_SERVER_COMPONENTS,
  USE_CLIENT_COMPONENTS,
  USE_AGNOSTIC_COMPONENTS,
  USE_SERVER_FUNCTIONS,
  USE_CLIENT_CONTEXTS,
  USE_AGNOSTIC_CONDITIONS,
  USE_AGNOSTIC_STRATEGIES,
  // commented directives array
  commentedDirectivesArray,
  // commented directives set
  commentedDirectivesSet,
  // mapped commented directives to their extension rules
  commentedDirectives_extensionRules,
  // commented strategies
  AT_SERVER_LOGICS,
  AT_CLIENT_LOGICS,
  AT_AGNOSTIC_LOGICS,
  AT_SERVER_COMPONENTS,
  AT_CLIENT_COMPONENTS,
  AT_AGNOSTIC_COMPONENTS,
  AT_SERVER_FUNCTIONS,
  AT_CLIENT_CONTEXTS,
  AT_AGNOSTIC_CONDITIONS,
  // commented strategies array
  commentedStrategiesArray,
  // commented strategies set
  commentedStrategiesSet,
  // mapped commented strategies to their commented directives
  commentedStrategies_commentedDirectives,
} from "./directive21/_commons/constants/bases.js";

export {
  getCommentedDirectiveFromSourceCode,
  getCommentedDirectiveFromCurrentModule,
  getCommentedDirectiveFromImportedModule,
  getVerifiedCommentedDirective,
  getStrategizedDirective,
  addressDirectiveIfAgnosticStrategies,
  isImportBlocked as isImportBlockedDirective21,
} from "./directive21/_commons/utilities/helpers.js";
