import {
  ARE_NOT_ALLOWED_TO_IMPORT,
  resolvedDirectives_resolvedModules,
} from "../constants/bases.js";

/**
 * @typedef {import('../../../types/_commons/typedefs').Context<string, readonly unknown[]>} Context
 * @typedef {import('../../../types/_commons/typedefs').ResolvedDirective} ResolvedDirective
 * @typedef {import('../../../types/_commons/typedefs').Environment} Environment
 */

/**
 * @template {ResolvedDirective} T
 * @template {ResolvedDirective} U
 * @typedef {import('../../../types/_commons/typedefs').ResolvedDirectives_BlockedImports<T, U>} ResolvedDirectives_BlockedImports
 */

/* highlightFirstLineOfCode */

/**
 * $COMMENT#JSDOC#DEFINITIONS#HIGHLIGHTFIRSTLINEOFCODE
 * @param {Context} context $COMMENT#JSDOC#PARAMS#CONTEXTA
 * @returns $COMMENT#JSDOC#RETURNS#HIGHLIGHTFIRSTLINEOFCODE
 */
export const highlightFirstLineOfCode = (context) => ({
  start: { line: 1, column: 0 },
  end: { line: 1, column: context.sourceCode.lines[0].length },
});

/* isImportBlocked */

/**
 * $COMMENT#JSDOC#DEFINITIONS#ISIMPORTBLOCKED
 * @template {ResolvedDirective} T
 * @template {ResolvedDirective} U
 * @param {ResolvedDirectives_BlockedImports<T, U>} resolvedDirectives_blockedImports $COMMENT#JSDOC#PARAMS#RESOLVEDDIRECTIVES_BLOCKEDIMPORTS
 * @param {T} currentFileResolvedDirective $COMMENT#JSDOC#PARAMS#CURRENTFILERESOLVEDDIRECTIVEA
 * @param {U} importedFileResolvedDirective $COMMENT#JSDOC#PARAMS#IMPORTEDFILERESOLVEDDIRECTIVE
 * @returns $COMMENT#JSDOC#RETURNS#ISIMPORTBLOCKED
 */
export const isImportBlocked = (
  // Note: "Blocked" here is preferred over "not allowed" because a specific message will be shared for each of the blocked situations, explaining their reasons and the solutions needed.
  resolvedDirectives_blockedImports,
  currentFileResolvedDirective,
  importedFileResolvedDirective
) =>
  resolvedDirectives_blockedImports[currentFileResolvedDirective]
    .map((e) => e.blockedImport)
    .includes(importedFileResolvedDirective);

/* makeIntroForSpecificViolationMessage */

/**
 * $COMMENT#JSDOC#DEFINITIONS#MAKEINTROFORSPECIFICVIOLATIONMESSAGE
 * @template {ResolvedDirective} T
 * @template {ResolvedDirective} U
 * @param {T} currentFileResolvedDirective $COMMENT#JSDOC#PARAMS#CURRENTFILERESOLVEDDIRECTIVEA
 * @param {U} importedFileResolvedDirective $COMMENT#JSDOC#PARAMS#IMPORTEDFILERESOLVEDDIRECTIVE
 * @returns $COMMENT#JSDOC#RETURNS#MAKEINTROFORSPECIFICVIOLATIONMESSAGE
 */
export const makeIntroForSpecificViolationMessage = (
  currentFileResolvedDirective,
  importedFileResolvedDirective
) => {
  /** @type {`${typeof resolvedDirectives_resolvedModules[T]}s ${typeof ARE_NOT_ALLOWED_TO_IMPORT} ${typeof resolvedDirectives_resolvedModules[U]}s.`} */
  const introForSpecificViolationMessage = `${resolvedDirectives_resolvedModules[currentFileResolvedDirective]}s ${ARE_NOT_ALLOWED_TO_IMPORT} ${resolvedDirectives_resolvedModules[importedFileResolvedDirective]}s.`;

  return introForSpecificViolationMessage;
};

/* makeMessageFromCurrentFileResolvedDirective */

/**
 * $COMMENT#JSDOC#DEFINITIONS#MAKEMESSAGEFROMCURRENTFILERESOLVEDDIRECTIVE
 * @template {ResolvedDirective} T
 * @template {ResolvedDirective} U
 * @param {ResolvedDirectives_BlockedImports<T, U>} resolvedDirectives_blockedImports $COMMENT#JSDOC#PARAMS#RESOLVEDDIRECTIVES_BLOCKEDIMPORTS
 * @param {T} currentFileResolvedDirective $COMMENT#JSDOC#PARAMS#CURRENTFILERESOLVEDDIRECTIVEB
 * @returns $COMMENT#JSDOC#RETURNS#MAKEMESSAGEFROMCURRENTFILERESOLVEDDIRECTIVE
 */
export const makeMessageFromCurrentFileResolvedDirective = (
  resolvedDirectives_blockedImports,
  currentFileResolvedDirective
) => {
  const effectiveModule =
    resolvedDirectives_resolvedModules[currentFileResolvedDirective];
  const effectiveModulesString = effectiveModule + "s"; // plural

  const blockedImports =
    resolvedDirectives_blockedImports[currentFileResolvedDirective].map(
      (e) => e.blockedImport
    ) || [];

  if (blockedImports.length === 0) {
    return `${effectiveModulesString} are not restricted from importing any modules.`;
  }

  const blockedEffectiveModules = blockedImports.map(
    (e) => resolvedDirectives_resolvedModules[e] + "s" // plural
  );

  const blockedEffectiveModulesString =
    blockedEffectiveModules.length === 1
      ? blockedEffectiveModules[0]
      : blockedEffectiveModules.slice(0, -1).join(", ") +
        ", or " +
        blockedEffectiveModules.slice(-1);

  return `${effectiveModulesString} ${ARE_NOT_ALLOWED_TO_IMPORT} ${blockedEffectiveModulesString}.`;
};

/* findSpecificViolationMessage */

/**
 * $COMMENT#JSDOC#DEFINITIONS#FINDSPECIFICVIOLATIONMESSAGE
 * @template {ResolvedDirective} T
 * @template {ResolvedDirective} U
 * @param {ResolvedDirectives_BlockedImports<T, U>} resolvedDirectives_blockedImports $COMMENT#JSDOC#PARAMS#RESOLVEDDIRECTIVES_BLOCKEDIMPORTS
 * @param {T} currentFileResolvedDirective $COMMENT#JSDOC#PARAMS#CURRENTFILERESOLVEDDIRECTIVEA
 * @param {U} importedFileResolvedDirective $COMMENT#JSDOC#PARAMS#IMPORTEDFILERESOLVEDDIRECTIVE
 * @returns $COMMENT#JSDOC#RETURNS#FINDSPECIFICVIOLATIONMESSAGE
 */
export const findSpecificViolationMessage = (
  resolvedDirectives_blockedImports,
  currentFileResolvedDirective,
  importedFileResolvedDirective
) =>
  resolvedDirectives_blockedImports[currentFileResolvedDirective].find(
    (e) => e.blockedImport === importedFileResolvedDirective
  ).message;

/* getEnvironmentFromResolvedDirective */

/**
 * $COMMENT#JSDOC#DEFINITIONS#GETENVIRONMENTFROMRESOLVEDDIRECTIVE
 * @param {ResolvedDirective} resolvedDirective $COMMENT#JSDOC#PARAMS#RESOLVEDDIRECTIVE
 * @returns $COMMENT#JSDOC#RETURNS#GETENVIRONMENTFROMRESOLVEDDIRECTIVE
 */
export const getEnvironmentFromResolvedDirective = (resolvedDirective) =>
  /** @type {Environment} */ (resolvedDirective.split(" ")[1]);
