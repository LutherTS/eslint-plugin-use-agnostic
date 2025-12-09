import { getSourceCodeFromFilePath } from "get-sourcecode-from-file-path";

import { exportNotStrategized } from "../../../_commons/constants/bases.js";
import {
  USE_AGNOSTIC_STRATEGIES,
  commentedDirectivesArray,
  commentedStrategiesArray,
  commentedDirectives_extensionRules,
  commentedStrategies_commentedDirectives,
  commentedDirectives_blockedImports,
} from "../constants/bases.js";

import {
  isImportBlocked as commonsIsImportBlocked,
  makeMessageFromCurrentFileResolvedDirective,
  findSpecificViolationMessage as commonsFindSpecificViolationMessage,
} from "../../../_commons/utilities/helpers.js";

/**
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').SourceCode} SourceCode
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').Context} Context
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').CommentedDirective} CommentedDirective
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').CommentedDirectiveWithoutUseAgnosticStrategies} CommentedDirectiveWithoutUseAgnosticStrategies
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').Extension} Extension
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').ImportDeclaration} ImportDeclaration
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').ExportNamedDeclaration} ExportNamedDeclaration
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').ExportAllDeclaration} ExportAllDeclaration
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').ExportDefaultDeclaration} ExportDefaultDeclaration
 */

/* getCommentedDirectiveFromSourceCode */

/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#DETECTQUOTETYPE
 * @param {string} string $COMMENT#JSDOC#PARAMS#DIRECTIVE21#STRING
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#DETECTQUOTETYPE
 */
const detectQuoteType = (string) => {
  if (string.startsWith("'") && string.endsWith("'")) {
    return true; // single quotes
  } else if (string.startsWith('"') && string.endsWith('"')) {
    return false; // double quotes
  } else {
    return null; // neither
  }
};

/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#STRIPSINGLEQUOTES
 * @param {string} string $COMMENT#JSDOC#PARAMS#DIRECTIVE21#STRING
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#STRIPSINGLEQUOTES
 */
const stripSingleQuotes = (string) => {
  if (string.startsWith("'") && string.endsWith("'")) {
    return string.slice(1, -1);
  }
  return string;
};

/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#STRIPDOUBLEQUOTES
 * @param {string} string $COMMENT#JSDOC#PARAMS#DIRECTIVE21#STRING
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#STRIPSINGLEQUOTES
 */
const stripDoubleQuotes = (string) => {
  if (string.startsWith('"') && string.endsWith('"')) {
    return string.slice(1, -1);
  }
  return string;
};

/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE1
 *
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE2
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERLOGICSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTLOGICSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICLOGICSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERCOMPONENTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTCOMPONENTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCOMPONENTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERFUNCTIONSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTCONTEXTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCONDITIONSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICSTRATEGIESA
 * @param {SourceCode} sourceCode $COMMENT#JSDOC#PARAMS#DIRECTIVE21#SOURCECODE
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE
 */
export const getCommentedDirectiveFromSourceCode = (sourceCode) => {
  // gets all comments from the source code
  const allComments = sourceCode.getAllComments();

  // returns null early if there are no comments
  if (allComments.length === 0) return null;

  // gets the first comment from the source code
  const rawFirstComment = allComments[0];

  const firstComment =
    rawFirstComment.type === "Shebang" ? allComments[1] : rawFirstComment;

  // returns null early if there is no such first comment
  if (!firstComment) return null;

  // returns null early if the first comment is not on one of the first three lines
  if (firstComment.loc.start.line > 3) return null;

  // returns null early if the first comment is not on the first column
  if (firstComment.loc.start.column !== 0) return null;

  // gets the trimmed raw value of the first comment
  const rawValue = firstComment.value.trim();

  // checks if the raw value is single- or double-quoted (or neither)
  const isSingleQuoted = detectQuoteType(rawValue);

  // returns null early if the raw value (trimmed prior) is neither single- nor double-quoted
  if (isSingleQuoted === null) return null;

  // Obtains the value depending on whether the raw value is single- or double-quoted. (Note: The same string is returned if, for some impossible reason, the raw value does not correspond in terms of quote types. It does not matter because the check coming next will always fail to null if that's the case.)
  const value = isSingleQuoted
    ? stripSingleQuotes(rawValue)
    : stripDoubleQuotes(rawValue);

  // certifies the directive or lack thereof from the obtained value
  const commentedDirective =
    commentedDirectivesArray.find((directive) => directive === value) ?? null;

  return commentedDirective;
};

/* getCommentedDirectiveFromCurrentModule */

/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMCURRENTMODULE1
 *
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE2
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERLOGICSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTLOGICSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICLOGICSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERCOMPONENTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTCOMPONENTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCOMPONENTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERFUNCTIONSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTCONTEXTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCONDITIONSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICSTRATEGIESA
 * @param {Context} context $COMMENT#JSDOC#PARAMS#CONTEXTB
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE
 */
export const getCommentedDirectiveFromCurrentModule = (context) => {
  const sourceCode = context.sourceCode;
  const commentedDirective = getCommentedDirectiveFromSourceCode(sourceCode);

  return commentedDirective;
};

/* getCommentedDirectiveFromImportedModule */

/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMIMPORTEDMODULE1
 *
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE2
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERLOGICSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTLOGICSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICLOGICSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERCOMPONENTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTCOMPONENTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCOMPONENTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERFUNCTIONSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTCONTEXTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCONDITIONSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICSTRATEGIESA
 * @param {string} resolvedPath $COMMENT#JSDOC#PARAMS#RESOLVEDPATH
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE
 */
export const getCommentedDirectiveFromImportedModule = (resolvedPath) => {
  const sourceCode = getSourceCodeFromFilePath(resolvedPath);
  const commentedDirective = getCommentedDirectiveFromSourceCode(sourceCode);

  return commentedDirective;
};

/* getVerifiedCommentedDirective */

/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETVERIFIEDCOMMENTEDDIRECTIVE
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERLOGICSB
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTLOGICSB
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICLOGICSB
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERCOMPONENTSB
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTCOMPONENTSB
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCOMPONENTSB
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERFUNCTIONSB
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTCONTEXTSB
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCONDITIONSB
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICSTRATEGIESB
 * @param {CommentedDirective} directive $COMMENT#JSDOC#PARAMS#DIRECTIVE21#DIRECTIVE
 * @param {Extension} extension $COMMENT#JSDOC#PARAMS#EXTENSION
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#GETVERIFIEDCOMMENTEDDIRECTIVE
 */
export const getVerifiedCommentedDirective = (directive, extension) => {
  const rule = commentedDirectives_extensionRules[directive];
  const isExtensionJSX = extension.endsWith("x");

  if (rule === true && isExtensionJSX) return directive; // requires JSX extension
  if (rule === false && !isExtensionJSX) return directive; // forbids JSX extension
  // CHANGE: no longer applies, Agnostic Strategies Modules are now required to ends in `x`.
  // if (rule === null) return directive; // no extension constraint, specifically for "use agnostic strategies"

  return null; // verification failed
};

/* getStrategizedDirective */

/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETSTRATEGIZEDDIRECTIVE
 * @param {Context} context $COMMENT#JSDOC#PARAMS#CONTEXTB
 * @param {ImportDeclaration | ExportNamedDeclaration | ExportAllDeclaration | ExportDefaultDeclaration} node $COMMENT#JSDOC#PARAMS#NODE
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#GETSTRATEGIZEDDIRECTIVE
 */
export const getStrategizedDirective = (context, node) => {
  // gets the first nested `/* */` comment inside the node
  const firstNestedComment = context.sourceCode.getCommentsInside(node)[0];

  // returns null early if there is no nested comments
  if (!firstNestedComment) return null;

  // gets and trims the first nested comment raw
  const rawStrategy = firstNestedComment.value.trim() || "";

  // asserts whether that first nested comment is or isn't a Strategy
  const strategy =
    commentedStrategiesArray.find((strategy) => strategy === rawStrategy) ??
    null;

  // returns null early if no strategy was identified
  if (!strategy) return null;

  // maps the strategy to the its relevant directive
  const commentedDirective = commentedStrategies_commentedDirectives[strategy];

  return commentedDirective;
};

/* addressDirectiveIfAgnosticStrategies */

/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#ADDRESSDIRECTIVEIFAGNOSTICSTRATEGIES
 * @param {Context} context $COMMENT#JSDOC#PARAMS#CONTEXTB
 * @param {ExportNamedDeclaration | ExportAllDeclaration | ExportDefaultDeclaration} node $COMMENT#JSDOC#PARAMS#NODE
 * @param {CommentedDirective} currentFileCommentedDirective $COMMENT#JSDOC#PARAMS#DIRECTIVE21#CURRENTFILECOMMENTEDDIRECTIVE
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#ADDRESSDIRECTIVEIFAGNOSTICSTRATEGIES
 */
export const addressDirectiveIfAgnosticStrategies = (
  context,
  node,
  currentFileCommentedDirective
) => {
  // ignores if not addressing an Agnostic Strategies Module
  if (currentFileCommentedDirective !== USE_AGNOSTIC_STRATEGIES)
    return currentFileCommentedDirective;

  const exportStrategizedDirective = getStrategizedDirective(context, node);

  if (exportStrategizedDirective === null) {
    context.report({
      node,
      messageId: exportNotStrategized,
    });
  }

  return exportStrategizedDirective; // null indicates failure
};

/* isImportBlocked */

/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#ISIMPORTBLOCKED
 * @param {CommentedDirectiveWithoutUseAgnosticStrategies} currentFileCommentedDirective $COMMENT#JSDOC#PARAMS#DIRECTIVE21#CURRENTFILECOMMENTEDDIRECTIVE
 * @param {CommentedDirectiveWithoutUseAgnosticStrategies} importedFileCommentedDirective $COMMENT#JSDOC#PARAMS#DIRECTIVE21#IMPORTEDFILECOMMENTEDDIRECTIVE
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#ISIMPORTBLOCKED
 */
export const isImportBlocked = (
  currentFileCommentedDirective,
  importedFileCommentedDirective
) =>
  commonsIsImportBlocked(
    commentedDirectives_blockedImports,
    currentFileCommentedDirective,
    importedFileCommentedDirective
  );

/* makeMessageFromCurrentFileCommentedDirective */

/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#MAKEMESSAGEFROMCURRENTFILECOMMENTEDDIRECTIVE
 * @param {CommentedDirectiveWithoutUseAgnosticStrategies} commentedDirective $COMMENT#JSDOC#PARAMS#DIRECTIVE21#COMMENTEDDIRECTIVE
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#MAKEMESSAGEFROMCURRENTFILECOMMENTEDDIRECTIVE
 */
export const makeMessageFromCurrentFileCommentedDirective = (
  commentedDirective
) =>
  makeMessageFromCurrentFileResolvedDirective(
    commentedDirectives_blockedImports,
    commentedDirective
  );

/* findSpecificViolationMessage */

/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#FINDSPECIFICVIOLATIONMESSAGE
 * @param {CommentedDirectiveWithoutUseAgnosticStrategies} currentFileCommentedDirective $COMMENT#JSDOC#PARAMS#DIRECTIVE21#CURRENTFILECOMMENTEDDIRECTIVE
 * @param {CommentedDirectiveWithoutUseAgnosticStrategies} importedFileCommentedDirective $COMMENT#JSDOC#PARAMS#DIRECTIVE21#IMPORTEDFILECOMMENTEDDIRECTIVE
 * @returns $COMMENT#JSDOC#RETURNS#FINDSPECIFICVIOLATIONMESSAGE
 */
export const findSpecificViolationMessage = (
  currentFileCommentedDirective,
  importedFileCommentedDirective
) =>
  commonsFindSpecificViolationMessage(
    commentedDirectives_blockedImports,
    currentFileCommentedDirective,
    importedFileCommentedDirective
  );
