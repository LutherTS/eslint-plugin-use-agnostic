import {
  TSX,
  TS,
  JSX,
  JS,
  MJS,
  CJS,
  useServerJSXMessageId,
  importBreaksEffectiveImportRulesMessageId,
  reExportNotSameMessageId,
} from "../../../_commons/constants/bases.js";
import {
  NO_DIRECTIVE,
  USE_SERVER,
  USE_CLIENT,
  USE_AGNOSTIC,
  USE_SERVER_LOGICS,
  USE_SERVER_COMPONENTS,
  USE_SERVER_FUNCTIONS,
  USE_CLIENT_LOGICS,
  USE_CLIENT_COMPONENTS,
  USE_AGNOSTIC_LOGICS,
  USE_AGNOSTIC_COMPONENTS,
  effectiveDirectives_EffectiveModules,
  directivesArray,
  effectiveDirectives_BlockedImports,
} from "../constants/bases.js";

import {
  getImportedFileFirstLine,
  isImportBlocked as commonsIsImportBlocked,
  makeMessageFromResolvedDirective,
  findSpecificViolationMessage as commonsFindSpecificViolationMessage,
} from "../../../_commons/utilities/helpers.js";

/* getDirectiveFromCurrentModule */

/**
 * Gets the directive of the current module.
 * - `null` denotes a server-by-default module, ideally a Server Module.
 * - `'use client'` denotes a Client Module.
 * - `'use server'` denotes a Server Functions Module.
 * - `'use agnostic'` denotes an Agnostic Module (formerly Shared Module).
 * @param {Readonly<import('@typescript-eslint/utils').TSESLint.RuleContext<typeof reExportNotSameMessageId | typeof importBreaksEffectiveImportRulesMessageId | typeof useServerJSXMessageId, []>>} context The ESLint rule's `context` object.
 * @returns The directive, or lack thereof via `null`. The lack of a directive is considered server-by-default.
 */
export const getDirectiveFromCurrentModule = (context) => {
  // the AST body to check for the top-of-the-file directive
  const { body } = context.sourceCode.ast;

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
  const currentFileDirective =
    directivesArray.find((directive) => directive === value) ?? null;

  return currentFileDirective;
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
 * @param {NO_DIRECTIVE | USE_SERVER | USE_CLIENT | USE_AGNOSTIC} directive The directive as written on top of the file (`null` if no valid directive).
 * @param {TSX | TS | JSX | JS | MJS | CJS} extension The JavaScript (TypeScript) extension of the file.
 * @returns The effective directive, from which imports rules are applied.
 */
export const getEffectiveDirective = (directive, extension) => {
  // I could use a map, but because this is in JS with JSDoc, a manual solution is peculiarly more typesafe.
  if (directive === NO_DIRECTIVE && !extension.endsWith("x"))
    return USE_SERVER_LOGICS;
  if (directive === NO_DIRECTIVE && extension.endsWith("x"))
    return USE_SERVER_COMPONENTS;
  if (directive === USE_SERVER && !extension.endsWith("x"))
    return USE_SERVER_FUNCTIONS;
  if (directive === USE_CLIENT && !extension.endsWith("x"))
    return USE_CLIENT_LOGICS;
  if (directive === USE_CLIENT && extension.endsWith("x"))
    return USE_CLIENT_COMPONENTS;
  if (directive === USE_AGNOSTIC && !extension.endsWith("x"))
    return USE_AGNOSTIC_LOGICS;
  if (directive === USE_AGNOSTIC && extension.endsWith("x"))
    return USE_AGNOSTIC_COMPONENTS;

  return null; // default error, should be unreachable
};

/* getDirectiveFromImportedModule */

/**
 * Gets the directive of the imported module.
 * - `'use client'` denotes a Client Module.
 * - `'use server'` denotes a Server Functions Module.
 * - `'use agnostic'` denotes an Agnostic Module (formerly Shared Module).
 * - `null` denotes a server-by-default module, ideally a Server Module.
 * @param {string} resolvedImportPath The resolved path of the import.
 * @returns The directive, or lack thereof via `null`. The lack of a directive is considered server-by-default.
 */
export const getDirectiveFromImportedModule = (resolvedImportPath) => {
  // gets the first line of the code of the import
  const importedFileFirstLine = getImportedFileFirstLine(resolvedImportPath);

  // verifies that this first line starts with a valid directive, thus excluding comments
  const hasAcceptedDirective = directivesArray.some(
    (directive) =>
      importedFileFirstLine.startsWith(`'${directive}'`) ||
      importedFileFirstLine.startsWith(`"${directive}"`)
  );

  // applies the correct directive or the lack thereof with null
  const importedFileDirective = hasAcceptedDirective
    ? directivesArray.find((directive) =>
        importedFileFirstLine.includes(directive)
      ) ?? null
    : null;

  return importedFileDirective;
};

/* isImportBlocked */

/**
 * Returns a boolean deciding if an imported file's effective directive is incompatible with the current file's effective directive.
 * @param {USE_SERVER_LOGICS | USE_SERVER_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_LOGICS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_LOGICS | USE_AGNOSTIC_COMPONENTS} currentFileEffectiveDirective The current file's effective directive.
 * @param {USE_SERVER_LOGICS | USE_SERVER_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_LOGICS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_LOGICS | USE_AGNOSTIC_COMPONENTS} importedFileEffectiveDirective The imported file's effective directive.
 * @returns `true` if the import is blocked, as established in `effectiveDirectives_BlockedImports`.
 */
export const isImportBlocked = (
  currentFileEffectiveDirective,
  importedFileEffectiveDirective
) =>
  commonsIsImportBlocked(
    effectiveDirectives_BlockedImports,
    currentFileEffectiveDirective,
    importedFileEffectiveDirective
  );

/* makeMessageFromEffectiveDirective */

/**
 * Lists in an message the effective modules incompatible with an effective module based on its effective directive.
 * @param {USE_SERVER_LOGICS | USE_SERVER_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_LOGICS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_LOGICS | USE_AGNOSTIC_COMPONENTS} effectiveDirective The effective directive of the effective module.
 * @returns The message listing the incompatible effective modules.
 */
export const makeMessageFromEffectiveDirective = (effectiveDirective) =>
  makeMessageFromResolvedDirective(
    effectiveDirectives_EffectiveModules,
    effectiveDirectives_BlockedImports,
    effectiveDirective
  );

/* findSpecificViolationMessage */

/**
 * Finds the `message` for the specific violation of effective directives import rules based on `effectiveDirectives_BlockedImports`.
 * @param {USE_SERVER_LOGICS | USE_SERVER_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_LOGICS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_LOGICS | USE_AGNOSTIC_COMPONENTS} currentFileEffectiveDirective The current file's effective directive.
 * @param {USE_SERVER_LOGICS | USE_SERVER_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_LOGICS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_LOGICS | USE_AGNOSTIC_COMPONENTS} importedFileEffectiveDirective The imported file's effective directive.
 * @returns The corresponding `message`.
 */
export const findSpecificViolationMessage = (
  currentFileEffectiveDirective,
  importedFileEffectiveDirective
) =>
  commonsFindSpecificViolationMessage(
    effectiveDirectives_BlockedImports,
    currentFileEffectiveDirective,
    importedFileEffectiveDirective
  );
