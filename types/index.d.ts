import type { ESLint, SourceCode as ESLintSourceCode } from "eslint";
import type {
  SourceCode as TSESLintSourceCode,
  RuleContext,
} from "@typescript-eslint/utils/dist/ts-eslint";
import type { TSESTree } from "@typescript-eslint/types";

declare const plugin: ESLint.Plugin;

export default plugin;

// must be manually maintained
export const useAgnosticPluginName: "use-agnostic";
export const agnostic20ConfigName: "agnostic20";
export const directive21ConfigName: "directive21";
export const enforceEffectiveDirectivesRuleName: "enforce-effective-directives-import-rules";
export const enforceCommentedDirectivesRuleName: "enforce-commented-directives-import-rules";

// JavaScript/TypeScript extensions array
export const EXTENSIONS: readonly [
  ".tsx",
  ".ts",
  ".mtsx",
  ".mts",
  ".ctsx",
  ".cts",
  ".jsx",
  ".js",
  ".mjsx",
  ".mjs",
  ".cjsx",
  ".cjs"
];

export const commentedDirectives_commentedModules: Readonly<{
  "use server logics": "Server Logics Module";
  "use client logics": "Client Logics Module";
  "use agnostic logics": "Agnostic Logics Module";
  "use server components": "Server Components Module";
  "use client components": "Client Components Module";
  "use agnostic components": "Agnostic Components Module";
  "use server functions": "Server Functions Module";
  "use client contexts": "Client Contexts Module";
  "use agnostic conditions": "Agnostic Conditions Module";
  "use agnostic strategies": "Agnostic Strategies Module";
}>;

/**
 * Gets the coordinates for the first line of code of a file.
 * @param context An ESLint rule's `context` object.
 * @returns The `context.report` `loc`-compatible coordinates for the first line of code of a file.
 */
export const highlightFirstLineOfCode: (
  context: RuleContext<string, readonly unknown[]>
) => {
  start: {
    line: number;
    column: number;
  };
  end: {
    line: number;
    column: number;
  };
};

// agnostic20

// directives
export const NO_DIRECTIVE: "no directive";
export const USE_SERVER: "use server";
export const USE_CLIENT: "use client";
export const USE_AGNOSTIC: "use agnostic";

// directives array
export const directivesArray: readonly [
  typeof USE_SERVER,
  typeof USE_CLIENT,
  typeof USE_AGNOSTIC
];

// directives set
export const directivesSet: ReadonlySet<
  typeof USE_SERVER | typeof USE_CLIENT | typeof USE_AGNOSTIC
>;

// mapping directives with effective directives
export const directives_effectiveDirectives: Readonly<{
  [NO_DIRECTIVE]: Readonly<{
    logics: "use server logics";
    components: "use server components";
    functions: null;
  }>;
  [USE_SERVER]: Readonly<{
    logics: null;
    components: null;
    functions: "use server functions";
  }>;
  [USE_CLIENT]: Readonly<{
    logics: "use client logics";
    components: "use client components";
    functions: null;
  }>;
  [USE_AGNOSTIC]: Readonly<{
    logics: "use agnostic logics";
    components: "use agnostic components";
    functions: null;
  }>;
}>;

/**
 * Gets the directive of a module from its Abstract Syntax Tree.
 * - `null` denotes a server-by-default module, ideally a Server Module.
 * - `'use server'` denotes a Server Functions Module.
 * - `'use client'` denotes a Client Module.
 * - `'use agnostic'` denotes an Agnostic Module (formerly Shared Module).
 * @param ast The module's AST (Abstract Syntax Tree).
 * @returns The directive, or lack thereof via `null`. The lack of a directive is considered server-by-default.
 */
export const getDirectiveFromModule: (
  ast: TSESLintSourceCode.Program
) => "use server" | "use client" | "use agnostic" | null;

/**
 * Gets the directive of the current module.
 * - `null` denotes a server-by-default module, ideally a Server Module.
 * - `'use server'` denotes a Server Functions Module.
 * - `'use client'` denotes a Client Module.
 * - `'use agnostic'` denotes an Agnostic Module (formerly Shared Module).
 * @param context The ESLint rule's `context` object.
 * @returns The directive, or lack thereof via `null`. The lack of a directive is considered server-by-default.
 */
export const getDirectiveFromCurrentModule: (
  context: RuleContext<string, readonly unknown[]>
) => "use server" | "use client" | "use agnostic" | null;

/**
 * Gets the directive of the imported module.
 * - `null` denotes a server-by-default module, ideally a Server Module.
 * - `'use server'` denotes a Server Functions Module.
 * - `'use client'` denotes a Client Module.
 * - `'use agnostic'` denotes an Agnostic Module (formerly Shared Module).
 * @param resolvedPath The resolved path of the imported module.
 * @returns The directive, or lack thereof via `null`. The lack of a directive is considered server-by-default.
 */
export const getDirectiveFromImportedModule: (
  resolvedPath: string
) => "use server" | "use client" | "use agnostic" | null;

/**
 * Gets the effective directive of a module, based on the combination of its directive (or lack thereof) and its extension (depending on whether it ends with 'x' for JSX).
 * - `'use server logics'` denotes a Server Logics Module.
 * - `'use server components'` denotes a Server Components Module.
 * - `'use server functions'` denotes a Server Functions Module.
 * - `'use client logics'` denotes a Client Logics Module.
 * - `'use client components'` denotes a Client Components Module.
 * - `'use agnostic logics'` denotes an Agnostic Logics Module.
 * - `'use agnostic components'` denotes an Agnostic Components Module.
 * @param directive The directive as written on top of the file (`"no directive"` if no valid directive).
 * @param extension The JavaScript (TypeScript) extension of the file.
 * @returns The effective directive, from which imports rules are applied.
 */
export const getEffectiveDirective: (
  directive: "use server" | "use client" | "use agnostic" | "no directive",
  extension:
    | ".tsx"
    | ".ts"
    | ".mtsx"
    | ".mts"
    | ".ctsx"
    | ".cts"
    | ".jsx"
    | ".js"
    | ".mjsx"
    | ".mjs"
    | ".cjsx"
    | ".cjs"
) =>
  | "use server logics"
  | "use server components"
  | "use server functions"
  | "use client logics"
  | "use client components"
  | "use agnostic logics"
  | "use agnostic components"
  | null;

/**
 * Returns a boolean deciding if an imported file's effective directive is incompatible with the current file's effective directive.
 * @param currentFileEffectiveDirective The current file's effective directive.
 * @param importedFileEffectiveDirective The imported file's effective directive.
 * @returns `true` if the import is blocked, as established in `effectiveDirectives_BlockedImports`.
 */
export const isImportBlockedAgnostic20: (
  currentFileEffectiveDirective:
    | "use server logics"
    | "use server components"
    | "use server functions"
    | "use client logics"
    | "use client components"
    | "use agnostic logics"
    | "use agnostic components",
  importedFileEffectiveDirective:
    | "use server logics"
    | "use server components"
    | "use server functions"
    | "use client logics"
    | "use client components"
    | "use agnostic logics"
    | "use agnostic components"
) => boolean;

// directive21

// commented directives
export const USE_SERVER_LOGICS: "use server logics";
export const USE_CLIENT_LOGICS: "use client logics";
export const USE_AGNOSTIC_LOGICS: "use agnostic logics";
export const USE_SERVER_COMPONENTS: "use server components";
export const USE_CLIENT_COMPONENTS: "use client components";
export const USE_AGNOSTIC_COMPONENTS: "use agnostic components";
export const USE_SERVER_FUNCTIONS: "use server functions";
export const USE_CLIENT_CONTEXTS: "use client contexts";
export const USE_AGNOSTIC_CONDITIONS: "use agnostic conditions";
export const USE_AGNOSTIC_STRATEGIES: "use agnostic strategies";

// commented directives array
export const commentedDirectivesArray: readonly [
  typeof USE_SERVER_LOGICS,
  typeof USE_CLIENT_LOGICS,
  typeof USE_AGNOSTIC_LOGICS,
  typeof USE_SERVER_COMPONENTS,
  typeof USE_CLIENT_COMPONENTS,
  typeof USE_AGNOSTIC_COMPONENTS,
  typeof USE_SERVER_FUNCTIONS,
  typeof USE_CLIENT_CONTEXTS,
  typeof USE_AGNOSTIC_CONDITIONS,
  typeof USE_AGNOSTIC_STRATEGIES
];

// commented directives set
export const commentedDirectivesSet: ReadonlySet<
  | typeof USE_SERVER_LOGICS
  | typeof USE_CLIENT_LOGICS
  | typeof USE_AGNOSTIC_LOGICS
  | typeof USE_SERVER_COMPONENTS
  | typeof USE_CLIENT_COMPONENTS
  | typeof USE_AGNOSTIC_COMPONENTS
  | typeof USE_SERVER_FUNCTIONS
  | typeof USE_CLIENT_CONTEXTS
  | typeof USE_AGNOSTIC_CONDITIONS
  | typeof USE_AGNOSTIC_STRATEGIES
>;

// mapped commented directives to their extension rules
/**
 * - `true` means requires the presence of a JSX extension (`.jsx`)
 * - `false` means requires the absence of a JSX extension (`.js`)
 * */
export const commentedDirectives_extensionRules: Readonly<{
  [USE_SERVER_LOGICS]: false;
  [USE_CLIENT_LOGICS]: false;
  [USE_AGNOSTIC_LOGICS]: false;
  [USE_SERVER_COMPONENTS]: true;
  [USE_CLIENT_COMPONENTS]: true;
  [USE_AGNOSTIC_COMPONENTS]: true;
  [USE_SERVER_FUNCTIONS]: false;
  [USE_CLIENT_CONTEXTS]: true;
  [USE_AGNOSTIC_CONDITIONS]: true;
  [USE_AGNOSTIC_STRATEGIES]: true;
}>;

// commented strategies
export const AT_SERVER_LOGICS: "@serverLogics";
export const AT_CLIENT_LOGICS: "@clientLogics";
export const AT_AGNOSTIC_LOGICS: "@agnosticLogics";
export const AT_SERVER_COMPONENTS: "@serverComponents";
export const AT_CLIENT_COMPONENTS: "@clientComponents";
export const AT_AGNOSTIC_COMPONENTS: "@agnosticComponents";
export const AT_SERVER_FUNCTIONS: "@serverFunctions";
export const AT_CLIENT_CONTEXTS: "@clientContexts";
// export const AT_AGNOSTIC_CONDITIONS: "@agnosticConditions";

// commented strategies array
export const commentedStrategiesArray: readonly [
  typeof AT_SERVER_LOGICS,
  typeof AT_CLIENT_LOGICS,
  typeof AT_AGNOSTIC_LOGICS,
  typeof AT_SERVER_COMPONENTS,
  typeof AT_CLIENT_COMPONENTS,
  typeof AT_AGNOSTIC_COMPONENTS,
  typeof AT_SERVER_FUNCTIONS,
  typeof AT_CLIENT_CONTEXTS
  // typeof AT_AGNOSTIC_CONDITIONS
];

// commented strategies set
export const commentedStrategiesSet: ReadonlySet<
  | typeof AT_SERVER_LOGICS
  | typeof AT_CLIENT_LOGICS
  | typeof AT_AGNOSTIC_LOGICS
  | typeof AT_SERVER_COMPONENTS
  | typeof AT_CLIENT_COMPONENTS
  | typeof AT_AGNOSTIC_COMPONENTS
  | typeof AT_SERVER_FUNCTIONS
  | typeof AT_CLIENT_CONTEXTS
  // | typeof AT_AGNOSTIC_CONDITIONS
>;

// mapped commented strategies to their commented directives
export const commentedStrategies_commentedDirectives: Readonly<{
  [AT_SERVER_LOGICS]: "use server logics";
  [AT_CLIENT_LOGICS]: "use client logics";
  [AT_AGNOSTIC_LOGICS]: "use agnostic logics";
  [AT_SERVER_COMPONENTS]: "use server components";
  [AT_CLIENT_COMPONENTS]: "use client components";
  [AT_AGNOSTIC_COMPONENTS]: "use agnostic components";
  [AT_SERVER_FUNCTIONS]: "use server functions";
  [AT_CLIENT_CONTEXTS]: "use client contexts";
  // [AT_AGNOSTIC_CONDITIONS]: "use agnostic conditions";
}>;

// environments
export const SERVER: "server";
export const CLIENT: "client";
export const AGNOSTIC: "agnostic";

export const environments_allowedChainImportEnvironments: Readonly<{
  [SERVER]: readonly ["server", "agnostic"];
  [CLIENT]: readonly ["client", "agnostic"];
  [AGNOSTIC]: readonly ["agnostic"];
}>;

// mapped commented directives to their React directives
export const commentedDirectives_reactDirectives: Readonly<{
  [USE_SERVER_LOGICS]: null;
  [USE_CLIENT_LOGICS]: "use client";
  [USE_AGNOSTIC_LOGICS]: "use agnostic";
  [USE_SERVER_COMPONENTS]: null;
  [USE_CLIENT_COMPONENTS]: "use client";
  [USE_AGNOSTIC_COMPONENTS]: "use agnostic";
  [USE_SERVER_FUNCTIONS]: "use server";
  [USE_CLIENT_CONTEXTS]: "use client";
  [USE_AGNOSTIC_CONDITIONS]: null;
  [USE_AGNOSTIC_STRATEGIES]: null;
}>;

/** Typing currently unavailable. To be used by chaining `.importingCommentedDirective` `.importedCommentedDirective` `.value` to obtain the reason why a module import is or isn't allowed. */
export const directive21Data: object;

/**
 * Gets the commented directive of a module from its ESLint `SourceCode` object.
 *
 * Accepted directives for the default Directive-First Architecture are (single or double quotes included):
 * - `'use server logics'`, `"use server logics"` denoting a Server Logics Module.
 * - `'use client logics'`, `"use client logics"` denoting a Client Logics Module.
 * - `'use agnostic logics'`, `"use agnostic logics"` denoting an Agnostic Logics Module.
 * - `'use server components'`, `"use server components"` denoting a Server Components Module.
 * - `'use client components'`, `"use client components"` denoting a Client Components Module.
 * - `'use agnostic components'`, `"use agnostic components"` denoting an Agnostic Components Module.
 * - `'use server functions'`, `"use server functions"` denoting a Server Functions Module.
 * - `'use client contexts'`, `"use client contexts"` denoting a Client Contexts Module.
 * - `'use agnostic conditions'`, `"use agnostic conditions"` denoting an Agnostic Conditions Module.
 * - `'use agnostic strategies'`, `"use agnostic strategies"` denoting an Agnostic Strategies Module.
 * @param sourceCode The ESLint SourceCode object.
 * @returns The commented directive, or lack thereof via `null`. Given the strictness of this architecture, the lack of a directive is considered a mistake. (Though rules may provide the opportunity to declare a default, and configs with preset defaults may become provided.)
 */
export const getCommentedDirectiveFromSourceCode: (
  sourceCode: ESLintSourceCode
) =>
  | "use server logics"
  | "use client logics"
  | "use agnostic logics"
  | "use server components"
  | "use client components"
  | "use agnostic components"
  | "use server functions"
  | "use client contexts"
  | "use agnostic conditions"
  | "use agnostic strategies"
  | null;

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
 * - `'use server functions'`, `"use server functions"` denoting a Server Functions Module.
 * - `'use client contexts'`, `"use client contexts"` denoting a Client Contexts Module.
 * - `'use agnostic conditions'`, `"use agnostic conditions"` denoting an Agnostic Conditions Module.
 * - `'use agnostic strategies'`, `"use agnostic strategies"` denoting an Agnostic Strategies Module.
 * @param context The ESLint rule's `context` object.
 * @returns The commented directive, or lack thereof via `null`. Given the strictness of this architecture, the lack of a directive is considered a mistake. (Though rules may provide the opportunity to declare a default, and configs with preset defaults may become provided.)
 */
export const getCommentedDirectiveFromCurrentModule: (
  context: RuleContext<string, readonly unknown[]>
) =>
  | "use server logics"
  | "use client logics"
  | "use agnostic logics"
  | "use server components"
  | "use client components"
  | "use agnostic components"
  | "use server functions"
  | "use client contexts"
  | "use agnostic conditions"
  | "use agnostic strategies"
  | null;

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
 * - `'use server functions'`, `"use server functions"` denoting a Server Functions Module.
 * - `'use client contexts'`, `"use client contexts"` denoting a Client Contexts Module.
 * - `'use agnostic conditions'`, `"use agnostic conditions"` denoting an Agnostic Conditions Module.
 * - `'use agnostic strategies'`, `"use agnostic strategies"` denoting an Agnostic Strategies Module.
 * @param resolvedPath The resolved path of the imported module.
 * @returns The commented directive, or lack thereof via `null`. Now also provides the obtained `SourceCode` object. Given the strictness of this architecture, the lack of a directive is considered a mistake. (Though rules may provide the opportunity to declare a default, and configs with preset defaults may become provided.)
 */
export const getCommentedDirectiveFromImportedModule: (
  resolvedPath: string
) => {
  commentedDirective:
    | "use server logics"
    | "use client logics"
    | "use agnostic logics"
    | "use server components"
    | "use client components"
    | "use agnostic components"
    | "use server functions"
    | "use client contexts"
    | "use agnostic conditions"
    | "use agnostic strategies"
    | null;
  sourceCode: ESLintSourceCode;
};

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
 * @param directive The commented directive as written on top of the file (cannot be `null` at that stage).
 * @param extension The JavaScript (TypeScript) extension of the file.
 * @returns The verified commented directive, from which imports rules are applied. Returns `null` if the verification failed, upon which an error will be reported depending on the commented directive, since the error logic here is strictly binary.
 */
export const getVerifiedCommentedDirective: (
  directive:
    | "use server logics"
    | "use client logics"
    | "use agnostic logics"
    | "use server components"
    | "use client components"
    | "use agnostic components"
    | "use server functions"
    | "use client contexts"
    | "use agnostic conditions"
    | "use agnostic strategies",
  extension:
    | ".tsx"
    | ".ts"
    | ".mtsx"
    | ".mts"
    | ".ctsx"
    | ".cts"
    | ".jsx"
    | ".js"
    | ".mjsx"
    | ".mjs"
    | ".cjsx"
    | ".cjs"
) =>
  | "use server logics"
  | "use client logics"
  | "use agnostic logics"
  | "use server components"
  | "use client components"
  | "use agnostic components"
  | "use server functions"
  | "use client contexts"
  | "use agnostic conditions"
  | "use agnostic strategies"
  | null;

/**
 * Gets the interpreted directive from a specified commented Strategy (such as `@serverLogics`) nested inside the import (or export) declaration for an import (or export) from an Agnostic Strategies Module.
 * @param context The ESLint rule's `context` object.
 * @param node The ESLint `node` of the rule's current traversal.
 * @returns The interpreted directive, a.k.a. strategized directive, or lack thereof via `null`.
 */
export const getStrategizedDirective: (
  context: RuleContext<string, readonly unknown[]>,
  node:
    | TSESTree.ImportDeclaration
    | TSESTree.ExportNamedDeclaration
    | TSESTree.ExportAllDeclaration
    | TSESTree.ExportDefaultDeclaration
) =>
  | "use server logics"
  | "use client logics"
  | "use agnostic logics"
  | "use server components"
  | "use client components"
  | "use agnostic components"
  | "use server functions"
  | "use client contexts"
  | "use agnostic conditions"
  | null;

/**
 * Returns a boolean deciding if an imported file's commented directive is incompatible with the current file's commented directive.
 * @param currentFileCommentedDirective The current file's commented directive.
 * @param importedFileCommentedDirective The imported file's commented directive.
 * @returns `true` if the import is blocked, as established in `commentedDirectives_BlockedImports`.
 */
export const isImportBlockedDirective21: (
  currentFileCommentedDirective:
    | "use server logics"
    | "use client logics"
    | "use agnostic logics"
    | "use server components"
    | "use client components"
    | "use agnostic components"
    | "use server functions"
    | "use client contexts"
    | "use agnostic conditions",
  importedFileCommentedDirective:
    | "use server logics"
    | "use client logics"
    | "use agnostic logics"
    | "use server components"
    | "use client components"
    | "use agnostic components"
    | "use server functions"
    | "use client contexts"
    | "use agnostic conditions"
) => boolean;
