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
} from "../../library/_commons/constants/bases";

/**
 * @typedef {import("tsconfig-paths/lib/filesystem.js").PackageJson} PackageJson
 * @typedef {import('eslint').ESLint.Plugin} Plugin
 * @typedef {import('eslint').Linter.LanguageOptions} LanguageOptions
 * @typedef {import('eslint').SourceCode} SourceCode
 *
 * @typedef {typeof TSX | typeof TS | typeof JSX | typeof JS | typeof MJS | typeof CJS} Extension
 * @typedef {readonly [typeof TSX, typeof TS, typeof JSX, typeof JS, typeof MJS, typeof CJS]} Extensions
 *
 * @typedef {typeof USE_SERVER_LOGICS | typeof USE_CLIENT_LOGICS | typeof USE_AGNOSTIC_LOGICS | typeof USE_SERVER_COMPONENTS | typeof USE_CLIENT_COMPONENTS | typeof USE_AGNOSTIC_COMPONENTS | typeof USE_SERVER_FUNCTIONS} EffectiveDirective
 * @typedef {EffectiveDirective | typeof USE_CLIENT_CONTEXTS | typeof USE_AGNOSTIC_CONDITIONS | typeof USE_AGNOSTIC_STRATEGIES} CommentedDirective
 * @typedef {EffectiveDirective | CommentedDirective} ResolvedDirective
 *
 * @typedef {typeof USE_AGNOSTIC_STRATEGIES} UseAgnosticStrategies
 * @typedef {Exclude<ResolvedDirective, UseAgnosticStrategies>} ResolvedDirectiveWithoutUseAgnosticStrategies
 *
 * @typedef {import('@typescript-eslint/utils').TSESLint.SourceCode.Program} AST
 * @typedef {import('@typescript-eslint/types').TSESTree.ImportDeclaration} ImportDeclaration
 * @typedef {import('@typescript-eslint/types').TSESTree.ExportNamedDeclaration} ExportNamedDeclaration
 * @typedef {import('@typescript-eslint/types').TSESTree.ExportAllDeclaration} ExportAllDeclaration
 * @typedef {import('@typescript-eslint/types').TSESTree.ExportDefaultDeclaration} ExportDefaultDeclaration
 */

/**
 * @template {ResolvedDirectiveWithoutUseAgnosticStrategies} U
 * @typedef {Readonly<{blockedImport: U; message: string;}>[]} BlockedImports
 */
/**
 * @template {ResolvedDirectiveWithoutUseAgnosticStrategies} T
 * @template {ResolvedDirectiveWithoutUseAgnosticStrategies} U
 * @typedef {Readonly<Record<T, BlockedImports<U>>>} ResolvedDirectives_BlockedImports
 */

/**
 * @template T, O
 * @typedef {import('@typescript-eslint/utils').TSESLint.RuleModule<T, O>} Rule
 */
/**
 * @template T, O
 * @typedef {import('@typescript-eslint/utils').TSESLint.RuleContext<T, O>} Context
 */
