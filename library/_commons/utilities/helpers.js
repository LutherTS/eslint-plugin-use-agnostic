import {
  ARE_NOT_ALLOWED_TO_IMPORT,
  resolvedDirectives_resolvedModules,
} from "../constants/bases.js";

/**
 * @typedef {import('../../../types/_commons/typedefs').Context<string, readonly unknown[]>} Context
 * @typedef {import('../../../types/_commons/typedefs').ResolvedDirectiveWithoutUseAgnosticStrategies} ResolvedDirectiveWithoutUseAgnosticStrategies
 */

/**
 * @template {ResolvedDirectiveWithoutUseAgnosticStrategies} T
 * @template {ResolvedDirectiveWithoutUseAgnosticStrategies} U
 * @typedef {import('../../../types/_commons/typedefs').ResolvedDirectives_BlockedImports<T, U>} ResolvedDirectives_BlockedImports
 */

/* highlightFirstLineOfCode */

/**
 * Gets the coordinates for the first line of code of a file.
 * @param {Context} context An ESLint rule's `context` object.
 * @returns The `context.report` `loc`-compatible coordinates for the first line of code of a file.
 */
export const highlightFirstLineOfCode = (context) => ({
  start: { line: 1, column: 0 },
  end: { line: 1, column: context.sourceCode.lines[0].length },
});

/* isImportBlocked */

/**
 * Returns a boolean deciding if an imported file's "resolved" directive is incompatible with the current file's "resolved" directive.
 * @template {ResolvedDirectiveWithoutUseAgnosticStrategies} T
 * @template {ResolvedDirectiveWithoutUseAgnosticStrategies} U
 * @param {ResolvedDirectives_BlockedImports<T, U>} resolvedDirectives_blockedImports The blocked imports object, either for agnostic20 or for directive21.
 * @param {T} currentFileResolvedDirective The current file's "resolved" directive.
 * @param {U} importedFileResolvedDirective The imported file's "resolved" directive.
 * @returns `true` if the import is blocked, as established in respective `resolvedDirectives_blockedImports`.
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
 * Makes the intro for each specific import rule violation messages.
 * @template {ResolvedDirectiveWithoutUseAgnosticStrategies} T
 * @template {ResolvedDirectiveWithoutUseAgnosticStrategies} U
 * @param {T} currentFileResolvedDirective The current file's "resolved" directive.
 * @param {U} importedFileResolvedDirective The imported file's "resolved" directive.
 * @returns "[Current file 'resolved' modules] are not allowed to import [imported file 'resolved' modules]."
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
 * Lists in an message the "resolved" modules incompatible with a "resolved" module based on its "resolved" directive.
 * @template {ResolvedDirectiveWithoutUseAgnosticStrategies} T
 * @template {ResolvedDirectiveWithoutUseAgnosticStrategies} U
 * @param {ResolvedDirectives_BlockedImports<T, U>} resolvedDirectives_blockedImports The blocked imports object, either for agnostic20 or for directive21.
 * @param {T} currentFileResolvedDirective The "resolved" directive of the "resolved" module.
 * @returns The message listing the incompatible "resolved" modules.
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
 * Finds the `message` for the specific violation of "resolved" directives import rules based on `resolvedDirectives_blockedImports`.
 * @template {ResolvedDirectiveWithoutUseAgnosticStrategies} T
 * @template {ResolvedDirectiveWithoutUseAgnosticStrategies} U
 * @param {ResolvedDirectives_BlockedImports<T, U>} resolvedDirectives_blockedImports The blocked imports object, either for agnostic20 or for directive21.
 * @param {T} currentFileResolvedDirective The current file's "resolved" directive.
 * @param {U} importedFileResolvedDirective The imported file's "resolved" directive.
 * @returns The corresponding `message`.
 */
export const findSpecificViolationMessage = (
  resolvedDirectives_blockedImports,
  currentFileResolvedDirective,
  importedFileResolvedDirective
) =>
  resolvedDirectives_blockedImports[currentFileResolvedDirective].find(
    (e) => e.blockedImport === importedFileResolvedDirective
  ).message;
