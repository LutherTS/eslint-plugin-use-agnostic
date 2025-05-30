import fs from "fs";
import path from "path";

import { loadConfig, createMatchPath } from "tsconfig-paths";

import { EXTENSIONS, ARE_NOT_ALLOWED_TO_IMPORT } from "../constants/bases.js";

/**
 * @typedef {import('../../../types/_commons/typedefs').ResolvedDirectives_ResolvedModules} ResolvedDirectives_ResolvedModules
 * @typedef {import('../../../types/_commons/typedefs').CurrentFileResolvedDirective} CurrentFileResolvedDirective
 * @typedef {import('../../../types/_commons/typedefs').Context<string, readonly unknown[]>} Context
 */

/**
 * @template {CurrentFileResolvedDirective} T
 * @typedef {import('../../../types/_commons/typedefs').ImportedFileResolvedDirective<T>} ImportedFileResolvedDirective
 */
/**
 * @template {CurrentFileResolvedDirective} T
 * @typedef {import('../../../types/_commons/typedefs').ResolvedDirectives_BlockedImports<T>} ResolvedDirectives_BlockedImports
 */

/* resolveImportPath */

/**
 * Finds the existing path of an import that does not have an extension specified.
 * @param {string} basePath The absolute import path with extension yet resolved.
 * @returns The absolute path with its extension or `null` if no path is found.
 */
const findExistingPath = (basePath) => {
  for (const ext of EXTENSIONS) {
    const fullPath = `${basePath}${ext}`;
    if (fs.existsSync(fullPath)) return fullPath;
  }
  return null;
};

/**
 * Resolves an import path to a filesystem path, handling:
 * - Aliases (via tsconfig.json `paths`)
 * - Missing extensions (appends .ts, .tsx, etc.)
 * - Directory imports (e.g., `./components` → `./components/index.ts`)
 * @param {string} currentDir The directory of the file containing the import (from `path.dirname(context.filename)`).
 * @param {string} importPath The import specifier (e.g., `@/components/Button` or `./utils`), from the current node.
 * @param {string} cwd The project root (from `context.cwd`). Caveat: only as an assumption currently.
 * @returns The absolute resolved path or `null` if no path is found.
 */
export const resolveImportPath = (currentDir, importPath, cwd) => {
  // Step 1: Resolve baseUrl and aliases (if tsconfig.json `paths` exists)
  const config = loadConfig(cwd);

  const resolveTSConfig =
    config.resultType === "success"
      ? createMatchPath(config.absoluteBaseUrl, config.paths)
      : null;

  const aliasedPath = resolveTSConfig
    ? resolveTSConfig(importPath, undefined, undefined, EXTENSIONS)
    : null;

  // Step 2: Resolve relative/absolute paths
  const basePath = aliasedPath || path.resolve(currentDir, importPath);

  // does not resolve on node_modules
  if (basePath.includes("node_modules")) return null;

  // Case 1: File with extension exists
  if (path.extname(importPath) && fs.existsSync(basePath)) return basePath;

  // Case 2: Try appending extensions
  const extensionlessImportPath = findExistingPath(basePath);
  if (extensionlessImportPath) return extensionlessImportPath;

  // Case 3: Directory import (e.g., `./components` → `./components/index.ts`)
  const indexPath = path.join(basePath, "index");
  const directoryImportPath = findExistingPath(indexPath);
  if (directoryImportPath) return directoryImportPath;

  return null; // not found
};

/* getImportedFileFirstLine */

/**
 * Gets the first line of code of the imported module.
 * @param {string} resolvedImportPath The resolved path of the imported module.
 * @returns The first line of the imported module.
 */
export const getImportedFileFirstLine = (resolvedImportPath) => {
  // gets the code of the import
  const importedFileContent = fs.readFileSync(resolvedImportPath, "utf8");
  // gets the first line of the code of the import
  const importedFileFirstLine = importedFileContent
    .trim()
    .split("\n")[0]
    .trim(); // the line itself needs to be trimmed too

  return importedFileFirstLine;
};

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
 * @template {CurrentFileResolvedDirective} T
 * @param {ResolvedDirectives_BlockedImports<T>} resolvedDirectives_blockedImports The blocked imports object, either for agnostic20 or for directive21.
 * @param {T} currentFileResolvedDirective The current file's "resolved" directive.
 * @param {ImportedFileResolvedDirective<T>} importedFileResolvedDirective The imported file's "resolved" directive.
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
 * @template {CurrentFileResolvedDirective} T
 * @param {ResolvedDirectives_ResolvedModules} resolvedDirectives_resolvedModules The resolved modules object, either for agnostic20 or for directive21.
 * @param {CurrentFileResolvedDirective} currentFileResolvedDirective The current file's "resolved" directive.
 * @param {ImportedFileResolvedDirective<T>} importedFileResolvedDirective The imported file's "resolved" directive.
 * @returns "[Current file 'resolved' modules] are not allowed to import [imported file 'resolved' modules]."
 */
export const makeIntroForSpecificViolationMessage = (
  resolvedDirectives_resolvedModules,
  currentFileResolvedDirective,
  importedFileResolvedDirective
) =>
  `${resolvedDirectives_resolvedModules[currentFileResolvedDirective]}s ${ARE_NOT_ALLOWED_TO_IMPORT} ${resolvedDirectives_resolvedModules[importedFileResolvedDirective]}s.`;

/* makeMessageFromCurrentFileResolvedDirective */

/**
 * Lists in an message the "resolved" modules incompatible with a "resolved" module based on its "resolved" directive.
 * @template {CurrentFileResolvedDirective} T
 * @param {ResolvedDirectives_ResolvedModules} resolvedDirectives_resolvedModules The resolved modules object, either for agnostic20 or for directive21.
 * @param {ResolvedDirectives_BlockedImports<T>} resolvedDirectives_blockedImports The blocked imports object, either for agnostic20 or for directive21.
 * @param {T} currentFileResolvedDirective The "resolved" directive of the "resolved" module.
 * @returns The message listing the incompatible "resolved" modules.
 */
export const makeMessageFromCurrentFileResolvedDirective = (
  resolvedDirectives_resolvedModules,
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
 * @template {CurrentFileResolvedDirective} T
 * @param {ResolvedDirectives_BlockedImports<T>} resolvedDirectives_blockedImports The blocked imports object, either for agnostic20 or for directive21.
 * @param {T} currentFileResolvedDirective The current file's "resolved" directive.
 * @param {ImportedFileResolvedDirective<T>} importedFileResolvedDirective The imported file's "resolved" directive.
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
