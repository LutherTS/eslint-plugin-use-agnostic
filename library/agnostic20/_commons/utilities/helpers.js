import { getSourceCodeFromFilePath } from "get-sourcecode-from-file-path";

import {
  USE_SERVER,
  LOGICS,
  COMPONENTS,
  FUNCTIONS,
  directivesArray,
  directives_effectiveDirectives,
  effectiveDirectives_blockedImports,
} from "../constants/bases.js";

import {
  isImportBlocked as commonsIsImportBlocked,
  makeMessageFromCurrentFileResolvedDirective,
  findSpecificViolationMessage as commonsFindSpecificViolationMessage,
} from "../../../_commons/utilities/helpers.js";

/**
 * @typedef {import('../../../../types/agnostic20/_commons/typedefs.js').AST} AST
 * @typedef {import('../../../../types/agnostic20/_commons/typedefs.js').Context} Context
 * @typedef {import('../../../../types/agnostic20/_commons/typedefs.js').Directive} Directive
 * @typedef {import('../../../../types/agnostic20/_commons/typedefs.js').NoDirective} NoDirective
 * @typedef {import('../../../../types/agnostic20/_commons/typedefs.js').Extension} Extension
 * @typedef {import('../../../../types/agnostic20/_commons/typedefs.js').EffectiveDirective} EffectiveDirective
 */

/* getDirectiveFromModule */

/**
 * Gets the directive of a module from its Abstract Syntax Tree.
 * - $COMMENT#JSDOC#SERVERBYDEFAULT
 * - $COMMENT#JSDOC#USESERVER
 * - $COMMENT#JSDOC#USECLIENT
 * - $COMMENT#JSDOC#USEAGNOSTIC
 * @param {AST} ast $COMMENT#JSDOC#AST
 * @returns The directive, or lack thereof via `null`. The lack of a directive is considered server-by-default.
 */
export const getDirectiveFromModule = (ast) => {
  // the AST body to check for the top-of-the-file directive
  const { body } = ast;

  // the first statement from the source code's Abstract Syntax Tree
  const firstStatement = body[0];

  // the value of that first statement or null
  const value =
    firstStatement?.type === "ExpressionStatement" &&
    firstStatement.expression?.type === "Literal"
      ? firstStatement.expression.value
      : null;

  // considers early a null value as the absence of a directive
  if (value === null) return value;

  // the value to be exactly 'use client', 'use server' or 'use agnostic' in order not to be considered null by default, or server-by-default
  const moduleDirective =
    directivesArray.find((directive) => directive === value) ?? null;

  return moduleDirective;
};

/* getDirectiveFromCurrentModule */

/**
 * Gets the directive of the current module.
 * - $COMMENT#JSDOC#SERVERBYDEFAULT
 * - $COMMENT#JSDOC#USESERVER
 * - $COMMENT#JSDOC#USECLIENT
 * - $COMMENT#JSDOC#USEAGNOSTIC
 * @param {Context} context $COMMENT#JSDOC#CONTEXT
 * @returns The directive, or lack thereof via `null`. The lack of a directive is considered server-by-default.
 */
export const getDirectiveFromCurrentModule = (context) => {
  // the AST of the current module
  const ast = context.sourceCode.ast;

  return getDirectiveFromModule(ast);
};

/* getDirectiveFromImportedModule */

/**
 * Gets the directive of the imported module.
 * - $COMMENT#JSDOC#SERVERBYDEFAULT
 * - $COMMENT#JSDOC#USESERVER
 * - $COMMENT#JSDOC#USECLIENT
 * - $COMMENT#JSDOC#USEAGNOSTIC
 * @param {string} resolvedPath $COMMENT#JSDOC#RESOLVEDPATH
 * @returns The directive, or lack thereof via `null`. The lack of a directive is considered server-by-default.
 */
export const getDirectiveFromImportedModule = (resolvedPath) => {
  // the AST of the imported module
  const ast = getSourceCodeFromFilePath(resolvedPath).ast;

  return getDirectiveFromModule(ast);
};

/* getEffectiveDirective */

/**
 * Gets the effective directive of a module, based on the combination of its directive (or lack thereof) and its extension (depending on whether it ends with 'x' for JSX).
 * - $COMMENT#JSDOC#USESERVERLOGICS20
 * - $COMMENT#JSDOC#USESERVERCOMPONENTS20
 * - $COMMENT#JSDOC#USESERVERFUNCTIONS20
 * - $COMMENT#JSDOC#USECLIENTLOGICS20
 * - $COMMENT#JSDOC#USECLIENTCOMPONENTS20
 * - $COMMENT#JSDOC#USEAGNOSTICLOGICS20
 * - $COMMENT#JSDOC#USEAGNOSTICCOMPONENTS20
 * @param {Directive | NoDirective} directive $COMMENT#JSDOC#DIRECTIVEA20
 * @param {Extension} extension $COMMENT#JSDOC#EXTENSION
 * @returns The effective directive, from which imports rules are applied.
 */
export const getEffectiveDirective = (directive, extension) => {
  const moduleKind = extension.endsWith("x")
    ? COMPONENTS
    : directive === USE_SERVER
    ? FUNCTIONS
    : LOGICS;

  return directives_effectiveDirectives[directive][moduleKind];
};

/* isImportBlocked */

/**
 * Returns a boolean deciding if an imported file's effective directive is incompatible with the current file's effective directive.
 * @param {EffectiveDirective} currentFileEffectiveDirective $COMMENT#JSDOC#CURRENTFILEEFFECTIVEDIRECTIVE
 * @param {EffectiveDirective} importedFileEffectiveDirective $COMMENT#JSDOC#IMPORTEDFILEEFFECTIVEDIRECTIVE
 * @returns `true` if the import is blocked, as established in `effectiveDirectives_BlockedImports`.
 */
export const isImportBlocked = (
  currentFileEffectiveDirective,
  importedFileEffectiveDirective
) =>
  commonsIsImportBlocked(
    effectiveDirectives_blockedImports,
    currentFileEffectiveDirective,
    importedFileEffectiveDirective
  );

/* makeMessageFromCurrentFileEffectiveDirective */

/**
 * Lists in an message the effective modules incompatible with an effective module based on its effective directive.
 * @param {EffectiveDirective} effectiveDirective $COMMENT#JSDOC#EFFECTIVEDIRECTIVE
 * @returns The message listing the incompatible effective modules.
 */
export const makeMessageFromCurrentFileEffectiveDirective = (
  effectiveDirective
) =>
  makeMessageFromCurrentFileResolvedDirective(
    effectiveDirectives_blockedImports,
    effectiveDirective
  );

/* findSpecificViolationMessage */

/**
 * Finds the `message` for the specific violation of effective directives import rules based on `effectiveDirectives_BlockedImports`.
 * @param {EffectiveDirective} currentFileEffectiveDirective $COMMENT#JSDOC#CURRENTFILEEFFECTIVEDIRECTIVE
 * @param {EffectiveDirective} importedFileEffectiveDirective $COMMENT#JSDOC#IMPORTEDFILEEFFECTIVEDIRECTIVE
 * @returns The corresponding `message`.
 */
export const findSpecificViolationMessage = (
  currentFileEffectiveDirective,
  importedFileEffectiveDirective
) =>
  commonsFindSpecificViolationMessage(
    effectiveDirectives_blockedImports,
    currentFileEffectiveDirective,
    importedFileEffectiveDirective
  );
