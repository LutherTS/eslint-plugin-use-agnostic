import path from "path";

import {
  EXTENSIONS,
  useServerJSXMessageId,
  importBreaksEffectiveImportRulesMessageId,
  reExportNotSameMessageId,
} from "../../../_commons/constants/bases.js";
import {
  USE_SERVER_LOGICS,
  USE_SERVER_COMPONENTS,
  USE_SERVER_FUNCTIONS,
  USE_CLIENT_LOGICS,
  USE_CLIENT_COMPONENTS,
  USE_AGNOSTIC_LOGICS,
  USE_AGNOSTIC_COMPONENTS,
  // currentFileEffectiveDirective,
  // importedFileEffectiveDirective,
  effectiveDirectiveMessage,
  specificViolationMessage,
} from "../constants/bases.js";

import {
  resolveImportPath,
  highlightFirstLineOfCode,
} from "../../../_commons/utilities/helpers.js";
import {
  getDirectiveFromCurrentModule,
  getDirectiveFromImportedModule,
  getEffectiveDirective,
  isImportBlocked,
  makeMessageFromEffectiveDirective,
  findSpecificViolationMessage,
} from "./helpers.js";

/* currentFileFlow */

/**
 * The flow that begins the import rules enforcement rule, retrieving the valid directive of the current file before comparing it to upcoming valid directives of the files it imports.
 * @param {Readonly<import('@typescript-eslint/utils').TSESLint.RuleContext<typeof reExportNotSameMessageId | typeof importBreaksEffectiveImportRulesMessageId | typeof useServerJSXMessageId, []>>} context The ESLint rule's `context` object.
 * @returns {{skip: true; currentFileEffectiveDirective: undefined;} | {skip: undefined; currentFileEffectiveDirective: USE_SERVER_LOGICS | USE_SERVER_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_LOGICS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_LOGICS | USE_AGNOSTIC_COMPONENTS;}} Returns either an object with `skip: true` to disregard or one with the non-null `currentFileEffectiveDirective`.
 */
export const currentFileFlow = (context) => {
  // GETTING THE EXTENSION OF THE CURRENT FILE
  const currentFileExtension = path.extname(context.filename);

  // fails if the file is not JavaScript (TypeScript)
  const iscurrentFileJS = EXTENSIONS.some(
    (ext) => currentFileExtension === ext
  );
  if (!iscurrentFileJS) {
    console.error(
      "ERROR. Linted files for this rule should only be in JavaScript (TypeScript)."
    );
    return { skip: true };
  }

  /* GETTING THE DIRECTIVE (or lack thereof) OF THE CURRENT FILE */
  const currentFileDirective = getDirectiveFromCurrentModule(context);

  // reports if a file marked "use server" has a JSX extension
  if (
    currentFileDirective === "use server" &&
    currentFileExtension.endsWith("x")
  ) {
    context.report({
      loc: highlightFirstLineOfCode(context),
      messageId: useServerJSXMessageId,
    });
    return { skip: true };
  }

  // GETTING THE EFFECTIVE DIRECTIVE OF THE CURRENT FILE
  const currentFileEffectiveDirective = getEffectiveDirective(
    currentFileDirective,
    currentFileExtension
  );

  // fails if one of the seven effective directives has not been obtained
  if (currentFileEffectiveDirective === null) {
    console.error("ERROR. Effective directive should never be null.");
    return { skip: true };
  }

  return {
    currentFileEffectiveDirective,
  };
};

/* importedFileFlow */

/**
 * The flow that is shared between import and re-export traversals to obtain the import file's effective directive.
 * @param {Readonly<import('@typescript-eslint/utils').TSESLint.RuleContext<typeof reExportNotSameMessageId | typeof importBreaksEffectiveImportRulesMessageId | typeof useServerJSXMessageId, []>>} context The ESLint rule's `context` object.
 * @param {import('@typescript-eslint/types').TSESTree.ImportDeclaration} node The ESLint `node` of the rule's current traversal.
 * @returns {{skip: true; importedFileEffectiveDirective: undefined; resolvedImportPath: undefined;} | {skip: undefined; importedFileEffectiveDirective: USE_SERVER_LOGICS | USE_SERVER_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_LOGICS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_LOGICS | USE_AGNOSTIC_COMPONENTS; resolvedImportPath: string;}} Returns either an object with `skip: true` to disregard or one with the non-null `importedFileEffectiveDirective`.
 */
const importedFileFlow = (context, node) => {
  // finds the full path of the import
  const resolvedImportPath = resolveImportPath(
    path.dirname(context.filename),
    node.source.value,
    context.cwd
  );

  // does not operate on paths it did not resolve
  if (resolvedImportPath === null) return { skip: true };
  // does not operate on non-JS files
  const isImportedFileJS = EXTENSIONS.some((ext) =>
    resolvedImportPath.endsWith(ext)
  );
  if (!isImportedFileJS) return { skip: true };

  /* GETTING THE DIRECTIVE (or lack thereof) OF THE IMPORTED FILE */
  const importedFileDirective =
    getDirectiveFromImportedModule(resolvedImportPath);
  // GETTING THE EXTENSION OF THE IMPORTED FILE
  const importedFileFileExtension = path.extname(resolvedImportPath);
  // GETTING THE EFFECTIVE DIRECTIVE OF THE IMPORTED FILE
  const importedFileEffectiveDirective = getEffectiveDirective(
    importedFileDirective,
    importedFileFileExtension
  );

  // also fails if one of the seven effective directives has not been obtained
  if (importedFileEffectiveDirective === null) {
    console.error("ERROR. Effective directive should never be null.");
    return { skip: true };
  }

  // For now skipping on both "does not operate" (which should ignore) and "fails" albeit with console.error (which should crash).

  return {
    importedFileEffectiveDirective,
  };
};

/* importsFlow */

/** The full flow for import traversals to enforce effective directives import rules.
 * @param {Readonly<import('@typescript-eslint/utils').TSESLint.RuleContext<typeof reExportNotSameMessageId | typeof importBreaksEffectiveImportRulesMessageId | typeof useServerJSXMessageId, []>>} context The ESLint rule's `context` object.
 * @param {import('@typescript-eslint/types').TSESTree.ImportDeclaration} node The ESLint `node` of the rule's current traversal.
 * @param {USE_SERVER_LOGICS | USE_SERVER_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_LOGICS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_LOGICS | USE_AGNOSTIC_COMPONENTS} currentFileEffectiveDirective The current file's effective directive.
 * @returns Returns early if the flow needs to be interrupted.
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
      importedFileEffectiveDirective
    )
  ) {
    context.report({
      node,
      messageId: importBreaksEffectiveImportRulesMessageId,
      data: {
        [effectiveDirectiveMessage]: makeMessageFromEffectiveDirective(
          currentFileEffectiveDirective
        ),
        [specificViolationMessage]: findSpecificViolationMessage(
          currentFileEffectiveDirective,
          importedFileEffectiveDirective
        ),
      },
    });
  }
};

/* reExportsFlow */

/** The full flow for export traversals, shared between `ExportNamedDeclaration` and `ExportAllDeclaration`, to ensure same effective directive re-exports.
 * @param {Readonly<import('@typescript-eslint/utils').TSESLint.RuleContext<typeof reExportNotSameMessageId | typeof importBreaksEffectiveImportRulesMessageId | typeof useServerJSXMessageId, []>>} context The ESLint rule's `context` object.
 * @param {import('@typescript-eslint/types').TSESTree.ExportNamedDeclaration | import('@typescript-eslint/types').TSESTree.ExportAllDeclaration} node The ESLint `node` of the rule's current traversal.
 * @param {USE_SERVER_LOGICS | USE_SERVER_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_LOGICS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_LOGICS | USE_AGNOSTIC_COMPONENTS} currentFileEffectiveDirective The current file's effective directive.
 * @returns Returns early if the flow needs to be interrupted.
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
