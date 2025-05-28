import {
  reExportNotSameMessageId,
  importBreaksCommentedImportRulesMessageId,
  noCommentedDirective,
  commentedDirectiveVerificationFailed,
  importNotStrategized,
  exportNotStrategized,
} from "../../../library/_commons/constants/bases.js";

/**
 * @typedef {import("../../_commons/typedefs.js").Plugin} Plugin
 *
 * @typedef {import("../../_commons/typedefs.js").ImportDeclaration} ImportDeclaration
 * @typedef {import("../../_commons/typedefs.js").ExportNamedDeclaration} ExportNamedDeclaration
 * @typedef {import("../../_commons/typedefs.js").ExportAllDeclaration} ExportAllDeclaration
 *
 * @typedef {import("../../_commons/typedefs.js").Extension} Extension
 *
 * @typedef {import("../../_commons/typedefs.js").CommentedDirective} CommentedDirective
 *
 * @typedef {reExportNotSameMessageId | importBreaksCommentedImportRulesMessageId | noCommentedDirective | commentedDirectiveVerificationFailed | importNotStrategized | exportNotStrategized} RuleMessageId
 * @typedef {import('@typescript-eslint/utils').TSESLint.RuleModule<RuleMessageId, []>} Rule
 * @typedef {import('@typescript-eslint/utils').TSESLint.RuleContext<RuleMessageId, []>} Context
 */
