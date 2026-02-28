import path from "path";

import { resolveImportingPath } from "resolve-importing-path";
import { findUpSync } from "find-up";

import {
  EXTENSIONS,
  useServerJSXMessageId,
  importBreaksEffectiveImportRulesMessageId,
  reExportNotSameMessageId,
  skip,
} from "../../../_commons/constants/bases.js";
import {
  NO_DIRECTIVE,
  USE_SERVER,
  // currentFileEffectiveDirective,
  // importedFileEffectiveDirective,
  effectiveDirectiveMessage,
  specificViolationMessage,
} from "../constants/bases.js";

import { highlightFirstLineOfCode } from "../../../_commons/utilities/helpers.js";
import {
  getDirectiveFromCurrentModule,
  getDirectiveFromImportedModule,
  getEffectiveDirective,
  isImportBlocked,
  makeMessageFromCurrentFileEffectiveDirective,
  findSpecificViolationMessage,
} from "./helpers.js";

/**
 * @typedef {import('../../../../types/agnostic20/_commons/typedefs.js').Context} Context
 * @typedef {import('../../../../types/agnostic20/_commons/typedefs.js').EffectiveDirective} EffectiveDirective
 * @typedef {import('../../../../types/agnostic20/_commons/typedefs.js').ImportDeclaration} ImportDeclaration
 * @typedef {import('../../../../types/agnostic20/_commons/typedefs.js').ExportNamedDeclaration} ExportNamedDeclaration
 * @typedef {import('../../../../types/agnostic20/_commons/typedefs.js').ExportAllDeclaration} ExportAllDeclaration
 * @typedef {import('../../../../types/agnostic20/_commons/typedefs.js').CallExpression} CallExpression
 */

/* currentFileFlow */

/**
 * The flow that begins the import rules enforcement rule, retrieving the effective directive of the current file before comparing it to upcoming effective directives of the files it imports.
 * @param {Context} context The ESLint rule's `context` object.
 * @returns Either an object with `skip: true` to disregard or one with the non-null `currentFileEffectiveDirective`.
 */
export const currentFileFlow = (context) => {
  const skipTrue = { ...skip, currentFileEffectiveDirective: undefined };

  // GETTING THE EXTENSION OF THE CURRENT FILE
  const currentFileExtension = path.extname(context.filename);

  // fails if the file is not JavaScript (TypeScript)
  const iscurrentFileJS = EXTENSIONS.some(
    (ext) => currentFileExtension === ext,
  );
  if (!iscurrentFileJS) {
    console.error(
      "ERROR. Linted files for this rule should only be in JavaScript (TypeScript).",
    );
    return skipTrue;
  }

  // GETTING THE DIRECTIVE (or lack thereof) OF THE CURRENT FILE
  const currentFileDirective =
    getDirectiveFromCurrentModule(context) ?? NO_DIRECTIVE;

  // reports if a file marked "use server" has a JSX extension
  if (
    currentFileDirective === USE_SERVER &&
    currentFileExtension.endsWith("x")
  ) {
    context.report({
      loc: highlightFirstLineOfCode(context),
      messageId: useServerJSXMessageId,
    });
    return skipTrue;
  }

  // GETTING THE EFFECTIVE DIRECTIVE (no lack thereof) OF THE CURRENT FILE
  const currentFileEffectiveDirective = getEffectiveDirective(
    currentFileDirective,
    currentFileExtension,
  );

  // fails if one of the seven effective directives has not been obtained
  if (currentFileEffectiveDirective === null) {
    console.error("ERROR. Effective directive should never be null.");
    return skipTrue;
  }

  return { skip: undefined, currentFileEffectiveDirective };
};

/* importedFileFlow */

/**
 * The flow that is shared between import and re-export traversals to obtain the import file's effective directive.
 * @param {Context} context The ESLint rule's `context` object.
 * @param {ImportDeclaration} node The ESLint `node` of the rule's current traversal.
 * @returns Either an object with `skip: true` to disregard or one with the non-null `importedFileEffectiveDirective`.
 */
const importedFileFlow = (context, node) => {
  const skipTrue = { ...skip, importedFileEffectiveDirective: undefined };

  // finds the full path of the import
  const resolvedImportPath = resolveImportingPath(
    path.dirname(context.filename),
    node.source.value,
    findUpSync("tsconfig.json", {
      cwd: path.dirname(context.filename),
    }) ?? context.cwd,
  );

  // does not operate on paths it did not resolve
  if (resolvedImportPath === null) return skipTrue;
  // does not operate on non-JS files
  const isImportedFileJS = EXTENSIONS.some((ext) =>
    resolvedImportPath.endsWith(ext),
  );
  if (!isImportedFileJS) return skipTrue;

  // GETTING THE DIRECTIVE (or lack thereof) OF THE IMPORTED FILE
  const importedFileDirective =
    getDirectiveFromImportedModule(resolvedImportPath) ?? NO_DIRECTIVE;

  // GETTING THE EXTENSION OF THE IMPORTED FILE
  const importedFileFileExtension = path.extname(resolvedImportPath);

  // GETTING THE EFFECTIVE DIRECTIVE (no lack thereof) OF THE IMPORTED FILE
  const importedFileEffectiveDirective = getEffectiveDirective(
    importedFileDirective,
    importedFileFileExtension,
  );

  // also fails if one of the seven effective directives has not been obtained
  if (importedFileEffectiveDirective === null) {
    console.error("ERROR. Effective directive should never be null.");
    return skipTrue;
  }

  // For now skipping on both "does not operate" (which should ignore) and "fails" (which should crash) albeit with console.error.

  return { skip: undefined, importedFileEffectiveDirective };
};

// NEW!! Currently strictly adapted from importedFileFlow
/**
 * The `importedFileFlow` adapted for `require` calls to obtain the import file's effective directive.
 * @param {Context} context The ESLint rule's `context` object.
 * @param {CallExpression} node The ESLint `node` of the rule's current traversal.
 * @returns Either an object with `skip: true` to disregard or one with the non-null `importedFileEffectiveDirective`.
 */
const importedFileFlowRequire = (context, node) => {
  const skipTrue = { ...skip, importedFileEffectiveDirective: undefined };

  if (
    node.callee.type === "Identifier" &&
    node.callee.name === "require" &&
    node.arguments.length === 1 &&
    node.arguments[0].type === "Literal"
  ) {
    const importPath = node.arguments[0].value;

    if (typeof importPath !== "string") return skipTrue;

    // finds the full path of the import
    const resolvedImportPath = resolveImportingPath(
      path.dirname(context.filename),
      importPath,
      findUpSync("tsconfig.json", {
        cwd: path.dirname(context.filename),
      }) ?? context.cwd,
    );

    // does not operate on paths it did not resolve
    if (resolvedImportPath === null) return skipTrue;
    // does not operate on non-JS files
    const isImportedFileJS = EXTENSIONS.some((ext) =>
      resolvedImportPath.endsWith(ext),
    );
    if (!isImportedFileJS) return skipTrue;

    // GETTING THE DIRECTIVE (or lack thereof) OF THE IMPORTED FILE
    const importedFileDirective =
      getDirectiveFromImportedModule(resolvedImportPath) ?? NO_DIRECTIVE;

    // GETTING THE EXTENSION OF THE IMPORTED FILE
    const importedFileFileExtension = path.extname(resolvedImportPath);

    // GETTING THE EFFECTIVE DIRECTIVE (no lack thereof) OF THE IMPORTED FILE
    const importedFileEffectiveDirective = getEffectiveDirective(
      importedFileDirective,
      importedFileFileExtension,
    );

    // also fails if one of the seven effective directives has not been obtained
    if (importedFileEffectiveDirective === null) {
      console.error("ERROR. Effective directive should never be null.");
      return skipTrue;
    }

    // For now skipping on both "does not operate" (which should ignore) and "fails" (which should crash) albeit with console.error.

    return { skip: undefined, importedFileEffectiveDirective };
  } else return skipTrue;
};

/* importsFlow */

/** The full flow for import traversals to enforce effective directives import rules.
 * @param {Context} context The ESLint rule's `context` object.
 * @param {ImportDeclaration} node The ESLint `node` of the rule's current traversal.
 * @param {EffectiveDirective} currentFileEffectiveDirective The current file's effective directive.
 * @returns Early if the flow needs to be interrupted.
 */
export const importsFlow = (context, node, currentFileEffectiveDirective) => {
  // does not operate on `import type`
  if (node.importKind === "type") return;

  const result = importedFileFlow(context, node);

  if (result.skip) return;
  const { importedFileEffectiveDirective } = result;

  if (
    isImportBlocked(
      currentFileEffectiveDirective,
      importedFileEffectiveDirective,
    )
  ) {
    context.report({
      node,
      messageId: importBreaksEffectiveImportRulesMessageId,
      data: {
        [effectiveDirectiveMessage]:
          makeMessageFromCurrentFileEffectiveDirective(
            currentFileEffectiveDirective,
          ),
        [specificViolationMessage]: findSpecificViolationMessage(
          currentFileEffectiveDirective,
          importedFileEffectiveDirective,
        ),
      },
    });
  }
};

// NEW!! Currently strictly adapted from importsFlow
/** The `importsFlow` adapted for `require` calls to enforce effective directives import rules.
 * @param {Context} context The ESLint rule's `context` object.
 * @param {CallExpression} node The ESLint `node` of the rule's current traversal.
 * @param {EffectiveDirective} currentFileEffectiveDirective The current file's effective directive.
 * @returns Early if the flow needs to be interrupted.
 */
export const importsFlowRequire = (
  context,
  node,
  currentFileEffectiveDirective,
) => {
  const result = importedFileFlowRequire(context, node);

  if (result.skip) return;
  const { importedFileEffectiveDirective } = result;

  if (
    isImportBlocked(
      currentFileEffectiveDirective,
      importedFileEffectiveDirective,
    )
  ) {
    context.report({
      node,
      messageId: importBreaksEffectiveImportRulesMessageId,
      data: {
        [effectiveDirectiveMessage]:
          makeMessageFromCurrentFileEffectiveDirective(
            currentFileEffectiveDirective,
          ),
        [specificViolationMessage]: findSpecificViolationMessage(
          currentFileEffectiveDirective,
          importedFileEffectiveDirective,
        ),
      },
    });
  }
};

/* reExportsFlow */

/** The full flow for export traversals, shared between `ExportNamedDeclaration` and `ExportAllDeclaration`, to ensure same effective directive re-exports.
 * @param {Context} context The ESLint rule's `context` object.
 * @param {ExportNamedDeclaration | ExportAllDeclaration} node The ESLint `node` of the rule's current traversal.
 * @param {EffectiveDirective} currentFileEffectiveDirective The current file's effective directive.
 * @returns Early if the flow needs to be interrupted.
 */
export const reExportsFlow = (context, node, currentFileEffectiveDirective) => {
  // does not operate on `export type`
  if (node.exportKind === "type") return;

  // does not operate on internal exports
  if (node.source === null) return;

  const result = importedFileFlow(context, node);

  if (result.skip) return;
  const { importedFileEffectiveDirective } = result;

  if (currentFileEffectiveDirective !== importedFileEffectiveDirective) {
    context.report({
      node,
      messageId: reExportNotSameMessageId,
      data: {
        // currentFileEffectiveDirective:
        currentFileEffectiveDirective,
        // importedFileEffectiveDirective:
        importedFileEffectiveDirective,
      },
    });
  }
};
