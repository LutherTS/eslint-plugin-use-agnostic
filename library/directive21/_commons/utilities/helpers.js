import { exportNotStrategized } from "../../../_commons/constants/bases.js";
import {
  USE_AGNOSTIC_STRATEGIES,
  commentedDirectivesArray,
  strategiesArray,
  commentedDirectives_extensionRules,
  commentedStrategies_commentedDirectives,
  commentedDirectives_blockedImports,
} from "../constants/bases.js";

import {
  isImportBlocked as commonsIsImportBlocked,
  makeMessageFromCurrentFileResolvedDirective,
  findSpecificViolationMessage as commonsFindSpecificViolationMessage,
  getSourceCodeFromFilePath,
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
 * Detects whether a string is single- or double-quoted.
 * @param {string} string The original string.
 * @returns `true` if single-quoted, `false` if double-quoted, `null` if neither.
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
 * Removes single quotes from a string known to be single-quoted.
 * @param {string} string The original string.
 * @returns The string with quotes removed.
 */
const stripSingleQuotes = (string) => {
  if (string.startsWith("'") && string.endsWith("'")) {
    return string.slice(1, -1);
  }
  return string;
};

/**
 * Removes double quotes from a string known to be double-quoted.
 * @param {string} string The original string.
 * @returns The string with quotes removed.
 */
const stripDoubleQuotes = (string) => {
  if (string.startsWith('"') && string.endsWith('"')) {
    return string.slice(1, -1);
  }
  return string;
};

/**
 * Gets the commented directive of a module from its ESLint SourceCode object.
 *
 * Accepted directives for the default Directive-First Architecture are (single or double quotes included):
 * - `'use server logics'`, `"use server logics"` denoting a Server Logics Module.
 * - `'use client logics'`, `"use client logics"` denoting a Client Logics Module.
 * - `'use agnostic logics'`, `"use agnostic logics"` denoting an Agnostic Logics Module.
 * - `'use server components'`, `"use server components"` denoting a Server Components Module.
 * - `'use client components'`, `"use client components"` denoting a Client Components Module.
 * - `'use agnostic components'`, `"use agnostic components"` denoting an Agnostic Components Module.
 * - `'use agnostic logics'`, `"use agnostic logics"` denoting an Agnostic Logics Module.
 * - `'use server functions'`, `"use server functions"` denoting a Server Functions Module.
 * - `'use client contexts'`, `"use client contexts"` denoting a Client Contexts Module.
 * - `'use agnostic conditions'`, `"use agnostic conditions"` denoting an Agnostic Conditions Module.
 * - `'use agnostic strategies'`, `"use agnostic strategies"` denoting an Agnostic Strategies Module.
 * @param {SourceCode} sourceCode The ESLint SourceCode object.
 * @returns The commented directive, or lack thereof via `null`. Given the strictness of this architecture, the lack of a directive is considered a mistake. (Though rules may provide the opportunity to declare a default, and configs with preset defaults may become provided.)
 */
export const getCommentedDirectiveFromSourceCode = (sourceCode) => {
  // gets the first comment from the source code
  const firstComment = sourceCode.getAllComments()[0];

  // returns null early if there is no first comment
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
 * Gets the commented directive of the current module.
 *
 * Accepted directives for the default Directive-First Architecture are (single or double quotes included):
 * - `'use server logics'`, `"use server logics"` denoting a Server Logics Module.
 * - `'use client logics'`, `"use client logics"` denoting a Client Logics Module.
 * - `'use agnostic logics'`, `"use agnostic logics"` denoting an Agnostic Logics Module.
 * - `'use server components'`, `"use server components"` denoting a Server Components Module.
 * - `'use client components'`, `"use client components"` denoting a Client Components Module.
 * - `'use agnostic components'`, `"use agnostic components"` denoting an Agnostic Components Module.
 * - `'use agnostic logics'`, `"use agnostic logics"` denoting an Agnostic Logics Module.
 * - `'use server functions'`, `"use server functions"` denoting a Server Functions Module.
 * - `'use client contexts'`, `"use client contexts"` denoting a Client Contexts Module.
 * - `'use agnostic conditions'`, `"use agnostic conditions"` denoting an Agnostic Conditions Module.
 * - `'use agnostic strategies'`, `"use agnostic strategies"` denoting an Agnostic Strategies Module.
 * @param {Context} context The ESLint rule's `context` object.
 * @returns The commented directive, or lack thereof via `null`. Given the strictness of this architecture, the lack of a directive is considered a mistake. (Though rules may provide the opportunity to declare a default, and configs with preset defaults may become provided.)
 */
export const getCommentedDirectiveFromCurrentModule = (context) => {
  const sourceCode = context.sourceCode;
  const commentedDirective = getCommentedDirectiveFromSourceCode(sourceCode);

  return commentedDirective;
};

/* getCommentedDirectiveFromImportedModule */

/**
 * Gets the commented directive of the imported module.
 *
 * Accepted directives for the default Directive-First Architecture are (single or double quotes included):
 * - `'use server logics'`, `"use server logics"` denoting a Server Logics Module.
 * - `'use client logics'`, `"use client logics"` denoting a Client Logics Module.
 * - `'use agnostic logics'`, `"use agnostic logics"` denoting an Agnostic Logics Module.
 * - `'use server components'`, `"use server components"` denoting a Server Components Module.
 * - `'use client components'`, `"use client components"` denoting a Client Components Module.
 * - `'use agnostic components'`, `"use agnostic components"` denoting an Agnostic Components Module.
 * - `'use agnostic logics'`, `"use agnostic logics"` denoting an Agnostic Logics Module.
 * - `'use server functions'`, `"use server functions"` denoting a Server Functions Module.
 * - `'use client contexts'`, `"use client contexts"` denoting a Client Contexts Module.
 * - `'use agnostic conditions'`, `"use agnostic conditions"` denoting an Agnostic Conditions Module.
 * - `'use agnostic strategies'`, `"use agnostic strategies"` denoting an Agnostic Strategies Module.
 * @param {string} resolvedPath The resolved path of the imported module.
 * @returns The commented directive, or lack thereof via `null`. Given the strictness of this architecture, the lack of a directive is considered a mistake. (Though rules may provide the opportunity to declare a default, and configs with preset defaults may become provided.)
 */
export const getCommentedDirectiveFromImportedModule = (resolvedPath) => {
  const sourceCode = getSourceCodeFromFilePath(resolvedPath);
  const commentedDirective = getCommentedDirectiveFromSourceCode(sourceCode);

  return commentedDirective;
};

/* getVerifiedCommentedDirective */

/**
 * Ensures that a module's commented directive is consistent with its file extension (depending on whether it ends with 'x' for JSX).
 * - `'use server logics'`: Server Logics Modules do NOT export JSX.
 * - `'use client logics'`: Client Logics Modules do NOT export JSX.
 * - `'use agnostic logics'`: Agnostic Logics Modules do NOT export JSX.
 * - `'use server components'`: Server Components Modules ONLY export JSX.
 * - `'use client components'`: Client Components Modules ONLY export JSX.
 * - `'use agnostic components'`: Agnostic Components Modules ONLY export JSX.
 * - `'use server functions'`: Server Functions Modules do NOT export JSX.
 * - `'use client contexts'`: Client Contexts Modules ONLY export JSX.
 * - `'use agnostic conditions'`: Agnostic Conditions Modules ONLY export JSX.
 * - `'use agnostic strategies'`: Agnostic Strategies Modules may export JSX.
 * @param {CommentedDirective} directive The commented directive as written on top of the file (cannot be `null` at that stage).
 * @param {Extension} extension The JavaScript (TypeScript) extension of the file.
 * @returns The verified commented directive, from which imports rules are applied. Returns `null` if the verification failed, upon which an error will be reported depending on the commented directive, since the error logic here is strictly binary.
 */
export const getVerifiedCommentedDirective = (directive, extension) => {
  const rule = commentedDirectives_extensionRules[directive];
  const isExtensionJSX = extension.endsWith("x");

  if (rule === true && isExtensionJSX) return directive; // requires JSX extension
  if (rule === false && !isExtensionJSX) return directive; // forbids JSX extension
  if (rule === null) return directive; // no extension constraint, specifically for "use agnostic strategies"

  return null; // verification failed
};

/* getStrategizedDirective */

/**
 * Gets the interpreted directive from a specified commented Strategy (such as `@serverLogics`) nested inside the import declaration for an import from an Agnostic Strategies Module.
 * @param {Context} context The ESLint rule's `context` object.
 * @param {ImportDeclaration} node The ESLint `node` of the rule's current traversal.
 * @returns The interpreted directive, a.k.a. strategized directive, or lack thereof via `null`.
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
    strategiesArray.find((strategy) => strategy === rawStrategy) ?? null;

  // returns null early if no strategy was identified
  if (!strategy) return null;

  // maps the strategy to the its relevant directive
  const commentedDirective = commentedStrategies_commentedDirectives[strategy];

  return commentedDirective;
};

/* addressDirectiveIfAgnosticStrategies */

/**
 * Verifies the current node's export strategy if the current commented directive is `"use agnostic strategies"` by reporting `exportNotStrategized` in case an export is not strategized in an Agnostic Strategies Module.
 * @param {Context} context The ESLint rule's `context` object.
 * @param {ExportNamedDeclaration | ExportAllDeclaration | ExportDefaultDeclaration} node The ESLint `node` of the rule's current traversal.
 * @param {CommentedDirective} currentFileCommentedDirective The current file's commented directive.
 * @returns The commented directive, the addressed strategy (as a commented directive) or `null` in case of failure.
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
 * Returns a boolean deciding if an imported file's commented directive is incompatible with the current file's commented directive.
 * @param {CommentedDirectiveWithoutUseAgnosticStrategies} currentFileCommentedDirective The current file's commented directive.
 * @param {CommentedDirectiveWithoutUseAgnosticStrategies} importedFileCommentedDirective The imported file's commented directive.
 * @returns `true` if the import is blocked, as established in `commentedDirectives_BlockedImports`.
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
 * Lists in an message the commented modules incompatible with a commented module based on its commented directive.
 * @param {CommentedDirectiveWithoutUseAgnosticStrategies} commentedDirective The commented directive of the commented module.
 * @returns The message listing the incompatible commented modules.
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
 * Finds the `message` for the specific violation of commented directives import rules based on `commentedDirectives_BlockedImports`.
 * @param {CommentedDirectiveWithoutUseAgnosticStrategies} currentFileCommentedDirective The current file's commented directive.
 * @param {CommentedDirectiveWithoutUseAgnosticStrategies} importedFileCommentedDirective The imported file's commented directive.
 * @returns The corresponding `message`.
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
