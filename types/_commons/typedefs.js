import {
  TSX,
  TS,
  MTSX,
  MTS,
  CTSX,
  CTS,
  JSX,
  JS,
  MJSX,
  MJS,
  CJSX,
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
  SERVER,
  CLIENT,
  AGNOSTIC,
} from "../../library/_commons/constants/bases";

/**
 * @typedef {import("tsconfig-paths/lib/filesystem.js").PackageJson} PackageJson
 * @typedef {import('eslint').ESLint.Plugin} Plugin
 * @typedef {import('eslint').Linter.LanguageOptions} LanguageOptions
 * @typedef {import('eslint').SourceCode} SourceCode
 *
 * @typedef {typeof TSX | typeof TS | typeof MTSX | typeof MTS | typeof CTSX | typeof CTS | typeof JSX | typeof JS | typeof MJSX | typeof MJS | typeof CJSX | typeof CJS} Extension
 * @typedef {readonly [typeof TSX, typeof TS, typeof MTSX, typeof MTS, typeof CTSX, typeof CTS, typeof JSX, typeof JS, typeof MJSX, typeof MJS, typeof CJSX, typeof CJS]} Extensions
 *
 * @typedef {typeof USE_SERVER_LOGICS | typeof USE_CLIENT_LOGICS | typeof USE_AGNOSTIC_LOGICS | typeof USE_SERVER_COMPONENTS | typeof USE_CLIENT_COMPONENTS | typeof USE_AGNOSTIC_COMPONENTS | typeof USE_SERVER_FUNCTIONS} EffectiveDirective
 * @typedef {EffectiveDirective | typeof USE_CLIENT_CONTEXTS | typeof USE_AGNOSTIC_CONDITIONS | typeof USE_AGNOSTIC_STRATEGIES} CommentedDirective
 * @typedef {EffectiveDirective | CommentedDirective} ResolvedDirective
 *
 * @typedef {typeof SERVER | typeof CLIENT | typeof AGNOSTIC} Environment
 *
 * @typedef {import('@typescript-eslint/utils').TSESLint.SourceCode.Program} AST
 * @typedef {import('@typescript-eslint/utils').TSESLint.SourceCode.VisitorKeys} VisitorKeys
 * @typedef {import('@typescript-eslint/types').TSESTree.Node} Node
 * @typedef {import('@typescript-eslint/types').TSESTree.ImportDeclaration} ImportDeclaration
 * @typedef {import('@typescript-eslint/types').TSESTree.ExportNamedDeclaration} ExportNamedDeclaration
 * @typedef {import('@typescript-eslint/types').TSESTree.ExportNamedDeclarationWithSource} ExportNamedDeclarationWithSource
 * @typedef {import('@typescript-eslint/types').TSESTree.ExportNamedDeclarationWithoutSourceWithMultiple} ExportNamedDeclarationWithoutSourceWithMultiple
 * @typedef {import('@typescript-eslint/types').TSESTree.ExportNamedDeclarationWithoutSourceWithSingle} ExportNamedDeclarationWithoutSourceWithSingle
 * @typedef {import('@typescript-eslint/types').TSESTree.ExportAllDeclaration} ExportAllDeclaration
 * @typedef {import('@typescript-eslint/types').TSESTree.ExportDefaultDeclaration} ExportDefaultDeclaration
 * @typedef {import('@typescript-eslint/types').TSESTree.CallExpression} CallExpression
 * @typedef {import('@typescript-eslint/types').TSESTree.FunctionDeclaration} FunctionDeclaration
 * @typedef {import('@typescript-eslint/types').TSESTree.JSXElement} JSXElement
 * @typedef {import('@typescript-eslint/types').TSESTree.JSXOpeningElement} JSXOpeningElement
 * @typedef {import('@typescript-eslint/types').TSESTree.Parameter} Parameter
 */

/**
 * @template {ResolvedDirective} U
 * @typedef {Readonly<{blockedImport: U; message: string;}>[]} BlockedImports
 */
/**
 * @template {ResolvedDirective} T
 * @template {ResolvedDirective} U
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
