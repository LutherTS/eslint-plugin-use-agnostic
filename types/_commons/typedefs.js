import {
  TSX,
  TS,
  JSX,
  JS,
  MJS,
  CJS,
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
} from "../../library/_commons/constants/bases";

/**
 * @typedef {import("tsconfig-paths/lib/filesystem.js").PackageJson} PackageJson
 * @typedef {import('eslint').ESLint.Plugin} Plugin
 *
 * @typedef {TSX | TS | JSX | JS | MJS | CJS} Extension
 * @typedef {readonly [TSX, TS, JSX, JS, MJS, CJS]} Extensions
 *
 * @typedef {USE_SERVER_LOGICS | USE_CLIENT_LOGICS | USE_AGNOSTIC_LOGICS | USE_SERVER_COMPONENTS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_COMPONENTS | USE_SERVER_FUNCTIONS} EffectiveDirective
 * @typedef {USE_SERVER_LOGICS | USE_CLIENT_LOGICS | USE_AGNOSTIC_LOGICS | USE_SERVER_COMPONENTS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_CONTEXTS | USE_AGNOSTIC_CONDITIONS | USE_AGNOSTIC_STRATEGIES} CommentedDirective
 * @typedef {Exclude<CommentedDirective, USE_AGNOSTIC_STRATEGIES>} CommentedDirectiveWithoutUseAgnosticStrategies
 *
 * @typedef {EffectiveDirective | CommentedDirective} ResolvedDirective
 * @typedef {EffectiveDirective | CommentedDirectiveWithoutUseAgnosticStrategies} ResolvedDirectiveWithoutUseAgnosticStrategies
 *
 * @typedef {Readonly<{[USE_SERVER_LOGICS]: SERVER_LOGICS_MODULE; [USE_CLIENT_LOGICS]: CLIENT_LOGICS_MODULE; [USE_AGNOSTIC_LOGICS]: AGNOSTIC_LOGICS_MODULE; [USE_SERVER_COMPONENTS]: SERVER_COMPONENTS_MODULE; [USE_CLIENT_COMPONENTS]: CLIENT_COMPONENTS_MODULE; [USE_AGNOSTIC_COMPONENTS]: AGNOSTIC_COMPONENTS_MODULE; [USE_SERVER_FUNCTIONS]: SERVER_FUNCTIONS_MODULE;}>} EffectiveDirectives_EffectiveModules
 * @typedef {Readonly<{[USE_SERVER_LOGICS]: SERVER_LOGICS_MODULE; [USE_CLIENT_LOGICS]: CLIENT_LOGICS_MODULE; [USE_AGNOSTIC_LOGICS]: AGNOSTIC_LOGICS_MODULE; [USE_SERVER_COMPONENTS]: SERVER_COMPONENTS_MODULE; [USE_CLIENT_COMPONENTS]: CLIENT_COMPONENTS_MODULE; [USE_AGNOSTIC_COMPONENTS]: AGNOSTIC_COMPONENTS_MODULE; [USE_SERVER_FUNCTIONS]: SERVER_FUNCTIONS_MODULE; [USE_CLIENT_CONTEXTS]: CLIENT_CONTEXTS_MODULE; [USE_AGNOSTIC_CONDITIONS]: AGNOSTIC_CONDITIONS_MODULE; [USE_AGNOSTIC_STRATEGIES]: AGNOSTIC_STRATEGIES_MODULE;}>} CommentedDirectives_CommentedModules
 *
 * @typedef {EffectiveDirectives_EffectiveModules | CommentedDirectives_CommentedModules} ResolvedDirectives_ResolvedModules
 *
 * @typedef {{blockedImport: string; message: string;}[]} BlockedImports
 * @typedef {Readonly<Record<EffectiveDirective, BlockedImports>>} EffectiveDirectives_BlockedImports
 * @typedef {Readonly<Record<CommentedDirective, BlockedImports>>} CommentedDirectives_BlockedImports
 *
 * @typedef {EffectiveDirectives_BlockedImports & CommentedDirectives_BlockedImports} ResolvedDirectives_BlockedImports
 *
 * @typedef {import('@typescript-eslint/types').TSESTree.ImportDeclaration} ImportDeclaration
 * @typedef {import('@typescript-eslint/types').TSESTree.ExportNamedDeclaration} ExportNamedDeclaration
 * @typedef {import('@typescript-eslint/types').TSESTree.ExportAllDeclaration} ExportAllDeclaration
 */
