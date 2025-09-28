import type { ESLint } from "eslint";

declare const plugin: ESLint.Plugin;

export default plugin;

// must be manually maintained
export const useAgnosticPluginName: "use-agnostic";
export const agnostic20ConfigName: "agnostic20";
export const directive21ConfigName: "directive21";
export const enforceEffectiveDirectivesRuleName: "enforce-effective-directives-import-rules";
export const enforceCommentedDirectivesRuleName: "enforce-commented-directives-import-rules";

// NEW

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
