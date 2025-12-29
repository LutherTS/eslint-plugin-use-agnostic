import {
  reExportNotSameMessageId,
  importBreaksCommentedImportRulesMessageId,
  noCommentedDirectiveMessageId,
  commentedDirectiveVerificationFailedMessageId,
  // importNotStrategizedMessageId,
  // exportNotStrategizedMessageId,
  cantChainImportAcrossEnvironmentsMessageId,
} from "../../../library/_commons/constants/bases.js";
import {
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
  AT_SERVER_LOGICS,
  AT_CLIENT_LOGICS,
  AT_AGNOSTIC_LOGICS,
  AT_SERVER_COMPONENTS,
  AT_CLIENT_COMPONENTS,
  AT_AGNOSTIC_COMPONENTS,
  AT_SERVER_FUNCTIONS,
  AT_CLIENT_CONTEXTS,
  // AT_AGNOSTIC_CONDITIONS,
  DOT_SERVER_LOGICS,
  DOT_CLIENT_LOGICS,
  DOT_AGNOSTIC_LOGICS,
  DOT_SERVER_COMPONENTS,
  DOT_CLIENT_COMPONENTS,
  DOT_AGNOSTIC_COMPONENTS,
  DOT_SERVER_FUNCTIONS,
  DOT_CLIENT_CONTEXTS,
  DOT_AGNOSTIC_SERVER,
  DOT_AGNOSTIC_CLIENT,
} from "../../../library/directive21/_commons/constants/bases.js";

/**
 * @typedef {import("../../_commons/typedefs.js").Plugin} Plugin
 * @typedef {import("../../_commons/typedefs.js").SourceCode} SourceCode
 *
 * @typedef {import("../../_commons/typedefs.js").ImportDeclaration} ImportDeclaration
 * @typedef {import("../../_commons/typedefs.js").ExportNamedDeclaration} ExportNamedDeclaration
 * @typedef {import("../../_commons/typedefs.js").ExportAllDeclaration} ExportAllDeclaration
 * @typedef {import("../../_commons/typedefs.js").ExportDefaultDeclaration} ExportDefaultDeclaration
 * @typedef {import("../../_commons/typedefs.js").CallExpression} CallExpression
 *
 * @typedef {import("../../_commons/typedefs.js").Extension} Extension
 *
 * @typedef {import("../../_commons/typedefs.js").CommentedDirective} CommentedDirective
 * @typedef {readonly [typeof USE_SERVER_LOGICS, typeof USE_CLIENT_LOGICS, typeof USE_AGNOSTIC_LOGICS, typeof USE_SERVER_COMPONENTS, typeof USE_CLIENT_COMPONENTS, typeof USE_AGNOSTIC_COMPONENTS, typeof USE_SERVER_FUNCTIONS, typeof USE_CLIENT_CONTEXTS, typeof USE_AGNOSTIC_CONDITIONS, typeof USE_AGNOSTIC_STRATEGIES]} CommentedDirectives
 *
 * @typedef {typeof DOT_SERVER_LOGICS | typeof DOT_CLIENT_LOGICS | typeof DOT_AGNOSTIC_LOGICS | typeof DOT_SERVER_COMPONENTS | typeof DOT_CLIENT_COMPONENTS | typeof DOT_AGNOSTIC_COMPONENTS | typeof DOT_SERVER_FUNCTIONS | typeof DOT_CLIENT_CONTEXTS} StrategizedExtension
 * @typedef {readonly [typeof DOT_SERVER_LOGICS, typeof DOT_CLIENT_LOGICS, typeof DOT_AGNOSTIC_LOGICS, typeof DOT_SERVER_COMPONENTS, typeof DOT_CLIENT_COMPONENTS, typeof DOT_AGNOSTIC_COMPONENTS, typeof DOT_SERVER_FUNCTIONS, typeof DOT_CLIENT_CONTEXTS]} StrategizedExtensions
 *
 * @typedef {typeof DOT_AGNOSTIC_SERVER | typeof DOT_AGNOSTIC_CLIENT} ConditionedExtension
 * @typedef {readonly [typeof DOT_AGNOSTIC_SERVER, typeof DOT_AGNOSTIC_CLIENT]} ConditionedExtensions
 *
 * @typedef {typeof AT_SERVER_LOGICS | typeof AT_CLIENT_LOGICS | typeof AT_AGNOSTIC_LOGICS | typeof AT_SERVER_COMPONENTS | typeof AT_CLIENT_COMPONENTS | typeof AT_AGNOSTIC_COMPONENTS | typeof AT_SERVER_FUNCTIONS | typeof AT_CLIENT_CONTEXTS} CommentedStrategy // removed ` | typeof AT_AGNOSTIC_CONDITIONS`
 * @typedef {readonly [typeof AT_SERVER_LOGICS, typeof AT_CLIENT_LOGICS, typeof AT_AGNOSTIC_LOGICS, typeof AT_SERVER_COMPONENTS, typeof AT_CLIENT_COMPONENTS, typeof AT_AGNOSTIC_COMPONENTS, typeof AT_SERVER_FUNCTIONS, typeof AT_CLIENT_CONTEXTS]} CommentedStrategies // removed `, typeof AT_AGNOSTIC_CONDITIONS`
 *
 * @typedef {import("../../_commons/typedefs.js").Environment} Environment
 *
 * @typedef {readonly [readonly [`// `, `'`, ``], readonly [`// `, `"`, ``], readonly [`\/\* `, `'`, ` \*\/`], readonly [`\/\* `, `"`, ` \*\/`]]} CommentStyles
 *
 * @typedef {typeof reExportNotSameMessageId | typeof importBreaksCommentedImportRulesMessageId | typeof noCommentedDirectiveMessageId | typeof commentedDirectiveVerificationFailedMessageId | typeof cantChainImportAcrossEnvironmentsMessageId} RuleMessageId // removed `| typeof importNotStrategizedMessageId | typeof exportNotStrategizedMessageId`
 * @typedef {[]} RuleOptions
 * @typedef {import("../../_commons/typedefs.js").Rule<RuleMessageId, RuleOptions>} Rule
 * @typedef {import("../../_commons/typedefs.js").Context<RuleMessageId, RuleOptions>} Context
 */
