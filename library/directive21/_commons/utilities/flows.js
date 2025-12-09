import path from "path";

import { resolveImportingPath } from "resolve-importing-path";
import { findUpSync } from "find-up";

import {
  EXTENSIONS,
  reExportNotSameMessageId,
  importBreaksCommentedImportRulesMessageId,
  noCommentedDirectiveMessageId,
  commentedDirectiveVerificationFailedMessageId,
  commentedDirectiveReactDirectiveFailedMessageId,
  importNotStrategizedMessageId,
  cantChainImportAcrossEnvironmentsMessageId,
  skip,
} from "../../../_commons/constants/bases.js";
import {
  USE_AGNOSTIC_STRATEGIES,
  commentedDirectives_verificationReports,
  // currentFileCommentedDirective,
  // importedFileCommentedDirective,
  // currentFileEnvironment,
  // importedFileEnvironment,
  commentedDirectiveMessage,
  specificViolationMessage,
  specificFailure,
  // verifiedCommentedDirective,
  // expectedReactDirectiveAsText,
  environments_allowedChainImportEnvironments,
  commentedDirectives_reactDirectives,
  reactDirectives_asTexts,
} from "../constants/bases.js";

import { highlightFirstLineOfCode } from "../../../_commons/utilities/helpers.js";
import { getDirectiveFromCurrentModule } from "../../../agnostic20/_commons/utilities/helpers.js";
import {
  getCommentedDirectiveFromCurrentModule,
  getVerifiedCommentedDirective,
  getCommentedDirectiveFromImportedModule,
  isImportBlocked,
  makeMessageFromCurrentFileCommentedDirective,
  findSpecificViolationMessage,
  getStrategizedDirective,
  addressDirectiveIfAgnosticStrategies,
} from "./helpers.js";
import { analyzeExportsForReExports } from "./analyze-exports-re.js";

/**
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').Context} Context
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').CommentedDirective} CommentedDirective
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').ImportDeclaration} ImportDeclaration
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').ExportNamedDeclaration} ExportNamedDeclaration
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').ExportAllDeclaration} ExportAllDeclaration
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').ExportDefaultDeclaration} ExportDefaultDeclaration
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').Environment} Environment
 */

/* currentFileFlow */

/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#CURRENTFILEFLOW
 * @param {Context} context $COMMENT#JSDOC#PARAMS#CONTEXTB
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#CURRENTFILEFLOW
 */
export const currentFileFlow = (context) => {
  const skipTrue = { ...skip, verifiedCommentedDirective: undefined };

  // gets the extension of the current file
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
      messageId: noCommentedDirectiveMessageId,
    });
    return skipTrue;
  }

  // verifies the commented directive from the current file
  const verifiedCommentedDirective = getVerifiedCommentedDirective(
    commentedDirective,
    currentFileExtension
  );

  // reports if the verification failed
  if (!verifiedCommentedDirective) {
    context.report({
      loc: highlightFirstLineOfCode(context),
      messageId: commentedDirectiveVerificationFailedMessageId,
      data: {
        [specificFailure]:
          commentedDirectives_verificationReports[commentedDirective],
      },
    });
    return skipTrue;
  }

  // GETTING THE DIRECTIVE (or lack thereof) OF THE CURRENT FILE
  const currentFileDirective = getDirectiveFromCurrentModule(context);

  if (
    commentedDirectives_reactDirectives[verifiedCommentedDirective] !==
    currentFileDirective
  ) {
    const expectedReactDirective =
      commentedDirectives_reactDirectives[verifiedCommentedDirective];
    const expectedReactDirectiveAsText = reactDirectives_asTexts.get(
      expectedReactDirective
    );

    if (!expectedReactDirectiveAsText) {
      console.warn(
        `Somehow, expectedReactDirectiveAsText for ${expectedReactDirective} is undefined.`
      );
      return { skip: undefined, verifiedCommentedDirective }; // at this time, behaves as if the new implementation didn't exist yet
    }

    context.report({
      loc: highlightFirstLineOfCode(context),
      messageId: commentedDirectiveReactDirectiveFailedMessageId,
      data: {
        // verifiedCommentedDirective
        verifiedCommentedDirective,
        // expectedReactDirectiveAsText
        expectedReactDirectiveAsText,
      },
    });
    return skipTrue;
  }

  return { skip: undefined, verifiedCommentedDirective };
};

/* importedFileFlow */

/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#IMPORTEDFILEFLOW
 * @param {Context} context $COMMENT#JSDOC#PARAMS#CONTEXTB
 * @param {ImportDeclaration} node $COMMENT#JSDOC#PARAMS#NODE
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#IMPORTEDFILEFLOW
 */
const importedFileFlow = (context, node) => {
  const skipTrue = {
    ...skip,
    importedFileCommentedDirective: undefined,
    analyzeExportsForReExportsResults: undefined,
  };

  // finds the full path of the import
  const resolvedImportPath = resolveImportingPath(
    path.dirname(context.filename),
    node.source.value,
    findUpSync("tsconfig.json", {
      cwd: path.dirname(context.filename),
    }) ?? context.cwd
  );

  // does not operate on paths it did not resolve
  if (resolvedImportPath === null) return skipTrue;
  // does not operate on non-JS files
  const isImportedFileJS = EXTENSIONS.some((ext) =>
    resolvedImportPath.endsWith(ext)
  );
  if (!isImportedFileJS) return skipTrue;

  // GETTING THE DIRECTIVE (or lack thereof) OF THE IMPORTED FILE
  let {
    commentedDirective: importedFileCommentedDirective,
    sourceCode: importedFileSourceCode,
  } = getCommentedDirectiveFromImportedModule(resolvedImportPath);

  // returns early if there is no directive or no valid directive (same, but eventually no directive could have defaults)
  if (!importedFileCommentedDirective) {
    // Now silencing the warning as superfluous, in order to not warn on imports of files without a commented directive that are outside of linting range.

    // console.warn(
    //   `WARNING. The imported file ${resolvedImportPath}, whose path has been resolved from ${context.filename}, has no commented $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVEPERIOD It is thus ignored since the report on that circumstance would be available on the imported file itself.`
    // ); // The decision not to report has been taken to not inflate the number of warnings.
    return skipTrue;
  }

  /* GETTING THE CORRECT DIRECTIVE INTERPRETATION OF STRATEGY FOR AGNOSTIC STRATEGIES MODULES IMPORTS. 
  The Directive-First Architecture does not check whether the export and import Strategies are the same at this time, meaning an @clientLogics strategy could be wrongly imported and interpreted as an @serverLogics strategy.
  
  After a short attempt, the feature to address this (crossingStrategies) is currently canceled, mainly due to the exponential complexity provided by the different ways in which exports can be made in JavaScript.
  
  (Consequently, details below are currently at the stage of wishful thinking.)
  Strategy exports are planned to be linting in the future within their own Agnostic Strategies Modules to ensure they respect import rules within their own scopes. It may also become possible to check whether the export and import Strategies are the same in the future when identifiers are defined and the same, especially for components modules where a convention could be for all non-type exports to be named and PascalCase. */

  if (importedFileCommentedDirective === USE_AGNOSTIC_STRATEGIES) {
    const importingFileCommentedDirective = getStrategizedDirective(
      context,
      node
    );

    if (importingFileCommentedDirective === null) {
      context.report({
        node,
        messageId: importNotStrategizedMessageId,
      });
      return skipTrue;
    }

    // FOR NOW, we consider the importingFileCommentedDirective (which is strategized) and the importedFileCommentedDirective (which should be strategized on its own imported file) to be same, given the limitation highlighted above.
    importedFileCommentedDirective = importingFileCommentedDirective;
  }

  // you never know
  if (!importedFileSourceCode) {
    console.warn(
      `Somehow, file "${resolvedImportPath}" does not have a SourceCode object obtainable.`
    );
    return {
      skip: undefined,
      importedFileCommentedDirective,
      analyzeExportsForReExportsResults: undefined,
    };
  }

  const analyzeExportsForReExportsResults = analyzeExportsForReExports(
    importedFileSourceCode
  );

  return {
    skip: undefined,
    importedFileCommentedDirective,
    analyzeExportsForReExportsResults,
  };
};

/* importsFlow */

/**
 * $COMMENT#JSDOC#FORALIASVARIABLES#IMPORTSFLOW
 * @param {Context} context $COMMENT#JSDOC#PARAMS#CONTEXTB
 * @param {ImportDeclaration} node $COMMENT#JSDOC#PARAMS#NODE
 * @param {CommentedDirective} currentFileCommentedDirective $COMMENT#JSDOC#PARAMS#DIRECTIVE21#CURRENTFILECOMMENTEDDIRECTIVE
 * @returns $COMMENT#JSDOC#FORALIASVARIABLES#FLOWRETURNSEARLY
 */
export const importsFlow = (context, node, currentFileCommentedDirective) => {
  // does not operate on `import type`
  if (node.importKind === "type") return;

  const result = importedFileFlow(context, node);

  if (result.skip) return;
  const { importedFileCommentedDirective } = result;

  // returns early is the current file is an Agnostic Strategies Module
  if (currentFileCommentedDirective === USE_AGNOSTIC_STRATEGIES) return;

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
        [commentedDirectiveMessage]:
          makeMessageFromCurrentFileCommentedDirective(
            currentFileCommentedDirective
          ),
        [specificViolationMessage]: findSpecificViolationMessage(
          currentFileCommentedDirective,
          importedFileCommentedDirective
        ),
      },
    });
  }

  // NEW
  if (result.analyzeExportsForReExportsResults) {
    const { reExportsWithSource, reExportsViaLocal } =
      result.analyzeExportsForReExportsResults;

    // immediately returns if no re-exports are found
    if (reExportsWithSource.length === 0 && reExportsViaLocal.length === 0)
      return;

    /** @type {Environment} */
    const currentFileEnvironment = currentFileCommentedDirective.split(" ")[1];
    /** @type {Environment} */
    const importedFileEnvironment =
      importedFileCommentedDirective.split(" ")[1];

    if (
      !environments_allowedChainImportEnvironments[
        currentFileEnvironment
      ].includes(importedFileEnvironment)
    ) {
      context.report({
        node,
        messageId: cantChainImportAcrossEnvironmentsMessageId,
        data: {
          // currentFileEnvironment:
          currentFileEnvironment,
          // importedFileEnvironment:
          importedFileEnvironment,
        },
      });
    }
  }
};

/* allExportsFlow */

/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#ALLEXPORTSFLOW
 * @param {Context} context $COMMENT#JSDOC#PARAMS#CONTEXTB
 * @param {ExportNamedDeclaration | ExportAllDeclaration | ExportDefaultDeclaration} node $COMMENT#JSDOC#PARAMS#NODE
 * @param {CommentedDirective} currentFileCommentedDirective $COMMENT#JSDOC#PARAMS#DIRECTIVE21#CURRENTFILECOMMENTEDDIRECTIVE
 * @returns $COMMENT#JSDOC#FORALIASVARIABLES#FLOWRETURNSEARLY
 */
export const allExportsFlow = (
  context,
  node,
  currentFileCommentedDirective
) => {
  // saving the original commented directive (speficially for "use agnostic strategies")
  const originalCurrentFileCommentedDirective = currentFileCommentedDirective;

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

    // returns early if an address has been made
    if (!addressedDirective) return;
    // moves on to the re-export check otherwise
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

    // NEW
    if (result.analyzeExportsForReExportsResults) {
      const { reExportsWithSource, reExportsViaLocal } =
        result.analyzeExportsForReExportsResults;

      // immediately returns if no re-exports are found
      if (reExportsWithSource.length === 0 && reExportsViaLocal.length === 0)
        return;

      if (originalCurrentFileCommentedDirective !== USE_AGNOSTIC_STRATEGIES) {
        /** @type {Environment} */
        const currentFileEnvironment =
          currentFileCommentedDirective.split(" ")[1];
        /** @type {Environment} */
        const importedFileEnvironment =
          importedFileCommentedDirective.split(" ")[1];

        if (
          !environments_allowedChainImportEnvironments[
            currentFileEnvironment
          ].includes(importedFileEnvironment)
        ) {
          context.report({
            node,
            messageId: cantChainImportAcrossEnvironmentsMessageId,
            data: {
              // currentFileEnvironment:
              currentFileEnvironment,
              // importedFileEnvironment:
              importedFileEnvironment,
            },
          });
        }
      }
    }
  }
};
