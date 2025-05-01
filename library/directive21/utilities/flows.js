import path from "path";

import {
  EXTENSIONS,
  reExportNotSameMessageId,
  importBreaksCommentedImportRulesMessageId,
  noCommentedDirective,
  commentedDirectiveVerificationFailed,
  importNotStrategized,
  exportNotStrategized,
} from "../../_commons/constants/bases.js";
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
  commentedDirectives_VerificationReports,
  // currentFileCommentedDirective,
  // importedFileCommentedDirective,
  commentedDirectiveMessage,
  specificViolationMessage,
  specificFailure,
} from "../constants/bases.js";

import { resolveImportPath } from "../../_commons/utilities/helpers.js";
import {
  getCommentedDirectiveFromCurrentModule,
  getVerifiedCommentedDirective,
  getCommentedDirectiveFromImportedModule,
  isImportBlocked,
  makeMessageFromCommentedDirective,
  findSpecificViolationMessage,
  getStrategizedDirective,
} from "./helpers.js";

/* currentFileFlow */

/**
 * The flow that begins the import rules enforcement rule, retrieving the valid directive of the current file before comparing it to upcoming valid directives of the files it imports.
 * @param {Readonly<import('@typescript-eslint/utils').TSESLint.RuleContext<typeof reExportNotSameMessageId | typeof importBreaksCommentedImportRulesMessageId | typeof noCommentedDirective | typeof commentedDirectiveVerificationFailed | typeof importNotStrategized | typeof exportNotStrategized, []>>} context The ESLint rule's `context` object.
 * @returns {{skip: true; verifiedCommentedDirective: undefined;} | {skip: undefined; verifiedCommentedDirective: USE_SERVER_LOGICS | USE_CLIENT_LOGICS | USE_AGNOSTIC_LOGICS | USE_SERVER_COMPONENTS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_CONTEXTS | USE_AGNOSTIC_CONDITIONS | USE_AGNOSTIC_STRATEGIES;}} Returns either an object with `skip: true` to disregard or one with the non-null `verifiedCommentedDirective`.
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

  // gets the commented directive from the current file
  const commentedDirective = getCommentedDirectiveFromCurrentModule(context);

  // reports if there is no directive or no valid directive (same, but eventually no directive could have defaults)
  if (!commentedDirective) {
    context.report({
      loc: {
        start: { line: 1, column: 0 },
        end: { line: 1, column: context.sourceCode.lines[0].length },
      },
      messageId: noCommentedDirective,
    });
    return { skip: true };
  }

  const verifiedCommentedDirective = getVerifiedCommentedDirective(
    commentedDirective,
    currentFileExtension
  );

  // reports if the verification failed
  if (!verifiedCommentedDirective) {
    context.report({
      loc: {
        start: { line: 1, column: 0 },
        end: { line: 1, column: context.sourceCode.lines[0].length },
      },
      messageId: commentedDirectiveVerificationFailed,
      data: {
        [specificFailure]:
          commentedDirectives_VerificationReports[commentedDirective],
      },
    });
    return { skip: true };
  }

  return {
    verifiedCommentedDirective,
  };
};

/* importedFileFlow */

/**
 * The flow that is shared between import and re-export traversals to obtain the import file's commented directive.
 * @param {Readonly<import('@typescript-eslint/utils').TSESLint.RuleContext<typeof reExportNotSameMessageId | typeof importBreaksCommentedImportRulesMessageId | typeof noCommentedDirective | typeof commentedDirectiveVerificationFailed | typeof importNotStrategized | typeof exportNotStrategized, []>>} context The ESLint rule's `context` object.
 * @param {import('@typescript-eslint/types').TSESTree.ImportDeclaration} node The ESLint `node` of the rule's current traversal.
 * @returns {{skip: true; importedFileCommentedDirective: undefined;} | {skip: undefined; importedFileCommentedDirective: USE_SERVER_LOGICS | USE_CLIENT_LOGICS | USE_AGNOSTIC_LOGICS | USE_SERVER_COMPONENTS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_CONTEXTS | USE_AGNOSTIC_CONDITIONS;}} Returns either an object with `skip: true` to disregard or one with the non-null `importedFileCommentedDirective`.
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
  let importedFileCommentedDirective =
    getCommentedDirectiveFromImportedModule(resolvedImportPath);

  // returns early if there is no directive or no valid directive (same, but eventually no directive could have defaults)
  if (!importedFileCommentedDirective) {
    console.warn(
      "The imported file, whose path has been resolved, has no directive. It is thus ignored since the report on that circumstance is available on the imported file itself."
    );
    return { skip: true };
  }

  /* GETTING THE CORRECT DIRECTIVE INTERPRETATION OF STRATEGY FOR AGNOSTIC STRATEGIES MODULES IMPORTS. 
  (The Directive-First Architecture does not check whether the export and import Strategies are the same at this time, meaning a @clientLogics strategy could be wrongly imported and interpreted as a @serverLogics strategy. However, Strategy exports are plan to be linting in the future within their own Agnostic Strategies Modules to ensure they respect import rules within their own scopes. It may also become possible to check whether the export and import Strategies are the same in the future when identifiers are defined and the same, especially for components modules where a convention could be to for all non-type export to be named and PascalCase.) */
  if (importedFileCommentedDirective === USE_AGNOSTIC_STRATEGIES) {
    importedFileCommentedDirective = getStrategizedDirective(context, node);

    if (importedFileCommentedDirective === null) {
      context.report({
        node,
        messageId: importNotStrategized,
      });
      return { skip: true };
    }
  }

  return { importedFileCommentedDirective };
};

/* importsFlow */

/**
 * The full flow for import traversals to enforce effective directives import rules.
 * @param {Readonly<import('@typescript-eslint/utils').TSESLint.RuleContext<typeof reExportNotSameMessageId | typeof importBreaksCommentedImportRulesMessageId | typeof noCommentedDirective | typeof commentedDirectiveVerificationFailed | typeof importNotStrategized | typeof exportNotStrategized, []>>} context The ESLint rule's `context` object.
 * @param {import('@typescript-eslint/types').TSESTree.ImportDeclaration} node The ESLint `node` of the rule's current traversal.
 * @param {USE_SERVER_LOGICS | USE_CLIENT_LOGICS | USE_AGNOSTIC_LOGICS | USE_SERVER_COMPONENTS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_CONTEXTS | USE_AGNOSTIC_CONDITIONS | USE_AGNOSTIC_STRATEGIES} currentFileCommentedDirective The current file's commented directive.
 * @returns Returns early if the flow needs to be interrupted.
 */
export const importsFlow = (context, node, currentFileCommentedDirective) => {
  // does not operate on `import type`
  if (node.importKind === "type") return;

  const result = importedFileFlow(context, node);

  if (result.skip) return;
  const { importedFileCommentedDirective } = result;

  if (
    isImportBlocked(
      currentFileCommentedDirective,
      importedFileCommentedDirective
    )
  ) {
    context.report({
      node,
      messageId: importBreaksCommentedImportRulesMessageId,
      data: {
        [commentedDirectiveMessage]: makeMessageFromCommentedDirective(
          currentFileCommentedDirective
        ),
        [specificViolationMessage]: findSpecificViolationMessage(
          currentFileCommentedDirective,
          importedFileCommentedDirective
        ),
      },
    });
  }
};

/* allExportsFlow */

/**
 * The full flow for export traversals, shared between `ExportNamedDeclaration`, `ExportAllDeclaration`, and `ExportDefaultDeclaration`, to ensure same commented directive re-exports in modules that aren't Agnostic Strategies Modules, and enforce strategized exports specifically in Agnostic Strategies Modules.
 * @param {Readonly<import('@typescript-eslint/utils').TSESLint.RuleContext<typeof reExportNotSameMessageId | typeof importBreaksCommentedImportRulesMessageId | typeof noCommentedDirective | typeof commentedDirectiveVerificationFailed | typeof importNotStrategized | typeof exportNotStrategized, []>>} context The ESLint rule's `context` object.
 * @param {import('@typescript-eslint/types').TSESTree.ExportNamedDeclaration | import('@typescript-eslint/types').TSESTree.ExportAllDeclaration | import('@typescript-eslint/types').TSESTree.ExportDefaultDeclaration} node The ESLint `node` of the rule's current traversal.
 * @param {USE_SERVER_LOGICS | USE_CLIENT_LOGICS | USE_AGNOSTIC_LOGICS | USE_SERVER_COMPONENTS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_CONTEXTS | USE_AGNOSTIC_CONDITIONS | USE_AGNOSTIC_STRATEGIES} currentFileCommentedDirective The current file's commented directive.
 * @returns Returns early if the flow needs to be interrupted.
 */
export const allExportsFlow = (
  context,
  node,
  currentFileCommentedDirective
) => {
  // does not operate on `export type`
  if (node.exportKind === "type") return;

  if (node.source) {
    const result = importedFileFlow(context, node);

    if (result.skip) return;
    const { importedFileCommentedDirective } = result;

    // ignores if this is NOT an Agnostic Strategies Module
    // verifies current node export strategy if "use agnostic strategies"
    if (currentFileCommentedDirective === USE_AGNOSTIC_STRATEGIES) {
      const exportStrategizedDirective = getStrategizedDirective(context, node);

      if (exportStrategizedDirective === null) {
        context.report({
          node,
          messageId: exportNotStrategized,
        });
        return;
      }

      currentFileCommentedDirective = exportStrategizedDirective;
    }

    if (currentFileCommentedDirective !== importedFileCommentedDirective) {
      context.report({
        node,
        messageId: reExportNotSameMessageId,
        data: {
          // currentFileCommentedDirective
          currentFileCommentedDirective,
          // importedFileCommentedDirective
          importedFileCommentedDirective,
        },
      });
      return;
    }
  } else {
    // ignores if this is NOT an Agnostic Strategies Module
    // verifies current node export strategy if "use agnostic strategies"
    if (currentFileCommentedDirective === USE_AGNOSTIC_STRATEGIES) {
      const exportStrategizedDirective = getStrategizedDirective(context, node);

      if (exportStrategizedDirective === null) {
        context.report({
          node,
          messageId: exportNotStrategized,
        });
        return;
      }

      // just to emphasize that this is the same short flow from above
      currentFileCommentedDirective = exportStrategizedDirective;
    }
  }
};
