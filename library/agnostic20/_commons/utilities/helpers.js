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
 * $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#GETDIRECTIVEFROMMODULE
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#NULLDIRECTIVE
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USESERVER
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USECLIENT
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USEAGNOSTIC
 * @param {AST} ast $COMMENT#JSDOC#PARAMS#AGNOSTIC20#AST
 * @returns $COMMENT#JSDOC#RETURNS#AGNOSTIC20#GETDIRECTIVEFROMMODULE
 */
export const getDirectiveFromModule = (ast) => {
  // the AST body to check for the top-of-the-file $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVE
  const { body } = ast;

  // the first statement from the source code's Abstract Syntax Tree
  const firstStatement = body[0];

  // the value of that first statement or null
  const value =
    firstStatement?.type === "ExpressionStatement" &&
    firstStatement.expression?.type === "Literal"
      ? firstStatement.expression.value
      : null;

  // considers early a null value as the absence of a $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVE
  if (value === null) return value;

  // the value to be exactly 'use client', 'use server' or 'use agnostic' in order not to be considered null by default, or server-by-default
  const moduleDirective =
    directivesArray.find((directive) => directive === value) ?? null;

  return moduleDirective;
};

/* getDirectiveFromCurrentModule */

/**
 * $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#GETDIRECTIVEFROMCURRENTMODULE
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#NULLDIRECTIVE
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USESERVER
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USECLIENT
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USEAGNOSTIC
 * @param {Context} context $COMMENT#JSDOC#PARAMS#CONTEXTB
 * @returns $COMMENT#JSDOC#RETURNS#AGNOSTIC20#GETDIRECTIVEFROMMODULE
 */
export const getDirectiveFromCurrentModule = (context) => {
  // the AST of the current module
  const ast = context.sourceCode.ast;

  return getDirectiveFromModule(ast);
};

/* getDirectiveFromImportedModule */

/**
 * $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#GETDIRECTIVEFROMIMPORTEDMODULE
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#NULLDIRECTIVE
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USESERVER
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USECLIENT
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USEAGNOSTIC
 * @param {string} resolvedPath $COMMENT#JSDOC#PARAMS#RESOLVEDPATH
 * @returns $COMMENT#JSDOC#RETURNS#AGNOSTIC20#GETDIRECTIVEFROMMODULE
 */
export const getDirectiveFromImportedModule = (resolvedPath) => {
  // the AST of the imported module
  const ast = getSourceCodeFromFilePath(resolvedPath).ast;

  return getDirectiveFromModule(ast);
};

/* getEffectiveDirective */

/**
 * $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#GETEFFECTIVEDIRECTIVE
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USESERVERLOGICS
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USESERVERCOMPONENTS
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USESERVERFUNCTIONS
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USECLIENTLOGICS
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USECLIENTCOMPONENTS
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USEAGNOSTICLOGICS
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USEAGNOSTICCOMPONENTS
 * @param {Directive | NoDirective} $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVE $COMMENT#JSDOC#PARAMS#AGNOSTIC20#DIRECTIVE
 * @param {Extension} extension $COMMENT#JSDOC#PARAMS#EXTENSION
 * @returns $COMMENT#JSDOC#RETURNS#AGNOSTIC20#GETEFFECTIVEDIRECTIVE
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
 * $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#ISIMPORTBLOCKED
 * @param {EffectiveDirective} currentFileEffectiveDirective $COMMENT#JSDOC#PARAMS#AGNOSTIC20#CURRENTFILEEFFECTIVEDIRECTIVE
 * @param {EffectiveDirective} importedFileEffectiveDirective $COMMENT#JSDOC#PARAMS#AGNOSTIC20#IMPORTEDFILEEFFECTIVEDIRECTIVE
 * @returns $COMMENT#JSDOC#RETURNS#AGNOSTIC20#ISIMPORTBLOCKED
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
 * $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#MAKEMESSAGEFROMCURRENTFILEEFFECTIVEDIRECTIVE
 * @param {EffectiveDirective} effectiveDirective $COMMENT#JSDOC#PARAMS#AGNOSTIC20#EFFECTIVEDIRECTIVE
 * @returns $COMMENT#JSDOC#RETURNS#AGNOSTIC20#MAKEMESSAGEFROMCURRENTFILEEFFECTIVEDIRECTIVE
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
 * $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#FINDSPECIFICVIOLATIONMESSAGE
 * @param {EffectiveDirective} currentFileEffectiveDirective $COMMENT#JSDOC#PARAMS#AGNOSTIC20#CURRENTFILEEFFECTIVEDIRECTIVE
 * @param {EffectiveDirective} importedFileEffectiveDirective $COMMENT#JSDOC#PARAMS#AGNOSTIC20#IMPORTEDFILEEFFECTIVEDIRECTIVE
 * @returns $COMMENT#JSDOC#RETURNS#FINDSPECIFICVIOLATIONMESSAGE
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
