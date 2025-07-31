import tseslint from "typescript-eslint";

/**
 * @typedef {import('../../../types/_commons/typedefs').Extensions} Extensions
 * @typedef {import('../../../types/_commons/typedefs').LanguageOptions} LanguageOptions
 */

/* plugin names */
// use-agnostic
export const useAgnosticPluginName = "use-agnostic";
// crossingStrategies (canceled)
export const strategiesPluginName = "strategies";

/* config names */
// $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#AGNOSTIC20
export const agnostic20ConfigName = "agnostic20";
// $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVE21
export const directive21ConfigName = "directive21";

/* rule names */
// $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#AGNOSTIC20
export const enforceEffectiveDirectivesRuleName =
  "enforce-effective-directives-import-rules";
// $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVE21
export const enforceCommentedDirectivesRuleName =
  "enforce-commented-directives-import-rules";
// crossingStrategies (canceled)
export const verifySpecifierImportRuleName =
  "verify-specifier-import-export-same-strategy";
export const verifyDefaultImportRuleName =
  "verify-default-import-export-same-strategy";
export const verifyNamespaceImportRuleName =
  "verify-namespace-import-export-some-strategy";

/* messageIds */
export const reExportNotSameMessageId = "re-export-not-same-directive";
// $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#AGNOSTIC20
export const importBreaksEffectiveImportRulesMessageId =
  "import-breaks-effective-directive-import-rule";
export const useServerJSXMessageId = "use-server-has-jsx-extension";
// $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVE21
export const importBreaksCommentedImportRulesMessageId =
  "import-breaks-commented-directive-import-rule";
export const noCommentedDirective = "no-commented-directive-detected";
export const commentedDirectiveVerificationFailed =
  "commented-directive-verification-failed";
export const importNotStrategized =
  "import-from-use-agnostic-strategies-not-strategized";
export const exportNotStrategized =
  "export-from-use-agnostic-strategies-not-strategized";

// all $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RESOLVED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVES (from AIA/agnostic20 & DFA/directive21)
// - AIA: Agnostic-Included Architecture (agnostic20)
// - DFA: Directive-First Architecture (directive21)
// $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#AGNOSTIC20
export const USE_SERVER_LOGICS = "use server logics";
export const USE_CLIENT_LOGICS = "use client logics";
export const USE_AGNOSTIC_LOGICS = "use agnostic logics";
export const USE_SERVER_COMPONENTS = "use server components";
export const USE_CLIENT_COMPONENTS = "use client components";
export const USE_AGNOSTIC_COMPONENTS = "use agnostic components";
export const USE_SERVER_FUNCTIONS = "use server functions";
// and $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVE21
export const USE_CLIENT_CONTEXTS = "use client contexts";
export const USE_AGNOSTIC_CONDITIONS = "use agnostic conditions";
export const USE_AGNOSTIC_STRATEGIES = "use agnostic strategies";

// all $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RESOLVED modules (from AIA/agnostic20 & DFA/directive21)
// $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#AGNOSTIC20
export const SERVER_LOGICS_MODULE = "Server Logics Module";
export const CLIENT_LOGICS_MODULE = "Client Logics Module";
export const AGNOSTIC_LOGICS_MODULE = "Agnostic Logics Module";
export const SERVER_COMPONENTS_MODULE = "Server Components Module";
export const CLIENT_COMPONENTS_MODULE = "Client Components Module";
export const AGNOSTIC_COMPONENTS_MODULE = "Agnostic Components Module";
export const SERVER_FUNCTIONS_MODULE = "Server Functions Module";
// and $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVE21
export const CLIENT_CONTEXTS_MODULE = "Client Contexts Module";
export const AGNOSTIC_CONDITIONS_MODULE = "Agnostic Conditions Module";
export const AGNOSTIC_STRATEGIES_MODULE = "Agnostic Strategies Module";

// all mappings of $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RESOLVED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVES with $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RESOLVED modules
// $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#AGNOSTIC20
const effectiveDirectives_effectiveModules = Object.freeze({
  [USE_SERVER_LOGICS]: SERVER_LOGICS_MODULE,
  [USE_SERVER_COMPONENTS]: SERVER_COMPONENTS_MODULE,
  [USE_SERVER_FUNCTIONS]: SERVER_FUNCTIONS_MODULE,
  [USE_CLIENT_LOGICS]: CLIENT_LOGICS_MODULE,
  [USE_CLIENT_COMPONENTS]: CLIENT_COMPONENTS_MODULE,
  [USE_AGNOSTIC_LOGICS]: AGNOSTIC_LOGICS_MODULE,
  [USE_AGNOSTIC_COMPONENTS]: AGNOSTIC_COMPONENTS_MODULE,
});
// and $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVE21
const commentedDirectives_commentedModules = Object.freeze({
  [USE_CLIENT_CONTEXTS]: CLIENT_CONTEXTS_MODULE,
  [USE_AGNOSTIC_CONDITIONS]: AGNOSTIC_CONDITIONS_MODULE,
  [USE_AGNOSTIC_STRATEGIES]: AGNOSTIC_STRATEGIES_MODULE,
  ...effectiveDirectives_effectiveModules,
});
// for commons uses
export const resolvedDirectives_resolvedModules =
  commentedDirectives_commentedModules;

// JavaScript/TypeScript extensions
export const TSX = ".tsx";
export const TS = ".ts";
export const JSX = ".jsx";
export const JS = ".js";
export const MJS = ".mjs";
export const CJS = ".cjs";

// JavaScript/TypeScript extensions array
/** @type {Extensions} */
export const EXTENSIONS = Object.freeze([TSX, TS, JSX, JS, MJS, CJS]); // In priority order

// message strings
export const ARE_NOT_ALLOWED_TO_IMPORT = "are not allowed to import";

// skipping object for flows
export const skip = Object.freeze({
  skip: true,
});

// ESLint configs language options
/** @type {LanguageOptions} */
export const typeScriptAndJSXCompatible = {
  // for compatibility with .ts and .tsx
  parser: tseslint.parser,
  // for compatibility with JSX
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
