import path from "path";

import {
  EXTENSIONS,
  reExportNotSameMessageId,
  importBreaksCommentedImportRulesMessageId,
  noCommentedDirective,
  commentedDirectiveVerificationFailed,
  importNotStrategized,
  skip,
} from "../../../_commons/constants/bases.js";
import {
  USE_AGNOSTIC_STRATEGIES,
  commentedDirectives_verificationReports,
  // currentFileCommentedDirective,
  // importedFileCommentedDirective,
  commentedDirectiveMessage,
  specificViolationMessage,
  specificFailure,
} from "../constants/bases.js";

import {
  resolveImportPath,
  highlightFirstLineOfCode,
} from "../../../_commons/utilities/helpers.js";
import {
  getCommentedDirectiveFromCurrentModule,
  getVerifiedCommentedDirective,
  getCommentedDirectiveFromImportedModule,
  isImportBlocked,
  makeMessageFromCommentedDirective,
  findSpecificViolationMessage,
  getStrategizedDirective,
  addressDirectiveIfAgnosticStrategies,
} from "./helpers.js";

/**
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').Context} Context
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').CommentedDirective} CommentedDirective
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').CommentedDirectiveWithoutUseAgnosticStrategies} CommentedDirectiveWithoutUseAgnosticStrategies
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').ImportDeclaration} ImportDeclaration
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').ExportNamedDeclaration} ExportNamedDeclaration
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').ExportAllDeclaration} ExportAllDeclaration
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').ExportDefaultDeclaration} ExportDefaultDeclaration
 */

/* currentFileFlow */

/**
 * The flow that begins the import rules enforcement rule, retrieving the valid directive of the current file before comparing it to upcoming valid directives of the files it imports.
 * @param {Context} context The ESLint rule's `context` object.
 * @returns Either an object with `skip: true` to disregard or one with the non-null `verifiedCommentedDirective`. ()
 */
export const currentFileFlow = (context) => {
  const skipTrue = { ...skip, verifiedCommentedDirective: undefined };

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
    return skipTrue;
  }

  // gets the commented directive from the current file
  const commentedDirective = getCommentedDirectiveFromCurrentModule(context);

  // reports if there is no directive or no valid directive (same, but eventually no directive could have defaults)
  if (!commentedDirective) {
    context.report({
      loc: highlightFirstLineOfCode(context),
      messageId: noCommentedDirective,
    });
    return skipTrue;
  }

  const verifiedCommentedDirective = getVerifiedCommentedDirective(
    commentedDirective,
    currentFileExtension
  );

  // reports if the verification failed
  if (!verifiedCommentedDirective) {
    context.report({
      loc: highlightFirstLineOfCode(context),
      messageId: commentedDirectiveVerificationFailed,
      data: {
        [specificFailure]:
          commentedDirectives_verificationReports[commentedDirective],
      },
    });
    return skipTrue;
  }

  return { skip: undefined, verifiedCommentedDirective };
};

/* importedFileFlow */

/**
 * The flow that is shared between import and re-export traversals to obtain the import file's commented directive.
 * @param {Context} context The ESLint rule's `context` object.
 * @param {ImportDeclaration} node The ESLint `node` of the rule's current traversal.
 * @returns Either an object with `skip: true` to disregard or one with the non-null `importedFileCommentedDirective`.
 */
const importedFileFlow = (context, node) => {
  const skipTrue = { ...skip, importedFileCommentedDirective: undefined };

  // finds the full path of the import
  const resolvedImportPath = resolveImportPath(
    path.dirname(context.filename),
    node.source.value,
    context.cwd
  );

  // does not operate on paths it did not resolve
  if (resolvedImportPath === null) return skipTrue;
  // does not operate on non-JS files
  const isImportedFileJS = EXTENSIONS.some((ext) =>
    resolvedImportPath.endsWith(ext)
  );
  if (!isImportedFileJS) return skipTrue;

  /* GETTING THE DIRECTIVE (or lack thereof) OF THE IMPORTED FILE */
  let importedFileCommentedDirective =
    getCommentedDirectiveFromImportedModule(resolvedImportPath);

  // returns early if there is no directive or no valid directive (same, but eventually no directive could have defaults)
  if (!importedFileCommentedDirective) {
    console.warn(
      "WARNING. The imported file, whose path has been resolved, has no directive. It is thus ignored since the report on that circumstance is available on the imported file itself."
    );
    return skipTrue;
  }

  /* GETTING THE CORRECT DIRECTIVE INTERPRETATION OF STRATEGY FOR AGNOSTIC STRATEGIES MODULES IMPORTS. 
  The Directive-First Architecture does not check whether the export and import Strategies are the same at this time, meaning an @clientLogics strategy could be wrongly imported and interpreted as an @serverLogics strategy.
  
  After a short attempt, this feature is currently canceled, mainly since the amount of work it will require will not be able to be transferred in a future where commented strategies will actually be real syntax.
  
  (Consequently, details below are currently at the stage of wishful thinking.)
  Strategy exports are planned to be linting in the future within their own Agnostic Strategies Modules to ensure they respect import rules within their own scopes. It may also become possible to check whether the export and import Strategies are the same in the future when identifiers are defined and the same, especially for components modules where a convention could be for all non-type exports to be named and PascalCase. */
  if (importedFileCommentedDirective === USE_AGNOSTIC_STRATEGIES) {
    const importingFileCommentedDirective = getStrategizedDirective(
      context,
      node
    );

    // FOR NOW, we consider the importingFileCommentedDirective (which is strategized) and the importedFileCommentedDirective (which should be strategized on its own imported file) to be same, given the limitation highlighted above.
    importedFileCommentedDirective = importingFileCommentedDirective;

    if (importingFileCommentedDirective === null) {
      context.report({
        node,
        messageId: importNotStrategized,
      });
      return skipTrue;
    }
  }

  return { skip: undefined, importedFileCommentedDirective };
};

/* importsFlow */

/**
 * The full flow for import traversals to enforce effective directives import rules.
 * @param {Context} context The ESLint rule's `context` object.
 * @param {ImportDeclaration} node The ESLint `node` of the rule's current traversal.
 * @param {CommentedDirective} currentFileCommentedDirective The current file's commented directive.
 * @returns Early if the flow needs to be interrupted.
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
 * @param {Context} context The ESLint rule's `context` object.
 * @param {ExportNamedDeclaration | ExportAllDeclaration | ExportDefaultDeclaration} node The ESLint `node` of the rule's current traversal.
 * @param {CommentedDirective} currentFileCommentedDirective The current file's commented directive.
 * @returns Early if the flow needs to be interrupted.
 */
export const allExportsFlow = (
  context,
  node,
  currentFileCommentedDirective
) => {
  // does not operate on `export type`
  if (node.exportKind === "type") return;

  // regular exports scenarios
  if (!node.source) {
    addressDirectiveIfAgnosticStrategies(
      context,
      node,
      currentFileCommentedDirective
    );
  }
  // re-exports scenarios
  else {
    const result = importedFileFlow(context, node);

    if (result.skip) return;
    const { importedFileCommentedDirective } = result;

    const addressedDirective = addressDirectiveIfAgnosticStrategies(
      context,
      node,
      currentFileCommentedDirective
    );

    if (!addressedDirective) return;
    else currentFileCommentedDirective = addressedDirective;

    if (currentFileCommentedDirective !== importedFileCommentedDirective) {
      context.report({
        node,
        messageId: reExportNotSameMessageId,
        data: {
          // currentFileCommentedDirective:
          currentFileCommentedDirective,
          // importedFileCommentedDirective:
          importedFileCommentedDirective,
        },
      });
    }
  }
};
