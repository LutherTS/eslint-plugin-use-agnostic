import {
  reExportNotSameMessageId,
  importBreaksEffectiveImportRulesMessageId,
  useServerJSXMessageId,
} from "../../../library/_commons/constants/bases.js";
import {
  USE_SERVER,
  USE_CLIENT,
  USE_AGNOSTIC,
} from "../../../library/agnostic20/_commons/constants/bases.js";

/**
 * @typedef {import("../../_commons/typedefs.js").Plugin} Plugin
 *
 * @typedef {import("../../_commons/typedefs.js").ImportDeclaration} ImportDeclaration
 * @typedef {import("../../_commons/typedefs.js").ExportNamedDeclaration} ExportNamedDeclaration
 * @typedef {import("../../_commons/typedefs.js").ExportAllDeclaration} ExportAllDeclaration
 *
 * @typedef {import("../../_commons/typedefs.js").Extension} Extension
 *
 * @typedef {import("../../_commons/typedefs.js").EffectiveDirective} EffectiveDirective
 *
 * @typedef {USE_SERVER | USE_CLIENT | USE_AGNOSTIC} Directive
 * @typedef {readonly [USE_SERVER, USE_CLIENT, USE_AGNOSTIC]} Directives
 *
 * @typedef {reExportNotSameMessageId | importBreaksEffectiveImportRulesMessageId | useServerJSXMessageId} RuleMessageId
 * @typedef {import('@typescript-eslint/utils').TSESLint.RuleModule<RuleMessageId, []>} Rule
 * @typedef {import('@typescript-eslint/utils').TSESLint.RuleContext<RuleMessageId, []>} Context
 */
