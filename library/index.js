import fs from "fs";

import {
  useAgnosticPluginName,
  directive21ConfigName,
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
  fs.readFileSync(new URL("../package.json", import.meta.url), "utf8"),
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
  EXTENSIONS,
  commentedDirectives_commentedModules,
} from "./_commons/constants/bases.js";

export {
  highlightFirstLineOfCode,
  getEnvironmentFromResolvedDirective,
} from "./_commons/utilities/helpers.js";

// agnostic20

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

// directive21

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
  // mapped commented directives to their React directives
  commentedDirectives_reactDirectives,
  // commented strategies
  AT_SERVER_LOGICS,
  AT_CLIENT_LOGICS,
  AT_AGNOSTIC_LOGICS,
  AT_SERVER_COMPONENTS,
  AT_CLIENT_COMPONENTS,
  AT_AGNOSTIC_COMPONENTS,
  AT_SERVER_FUNCTIONS,
  AT_CLIENT_CONTEXTS,
  // commented strategies array
  commentedStrategiesArray,
  // commented strategies set
  commentedStrategiesSet,
  // mapped commented strategies to their commented directives
  commentedStrategies_commentedDirectives,
  // environments
  SERVER,
  CLIENT,
  AGNOSTIC,
  // mapped environments to their allowed chain-import environments
  environments_allowedChainImportEnvironments,
  // strategized extensions
  DOT_SERVER_LOGICS,
  DOT_CLIENT_LOGICS,
  DOT_AGNOSTIC_LOGICS,
  DOT_SERVER_COMPONENTS,
  DOT_CLIENT_COMPONENTS,
  DOT_AGNOSTIC_COMPONENTS,
  DOT_SERVER_FUNCTIONS,
  DOT_CLIENT_CONTEXTS,
  // strategized extensions array
  strategizedExtensionsArray,
  // strategized extensions set
  strategizedExtensionsSet,
  // mapped commented directives to their strategized extensions
  commentedDirectives_strategizedExtensions,
  // conditioned extensions
  DOT_AGNOSTIC_SERVER,
  DOT_AGNOSTIC_CLIENT,
  // conditioned extensions array
  conditionedExtensionsArray,
  // conditioned extensions set
  conditionedExtensionsSet,
  // mapped environments to their conditioned extensions
  environments_conditionedExtensions,
} from "./directive21/_commons/constants/bases.js";

export {
  getCommentedDirectiveFromSourceCode,
  getCommentedDirectiveFromCurrentModule,
  getCommentedDirectiveFromImportedModule,
  getVerifiedCommentedDirective,
  getStrategizedDirective,
  isImportBlocked as isImportBlockedDirective21,
} from "./directive21/_commons/utilities/helpers.js";

export { directive21Data } from "../jscomments/_commons/constants/data.js";

/**
 * Creates the ESLint config object required as the basis for the Directive-First Architecture, linting server-client-agnostic imports based on their commented directives. (Defaults to `"warn"`. You can import and use ```[`${useAgnosticPluginName}/${directive21ConfigName}`]``` later in a further ESLint config object to modify that value.)
 * @template {string} T
 * @param {T} reactFolder The path of the project's React folder where everything React lives, relative to the root of the project. This is, for example, the app directory when using the Next.js App Router, as `"app"`.
 * @returns An ESLint config object that applies `eslint-plugin-use-agnostic`'s `directive21` config by using the provided `reactFolder` as the basis for JavaScript/TypeScript glob patterns.
 */
export const defineDirective21 = (reactFolder) => {
  /** @type {[`${T}/*\*\/*.tsx`, `${T}/*\*\/*.ts`, `${T}/*\*\/*.jsx`, `${T}/*\*\/*.js`, `${T}/*\*\/*.mjs`, `${T}/*\*\/*.cjs`]} */
  const files = [
    `${reactFolder}/**/*.tsx`,
    `${reactFolder}/**/*.ts`,
    `${reactFolder}/**/*.jsx`,
    `${reactFolder}/**/*.js`,
    `${reactFolder}/**/*.mjs`,
    `${reactFolder}/**/*.cjs`,
  ];

  const extendsArrayValue = `${useAgnosticPluginName}/${directive21ConfigName}`;
  /** @type {[typeof extendsArrayValue]} */
  const extendsValue = [extendsArrayValue];

  return {
    files,
    plugins: {
      [useAgnosticPluginName]: plugin,
    },
    extends: extendsValue,
  };
};

/**
 * Defines the config settings for the eXtra JSX VS Code extension as a means to configure `eXtra JSX` directly from ESLint, given the fact that `eslint-plugin-use-agnostic` and `eXtra JSX` have to work together in making the Directive-First Architecture.
 * @template {string} T
 * @param {Object} settings The settings as follows:
 * @param {T} settings.reactFolder The path of the project's React folder where everything React lives, relative to the root of the project. This is, for example, the app directory when using the Next.js App Router, as `"app"`.
 * @returns The config object responsible for the settings retrieved by the eXtra JSX VS Code extension.
 */
export const defineConfigSettings = ({ reactFolder }) => {
  /**
   * @type {["**\/*.js"]}
   * The dummy file paths used by the eXtra JSX VS Code extension are JavaScript file paths, therefore this glob pattern is enough to work in recognizing the dummy file paths in order to retrieve the settings.
   */
  const files = ["**/*.js"];

  return {
    files,
    settings: {
      eXtraJSX: {
        reactFolder,
      },
    },
  };
};
