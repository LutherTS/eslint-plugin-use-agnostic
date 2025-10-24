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

// NEW

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
 * $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#GETDIRECTIVEFROMMODULE
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#NULLDIRECTIVE
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USESERVER
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USECLIENT
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USEAGNOSTIC
 * @param ast $COMMENT#JSDOC#PARAMS#AGNOSTIC20#AST
 * @returns $COMMENT#JSDOC#RETURNS#AGNOSTIC20#GETDIRECTIVEFROMMODULE
 */
export const getDirectiveFromModule: (
  ast: TSESLintSourceCode.Program
) => "use server" | "use client" | "use agnostic" | null;

/**
 * $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#GETDIRECTIVEFROMCURRENTMODULE
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#NULLDIRECTIVE
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USESERVER
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USECLIENT
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USEAGNOSTIC
 * @param context $COMMENT#JSDOC#PARAMS#CONTEXTB
 * @returns $COMMENT#JSDOC#RETURNS#AGNOSTIC20#GETDIRECTIVEFROMMODULE
 */
export const getDirectiveFromCurrentModule: (
  context: RuleContext<string, readonly unknown[]>
) => "use server" | "use client" | "use agnostic" | null;

/**
 * $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#GETDIRECTIVEFROMIMPORTEDMODULE
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#NULLDIRECTIVE
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USESERVER
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USECLIENT
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USEAGNOSTIC
 * @param resolvedPath $COMMENT#JSDOC#PARAMS#RESOLVEDPATH
 * @returns $COMMENT#JSDOC#RETURNS#AGNOSTIC20#GETDIRECTIVEFROMMODULE
 */
export const getDirectiveFromImportedModule: (
  resolvedPath: string
) => "use server" | "use client" | "use agnostic" | null;

/**
 * $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#GETEFFECTIVEDIRECTIVE
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USESERVERLOGICS
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USESERVERCOMPONENTS
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USESERVERFUNCTIONS
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USECLIENTLOGICS
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USECLIENTCOMPONENTS
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USEAGNOSTICLOGICS
 * - $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USEAGNOSTICCOMPONENTS
 * @param directive $COMMENT#JSDOC#PARAMS#AGNOSTIC20#DIRECTIVE
 * @param extension $COMMENT#JSDOC#PARAMS#EXTENSION
 * @returns $COMMENT#JSDOC#RETURNS#AGNOSTIC20#GETEFFECTIVEDIRECTIVE
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
 * $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#ISIMPORTBLOCKED
 * @param currentFileEffectiveDirective $COMMENT#JSDOC#PARAMS#AGNOSTIC20#CURRENTFILEEFFECTIVEDIRECTIVE
 * @param importedFileEffectiveDirective $COMMENT#JSDOC#PARAMS#AGNOSTIC20#IMPORTEDFILEEFFECTIVEDIRECTIVE
 * @returns $COMMENT#JSDOC#RETURNS#AGNOSTIC20#ISIMPORTBLOCKED
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
export const AT_AGNOSTIC_CONDITIONS: "@agnosticConditions";

// commented strategies array
export const commentedStrategiesArray: readonly [
  typeof AT_SERVER_LOGICS,
  typeof AT_CLIENT_LOGICS,
  typeof AT_AGNOSTIC_LOGICS,
  typeof AT_SERVER_COMPONENTS,
  typeof AT_CLIENT_COMPONENTS,
  typeof AT_AGNOSTIC_COMPONENTS,
  typeof AT_SERVER_FUNCTIONS,
  typeof AT_CLIENT_CONTEXTS,
  typeof AT_AGNOSTIC_CONDITIONS
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
  | typeof AT_AGNOSTIC_CONDITIONS
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
  [AT_AGNOSTIC_CONDITIONS]: "use agnostic conditions";
}>;

/**
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE1
 *
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE2
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERLOGICSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTLOGICSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICLOGICSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERCOMPONENTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTCOMPONENTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCOMPONENTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERFUNCTIONSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTCONTEXTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCONDITIONSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICSTRATEGIESA
 * @param sourceCode $COMMENT#JSDOC#PARAMS#DIRECTIVE21#SOURCECODE
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE
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
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMCURRENTMODULE1
 *
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE2
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERLOGICSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTLOGICSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICLOGICSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERCOMPONENTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTCOMPONENTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCOMPONENTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERFUNCTIONSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTCONTEXTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCONDITIONSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICSTRATEGIESA
 * @param context $COMMENT#JSDOC#PARAMS#CONTEXTB
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE
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
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMIMPORTEDMODULE1
 *
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE2
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERLOGICSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTLOGICSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICLOGICSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERCOMPONENTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTCOMPONENTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCOMPONENTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERFUNCTIONSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTCONTEXTSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCONDITIONSA
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICSTRATEGIESA
 * @param resolvedPath $COMMENT#JSDOC#PARAMS#RESOLVEDPATH
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE
 */
export const getCommentedDirectiveFromImportedModule: (
  resolvedPath: string
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
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETVERIFIEDCOMMENTEDDIRECTIVE
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERLOGICSB
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTLOGICSB
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICLOGICSB
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERCOMPONENTSB
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTCOMPONENTSB
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCOMPONENTSB
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERFUNCTIONSB
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTCONTEXTSB
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCONDITIONSB
 * - $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICSTRATEGIESB
 * @param directive $COMMENT#JSDOC#PARAMS#DIRECTIVE21#DIRECTIVE
 * @param extension $COMMENT#JSDOC#PARAMS#EXTENSION
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#GETVERIFIEDCOMMENTEDDIRECTIVE
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
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETSTRATEGIZEDDIRECTIVE
 * @param context $COMMENT#JSDOC#PARAMS#CONTEXTB
 * @param node $COMMENT#JSDOC#PARAMS#NODE
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#GETSTRATEGIZEDDIRECTIVE
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
 * $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#ISIMPORTBLOCKED
 * @param currentFileCommentedDirective $COMMENT#JSDOC#PARAMS#DIRECTIVE21#CURRENTFILECOMMENTEDDIRECTIVE
 * @param importedFileCommentedDirective $COMMENT#JSDOC#PARAMS#DIRECTIVE21#IMPORTEDFILECOMMENTEDDIRECTIVE
 * @returns $COMMENT#JSDOC#RETURNS#DIRECTIVE21#ISIMPORTBLOCKED
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
