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
 * @typedef {typeof TSX | typeof TS | typeof JSX | typeof JS | typeof MJS | typeof CJS} Extension
 * @typedef {readonly [typeof TSX, typeof TS, typeof JSX, typeof JS, typeof MJS, typeof CJS]} Extensions
 *
 * @typedef {typeof USE_SERVER_LOGICS | typeof USE_CLIENT_LOGICS | typeof USE_AGNOSTIC_LOGICS | typeof USE_SERVER_COMPONENTS | typeof USE_CLIENT_COMPONENTS | typeof USE_AGNOSTIC_COMPONENTS | typeof USE_SERVER_FUNCTIONS} EffectiveDirective
 * @typedef {typeof USE_SERVER_LOGICS | typeof USE_CLIENT_LOGICS | typeof USE_AGNOSTIC_LOGICS | typeof USE_SERVER_COMPONENTS | typeof USE_CLIENT_COMPONENTS | typeof USE_AGNOSTIC_COMPONENTS | typeof USE_SERVER_FUNCTIONS | typeof USE_CLIENT_CONTEXTS | typeof USE_AGNOSTIC_CONDITIONS | typeof USE_AGNOSTIC_STRATEGIES} CommentedDirective
 * @typedef {Exclude<CommentedDirective, typeof USE_AGNOSTIC_STRATEGIES>} CommentedDirectiveWithoutUseAgnosticStrategies
 *
 * @typedef {EffectiveDirective | CommentedDirective} ResolvedDirective
 * @typedef {EffectiveDirective | CommentedDirectiveWithoutUseAgnosticStrategies} ResolvedDirectiveWithoutUseAgnosticStrategies
 *
 * @typedef {Readonly<{[USE_SERVER_LOGICS]: typeof SERVER_LOGICS_MODULE; [USE_CLIENT_LOGICS]: typeof CLIENT_LOGICS_MODULE; [USE_AGNOSTIC_LOGICS]: typeof AGNOSTIC_LOGICS_MODULE; [USE_SERVER_COMPONENTS]: typeof SERVER_COMPONENTS_MODULE; [USE_CLIENT_COMPONENTS]: typeof CLIENT_COMPONENTS_MODULE; [USE_AGNOSTIC_COMPONENTS]: typeof AGNOSTIC_COMPONENTS_MODULE; [USE_SERVER_FUNCTIONS]: typeof SERVER_FUNCTIONS_MODULE;}>} EffectiveDirectives_EffectiveModules
 * @typedef {Readonly<{[USE_SERVER_LOGICS]: typeof SERVER_LOGICS_MODULE; [USE_CLIENT_LOGICS]: typeof CLIENT_LOGICS_MODULE; [USE_AGNOSTIC_LOGICS]: typeof AGNOSTIC_LOGICS_MODULE; [USE_SERVER_COMPONENTS]: typeof SERVER_COMPONENTS_MODULE; [USE_CLIENT_COMPONENTS]: typeof CLIENT_COMPONENTS_MODULE; [USE_AGNOSTIC_COMPONENTS]: typeof AGNOSTIC_COMPONENTS_MODULE; [USE_SERVER_FUNCTIONS]: typeof SERVER_FUNCTIONS_MODULE; [USE_CLIENT_CONTEXTS]: typeof CLIENT_CONTEXTS_MODULE; [USE_AGNOSTIC_CONDITIONS]: typeof AGNOSTIC_CONDITIONS_MODULE; [USE_AGNOSTIC_STRATEGIES]: typeof AGNOSTIC_STRATEGIES_MODULE;}>} CommentedDirectives_CommentedModules
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
 * @typedef {import('@typescript-eslint/types').TSESTree.ExportDefaultDeclaration} ExportDefaultDeclaration
 */

/**
 * @template T, O
 * @typedef {import('@typescript-eslint/utils').TSESLint.RuleModule<T, O>} Rule
 */

/**
 * @template T, O
 * @typedef {import('@typescript-eslint/utils').TSESLint.RuleContext<T, O>} Context
 */
