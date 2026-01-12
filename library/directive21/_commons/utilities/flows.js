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
  // importNotStrategizedMessageId,
  forbiddenChildrenMessageId,
  missingChildrenMessageId,
  cantChainImportAcrossEnvironmentsMessageId,
  noRenderPropMessageId,
  noOnOnIntrinsicsMessageId,
  skip,
} from "../../../_commons/constants/bases.js";
import {
  USE_AGNOSTIC_STRATEGIES,
  USE_CLIENT_COMPONENTS,
  USE_CLIENT_CONTEXTS,
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
  USE_AGNOSTIC_CONDITIONS,
} from "../constants/bases.js";

import {
  getEnvironmentFromResolvedDirective,
  highlightFirstLineOfCode,
} from "../../../_commons/utilities/helpers.js";
import { getDirectiveFromCurrentModule } from "../../../agnostic20/_commons/utilities/helpers.js";
import {
  getCommentedDirectiveFromCurrentModule,
  getVerifiedCommentedDirective,
  getCommentedDirectiveFromImportedModule,
  isImportBlocked,
  makeMessageFromCurrentFileCommentedDirective,
  findSpecificViolationMessage,
  // getStrategizedDirective,
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
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').CallExpression} CallExpression
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').FunctionDeclaration} FunctionDeclaration
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').JSXElement} JSXElement
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').JSXOpeningElement} JSXOpeningElement
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').Parameter} Parameter
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').Environment} Environment
 */

/* currentFileFlow */

// copied from eXtra JSX (further proving that all core constants and utilities from eXtra JSX should live inside use-agnostic in v2)

/**
 * @type {readonly [".x.jsx", ".x.cjsx", ".x.mjsx", ".x.tsx", ".x.ctsx", ".x.mtsx"]}
 */
export const eXtraJsxExtensions = Object.freeze([
  ".x.jsx",
  ".x.cjsx",
  ".x.mjsx",
  ".x.tsx",
  ".x.ctsx",
  ".x.mtsx",
]);

/**
 * @type {readonly [".x.js", ".x.cjs", ".x.mjs", ".x.ts", ".x.cts", ".x.mts"]}
 */
export const eXtraJsExtensions = Object.freeze([
  ".x.js",
  ".x.cjs",
  ".x.mjs",
  ".x.ts",
  ".x.cts",
  ".x.mts",
]);

/**
 * @type {readonly [".x.jsx", ".x.cjsx", ".x.mjsx", ".x.tsx", ".x.ctsx", ".x.mtsx", ".x.js", ".x.cjs", ".x.mjs", ".x.ts", ".x.cts", ".x.mts"]}
 */
export const extraJavaScriptExtensions = Object.freeze([
  ...eXtraJsxExtensions,
  ...eXtraJsExtensions,
]);

/**
 * $COMMENT#JSDOC#CORE#DEFS#FILEISANYJAVASCRIPT
 * @param {string} filePath $COMMENT#JSDOC#CORE#PARAMS#FILEPATH
 * @returns $COMMENT#JSDOC#CORE#RETURNS#FILEISANYJAVASCRIPT
 */
export const fileIsAnyJavaScript = (filePath) =>
  EXTENSIONS.some((e) => filePath.endsWith(e));

/**
 * $COMMENT#JSDOC#CORE#DEFS#FILEISEXTRAJAVASCRIPT
 * @param {string} filePath $COMMENT#JSDOC#CORE#PARAMS#FILEPATH
 * @returns $COMMENT#JSDOC#CORE#RETURNS#FILEISEXTRAJAVASCRIPT
 */
export const fileIsExtraJavaScript = (filePath) =>
  extraJavaScriptExtensions.some((e) => filePath.endsWith(e));

/**
 * $COMMENT#JSDOC#CORE#DEFS#FILEISREGULARJAVASCRIPT
 * @param {string} filePath $COMMENT#JSDOC#CORE#PARAMS#FILEPATH
 * @returns $COMMENT#JSDOC#CORE#RETURNS#FILEISREGULARJAVASCRIPT
 */
export const fileIsRegularJavaScript = (filePath) =>
  fileIsAnyJavaScript(filePath) && !fileIsExtraJavaScript(filePath);

//

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

    // NEW
    const isRegularJavaScriptAgnosticStrategies =
      fileIsRegularJavaScript(context.filename) &&
      verifiedCommentedDirective === USE_AGNOSTIC_STRATEGIES;

    // do not report if the module is a non-Extra JavaScript Agnostic Strategies Module, in order to allow them the freedom of doing whatever they want so they can behave in any which way they need to as convention files (JSX extension still required though)
    if (!isRegularJavaScriptAgnosticStrategies)
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

  // NEW!!
  // No changes anymore. Agnostic Strategies Modules from now on are going to be considered regularly checked module that simply CANNOT be imported anywhere.

  // if (importedFileCommentedDirective === USE_AGNOSTIC_STRATEGIES) {
  //   const importingFileCommentedDirective = getStrategizedDirective(
  //     context,
  //     node
  //   );

  //   if (
  //     importingFileCommentedDirective === null &&
  //     fileIsExtraJavaScript(context.filename)
  //   ) {
  //     context.report({
  //       node,
  //       messageId: importNotStrategizedMessageId,
  //     });
  //     return skipTrue;
  //   }

  //   // FOR NOW, we consider the importingFileCommentedDirective (which is strategized) and the importedFileCommentedDirective (which should be strategized on its own imported file) to be same, given the limitation highlighted above.
  //   importedFileCommentedDirective = importingFileCommentedDirective;
  // }

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

// NEW!! Currently strictly adapted from importedFileFlow
/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#IMPORTEDFILEFLOWREQUIRE
 * @param {Context} context $COMMENT#JSDOC#PARAMS#CONTEXTB
 * @param {CallExpression} node $COMMENT#JSDOC#PARAMS#NODE
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#IMPORTEDFILEFLOW
 */
const importedFileFlowRequire = (context, node) => {
  const skipTrue = {
    ...skip,
    importedFileCommentedDirective: undefined,
    analyzeExportsForReExportsResults: undefined,
  };

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

    // if (importedFileCommentedDirective === USE_AGNOSTIC_STRATEGIES) {
    //   const importingFileCommentedDirective = getStrategizedDirective(
    //     context,
    //     node
    //   );

    //   if (
    //     importingFileCommentedDirective === null &&
    //     fileIsExtraJavaScript(context.filename)
    //   ) {
    //     context.report({
    //       node,
    //       messageId: importNotStrategizedMessageId,
    //     });
    //     return skipTrue;
    //   }

    //   // FOR NOW, we consider the importingFileCommentedDirective (which is strategized) and the importedFileCommentedDirective (which should be strategized on its own imported file) to be same, given the limitation highlighted above.
    //   importedFileCommentedDirective = importingFileCommentedDirective;
    // }

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
  } else return skipTrue;
};

/* importsFlow */

/**
 * $COMMENT#JSDOC#FORALIASVARIABLES#IMPORTSFLOWCOMMENTED
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

  // returns early is the current file is an Agnostic Strategies Module // not anymore
  // if (currentFileCommentedDirective === USE_AGNOSTIC_STRATEGIES) return;

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

  if (result.analyzeExportsForReExportsResults) {
    const { reExportsWithSource, reExportsViaLocal } =
      result.analyzeExportsForReExportsResults;

    // immediately returns if no re-exports are found
    if (reExportsWithSource.length === 0 && reExportsViaLocal.length === 0)
      return;

    const currentFileEnvironment = getEnvironmentFromResolvedDirective(
      currentFileCommentedDirective
    );
    const importedFileEnvironment = getEnvironmentFromResolvedDirective(
      importedFileCommentedDirective
    );
    // To reduce complexity, only checks for the presence of direct re-exports at this time. And to be fair this is OK. It gives people room to try to circumvent the rule, so that they can experience for themselves exactly what the rule prevents.
    if (
      reExportsWithSource.length > 0 &&
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

// NEW!! Currently strictly adapted from importsFlow
/**
 * $COMMENT#JSDOC#FORALIASVARIABLES#IMPORTSFLOWCOMMENTEDREQUIRE
 * @param {Context} context $COMMENT#JSDOC#PARAMS#CONTEXTB
 * @param {CallExpression} node $COMMENT#JSDOC#PARAMS#NODE
 * @param {CommentedDirective} currentFileCommentedDirective $COMMENT#JSDOC#PARAMS#DIRECTIVE21#CURRENTFILECOMMENTEDDIRECTIVE
 * @returns $COMMENT#JSDOC#FORALIASVARIABLES#FLOWRETURNSEARLY
 */
export const importsFlowRequire = (
  context,
  node,
  currentFileCommentedDirective
) => {
  const result = importedFileFlowRequire(context, node);

  if (result.skip) return;
  const { importedFileCommentedDirective } = result;

  // returns early is the current file is an Agnostic Strategies Module // not anymore
  // if (currentFileCommentedDirective === USE_AGNOSTIC_STRATEGIES) return;

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

  if (result.analyzeExportsForReExportsResults) {
    const { reExportsWithSource, reExportsViaLocal } =
      result.analyzeExportsForReExportsResults;

    // immediately returns if no re-exports are found
    if (reExportsWithSource.length === 0 && reExportsViaLocal.length === 0)
      return;

    const currentFileEnvironment = getEnvironmentFromResolvedDirective(
      currentFileCommentedDirective
    );
    const importedFileEnvironment = getEnvironmentFromResolvedDirective(
      importedFileCommentedDirective
    );

    if (
      reExportsWithSource.length > 0 &&
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

    // // returns early if an address has been made
    // if (!addressedDirective) return;
    // moves on to the re-export check otherwise
    // else
    currentFileCommentedDirective = addressedDirective; // to still keep compatibility with strategies

    // Lints imports of Agnostic Strategies Modules beyond strategy resolution, such as to warn imports of Special Agnostic Modules. Does the same with $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#KINDSSIMPLE Modules, since they are the only other modules which cannot import themselves.
    if (
      currentFileCommentedDirective === USE_AGNOSTIC_STRATEGIES ||
      currentFileCommentedDirective === USE_AGNOSTIC_CONDITIONS
    ) {
      // Basically, all modules need to do reexports that correspond to their own modules, but not Agnostic Strategies Modules and $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#KINDSSIMPLE Modules, the latter which are in fact NOT allowed to do re-exports.
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
    } else if (
      currentFileCommentedDirective !== importedFileCommentedDirective
    ) {
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

    if (result.analyzeExportsForReExportsResults) {
      const { reExportsWithSource, reExportsViaLocal } =
        result.analyzeExportsForReExportsResults;

      // immediately returns if no re-exports are found
      if (reExportsWithSource.length === 0 && reExportsViaLocal.length === 0)
        return;

      if (originalCurrentFileCommentedDirective !== USE_AGNOSTIC_STRATEGIES) {
        const currentFileEnvironment = getEnvironmentFromResolvedDirective(
          currentFileCommentedDirective
        );
        const importedFileEnvironment = getEnvironmentFromResolvedDirective(
          importedFileCommentedDirective
        );

        if (
          reExportsWithSource.length > 0 &&
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

/* functionDeclarationFlow */

/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#NAMEISPASCALCASE
 * @param {string} name $COMMENT#JSDOC#PARAMS#DIRECTIVE21#NAME
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#NAMEISPASCALCASE
 */
const nameIsPascalCase = (name) => {
  // PascalCase: starts with capital, no underscores, no hyphens
  return /^[A-Z][a-zA-Z0-9]*$/.test(name);
};

/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#DECLARESCHILDRENPROP
 * @param {Parameter[]} params $COMMENT#JSDOC#PARAMS#DIRECTIVE21#PARAMS
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#DECLARESCHILDRENPROP
 */
const declaresChildrenProp = (params) => {
  if (params.length === 0) return false;

  const param = params[0];

  // function Component({ children })
  if (param.type === "ObjectPattern") {
    return param.properties.some(
      (prop) =>
        prop.type === "Property" &&
        prop.key.type === "Identifier" &&
        prop.key.name === "children"
    );
  }

  return false;
};

/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#FUNCTIONDECLARATIONFLOW
 * @param {Context} context $COMMENT#JSDOC#PARAMS#CONTEXTB
 * @param {FunctionDeclaration} node $COMMENT#JSDOC#PARAMS#NODE
 * @param {CommentedDirective} currentFileCommentedDirective $COMMENT#JSDOC#PARAMS#DIRECTIVE21#CURRENTFILECOMMENTEDDIRECTIVE
 * @returns $COMMENT#JSDOC#FORALIASVARIABLES#FLOWRETURNSEARLY
 */
export const functionDeclarationFlow = (
  context,
  node,
  currentFileCommentedDirective
) => {
  if (
    currentFileCommentedDirective !== USE_CLIENT_COMPONENTS &&
    currentFileCommentedDirective !== USE_CLIENT_CONTEXTS
  )
    return;

  const name = node.id && node.id.name;
  if (!name) return;
  if (!nameIsPascalCase(name)) return;

  const params = node.params;

  if (
    declaresChildrenProp(params) &&
    currentFileCommentedDirective === USE_CLIENT_COMPONENTS
  ) {
    context.report({
      node,
      messageId: forbiddenChildrenMessageId,
    });
  }
  if (
    !declaresChildrenProp(params) &&
    currentFileCommentedDirective === USE_CLIENT_CONTEXTS
  ) {
    context.report({
      node,
      messageId: missingChildrenMessageId,
    });
  }
};

/* jsxElementFlow */

/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#JSXELEMENTFLOW
 * @param {Context} context $COMMENT#JSDOC#PARAMS#CONTEXTB
 * @param {JSXElement} node $COMMENT#JSDOC#PARAMS#NODE
 * @param {CommentedDirective} currentFileCommentedDirective $COMMENT#JSDOC#PARAMS#DIRECTIVE21#CURRENTFILECOMMENTEDDIRECTIVE
 * @returns $COMMENT#JSDOC#FORALIASVARIABLES#FLOWRETURNSEARLY
 */
export const jsxElementFlow = (
  context,
  node,
  currentFileCommentedDirective
) => {
  for (const child of node.children) {
    if (!child) continue;

    // only looks at top-level children
    if (child.type === "JSXExpressionContainer") {
      const expr = child.expression;

      if (
        (expr.type === "ArrowFunctionExpression" ||
          expr.type === "FunctionExpression") &&
        currentFileCommentedDirective !== USE_CLIENT_COMPONENTS
      ) {
        context.report({
          node: child,
          messageId: noRenderPropMessageId,
        });
      }
    }
  }
};

/* jsxOpeningElementFlow */

/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#JSXOPENINGELEMENTFLOW
 * @param {Context} context $COMMENT#JSDOC#PARAMS#CONTEXTB
 * @param {JSXOpeningElement} node $COMMENT#JSDOC#PARAMS#NODE
 * @param {CommentedDirective} currentFileCommentedDirective $COMMENT#JSDOC#PARAMS#DIRECTIVE21#CURRENTFILECOMMENTEDDIRECTIVE
 * @returns $COMMENT#JSDOC#FORALIASVARIABLES#FLOWRETURNSEARLY
 */
export const jsxOpeningElementFlow = (
  context,
  node,
  currentFileCommentedDirective
) => {
  const { name, attributes } = node;

  // Only intrinsic elements: <div>, <button>, etc.
  if (
    name.type !== "JSXIdentifier" ||
    name.name[0] !== name.name[0].toLowerCase()
  ) {
    return;
  }

  for (const attr of attributes) {
    if (attr.type !== "JSXAttribute") continue;
    if (attr.name.type !== "JSXIdentifier") continue;

    const propName = attr.name.name;

    // matches onXxx where X is capitalized
    if (
      /^on[A-Z]/.test(propName) &&
      ![
        USE_CLIENT_COMPONENTS,
        USE_CLIENT_CONTEXTS,
        USE_AGNOSTIC_STRATEGIES,
      ].includes(currentFileCommentedDirective)
    ) {
      context.report({
        node: attr,
        messageId: noOnOnIntrinsicsMessageId,
      });
    }
  }
};
