import tseslint from "typescript-eslint";

import { commentVariablesData } from "../../../jscomments/_commons/constants/data.js";

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
// agnostic20
export const agnostic20ConfigName = "agnostic20";
// directive21
export const directive21ConfigName = "directive21";

/* rule names */
// agnostic20
export const enforceEffectiveDirectivesRuleName =
  "enforce-effective-directives-import-rules";
// directive21
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
// agnostic20
export const importBreaksEffectiveImportRulesMessageId =
  "import-breaks-effective-directive-import-rule";
export const useServerJSXMessageId = "use-server-has-jsx-extension";
// directive21
export const importBreaksCommentedImportRulesMessageId =
  "import-breaks-commented-directive-import-rule";
export const noCommentedDirectiveMessageId = "no-commented-directive-detected";
export const commentedDirectiveVerificationFailedMessageId =
  "commented-directive-verification-failed";
export const commentedDirectiveReactDirectiveFailedMessageId =
  "commented-directive-correct-react-directive-failed";
// export const importNotStrategizedMessageId =
//   "import-from-use-agnostic-strategies-not-strategized";
// export const exportNotStrategizedMessageId =
//   "export-from-use-agnostic-strategies-not-strategized";
export const cantChainImportAcrossEnvironmentsMessageId =
  "cant-chain-import-across-environments";

// all "resolved" directives (from AIA/agnostic20 & DFA/directive21)
// - AIA: Agnostic-Included Architecture (agnostic20)
// - DFA: Directive-First Architecture (directive21)
// agnostic20
export const USE_SERVER_LOGICS =
  commentVariablesData.agnostic20["use server logics"].directive.value;
export const USE_CLIENT_LOGICS =
  commentVariablesData.agnostic20["use client logics"].directive.value;
export const USE_AGNOSTIC_LOGICS =
  commentVariablesData.agnostic20["use agnostic logics"].directive.value;
export const USE_SERVER_COMPONENTS =
  commentVariablesData.agnostic20["use server components"].directive.value;
export const USE_CLIENT_COMPONENTS =
  commentVariablesData.agnostic20["use client components"].directive.value;
export const USE_AGNOSTIC_COMPONENTS =
  commentVariablesData.agnostic20["use agnostic components"].directive.value;
export const USE_SERVER_FUNCTIONS =
  commentVariablesData.agnostic20["use server functions"].directive.value;
// and directive21
export const USE_CLIENT_CONTEXTS =
  commentVariablesData.directive21["use client contexts"].directive.value;
export const USE_AGNOSTIC_CONDITIONS =
  commentVariablesData.directive21["use agnostic conditions"].directive.value;
export const USE_AGNOSTIC_STRATEGIES =
  commentVariablesData.directive21["use agnostic strategies"].directive.value;

// all "resolved" modules (from AIA/agnostic20 & DFA/directive21)
// agnostic20
export const SERVER_LOGICS_MODULE =
  commentVariablesData.agnostic20["use server logics"].module.value;
export const CLIENT_LOGICS_MODULE =
  commentVariablesData.agnostic20["use client logics"].module.value;
export const AGNOSTIC_LOGICS_MODULE =
  commentVariablesData.agnostic20["use agnostic logics"].module.value;
export const SERVER_COMPONENTS_MODULE =
  commentVariablesData.agnostic20["use server components"].module.value;
export const CLIENT_COMPONENTS_MODULE =
  commentVariablesData.agnostic20["use client components"].module.value;
export const AGNOSTIC_COMPONENTS_MODULE =
  commentVariablesData.agnostic20["use agnostic components"].module.value;
export const SERVER_FUNCTIONS_MODULE =
  commentVariablesData.agnostic20["use server functions"].module.value;
// and directive21
export const CLIENT_CONTEXTS_MODULE =
  commentVariablesData.directive21["use client contexts"].moduleSimple.value;
export const AGNOSTIC_CONDITIONS_MODULE =
  commentVariablesData.directive21["use agnostic conditions"].moduleSimple
    .value;
export const AGNOSTIC_STRATEGIES_MODULE =
  commentVariablesData.directive21["use agnostic strategies"].moduleSimple
    .value;

// all mappings of "resolved" directives with "resolved" modules
// agnostic20
const effectiveDirectives_effectiveModules = Object.freeze({
  [USE_SERVER_LOGICS]: SERVER_LOGICS_MODULE,
  [USE_SERVER_COMPONENTS]: SERVER_COMPONENTS_MODULE,
  [USE_SERVER_FUNCTIONS]: SERVER_FUNCTIONS_MODULE,
  [USE_CLIENT_LOGICS]: CLIENT_LOGICS_MODULE,
  [USE_CLIENT_COMPONENTS]: CLIENT_COMPONENTS_MODULE,
  [USE_AGNOSTIC_LOGICS]: AGNOSTIC_LOGICS_MODULE,
  [USE_AGNOSTIC_COMPONENTS]: AGNOSTIC_COMPONENTS_MODULE,
});
// and directive21
export const commentedDirectives_commentedModules = Object.freeze({
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
export const MTSX = ".mtsx";
export const MTS = ".mts";
export const CTSX = ".ctsx";
export const CTS = ".cts";
export const JSX = ".jsx";
export const JS = ".js";
export const MJSX = ".mjsx";
export const MJS = ".mjs";
export const CJSX = ".cjsx";
export const CJS = ".cjs";

// JavaScript/TypeScript extensions array
/** @type {Extensions} */
export const EXTENSIONS = Object.freeze([
  TSX,
  TS,
  MTSX,
  MTS,
  CTSX,
  CTS,
  JSX,
  JS,
  MJSX,
  MJS,
  CJSX,
  CJS,
]); // In priority order

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
