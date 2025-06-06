import {
  reExportNotSameMessageId,
  importBreaksEffectiveImportRulesMessageId,
  useServerJSXMessageId,
} from "../../../library/_commons/constants/bases.js";
import {
  NO_DIRECTIVE,
  USE_SERVER,
  USE_CLIENT,
  USE_AGNOSTIC,
} from "../../../library/agnostic20/_commons/constants/bases.js";

/**
 * @typedef {import("../../_commons/typedefs.js").Plugin} Plugin
 *
 * @typedef {import("../../_commons/typedefs.js").AST} AST
 * @typedef {import("../../_commons/typedefs.js").ImportDeclaration} ImportDeclaration
 * @typedef {import("../../_commons/typedefs.js").ExportNamedDeclaration} ExportNamedDeclaration
 * @typedef {import("../../_commons/typedefs.js").ExportAllDeclaration} ExportAllDeclaration
 *
 * @typedef {import("../../_commons/typedefs.js").Extension} Extension
 *
 * @typedef {typeof USE_SERVER | typeof USE_CLIENT | typeof USE_AGNOSTIC} Directive
 * @typedef {readonly [typeof USE_SERVER, typeof USE_CLIENT, typeof USE_AGNOSTIC]} Directives
 * @typedef {typeof NO_DIRECTIVE} NoDirective
 * @typedef {Readonly<Record<Directive | NoDirective, Readonly<{ logics: EffectiveDirective | null, components: EffectiveDirective | null, functions: EffectiveDirective | null }>>>} Directives_EffectiveDirectives
 *
 * @typedef {import("../../_commons/typedefs.js").EffectiveDirective} EffectiveDirective
 *
 * @typedef {typeof reExportNotSameMessageId | typeof importBreaksEffectiveImportRulesMessageId | typeof useServerJSXMessageId} RuleMessageId
 * @typedef {[]} RuleOptions
 * @typedef {import("../../_commons/typedefs.js").Rule<RuleMessageId, RuleOptions>} Rule
 * @typedef {import("../../_commons/typedefs.js").Context<RuleMessageId, RuleOptions>} Context
 */
