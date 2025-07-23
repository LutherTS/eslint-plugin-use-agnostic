export const jSDocComments = Object.freeze({
  definitions: Object.freeze({
    makeTestFiles:
      "Makes the paths of the files to be linted for agnostic20 and directive21.",
    highlightFirstLineOfCode:
      "Gets the coordinates for the first line of code of a file.",
    isImportBlocked:
      'Returns a boolean deciding if an imported file\'s "resolved" directive is incompatible with the current file\'s "resolved" directive.',
    makeIntroForSpecificViolationMessage:
      "Makes the intro for each specific import rule violation messages.",
    makeMessageFromCurrentFileResolvedDirective:
      'Lists in an message the "resolved" modules incompatible with a "resolved" module based on its "resolved" directive.',
    findSpecificViolationMessage:
      'Finds the `message` for the specific violation of "resolved" directives import rules based on `resolvedDirectives_blockedImports`.',
    agnostic20: Object.freeze({
      makeAgnostic20Config:
        "Makes the agnostic20 config for the use-agnostic ESLint plugin.",
      makeBlockedImport:
        "Makes a blockedImport object for the identified blocked import at hand.",
      makeBlockedImportSuggestingUseAgnostic:
        "Makes a blockedImport object for the identified blocked import at hand enhanced with the suggestion to use the `'use agnostic'` directive.",
      getDirectiveFromModule:
        "Gets the directive of a module from its Abstract Syntax Tree.",
      getDirectiveFromCurrentModule:
        "Gets the directive of the current module.",
      getDirectiveFromImportedModule:
        "Gets the directive of the imported module.",
      getEffectiveDirective:
        "Gets the effective directive of a module, based on the combination of its directive (or lack thereof) and its extension (depending on whether it ends with 'x' for JSX).",
      isImportBlocked:
        "Returns a boolean deciding if an imported file's effective directive is incompatible with the current file's effective directive.",
      makeMessageFromCurrentFileEffectiveDirective:
        "Lists in an message the effective modules incompatible with an effective module based on its effective directive.",
      findSpecificViolationMessage:
        "Finds the `message` for the specific violation of effective directives import rules based on `effectiveDirectives_BlockedImports`.",
      currentFileFlow:
        "The flow that begins the import rules enforcement rule, retrieving the effective directive of the current file before comparing it to upcoming effective directives of the files it imports.",
      importedFileFlow:
        "The flow that is shared between import and re-export traversals to obtain the import file's effective directive.",
      importsFlow:
        "The full flow for import traversals to enforce effective directives import rules.",
      reExportsFlow:
        "The full flow for export traversals, shared between `ExportNamedDeclaration` and `ExportAllDeclaration`, to ensure same effective directive re-exports.",
    }),
    directive21: Object.freeze({
      makeDirective21Config:
        "Makes the directive21 config for the use-agnostic ESLint plugin.",
      makeBlockedImport: "JSDOC#DEFINITIONS#AGNOSTIC20#MAKEBLOCKEDIMPORT",
      getCommentedDirectiveFromSourceCode:
        "Detects whether a string is single- or double-quoted.",
      stripSingleQuotes:
        "Removes single quotes from a string known to be single-quoted.",
      stripDoubleQuotes:
        "Removes double quotes from a string known to be double-quoted.",
      getCommentedDirectiveFromSourceCode1:
        "Gets the commented directive of a module from its ESLint SourceCode object.",
      getCommentedDirectiveFromSourceCode2:
        "Accepted directives for the default Directive-First Architecture are (single or double quotes included):",
      getCommentedDirectiveFromCurrentModule1:
        "Gets the commented directive of the current module.",
      getCommentedDirectiveFromCurrentModule2:
        "JSDOC#DEFINITIONS#AGNOSTIC20#GETCOMMENTEDDIRECTIVEFROMSOURCECODE2",
      getCommentedDirectiveFromImportedModule1:
        "Gets the commented directive of the imported module.",
      getCommentedDirectiveFromImportedModule2:
        "JSDOC#DEFINITIONS#AGNOSTIC20#GETCOMMENTEDDIRECTIVEFROMSOURCECODE2",
    }),
  }),
  params: Object.freeze({
    validPath: "The directory for the valid paths.",
    invalidPath: "The directory for the invalid paths.",
    contextA: "An ESLint rule's `context` object.",
    resolvedDirectives_blockedImports:
      "The blocked imports object, either for agnostic20 or for directive21.",
    currentFileResolvedDirectiveA: 'The current file\'s "resolved" directive.',
    importedFileResolvedDirective: 'The imported file\'s "resolved" directive.',
    resolvedDirectives_blockedImports:
      "The blocked imports object, either for agnostic20 or for directive21.",
    currentFileResolvedDirectiveB:
      'The "resolved" directive of the "resolved" module.',
    plugin: "The use-agnostic ESLint plugin itself.",
    contextB: "The ESLint rule's `context` object.",
    resolvedPath: "The resolved path of the imported module.",
    extension: "The JavaScript (TypeScript) extension of the file.",
    node: "The ESLint `node` of the rule's current traversal.",
    agnostic20: Object.freeze({
      currentFileEffectiveDirective: "The current file's effective directive.",
      importedFileEffectiveDirective:
        "The imported file's effective directive.",
      ast: "The module's AST (Abstract Syntax Tree).",
      directive:
        'The directive as written on top of the file (`"no directive"` if no valid directive).',
      effectiveDirective: "The effective directive of the effective module.",
    }),
    directive21: Object.freeze({
      currentFileCommentedDirective: "The current file's commented directive.",
      importedFileCommentedDirective:
        "The imported file's commented directive.",
      string: "The original string.",
      sourceCode: "The ESLint SourceCode object.",
    }),
  }),
  details: Object.freeze({
    agnostic20: Object.freeze({
      nullDirective:
        "`null` denotes a server-by-default module, ideally a Server Module.",
      useServer: "`'use server'` denotes a Server Functions Module.",
      useClient: "`'use client'` denotes a Client Module.",
      useAgnostic:
        "`'use agnostic'` denotes an Agnostic Module (formerly Shared Module).",
      useServerLogics: "`'use server logics'` denotes a Server Logics Module.",
      useServerComponents:
        "`'use server components'` denotes a Server Components Module.",
      useServerFunctions:
        "`'use server functions'` denotes a Server Functions Module.",
      useClientLogics: "`'use client logics'` denotes a Client Logics Module.",
      useClientComponents:
        "`'use client components'` denotes a Client Components Module.",
      useAgnosticLogics:
        "`'use agnostic logics'` denotes an Agnostic Logics Module.",
      useAgnosticComponents:
        "`'use agnostic components'` denotes an Agnostic Components Module.",
    }),
    directive21: Object.freeze({
      useServerLogics:
        "`'use server logics'`, `\"use server logics\"` denoting a Server Logics Module.",
      useClientLogics:
        "`'use client logics'`, `\"use client logics\"` denoting a Client Logics Module.",
      useAgnosticLogics:
        "`'use agnostic logics'`, `\"use agnostic logics\"` denoting an Agnostic Logics Module.",
      useServerComponents:
        "`'use server components'`, `\"use server components\"` denoting a Server Components Module.",
      useClientComponents:
        "`'use client components'`, `\"use client components\"` denoting a Client Components Module.",
      useAgnosticComponents:
        "`'use agnostic components'`, `\"use agnostic components\"` denoting an Agnostic Components Module.",
      useServerFunctions:
        "`'use server functions'`, `\"use server functions\"` denoting a Server Functions Module.",
      useClientContexts:
        "`'use client contexts'`, `\"use client contexts\"` denoting a Client Contexts Module.",
      useAgnosticConditions:
        "`'use agnostic conditions'`, `\"use agnostic conditions\"` denoting an Agnostic Conditions Module.",
      useAgnosticStrategies:
        "`'use agnostic strategies'`, `\"use agnostic strategies\"` denoting an Agnostic Strategies Module.",
    }),
  }),
  returns: Object.freeze({
    makeTestFiles:
      "The paths of the files to be linted for agnostic20 and directive21.",
    highlightFirstLineOfCode:
      "The `context.report` `loc`-compatible coordinates for the first line of code of a file.",
    isImportBlocked:
      "`true` if the import is blocked, as established in respective `resolvedDirectives_blockedImports`.",
    makeIntroForSpecificViolationMessage:
      "\"[Current file 'resolved' modules] are not allowed to import [imported file 'resolved' modules].\"",
    makeMessageFromCurrentFileResolvedDirective:
      'The message listing the incompatible "resolved" modules.',
    findSpecificViolationMessage: "The corresponding `message`.",
    agnostic20: Object.freeze({
      makeAgnostic20Config:
        "The agnostic20 config's name as a key and its config as its value.",
      makeBlockedImport:
        "The blockedImport object for the identified blocked import at hand.",
      makeBlockedImportSuggestingUseAgnostic:
        "The enhanced blockedImport object with the suggestion to use the `'use agnostic'` directive.",
      getDirectiveFromModule:
        "The directive, or lack thereof via `null`. The lack of a directive is considered server-by-default.",
      getDirectiveFromCurrentModule:
        "JSDOC#RETURNS#AGNOSTIC20#GETDIRECTIVEFROMMODULE",
      getDirectiveFromImportedModule:
        "JSDOC#RETURNS#AGNOSTIC20#GETDIRECTIVEFROMMODULE",
      getEffectiveDirective:
        "The effective directive, from which imports rules are applied.",
      isImportBlocked:
        "`true` if the import is blocked, as established in `effectiveDirectives_BlockedImports`.",
      makeMessageFromCurrentFileEffectiveDirective:
        "The message listing the incompatible effective modules.",
      findSpecificViolationMessage:
        "JSDOC#RETURNS#FINDSPECIFICVIOLATIONMESSAGE",
      currentFileFlow:
        "Either an object with `skip: true` to disregard or one with the non-null `currentFileEffectiveDirective`.",
      importedFileFlow:
        "Either an object with `skip: true` to disregard or one with the non-null `importedFileEffectiveDirective`.",
      importsFlow: "Early if the flow needs to be interrupted.",
      reExportsFlow: "JSDOC#RETURNS#AGNOSTIC20#IMPORTSFLOW",
    }),
    directive21: Object.freeze({
      makeDirective21Config:
        "The directive21 config's name as a key and its config as its value.",
      makeBlockedImport: "JSDOC#RETURNS#AGNOSTIC20#MAKEBLOCKEDIMPORT",
      getCommentedDirectiveFromSourceCode:
        "`true` if single-quoted, `false` if double-quoted, `null` if neither.",
      stripSingleQuotes: "The string with quotes removed.",
      stripDoubleQuotes: "JSDOC#RETURNS#DIRECTIVE21#STRIPSINGLEQUOTES",
      getCommentedDirectiveFromSourceCode:
        "The commented directive, or lack thereof via `null`. Given the strictness of this architecture, the lack of a directive is considered a mistake. (Though rules may provide the opportunity to declare a default, and configs with preset defaults may become provided.)",
      getCommentedDirectiveFromCurrentModule:
        "JSDOC#RETURNS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE",
      getCommentedDirectiveFromImportedModule:
        "JSDOC#RETURNS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE",
    }),
  }),
});
