/* plugin names */
// use-agnostic
export const useAgnosticPluginName = "use-agnostic";
// crossingStrategies
export const strategiesPluginName = "strategies";

/* config names */
// agnostic20
export const agnostic20ConfigName = "agnostic20";
// directive21
export const directive21ConfigName = "directive21";

/* rule names */
// agnostic20
export const enforceEffectiveDirectivesRuleName =
  "enforce-effective-directives-import-rules";
// directive21
export const enforceCommentedDirectivesRuleName =
  "enforce-commented-directives-import-rules";

// crossingStrategies
export const verifySpecifierImportRuleName =
  "verify-specifier-import-export-same-strategy";
export const verifyDefaultImportRuleName =
  "verify-default-import-export-same-strategy";
export const verifyNamespaceImportRuleName =
  "verify-namespace-import-export-some-strategy";

/* messageIds */
export const reExportNotSameMessageId = "re-export-not-same-directive";
// agnostic20
export const importBreaksEffectiveImportRulesMessageId =
  "import-breaks-effective-directive-import-rule";
export const useServerJSXMessageId = "use-server-has-jsx-extension";
// directive21
export const importBreaksCommentedImportRulesMessageId =
  "import-breaks-commented-directive-import-rule";
export const noCommentedDirective = "no-commented-directive-detected";
export const commentedDirectiveVerificationFailed =
  "commented-directive-verification-failed";
export const importNotStrategized =
  "import-from-use-agnostic-strategies-not-strategized";
export const exportNotStrategized =
  "export-from-use-agnostic-strategies-not-strategized";

// all "resolved" directives (from AIA/agnostic20 & DFA/directive21)
export const USE_SERVER_LOGICS = "use server logics";
export const USE_CLIENT_LOGICS = "use client logics";
export const USE_AGNOSTIC_LOGICS = "use agnostic logics";
export const USE_SERVER_COMPONENTS = "use server components";
export const USE_CLIENT_COMPONENTS = "use client components";
export const USE_AGNOSTIC_COMPONENTS = "use agnostic components";
export const USE_SERVER_FUNCTIONS = "use server functions";
export const USE_CLIENT_CONTEXTS = "use client contexts";
export const USE_AGNOSTIC_CONDITIONS = "use agnostic conditions";
export const USE_AGNOSTIC_STRATEGIES = "use agnostic strategies";

// all "resolved" modules (from AIA/agnostic20 & DFA/directive21)
export const SERVER_LOGICS_MODULE = "Server Logics Module";
export const CLIENT_LOGICS_MODULE = "Client Logics Module";
export const AGNOSTIC_LOGICS_MODULE = "Agnostic Logics Module";
export const SERVER_COMPONENTS_MODULE = "Server Components Module";
export const CLIENT_COMPONENTS_MODULE = "Client Components Module";
export const AGNOSTIC_COMPONENTS_MODULE = "Agnostic Components Module";
export const SERVER_FUNCTIONS_MODULE = "Server Functions Module";
export const CLIENT_CONTEXTS_MODULE = "Client Contexts Module";
export const AGNOSTIC_CONDITIONS_MODULE = "Agnostic Conditions Module";
export const AGNOSTIC_STRATEGIES_MODULE = "Agnostic Strategies Module";

/* from the resolveImportPath utility */

export const TSX = ".tsx";
export const TS = ".ts";
export const JSX = ".jsx";
export const JS = ".js";
export const MJS = ".mjs";
export const CJS = ".cjs";

export const EXTENSIONS = [TSX, TS, JSX, JS, MJS, CJS]; // In priority order

/* from the isImportBlocked utility */

export const ARE_NOT_ALLOWED_TO_IMPORT = "are not allowed to import";
