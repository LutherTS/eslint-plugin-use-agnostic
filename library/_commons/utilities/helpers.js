import fs from "fs";
import path from "path";

import { loadConfig, createMatchPath } from "tsconfig-paths";

import {
  USE_SERVER_LOGICS,
  USE_CLIENT_LOGICS,
  USE_AGNOSTIC_LOGICS,
  USE_SERVER_COMPONENTS,
  USE_CLIENT_COMPONENTS,
  USE_AGNOSTIC_COMPONENTS,
  USE_SERVER_FUNCTIONS,
  USE_CLIENT_CONTEXTS,
  USE_AGNOSTIC_CONDITIONS,
  USE_AGNOSTIC_STRATEGIES,
  SERVER_LOGICS_MODULE,
  CLIENT_LOGICS_MODULE,
  AGNOSTIC_LOGICS_MODULE,
  SERVER_COMPONENTS_MODULE,
  CLIENT_COMPONENTS_MODULE,
  AGNOSTIC_COMPONENTS_MODULE,
  SERVER_FUNCTIONS_MODULE,
  CLIENT_CONTEXTS_MODULE,
  AGNOSTIC_CONDITIONS_MODULE,
  AGNOSTIC_STRATEGIES_MODULE,
  EXTENSIONS,
  ARE_NOT_ALLOWED_TO_IMPORT,
} from "../constants/bases.js";

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
  // --- Step 1: Resolve aliases (if tsconfig.json `paths` exists) ---
  const config = loadConfig(cwd);

  const resolveTSConfig =
    config.resultType === "success"
      ? createMatchPath(config.absoluteBaseUrl, config.paths)
      : null;

  const aliasedPath = resolveTSConfig
    ? resolveTSConfig(importPath, undefined, undefined, EXTENSIONS)
    : null;

  // --- Step 2: Resolve relative/absolute paths ---
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
  if (directoryImportPath) return extensionlessImportPath;

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
 * @param {import('@typescript-eslint/utils').TSESLint.RuleContext} context An ESLint rule's `context` object.
 * @returns The `context.report` `loc`-compatible coordinates for the first line of code of a file.
 */
export const highlightFirstLineOfCode = (context) => ({
  start: { line: 1, column: 0 },
  end: { line: 1, column: context.sourceCode.lines[0].length },
});

/* isImportBlocked */

/**
 * Returns a boolean deciding if an imported file's "resolved" directive is incompatible with the current file's "resolved" directive.
 * @param {Readonly<{"use server logics": {blockedImport: string; message: string;}[]; "use client logics": {blockedImport: string; message: string;}[]; "use agnostic logics": {blockedImport: string; message: string;}[]; "use server components": {blockedImport: string; message: string;}[]; "use client components": {blockedImport: string; message: string;}[]; "use agnostic components": {blockedImport: string; message: string;}[]; "use server functions": {blockedImport: string; message: string;}[]; "use client contexts"?: {blockedImport: string; message: string;}[]; "use agnostic conditions"?: {blockedImport: string; message: string;}[]; "use agnostic strategies"?: {blockedImport: string; message: string;}[];}>} resolvedDirectives_blockedImports The blocked imports object, either for agnostic20 or for directive21.
 * @param {USE_SERVER_LOGICS | USE_CLIENT_LOGICS | USE_AGNOSTIC_LOGICS | USE_SERVER_COMPONENTS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_CONTEXTS | USE_AGNOSTIC_CONDITIONS | USE_AGNOSTIC_STRATEGIES} currentFileResolvedDirective The current file's "resolved" directive.
 * @param {USE_SERVER_LOGICS | USE_CLIENT_LOGICS | USE_AGNOSTIC_LOGICS | USE_SERVER_COMPONENTS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_CONTEXTS | USE_AGNOSTIC_CONDITIONS} importedFileResolvedDirective The imported file's "resolved" directive.
 * @returns Returns `true` if the import is blocked, as established in respective `resolvedDirectives_blockedImports`.
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
 * @param {Readonly<{"use server logics": SERVER_LOGICS_MODULE; "use client logics": CLIENT_LOGICS_MODULE; "use agnostic logics": AGNOSTIC_LOGICS_MODULE; "use server components": SERVER_COMPONENTS_MODULE; "use client components": CLIENT_COMPONENTS_MODULE; "use agnostic components": AGNOSTIC_COMPONENTS_MODULE; "use server functions": SERVER_FUNCTIONS_MODULE; "use client contexts": CLIENT_CONTEXTS_MODULE; "use agnostic conditions": AGNOSTIC_CONDITIONS_MODULE; "use agnostic strategies": AGNOSTIC_STRATEGIES_MODULE;}>} resolvedDirectives_ResolvedModules The resolved modules object, either for agnostic20 or for directive21.
 * @param {USE_SERVER_LOGICS | USE_CLIENT_LOGICS | USE_AGNOSTIC_LOGICS | USE_SERVER_COMPONENTS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_CONTEXTS | USE_AGNOSTIC_CONDITIONS | USE_AGNOSTIC_STRATEGIES} currentFileResolvedDirective The current file's "resolved" directive.
 * @param {USE_SERVER_LOGICS | USE_CLIENT_LOGICS | USE_AGNOSTIC_LOGICS | USE_SERVER_COMPONENTS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_CONTEXTS | USE_AGNOSTIC_CONDITIONS} importedFileResolvedDirective The imported file's "resolved" directive.
 * @returns Returns "[Current file 'resolved' modules] are not allowed to import [imported file 'resolved' modules]."
 */
export const makeIntroForSpecificViolationMessage = (
  resolvedDirectives_ResolvedModules,
  currentFileResolvedDirective,
  importedFileResolvedDirective
) =>
  `${resolvedDirectives_ResolvedModules[currentFileResolvedDirective]}s ${ARE_NOT_ALLOWED_TO_IMPORT} ${resolvedDirectives_ResolvedModules[importedFileResolvedDirective]}s.`;

/* makeMessageFromResolvedDirective */

/**
 * Lists in an message the "resolved" modules incompatible with a "resolved" module based on its "resolved" directive.
 * @param {Readonly<{"use server logics": SERVER_LOGICS_MODULE; "use client logics": CLIENT_LOGICS_MODULE; "use agnostic logics": AGNOSTIC_LOGICS_MODULE; "use server components": SERVER_COMPONENTS_MODULE; "use client components": CLIENT_COMPONENTS_MODULE; "use agnostic components": AGNOSTIC_COMPONENTS_MODULE; "use server functions": SERVER_FUNCTIONS_MODULE; "use client contexts": CLIENT_CONTEXTS_MODULE; "use agnostic conditions": AGNOSTIC_CONDITIONS_MODULE; "use agnostic strategies": AGNOSTIC_STRATEGIES_MODULE;}>} resolvedDirectives_ResolvedModules The resolved modules object, either for agnostic20 or for directive21.
 * @param {Readonly<{"use server logics": {blockedImport: string; message: string;}[]; "use client logics": {blockedImport: string; message: string;}[]; "use agnostic logics": {blockedImport: string; message: string;}[]; "use server components": {blockedImport: string; message: string;}[]; "use client components": {blockedImport: string; message: string;}[]; "use agnostic components": {blockedImport: string; message: string;}[]; "use server functions": {blockedImport: string; message: string;}[]; "use client contexts"?: {blockedImport: string; message: string;}[]; "use agnostic conditions"?: {blockedImport: string; message: string;}[]; "use agnostic strategies"?: {blockedImport: string; message: string;}[];}>} resolvedDirectives_blockedImports The blocked imports object, either for agnostic20 or for directive21.
 * @param {USE_SERVER_LOGICS | USE_CLIENT_LOGICS | USE_AGNOSTIC_LOGICS | USE_SERVER_COMPONENTS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_CONTEXTS | USE_AGNOSTIC_CONDITIONS | USE_AGNOSTIC_STRATEGIES} resolvedDirective The "resolved" directive of the "resolved" module.
 * @returns The message listing the incompatible "resolved" modules.
 */
export const makeMessageFromResolvedDirective = (
  resolvedDirectives_ResolvedModules,
  resolvedDirectives_blockedImports,
  resolvedDirective
) => {
  const effectiveModule = resolvedDirectives_ResolvedModules[resolvedDirective];
  const effectiveModulesString = effectiveModule + "s"; // plural

  const blockedImports =
    resolvedDirectives_blockedImports[resolvedDirective].map(
      (e) => e.blockedImport
    ) || [];

  if (blockedImports.length === 0) {
    return `${effectiveModulesString} are not restricted from importing any modules.`;
  }

  const blockedEffectiveModules = blockedImports.map(
    (e) => resolvedDirectives_ResolvedModules[e] + "s" // plural
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
 * @param {Readonly<{"use server logics": {blockedImport: string; message: string;}[]; "use client logics": {blockedImport: string; message: string;}[]; "use agnostic logics": {blockedImport: string; message: string;}[]; "use server components": {blockedImport: string; message: string;}[]; "use client components": {blockedImport: string; message: string;}[]; "use agnostic components": {blockedImport: string; message: string;}[]; "use server functions": {blockedImport: string; message: string;}[]; "use client contexts"?: {blockedImport: string; message: string;}[]; "use agnostic conditions"?: {blockedImport: string; message: string;}[]; "use agnostic strategies"?: {blockedImport: string; message: string;}[];}>} resolvedDirectives_blockedImports The blocked imports object, either for agnostic20 or for directive21.
 * @param {USE_SERVER_LOGICS | USE_CLIENT_LOGICS | USE_AGNOSTIC_LOGICS | USE_SERVER_COMPONENTS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_CONTEXTS | USE_AGNOSTIC_CONDITIONS | USE_AGNOSTIC_STRATEGIES} currentFileResolvedDirective The current file's "resolved" directive.
 * @param {USE_SERVER_LOGICS | USE_CLIENT_LOGICS | USE_AGNOSTIC_LOGICS | USE_SERVER_COMPONENTS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_CONTEXTS | USE_AGNOSTIC_CONDITIONS} importedFileResolvedDirective The imported file's "resolved" directive.
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
