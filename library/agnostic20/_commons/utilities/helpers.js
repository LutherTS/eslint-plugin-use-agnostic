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
  getSourceCodeFromFilePath,
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
 * - `null` denotes a server-by-default module, ideally a Server Module.
 * - `'use server'` denotes a Server Functions Module.
 * - `'use client'` denotes a Client Module.
 * - `'use agnostic'` denotes an Agnostic Module (formerly Shared Module).
 * @param {AST} ast The module's AST (Abstract Syntax Tree).
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
 * - `null` denotes a server-by-default module, ideally a Server Module.
 * - `'use server'` denotes a Server Functions Module.
 * - `'use client'` denotes a Client Module.
 * - `'use agnostic'` denotes an Agnostic Module (formerly Shared Module).
 * @param {Context} context The ESLint rule's `context` object.
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
 * - `null` denotes a server-by-default module, ideally a Server Module.
 * - `'use server'` denotes a Server Functions Module.
 * - `'use client'` denotes a Client Module.
 * - `'use agnostic'` denotes an Agnostic Module (formerly Shared Module).
 * @param {string} resolvedPath The resolved path of the imported module.
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
 * - `'use server logics'` denotes a Server Logics Module.
 * - `'use server components'` denotes a Server Components Module.
 * - `'use server functions'` denotes a Server Functions Module.
 * - `'use client logics'` denotes a Client Logics Module.
 * - `'use client components'` denotes a Client Components Module.
 * - `'use agnostic logics'` denotes an Agnostic Logics Module.
 * - `'use agnostic components'` denotes an Agnostic Components Module.
 * @param {Directive | NoDirective} directive The directive as written on top of the file (`"no directive"` if no valid directive).
 * @param {Extension} extension The JavaScript (TypeScript) extension of the file.
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
 * @param {EffectiveDirective} currentFileEffectiveDirective The current file's effective directive.
 * @param {EffectiveDirective} importedFileEffectiveDirective The imported file's effective directive.
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
 * @param {EffectiveDirective} effectiveDirective The effective directive of the effective module.
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
 * @param {EffectiveDirective} currentFileEffectiveDirective The current file's effective directive.
 * @param {EffectiveDirective} importedFileEffectiveDirective The imported file's effective directive.
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
