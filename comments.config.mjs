/** @typedef {{"jsDoc":{"definitions":{"makeTestFiles":{"value":"Makes the paths of the files to be linted for agnostic20 and directive21.","key":"JSDOC#DEFINITIONS#MAKETESTFILES"},"highlightFirstLineOfCode":{"value":"Gets the coordinates for the first line of code of a file.","key":"JSDOC#DEFINITIONS#HIGHLIGHTFIRSTLINEOFCODE"},"isImportBlocked":{"value":"Returns a boolean deciding if an imported file's \"resolved\" directive is incompatible with the current file's \"resolved\" directive.","key":"JSDOC#DEFINITIONS#ISIMPORTBLOCKED"},"makeIntroForSpecificViolationMessage":{"value":"Makes the intro for each specific import rule violation messages.","key":"JSDOC#DEFINITIONS#MAKEINTROFORSPECIFICVIOLATIONMESSAGE"},"makeMessageFromCurrentFileResolvedDirective":{"value":"Lists in an message the \"resolved\" modules incompatible with a \"resolved\" module based on its \"resolved\" directive.","key":"JSDOC#DEFINITIONS#MAKEMESSAGEFROMCURRENTFILERESOLVEDDIRECTIVE"},"findSpecificViolationMessage":{"value":"Finds the `message` for the specific violation of \"resolved\" directives import rules based on `resolvedDirectives_blockedImports`.","key":"JSDOC#DEFINITIONS#FINDSPECIFICVIOLATIONMESSAGE"},"agnostic20":{"makeAgnostic20Config":{"value":"Makes the agnostic20 config for the use-agnostic ESLint plugin.","key":"JSDOC#DEFINITIONS#AGNOSTIC20#MAKEAGNOSTIC20CONFIG"},"makeBlockedImport":{"value":"Makes a blockedImport object for the identified blocked import at hand.","key":"JSDOC#DEFINITIONS#AGNOSTIC20#MAKEBLOCKEDIMPORT"},"makeBlockedImportSuggestingUseAgnostic":{"value":"Makes a blockedImport object for the identified blocked import at hand enhanced with the suggestion to use the `'use agnostic'` directive.","key":"JSDOC#DEFINITIONS#AGNOSTIC20#MAKEBLOCKEDIMPORTSUGGESTINGUSEAGNOSTIC"},"getDirectiveFromModule":{"value":"Gets the directive of a module from its Abstract Syntax Tree.","key":"JSDOC#DEFINITIONS#AGNOSTIC20#GETDIRECTIVEFROMMODULE"},"getDirectiveFromCurrentModule":{"value":"Gets the directive of the current module.","key":"JSDOC#DEFINITIONS#AGNOSTIC20#GETDIRECTIVEFROMCURRENTMODULE"},"getDirectiveFromImportedModule":{"value":"Gets the directive of the imported module.","key":"JSDOC#DEFINITIONS#AGNOSTIC20#GETDIRECTIVEFROMIMPORTEDMODULE"},"getEffectiveDirective":{"value":"Gets the effective directive of a module, based on the combination of its directive (or lack thereof) and its extension (depending on whether it ends with 'x' for JSX).","key":"JSDOC#DEFINITIONS#AGNOSTIC20#GETEFFECTIVEDIRECTIVE"},"isImportBlocked":{"value":"Returns a boolean deciding if an imported file's effective directive is incompatible with the current file's effective directive.","key":"JSDOC#DEFINITIONS#AGNOSTIC20#ISIMPORTBLOCKED"},"makeMessageFromCurrentFileEffectiveDirective":{"value":"Lists in an message the effective modules incompatible with a effective module based on its effective directive.","key":"JSDOC#DEFINITIONS#AGNOSTIC20#MAKEMESSAGEFROMCURRENTFILEEFFECTIVEDIRECTIVE"},"findSpecificViolationMessage":{"value":"Finds the `message` for the specific violation of effective directives import rules based on `effectiveDirectives_BlockedImports`.","key":"JSDOC#DEFINITIONS#AGNOSTIC20#FINDSPECIFICVIOLATIONMESSAGE"},"currentFileFlow":{"value":"The flow that begins the import rules enforcement rule, retrieving the effective directive of the current file before comparing it to upcoming effective directives of the files it imports.","key":"JSDOC#DEFINITIONS#AGNOSTIC20#CURRENTFILEFLOW"},"importedFileFlow":{"value":"The flow that is shared between import and re-export traversals to obtain the import file's effective directive.","key":"JSDOC#DEFINITIONS#AGNOSTIC20#IMPORTEDFILEFLOW"},"importsFlow":{"value":"The full flow for import traversals to enforce effective directives import rules.","key":"JSDOC#DEFINITIONS#AGNOSTIC20#IMPORTSFLOW"},"reExportsFlow":{"value":"The full flow for export traversals, shared between `ExportNamedDeclaration` and `ExportAllDeclaration`, to ensure same effective directive re-exports.","key":"JSDOC#DEFINITIONS#AGNOSTIC20#REEXPORTSFLOW"}},"directive21":{"makeDirective21Config":{"value":"Makes the directive21 config for the use-agnostic ESLint plugin.","key":"JSDOC#DEFINITIONS#DIRECTIVE21#MAKEDIRECTIVE21CONFIG"},"makeBlockedImport":{"value":"Makes a blockedImport object for the identified blocked import at hand.","key":"JSDOC#DEFINITIONS#DIRECTIVE21#MAKEBLOCKEDIMPORT"},"detectQuoteType":{"value":"Detects whether a string is single- or double-quoted.","key":"JSDOC#DEFINITIONS#DIRECTIVE21#DETECTQUOTETYPE"},"stripSingleQuotes":{"value":"Removes single quotes from a string known to be single-quoted.","key":"JSDOC#DEFINITIONS#DIRECTIVE21#STRIPSINGLEQUOTES"},"stripDoubleQuotes":{"value":"Removes double quotes from a string known to be double-quoted.","key":"JSDOC#DEFINITIONS#DIRECTIVE21#STRIPDOUBLEQUOTES"},"getCommentedDirectiveFromSourceCode1":{"value":"Gets the commented directive of a module from its ESLint `SourceCode` object.","key":"JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE1"},"getCommentedDirectiveFromSourceCode2":{"value":"Accepted directives for the default Directive-First Architecture are (single or double quotes included):","key":"JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE2"},"getCommentedDirectiveFromCurrentModule1":{"value":"Gets the commented directive of the current module.","key":"JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMCURRENTMODULE1"},"getCommentedDirectiveFromCurrentModule2":{"value":"Accepted directives for the default Directive-First Architecture are (single or double quotes included):","key":"JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMCURRENTMODULE2"},"getCommentedDirectiveFromImportedModule1":{"value":"Gets the commented directive of the imported module.","key":"JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMIMPORTEDMODULE1"},"getCommentedDirectiveFromImportedModule2":{"value":"Accepted directives for the default Directive-First Architecture are (single or double quotes included):","key":"JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMIMPORTEDMODULE2"},"getVerifiedCommentedDirective":{"value":"Ensures that a module's commented directive is consistent with its file extension (depending on whether it ends with 'x' for JSX).","key":"JSDOC#DEFINITIONS#DIRECTIVE21#GETVERIFIEDCOMMENTEDDIRECTIVE"},"getStrategizedDirective":{"value":"Gets the interpreted directive from a specified commented Strategy (such as `@serverLogics`) nested inside the import (or export) declaration for an import (or export) from an Agnostic Strategies Module.","key":"JSDOC#DEFINITIONS#DIRECTIVE21#GETSTRATEGIZEDDIRECTIVE"},"addressDirectiveIfAgnosticStrategies":{"value":"Verifies the current node's export strategy if the current commented directive is `\"use agnostic strategies\"` by reporting `exportNotStrategized` in case an export is not strategized in an Agnostic Strategies Module.","key":"JSDOC#DEFINITIONS#DIRECTIVE21#ADDRESSDIRECTIVEIFAGNOSTICSTRATEGIES"},"isImportBlocked":{"value":"Returns a boolean deciding if an imported file's commented directive is incompatible with the current file's commented directive.","key":"JSDOC#DEFINITIONS#DIRECTIVE21#ISIMPORTBLOCKED"},"makeMessageFromCurrentFileCommentedDirective":{"value":"Lists in an message the commented modules incompatible with a commented module based on its commented directive.","key":"JSDOC#DEFINITIONS#DIRECTIVE21#MAKEMESSAGEFROMCURRENTFILECOMMENTEDDIRECTIVE"},"findSpecificViolationMessage":{"value":"Finds the `message` for the specific violation of commented directives import rules based on `commentedDirectives_BlockedImports`.","key":"JSDOC#DEFINITIONS#DIRECTIVE21#FINDSPECIFICVIOLATIONMESSAGE"},"currentFileFlow":{"value":"The flow that begins the import rules enforcement rule, retrieving the verified commented directive of the current file before comparing it to upcoming verified commented directives of the files it imports.","key":"JSDOC#DEFINITIONS#DIRECTIVE21#CURRENTFILEFLOW"},"importedFileFlow":{"value":"The flow that is shared between import and re-export traversals to obtain the import file's commented directive.","key":"JSDOC#DEFINITIONS#DIRECTIVE21#IMPORTEDFILEFLOW"},"importsFlow":{"value":"The full flow for import traversals to enforce effective directives import rules.","key":"JSDOC#DEFINITIONS#DIRECTIVE21#IMPORTSFLOW"},"allExportsFlow":{"value":"The full flow for export traversals, shared between `ExportNamedDeclaration`, `ExportAllDeclaration`, and `ExportDefaultDeclaration`, to ensure same commented directive re-exports in modules that aren't Agnostic Strategies Modules, and enforce strategized exports specifically in Agnostic Strategies modules.","key":"JSDOC#DEFINITIONS#DIRECTIVE21#ALLEXPORTSFLOW"}},"tests":{"readFilesRecursively":{"value":"Reads file paths at any depths within a provided directory.","key":"JSDOC#DEFINITIONS#TESTS#READFILESRECURSIVELY"},"readValidFilesRecursively":{"value":"Reads file paths at any depths within a provided valid files directory.","key":"JSDOC#DEFINITIONS#TESTS#READVALIDFILESRECURSIVELY"},"readInvalidFilesRecursively":{"value":"Reads file paths at any depths within a provided invalid files directory.","key":"JSDOC#DEFINITIONS#TESTS#READINVALIDFILESRECURSIVELY"},"readInvalidFilesRecursively20":{"value":"Reads file paths at any depths within a provided invalid files for agnostic20.","key":"JSDOC#DEFINITIONS#TESTS#READINVALIDFILESRECURSIVELY20"},"readInvalidFilesRecursively21":{"value":"Reads file paths at any depths within a provided invalid files for directive21.","key":"JSDOC#DEFINITIONS#TESTS#READINVALIDFILESRECURSIVELY21"}}},"params":{"validPath":{"value":"The directory for the valid paths.","key":"JSDOC#PARAMS#VALIDPATH"},"invalidPath":{"value":"The directory for the invalid paths.","key":"JSDOC#PARAMS#INVALIDPATH"},"contextA":{"value":"An ESLint rule's `context` object.","key":"JSDOC#PARAMS#CONTEXTA"},"contextB":{"value":"The ESLint rule's `context` object.","key":"JSDOC#PARAMS#CONTEXTB"},"resolvedDirectives_blockedImports":{"value":"The blocked imports object, either for agnostic20 or for directive21.","key":"JSDOC#PARAMS#RESOLVEDDIRECTIVES_BLOCKEDIMPORTS"},"currentFileResolvedDirectiveA":{"value":"The current file's \"resolved\" directive.","key":"JSDOC#PARAMS#CURRENTFILERESOLVEDDIRECTIVEA"},"importedFileResolvedDirective":{"value":"The imported file's \"resolved\" directive.","key":"JSDOC#PARAMS#IMPORTEDFILERESOLVEDDIRECTIVE"},"currentFileResolvedDirectiveB":{"value":"The \"resolved\" directive of the \"resolved\" module.","key":"JSDOC#PARAMS#CURRENTFILERESOLVEDDIRECTIVEB"},"plugin":{"value":"The use-agnostic ESLint plugin itself.","key":"JSDOC#PARAMS#PLUGIN"},"resolvedPath":{"value":"The resolved path of the imported module.","key":"JSDOC#PARAMS#RESOLVEDPATH"},"extension":{"value":"The JavaScript (TypeScript) extension of the file.","key":"JSDOC#PARAMS#EXTENSION"},"node":{"value":"The ESLint `node` of the rule's current traversal.","key":"JSDOC#PARAMS#NODE"},"agnostic20":{"currentFileEffectiveDirective":{"value":"The current file's effective directive.","key":"JSDOC#PARAMS#AGNOSTIC20#CURRENTFILEEFFECTIVEDIRECTIVE"},"importedFileEffectiveDirective":{"value":"The imported file's effective directive.","key":"JSDOC#PARAMS#AGNOSTIC20#IMPORTEDFILEEFFECTIVEDIRECTIVE"},"ast":{"value":"The module's AST (Abstract Syntax Tree).","key":"JSDOC#PARAMS#AGNOSTIC20#AST"},"directive":{"value":"The directive as written on top of the file (`\"no directive\"` if no valid directive).","key":"JSDOC#PARAMS#AGNOSTIC20#DIRECTIVE"},"effectiveDirective":{"value":"The effective directive of the effective module.","key":"JSDOC#PARAMS#AGNOSTIC20#EFFECTIVEDIRECTIVE"}},"directive21":{"currentFileCommentedDirective":{"value":"The current file's commented directive.","key":"JSDOC#PARAMS#DIRECTIVE21#CURRENTFILECOMMENTEDDIRECTIVE"},"importedFileCommentedDirective":{"value":"The imported file's commented directive.","key":"JSDOC#PARAMS#DIRECTIVE21#IMPORTEDFILECOMMENTEDDIRECTIVE"},"string":{"value":"The original string.","key":"JSDOC#PARAMS#DIRECTIVE21#STRING"},"sourceCode":{"value":"The ESLint SourceCode object.","key":"JSDOC#PARAMS#DIRECTIVE21#SOURCECODE"},"directive":{"value":"The commented directive as written on top of the file (cannot be `null` at that stage).","key":"JSDOC#PARAMS#DIRECTIVE21#DIRECTIVE"},"commentedDirective":{"value":"The commented directive of the commented module.","key":"JSDOC#PARAMS#DIRECTIVE21#COMMENTEDDIRECTIVE"}},"tests":{"folderPath":{"value":"The provided directory.","key":"JSDOC#PARAMS#TESTS#FOLDERPATH"},"allFiles":{"value":"The accumulator array of file paths. Defaults to an empty array on the initial call, and is passed through each recursive call to be mutated and collect results.","key":"JSDOC#PARAMS#TESTS#ALLFILES"},"javaScriptErrorsLength":{"value":"The number of errors expected on JavaScript files.","key":"JSDOC#PARAMS#TESTS#JAVASCRIPTERRORSLENGTH"},"typeScriptErrorsLength":{"value":"The number of errors expected on TypeScript files.","key":"JSDOC#PARAMS#TESTS#TYPESCRIPTERRORSLENGTH"},"messageId":{"value":"The messageId of the errors expected.","key":"JSDOC#PARAMS#TESTS#MESSAGEID"}}},"details":{"agnostic20":{"nullDirective":{"value":"`null` denotes a server-by-default module, ideally a Server Module.","key":"JSDOC#DETAILS#AGNOSTIC20#NULLDIRECTIVE"},"useServer":{"value":"`'use server'` denotes a Server Functions Module.","key":"JSDOC#DETAILS#AGNOSTIC20#USESERVER"},"useClient":{"value":"`'use client'` denotes a Client Module.","key":"JSDOC#DETAILS#AGNOSTIC20#USECLIENT"},"useAgnostic":{"value":"`'use agnostic'` denotes an Agnostic Module (formerly Shared Module).","key":"JSDOC#DETAILS#AGNOSTIC20#USEAGNOSTIC"},"useServerLogics":{"value":"`'use server logics'` denotes a Server Logics Module.","key":"JSDOC#DETAILS#AGNOSTIC20#USESERVERLOGICS"},"useServerComponents":{"value":"`'use server components'` denotes a Server Components Module.","key":"JSDOC#DETAILS#AGNOSTIC20#USESERVERCOMPONENTS"},"useServerFunctions":{"value":"`'use server functions'` denotes a Server Functions Module.","key":"JSDOC#DETAILS#AGNOSTIC20#USESERVERFUNCTIONS"},"useClientLogics":{"value":"`'use client logics'` denotes a Client Logics Module.","key":"JSDOC#DETAILS#AGNOSTIC20#USECLIENTLOGICS"},"useClientComponents":{"value":"`'use client components'` denotes a Client Components Module.","key":"JSDOC#DETAILS#AGNOSTIC20#USECLIENTCOMPONENTS"},"useAgnosticLogics":{"value":"`'use agnostic logics'` denotes an Agnostic Logics Module.","key":"JSDOC#DETAILS#AGNOSTIC20#USEAGNOSTICLOGICS"},"useAgnosticComponents":{"value":"`'use agnostic components'` denotes an Agnostic Components Module.","key":"JSDOC#DETAILS#AGNOSTIC20#USEAGNOSTICCOMPONENTS"}},"directive21":{"useServerLogicsA":{"value":"`'use server logics'`, `\"use server logics\"` denoting a Server Logics Module.","key":"JSDOC#DETAILS#DIRECTIVE21#USESERVERLOGICSA"},"useClientLogicsA":{"value":"`'use client logics'`, `\"use client logics\"` denoting a Client Logics Module.","key":"JSDOC#DETAILS#DIRECTIVE21#USECLIENTLOGICSA"},"useAgnosticLogicsA":{"value":"`'use agnostic logics'`, `\"use agnostic logics\"` denoting an Agnostic Logics Module.","key":"JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICLOGICSA"},"useServerComponentsA":{"value":"`'use server components'`, `\"use server components\"` denoting a Server Components Module.","key":"JSDOC#DETAILS#DIRECTIVE21#USESERVERCOMPONENTSA"},"useClientComponentsA":{"value":"`'use client components'`, `\"use client components\"` denoting a Client Components Module.","key":"JSDOC#DETAILS#DIRECTIVE21#USECLIENTCOMPONENTSA"},"useAgnosticComponentsA":{"value":"`'use agnostic components'`, `\"use agnostic components\"` denoting an Agnostic Components Module.","key":"JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCOMPONENTSA"},"useServerFunctionsA":{"value":"`'use server functions'`, `\"use server functions\"` denoting a Server Functions Module.","key":"JSDOC#DETAILS#DIRECTIVE21#USESERVERFUNCTIONSA"},"useClientContextsA":{"value":"`'use client contexts'`, `\"use client contexts\"` denoting a Client Contexts Module.","key":"JSDOC#DETAILS#DIRECTIVE21#USECLIENTCONTEXTSA"},"useAgnosticConditionsA":{"value":"`'use agnostic conditions'`, `\"use agnostic conditions\"` denoting an Agnostic Conditions Module.","key":"JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCONDITIONSA"},"useAgnosticStrategiesA":{"value":"`'use agnostic strategies'`, `\"use agnostic strategies\"` denoting an Agnostic Strategies Module.","key":"JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICSTRATEGIESA"},"useServerLogicsB":{"value":"`'use server logics'`: Server Logics Modules do NOT export JSX.","key":"JSDOC#DETAILS#DIRECTIVE21#USESERVERLOGICSB"},"useClientLogicsB":{"value":"`'use client logics'`: Client Logics Modules do NOT export JSX.","key":"JSDOC#DETAILS#DIRECTIVE21#USECLIENTLOGICSB"},"useAgnosticLogicsB":{"value":"`'use agnostic logics'`: Agnostic Logics Modules do NOT export JSX.","key":"JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICLOGICSB"},"useServerComponentsB":{"value":"`'use server components'`: Server Components Modules ONLY export JSX.","key":"JSDOC#DETAILS#DIRECTIVE21#USESERVERCOMPONENTSB"},"useClientComponentsB":{"value":"`'use client components'`: Client Components Modules ONLY export JSX.","key":"JSDOC#DETAILS#DIRECTIVE21#USECLIENTCOMPONENTSB"},"useAgnosticComponentsB":{"value":"`'use agnostic components'`: Agnostic Components Modules ONLY export JSX.","key":"JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCOMPONENTSB"},"useServerFunctionsB":{"value":"`'use server functions'`: Server Functions Modules do NOT export JSX.","key":"JSDOC#DETAILS#DIRECTIVE21#USESERVERFUNCTIONSB"},"useClientContextsB":{"value":"`'use client contexts'`: Client Contexts Modules ONLY export JSX.","key":"JSDOC#DETAILS#DIRECTIVE21#USECLIENTCONTEXTSB"},"useAgnosticConditionsB":{"value":"`'use agnostic conditions'`: Agnostic Conditions Modules ONLY export JSX.","key":"JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCONDITIONSB"},"useAgnosticStrategiesB":{"value":"`'use agnostic strategies'`: Agnostic Strategies Modules may export JSX.","key":"JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICSTRATEGIESB"}}},"returns":{"makeTestFiles":{"value":"The paths of the files to be linted for agnostic20 and directive21.","key":"JSDOC#RETURNS#MAKETESTFILES"},"highlightFirstLineOfCode":{"value":"The `context.report` `loc`-compatible coordinates for the first line of code of a file.","key":"JSDOC#RETURNS#HIGHLIGHTFIRSTLINEOFCODE"},"isImportBlocked":{"value":"`true` if the import is blocked, as established in respective `resolvedDirectives_blockedImports`.","key":"JSDOC#RETURNS#ISIMPORTBLOCKED"},"makeIntroForSpecificViolationMessage":{"value":"\"[Current file 'resolved' modules] are not allowed to import [imported file 'resolved' modules].\"","key":"JSDOC#RETURNS#MAKEINTROFORSPECIFICVIOLATIONMESSAGE"},"makeMessageFromCurrentFileResolvedDirective":{"value":"The message listing the incompatible \"resolved\" modules.","key":"JSDOC#RETURNS#MAKEMESSAGEFROMCURRENTFILERESOLVEDDIRECTIVE"},"findSpecificViolationMessage":{"value":"The corresponding `message`.","key":"JSDOC#RETURNS#FINDSPECIFICVIOLATIONMESSAGE"},"agnostic20":{"makeAgnostic20Config":{"value":"The agnostic20 config's name as a key and its config as its value.","key":"JSDOC#RETURNS#AGNOSTIC20#MAKEAGNOSTIC20CONFIG"},"makeBlockedImport":{"value":"The blockedImport object for the identified blocked import at hand.","key":"JSDOC#RETURNS#AGNOSTIC20#MAKEBLOCKEDIMPORT"},"makeBlockedImportSuggestingUseAgnostic":{"value":"The enhanced blockedImport object with the suggestion to use the `'use agnostic'` directive.","key":"JSDOC#RETURNS#AGNOSTIC20#MAKEBLOCKEDIMPORTSUGGESTINGUSEAGNOSTIC"},"getDirectiveFromModule":{"value":"The directive, or lack thereof via `null`. The lack of a directive is considered server-by-default.","key":"JSDOC#RETURNS#AGNOSTIC20#GETDIRECTIVEFROMMODULE"},"getDirectiveFromCurrentModule":{"value":"The directive, or lack thereof via `null`. The lack of a directive is considered server-by-default.","key":"JSDOC#RETURNS#AGNOSTIC20#GETDIRECTIVEFROMCURRENTMODULE"},"getDirectiveFromImportedModule":{"value":"The directive, or lack thereof via `null`. The lack of a directive is considered server-by-default.","key":"JSDOC#RETURNS#AGNOSTIC20#GETDIRECTIVEFROMIMPORTEDMODULE"},"getEffectiveDirective":{"value":"The effective directive, from which imports rules are applied.","key":"JSDOC#RETURNS#AGNOSTIC20#GETEFFECTIVEDIRECTIVE"},"isImportBlocked":{"value":"`true` if the import is blocked, as established in `effectiveDirectives_BlockedImports`.","key":"JSDOC#RETURNS#AGNOSTIC20#ISIMPORTBLOCKED"},"makeMessageFromCurrentFileEffectiveDirective":{"value":"The message listing the incompatible effective modules.","key":"JSDOC#RETURNS#AGNOSTIC20#MAKEMESSAGEFROMCURRENTFILEEFFECTIVEDIRECTIVE"},"findSpecificViolationMessage":{"value":"The corresponding `message`.","key":"JSDOC#RETURNS#AGNOSTIC20#FINDSPECIFICVIOLATIONMESSAGE"},"currentFileFlow":{"value":"Either an object with `skip: true` to disregard or one with the non-null `currentFileEffectiveDirective`.","key":"JSDOC#RETURNS#AGNOSTIC20#CURRENTFILEFLOW"},"importedFileFlow":{"value":"Either an object with `skip: true` to disregard or one with the non-null `importedFileEffectiveDirective`.","key":"JSDOC#RETURNS#AGNOSTIC20#IMPORTEDFILEFLOW"},"importsFlow":{"value":"Early if the flow needs to be interrupted.","key":"JSDOC#RETURNS#AGNOSTIC20#IMPORTSFLOW"},"reExportsFlow":{"value":"Early if the flow needs to be interrupted.","key":"JSDOC#RETURNS#AGNOSTIC20#REEXPORTSFLOW"}},"directive21":{"makeDirective21Config":{"value":"The directive21 config's name as a key and its config as its value.","key":"JSDOC#RETURNS#DIRECTIVE21#MAKEDIRECTIVE21CONFIG"},"makeBlockedImport":{"value":"The blockedImport object for the identified blocked import at hand.","key":"JSDOC#RETURNS#DIRECTIVE21#MAKEBLOCKEDIMPORT"},"detectQuoteType":{"value":"`true` if single-quoted, `false` if double-quoted, `null` if neither.","key":"JSDOC#RETURNS#DIRECTIVE21#DETECTQUOTETYPE"},"stripSingleQuotes":{"value":"The string with quotes removed.","key":"JSDOC#RETURNS#DIRECTIVE21#STRIPSINGLEQUOTES"},"stripDoubleQuotes":{"value":"The string with quotes removed.","key":"JSDOC#RETURNS#DIRECTIVE21#STRIPDOUBLEQUOTES"},"getCommentedDirectiveFromSourceCode":{"value":"The commented directive, or lack thereof via `null`. Given the strictness of this architecture, the lack of a directive is considered a mistake. (Though rules may provide the opportunity to declare a default, and configs with preset defaults may become provided.)","key":"JSDOC#RETURNS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE"},"getCommentedDirectiveFromCurrentModule":{"value":"The commented directive, or lack thereof via `null`. Given the strictness of this architecture, the lack of a directive is considered a mistake. (Though rules may provide the opportunity to declare a default, and configs with preset defaults may become provided.)","key":"JSDOC#RETURNS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMCURRENTMODULE"},"getCommentedDirectiveFromImportedModule":{"value":"The commented directive, or lack thereof via `null`. Given the strictness of this architecture, the lack of a directive is considered a mistake. (Though rules may provide the opportunity to declare a default, and configs with preset defaults may become provided.)","key":"JSDOC#RETURNS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMIMPORTEDMODULE"},"getVerifiedCommentedDirective":{"value":"The verified commented directive, from which imports rules are applied. Returns `null` if the verification failed, upon which an error will be reported depending on the commented directive, since the error logic here is strictly binary.","key":"JSDOC#RETURNS#DIRECTIVE21#GETVERIFIEDCOMMENTEDDIRECTIVE"},"getStrategizedDirective":{"value":"The interpreted directive, a.k.a. strategized directive, or lack thereof via `null`.","key":"JSDOC#RETURNS#DIRECTIVE21#GETSTRATEGIZEDDIRECTIVE"},"addressDirectiveIfAgnosticStrategies":{"value":"The commented directive, the addressed strategy (as a commented directive) or `null` in case of failure.","key":"JSDOC#RETURNS#DIRECTIVE21#ADDRESSDIRECTIVEIFAGNOSTICSTRATEGIES"},"isImportBlocked":{"value":"`true` if the import is blocked, as established in `commentedDirectives_BlockedImports`.","key":"JSDOC#RETURNS#DIRECTIVE21#ISIMPORTBLOCKED"},"makeMessageFromCurrentFileCommentedDirective":{"value":"The message listing the incompatible commented modules.","key":"JSDOC#RETURNS#DIRECTIVE21#MAKEMESSAGEFROMCURRENTFILECOMMENTEDDIRECTIVE"},"findSpecificViolationMessage":{"value":"The corresponding `message`.","key":"JSDOC#RETURNS#DIRECTIVE21#FINDSPECIFICVIOLATIONMESSAGE"},"currentFileFlow":{"value":"Either an object with `skip: true` to disregard or one with the non-null `verifiedCommentedDirective`.","key":"JSDOC#RETURNS#DIRECTIVE21#CURRENTFILEFLOW"},"importedFileFlow":{"value":"Either an object with `skip: true` to disregard or one with the non-null `importedFileCommentedDirective`.","key":"JSDOC#RETURNS#DIRECTIVE21#IMPORTEDFILEFLOW"},"importsFlow":{"value":"Early if the flow needs to be interrupted.","key":"JSDOC#RETURNS#DIRECTIVE21#IMPORTSFLOW"},"allExportsFlow":{"value":"Early if the flow needs to be interrupted.","key":"JSDOC#RETURNS#DIRECTIVE21#ALLEXPORTSFLOW"}},"tests":{"readFilesRecursively":{"value":"All files at any depths within the provided directory.","key":"JSDOC#RETURNS#TESTS#READFILESRECURSIVELY"},"readValidFilesRecursively":{"value":"The RuleTester's array of valid files with needed properties.","key":"JSDOC#RETURNS#TESTS#READVALIDFILESRECURSIVELY"},"readInvalidFilesRecursively":{"value":"The RuleTester's array of invalid files with needed properties.","key":"JSDOC#RETURNS#TESTS#READINVALIDFILESRECURSIVELY"},"readInvalidFilesRecursively20":{"value":"The RuleTester's array of invalid files with needed properties for agnostic20.","key":"JSDOC#RETURNS#TESTS#READINVALIDFILESRECURSIVELY20"},"readInvalidFilesRecursively21":{"value":"The RuleTester's array of invalid files with needed properties for directive21.","key":"JSDOC#RETURNS#TESTS#READINVALIDFILESRECURSIVELY21"}}},"forAliasVariables":{"importsFlow":{"value":"The full flow for import traversals to enforce effective directives import rules.","key":"JSDOC#FORALIASVARIABLES#IMPORTSFLOW"},"flowReturnsEarly":{"value":"Early if the flow needs to be interrupted.","key":"JSDOC#FORALIASVARIABLES#FLOWRETURNSEARLY"}},"forComposedVariables":{"resolved":{"value":"\"resolved\"","key":"JSDOC#FORCOMPOSEDVARIABLES#RESOLVED"},"effective":{"value":"effective","key":"JSDOC#FORCOMPOSEDVARIABLES#EFFECTIVE"},"commented":{"value":"commented","key":"JSDOC#FORCOMPOSEDVARIABLES#COMMENTED"},"verifiedCommented":{"value":"verified commented","key":"JSDOC#FORCOMPOSEDVARIABLES#VERIFIEDCOMMENTED"},"returnsDeciding":{"value":"Returns a boolean deciding if an imported file's","key":"JSDOC#FORCOMPOSEDVARIABLES#RETURNSDECIDING"},"directiveIncompatible":{"value":"directive is incompatible with the current file's","key":"JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVEINCOMPATIBLE"},"directive":{"value":"directive","key":"JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVE"},"directives":{"value":"directives","key":"JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVES"},"directivePeriod":{"value":"directive.","key":"JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVEPERIOD"},"listsInMessage":{"value":"Lists in an message the","key":"JSDOC#FORCOMPOSEDVARIABLES#LISTSINMESSAGE"},"modulesIncompatible":{"value":"modules incompatible with a","key":"JSDOC#FORCOMPOSEDVARIABLES#MODULESINCOMPATIBLE"},"moduleBasedOn":{"value":"module based on its","key":"JSDOC#FORCOMPOSEDVARIABLES#MODULEBASEDON"},"findTheMessage":{"value":"Finds the `message` for the specific violation of","key":"JSDOC#FORCOMPOSEDVARIABLES#FINDTHEMESSAGE"},"rulesBasedOn":{"value":"directives import rules based on","key":"JSDOC#FORCOMPOSEDVARIABLES#RULESBASEDON"},"rdbiPeriod":{"value":"`resolvedDirectives_blockedImports`.","key":"JSDOC#FORCOMPOSEDVARIABLES#RDBIPERIOD"},"edbiPeriod":{"value":"`effectiveDirectives_BlockedImports`.","key":"JSDOC#FORCOMPOSEDVARIABLES#EDBIPERIOD"},"cdbiPeriod":{"value":"`commentedDirectives_BlockedImports`.","key":"JSDOC#FORCOMPOSEDVARIABLES#CDBIPERIOD"},"theMessageListing":{"value":"The message listing the incompatible","key":"JSDOC#FORCOMPOSEDVARIABLES#THEMESSAGELISTING"},"modulesPeriod":{"value":"modules.","key":"JSDOC#FORCOMPOSEDVARIABLES#MODULESPERIOD"},"trueIfImportBlocked":{"value":"`true` if the import is blocked, as established in","key":"JSDOC#FORCOMPOSEDVARIABLES#TRUEIFIMPORTBLOCKED"},"respective":{"value":"respective","key":"JSDOC#FORCOMPOSEDVARIABLES#RESPECTIVE"},"agnostic20":{"value":"agnostic20","key":"JSDOC#FORCOMPOSEDVARIABLES#AGNOSTIC20"},"directive21":{"value":"directive21","key":"JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVE21"},"makesThe":{"value":"Makes the","key":"JSDOC#FORCOMPOSEDVARIABLES#MAKESTHE"},"configForPlugin":{"value":"config for the use-agnostic ESLint plugin.","key":"JSDOC#FORCOMPOSEDVARIABLES#CONFIGFORPLUGIN"},"initialThe":{"value":"The","key":"JSDOC#FORCOMPOSEDVARIABLES#INITIALTHE"},"configsName":{"value":"config's name as a key and its config as its value.","key":"JSDOC#FORCOMPOSEDVARIABLES#CONFIGSNAME"},"getsDirectiveOf":{"value":"Gets the directive of","key":"JSDOC#FORCOMPOSEDVARIABLES#GETSDIRECTIVEOF"},"aModule":{"value":"a module from its Abstract Syntax Tree.","key":"JSDOC#FORCOMPOSEDVARIABLES#AMODULE"},"currentModule":{"value":"the current module.","key":"JSDOC#FORCOMPOSEDVARIABLES#CURRENTMODULE"},"importedModule":{"value":"the imported module.","key":"JSDOC#FORCOMPOSEDVARIABLES#IMPORTEDMODULE"},"flowThatBegins":{"value":"The flow that begins the import rules enforcement rule, retrieving the","key":"JSDOC#FORCOMPOSEDVARIABLES#FLOWTHATBEGINS"},"ofCurrentFile":{"value":"of the current file before comparing it to upcoming","key":"JSDOC#FORCOMPOSEDVARIABLES#OFCURRENTFILE"},"ofFilesItImports":{"value":"of the files it imports.","key":"JSDOC#FORCOMPOSEDVARIABLES#OFFILESITIMPORTS"},"flowImportReExport":{"value":"The flow that is shared between import and re-export traversals to obtain the import file's","key":"JSDOC#FORCOMPOSEDVARIABLES#FLOWIMPORTREEXPORT"},"getCommentedDirective":{"value":"Gets the commented directive of the","key":"JSDOC#FORCOMPOSEDVARIABLES#GETCOMMENTEDDIRECTIVE"},"currentModulePeriod":{"value":"current module.","key":"JSDOC#FORCOMPOSEDVARIABLES#CURRENTMODULEPERIOD"},"importedModulePeriod":{"value":"imported module.","key":"JSDOC#FORCOMPOSEDVARIABLES#IMPORTEDMODULEPERIOD"},"readAnyDepths":{"value":"Reads file paths at any depths within a provided","key":"JSDOC#FORCOMPOSEDVARIABLES#READANYDEPTHS"},"directory":{"value":"directory","key":"JSDOC#FORCOMPOSEDVARIABLES#DIRECTORY"},"directoryPeriod":{"value":"directory.","key":"JSDOC#FORCOMPOSEDVARIABLES#DIRECTORYPERIOD"},"validFiles":{"value":"valid files","key":"JSDOC#FORCOMPOSEDVARIABLES#VALIDFILES"},"invalidFiles":{"value":"invalid files","key":"JSDOC#FORCOMPOSEDVARIABLES#INVALIDFILES"},"forAgnostic20":{"value":"for agnostic20.","key":"JSDOC#FORCOMPOSEDVARIABLES#FORAGNOSTIC20"},"forDirective21":{"value":"for directive21.","key":"JSDOC#FORCOMPOSEDVARIABLES#FORDIRECTIVE21"},"ruleTesterArray":{"value":"The RuleTester's array of","key":"JSDOC#FORCOMPOSEDVARIABLES#RULETESTERARRAY"},"withNeededProperties":{"value":"with needed properties","key":"JSDOC#FORCOMPOSEDVARIABLES#WITHNEEDEDPROPERTIES"},"withNeededPropertiesPeriod":{"value":"with needed properties.","key":"JSDOC#FORCOMPOSEDVARIABLES#WITHNEEDEDPROPERTIESPERIOD"},"theCurrentFile":{"value":"The current file's","key":"JSDOC#FORCOMPOSEDVARIABLES#THECURRENTFILE"},"theImportedFile":{"value":"The imported file's","key":"JSDOC#FORCOMPOSEDVARIABLES#THEIMPORTEDFILE"},"eitherSkipTrueNonNull":{"value":"Either an object with `skip: true` to disregard or one with the non-null","key":"JSDOC#FORCOMPOSEDVARIABLES#EITHERSKIPTRUENONNULL"},"cfedPeriod":{"value":"`currentFileEffectiveDirective`.","key":"JSDOC#FORCOMPOSEDVARIABLES#CFEDPERIOD"},"ifedPeriod":{"value":"`importedFileEffectiveDirective`.","key":"JSDOC#FORCOMPOSEDVARIABLES#IFEDPERIOD"},"vcdPeriod":{"value":"`verifiedCommentedDirective`.","key":"JSDOC#FORCOMPOSEDVARIABLES#VCDPERIOD"},"ifcdPeriod":{"value":"`importedFileCommentedDirective`.","key":"JSDOC#FORCOMPOSEDVARIABLES#IFCDPERIOD"}}},"tests":{"viaAlias":{"value":"Via alias.","key":"TESTS#VIAALIAS"},"viaBaseUrl":{"value":"Via baseUrl.","key":"TESTS#VIABASEURL"},"valid":{"value":"Valid.","key":"TESTS#VALID"},"invalid":{"value":"Invalid.","key":"TESTS#INVALID"},"withExtension":{"value":"with extension","key":"TESTS#WITHEXTENSION"},"forComposedVariables":{"thatsA":{"value":"That's a","key":"TESTS#FORCOMPOSEDVARIABLES#THATSA"},"thatsAn":{"value":"That's an","key":"TESTS#FORCOMPOSEDVARIABLES#THATSAN"},"importingA":{"value":"...Importing a","key":"TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA"},"importingAn":{"value":"...Importing an","key":"TESTS#FORCOMPOSEDVARIABLES#IMPORTINGAN"},"module":{"value":"Module","key":"TESTS#FORCOMPOSEDVARIABLES#MODULE"},"modulePeriod":{"value":"Module.","key":"TESTS#FORCOMPOSEDVARIABLES#MODULEPERIOD"},"withExtensionParentheses":{"value":"(with extension).","key":"TESTS#FORCOMPOSEDVARIABLES#WITHEXTENSIONPARENTHESES"},"byFolder":{"value":"by a folder.","key":"TESTS#FORCOMPOSEDVARIABLES#BYFOLDER"},"importing":{"value":"...Importing","key":"TESTS#FORCOMPOSEDVARIABLES#IMPORTING"},"viaStrategyPeriod":{"value":"via Special Agnostic Strategy.","key":"TESTS#FORCOMPOSEDVARIABLES#VIASTRATEGYPERIOD"},"viaStrategy":{"value":"via Special Agnostic Strategy","key":"TESTS#FORCOMPOSEDVARIABLES#VIASTRATEGY"}}},"agnostic20":{"use server logics":{"use server logics":{"value":"Server Logics can compose with one another.","key":"AGNOSTIC20#USE_SERVER_LOGICS#USE_SERVER_LOGICS"},"use server components":{"value":"Server Components are OK to be composed with Server Logics as long as the Server Logics Module, by convention, does not export React components.","key":"AGNOSTIC20#USE_SERVER_LOGICS#USE_SERVER_COMPONENTS"},"use server functions":{"value":"Server Functions, being able to import one another, can compose and do so via Server Logics, despite this method seeming superfluous at first glance. (Perhaps a preferrable use case for this has been found or could be found either today or in the future.)","key":"AGNOSTIC20#USE_SERVER_LOGICS#USE_SERVER_FUNCTIONS"},"use client logics":{"value":"Client Logics should never leak to the server.","key":"AGNOSTIC20#USE_SERVER_LOGICS#USE_CLIENT_LOGICS"},"use client components":{"value":"Client Components cannot be tinkered with on the server.","key":"AGNOSTIC20#USE_SERVER_LOGICS#USE_CLIENT_COMPONENTS"},"use agnostic logics":{"value":"Agnostic Logics can run safely on the server just like they can on the client.","key":"AGNOSTIC20#USE_SERVER_LOGICS#USE_AGNOSTIC_LOGICS"},"use agnostic components":{"value":"Agnostic Components can be composed with Logics on the server just like they can on the client, as long at the Server Logics Module, by convention, does not export React components.","key":"AGNOSTIC20#USE_SERVER_LOGICS#USE_AGNOSTIC_COMPONENTS"},"kinds":{"value":"Server Logics","key":"AGNOSTIC20#USE_SERVER_LOGICS#KINDS"},"kindsComma":{"value":"Server Logics,","key":"AGNOSTIC20#USE_SERVER_LOGICS#KINDSCOMMA"},"kindsPeriod":{"value":"Server Logics.","key":"AGNOSTIC20#USE_SERVER_LOGICS#KINDSPERIOD"},"module":{"value":"Server Logics Module","key":"AGNOSTIC20#USE_SERVER_LOGICS#MODULE"},"thatsAModule":{"value":"That's a Server Logics Module.","key":"AGNOSTIC20#USE_SERVER_LOGICS#THATSAMODULE"},"importingWithExtension":{"value":"...Importing a Server Logics Module (with extension).","key":"AGNOSTIC20#USE_SERVER_LOGICS#IMPORTINGWITHEXTENSION"},"importingByAFolder":{"value":"...Importing a Server Logics Module by a folder.","key":"AGNOSTIC20#USE_SERVER_LOGICS#IMPORTINGBYAFOLDER"},"directive":{"value":"use server logics","key":"AGNOSTIC20#USE_SERVER_LOGICS#DIRECTIVE"}},"use server components":{"use server logics":{"value":"Server Logics, being logic from the server, can safely support Server Components.","key":"AGNOSTIC20#USE_SERVER_COMPONENTS#USE_SERVER_LOGICS"},"use server components":{"value":"Server Components can compose with one another, assuming thanks to the inclusion of the 'use agnostic' directive that they are actual Server Components.","key":"AGNOSTIC20#USE_SERVER_COMPONENTS#USE_SERVER_COMPONENTS"},"use server functions":{"value":"Server Functions can be passed to imported Client Components within Server Components Modules, even though indeed Server Components Modules and Server Components can make their own Server Functions through inline `'use server'` directives.","key":"AGNOSTIC20#USE_SERVER_COMPONENTS#USE_SERVER_FUNCTIONS"},"use client logics":{"value":"Client Logics should never leak to the server.","key":"AGNOSTIC20#USE_SERVER_COMPONENTS#USE_CLIENT_LOGICS"},"use client components":{"value":"Client Components can be nested inside Server Components either to wrap some of the tree with client state accessible through child Client Components and pass through Server Components or to create client boundaries when the root of the application is planted on the server.","key":"AGNOSTIC20#USE_SERVER_COMPONENTS#USE_CLIENT_COMPONENTS"},"use agnostic logics":{"value":"Agnostic Logics can run safely on the server just like they can on the client.","key":"AGNOSTIC20#USE_SERVER_COMPONENTS#USE_AGNOSTIC_LOGICS"},"use agnostic components":{"value":"Agnostic Components can render safely on the server just like they can on the client.","key":"AGNOSTIC20#USE_SERVER_COMPONENTS#USE_AGNOSTIC_COMPONENTS"},"kinds":{"value":"Server Components","key":"AGNOSTIC20#USE_SERVER_COMPONENTS#KINDS"},"kindsComma":{"value":"Server Components,","key":"AGNOSTIC20#USE_SERVER_COMPONENTS#KINDSCOMMA"},"kindsPeriod":{"value":"Server Components.","key":"AGNOSTIC20#USE_SERVER_COMPONENTS#KINDSPERIOD"},"module":{"value":"Server Components Module","key":"AGNOSTIC20#USE_SERVER_COMPONENTS#MODULE"},"thatsAModule":{"value":"That's a Server Components Module.","key":"AGNOSTIC20#USE_SERVER_COMPONENTS#THATSAMODULE"},"importingWithExtension":{"value":"...Importing a Server Components Module (with extension).","key":"AGNOSTIC20#USE_SERVER_COMPONENTS#IMPORTINGWITHEXTENSION"},"importingByAFolder":{"value":"...Importing a Server Components Module by a folder.","key":"AGNOSTIC20#USE_SERVER_COMPONENTS#IMPORTINGBYAFOLDER"},"directive":{"value":"use server components","key":"AGNOSTIC20#USE_SERVER_COMPONENTS#DIRECTIVE"}},"use server functions":{"use server logics":{"value":"Server Logics, being logic from the server, can safely support Server Functions.","key":"AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_SERVER_LOGICS"},"use server components":{"value":"Server Components aren't allowed because Server Functions have no business working with React Components.","key":"AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_SERVER_COMPONENTS"},"use server functions":{"value":"Server Functions, even though they don't need to import one another and the same results can be generated via Server Logics for the outcome of a single Server Function, can still compose with one another. (Perhaps a preferrable use case for this has been found or could be found either today or in the future.)","key":"AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_SERVER_FUNCTIONS"},"use client logics":{"value":"Client Logics should never leak to the server.","key":"AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_CLIENT_LOGICS"},"use client components":{"value":"Client Components aren't allowed because Server Functions have no business working with React Components.","key":"AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_CLIENT_COMPONENTS"},"use agnostic logics":{"value":"Agnostic Logics can run safely on the server just like they can on the client.","key":"AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_LOGICS"},"use agnostic components":{"value":"Agnostic Components aren't allowed because Server Functions have no business working with React Components.","key":"AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_COMPONENTS"},"kinds":{"value":"Server Functions","key":"AGNOSTIC20#USE_SERVER_FUNCTIONS#KINDS"},"kindsComma":{"value":"Server Functions,","key":"AGNOSTIC20#USE_SERVER_FUNCTIONS#KINDSCOMMA"},"kindsPeriod":{"value":"Server Functions.","key":"AGNOSTIC20#USE_SERVER_FUNCTIONS#KINDSPERIOD"},"module":{"value":"Server Functions Module","key":"AGNOSTIC20#USE_SERVER_FUNCTIONS#MODULE"},"thatsAModule":{"value":"That's a Server Functions Module.","key":"AGNOSTIC20#USE_SERVER_FUNCTIONS#THATSAMODULE"},"importingWithExtension":{"value":"...Importing a Server Functions Module (with extension).","key":"AGNOSTIC20#USE_SERVER_FUNCTIONS#IMPORTINGWITHEXTENSION"},"importingByAFolder":{"value":"...Importing a Server Functions Module by a folder.","key":"AGNOSTIC20#USE_SERVER_FUNCTIONS#IMPORTINGBYAFOLDER"},"directive":{"value":"use server functions","key":"AGNOSTIC20#USE_SERVER_FUNCTIONS#DIRECTIVE"}},"use client logics":{"use server logics":{"value":"Server Logics should never leak to the client.","key":"AGNOSTIC20#USE_CLIENT_LOGICS#USE_SERVER_LOGICS"},"use server components":{"value":"Server Components cannot be tinkered with on the client.","key":"AGNOSTIC20#USE_CLIENT_LOGICS#USE_SERVER_COMPONENTS"},"use server functions":{"value":"Server Functions can technically be attached to Client Components that are being tinkered with within Client Logics Modules.","key":"AGNOSTIC20#USE_CLIENT_LOGICS#USE_SERVER_FUNCTIONS"},"use client logics":{"value":"Client Logics can compose with one another.","key":"AGNOSTIC20#USE_CLIENT_LOGICS#USE_CLIENT_LOGICS"},"use client components":{"value":"Client Components are OK to be composed with Client Logics as long as the Client Logics Module, by convention, does not export React components.","key":"AGNOSTIC20#USE_CLIENT_LOGICS#USE_CLIENT_COMPONENTS"},"use agnostic logics":{"value":"Agnostic Logics can run safely on the client just like they can on the server.","key":"AGNOSTIC20#USE_CLIENT_LOGICS#USE_AGNOSTIC_LOGICS"},"use agnostic components":{"value":"Agnostic Components can be composed with Logics on the client just like they can on the server, as long as the Client Logics Module, by convention, does not export React components.","key":"AGNOSTIC20#USE_CLIENT_LOGICS#USE_AGNOSTIC_COMPONENTS"},"kinds":{"value":"Client Logics","key":"AGNOSTIC20#USE_CLIENT_LOGICS#KINDS"},"kindsComma":{"value":"Client Logics,","key":"AGNOSTIC20#USE_CLIENT_LOGICS#KINDSCOMMA"},"kindsPeriod":{"value":"Client Logics.","key":"AGNOSTIC20#USE_CLIENT_LOGICS#KINDSPERIOD"},"module":{"value":"Client Logics Module","key":"AGNOSTIC20#USE_CLIENT_LOGICS#MODULE"},"thatsAModule":{"value":"That's a Client Logics Module.","key":"AGNOSTIC20#USE_CLIENT_LOGICS#THATSAMODULE"},"importingWithExtension":{"value":"...Importing a Client Logics Module (with extension).","key":"AGNOSTIC20#USE_CLIENT_LOGICS#IMPORTINGWITHEXTENSION"},"importingByAFolder":{"value":"...Importing a Client Logics Module by a folder.","key":"AGNOSTIC20#USE_CLIENT_LOGICS#IMPORTINGBYAFOLDER"},"directive":{"value":"use client logics","key":"AGNOSTIC20#USE_CLIENT_LOGICS#DIRECTIVE"}},"use client components":{"use server logics":{"value":"Server Logics should never leak to the client.","key":"AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_SERVER_LOGICS"},"use server components":{"value":"Server Components may only pass through Client Components via the children prop within Server Components Modules.","key":"AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_SERVER_COMPONENTS"},"use server functions":{"value":"Server Functions can specifically be triggered by Client Components.","key":"AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_SERVER_FUNCTIONS"},"use client logics":{"value":"Client Logics, being logic from the client, can safely support Client Components.","key":"AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_CLIENT_LOGICS"},"use client components":{"value":"Client Components can compose with one another.","key":"AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_CLIENT_COMPONENTS"},"use agnostic logics":{"value":"Agnostic Logics can run safely on the client just like they can on the server.","key":"AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_AGNOSTIC_LOGICS"},"use agnostic components":{"value":"Agnostic Components can render safely on the client just like they can on the server.","key":"AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_AGNOSTIC_COMPONENTS"},"kinds":{"value":"Client Components","key":"AGNOSTIC20#USE_CLIENT_COMPONENTS#KINDS"},"kindsComma":{"value":"Client Components,","key":"AGNOSTIC20#USE_CLIENT_COMPONENTS#KINDSCOMMA"},"kindsPeriod":{"value":"Client Components.","key":"AGNOSTIC20#USE_CLIENT_COMPONENTS#KINDSPERIOD"},"module":{"value":"Client Components Module","key":"AGNOSTIC20#USE_CLIENT_COMPONENTS#MODULE"},"thatsAModule":{"value":"That's a Client Components Module.","key":"AGNOSTIC20#USE_CLIENT_COMPONENTS#THATSAMODULE"},"importingWithExtension":{"value":"...Importing a Client Components Module (with extension).","key":"AGNOSTIC20#USE_CLIENT_COMPONENTS#IMPORTINGWITHEXTENSION"},"importingByAFolder":{"value":"...Importing a Client Components Module by a folder.","key":"AGNOSTIC20#USE_CLIENT_COMPONENTS#IMPORTINGBYAFOLDER"},"directive":{"value":"use client components","key":"AGNOSTIC20#USE_CLIENT_COMPONENTS#DIRECTIVE"}},"use agnostic logics":{"use server logics":{"value":"Server Logics cannot run on both the server and the client.","key":"AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_SERVER_LOGICS"},"use server components":{"value":"Server Components cannot be tinkered with on both the server and the client.","key":"AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_SERVER_COMPONENTS"},"use server functions":{"value":"Server Functions can be modified on the server and on the client, but their use cases on both environments are not one-to-one compatible, since they're being addressed as they are on the server and addressed as references on the client.","key":"AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_SERVER_FUNCTIONS"},"use client logics":{"value":"Client Logics cannot run on both the server and the client.","key":"AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_CLIENT_LOGICS"},"use client components":{"value":"Client Components cannot be tinkered with on both the server and the client.","key":"AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_CLIENT_COMPONENTS"},"use agnostic logics":{"value":"Agnostic Logics can compose with one another.","key":"AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_AGNOSTIC_LOGICS"},"use agnostic components":{"value":"Agnostic Components can be composed with Logics agnostically as long as the Agnostic Logics Module, by convention, does not export React components.","key":"AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_AGNOSTIC_COMPONENTS"},"kinds":{"value":"Agnostic Logics","key":"AGNOSTIC20#USE_AGNOSTIC_LOGICS#KINDS"},"kindsComma":{"value":"Agnostic Logics,","key":"AGNOSTIC20#USE_AGNOSTIC_LOGICS#KINDSCOMMA"},"kindsPeriod":{"value":"Agnostic Logics.","key":"AGNOSTIC20#USE_AGNOSTIC_LOGICS#KINDSPERIOD"},"module":{"value":"Agnostic Logics Module","key":"AGNOSTIC20#USE_AGNOSTIC_LOGICS#MODULE"},"thatsAModule":{"value":"That's an Agnostic Logics Module.","key":"AGNOSTIC20#USE_AGNOSTIC_LOGICS#THATSAMODULE"},"importingWithExtension":{"value":"...Importing an Agnostic Logics Module (with extension).","key":"AGNOSTIC20#USE_AGNOSTIC_LOGICS#IMPORTINGWITHEXTENSION"},"importingByAFolder":{"value":"...Importing an Agnostic Logics Module by a folder.","key":"AGNOSTIC20#USE_AGNOSTIC_LOGICS#IMPORTINGBYAFOLDER"},"directive":{"value":"use agnostic logics","key":"AGNOSTIC20#USE_AGNOSTIC_LOGICS#DIRECTIVE"}},"use agnostic components":{"use server logics":{"value":"Server Logics cannot run on both the server and the client.","key":"AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_SERVER_LOGICS"},"use server components":{"value":"Server Components, unlike Client Components, cannot make silos of their own once on the opposing environment (the client in this case), and therefore cannot be executed from the client, making them unable to execute agnostically from both the server and the client.","key":"AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_SERVER_COMPONENTS"},"use server functions":{"value":"Server Functions can be passed to Client Components as props when Client Components are also legally imported into Agnostic Components Modules.","key":"AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_SERVER_FUNCTIONS"},"use client logics":{"value":"Client Logics cannot run on both the server and the client.","key":"AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_LOGICS"},"use client components":{"value":"Client Components can be nested inside Agnostic Components either to wrap some of the tree with client state accessible through child Client Components and pass through Server Components — if still on the Server Tree — or to create client boundaries when the root of the application is planted on the server.","key":"AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_COMPONENTS"},"use agnostic logics":{"value":"Agnostic Logics, being environment-agnostic logic, can safely support Agnostic Components.","key":"AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_AGNOSTIC_LOGICS"},"use agnostic components":{"value":"Agnostic Components can compose with one another.","key":"AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_AGNOSTIC_COMPONENTS"},"kinds":{"value":"Agnostic Components","key":"AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#KINDS"},"kindsComma":{"value":"Agnostic Components,","key":"AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#KINDSCOMMA"},"kindsPeriod":{"value":"Agnostic Components.","key":"AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#KINDSPERIOD"},"module":{"value":"Agnostic Components Module","key":"AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#MODULE"},"thatsAModule":{"value":"That's an Agnostic Components Module.","key":"AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#THATSAMODULE"},"importingWithExtension":{"value":"...Importing an Agnostic Components Module (with extension).","key":"AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#IMPORTINGWITHEXTENSION"},"importingByAFolder":{"value":"...Importing an Agnostic Components Module by a folder.","key":"AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#IMPORTINGBYAFOLDER"},"directive":{"value":"use agnostic components","key":"AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#DIRECTIVE"}},"forAliasVariables":{"serverNeverClient":{"value":"Server Logics should never leak to the client.","key":"AGNOSTIC20#FORALIASVARIABLES#SERVERNEVERCLIENT"},"clientNeverServer":{"value":"Client Logics should never leak to the server.","key":"AGNOSTIC20#FORALIASVARIABLES#CLIENTNEVERSERVER"},"agnosticCanServerClient":{"value":"Agnostic Logics can run safely on the server just like they can on the client.","key":"AGNOSTIC20#FORALIASVARIABLES#AGNOSTICCANSERVERCLIENT"},"agnosticCanClientServer":{"value":"Agnostic Logics can run safely on the client just like they can on the server.","key":"AGNOSTIC20#FORALIASVARIABLES#AGNOSTICCANCLIENTSERVER"},"serverFunctionsNoComponents":{"value":"Server Functions have no business working with React Components.","key":"AGNOSTIC20#FORALIASVARIABLES#SERVERFUNCTIONSNOCOMPONENTS"},"serverLogicsCantBoth":{"value":"Server Logics cannot run on both the server and the client.","key":"AGNOSTIC20#FORALIASVARIABLES#SERVERLOGICSCANTBOTH"},"clientLogicsCantBoth":{"value":"Client Logics cannot run on both the server and the client.","key":"AGNOSTIC20#FORALIASVARIABLES#CLIENTLOGICSCANTBOTH"}},"forComposedVariables":{"shouldNeverClient":{"value":"should never leak to the client.","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#SHOULDNEVERCLIENT"},"shouldNeverServer":{"value":"should never leak to the server.","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#SHOULDNEVERSERVER"},"runServerLikeClient":{"value":"can run safely on the server just like they can on the client.","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#RUNSERVERLIKECLIENT"},"runClientLikeServer":{"value":"can run safely on the client just like they can on the server.","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#RUNCLIENTLIKESERVER"},"canComposeOneAnother":{"value":"can compose with one another.","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#CANCOMPOSEONEANOTHER"},"cantTinkeredServer":{"value":"cannot be tinkered with on the server.","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTTINKEREDSERVER"},"cantTinkeredClient":{"value":"cannot be tinkered with on the client.","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTTINKEREDCLIENT"},"cantTinkeredBoth":{"value":"cannot be tinkered with on both the server and the client.","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTTINKEREDBOTH"},"serverComponentsOKLogics":{"value":"Server Components are OK to be composed with Server Logics as long as the Server Logics Module,","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#SERVERCOMPONENTSOKLOGICS"},"clientComponentsOKLogics":{"value":"Client Components are OK to be composed with Client Logics as long as the Client Logics Module,","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#CLIENTCOMPONENTSOKLOGICS"},"agnosticComponentsCanServer":{"value":"Agnostic Components can be composed with Logics on the server just like they can on the client, as long at the Server Logics Module,","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#AGNOSTICCOMPONENTSCANSERVER"},"agnosticComponentsCanClient":{"value":"Agnostic Components can be composed with Logics on the client just like they can on the server, as long as the Client Logics Module,","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#AGNOSTICCOMPONENTSCANCLIENT"},"agnosticComponentsCanAgnostic":{"value":"Agnostic Components can be composed with Logics agnostically as long as the Agnostic Logics Module,","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#AGNOSTICCOMPONENTSCANAGNOSTIC"},"noExportComponents":{"value":"by convention, does not export React components.","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#NOEXPORTCOMPONENTS"},"cantServerClient":{"value":"cannot run on both the server and the client.","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTSERVERCLIENT"},"arentAllowed":{"value":"aren't allowed because","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#ARENTALLOWED"},"allowedBecause":{"value":"allowed, because","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#ALLOWEDBECAUSE"},"beingLogicServer":{"value":"being logic from the server,","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#BEINGLOGICSERVER"},"beingLogicClient":{"value":"being logic from the client,","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#BEINGLOGICCLIENT"},"beingLogicAgnostic":{"value":"being environment-agnostic logic,","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#BEINGLOGICAGNOSTIC"},"canSafelySupport":{"value":"can safely support","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#CANSAFELYSUPPORT"},"canBeNestedInside":{"value":"can be nested inside","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#CANBENESTEDINSIDE"},"eitherWrapTree":{"value":"either to wrap some of the tree with client state accessible through child Client Components and pass through Server Components","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#EITHERWRAPTREE"},"ifStillOnServerTree":{"value":"— if still on the Server Tree —","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#IFSTILLONSERVERTREE"},"orCreateBoundaries":{"value":"or to create client boundaries when the root of the application is planted on the server.","key":"AGNOSTIC20#FORCOMPOSEDVARIABLES#ORCREATEBOUNDARIES"}}},"directive21":{"use server logics":{"use server logics":{"value":"Prime Server Logics can compose with one another.","key":"DIRECTIVE21#USE_SERVER_LOGICS#USE_SERVER_LOGICS"},"use client logics":{"value":"Prime Client Logics should never leak to the server.","key":"DIRECTIVE21#USE_SERVER_LOGICS#USE_CLIENT_LOGICS"},"use agnostic logics":{"value":"Prime Agnostic Logics can run safely on the server just like they can on the client.","key":"DIRECTIVE21#USE_SERVER_LOGICS#USE_AGNOSTIC_LOGICS"},"use server components":{"value":"Lineal Server Components are OK to be composed with Prime Server Logics as long as the Prime Server Logics Module, by convention, does not export React components.","key":"DIRECTIVE21#USE_SERVER_LOGICS#USE_SERVER_COMPONENTS"},"use client components":{"value":"Lineal Client Components, like any Client Components, cannot be tinkered with on the server.","key":"DIRECTIVE21#USE_SERVER_LOGICS#USE_CLIENT_COMPONENTS"},"use agnostic components":{"value":"Lineal Agnostic Components can be composed with any Prime Environment Logics agnostically, as long as the Prime Environment Logics Module, by convention, does not export React components.","key":"DIRECTIVE21#USE_SERVER_LOGICS#USE_AGNOSTIC_COMPONENTS"},"use server functions":{"value":"(Special) Server Functions, being able to import one another, can compose and do so via Prime Server Logics, despite this method seeming superfluous at first glance. (Perhaps a preferrable use case for this has been found or could be found either today or in the future.)","key":"DIRECTIVE21#USE_SERVER_LOGICS#USE_SERVER_FUNCTIONS"},"use client contexts":{"value":"(Special) Client Contexts Components, like any Client Components, cannot be tinkered with on the server.","key":"DIRECTIVE21#USE_SERVER_LOGICS#USE_CLIENT_CONTEXTS"},"use agnostic conditions":{"value":"(Special) Agnostic Conditions Components are able to safely render on the server, guaranteeing that only their `ComponentForServer` will be effectively involved in Prime Server Logics Modules.","key":"DIRECTIVE21#USE_SERVER_LOGICS#USE_AGNOSTIC_CONDITIONS"},"kinds":{"value":"Prime Server Logics","key":"DIRECTIVE21#USE_SERVER_LOGICS#KINDS"},"kindsComma":{"value":"Prime Server Logics,","key":"DIRECTIVE21#USE_SERVER_LOGICS#KINDSCOMMA"},"kindsPeriod":{"value":"Prime Server Logics.","key":"DIRECTIVE21#USE_SERVER_LOGICS#KINDSPERIOD"},"kindsSimple":{"value":"Server Logics","key":"DIRECTIVE21#USE_SERVER_LOGICS#KINDSSIMPLE"},"module":{"value":"Prime Server Logics Module","key":"DIRECTIVE21#USE_SERVER_LOGICS#MODULE"},"moduleSimple":{"value":"Server Logics Module","key":"DIRECTIVE21#USE_SERVER_LOGICS#MODULESIMPLE"},"importingAModule":{"value":"...Importing a Prime Server Logics Module.","key":"DIRECTIVE21#USE_SERVER_LOGICS#IMPORTINGAMODULE"},"importingByAFolder":{"value":"...Importing a Prime Server Logics Module by a folder.","key":"DIRECTIVE21#USE_SERVER_LOGICS#IMPORTINGBYAFOLDER"},"importingViaStrategy":{"value":"...Importing Prime Server Logics via Special Agnostic Strategy.","key":"DIRECTIVE21#USE_SERVER_LOGICS#IMPORTINGVIASTRATEGY"},"importingViaStrategyByAFolder":{"value":"...Importing Prime Server Logics via Special Agnostic Strategy by a folder.","key":"DIRECTIVE21#USE_SERVER_LOGICS#IMPORTINGVIASTRATEGYBYAFOLDER"},"directive":{"value":"use server logics","key":"DIRECTIVE21#USE_SERVER_LOGICS#DIRECTIVE"},"atStrategy":{"value":"@serverLogics","key":"DIRECTIVE21#USE_SERVER_LOGICS#ATSTRATEGY"}},"use client logics":{"use server logics":{"value":"Prime Server Logics should never leak to the client.","key":"DIRECTIVE21#USE_CLIENT_LOGICS#USE_SERVER_LOGICS"},"use client logics":{"value":"Prime Client Logics can compose with one another.","key":"DIRECTIVE21#USE_CLIENT_LOGICS#USE_CLIENT_LOGICS"},"use agnostic logics":{"value":"Prime Agnostic Logics can run safely on the client just like they can on the server.","key":"DIRECTIVE21#USE_CLIENT_LOGICS#USE_AGNOSTIC_LOGICS"},"use server components":{"value":"Lineal Server Components cannot be tinkered with on the client.","key":"DIRECTIVE21#USE_CLIENT_LOGICS#USE_SERVER_COMPONENTS"},"use client components":{"value":"Prime Client Logics, like any Client Components, are OK to be composed with Prime Client Logics as long as the Prime Client Logics Module, by convention, does not export React components.","key":"DIRECTIVE21#USE_CLIENT_LOGICS#USE_CLIENT_COMPONENTS"},"use agnostic components":{"value":"Lineal Agnostic Components can be composed with any Prime Environment Logics agnostically, as long as the Prime Environment Logics Module, by convention, does not export React components.","key":"DIRECTIVE21#USE_CLIENT_LOGICS#USE_AGNOSTIC_COMPONENTS"},"use server functions":{"value":"(Special) Server Functions can technically be attached to any Client Components that are being tinkered with within Client Logics Modules.","key":"DIRECTIVE21#USE_CLIENT_LOGICS#USE_SERVER_FUNCTIONS"},"use client contexts":{"value":"(Special) Client Contexts Components, like any Client Components, are OK to be composed with Prime Client Logics as long as the Prime Client Logics Module, by convention, does not export React components.","key":"DIRECTIVE21#USE_CLIENT_LOGICS#USE_CLIENT_CONTEXTS"},"use agnostic conditions":{"value":"(Special) Agnostic Conditions Components are able to safely render on the client, guaranteeing that only their `ComponentForClient` will be effectively involved in Prime Client Logics Modules.","key":"DIRECTIVE21#USE_CLIENT_LOGICS#USE_AGNOSTIC_CONDITIONS"},"kinds":{"value":"Prime Client Logics","key":"DIRECTIVE21#USE_CLIENT_LOGICS#KINDS"},"kindsComma":{"value":"Prime Client Logics,","key":"DIRECTIVE21#USE_CLIENT_LOGICS#KINDSCOMMA"},"kindsPeriod":{"value":"Prime Client Logics.","key":"DIRECTIVE21#USE_CLIENT_LOGICS#KINDSPERIOD"},"kindsSimple":{"value":"Client Logics","key":"DIRECTIVE21#USE_CLIENT_LOGICS#KINDSSIMPLE"},"module":{"value":"Prime Client Logics Module","key":"DIRECTIVE21#USE_CLIENT_LOGICS#MODULE"},"moduleSimple":{"value":"Client Logics Module","key":"DIRECTIVE21#USE_CLIENT_LOGICS#MODULESIMPLE"},"importingAModule":{"value":"...Importing a Prime Client Logics Module.","key":"DIRECTIVE21#USE_CLIENT_LOGICS#IMPORTINGAMODULE"},"importingByAFolder":{"value":"...Importing a Prime Client Logics Module by a folder.","key":"DIRECTIVE21#USE_CLIENT_LOGICS#IMPORTINGBYAFOLDER"},"importingViaStrategy":{"value":"...Importing Prime Client Logics via Special Agnostic Strategy.","key":"DIRECTIVE21#USE_CLIENT_LOGICS#IMPORTINGVIASTRATEGY"},"importingViaStrategyByAFolder":{"value":"...Importing Prime Client Logics via Special Agnostic Strategy by a folder.","key":"DIRECTIVE21#USE_CLIENT_LOGICS#IMPORTINGVIASTRATEGYBYAFOLDER"},"directive":{"value":"use client logics","key":"DIRECTIVE21#USE_CLIENT_LOGICS#DIRECTIVE"},"atStrategy":{"value":"@clientLogics","key":"DIRECTIVE21#USE_CLIENT_LOGICS#ATSTRATEGY"}},"use agnostic logics":{"use server logics":{"value":"Prime Server Logics cannot run on both the server and the client.","key":"DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_SERVER_LOGICS"},"use client logics":{"value":"Prime Client Logics cannot run on both the server and the client.","key":"DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_CLIENT_LOGICS"},"use agnostic logics":{"value":"Prime Agnostic Logics can compose with one another.","key":"DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_AGNOSTIC_LOGICS"},"use server components":{"value":"Lineal Server Components cannot be tinkered with on both the server and the client.","key":"DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_SERVER_COMPONENTS"},"use client components":{"value":"Lineal Client Components, like any Client Components, cannot be tinkered with on both the server and the client.","key":"DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_CLIENT_COMPONENTS"},"use agnostic components":{"value":"Lineal Agnostic Components can be composed with any Prime Environment Logics agnostically, as long as the Prime Environment Logics Module, by convention, does not export React components.","key":"DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_AGNOSTIC_COMPONENTS"},"use server functions":{"value":"(Special) Server Functions can be modified on the server and on the client, but their use cases on both environments are not one-to-one compatible, since they're being addressed as they are on the server and addressed as references on the client.","key":"DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_SERVER_FUNCTIONS"},"use client contexts":{"value":"(Special) Client Contexts Components, like any Client Components, cannot be tinkered with on both the server and the client.","key":"DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_CLIENT_CONTEXTS"},"use agnostic conditions":{"value":"(Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can be composed with any Prime Environment Logics agnostically, as long as the Prime Environment Logics Module, by convention, does not export React components.","key":"DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_AGNOSTIC_CONDITIONS"},"kinds":{"value":"Prime Agnostic Logics","key":"DIRECTIVE21#USE_AGNOSTIC_LOGICS#KINDS"},"kindsComma":{"value":"Prime Agnostic Logics,","key":"DIRECTIVE21#USE_AGNOSTIC_LOGICS#KINDSCOMMA"},"kindsPeriod":{"value":"Prime Agnostic Logics.","key":"DIRECTIVE21#USE_AGNOSTIC_LOGICS#KINDSPERIOD"},"kindsSimple":{"value":"Agnostic Logics","key":"DIRECTIVE21#USE_AGNOSTIC_LOGICS#KINDSSIMPLE"},"module":{"value":"Prime Agnostic Logics Module","key":"DIRECTIVE21#USE_AGNOSTIC_LOGICS#MODULE"},"moduleSimple":{"value":"Agnostic Logics Module","key":"DIRECTIVE21#USE_AGNOSTIC_LOGICS#MODULESIMPLE"},"importingAModule":{"value":"...Importing a Prime Agnostic Logics Module.","key":"DIRECTIVE21#USE_AGNOSTIC_LOGICS#IMPORTINGAMODULE"},"importingByAFolder":{"value":"...Importing a Prime Agnostic Logics Module by a folder.","key":"DIRECTIVE21#USE_AGNOSTIC_LOGICS#IMPORTINGBYAFOLDER"},"importingViaStrategy":{"value":"...Importing Prime Agnostic Logics via Special Agnostic Strategy.","key":"DIRECTIVE21#USE_AGNOSTIC_LOGICS#IMPORTINGVIASTRATEGY"},"importingViaStrategyByAFolder":{"value":"...Importing Prime Agnostic Logics via Special Agnostic Strategy by a folder.","key":"DIRECTIVE21#USE_AGNOSTIC_LOGICS#IMPORTINGVIASTRATEGYBYAFOLDER"},"directive":{"value":"use agnostic logics","key":"DIRECTIVE21#USE_AGNOSTIC_LOGICS#DIRECTIVE"},"atStrategy":{"value":"@agnosticLogics","key":"DIRECTIVE21#USE_AGNOSTIC_LOGICS#ATSTRATEGY"}},"use server components":{"use server logics":{"value":"Prime Server Logics, being logic from the server, can safely support Lineal Server Components.","key":"DIRECTIVE21#USE_SERVER_COMPONENTS#USE_SERVER_LOGICS"},"use client logics":{"value":"Prime Client Logics should never leak to the server.","key":"DIRECTIVE21#USE_SERVER_COMPONENTS#USE_CLIENT_LOGICS"},"use agnostic logics":{"value":"Prime Agnostic Logics can run safely on the server just like they can on the client.","key":"DIRECTIVE21#USE_SERVER_COMPONENTS#USE_AGNOSTIC_LOGICS"},"use server components":{"value":"Lineal Server Components can compose with one another, now that thanks to the inclusion of Agnostic Components they are actual Server Components.","key":"DIRECTIVE21#USE_SERVER_COMPONENTS#USE_SERVER_COMPONENTS"},"use client components":{"value":"Lineal Client Components can be nested inside Lineal Server Components to create client boundaries when the root of the application is planted on the server.","key":"DIRECTIVE21#USE_SERVER_COMPONENTS#USE_CLIENT_COMPONENTS"},"use agnostic components":{"value":"Lineal Agnostic Components can render safely on the server just like they can on the client.","key":"DIRECTIVE21#USE_SERVER_COMPONENTS#USE_AGNOSTIC_COMPONENTS"},"use server functions":{"value":"(Special) Server Functions can be passed to imported Client Components within Lineal Server Components Modules, even though indeed Lineal Server Components Modules and Lineal Server Components can make their own Server Functions through inline `'use server'` directives.","key":"DIRECTIVE21#USE_SERVER_COMPONENTS#USE_SERVER_FUNCTIONS"},"use client contexts":{"value":"(Special) Client Contexts Components can be nested inside Lineal Server Components to wrap some of the tree with client state accessible through child Client Components, and to pass through Server Components when the root of the application is planted on the server.","key":"DIRECTIVE21#USE_SERVER_COMPONENTS#USE_CLIENT_CONTEXTS"},"use agnostic conditions":{"value":"(Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can render safely on the server just like they can on the client.","key":"DIRECTIVE21#USE_SERVER_COMPONENTS#USE_AGNOSTIC_CONDITIONS"},"kinds":{"value":"Lineal Server Components","key":"DIRECTIVE21#USE_SERVER_COMPONENTS#KINDS"},"kindsComma":{"value":"Lineal Server Components,","key":"DIRECTIVE21#USE_SERVER_COMPONENTS#KINDSCOMMA"},"kindsPeriod":{"value":"Lineal Server Components.","key":"DIRECTIVE21#USE_SERVER_COMPONENTS#KINDSPERIOD"},"kindsSimple":{"value":"Server Components","key":"DIRECTIVE21#USE_SERVER_COMPONENTS#KINDSSIMPLE"},"module":{"value":"Lineal Server Components Module","key":"DIRECTIVE21#USE_SERVER_COMPONENTS#MODULE"},"moduleSimple":{"value":"Server Components Module","key":"DIRECTIVE21#USE_SERVER_COMPONENTS#MODULESIMPLE"},"importingAModule":{"value":"...Importing a Lineal Server Components Module.","key":"DIRECTIVE21#USE_SERVER_COMPONENTS#IMPORTINGAMODULE"},"importingByAFolder":{"value":"...Importing a Lineal Server Components Module by a folder.","key":"DIRECTIVE21#USE_SERVER_COMPONENTS#IMPORTINGBYAFOLDER"},"importingViaStrategy":{"value":"...Importing Lineal Server Components via Special Agnostic Strategy.","key":"DIRECTIVE21#USE_SERVER_COMPONENTS#IMPORTINGVIASTRATEGY"},"importingViaStrategyByAFolder":{"value":"...Importing Lineal Server Components via Special Agnostic Strategy by a folder.","key":"DIRECTIVE21#USE_SERVER_COMPONENTS#IMPORTINGVIASTRATEGYBYAFOLDER"},"directive":{"value":"use server components","key":"DIRECTIVE21#USE_SERVER_COMPONENTS#DIRECTIVE"},"atStrategy":{"value":"@serverComponents","key":"DIRECTIVE21#USE_SERVER_COMPONENTS#ATSTRATEGY"}},"use client components":{"use server logics":{"value":"Prime Server Logics should never leak to the client.","key":"DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_SERVER_LOGICS"},"use client logics":{"value":"Prime Client Logics, being logic from the client, can safely support Lineal Client Components, like any Client Components.","key":"DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_CLIENT_LOGICS"},"use agnostic logics":{"value":"Prime Agnostic Logics can run safely on the client just like they can on the server.","key":"DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_AGNOSTIC_LOGICS"},"use server components":{"value":"Lineal Server Components cannot be the children of Lineal Client Components.","key":"DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_SERVER_COMPONENTS"},"use client components":{"value":"Lineal Client Components can compose with one another.","key":"DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_CLIENT_COMPONENTS"},"use agnostic components":{"value":"Lineal Agnostic Components can render safely on the client just like they can on the server.","key":"DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_AGNOSTIC_COMPONENTS"},"use server functions":{"value":"(Special) Server Functions can be specifically triggered by Client Components.","key":"DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_SERVER_FUNCTIONS"},"use client contexts":{"value":"(Special) Client Contexts Components can effectively become Lineal and only render their children on the client via this mechanism since, by a Client Contexts Component being the child of a Lineal Client Component, the Client Contexts Component's children become the grandchildren of an ancestor Lineal Client Component, enforcing them to render exclusively on the client.","key":"DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_CLIENT_CONTEXTS"},"use agnostic conditions":{"value":"(Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can render safely on the client just like they can on the server.","key":"DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_AGNOSTIC_CONDITIONS"},"kinds":{"value":"Lineal Client Components","key":"DIRECTIVE21#USE_CLIENT_COMPONENTS#KINDS"},"kindsComma":{"value":"Lineal Client Components,","key":"DIRECTIVE21#USE_CLIENT_COMPONENTS#KINDSCOMMA"},"kindsPeriod":{"value":"Lineal Client Components.","key":"DIRECTIVE21#USE_CLIENT_COMPONENTS#KINDSPERIOD"},"kindsSimple":{"value":"Client Components","key":"DIRECTIVE21#USE_CLIENT_COMPONENTS#KINDSSIMPLE"},"module":{"value":"Lineal Client Components Module","key":"DIRECTIVE21#USE_CLIENT_COMPONENTS#MODULE"},"modulePeriod":{"value":"Lineal Client Components Module.","key":"DIRECTIVE21#USE_CLIENT_COMPONENTS#MODULEPERIOD"},"moduleSimple":{"value":"Client Components Module","key":"DIRECTIVE21#USE_CLIENT_COMPONENTS#MODULESIMPLE"},"importingAModule":{"value":"...Importing a Lineal Client Components Module.","key":"DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGAMODULE"},"importingByAFolder":{"value":"...Importing a Lineal Client Components Module by a folder.","key":"DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGBYAFOLDER"},"importingViaStrategy":{"value":"...Importing Lineal Client Components via Special Agnostic Strategy.","key":"DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGVIASTRATEGY"},"importingViaStrategyByAFolder":{"value":"...Importing Lineal Client Components via Special Agnostic Strategy by a folder.","key":"DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGVIASTRATEGYBYAFOLDER"},"directive":{"value":"use client components","key":"DIRECTIVE21#USE_CLIENT_COMPONENTS#DIRECTIVE"},"atStrategy":{"value":"@clientComponents","key":"DIRECTIVE21#USE_CLIENT_COMPONENTS#ATSTRATEGY"}},"use agnostic components":{"use server logics":{"value":"Prime Server Logics cannot run on both the server and the client.","key":"DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_SERVER_LOGICS"},"use client logics":{"value":"Prime Client Logics cannot run on both the server and the client.","key":"DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_LOGICS"},"use agnostic logics":{"value":"Prime Agnostic Logics, being environment-agnostic logic, can safely support any Agnostic Components.","key":"DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_AGNOSTIC_LOGICS"},"use server components":{"value":"Lineal Server Components, unlike Lineal Client Components, cannot make silos of their own once on the opposing environment (the client in this case), and therefore cannot be executed from the client, making them unable to execute agnostically from both the server and the client.","key":"DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_SERVER_COMPONENTS"},"use client components":{"value":"Lineal Client Components can be nested inside Lineal Agnostic Components to create client boundaries when the root of the application is planted on the server.","key":"DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_COMPONENTS"},"use agnostic components":{"value":"Lineal Agnostic Components can compose with one another.","key":"DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_AGNOSTIC_COMPONENTS"},"use server functions":{"value":"(Special) Server Functions can be passed to Client Components as props when Client Components are also legally imported into Agnostic Components Modules.","key":"DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_SERVER_FUNCTIONS"},"use client contexts":{"value":"(Special) Client Contexts Components can be nested inside Lineal Agnostic Components to wrap some of the tree with client state accessible through child Client Components, and to pass through Server Components — if still on the Server Tree — when the root of the application is planted on the server.","key":"DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_CONTEXTS"},"use agnostic conditions":{"value":"(Special) Agnostic Conditions Components can compose with Lineal Agnostic Components as if they were Lineal Agnostic Components themselves, making them a necessary mechanism for Lineal Server Components to be nested in any Agnostic Components.","key":"DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_AGNOSTIC_CONDITIONS"},"kinds":{"value":"Lineal Agnostic Components","key":"DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#KINDS"},"kindsComma":{"value":"Lineal Agnostic Components,","key":"DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#KINDSCOMMA"},"kindsPeriod":{"value":"Lineal Agnostic Components.","key":"DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#KINDSPERIOD"},"kindsSimple":{"value":"Agnostic Components","key":"DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#KINDSSIMPLE"},"module":{"value":"Lineal Agnostic Components Module","key":"DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#MODULE"},"moduleSimple":{"value":"Agnostic Components Module","key":"DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#MODULESIMPLE"},"importingAModule":{"value":"...Importing a Lineal Agnostic Components Module.","key":"DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGAMODULE"},"importingByAFolder":{"value":"...Importing a Lineal Agnostic Components Module by a folder.","key":"DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGBYAFOLDER"},"importingViaStrategy":{"value":"...Importing Lineal Agnostic Components via Special Agnostic Strategy.","key":"DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGVIASTRATEGY"},"importingViaStrategyByAFolder":{"value":"...Importing Lineal Agnostic Components via Special Agnostic Strategy by a folder.","key":"DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGVIASTRATEGYBYAFOLDER"},"directive":{"value":"use agnostic components","key":"DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#DIRECTIVE"},"atStrategy":{"value":"@agnosticComponents","key":"DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#ATSTRATEGY"}},"use server functions":{"use server logics":{"value":"Prime Server Logics, being logic from the server, can safely support (Special) Server Functions.","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_SERVER_LOGICS"},"use client logics":{"value":"Prime Client Logics should never leak to the server.","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_CLIENT_LOGICS"},"use agnostic logics":{"value":"Prime Agnostic Logics can run safely on the server just like they can on the client.","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_LOGICS"},"use server components":{"value":"Lineal Server Components aren't allowed because (Special) Server Functions have no business working with React Components.","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_SERVER_COMPONENTS"},"use client components":{"value":"Lineal Client Components aren't allowed because (Special) Server Functions have no business working with React Components.","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_CLIENT_COMPONENTS"},"use agnostic components":{"value":"Lineal Agnostic Components aren't allowed because (Special) Server Functions have no business working with React Components.","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_COMPONENTS"},"use server functions":{"value":"(Special) Server Functions, even though they don't need to import one another and the same results can be generated via Prime Server Logics for the outcome of a single Server Function, can still compose with one another. (Perhaps a preferrable use case for this has been found or could be found either today or in the future.)","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_SERVER_FUNCTIONS"},"use client contexts":{"value":"(Special) Client Contexts Components aren't allowed because (Special) Server Functions have no business working with React Components.","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_CLIENT_CONTEXTS"},"use agnostic conditions":{"value":"(Special) Agnostic Conditions Components aren't allowed because (Special) Server Functions have no business working with React Components.","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_CONDITIONS"},"kinds":{"value":"Special Server Functions","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#KINDS"},"kindsComma":{"value":"Special Server Functions,","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#KINDSCOMMA"},"kindsPeriod":{"value":"Special Server Functions.","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#KINDSPERIOD"},"kindsSimple":{"value":"Server Functions","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#KINDSSIMPLE"},"module":{"value":"Special Server Functions Module","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#MODULE"},"moduleSimple":{"value":"Server Functions Module","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#MODULESIMPLE"},"specials":{"value":"(Special) Server Functions","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#SPECIALS"},"specialsComma":{"value":"(Special) Server Functions,","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#SPECIALSCOMMA"},"specialsPeriod":{"value":"(Special) Server Functions.","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#SPECIALSPERIOD"},"importingAModule":{"value":"...Importing a Special Server Functions Module.","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#IMPORTINGAMODULE"},"importingByAFolder":{"value":"...Importing a Special Server Functions Module by a folder.","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#IMPORTINGBYAFOLDER"},"importingViaStrategy":{"value":"...Importing (Special) Server Functions via Special Agnostic Strategy.","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#IMPORTINGVIASTRATEGY"},"importingViaStrategyByAFolder":{"value":"...Importing (Special) Server Functions via Special Agnostic Strategy by a folder.","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#IMPORTINGVIASTRATEGYBYAFOLDER"},"directive":{"value":"use server functions","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#DIRECTIVE"},"atStrategy":{"value":"@serverFunctions","key":"DIRECTIVE21#USE_SERVER_FUNCTIONS#ATSTRATEGY"}},"use client contexts":{"use server logics":{"value":"Prime Server Logics should never leak to the client.","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_SERVER_LOGICS"},"use client logics":{"value":"Prime Client Logics, being logic from the client, can safely support (Special) Client Contexts Components, like any Client Components.","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_CLIENT_LOGICS"},"use agnostic logics":{"value":"Prime Agnostic Logics can run safely on the client just like they can on the server.","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_AGNOSTIC_LOGICS"},"use server components":{"value":"Lineal Server Components may only pass through (Special) Client Contexts Components via the children prop within Server Components Modules.","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_SERVER_COMPONENTS"},"use client components":{"value":"Lineal Client Components can create client boundaries within (Special) Client Contexts Components.","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_CLIENT_COMPONENTS"},"use agnostic components":{"value":"Lineal Agnostic Components can render safely on the client just like they can on the server.","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_AGNOSTIC_COMPONENTS"},"use server functions":{"value":"(Special) Server Functions can be specifically triggered by Client Components.","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_SERVER_FUNCTIONS"},"use client contexts":{"value":"(Special) Client Contexts Components can compose with one another.","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_CLIENT_CONTEXTS"},"use agnostic conditions":{"value":"(Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can render safely on the client just like they can on the server, in a mechanism that allows Client Contexts Components to safely and indirectly compose with child Server Components within Client Contexts Modules.","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_AGNOSTIC_CONDITIONS"},"kinds":{"value":"Special Client Contexts","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#KINDS"},"kindsComma":{"value":"Special Client Contexts,","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#KINDSCOMMA"},"kindsPeriod":{"value":"Special Client Contexts.","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#KINDSPERIOD"},"kindsSimple":{"value":"Client Contexts","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#KINDSSIMPLE"},"module":{"value":"Special Client Contexts Module","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#MODULE"},"moduleSimple":{"value":"Client Contexts Module","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#MODULESIMPLE"},"specials":{"value":"(Special) Client Contexts Components","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#SPECIALS"},"specialsComma":{"value":"(Special) Client Contexts Components,","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#SPECIALSCOMMA"},"specialsPeriod":{"value":"(Special) Client Contexts Components.","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#SPECIALSPERIOD"},"importingAModule":{"value":"...Importing a Special Client Contexts Module.","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#IMPORTINGAMODULE"},"importingByAFolder":{"value":"...Importing a Special Client Contexts Module by a folder.","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#IMPORTINGBYAFOLDER"},"importingViaStrategy":{"value":"...Importing (Special) Client Contexts Components via Special Agnostic Strategy.","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#IMPORTINGVIASTRATEGY"},"importingViaStrategyByAFolder":{"value":"...Importing (Special) Client Contexts Components via Special Agnostic Strategy by a folder.","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#IMPORTINGVIASTRATEGYBYAFOLDER"},"directive":{"value":"use client contexts","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#DIRECTIVE"},"atStrategy":{"value":"@clientContexts","key":"DIRECTIVE21#USE_CLIENT_CONTEXTS#ATSTRATEGY"}},"use agnostic conditions":{"use server logics":{"value":"Prime Server Logics cannot run on both the server and the client.","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_SERVER_LOGICS"},"use client logics":{"value":"Prime Client Logics cannot run on both the server and the client.","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_CLIENT_LOGICS"},"use agnostic logics":{"value":"Prime Agnostic Logics, being environment-agnostic logic, can safely support any Agnostic Components, including (Special) Agnostic Conditions Components. (In this case this is necessary for the import of the `conditionAgnosticComponent` function needed to make Agnostic Conditions Components.)","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_AGNOSTIC_LOGICS"},"use server components":{"value":"Lineal Server Components are to be paired as `ComponentForServer` components with `ComponentForClient` components to form (Special) Agnostic Conditions Components.","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_SERVER_COMPONENTS"},"use client components":{"value":"Lineal Client Components are to be paired as `ComponentForClient` components with `ComponentForServer` components to form (Special) Agnostic Conditions Components.","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_CLIENT_COMPONENTS"},"use agnostic components":{"value":"Lineal Agnostic Components can take the place of `ComponentForServer` and/or `ComponentForClient` components to form (Special) Agnostic Conditions Components.","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_AGNOSTIC_COMPONENTS"},"use server functions":{"value":"(Special) Server Functions are not accepted because (Special) Agnostic Conditions Components only take finite, imported components as arguments in their making. As such, assigning props to these components, including Server Functions, is not made within Agnostic Conditions Modules.","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_SERVER_FUNCTIONS"},"use client contexts":{"value":"(Special) Client Contexts Components cannot be used as component arguments for (Special) Agnostic Conditions Components since they only take Lineal Components as arguments in their making.","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_CLIENT_CONTEXTS"},"use agnostic conditions":{"value":"(Special) Agnostic Conditions Components, despite not being Lineal Components themselves, output components that can only be Lineal and compatible with their attributed rendering environments, making them acceptable arguments in the making of Agnostic Conditions Components.","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_AGNOSTIC_CONDITIONS"},"kinds":{"value":"Special Agnostic Conditions","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#KINDS"},"kindsComma":{"value":"Special Agnostic Conditions,","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#KINDSCOMMA"},"kindsPeriod":{"value":"Special Agnostic Conditions.","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#KINDSPERIOD"},"kindsSimple":{"value":"Agnostic Conditions","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#KINDSSIMPLE"},"module":{"value":"Special Agnostic Conditions Module","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#MODULE"},"moduleSimple":{"value":"Agnostic Conditions Module","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#MODULESIMPLE"},"specials":{"value":"(Special) Agnostic Conditions Components","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#SPECIALS"},"specialsComma":{"value":"(Special) Agnostic Conditions Components,","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#SPECIALSCOMMA"},"specialsPeriod":{"value":"(Special) Agnostic Conditions Components.","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#SPECIALSPERIOD"},"importingAModule":{"value":"...Importing a Special Agnostic Conditions Module.","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#IMPORTINGAMODULE"},"importingByAFolder":{"value":"...Importing a Special Agnostic Conditions Module by a folder.","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#IMPORTINGBYAFOLDER"},"importingViaStrategy":{"value":"...Importing (Special) Agnostic Conditions Components via Special Agnostic Strategy.","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#IMPORTINGVIASTRATEGY"},"importingViaStrategyByAFolder":{"value":"...Importing (Special) Agnostic Conditions Components via Special Agnostic Strategy by a folder.","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#IMPORTINGVIASTRATEGYBYAFOLDER"},"directive":{"value":"use agnostic conditions","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#DIRECTIVE"},"atStrategy":{"value":"@agnosticConditions","key":"DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#ATSTRATEGY"}},"use agnostic strategies":{"valid":{"value":"(Special) Agnostic Strategies Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a `'use agnostic strategies'` importFileCommentedDirective.)","key":"DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#VALID"},"kinds":{"value":"Special Agnostic Strategies","key":"DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#KINDS"},"kindsComma":{"value":"Special Agnostic Strategies,","key":"DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#KINDSCOMMA"},"kindsPeriod":{"value":"Special Agnostic Strategies.","key":"DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#KINDSPERIOD"},"kindsSimple":{"value":"Agnostic Strategies","key":"DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#KINDSSIMPLE"},"module":{"value":"Special Agnostic Strategies Module","key":"DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#MODULE"},"moduleSimple":{"value":"Agnostic Strategies Module","key":"DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#MODULESIMPLE"},"specials":{"value":"(Special) Agnostic Strategies","key":"DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#SPECIALS"},"specialsComma":{"value":"(Special) Agnostic Strategies,","key":"DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#SPECIALSCOMMA"},"specialsPeriod":{"value":"(Special) Agnostic Strategies.","key":"DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#SPECIALSPERIOD"},"directive":{"value":"use agnostic strategies","key":"DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#DIRECTIVE"}},"forAliasVariables":{"serverNeverClient":{"value":"Prime Server Logics should never leak to the client.","key":"DIRECTIVE21#FORALIASVARIABLES#SERVERNEVERCLIENT"},"clientNeverServer":{"value":"Prime Client Logics should never leak to the server.","key":"DIRECTIVE21#FORALIASVARIABLES#CLIENTNEVERSERVER"},"agnosticCanServerClient":{"value":"Prime Agnostic Logics can run safely on the server just like they can on the client.","key":"DIRECTIVE21#FORALIASVARIABLES#AGNOSTICCANSERVERCLIENT"},"agnosticCanClientServer":{"value":"Prime Agnostic Logics can run safely on the client just like they can on the server.","key":"DIRECTIVE21#FORALIASVARIABLES#AGNOSTICCANCLIENTSERVER"},"serverFunctionsNoComponents":{"value":"(Special) Server Functions have no business working with React Components.","key":"DIRECTIVE21#FORALIASVARIABLES#SERVERFUNCTIONSNOCOMPONENTS"},"serverLogicsCantBoth":{"value":"Prime Server Logics cannot run on both the server and the client.","key":"DIRECTIVE21#FORALIASVARIABLES#SERVERLOGICSCANTBOTH"},"clientLogicsCantBoth":{"value":"Prime Client Logics cannot run on both the server and the client.","key":"DIRECTIVE21#FORALIASVARIABLES#CLIENTLOGICSCANTBOTH"},"agnosticComponentsCanAny":{"value":"Lineal Agnostic Components can be composed with any Prime Environment Logics agnostically, as long as the Prime Environment Logics Module, by convention, does not export React components.","key":"DIRECTIVE21#FORALIASVARIABLES#AGNOSTICCOMPONENTSCANANY"},"agnosticComponentsRenderAny":{"value":"Lineal Agnostic Components can render safely on the client just like they can on the server.","key":"DIRECTIVE21#FORALIASVARIABLES#AGNOSTICCOMPONENTSRENDERANY"},"serverFunctionsClient":{"value":"(Special) Server Functions can be specifically triggered by Client Components.","key":"DIRECTIVE21#FORALIASVARIABLES#SERVERFUNCTIONSCLIENT"}},"forComposedVariables":{"shouldNeverClient":{"value":"should never leak to the client.","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#SHOULDNEVERCLIENT"},"shouldNeverServer":{"value":"should never leak to the server.","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#SHOULDNEVERSERVER"},"runServerLikeClient":{"value":"can run safely on the server just like they can on the client.","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#RUNSERVERLIKECLIENT"},"runClientLikeServer":{"value":"can run safely on the client just like they can on the server.","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#RUNCLIENTLIKESERVER"},"canComposeOneAnother":{"value":"can compose with one another.","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#CANCOMPOSEONEANOTHER"},"cantTinkeredServer":{"value":"cannot be tinkered with on the server.","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#CANTTINKEREDSERVER"},"cantTinkeredClient":{"value":"cannot be tinkered with on the client.","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#CANTTINKEREDCLIENT"},"cantTinkeredBoth":{"value":"cannot be tinkered with on both the server and the client.","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#CANTTINKEREDBOTH"},"serverComponentsOKLogics":{"value":"Lineal Server Components are OK to be composed with Prime Server Logics as long as the Prime Server Logics Module,","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#SERVERCOMPONENTSOKLOGICS"},"likeAnyClientComponentsComma":{"value":"like any Client Components,","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#LIKEANYCLIENTCOMPONENTSCOMMA"},"likeAnyClientComponentsPeriod":{"value":"like any Client Components.","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#LIKEANYCLIENTCOMPONENTSPERIOD"},"anyAgnosticComponentsPeriod":{"value":"any Agnostic Components.","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#ANYAGNOSTICCOMPONENTSPERIOD"},"okClientLogics":{"value":"are OK to be composed with Prime Client Logics as long as the Prime Client Logics Module,","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#OKCLIENTLOGICS"},"agnosticComponentsCanAny":{"value":"Lineal Agnostic Components can be composed with any Prime Environment Logics agnostically, as long as the Prime Environment Logics Module,","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#AGNOSTICCOMPONENTSCANANY"},"asIfLinealAgnostic":{"value":"as if they were Lineal Agnostic Components themselves,","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#ASIFLINEALAGNOSTIC"},"canAnyPrimeLogics":{"value":"can be composed with any Prime Environment Logics agnostically, as long as the Prime Environment Logics Module,","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#CANANYPRIMELOGICS"},"noExportComponents":{"value":"by convention, does not export React components.","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#NOEXPORTCOMPONENTS"},"cantServerClient":{"value":"cannot run on both the server and the client.","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#CANTSERVERCLIENT"},"arentAllowed":{"value":"aren't allowed because","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#ARENTALLOWED"},"allowedBecause":{"value":"allowed, because","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#ALLOWEDBECAUSE"},"beingLogicServer":{"value":"being logic from the server,","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#BEINGLOGICSERVER"},"beingLogicClient":{"value":"being logic from the client,","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#BEINGLOGICCLIENT"},"beingLogicAgnostic":{"value":"being environment-agnostic logic,","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#BEINGLOGICAGNOSTIC"},"canSafelySupport":{"value":"can safely support","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#CANSAFELYSUPPORT"},"canBeNestedInside":{"value":"can be nested inside","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#CANBENESTEDINSIDE"},"toCreateBoundaries":{"value":"to create client boundaries","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#TOCREATEBOUNDARIES"},"towrapTree":{"value":"to wrap some of the tree with client state accessible through child Client Components, and to pass through Server Components","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#TOWRAPTREE"},"ifStillOnServerTree":{"value":"— if still on the Server Tree —","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#IFSTILLONSERVERTREE"},"whenRootOnServer":{"value":"when the root of the application is planted on the server.","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#WHENROOTONSERVER"},"canClientComponents":{"value":"can be specifically triggered by Client Components.","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#CANCLIENTCOMPONENTS"},"renderServerLikeClient":{"value":"can render safely on the server just like they can on the client.","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#RENDERSERVERLIKECLIENT"},"renderClientLikeServer":{"value":"can render safely on the client just like they can on the server.","key":"DIRECTIVE21#FORCOMPOSEDVARIABLES#RENDERCLIENTLIKESERVER"}}}}} ResolvedConfigData */

/** @type {ResolvedConfigData} */
export const resolvedConfigData = {
  "jsDoc": {
    "definitions": {
      "makeTestFiles": {
        "value": "Makes the paths of the files to be linted for agnostic20 and directive21.",
        "key": "JSDOC#DEFINITIONS#MAKETESTFILES"
      },
      "highlightFirstLineOfCode": {
        "value": "Gets the coordinates for the first line of code of a file.",
        "key": "JSDOC#DEFINITIONS#HIGHLIGHTFIRSTLINEOFCODE"
      },
      "isImportBlocked": {
        "value": "Returns a boolean deciding if an imported file's \"resolved\" directive is incompatible with the current file's \"resolved\" directive.",
        "key": "JSDOC#DEFINITIONS#ISIMPORTBLOCKED"
      },
      "makeIntroForSpecificViolationMessage": {
        "value": "Makes the intro for each specific import rule violation messages.",
        "key": "JSDOC#DEFINITIONS#MAKEINTROFORSPECIFICVIOLATIONMESSAGE"
      },
      "makeMessageFromCurrentFileResolvedDirective": {
        "value": "Lists in an message the \"resolved\" modules incompatible with a \"resolved\" module based on its \"resolved\" directive.",
        "key": "JSDOC#DEFINITIONS#MAKEMESSAGEFROMCURRENTFILERESOLVEDDIRECTIVE"
      },
      "findSpecificViolationMessage": {
        "value": "Finds the `message` for the specific violation of \"resolved\" directives import rules based on `resolvedDirectives_blockedImports`.",
        "key": "JSDOC#DEFINITIONS#FINDSPECIFICVIOLATIONMESSAGE"
      },
      "agnostic20": {
        "makeAgnostic20Config": {
          "value": "Makes the agnostic20 config for the use-agnostic ESLint plugin.",
          "key": "JSDOC#DEFINITIONS#AGNOSTIC20#MAKEAGNOSTIC20CONFIG"
        },
        "makeBlockedImport": {
          "value": "Makes a blockedImport object for the identified blocked import at hand.",
          "key": "JSDOC#DEFINITIONS#AGNOSTIC20#MAKEBLOCKEDIMPORT"
        },
        "makeBlockedImportSuggestingUseAgnostic": {
          "value": "Makes a blockedImport object for the identified blocked import at hand enhanced with the suggestion to use the `'use agnostic'` directive.",
          "key": "JSDOC#DEFINITIONS#AGNOSTIC20#MAKEBLOCKEDIMPORTSUGGESTINGUSEAGNOSTIC"
        },
        "getDirectiveFromModule": {
          "value": "Gets the directive of a module from its Abstract Syntax Tree.",
          "key": "JSDOC#DEFINITIONS#AGNOSTIC20#GETDIRECTIVEFROMMODULE"
        },
        "getDirectiveFromCurrentModule": {
          "value": "Gets the directive of the current module.",
          "key": "JSDOC#DEFINITIONS#AGNOSTIC20#GETDIRECTIVEFROMCURRENTMODULE"
        },
        "getDirectiveFromImportedModule": {
          "value": "Gets the directive of the imported module.",
          "key": "JSDOC#DEFINITIONS#AGNOSTIC20#GETDIRECTIVEFROMIMPORTEDMODULE"
        },
        "getEffectiveDirective": {
          "value": "Gets the effective directive of a module, based on the combination of its directive (or lack thereof) and its extension (depending on whether it ends with 'x' for JSX).",
          "key": "JSDOC#DEFINITIONS#AGNOSTIC20#GETEFFECTIVEDIRECTIVE"
        },
        "isImportBlocked": {
          "value": "Returns a boolean deciding if an imported file's effective directive is incompatible with the current file's effective directive.",
          "key": "JSDOC#DEFINITIONS#AGNOSTIC20#ISIMPORTBLOCKED"
        },
        "makeMessageFromCurrentFileEffectiveDirective": {
          "value": "Lists in an message the effective modules incompatible with a effective module based on its effective directive.",
          "key": "JSDOC#DEFINITIONS#AGNOSTIC20#MAKEMESSAGEFROMCURRENTFILEEFFECTIVEDIRECTIVE"
        },
        "findSpecificViolationMessage": {
          "value": "Finds the `message` for the specific violation of effective directives import rules based on `effectiveDirectives_BlockedImports`.",
          "key": "JSDOC#DEFINITIONS#AGNOSTIC20#FINDSPECIFICVIOLATIONMESSAGE"
        },
        "currentFileFlow": {
          "value": "The flow that begins the import rules enforcement rule, retrieving the effective directive of the current file before comparing it to upcoming effective directives of the files it imports.",
          "key": "JSDOC#DEFINITIONS#AGNOSTIC20#CURRENTFILEFLOW"
        },
        "importedFileFlow": {
          "value": "The flow that is shared between import and re-export traversals to obtain the import file's effective directive.",
          "key": "JSDOC#DEFINITIONS#AGNOSTIC20#IMPORTEDFILEFLOW"
        },
        "importsFlow": {
          "value": "The full flow for import traversals to enforce effective directives import rules.",
          "key": "JSDOC#DEFINITIONS#AGNOSTIC20#IMPORTSFLOW"
        },
        "reExportsFlow": {
          "value": "The full flow for export traversals, shared between `ExportNamedDeclaration` and `ExportAllDeclaration`, to ensure same effective directive re-exports.",
          "key": "JSDOC#DEFINITIONS#AGNOSTIC20#REEXPORTSFLOW"
        }
      },
      "directive21": {
        "makeDirective21Config": {
          "value": "Makes the directive21 config for the use-agnostic ESLint plugin.",
          "key": "JSDOC#DEFINITIONS#DIRECTIVE21#MAKEDIRECTIVE21CONFIG"
        },
        "makeBlockedImport": {
          "value": "Makes a blockedImport object for the identified blocked import at hand.",
          "key": "JSDOC#DEFINITIONS#DIRECTIVE21#MAKEBLOCKEDIMPORT"
        },
        "detectQuoteType": {
          "value": "Detects whether a string is single- or double-quoted.",
          "key": "JSDOC#DEFINITIONS#DIRECTIVE21#DETECTQUOTETYPE"
        },
        "stripSingleQuotes": {
          "value": "Removes single quotes from a string known to be single-quoted.",
          "key": "JSDOC#DEFINITIONS#DIRECTIVE21#STRIPSINGLEQUOTES"
        },
        "stripDoubleQuotes": {
          "value": "Removes double quotes from a string known to be double-quoted.",
          "key": "JSDOC#DEFINITIONS#DIRECTIVE21#STRIPDOUBLEQUOTES"
        },
        "getCommentedDirectiveFromSourceCode1": {
          "value": "Gets the commented directive of a module from its ESLint `SourceCode` object.",
          "key": "JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE1"
        },
        "getCommentedDirectiveFromSourceCode2": {
          "value": "Accepted directives for the default Directive-First Architecture are (single or double quotes included):",
          "key": "JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE2"
        },
        "getCommentedDirectiveFromCurrentModule1": {
          "value": "Gets the commented directive of the current module.",
          "key": "JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMCURRENTMODULE1"
        },
        "getCommentedDirectiveFromCurrentModule2": {
          "value": "Accepted directives for the default Directive-First Architecture are (single or double quotes included):",
          "key": "JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMCURRENTMODULE2"
        },
        "getCommentedDirectiveFromImportedModule1": {
          "value": "Gets the commented directive of the imported module.",
          "key": "JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMIMPORTEDMODULE1"
        },
        "getCommentedDirectiveFromImportedModule2": {
          "value": "Accepted directives for the default Directive-First Architecture are (single or double quotes included):",
          "key": "JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMIMPORTEDMODULE2"
        },
        "getVerifiedCommentedDirective": {
          "value": "Ensures that a module's commented directive is consistent with its file extension (depending on whether it ends with 'x' for JSX).",
          "key": "JSDOC#DEFINITIONS#DIRECTIVE21#GETVERIFIEDCOMMENTEDDIRECTIVE"
        },
        "getStrategizedDirective": {
          "value": "Gets the interpreted directive from a specified commented Strategy (such as `@serverLogics`) nested inside the import (or export) declaration for an import (or export) from an Agnostic Strategies Module.",
          "key": "JSDOC#DEFINITIONS#DIRECTIVE21#GETSTRATEGIZEDDIRECTIVE"
        },
        "addressDirectiveIfAgnosticStrategies": {
          "value": "Verifies the current node's export strategy if the current commented directive is `\"use agnostic strategies\"` by reporting `exportNotStrategized` in case an export is not strategized in an Agnostic Strategies Module.",
          "key": "JSDOC#DEFINITIONS#DIRECTIVE21#ADDRESSDIRECTIVEIFAGNOSTICSTRATEGIES"
        },
        "isImportBlocked": {
          "value": "Returns a boolean deciding if an imported file's commented directive is incompatible with the current file's commented directive.",
          "key": "JSDOC#DEFINITIONS#DIRECTIVE21#ISIMPORTBLOCKED"
        },
        "makeMessageFromCurrentFileCommentedDirective": {
          "value": "Lists in an message the commented modules incompatible with a commented module based on its commented directive.",
          "key": "JSDOC#DEFINITIONS#DIRECTIVE21#MAKEMESSAGEFROMCURRENTFILECOMMENTEDDIRECTIVE"
        },
        "findSpecificViolationMessage": {
          "value": "Finds the `message` for the specific violation of commented directives import rules based on `commentedDirectives_BlockedImports`.",
          "key": "JSDOC#DEFINITIONS#DIRECTIVE21#FINDSPECIFICVIOLATIONMESSAGE"
        },
        "currentFileFlow": {
          "value": "The flow that begins the import rules enforcement rule, retrieving the verified commented directive of the current file before comparing it to upcoming verified commented directives of the files it imports.",
          "key": "JSDOC#DEFINITIONS#DIRECTIVE21#CURRENTFILEFLOW"
        },
        "importedFileFlow": {
          "value": "The flow that is shared between import and re-export traversals to obtain the import file's commented directive.",
          "key": "JSDOC#DEFINITIONS#DIRECTIVE21#IMPORTEDFILEFLOW"
        },
        "importsFlow": {
          "value": "The full flow for import traversals to enforce effective directives import rules.",
          "key": "JSDOC#DEFINITIONS#DIRECTIVE21#IMPORTSFLOW"
        },
        "allExportsFlow": {
          "value": "The full flow for export traversals, shared between `ExportNamedDeclaration`, `ExportAllDeclaration`, and `ExportDefaultDeclaration`, to ensure same commented directive re-exports in modules that aren't Agnostic Strategies Modules, and enforce strategized exports specifically in Agnostic Strategies modules.",
          "key": "JSDOC#DEFINITIONS#DIRECTIVE21#ALLEXPORTSFLOW"
        }
      },
      "tests": {
        "readFilesRecursively": {
          "value": "Reads file paths at any depths within a provided directory.",
          "key": "JSDOC#DEFINITIONS#TESTS#READFILESRECURSIVELY"
        },
        "readValidFilesRecursively": {
          "value": "Reads file paths at any depths within a provided valid files directory.",
          "key": "JSDOC#DEFINITIONS#TESTS#READVALIDFILESRECURSIVELY"
        },
        "readInvalidFilesRecursively": {
          "value": "Reads file paths at any depths within a provided invalid files directory.",
          "key": "JSDOC#DEFINITIONS#TESTS#READINVALIDFILESRECURSIVELY"
        },
        "readInvalidFilesRecursively20": {
          "value": "Reads file paths at any depths within a provided invalid files for agnostic20.",
          "key": "JSDOC#DEFINITIONS#TESTS#READINVALIDFILESRECURSIVELY20"
        },
        "readInvalidFilesRecursively21": {
          "value": "Reads file paths at any depths within a provided invalid files for directive21.",
          "key": "JSDOC#DEFINITIONS#TESTS#READINVALIDFILESRECURSIVELY21"
        }
      }
    },
    "params": {
      "validPath": {
        "value": "The directory for the valid paths.",
        "key": "JSDOC#PARAMS#VALIDPATH"
      },
      "invalidPath": {
        "value": "The directory for the invalid paths.",
        "key": "JSDOC#PARAMS#INVALIDPATH"
      },
      "contextA": {
        "value": "An ESLint rule's `context` object.",
        "key": "JSDOC#PARAMS#CONTEXTA"
      },
      "contextB": {
        "value": "The ESLint rule's `context` object.",
        "key": "JSDOC#PARAMS#CONTEXTB"
      },
      "resolvedDirectives_blockedImports": {
        "value": "The blocked imports object, either for agnostic20 or for directive21.",
        "key": "JSDOC#PARAMS#RESOLVEDDIRECTIVES_BLOCKEDIMPORTS"
      },
      "currentFileResolvedDirectiveA": {
        "value": "The current file's \"resolved\" directive.",
        "key": "JSDOC#PARAMS#CURRENTFILERESOLVEDDIRECTIVEA"
      },
      "importedFileResolvedDirective": {
        "value": "The imported file's \"resolved\" directive.",
        "key": "JSDOC#PARAMS#IMPORTEDFILERESOLVEDDIRECTIVE"
      },
      "currentFileResolvedDirectiveB": {
        "value": "The \"resolved\" directive of the \"resolved\" module.",
        "key": "JSDOC#PARAMS#CURRENTFILERESOLVEDDIRECTIVEB"
      },
      "plugin": {
        "value": "The use-agnostic ESLint plugin itself.",
        "key": "JSDOC#PARAMS#PLUGIN"
      },
      "resolvedPath": {
        "value": "The resolved path of the imported module.",
        "key": "JSDOC#PARAMS#RESOLVEDPATH"
      },
      "extension": {
        "value": "The JavaScript (TypeScript) extension of the file.",
        "key": "JSDOC#PARAMS#EXTENSION"
      },
      "node": {
        "value": "The ESLint `node` of the rule's current traversal.",
        "key": "JSDOC#PARAMS#NODE"
      },
      "agnostic20": {
        "currentFileEffectiveDirective": {
          "value": "The current file's effective directive.",
          "key": "JSDOC#PARAMS#AGNOSTIC20#CURRENTFILEEFFECTIVEDIRECTIVE"
        },
        "importedFileEffectiveDirective": {
          "value": "The imported file's effective directive.",
          "key": "JSDOC#PARAMS#AGNOSTIC20#IMPORTEDFILEEFFECTIVEDIRECTIVE"
        },
        "ast": {
          "value": "The module's AST (Abstract Syntax Tree).",
          "key": "JSDOC#PARAMS#AGNOSTIC20#AST"
        },
        "directive": {
          "value": "The directive as written on top of the file (`\"no directive\"` if no valid directive).",
          "key": "JSDOC#PARAMS#AGNOSTIC20#DIRECTIVE"
        },
        "effectiveDirective": {
          "value": "The effective directive of the effective module.",
          "key": "JSDOC#PARAMS#AGNOSTIC20#EFFECTIVEDIRECTIVE"
        }
      },
      "directive21": {
        "currentFileCommentedDirective": {
          "value": "The current file's commented directive.",
          "key": "JSDOC#PARAMS#DIRECTIVE21#CURRENTFILECOMMENTEDDIRECTIVE"
        },
        "importedFileCommentedDirective": {
          "value": "The imported file's commented directive.",
          "key": "JSDOC#PARAMS#DIRECTIVE21#IMPORTEDFILECOMMENTEDDIRECTIVE"
        },
        "string": {
          "value": "The original string.",
          "key": "JSDOC#PARAMS#DIRECTIVE21#STRING"
        },
        "sourceCode": {
          "value": "The ESLint SourceCode object.",
          "key": "JSDOC#PARAMS#DIRECTIVE21#SOURCECODE"
        },
        "directive": {
          "value": "The commented directive as written on top of the file (cannot be `null` at that stage).",
          "key": "JSDOC#PARAMS#DIRECTIVE21#DIRECTIVE"
        },
        "commentedDirective": {
          "value": "The commented directive of the commented module.",
          "key": "JSDOC#PARAMS#DIRECTIVE21#COMMENTEDDIRECTIVE"
        }
      },
      "tests": {
        "folderPath": {
          "value": "The provided directory.",
          "key": "JSDOC#PARAMS#TESTS#FOLDERPATH"
        },
        "allFiles": {
          "value": "The accumulator array of file paths. Defaults to an empty array on the initial call, and is passed through each recursive call to be mutated and collect results.",
          "key": "JSDOC#PARAMS#TESTS#ALLFILES"
        },
        "javaScriptErrorsLength": {
          "value": "The number of errors expected on JavaScript files.",
          "key": "JSDOC#PARAMS#TESTS#JAVASCRIPTERRORSLENGTH"
        },
        "typeScriptErrorsLength": {
          "value": "The number of errors expected on TypeScript files.",
          "key": "JSDOC#PARAMS#TESTS#TYPESCRIPTERRORSLENGTH"
        },
        "messageId": {
          "value": "The messageId of the errors expected.",
          "key": "JSDOC#PARAMS#TESTS#MESSAGEID"
        }
      }
    },
    "details": {
      "agnostic20": {
        "nullDirective": {
          "value": "`null` denotes a server-by-default module, ideally a Server Module.",
          "key": "JSDOC#DETAILS#AGNOSTIC20#NULLDIRECTIVE"
        },
        "useServer": {
          "value": "`'use server'` denotes a Server Functions Module.",
          "key": "JSDOC#DETAILS#AGNOSTIC20#USESERVER"
        },
        "useClient": {
          "value": "`'use client'` denotes a Client Module.",
          "key": "JSDOC#DETAILS#AGNOSTIC20#USECLIENT"
        },
        "useAgnostic": {
          "value": "`'use agnostic'` denotes an Agnostic Module (formerly Shared Module).",
          "key": "JSDOC#DETAILS#AGNOSTIC20#USEAGNOSTIC"
        },
        "useServerLogics": {
          "value": "`'use server logics'` denotes a Server Logics Module.",
          "key": "JSDOC#DETAILS#AGNOSTIC20#USESERVERLOGICS"
        },
        "useServerComponents": {
          "value": "`'use server components'` denotes a Server Components Module.",
          "key": "JSDOC#DETAILS#AGNOSTIC20#USESERVERCOMPONENTS"
        },
        "useServerFunctions": {
          "value": "`'use server functions'` denotes a Server Functions Module.",
          "key": "JSDOC#DETAILS#AGNOSTIC20#USESERVERFUNCTIONS"
        },
        "useClientLogics": {
          "value": "`'use client logics'` denotes a Client Logics Module.",
          "key": "JSDOC#DETAILS#AGNOSTIC20#USECLIENTLOGICS"
        },
        "useClientComponents": {
          "value": "`'use client components'` denotes a Client Components Module.",
          "key": "JSDOC#DETAILS#AGNOSTIC20#USECLIENTCOMPONENTS"
        },
        "useAgnosticLogics": {
          "value": "`'use agnostic logics'` denotes an Agnostic Logics Module.",
          "key": "JSDOC#DETAILS#AGNOSTIC20#USEAGNOSTICLOGICS"
        },
        "useAgnosticComponents": {
          "value": "`'use agnostic components'` denotes an Agnostic Components Module.",
          "key": "JSDOC#DETAILS#AGNOSTIC20#USEAGNOSTICCOMPONENTS"
        }
      },
      "directive21": {
        "useServerLogicsA": {
          "value": "`'use server logics'`, `\"use server logics\"` denoting a Server Logics Module.",
          "key": "JSDOC#DETAILS#DIRECTIVE21#USESERVERLOGICSA"
        },
        "useClientLogicsA": {
          "value": "`'use client logics'`, `\"use client logics\"` denoting a Client Logics Module.",
          "key": "JSDOC#DETAILS#DIRECTIVE21#USECLIENTLOGICSA"
        },
        "useAgnosticLogicsA": {
          "value": "`'use agnostic logics'`, `\"use agnostic logics\"` denoting an Agnostic Logics Module.",
          "key": "JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICLOGICSA"
        },
        "useServerComponentsA": {
          "value": "`'use server components'`, `\"use server components\"` denoting a Server Components Module.",
          "key": "JSDOC#DETAILS#DIRECTIVE21#USESERVERCOMPONENTSA"
        },
        "useClientComponentsA": {
          "value": "`'use client components'`, `\"use client components\"` denoting a Client Components Module.",
          "key": "JSDOC#DETAILS#DIRECTIVE21#USECLIENTCOMPONENTSA"
        },
        "useAgnosticComponentsA": {
          "value": "`'use agnostic components'`, `\"use agnostic components\"` denoting an Agnostic Components Module.",
          "key": "JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCOMPONENTSA"
        },
        "useServerFunctionsA": {
          "value": "`'use server functions'`, `\"use server functions\"` denoting a Server Functions Module.",
          "key": "JSDOC#DETAILS#DIRECTIVE21#USESERVERFUNCTIONSA"
        },
        "useClientContextsA": {
          "value": "`'use client contexts'`, `\"use client contexts\"` denoting a Client Contexts Module.",
          "key": "JSDOC#DETAILS#DIRECTIVE21#USECLIENTCONTEXTSA"
        },
        "useAgnosticConditionsA": {
          "value": "`'use agnostic conditions'`, `\"use agnostic conditions\"` denoting an Agnostic Conditions Module.",
          "key": "JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCONDITIONSA"
        },
        "useAgnosticStrategiesA": {
          "value": "`'use agnostic strategies'`, `\"use agnostic strategies\"` denoting an Agnostic Strategies Module.",
          "key": "JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICSTRATEGIESA"
        },
        "useServerLogicsB": {
          "value": "`'use server logics'`: Server Logics Modules do NOT export JSX.",
          "key": "JSDOC#DETAILS#DIRECTIVE21#USESERVERLOGICSB"
        },
        "useClientLogicsB": {
          "value": "`'use client logics'`: Client Logics Modules do NOT export JSX.",
          "key": "JSDOC#DETAILS#DIRECTIVE21#USECLIENTLOGICSB"
        },
        "useAgnosticLogicsB": {
          "value": "`'use agnostic logics'`: Agnostic Logics Modules do NOT export JSX.",
          "key": "JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICLOGICSB"
        },
        "useServerComponentsB": {
          "value": "`'use server components'`: Server Components Modules ONLY export JSX.",
          "key": "JSDOC#DETAILS#DIRECTIVE21#USESERVERCOMPONENTSB"
        },
        "useClientComponentsB": {
          "value": "`'use client components'`: Client Components Modules ONLY export JSX.",
          "key": "JSDOC#DETAILS#DIRECTIVE21#USECLIENTCOMPONENTSB"
        },
        "useAgnosticComponentsB": {
          "value": "`'use agnostic components'`: Agnostic Components Modules ONLY export JSX.",
          "key": "JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCOMPONENTSB"
        },
        "useServerFunctionsB": {
          "value": "`'use server functions'`: Server Functions Modules do NOT export JSX.",
          "key": "JSDOC#DETAILS#DIRECTIVE21#USESERVERFUNCTIONSB"
        },
        "useClientContextsB": {
          "value": "`'use client contexts'`: Client Contexts Modules ONLY export JSX.",
          "key": "JSDOC#DETAILS#DIRECTIVE21#USECLIENTCONTEXTSB"
        },
        "useAgnosticConditionsB": {
          "value": "`'use agnostic conditions'`: Agnostic Conditions Modules ONLY export JSX.",
          "key": "JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCONDITIONSB"
        },
        "useAgnosticStrategiesB": {
          "value": "`'use agnostic strategies'`: Agnostic Strategies Modules may export JSX.",
          "key": "JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICSTRATEGIESB"
        }
      }
    },
    "returns": {
      "makeTestFiles": {
        "value": "The paths of the files to be linted for agnostic20 and directive21.",
        "key": "JSDOC#RETURNS#MAKETESTFILES"
      },
      "highlightFirstLineOfCode": {
        "value": "The `context.report` `loc`-compatible coordinates for the first line of code of a file.",
        "key": "JSDOC#RETURNS#HIGHLIGHTFIRSTLINEOFCODE"
      },
      "isImportBlocked": {
        "value": "`true` if the import is blocked, as established in respective `resolvedDirectives_blockedImports`.",
        "key": "JSDOC#RETURNS#ISIMPORTBLOCKED"
      },
      "makeIntroForSpecificViolationMessage": {
        "value": "\"[Current file 'resolved' modules] are not allowed to import [imported file 'resolved' modules].\"",
        "key": "JSDOC#RETURNS#MAKEINTROFORSPECIFICVIOLATIONMESSAGE"
      },
      "makeMessageFromCurrentFileResolvedDirective": {
        "value": "The message listing the incompatible \"resolved\" modules.",
        "key": "JSDOC#RETURNS#MAKEMESSAGEFROMCURRENTFILERESOLVEDDIRECTIVE"
      },
      "findSpecificViolationMessage": {
        "value": "The corresponding `message`.",
        "key": "JSDOC#RETURNS#FINDSPECIFICVIOLATIONMESSAGE"
      },
      "agnostic20": {
        "makeAgnostic20Config": {
          "value": "The agnostic20 config's name as a key and its config as its value.",
          "key": "JSDOC#RETURNS#AGNOSTIC20#MAKEAGNOSTIC20CONFIG"
        },
        "makeBlockedImport": {
          "value": "The blockedImport object for the identified blocked import at hand.",
          "key": "JSDOC#RETURNS#AGNOSTIC20#MAKEBLOCKEDIMPORT"
        },
        "makeBlockedImportSuggestingUseAgnostic": {
          "value": "The enhanced blockedImport object with the suggestion to use the `'use agnostic'` directive.",
          "key": "JSDOC#RETURNS#AGNOSTIC20#MAKEBLOCKEDIMPORTSUGGESTINGUSEAGNOSTIC"
        },
        "getDirectiveFromModule": {
          "value": "The directive, or lack thereof via `null`. The lack of a directive is considered server-by-default.",
          "key": "JSDOC#RETURNS#AGNOSTIC20#GETDIRECTIVEFROMMODULE"
        },
        "getDirectiveFromCurrentModule": {
          "value": "The directive, or lack thereof via `null`. The lack of a directive is considered server-by-default.",
          "key": "JSDOC#RETURNS#AGNOSTIC20#GETDIRECTIVEFROMCURRENTMODULE"
        },
        "getDirectiveFromImportedModule": {
          "value": "The directive, or lack thereof via `null`. The lack of a directive is considered server-by-default.",
          "key": "JSDOC#RETURNS#AGNOSTIC20#GETDIRECTIVEFROMIMPORTEDMODULE"
        },
        "getEffectiveDirective": {
          "value": "The effective directive, from which imports rules are applied.",
          "key": "JSDOC#RETURNS#AGNOSTIC20#GETEFFECTIVEDIRECTIVE"
        },
        "isImportBlocked": {
          "value": "`true` if the import is blocked, as established in `effectiveDirectives_BlockedImports`.",
          "key": "JSDOC#RETURNS#AGNOSTIC20#ISIMPORTBLOCKED"
        },
        "makeMessageFromCurrentFileEffectiveDirective": {
          "value": "The message listing the incompatible effective modules.",
          "key": "JSDOC#RETURNS#AGNOSTIC20#MAKEMESSAGEFROMCURRENTFILEEFFECTIVEDIRECTIVE"
        },
        "findSpecificViolationMessage": {
          "value": "The corresponding `message`.",
          "key": "JSDOC#RETURNS#AGNOSTIC20#FINDSPECIFICVIOLATIONMESSAGE"
        },
        "currentFileFlow": {
          "value": "Either an object with `skip: true` to disregard or one with the non-null `currentFileEffectiveDirective`.",
          "key": "JSDOC#RETURNS#AGNOSTIC20#CURRENTFILEFLOW"
        },
        "importedFileFlow": {
          "value": "Either an object with `skip: true` to disregard or one with the non-null `importedFileEffectiveDirective`.",
          "key": "JSDOC#RETURNS#AGNOSTIC20#IMPORTEDFILEFLOW"
        },
        "importsFlow": {
          "value": "Early if the flow needs to be interrupted.",
          "key": "JSDOC#RETURNS#AGNOSTIC20#IMPORTSFLOW"
        },
        "reExportsFlow": {
          "value": "Early if the flow needs to be interrupted.",
          "key": "JSDOC#RETURNS#AGNOSTIC20#REEXPORTSFLOW"
        }
      },
      "directive21": {
        "makeDirective21Config": {
          "value": "The directive21 config's name as a key and its config as its value.",
          "key": "JSDOC#RETURNS#DIRECTIVE21#MAKEDIRECTIVE21CONFIG"
        },
        "makeBlockedImport": {
          "value": "The blockedImport object for the identified blocked import at hand.",
          "key": "JSDOC#RETURNS#DIRECTIVE21#MAKEBLOCKEDIMPORT"
        },
        "detectQuoteType": {
          "value": "`true` if single-quoted, `false` if double-quoted, `null` if neither.",
          "key": "JSDOC#RETURNS#DIRECTIVE21#DETECTQUOTETYPE"
        },
        "stripSingleQuotes": {
          "value": "The string with quotes removed.",
          "key": "JSDOC#RETURNS#DIRECTIVE21#STRIPSINGLEQUOTES"
        },
        "stripDoubleQuotes": {
          "value": "The string with quotes removed.",
          "key": "JSDOC#RETURNS#DIRECTIVE21#STRIPDOUBLEQUOTES"
        },
        "getCommentedDirectiveFromSourceCode": {
          "value": "The commented directive, or lack thereof via `null`. Given the strictness of this architecture, the lack of a directive is considered a mistake. (Though rules may provide the opportunity to declare a default, and configs with preset defaults may become provided.)",
          "key": "JSDOC#RETURNS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE"
        },
        "getCommentedDirectiveFromCurrentModule": {
          "value": "The commented directive, or lack thereof via `null`. Given the strictness of this architecture, the lack of a directive is considered a mistake. (Though rules may provide the opportunity to declare a default, and configs with preset defaults may become provided.)",
          "key": "JSDOC#RETURNS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMCURRENTMODULE"
        },
        "getCommentedDirectiveFromImportedModule": {
          "value": "The commented directive, or lack thereof via `null`. Given the strictness of this architecture, the lack of a directive is considered a mistake. (Though rules may provide the opportunity to declare a default, and configs with preset defaults may become provided.)",
          "key": "JSDOC#RETURNS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMIMPORTEDMODULE"
        },
        "getVerifiedCommentedDirective": {
          "value": "The verified commented directive, from which imports rules are applied. Returns `null` if the verification failed, upon which an error will be reported depending on the commented directive, since the error logic here is strictly binary.",
          "key": "JSDOC#RETURNS#DIRECTIVE21#GETVERIFIEDCOMMENTEDDIRECTIVE"
        },
        "getStrategizedDirective": {
          "value": "The interpreted directive, a.k.a. strategized directive, or lack thereof via `null`.",
          "key": "JSDOC#RETURNS#DIRECTIVE21#GETSTRATEGIZEDDIRECTIVE"
        },
        "addressDirectiveIfAgnosticStrategies": {
          "value": "The commented directive, the addressed strategy (as a commented directive) or `null` in case of failure.",
          "key": "JSDOC#RETURNS#DIRECTIVE21#ADDRESSDIRECTIVEIFAGNOSTICSTRATEGIES"
        },
        "isImportBlocked": {
          "value": "`true` if the import is blocked, as established in `commentedDirectives_BlockedImports`.",
          "key": "JSDOC#RETURNS#DIRECTIVE21#ISIMPORTBLOCKED"
        },
        "makeMessageFromCurrentFileCommentedDirective": {
          "value": "The message listing the incompatible commented modules.",
          "key": "JSDOC#RETURNS#DIRECTIVE21#MAKEMESSAGEFROMCURRENTFILECOMMENTEDDIRECTIVE"
        },
        "findSpecificViolationMessage": {
          "value": "The corresponding `message`.",
          "key": "JSDOC#RETURNS#DIRECTIVE21#FINDSPECIFICVIOLATIONMESSAGE"
        },
        "currentFileFlow": {
          "value": "Either an object with `skip: true` to disregard or one with the non-null `verifiedCommentedDirective`.",
          "key": "JSDOC#RETURNS#DIRECTIVE21#CURRENTFILEFLOW"
        },
        "importedFileFlow": {
          "value": "Either an object with `skip: true` to disregard or one with the non-null `importedFileCommentedDirective`.",
          "key": "JSDOC#RETURNS#DIRECTIVE21#IMPORTEDFILEFLOW"
        },
        "importsFlow": {
          "value": "Early if the flow needs to be interrupted.",
          "key": "JSDOC#RETURNS#DIRECTIVE21#IMPORTSFLOW"
        },
        "allExportsFlow": {
          "value": "Early if the flow needs to be interrupted.",
          "key": "JSDOC#RETURNS#DIRECTIVE21#ALLEXPORTSFLOW"
        }
      },
      "tests": {
        "readFilesRecursively": {
          "value": "All files at any depths within the provided directory.",
          "key": "JSDOC#RETURNS#TESTS#READFILESRECURSIVELY"
        },
        "readValidFilesRecursively": {
          "value": "The RuleTester's array of valid files with needed properties.",
          "key": "JSDOC#RETURNS#TESTS#READVALIDFILESRECURSIVELY"
        },
        "readInvalidFilesRecursively": {
          "value": "The RuleTester's array of invalid files with needed properties.",
          "key": "JSDOC#RETURNS#TESTS#READINVALIDFILESRECURSIVELY"
        },
        "readInvalidFilesRecursively20": {
          "value": "The RuleTester's array of invalid files with needed properties for agnostic20.",
          "key": "JSDOC#RETURNS#TESTS#READINVALIDFILESRECURSIVELY20"
        },
        "readInvalidFilesRecursively21": {
          "value": "The RuleTester's array of invalid files with needed properties for directive21.",
          "key": "JSDOC#RETURNS#TESTS#READINVALIDFILESRECURSIVELY21"
        }
      }
    },
    "forAliasVariables": {
      "importsFlow": {
        "value": "The full flow for import traversals to enforce effective directives import rules.",
        "key": "JSDOC#FORALIASVARIABLES#IMPORTSFLOW"
      },
      "flowReturnsEarly": {
        "value": "Early if the flow needs to be interrupted.",
        "key": "JSDOC#FORALIASVARIABLES#FLOWRETURNSEARLY"
      }
    },
    "forComposedVariables": {
      "resolved": {
        "value": "\"resolved\"",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#RESOLVED"
      },
      "effective": {
        "value": "effective",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#EFFECTIVE"
      },
      "commented": {
        "value": "commented",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#COMMENTED"
      },
      "verifiedCommented": {
        "value": "verified commented",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#VERIFIEDCOMMENTED"
      },
      "returnsDeciding": {
        "value": "Returns a boolean deciding if an imported file's",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#RETURNSDECIDING"
      },
      "directiveIncompatible": {
        "value": "directive is incompatible with the current file's",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVEINCOMPATIBLE"
      },
      "directive": {
        "value": "directive",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVE"
      },
      "directives": {
        "value": "directives",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVES"
      },
      "directivePeriod": {
        "value": "directive.",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVEPERIOD"
      },
      "listsInMessage": {
        "value": "Lists in an message the",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#LISTSINMESSAGE"
      },
      "modulesIncompatible": {
        "value": "modules incompatible with a",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#MODULESINCOMPATIBLE"
      },
      "moduleBasedOn": {
        "value": "module based on its",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#MODULEBASEDON"
      },
      "findTheMessage": {
        "value": "Finds the `message` for the specific violation of",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#FINDTHEMESSAGE"
      },
      "rulesBasedOn": {
        "value": "directives import rules based on",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#RULESBASEDON"
      },
      "rdbiPeriod": {
        "value": "`resolvedDirectives_blockedImports`.",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#RDBIPERIOD"
      },
      "edbiPeriod": {
        "value": "`effectiveDirectives_BlockedImports`.",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#EDBIPERIOD"
      },
      "cdbiPeriod": {
        "value": "`commentedDirectives_BlockedImports`.",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#CDBIPERIOD"
      },
      "theMessageListing": {
        "value": "The message listing the incompatible",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#THEMESSAGELISTING"
      },
      "modulesPeriod": {
        "value": "modules.",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#MODULESPERIOD"
      },
      "trueIfImportBlocked": {
        "value": "`true` if the import is blocked, as established in",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#TRUEIFIMPORTBLOCKED"
      },
      "respective": {
        "value": "respective",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#RESPECTIVE"
      },
      "agnostic20": {
        "value": "agnostic20",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#AGNOSTIC20"
      },
      "directive21": {
        "value": "directive21",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVE21"
      },
      "makesThe": {
        "value": "Makes the",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#MAKESTHE"
      },
      "configForPlugin": {
        "value": "config for the use-agnostic ESLint plugin.",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#CONFIGFORPLUGIN"
      },
      "initialThe": {
        "value": "The",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#INITIALTHE"
      },
      "configsName": {
        "value": "config's name as a key and its config as its value.",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#CONFIGSNAME"
      },
      "getsDirectiveOf": {
        "value": "Gets the directive of",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#GETSDIRECTIVEOF"
      },
      "aModule": {
        "value": "a module from its Abstract Syntax Tree.",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#AMODULE"
      },
      "currentModule": {
        "value": "the current module.",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#CURRENTMODULE"
      },
      "importedModule": {
        "value": "the imported module.",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#IMPORTEDMODULE"
      },
      "flowThatBegins": {
        "value": "The flow that begins the import rules enforcement rule, retrieving the",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#FLOWTHATBEGINS"
      },
      "ofCurrentFile": {
        "value": "of the current file before comparing it to upcoming",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#OFCURRENTFILE"
      },
      "ofFilesItImports": {
        "value": "of the files it imports.",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#OFFILESITIMPORTS"
      },
      "flowImportReExport": {
        "value": "The flow that is shared between import and re-export traversals to obtain the import file's",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#FLOWIMPORTREEXPORT"
      },
      "getCommentedDirective": {
        "value": "Gets the commented directive of the",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#GETCOMMENTEDDIRECTIVE"
      },
      "currentModulePeriod": {
        "value": "current module.",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#CURRENTMODULEPERIOD"
      },
      "importedModulePeriod": {
        "value": "imported module.",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#IMPORTEDMODULEPERIOD"
      },
      "readAnyDepths": {
        "value": "Reads file paths at any depths within a provided",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#READANYDEPTHS"
      },
      "directory": {
        "value": "directory",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#DIRECTORY"
      },
      "directoryPeriod": {
        "value": "directory.",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#DIRECTORYPERIOD"
      },
      "validFiles": {
        "value": "valid files",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#VALIDFILES"
      },
      "invalidFiles": {
        "value": "invalid files",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#INVALIDFILES"
      },
      "forAgnostic20": {
        "value": "for agnostic20.",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#FORAGNOSTIC20"
      },
      "forDirective21": {
        "value": "for directive21.",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#FORDIRECTIVE21"
      },
      "ruleTesterArray": {
        "value": "The RuleTester's array of",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#RULETESTERARRAY"
      },
      "withNeededProperties": {
        "value": "with needed properties",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#WITHNEEDEDPROPERTIES"
      },
      "withNeededPropertiesPeriod": {
        "value": "with needed properties.",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#WITHNEEDEDPROPERTIESPERIOD"
      },
      "theCurrentFile": {
        "value": "The current file's",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#THECURRENTFILE"
      },
      "theImportedFile": {
        "value": "The imported file's",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#THEIMPORTEDFILE"
      },
      "eitherSkipTrueNonNull": {
        "value": "Either an object with `skip: true` to disregard or one with the non-null",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#EITHERSKIPTRUENONNULL"
      },
      "cfedPeriod": {
        "value": "`currentFileEffectiveDirective`.",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#CFEDPERIOD"
      },
      "ifedPeriod": {
        "value": "`importedFileEffectiveDirective`.",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#IFEDPERIOD"
      },
      "vcdPeriod": {
        "value": "`verifiedCommentedDirective`.",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#VCDPERIOD"
      },
      "ifcdPeriod": {
        "value": "`importedFileCommentedDirective`.",
        "key": "JSDOC#FORCOMPOSEDVARIABLES#IFCDPERIOD"
      }
    }
  },
  "tests": {
    "viaAlias": {
      "value": "Via alias.",
      "key": "TESTS#VIAALIAS"
    },
    "viaBaseUrl": {
      "value": "Via baseUrl.",
      "key": "TESTS#VIABASEURL"
    },
    "valid": {
      "value": "Valid.",
      "key": "TESTS#VALID"
    },
    "invalid": {
      "value": "Invalid.",
      "key": "TESTS#INVALID"
    },
    "withExtension": {
      "value": "with extension",
      "key": "TESTS#WITHEXTENSION"
    },
    "forComposedVariables": {
      "thatsA": {
        "value": "That's a",
        "key": "TESTS#FORCOMPOSEDVARIABLES#THATSA"
      },
      "thatsAn": {
        "value": "That's an",
        "key": "TESTS#FORCOMPOSEDVARIABLES#THATSAN"
      },
      "importingA": {
        "value": "...Importing a",
        "key": "TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA"
      },
      "importingAn": {
        "value": "...Importing an",
        "key": "TESTS#FORCOMPOSEDVARIABLES#IMPORTINGAN"
      },
      "module": {
        "value": "Module",
        "key": "TESTS#FORCOMPOSEDVARIABLES#MODULE"
      },
      "modulePeriod": {
        "value": "Module.",
        "key": "TESTS#FORCOMPOSEDVARIABLES#MODULEPERIOD"
      },
      "withExtensionParentheses": {
        "value": "(with extension).",
        "key": "TESTS#FORCOMPOSEDVARIABLES#WITHEXTENSIONPARENTHESES"
      },
      "byFolder": {
        "value": "by a folder.",
        "key": "TESTS#FORCOMPOSEDVARIABLES#BYFOLDER"
      },
      "importing": {
        "value": "...Importing",
        "key": "TESTS#FORCOMPOSEDVARIABLES#IMPORTING"
      },
      "viaStrategyPeriod": {
        "value": "via Special Agnostic Strategy.",
        "key": "TESTS#FORCOMPOSEDVARIABLES#VIASTRATEGYPERIOD"
      },
      "viaStrategy": {
        "value": "via Special Agnostic Strategy",
        "key": "TESTS#FORCOMPOSEDVARIABLES#VIASTRATEGY"
      }
    }
  },
  "agnostic20": {
    "use server logics": {
      "use server logics": {
        "value": "Server Logics can compose with one another.",
        "key": "AGNOSTIC20#USE_SERVER_LOGICS#USE_SERVER_LOGICS"
      },
      "use server components": {
        "value": "Server Components are OK to be composed with Server Logics as long as the Server Logics Module, by convention, does not export React components.",
        "key": "AGNOSTIC20#USE_SERVER_LOGICS#USE_SERVER_COMPONENTS"
      },
      "use server functions": {
        "value": "Server Functions, being able to import one another, can compose and do so via Server Logics, despite this method seeming superfluous at first glance. (Perhaps a preferrable use case for this has been found or could be found either today or in the future.)",
        "key": "AGNOSTIC20#USE_SERVER_LOGICS#USE_SERVER_FUNCTIONS"
      },
      "use client logics": {
        "value": "Client Logics should never leak to the server.",
        "key": "AGNOSTIC20#USE_SERVER_LOGICS#USE_CLIENT_LOGICS"
      },
      "use client components": {
        "value": "Client Components cannot be tinkered with on the server.",
        "key": "AGNOSTIC20#USE_SERVER_LOGICS#USE_CLIENT_COMPONENTS"
      },
      "use agnostic logics": {
        "value": "Agnostic Logics can run safely on the server just like they can on the client.",
        "key": "AGNOSTIC20#USE_SERVER_LOGICS#USE_AGNOSTIC_LOGICS"
      },
      "use agnostic components": {
        "value": "Agnostic Components can be composed with Logics on the server just like they can on the client, as long at the Server Logics Module, by convention, does not export React components.",
        "key": "AGNOSTIC20#USE_SERVER_LOGICS#USE_AGNOSTIC_COMPONENTS"
      },
      "kinds": {
        "value": "Server Logics",
        "key": "AGNOSTIC20#USE_SERVER_LOGICS#KINDS"
      },
      "kindsComma": {
        "value": "Server Logics,",
        "key": "AGNOSTIC20#USE_SERVER_LOGICS#KINDSCOMMA"
      },
      "kindsPeriod": {
        "value": "Server Logics.",
        "key": "AGNOSTIC20#USE_SERVER_LOGICS#KINDSPERIOD"
      },
      "module": {
        "value": "Server Logics Module",
        "key": "AGNOSTIC20#USE_SERVER_LOGICS#MODULE"
      },
      "thatsAModule": {
        "value": "That's a Server Logics Module.",
        "key": "AGNOSTIC20#USE_SERVER_LOGICS#THATSAMODULE"
      },
      "importingWithExtension": {
        "value": "...Importing a Server Logics Module (with extension).",
        "key": "AGNOSTIC20#USE_SERVER_LOGICS#IMPORTINGWITHEXTENSION"
      },
      "importingByAFolder": {
        "value": "...Importing a Server Logics Module by a folder.",
        "key": "AGNOSTIC20#USE_SERVER_LOGICS#IMPORTINGBYAFOLDER"
      },
      "directive": {
        "value": "use server logics",
        "key": "AGNOSTIC20#USE_SERVER_LOGICS#DIRECTIVE"
      }
    },
    "use server components": {
      "use server logics": {
        "value": "Server Logics, being logic from the server, can safely support Server Components.",
        "key": "AGNOSTIC20#USE_SERVER_COMPONENTS#USE_SERVER_LOGICS"
      },
      "use server components": {
        "value": "Server Components can compose with one another, assuming thanks to the inclusion of the 'use agnostic' directive that they are actual Server Components.",
        "key": "AGNOSTIC20#USE_SERVER_COMPONENTS#USE_SERVER_COMPONENTS"
      },
      "use server functions": {
        "value": "Server Functions can be passed to imported Client Components within Server Components Modules, even though indeed Server Components Modules and Server Components can make their own Server Functions through inline `'use server'` directives.",
        "key": "AGNOSTIC20#USE_SERVER_COMPONENTS#USE_SERVER_FUNCTIONS"
      },
      "use client logics": {
        "value": "Client Logics should never leak to the server.",
        "key": "AGNOSTIC20#USE_SERVER_COMPONENTS#USE_CLIENT_LOGICS"
      },
      "use client components": {
        "value": "Client Components can be nested inside Server Components either to wrap some of the tree with client state accessible through child Client Components and pass through Server Components or to create client boundaries when the root of the application is planted on the server.",
        "key": "AGNOSTIC20#USE_SERVER_COMPONENTS#USE_CLIENT_COMPONENTS"
      },
      "use agnostic logics": {
        "value": "Agnostic Logics can run safely on the server just like they can on the client.",
        "key": "AGNOSTIC20#USE_SERVER_COMPONENTS#USE_AGNOSTIC_LOGICS"
      },
      "use agnostic components": {
        "value": "Agnostic Components can render safely on the server just like they can on the client.",
        "key": "AGNOSTIC20#USE_SERVER_COMPONENTS#USE_AGNOSTIC_COMPONENTS"
      },
      "kinds": {
        "value": "Server Components",
        "key": "AGNOSTIC20#USE_SERVER_COMPONENTS#KINDS"
      },
      "kindsComma": {
        "value": "Server Components,",
        "key": "AGNOSTIC20#USE_SERVER_COMPONENTS#KINDSCOMMA"
      },
      "kindsPeriod": {
        "value": "Server Components.",
        "key": "AGNOSTIC20#USE_SERVER_COMPONENTS#KINDSPERIOD"
      },
      "module": {
        "value": "Server Components Module",
        "key": "AGNOSTIC20#USE_SERVER_COMPONENTS#MODULE"
      },
      "thatsAModule": {
        "value": "That's a Server Components Module.",
        "key": "AGNOSTIC20#USE_SERVER_COMPONENTS#THATSAMODULE"
      },
      "importingWithExtension": {
        "value": "...Importing a Server Components Module (with extension).",
        "key": "AGNOSTIC20#USE_SERVER_COMPONENTS#IMPORTINGWITHEXTENSION"
      },
      "importingByAFolder": {
        "value": "...Importing a Server Components Module by a folder.",
        "key": "AGNOSTIC20#USE_SERVER_COMPONENTS#IMPORTINGBYAFOLDER"
      },
      "directive": {
        "value": "use server components",
        "key": "AGNOSTIC20#USE_SERVER_COMPONENTS#DIRECTIVE"
      }
    },
    "use server functions": {
      "use server logics": {
        "value": "Server Logics, being logic from the server, can safely support Server Functions.",
        "key": "AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_SERVER_LOGICS"
      },
      "use server components": {
        "value": "Server Components aren't allowed because Server Functions have no business working with React Components.",
        "key": "AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_SERVER_COMPONENTS"
      },
      "use server functions": {
        "value": "Server Functions, even though they don't need to import one another and the same results can be generated via Server Logics for the outcome of a single Server Function, can still compose with one another. (Perhaps a preferrable use case for this has been found or could be found either today or in the future.)",
        "key": "AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_SERVER_FUNCTIONS"
      },
      "use client logics": {
        "value": "Client Logics should never leak to the server.",
        "key": "AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_CLIENT_LOGICS"
      },
      "use client components": {
        "value": "Client Components aren't allowed because Server Functions have no business working with React Components.",
        "key": "AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_CLIENT_COMPONENTS"
      },
      "use agnostic logics": {
        "value": "Agnostic Logics can run safely on the server just like they can on the client.",
        "key": "AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_LOGICS"
      },
      "use agnostic components": {
        "value": "Agnostic Components aren't allowed because Server Functions have no business working with React Components.",
        "key": "AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_COMPONENTS"
      },
      "kinds": {
        "value": "Server Functions",
        "key": "AGNOSTIC20#USE_SERVER_FUNCTIONS#KINDS"
      },
      "kindsComma": {
        "value": "Server Functions,",
        "key": "AGNOSTIC20#USE_SERVER_FUNCTIONS#KINDSCOMMA"
      },
      "kindsPeriod": {
        "value": "Server Functions.",
        "key": "AGNOSTIC20#USE_SERVER_FUNCTIONS#KINDSPERIOD"
      },
      "module": {
        "value": "Server Functions Module",
        "key": "AGNOSTIC20#USE_SERVER_FUNCTIONS#MODULE"
      },
      "thatsAModule": {
        "value": "That's a Server Functions Module.",
        "key": "AGNOSTIC20#USE_SERVER_FUNCTIONS#THATSAMODULE"
      },
      "importingWithExtension": {
        "value": "...Importing a Server Functions Module (with extension).",
        "key": "AGNOSTIC20#USE_SERVER_FUNCTIONS#IMPORTINGWITHEXTENSION"
      },
      "importingByAFolder": {
        "value": "...Importing a Server Functions Module by a folder.",
        "key": "AGNOSTIC20#USE_SERVER_FUNCTIONS#IMPORTINGBYAFOLDER"
      },
      "directive": {
        "value": "use server functions",
        "key": "AGNOSTIC20#USE_SERVER_FUNCTIONS#DIRECTIVE"
      }
    },
    "use client logics": {
      "use server logics": {
        "value": "Server Logics should never leak to the client.",
        "key": "AGNOSTIC20#USE_CLIENT_LOGICS#USE_SERVER_LOGICS"
      },
      "use server components": {
        "value": "Server Components cannot be tinkered with on the client.",
        "key": "AGNOSTIC20#USE_CLIENT_LOGICS#USE_SERVER_COMPONENTS"
      },
      "use server functions": {
        "value": "Server Functions can technically be attached to Client Components that are being tinkered with within Client Logics Modules.",
        "key": "AGNOSTIC20#USE_CLIENT_LOGICS#USE_SERVER_FUNCTIONS"
      },
      "use client logics": {
        "value": "Client Logics can compose with one another.",
        "key": "AGNOSTIC20#USE_CLIENT_LOGICS#USE_CLIENT_LOGICS"
      },
      "use client components": {
        "value": "Client Components are OK to be composed with Client Logics as long as the Client Logics Module, by convention, does not export React components.",
        "key": "AGNOSTIC20#USE_CLIENT_LOGICS#USE_CLIENT_COMPONENTS"
      },
      "use agnostic logics": {
        "value": "Agnostic Logics can run safely on the client just like they can on the server.",
        "key": "AGNOSTIC20#USE_CLIENT_LOGICS#USE_AGNOSTIC_LOGICS"
      },
      "use agnostic components": {
        "value": "Agnostic Components can be composed with Logics on the client just like they can on the server, as long as the Client Logics Module, by convention, does not export React components.",
        "key": "AGNOSTIC20#USE_CLIENT_LOGICS#USE_AGNOSTIC_COMPONENTS"
      },
      "kinds": {
        "value": "Client Logics",
        "key": "AGNOSTIC20#USE_CLIENT_LOGICS#KINDS"
      },
      "kindsComma": {
        "value": "Client Logics,",
        "key": "AGNOSTIC20#USE_CLIENT_LOGICS#KINDSCOMMA"
      },
      "kindsPeriod": {
        "value": "Client Logics.",
        "key": "AGNOSTIC20#USE_CLIENT_LOGICS#KINDSPERIOD"
      },
      "module": {
        "value": "Client Logics Module",
        "key": "AGNOSTIC20#USE_CLIENT_LOGICS#MODULE"
      },
      "thatsAModule": {
        "value": "That's a Client Logics Module.",
        "key": "AGNOSTIC20#USE_CLIENT_LOGICS#THATSAMODULE"
      },
      "importingWithExtension": {
        "value": "...Importing a Client Logics Module (with extension).",
        "key": "AGNOSTIC20#USE_CLIENT_LOGICS#IMPORTINGWITHEXTENSION"
      },
      "importingByAFolder": {
        "value": "...Importing a Client Logics Module by a folder.",
        "key": "AGNOSTIC20#USE_CLIENT_LOGICS#IMPORTINGBYAFOLDER"
      },
      "directive": {
        "value": "use client logics",
        "key": "AGNOSTIC20#USE_CLIENT_LOGICS#DIRECTIVE"
      }
    },
    "use client components": {
      "use server logics": {
        "value": "Server Logics should never leak to the client.",
        "key": "AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_SERVER_LOGICS"
      },
      "use server components": {
        "value": "Server Components may only pass through Client Components via the children prop within Server Components Modules.",
        "key": "AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_SERVER_COMPONENTS"
      },
      "use server functions": {
        "value": "Server Functions can specifically be triggered by Client Components.",
        "key": "AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_SERVER_FUNCTIONS"
      },
      "use client logics": {
        "value": "Client Logics, being logic from the client, can safely support Client Components.",
        "key": "AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_CLIENT_LOGICS"
      },
      "use client components": {
        "value": "Client Components can compose with one another.",
        "key": "AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_CLIENT_COMPONENTS"
      },
      "use agnostic logics": {
        "value": "Agnostic Logics can run safely on the client just like they can on the server.",
        "key": "AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_AGNOSTIC_LOGICS"
      },
      "use agnostic components": {
        "value": "Agnostic Components can render safely on the client just like they can on the server.",
        "key": "AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_AGNOSTIC_COMPONENTS"
      },
      "kinds": {
        "value": "Client Components",
        "key": "AGNOSTIC20#USE_CLIENT_COMPONENTS#KINDS"
      },
      "kindsComma": {
        "value": "Client Components,",
        "key": "AGNOSTIC20#USE_CLIENT_COMPONENTS#KINDSCOMMA"
      },
      "kindsPeriod": {
        "value": "Client Components.",
        "key": "AGNOSTIC20#USE_CLIENT_COMPONENTS#KINDSPERIOD"
      },
      "module": {
        "value": "Client Components Module",
        "key": "AGNOSTIC20#USE_CLIENT_COMPONENTS#MODULE"
      },
      "thatsAModule": {
        "value": "That's a Client Components Module.",
        "key": "AGNOSTIC20#USE_CLIENT_COMPONENTS#THATSAMODULE"
      },
      "importingWithExtension": {
        "value": "...Importing a Client Components Module (with extension).",
        "key": "AGNOSTIC20#USE_CLIENT_COMPONENTS#IMPORTINGWITHEXTENSION"
      },
      "importingByAFolder": {
        "value": "...Importing a Client Components Module by a folder.",
        "key": "AGNOSTIC20#USE_CLIENT_COMPONENTS#IMPORTINGBYAFOLDER"
      },
      "directive": {
        "value": "use client components",
        "key": "AGNOSTIC20#USE_CLIENT_COMPONENTS#DIRECTIVE"
      }
    },
    "use agnostic logics": {
      "use server logics": {
        "value": "Server Logics cannot run on both the server and the client.",
        "key": "AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_SERVER_LOGICS"
      },
      "use server components": {
        "value": "Server Components cannot be tinkered with on both the server and the client.",
        "key": "AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_SERVER_COMPONENTS"
      },
      "use server functions": {
        "value": "Server Functions can be modified on the server and on the client, but their use cases on both environments are not one-to-one compatible, since they're being addressed as they are on the server and addressed as references on the client.",
        "key": "AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_SERVER_FUNCTIONS"
      },
      "use client logics": {
        "value": "Client Logics cannot run on both the server and the client.",
        "key": "AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_CLIENT_LOGICS"
      },
      "use client components": {
        "value": "Client Components cannot be tinkered with on both the server and the client.",
        "key": "AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_CLIENT_COMPONENTS"
      },
      "use agnostic logics": {
        "value": "Agnostic Logics can compose with one another.",
        "key": "AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_AGNOSTIC_LOGICS"
      },
      "use agnostic components": {
        "value": "Agnostic Components can be composed with Logics agnostically as long as the Agnostic Logics Module, by convention, does not export React components.",
        "key": "AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_AGNOSTIC_COMPONENTS"
      },
      "kinds": {
        "value": "Agnostic Logics",
        "key": "AGNOSTIC20#USE_AGNOSTIC_LOGICS#KINDS"
      },
      "kindsComma": {
        "value": "Agnostic Logics,",
        "key": "AGNOSTIC20#USE_AGNOSTIC_LOGICS#KINDSCOMMA"
      },
      "kindsPeriod": {
        "value": "Agnostic Logics.",
        "key": "AGNOSTIC20#USE_AGNOSTIC_LOGICS#KINDSPERIOD"
      },
      "module": {
        "value": "Agnostic Logics Module",
        "key": "AGNOSTIC20#USE_AGNOSTIC_LOGICS#MODULE"
      },
      "thatsAModule": {
        "value": "That's an Agnostic Logics Module.",
        "key": "AGNOSTIC20#USE_AGNOSTIC_LOGICS#THATSAMODULE"
      },
      "importingWithExtension": {
        "value": "...Importing an Agnostic Logics Module (with extension).",
        "key": "AGNOSTIC20#USE_AGNOSTIC_LOGICS#IMPORTINGWITHEXTENSION"
      },
      "importingByAFolder": {
        "value": "...Importing an Agnostic Logics Module by a folder.",
        "key": "AGNOSTIC20#USE_AGNOSTIC_LOGICS#IMPORTINGBYAFOLDER"
      },
      "directive": {
        "value": "use agnostic logics",
        "key": "AGNOSTIC20#USE_AGNOSTIC_LOGICS#DIRECTIVE"
      }
    },
    "use agnostic components": {
      "use server logics": {
        "value": "Server Logics cannot run on both the server and the client.",
        "key": "AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_SERVER_LOGICS"
      },
      "use server components": {
        "value": "Server Components, unlike Client Components, cannot make silos of their own once on the opposing environment (the client in this case), and therefore cannot be executed from the client, making them unable to execute agnostically from both the server and the client.",
        "key": "AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_SERVER_COMPONENTS"
      },
      "use server functions": {
        "value": "Server Functions can be passed to Client Components as props when Client Components are also legally imported into Agnostic Components Modules.",
        "key": "AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_SERVER_FUNCTIONS"
      },
      "use client logics": {
        "value": "Client Logics cannot run on both the server and the client.",
        "key": "AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_LOGICS"
      },
      "use client components": {
        "value": "Client Components can be nested inside Agnostic Components either to wrap some of the tree with client state accessible through child Client Components and pass through Server Components — if still on the Server Tree — or to create client boundaries when the root of the application is planted on the server.",
        "key": "AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_COMPONENTS"
      },
      "use agnostic logics": {
        "value": "Agnostic Logics, being environment-agnostic logic, can safely support Agnostic Components.",
        "key": "AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_AGNOSTIC_LOGICS"
      },
      "use agnostic components": {
        "value": "Agnostic Components can compose with one another.",
        "key": "AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_AGNOSTIC_COMPONENTS"
      },
      "kinds": {
        "value": "Agnostic Components",
        "key": "AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#KINDS"
      },
      "kindsComma": {
        "value": "Agnostic Components,",
        "key": "AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#KINDSCOMMA"
      },
      "kindsPeriod": {
        "value": "Agnostic Components.",
        "key": "AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#KINDSPERIOD"
      },
      "module": {
        "value": "Agnostic Components Module",
        "key": "AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#MODULE"
      },
      "thatsAModule": {
        "value": "That's an Agnostic Components Module.",
        "key": "AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#THATSAMODULE"
      },
      "importingWithExtension": {
        "value": "...Importing an Agnostic Components Module (with extension).",
        "key": "AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#IMPORTINGWITHEXTENSION"
      },
      "importingByAFolder": {
        "value": "...Importing an Agnostic Components Module by a folder.",
        "key": "AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#IMPORTINGBYAFOLDER"
      },
      "directive": {
        "value": "use agnostic components",
        "key": "AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#DIRECTIVE"
      }
    },
    "forAliasVariables": {
      "serverNeverClient": {
        "value": "Server Logics should never leak to the client.",
        "key": "AGNOSTIC20#FORALIASVARIABLES#SERVERNEVERCLIENT"
      },
      "clientNeverServer": {
        "value": "Client Logics should never leak to the server.",
        "key": "AGNOSTIC20#FORALIASVARIABLES#CLIENTNEVERSERVER"
      },
      "agnosticCanServerClient": {
        "value": "Agnostic Logics can run safely on the server just like they can on the client.",
        "key": "AGNOSTIC20#FORALIASVARIABLES#AGNOSTICCANSERVERCLIENT"
      },
      "agnosticCanClientServer": {
        "value": "Agnostic Logics can run safely on the client just like they can on the server.",
        "key": "AGNOSTIC20#FORALIASVARIABLES#AGNOSTICCANCLIENTSERVER"
      },
      "serverFunctionsNoComponents": {
        "value": "Server Functions have no business working with React Components.",
        "key": "AGNOSTIC20#FORALIASVARIABLES#SERVERFUNCTIONSNOCOMPONENTS"
      },
      "serverLogicsCantBoth": {
        "value": "Server Logics cannot run on both the server and the client.",
        "key": "AGNOSTIC20#FORALIASVARIABLES#SERVERLOGICSCANTBOTH"
      },
      "clientLogicsCantBoth": {
        "value": "Client Logics cannot run on both the server and the client.",
        "key": "AGNOSTIC20#FORALIASVARIABLES#CLIENTLOGICSCANTBOTH"
      }
    },
    "forComposedVariables": {
      "shouldNeverClient": {
        "value": "should never leak to the client.",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#SHOULDNEVERCLIENT"
      },
      "shouldNeverServer": {
        "value": "should never leak to the server.",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#SHOULDNEVERSERVER"
      },
      "runServerLikeClient": {
        "value": "can run safely on the server just like they can on the client.",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#RUNSERVERLIKECLIENT"
      },
      "runClientLikeServer": {
        "value": "can run safely on the client just like they can on the server.",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#RUNCLIENTLIKESERVER"
      },
      "canComposeOneAnother": {
        "value": "can compose with one another.",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#CANCOMPOSEONEANOTHER"
      },
      "cantTinkeredServer": {
        "value": "cannot be tinkered with on the server.",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTTINKEREDSERVER"
      },
      "cantTinkeredClient": {
        "value": "cannot be tinkered with on the client.",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTTINKEREDCLIENT"
      },
      "cantTinkeredBoth": {
        "value": "cannot be tinkered with on both the server and the client.",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTTINKEREDBOTH"
      },
      "serverComponentsOKLogics": {
        "value": "Server Components are OK to be composed with Server Logics as long as the Server Logics Module,",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#SERVERCOMPONENTSOKLOGICS"
      },
      "clientComponentsOKLogics": {
        "value": "Client Components are OK to be composed with Client Logics as long as the Client Logics Module,",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#CLIENTCOMPONENTSOKLOGICS"
      },
      "agnosticComponentsCanServer": {
        "value": "Agnostic Components can be composed with Logics on the server just like they can on the client, as long at the Server Logics Module,",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#AGNOSTICCOMPONENTSCANSERVER"
      },
      "agnosticComponentsCanClient": {
        "value": "Agnostic Components can be composed with Logics on the client just like they can on the server, as long as the Client Logics Module,",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#AGNOSTICCOMPONENTSCANCLIENT"
      },
      "agnosticComponentsCanAgnostic": {
        "value": "Agnostic Components can be composed with Logics agnostically as long as the Agnostic Logics Module,",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#AGNOSTICCOMPONENTSCANAGNOSTIC"
      },
      "noExportComponents": {
        "value": "by convention, does not export React components.",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#NOEXPORTCOMPONENTS"
      },
      "cantServerClient": {
        "value": "cannot run on both the server and the client.",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTSERVERCLIENT"
      },
      "arentAllowed": {
        "value": "aren't allowed because",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#ARENTALLOWED"
      },
      "allowedBecause": {
        "value": "allowed, because",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#ALLOWEDBECAUSE"
      },
      "beingLogicServer": {
        "value": "being logic from the server,",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#BEINGLOGICSERVER"
      },
      "beingLogicClient": {
        "value": "being logic from the client,",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#BEINGLOGICCLIENT"
      },
      "beingLogicAgnostic": {
        "value": "being environment-agnostic logic,",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#BEINGLOGICAGNOSTIC"
      },
      "canSafelySupport": {
        "value": "can safely support",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#CANSAFELYSUPPORT"
      },
      "canBeNestedInside": {
        "value": "can be nested inside",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#CANBENESTEDINSIDE"
      },
      "eitherWrapTree": {
        "value": "either to wrap some of the tree with client state accessible through child Client Components and pass through Server Components",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#EITHERWRAPTREE"
      },
      "ifStillOnServerTree": {
        "value": "— if still on the Server Tree —",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#IFSTILLONSERVERTREE"
      },
      "orCreateBoundaries": {
        "value": "or to create client boundaries when the root of the application is planted on the server.",
        "key": "AGNOSTIC20#FORCOMPOSEDVARIABLES#ORCREATEBOUNDARIES"
      }
    }
  },
  "directive21": {
    "use server logics": {
      "use server logics": {
        "value": "Prime Server Logics can compose with one another.",
        "key": "DIRECTIVE21#USE_SERVER_LOGICS#USE_SERVER_LOGICS"
      },
      "use client logics": {
        "value": "Prime Client Logics should never leak to the server.",
        "key": "DIRECTIVE21#USE_SERVER_LOGICS#USE_CLIENT_LOGICS"
      },
      "use agnostic logics": {
        "value": "Prime Agnostic Logics can run safely on the server just like they can on the client.",
        "key": "DIRECTIVE21#USE_SERVER_LOGICS#USE_AGNOSTIC_LOGICS"
      },
      "use server components": {
        "value": "Lineal Server Components are OK to be composed with Prime Server Logics as long as the Prime Server Logics Module, by convention, does not export React components.",
        "key": "DIRECTIVE21#USE_SERVER_LOGICS#USE_SERVER_COMPONENTS"
      },
      "use client components": {
        "value": "Lineal Client Components, like any Client Components, cannot be tinkered with on the server.",
        "key": "DIRECTIVE21#USE_SERVER_LOGICS#USE_CLIENT_COMPONENTS"
      },
      "use agnostic components": {
        "value": "Lineal Agnostic Components can be composed with any Prime Environment Logics agnostically, as long as the Prime Environment Logics Module, by convention, does not export React components.",
        "key": "DIRECTIVE21#USE_SERVER_LOGICS#USE_AGNOSTIC_COMPONENTS"
      },
      "use server functions": {
        "value": "(Special) Server Functions, being able to import one another, can compose and do so via Prime Server Logics, despite this method seeming superfluous at first glance. (Perhaps a preferrable use case for this has been found or could be found either today or in the future.)",
        "key": "DIRECTIVE21#USE_SERVER_LOGICS#USE_SERVER_FUNCTIONS"
      },
      "use client contexts": {
        "value": "(Special) Client Contexts Components, like any Client Components, cannot be tinkered with on the server.",
        "key": "DIRECTIVE21#USE_SERVER_LOGICS#USE_CLIENT_CONTEXTS"
      },
      "use agnostic conditions": {
        "value": "(Special) Agnostic Conditions Components are able to safely render on the server, guaranteeing that only their `ComponentForServer` will be effectively involved in Prime Server Logics Modules.",
        "key": "DIRECTIVE21#USE_SERVER_LOGICS#USE_AGNOSTIC_CONDITIONS"
      },
      "kinds": {
        "value": "Prime Server Logics",
        "key": "DIRECTIVE21#USE_SERVER_LOGICS#KINDS"
      },
      "kindsComma": {
        "value": "Prime Server Logics,",
        "key": "DIRECTIVE21#USE_SERVER_LOGICS#KINDSCOMMA"
      },
      "kindsPeriod": {
        "value": "Prime Server Logics.",
        "key": "DIRECTIVE21#USE_SERVER_LOGICS#KINDSPERIOD"
      },
      "kindsSimple": {
        "value": "Server Logics",
        "key": "DIRECTIVE21#USE_SERVER_LOGICS#KINDSSIMPLE"
      },
      "module": {
        "value": "Prime Server Logics Module",
        "key": "DIRECTIVE21#USE_SERVER_LOGICS#MODULE"
      },
      "moduleSimple": {
        "value": "Server Logics Module",
        "key": "DIRECTIVE21#USE_SERVER_LOGICS#MODULESIMPLE"
      },
      "importingAModule": {
        "value": "...Importing a Prime Server Logics Module.",
        "key": "DIRECTIVE21#USE_SERVER_LOGICS#IMPORTINGAMODULE"
      },
      "importingByAFolder": {
        "value": "...Importing a Prime Server Logics Module by a folder.",
        "key": "DIRECTIVE21#USE_SERVER_LOGICS#IMPORTINGBYAFOLDER"
      },
      "importingViaStrategy": {
        "value": "...Importing Prime Server Logics via Special Agnostic Strategy.",
        "key": "DIRECTIVE21#USE_SERVER_LOGICS#IMPORTINGVIASTRATEGY"
      },
      "importingViaStrategyByAFolder": {
        "value": "...Importing Prime Server Logics via Special Agnostic Strategy by a folder.",
        "key": "DIRECTIVE21#USE_SERVER_LOGICS#IMPORTINGVIASTRATEGYBYAFOLDER"
      },
      "directive": {
        "value": "use server logics",
        "key": "DIRECTIVE21#USE_SERVER_LOGICS#DIRECTIVE"
      },
      "atStrategy": {
        "value": "@serverLogics",
        "key": "DIRECTIVE21#USE_SERVER_LOGICS#ATSTRATEGY"
      }
    },
    "use client logics": {
      "use server logics": {
        "value": "Prime Server Logics should never leak to the client.",
        "key": "DIRECTIVE21#USE_CLIENT_LOGICS#USE_SERVER_LOGICS"
      },
      "use client logics": {
        "value": "Prime Client Logics can compose with one another.",
        "key": "DIRECTIVE21#USE_CLIENT_LOGICS#USE_CLIENT_LOGICS"
      },
      "use agnostic logics": {
        "value": "Prime Agnostic Logics can run safely on the client just like they can on the server.",
        "key": "DIRECTIVE21#USE_CLIENT_LOGICS#USE_AGNOSTIC_LOGICS"
      },
      "use server components": {
        "value": "Lineal Server Components cannot be tinkered with on the client.",
        "key": "DIRECTIVE21#USE_CLIENT_LOGICS#USE_SERVER_COMPONENTS"
      },
      "use client components": {
        "value": "Prime Client Logics, like any Client Components, are OK to be composed with Prime Client Logics as long as the Prime Client Logics Module, by convention, does not export React components.",
        "key": "DIRECTIVE21#USE_CLIENT_LOGICS#USE_CLIENT_COMPONENTS"
      },
      "use agnostic components": {
        "value": "Lineal Agnostic Components can be composed with any Prime Environment Logics agnostically, as long as the Prime Environment Logics Module, by convention, does not export React components.",
        "key": "DIRECTIVE21#USE_CLIENT_LOGICS#USE_AGNOSTIC_COMPONENTS"
      },
      "use server functions": {
        "value": "(Special) Server Functions can technically be attached to any Client Components that are being tinkered with within Client Logics Modules.",
        "key": "DIRECTIVE21#USE_CLIENT_LOGICS#USE_SERVER_FUNCTIONS"
      },
      "use client contexts": {
        "value": "(Special) Client Contexts Components, like any Client Components, are OK to be composed with Prime Client Logics as long as the Prime Client Logics Module, by convention, does not export React components.",
        "key": "DIRECTIVE21#USE_CLIENT_LOGICS#USE_CLIENT_CONTEXTS"
      },
      "use agnostic conditions": {
        "value": "(Special) Agnostic Conditions Components are able to safely render on the client, guaranteeing that only their `ComponentForClient` will be effectively involved in Prime Client Logics Modules.",
        "key": "DIRECTIVE21#USE_CLIENT_LOGICS#USE_AGNOSTIC_CONDITIONS"
      },
      "kinds": {
        "value": "Prime Client Logics",
        "key": "DIRECTIVE21#USE_CLIENT_LOGICS#KINDS"
      },
      "kindsComma": {
        "value": "Prime Client Logics,",
        "key": "DIRECTIVE21#USE_CLIENT_LOGICS#KINDSCOMMA"
      },
      "kindsPeriod": {
        "value": "Prime Client Logics.",
        "key": "DIRECTIVE21#USE_CLIENT_LOGICS#KINDSPERIOD"
      },
      "kindsSimple": {
        "value": "Client Logics",
        "key": "DIRECTIVE21#USE_CLIENT_LOGICS#KINDSSIMPLE"
      },
      "module": {
        "value": "Prime Client Logics Module",
        "key": "DIRECTIVE21#USE_CLIENT_LOGICS#MODULE"
      },
      "moduleSimple": {
        "value": "Client Logics Module",
        "key": "DIRECTIVE21#USE_CLIENT_LOGICS#MODULESIMPLE"
      },
      "importingAModule": {
        "value": "...Importing a Prime Client Logics Module.",
        "key": "DIRECTIVE21#USE_CLIENT_LOGICS#IMPORTINGAMODULE"
      },
      "importingByAFolder": {
        "value": "...Importing a Prime Client Logics Module by a folder.",
        "key": "DIRECTIVE21#USE_CLIENT_LOGICS#IMPORTINGBYAFOLDER"
      },
      "importingViaStrategy": {
        "value": "...Importing Prime Client Logics via Special Agnostic Strategy.",
        "key": "DIRECTIVE21#USE_CLIENT_LOGICS#IMPORTINGVIASTRATEGY"
      },
      "importingViaStrategyByAFolder": {
        "value": "...Importing Prime Client Logics via Special Agnostic Strategy by a folder.",
        "key": "DIRECTIVE21#USE_CLIENT_LOGICS#IMPORTINGVIASTRATEGYBYAFOLDER"
      },
      "directive": {
        "value": "use client logics",
        "key": "DIRECTIVE21#USE_CLIENT_LOGICS#DIRECTIVE"
      },
      "atStrategy": {
        "value": "@clientLogics",
        "key": "DIRECTIVE21#USE_CLIENT_LOGICS#ATSTRATEGY"
      }
    },
    "use agnostic logics": {
      "use server logics": {
        "value": "Prime Server Logics cannot run on both the server and the client.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_SERVER_LOGICS"
      },
      "use client logics": {
        "value": "Prime Client Logics cannot run on both the server and the client.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_CLIENT_LOGICS"
      },
      "use agnostic logics": {
        "value": "Prime Agnostic Logics can compose with one another.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_AGNOSTIC_LOGICS"
      },
      "use server components": {
        "value": "Lineal Server Components cannot be tinkered with on both the server and the client.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_SERVER_COMPONENTS"
      },
      "use client components": {
        "value": "Lineal Client Components, like any Client Components, cannot be tinkered with on both the server and the client.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_CLIENT_COMPONENTS"
      },
      "use agnostic components": {
        "value": "Lineal Agnostic Components can be composed with any Prime Environment Logics agnostically, as long as the Prime Environment Logics Module, by convention, does not export React components.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_AGNOSTIC_COMPONENTS"
      },
      "use server functions": {
        "value": "(Special) Server Functions can be modified on the server and on the client, but their use cases on both environments are not one-to-one compatible, since they're being addressed as they are on the server and addressed as references on the client.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_SERVER_FUNCTIONS"
      },
      "use client contexts": {
        "value": "(Special) Client Contexts Components, like any Client Components, cannot be tinkered with on both the server and the client.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_CLIENT_CONTEXTS"
      },
      "use agnostic conditions": {
        "value": "(Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can be composed with any Prime Environment Logics agnostically, as long as the Prime Environment Logics Module, by convention, does not export React components.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_AGNOSTIC_CONDITIONS"
      },
      "kinds": {
        "value": "Prime Agnostic Logics",
        "key": "DIRECTIVE21#USE_AGNOSTIC_LOGICS#KINDS"
      },
      "kindsComma": {
        "value": "Prime Agnostic Logics,",
        "key": "DIRECTIVE21#USE_AGNOSTIC_LOGICS#KINDSCOMMA"
      },
      "kindsPeriod": {
        "value": "Prime Agnostic Logics.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_LOGICS#KINDSPERIOD"
      },
      "kindsSimple": {
        "value": "Agnostic Logics",
        "key": "DIRECTIVE21#USE_AGNOSTIC_LOGICS#KINDSSIMPLE"
      },
      "module": {
        "value": "Prime Agnostic Logics Module",
        "key": "DIRECTIVE21#USE_AGNOSTIC_LOGICS#MODULE"
      },
      "moduleSimple": {
        "value": "Agnostic Logics Module",
        "key": "DIRECTIVE21#USE_AGNOSTIC_LOGICS#MODULESIMPLE"
      },
      "importingAModule": {
        "value": "...Importing a Prime Agnostic Logics Module.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_LOGICS#IMPORTINGAMODULE"
      },
      "importingByAFolder": {
        "value": "...Importing a Prime Agnostic Logics Module by a folder.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_LOGICS#IMPORTINGBYAFOLDER"
      },
      "importingViaStrategy": {
        "value": "...Importing Prime Agnostic Logics via Special Agnostic Strategy.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_LOGICS#IMPORTINGVIASTRATEGY"
      },
      "importingViaStrategyByAFolder": {
        "value": "...Importing Prime Agnostic Logics via Special Agnostic Strategy by a folder.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_LOGICS#IMPORTINGVIASTRATEGYBYAFOLDER"
      },
      "directive": {
        "value": "use agnostic logics",
        "key": "DIRECTIVE21#USE_AGNOSTIC_LOGICS#DIRECTIVE"
      },
      "atStrategy": {
        "value": "@agnosticLogics",
        "key": "DIRECTIVE21#USE_AGNOSTIC_LOGICS#ATSTRATEGY"
      }
    },
    "use server components": {
      "use server logics": {
        "value": "Prime Server Logics, being logic from the server, can safely support Lineal Server Components.",
        "key": "DIRECTIVE21#USE_SERVER_COMPONENTS#USE_SERVER_LOGICS"
      },
      "use client logics": {
        "value": "Prime Client Logics should never leak to the server.",
        "key": "DIRECTIVE21#USE_SERVER_COMPONENTS#USE_CLIENT_LOGICS"
      },
      "use agnostic logics": {
        "value": "Prime Agnostic Logics can run safely on the server just like they can on the client.",
        "key": "DIRECTIVE21#USE_SERVER_COMPONENTS#USE_AGNOSTIC_LOGICS"
      },
      "use server components": {
        "value": "Lineal Server Components can compose with one another, now that thanks to the inclusion of Agnostic Components they are actual Server Components.",
        "key": "DIRECTIVE21#USE_SERVER_COMPONENTS#USE_SERVER_COMPONENTS"
      },
      "use client components": {
        "value": "Lineal Client Components can be nested inside Lineal Server Components to create client boundaries when the root of the application is planted on the server.",
        "key": "DIRECTIVE21#USE_SERVER_COMPONENTS#USE_CLIENT_COMPONENTS"
      },
      "use agnostic components": {
        "value": "Lineal Agnostic Components can render safely on the server just like they can on the client.",
        "key": "DIRECTIVE21#USE_SERVER_COMPONENTS#USE_AGNOSTIC_COMPONENTS"
      },
      "use server functions": {
        "value": "(Special) Server Functions can be passed to imported Client Components within Lineal Server Components Modules, even though indeed Lineal Server Components Modules and Lineal Server Components can make their own Server Functions through inline `'use server'` directives.",
        "key": "DIRECTIVE21#USE_SERVER_COMPONENTS#USE_SERVER_FUNCTIONS"
      },
      "use client contexts": {
        "value": "(Special) Client Contexts Components can be nested inside Lineal Server Components to wrap some of the tree with client state accessible through child Client Components, and to pass through Server Components when the root of the application is planted on the server.",
        "key": "DIRECTIVE21#USE_SERVER_COMPONENTS#USE_CLIENT_CONTEXTS"
      },
      "use agnostic conditions": {
        "value": "(Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can render safely on the server just like they can on the client.",
        "key": "DIRECTIVE21#USE_SERVER_COMPONENTS#USE_AGNOSTIC_CONDITIONS"
      },
      "kinds": {
        "value": "Lineal Server Components",
        "key": "DIRECTIVE21#USE_SERVER_COMPONENTS#KINDS"
      },
      "kindsComma": {
        "value": "Lineal Server Components,",
        "key": "DIRECTIVE21#USE_SERVER_COMPONENTS#KINDSCOMMA"
      },
      "kindsPeriod": {
        "value": "Lineal Server Components.",
        "key": "DIRECTIVE21#USE_SERVER_COMPONENTS#KINDSPERIOD"
      },
      "kindsSimple": {
        "value": "Server Components",
        "key": "DIRECTIVE21#USE_SERVER_COMPONENTS#KINDSSIMPLE"
      },
      "module": {
        "value": "Lineal Server Components Module",
        "key": "DIRECTIVE21#USE_SERVER_COMPONENTS#MODULE"
      },
      "moduleSimple": {
        "value": "Server Components Module",
        "key": "DIRECTIVE21#USE_SERVER_COMPONENTS#MODULESIMPLE"
      },
      "importingAModule": {
        "value": "...Importing a Lineal Server Components Module.",
        "key": "DIRECTIVE21#USE_SERVER_COMPONENTS#IMPORTINGAMODULE"
      },
      "importingByAFolder": {
        "value": "...Importing a Lineal Server Components Module by a folder.",
        "key": "DIRECTIVE21#USE_SERVER_COMPONENTS#IMPORTINGBYAFOLDER"
      },
      "importingViaStrategy": {
        "value": "...Importing Lineal Server Components via Special Agnostic Strategy.",
        "key": "DIRECTIVE21#USE_SERVER_COMPONENTS#IMPORTINGVIASTRATEGY"
      },
      "importingViaStrategyByAFolder": {
        "value": "...Importing Lineal Server Components via Special Agnostic Strategy by a folder.",
        "key": "DIRECTIVE21#USE_SERVER_COMPONENTS#IMPORTINGVIASTRATEGYBYAFOLDER"
      },
      "directive": {
        "value": "use server components",
        "key": "DIRECTIVE21#USE_SERVER_COMPONENTS#DIRECTIVE"
      },
      "atStrategy": {
        "value": "@serverComponents",
        "key": "DIRECTIVE21#USE_SERVER_COMPONENTS#ATSTRATEGY"
      }
    },
    "use client components": {
      "use server logics": {
        "value": "Prime Server Logics should never leak to the client.",
        "key": "DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_SERVER_LOGICS"
      },
      "use client logics": {
        "value": "Prime Client Logics, being logic from the client, can safely support Lineal Client Components, like any Client Components.",
        "key": "DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_CLIENT_LOGICS"
      },
      "use agnostic logics": {
        "value": "Prime Agnostic Logics can run safely on the client just like they can on the server.",
        "key": "DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_AGNOSTIC_LOGICS"
      },
      "use server components": {
        "value": "Lineal Server Components cannot be the children of Lineal Client Components.",
        "key": "DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_SERVER_COMPONENTS"
      },
      "use client components": {
        "value": "Lineal Client Components can compose with one another.",
        "key": "DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_CLIENT_COMPONENTS"
      },
      "use agnostic components": {
        "value": "Lineal Agnostic Components can render safely on the client just like they can on the server.",
        "key": "DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_AGNOSTIC_COMPONENTS"
      },
      "use server functions": {
        "value": "(Special) Server Functions can be specifically triggered by Client Components.",
        "key": "DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_SERVER_FUNCTIONS"
      },
      "use client contexts": {
        "value": "(Special) Client Contexts Components can effectively become Lineal and only render their children on the client via this mechanism since, by a Client Contexts Component being the child of a Lineal Client Component, the Client Contexts Component's children become the grandchildren of an ancestor Lineal Client Component, enforcing them to render exclusively on the client.",
        "key": "DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_CLIENT_CONTEXTS"
      },
      "use agnostic conditions": {
        "value": "(Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can render safely on the client just like they can on the server.",
        "key": "DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_AGNOSTIC_CONDITIONS"
      },
      "kinds": {
        "value": "Lineal Client Components",
        "key": "DIRECTIVE21#USE_CLIENT_COMPONENTS#KINDS"
      },
      "kindsComma": {
        "value": "Lineal Client Components,",
        "key": "DIRECTIVE21#USE_CLIENT_COMPONENTS#KINDSCOMMA"
      },
      "kindsPeriod": {
        "value": "Lineal Client Components.",
        "key": "DIRECTIVE21#USE_CLIENT_COMPONENTS#KINDSPERIOD"
      },
      "kindsSimple": {
        "value": "Client Components",
        "key": "DIRECTIVE21#USE_CLIENT_COMPONENTS#KINDSSIMPLE"
      },
      "module": {
        "value": "Lineal Client Components Module",
        "key": "DIRECTIVE21#USE_CLIENT_COMPONENTS#MODULE"
      },
      "modulePeriod": {
        "value": "Lineal Client Components Module.",
        "key": "DIRECTIVE21#USE_CLIENT_COMPONENTS#MODULEPERIOD"
      },
      "moduleSimple": {
        "value": "Client Components Module",
        "key": "DIRECTIVE21#USE_CLIENT_COMPONENTS#MODULESIMPLE"
      },
      "importingAModule": {
        "value": "...Importing a Lineal Client Components Module.",
        "key": "DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGAMODULE"
      },
      "importingByAFolder": {
        "value": "...Importing a Lineal Client Components Module by a folder.",
        "key": "DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGBYAFOLDER"
      },
      "importingViaStrategy": {
        "value": "...Importing Lineal Client Components via Special Agnostic Strategy.",
        "key": "DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGVIASTRATEGY"
      },
      "importingViaStrategyByAFolder": {
        "value": "...Importing Lineal Client Components via Special Agnostic Strategy by a folder.",
        "key": "DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGVIASTRATEGYBYAFOLDER"
      },
      "directive": {
        "value": "use client components",
        "key": "DIRECTIVE21#USE_CLIENT_COMPONENTS#DIRECTIVE"
      },
      "atStrategy": {
        "value": "@clientComponents",
        "key": "DIRECTIVE21#USE_CLIENT_COMPONENTS#ATSTRATEGY"
      }
    },
    "use agnostic components": {
      "use server logics": {
        "value": "Prime Server Logics cannot run on both the server and the client.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_SERVER_LOGICS"
      },
      "use client logics": {
        "value": "Prime Client Logics cannot run on both the server and the client.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_LOGICS"
      },
      "use agnostic logics": {
        "value": "Prime Agnostic Logics, being environment-agnostic logic, can safely support any Agnostic Components.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_AGNOSTIC_LOGICS"
      },
      "use server components": {
        "value": "Lineal Server Components, unlike Lineal Client Components, cannot make silos of their own once on the opposing environment (the client in this case), and therefore cannot be executed from the client, making them unable to execute agnostically from both the server and the client.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_SERVER_COMPONENTS"
      },
      "use client components": {
        "value": "Lineal Client Components can be nested inside Lineal Agnostic Components to create client boundaries when the root of the application is planted on the server.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_COMPONENTS"
      },
      "use agnostic components": {
        "value": "Lineal Agnostic Components can compose with one another.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_AGNOSTIC_COMPONENTS"
      },
      "use server functions": {
        "value": "(Special) Server Functions can be passed to Client Components as props when Client Components are also legally imported into Agnostic Components Modules.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_SERVER_FUNCTIONS"
      },
      "use client contexts": {
        "value": "(Special) Client Contexts Components can be nested inside Lineal Agnostic Components to wrap some of the tree with client state accessible through child Client Components, and to pass through Server Components — if still on the Server Tree — when the root of the application is planted on the server.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_CONTEXTS"
      },
      "use agnostic conditions": {
        "value": "(Special) Agnostic Conditions Components can compose with Lineal Agnostic Components as if they were Lineal Agnostic Components themselves, making them a necessary mechanism for Lineal Server Components to be nested in any Agnostic Components.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_AGNOSTIC_CONDITIONS"
      },
      "kinds": {
        "value": "Lineal Agnostic Components",
        "key": "DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#KINDS"
      },
      "kindsComma": {
        "value": "Lineal Agnostic Components,",
        "key": "DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#KINDSCOMMA"
      },
      "kindsPeriod": {
        "value": "Lineal Agnostic Components.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#KINDSPERIOD"
      },
      "kindsSimple": {
        "value": "Agnostic Components",
        "key": "DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#KINDSSIMPLE"
      },
      "module": {
        "value": "Lineal Agnostic Components Module",
        "key": "DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#MODULE"
      },
      "moduleSimple": {
        "value": "Agnostic Components Module",
        "key": "DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#MODULESIMPLE"
      },
      "importingAModule": {
        "value": "...Importing a Lineal Agnostic Components Module.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGAMODULE"
      },
      "importingByAFolder": {
        "value": "...Importing a Lineal Agnostic Components Module by a folder.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGBYAFOLDER"
      },
      "importingViaStrategy": {
        "value": "...Importing Lineal Agnostic Components via Special Agnostic Strategy.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGVIASTRATEGY"
      },
      "importingViaStrategyByAFolder": {
        "value": "...Importing Lineal Agnostic Components via Special Agnostic Strategy by a folder.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGVIASTRATEGYBYAFOLDER"
      },
      "directive": {
        "value": "use agnostic components",
        "key": "DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#DIRECTIVE"
      },
      "atStrategy": {
        "value": "@agnosticComponents",
        "key": "DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#ATSTRATEGY"
      }
    },
    "use server functions": {
      "use server logics": {
        "value": "Prime Server Logics, being logic from the server, can safely support (Special) Server Functions.",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_SERVER_LOGICS"
      },
      "use client logics": {
        "value": "Prime Client Logics should never leak to the server.",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_CLIENT_LOGICS"
      },
      "use agnostic logics": {
        "value": "Prime Agnostic Logics can run safely on the server just like they can on the client.",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_LOGICS"
      },
      "use server components": {
        "value": "Lineal Server Components aren't allowed because (Special) Server Functions have no business working with React Components.",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_SERVER_COMPONENTS"
      },
      "use client components": {
        "value": "Lineal Client Components aren't allowed because (Special) Server Functions have no business working with React Components.",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_CLIENT_COMPONENTS"
      },
      "use agnostic components": {
        "value": "Lineal Agnostic Components aren't allowed because (Special) Server Functions have no business working with React Components.",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_COMPONENTS"
      },
      "use server functions": {
        "value": "(Special) Server Functions, even though they don't need to import one another and the same results can be generated via Prime Server Logics for the outcome of a single Server Function, can still compose with one another. (Perhaps a preferrable use case for this has been found or could be found either today or in the future.)",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_SERVER_FUNCTIONS"
      },
      "use client contexts": {
        "value": "(Special) Client Contexts Components aren't allowed because (Special) Server Functions have no business working with React Components.",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_CLIENT_CONTEXTS"
      },
      "use agnostic conditions": {
        "value": "(Special) Agnostic Conditions Components aren't allowed because (Special) Server Functions have no business working with React Components.",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_CONDITIONS"
      },
      "kinds": {
        "value": "Special Server Functions",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#KINDS"
      },
      "kindsComma": {
        "value": "Special Server Functions,",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#KINDSCOMMA"
      },
      "kindsPeriod": {
        "value": "Special Server Functions.",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#KINDSPERIOD"
      },
      "kindsSimple": {
        "value": "Server Functions",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#KINDSSIMPLE"
      },
      "module": {
        "value": "Special Server Functions Module",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#MODULE"
      },
      "moduleSimple": {
        "value": "Server Functions Module",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#MODULESIMPLE"
      },
      "specials": {
        "value": "(Special) Server Functions",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#SPECIALS"
      },
      "specialsComma": {
        "value": "(Special) Server Functions,",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#SPECIALSCOMMA"
      },
      "specialsPeriod": {
        "value": "(Special) Server Functions.",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#SPECIALSPERIOD"
      },
      "importingAModule": {
        "value": "...Importing a Special Server Functions Module.",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#IMPORTINGAMODULE"
      },
      "importingByAFolder": {
        "value": "...Importing a Special Server Functions Module by a folder.",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#IMPORTINGBYAFOLDER"
      },
      "importingViaStrategy": {
        "value": "...Importing (Special) Server Functions via Special Agnostic Strategy.",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#IMPORTINGVIASTRATEGY"
      },
      "importingViaStrategyByAFolder": {
        "value": "...Importing (Special) Server Functions via Special Agnostic Strategy by a folder.",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#IMPORTINGVIASTRATEGYBYAFOLDER"
      },
      "directive": {
        "value": "use server functions",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#DIRECTIVE"
      },
      "atStrategy": {
        "value": "@serverFunctions",
        "key": "DIRECTIVE21#USE_SERVER_FUNCTIONS#ATSTRATEGY"
      }
    },
    "use client contexts": {
      "use server logics": {
        "value": "Prime Server Logics should never leak to the client.",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_SERVER_LOGICS"
      },
      "use client logics": {
        "value": "Prime Client Logics, being logic from the client, can safely support (Special) Client Contexts Components, like any Client Components.",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_CLIENT_LOGICS"
      },
      "use agnostic logics": {
        "value": "Prime Agnostic Logics can run safely on the client just like they can on the server.",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_AGNOSTIC_LOGICS"
      },
      "use server components": {
        "value": "Lineal Server Components may only pass through (Special) Client Contexts Components via the children prop within Server Components Modules.",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_SERVER_COMPONENTS"
      },
      "use client components": {
        "value": "Lineal Client Components can create client boundaries within (Special) Client Contexts Components.",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_CLIENT_COMPONENTS"
      },
      "use agnostic components": {
        "value": "Lineal Agnostic Components can render safely on the client just like they can on the server.",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_AGNOSTIC_COMPONENTS"
      },
      "use server functions": {
        "value": "(Special) Server Functions can be specifically triggered by Client Components.",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_SERVER_FUNCTIONS"
      },
      "use client contexts": {
        "value": "(Special) Client Contexts Components can compose with one another.",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_CLIENT_CONTEXTS"
      },
      "use agnostic conditions": {
        "value": "(Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can render safely on the client just like they can on the server, in a mechanism that allows Client Contexts Components to safely and indirectly compose with child Server Components within Client Contexts Modules.",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_AGNOSTIC_CONDITIONS"
      },
      "kinds": {
        "value": "Special Client Contexts",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#KINDS"
      },
      "kindsComma": {
        "value": "Special Client Contexts,",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#KINDSCOMMA"
      },
      "kindsPeriod": {
        "value": "Special Client Contexts.",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#KINDSPERIOD"
      },
      "kindsSimple": {
        "value": "Client Contexts",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#KINDSSIMPLE"
      },
      "module": {
        "value": "Special Client Contexts Module",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#MODULE"
      },
      "moduleSimple": {
        "value": "Client Contexts Module",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#MODULESIMPLE"
      },
      "specials": {
        "value": "(Special) Client Contexts Components",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#SPECIALS"
      },
      "specialsComma": {
        "value": "(Special) Client Contexts Components,",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#SPECIALSCOMMA"
      },
      "specialsPeriod": {
        "value": "(Special) Client Contexts Components.",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#SPECIALSPERIOD"
      },
      "importingAModule": {
        "value": "...Importing a Special Client Contexts Module.",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#IMPORTINGAMODULE"
      },
      "importingByAFolder": {
        "value": "...Importing a Special Client Contexts Module by a folder.",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#IMPORTINGBYAFOLDER"
      },
      "importingViaStrategy": {
        "value": "...Importing (Special) Client Contexts Components via Special Agnostic Strategy.",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#IMPORTINGVIASTRATEGY"
      },
      "importingViaStrategyByAFolder": {
        "value": "...Importing (Special) Client Contexts Components via Special Agnostic Strategy by a folder.",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#IMPORTINGVIASTRATEGYBYAFOLDER"
      },
      "directive": {
        "value": "use client contexts",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#DIRECTIVE"
      },
      "atStrategy": {
        "value": "@clientContexts",
        "key": "DIRECTIVE21#USE_CLIENT_CONTEXTS#ATSTRATEGY"
      }
    },
    "use agnostic conditions": {
      "use server logics": {
        "value": "Prime Server Logics cannot run on both the server and the client.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_SERVER_LOGICS"
      },
      "use client logics": {
        "value": "Prime Client Logics cannot run on both the server and the client.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_CLIENT_LOGICS"
      },
      "use agnostic logics": {
        "value": "Prime Agnostic Logics, being environment-agnostic logic, can safely support any Agnostic Components, including (Special) Agnostic Conditions Components. (In this case this is necessary for the import of the `conditionAgnosticComponent` function needed to make Agnostic Conditions Components.)",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_AGNOSTIC_LOGICS"
      },
      "use server components": {
        "value": "Lineal Server Components are to be paired as `ComponentForServer` components with `ComponentForClient` components to form (Special) Agnostic Conditions Components.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_SERVER_COMPONENTS"
      },
      "use client components": {
        "value": "Lineal Client Components are to be paired as `ComponentForClient` components with `ComponentForServer` components to form (Special) Agnostic Conditions Components.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_CLIENT_COMPONENTS"
      },
      "use agnostic components": {
        "value": "Lineal Agnostic Components can take the place of `ComponentForServer` and/or `ComponentForClient` components to form (Special) Agnostic Conditions Components.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_AGNOSTIC_COMPONENTS"
      },
      "use server functions": {
        "value": "(Special) Server Functions are not accepted because (Special) Agnostic Conditions Components only take finite, imported components as arguments in their making. As such, assigning props to these components, including Server Functions, is not made within Agnostic Conditions Modules.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_SERVER_FUNCTIONS"
      },
      "use client contexts": {
        "value": "(Special) Client Contexts Components cannot be used as component arguments for (Special) Agnostic Conditions Components since they only take Lineal Components as arguments in their making.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_CLIENT_CONTEXTS"
      },
      "use agnostic conditions": {
        "value": "(Special) Agnostic Conditions Components, despite not being Lineal Components themselves, output components that can only be Lineal and compatible with their attributed rendering environments, making them acceptable arguments in the making of Agnostic Conditions Components.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_AGNOSTIC_CONDITIONS"
      },
      "kinds": {
        "value": "Special Agnostic Conditions",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#KINDS"
      },
      "kindsComma": {
        "value": "Special Agnostic Conditions,",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#KINDSCOMMA"
      },
      "kindsPeriod": {
        "value": "Special Agnostic Conditions.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#KINDSPERIOD"
      },
      "kindsSimple": {
        "value": "Agnostic Conditions",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#KINDSSIMPLE"
      },
      "module": {
        "value": "Special Agnostic Conditions Module",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#MODULE"
      },
      "moduleSimple": {
        "value": "Agnostic Conditions Module",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#MODULESIMPLE"
      },
      "specials": {
        "value": "(Special) Agnostic Conditions Components",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#SPECIALS"
      },
      "specialsComma": {
        "value": "(Special) Agnostic Conditions Components,",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#SPECIALSCOMMA"
      },
      "specialsPeriod": {
        "value": "(Special) Agnostic Conditions Components.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#SPECIALSPERIOD"
      },
      "importingAModule": {
        "value": "...Importing a Special Agnostic Conditions Module.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#IMPORTINGAMODULE"
      },
      "importingByAFolder": {
        "value": "...Importing a Special Agnostic Conditions Module by a folder.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#IMPORTINGBYAFOLDER"
      },
      "importingViaStrategy": {
        "value": "...Importing (Special) Agnostic Conditions Components via Special Agnostic Strategy.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#IMPORTINGVIASTRATEGY"
      },
      "importingViaStrategyByAFolder": {
        "value": "...Importing (Special) Agnostic Conditions Components via Special Agnostic Strategy by a folder.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#IMPORTINGVIASTRATEGYBYAFOLDER"
      },
      "directive": {
        "value": "use agnostic conditions",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#DIRECTIVE"
      },
      "atStrategy": {
        "value": "@agnosticConditions",
        "key": "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#ATSTRATEGY"
      }
    },
    "use agnostic strategies": {
      "valid": {
        "value": "(Special) Agnostic Strategies Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a `'use agnostic strategies'` importFileCommentedDirective.)",
        "key": "DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#VALID"
      },
      "kinds": {
        "value": "Special Agnostic Strategies",
        "key": "DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#KINDS"
      },
      "kindsComma": {
        "value": "Special Agnostic Strategies,",
        "key": "DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#KINDSCOMMA"
      },
      "kindsPeriod": {
        "value": "Special Agnostic Strategies.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#KINDSPERIOD"
      },
      "kindsSimple": {
        "value": "Agnostic Strategies",
        "key": "DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#KINDSSIMPLE"
      },
      "module": {
        "value": "Special Agnostic Strategies Module",
        "key": "DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#MODULE"
      },
      "moduleSimple": {
        "value": "Agnostic Strategies Module",
        "key": "DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#MODULESIMPLE"
      },
      "specials": {
        "value": "(Special) Agnostic Strategies",
        "key": "DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#SPECIALS"
      },
      "specialsComma": {
        "value": "(Special) Agnostic Strategies,",
        "key": "DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#SPECIALSCOMMA"
      },
      "specialsPeriod": {
        "value": "(Special) Agnostic Strategies.",
        "key": "DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#SPECIALSPERIOD"
      },
      "directive": {
        "value": "use agnostic strategies",
        "key": "DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#DIRECTIVE"
      }
    },
    "forAliasVariables": {
      "serverNeverClient": {
        "value": "Prime Server Logics should never leak to the client.",
        "key": "DIRECTIVE21#FORALIASVARIABLES#SERVERNEVERCLIENT"
      },
      "clientNeverServer": {
        "value": "Prime Client Logics should never leak to the server.",
        "key": "DIRECTIVE21#FORALIASVARIABLES#CLIENTNEVERSERVER"
      },
      "agnosticCanServerClient": {
        "value": "Prime Agnostic Logics can run safely on the server just like they can on the client.",
        "key": "DIRECTIVE21#FORALIASVARIABLES#AGNOSTICCANSERVERCLIENT"
      },
      "agnosticCanClientServer": {
        "value": "Prime Agnostic Logics can run safely on the client just like they can on the server.",
        "key": "DIRECTIVE21#FORALIASVARIABLES#AGNOSTICCANCLIENTSERVER"
      },
      "serverFunctionsNoComponents": {
        "value": "(Special) Server Functions have no business working with React Components.",
        "key": "DIRECTIVE21#FORALIASVARIABLES#SERVERFUNCTIONSNOCOMPONENTS"
      },
      "serverLogicsCantBoth": {
        "value": "Prime Server Logics cannot run on both the server and the client.",
        "key": "DIRECTIVE21#FORALIASVARIABLES#SERVERLOGICSCANTBOTH"
      },
      "clientLogicsCantBoth": {
        "value": "Prime Client Logics cannot run on both the server and the client.",
        "key": "DIRECTIVE21#FORALIASVARIABLES#CLIENTLOGICSCANTBOTH"
      },
      "agnosticComponentsCanAny": {
        "value": "Lineal Agnostic Components can be composed with any Prime Environment Logics agnostically, as long as the Prime Environment Logics Module, by convention, does not export React components.",
        "key": "DIRECTIVE21#FORALIASVARIABLES#AGNOSTICCOMPONENTSCANANY"
      },
      "agnosticComponentsRenderAny": {
        "value": "Lineal Agnostic Components can render safely on the client just like they can on the server.",
        "key": "DIRECTIVE21#FORALIASVARIABLES#AGNOSTICCOMPONENTSRENDERANY"
      },
      "serverFunctionsClient": {
        "value": "(Special) Server Functions can be specifically triggered by Client Components.",
        "key": "DIRECTIVE21#FORALIASVARIABLES#SERVERFUNCTIONSCLIENT"
      }
    },
    "forComposedVariables": {
      "shouldNeverClient": {
        "value": "should never leak to the client.",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#SHOULDNEVERCLIENT"
      },
      "shouldNeverServer": {
        "value": "should never leak to the server.",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#SHOULDNEVERSERVER"
      },
      "runServerLikeClient": {
        "value": "can run safely on the server just like they can on the client.",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#RUNSERVERLIKECLIENT"
      },
      "runClientLikeServer": {
        "value": "can run safely on the client just like they can on the server.",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#RUNCLIENTLIKESERVER"
      },
      "canComposeOneAnother": {
        "value": "can compose with one another.",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#CANCOMPOSEONEANOTHER"
      },
      "cantTinkeredServer": {
        "value": "cannot be tinkered with on the server.",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#CANTTINKEREDSERVER"
      },
      "cantTinkeredClient": {
        "value": "cannot be tinkered with on the client.",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#CANTTINKEREDCLIENT"
      },
      "cantTinkeredBoth": {
        "value": "cannot be tinkered with on both the server and the client.",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#CANTTINKEREDBOTH"
      },
      "serverComponentsOKLogics": {
        "value": "Lineal Server Components are OK to be composed with Prime Server Logics as long as the Prime Server Logics Module,",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#SERVERCOMPONENTSOKLOGICS"
      },
      "likeAnyClientComponentsComma": {
        "value": "like any Client Components,",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#LIKEANYCLIENTCOMPONENTSCOMMA"
      },
      "likeAnyClientComponentsPeriod": {
        "value": "like any Client Components.",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#LIKEANYCLIENTCOMPONENTSPERIOD"
      },
      "anyAgnosticComponentsPeriod": {
        "value": "any Agnostic Components.",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#ANYAGNOSTICCOMPONENTSPERIOD"
      },
      "okClientLogics": {
        "value": "are OK to be composed with Prime Client Logics as long as the Prime Client Logics Module,",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#OKCLIENTLOGICS"
      },
      "agnosticComponentsCanAny": {
        "value": "Lineal Agnostic Components can be composed with any Prime Environment Logics agnostically, as long as the Prime Environment Logics Module,",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#AGNOSTICCOMPONENTSCANANY"
      },
      "asIfLinealAgnostic": {
        "value": "as if they were Lineal Agnostic Components themselves,",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#ASIFLINEALAGNOSTIC"
      },
      "canAnyPrimeLogics": {
        "value": "can be composed with any Prime Environment Logics agnostically, as long as the Prime Environment Logics Module,",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#CANANYPRIMELOGICS"
      },
      "noExportComponents": {
        "value": "by convention, does not export React components.",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#NOEXPORTCOMPONENTS"
      },
      "cantServerClient": {
        "value": "cannot run on both the server and the client.",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#CANTSERVERCLIENT"
      },
      "arentAllowed": {
        "value": "aren't allowed because",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#ARENTALLOWED"
      },
      "allowedBecause": {
        "value": "allowed, because",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#ALLOWEDBECAUSE"
      },
      "beingLogicServer": {
        "value": "being logic from the server,",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#BEINGLOGICSERVER"
      },
      "beingLogicClient": {
        "value": "being logic from the client,",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#BEINGLOGICCLIENT"
      },
      "beingLogicAgnostic": {
        "value": "being environment-agnostic logic,",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#BEINGLOGICAGNOSTIC"
      },
      "canSafelySupport": {
        "value": "can safely support",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#CANSAFELYSUPPORT"
      },
      "canBeNestedInside": {
        "value": "can be nested inside",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#CANBENESTEDINSIDE"
      },
      "toCreateBoundaries": {
        "value": "to create client boundaries",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#TOCREATEBOUNDARIES"
      },
      "towrapTree": {
        "value": "to wrap some of the tree with client state accessible through child Client Components, and to pass through Server Components",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#TOWRAPTREE"
      },
      "ifStillOnServerTree": {
        "value": "— if still on the Server Tree —",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#IFSTILLONSERVERTREE"
      },
      "whenRootOnServer": {
        "value": "when the root of the application is planted on the server.",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#WHENROOTONSERVER"
      },
      "canClientComponents": {
        "value": "can be specifically triggered by Client Components.",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#CANCLIENTCOMPONENTS"
      },
      "renderServerLikeClient": {
        "value": "can render safely on the server just like they can on the client.",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#RENDERSERVERLIKECLIENT"
      },
      "renderClientLikeServer": {
        "value": "can render safely on the client just like they can on the server.",
        "key": "DIRECTIVE21#FORCOMPOSEDVARIABLES#RENDERCLIENTLIKESERVER"
      }
    }
  }
}