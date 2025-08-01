import { forAliasVariables } from "./alias-variables.js";
import { forComposedVariables } from "./composed-variables.js";

export const jsDocComments = Object.freeze({
  definitions: Object.freeze({
    makeTestFiles:
      "Makes the paths of the files to be linted for agnostic20 and directive21." /* $COMMENT#JSDOC#DEFINITIONS#MAKETESTFILES */,
    highlightFirstLineOfCode:
      "Gets the coordinates for the first line of code of a file." /* $COMMENT#JSDOC#DEFINITIONS#HIGHLIGHTFIRSTLINEOFCODE */,
    isImportBlocked:
      "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RETURNSDECIDING $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RESOLVED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVEINCOMPATIBLE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RESOLVED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVEPERIOD" /* $COMMENT#JSDOC#DEFINITIONS#ISIMPORTBLOCKED */,
    makeIntroForSpecificViolationMessage:
      "Makes the intro for each specific import rule violation messages." /* $COMMENT#JSDOC#DEFINITIONS#MAKEINTROFORSPECIFICVIOLATIONMESSAGE */,
    makeMessageFromCurrentFileResolvedDirective:
      "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#LISTSINMESSAGE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RESOLVED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#MODULESINCOMPATIBLE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RESOLVED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#MODULEBASEDON $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RESOLVED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVEPERIOD" /* $COMMENT#JSDOC#DEFINITIONS#MAKEMESSAGEFROMCURRENTFILERESOLVEDDIRECTIVE */,
    findSpecificViolationMessage:
      "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#FINDTHEMESSAGE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RESOLVED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RULESBASEDON $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RDBIPERIOD" /* $COMMENT#JSDOC#DEFINITIONS#FINDSPECIFICVIOLATIONMESSAGE */,
    agnostic20: Object.freeze({
      makeAgnostic20Config:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#MAKESTHE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#AGNOSTIC20 $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#CONFIGFORPLUGIN" /* $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#MAKEAGNOSTIC20CONFIG */,
      makeBlockedImport:
        "Makes a blockedImport object for the identified blocked import at hand." /* $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#MAKEBLOCKEDIMPORT */,
      makeBlockedImportSuggestingUseAgnostic:
        "Makes a blockedImport object for the identified blocked import at hand enhanced with the suggestion to use the `'use agnostic'` directive." /* $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#MAKEBLOCKEDIMPORTSUGGESTINGUSEAGNOSTIC */,
      getDirectiveFromModule:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#GETSDIRECTIVEOF $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#AMODULE" /* $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#GETDIRECTIVEFROMMODULE */,
      getDirectiveFromCurrentModule:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#GETSDIRECTIVEOF $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#CURRENTMODULE" /* $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#GETDIRECTIVEFROMCURRENTMODULE */,
      getDirectiveFromImportedModule:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#GETSDIRECTIVEOF $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#IMPORTEDMODULE" /* $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#GETDIRECTIVEFROMIMPORTEDMODULE */,
      getEffectiveDirective:
        "Gets the effective directive of a module, based on the combination of its directive (or lack thereof) and its extension (depending on whether it ends with 'x' for JSX)." /* $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#GETEFFECTIVEDIRECTIVE */,
      isImportBlocked:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RETURNSDECIDING $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#EFFECTIVE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVEINCOMPATIBLE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#EFFECTIVE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVEPERIOD" /* $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#ISIMPORTBLOCKED */,
      makeMessageFromCurrentFileEffectiveDirective:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#LISTSINMESSAGE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#EFFECTIVE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#MODULESINCOMPATIBLE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#EFFECTIVE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#MODULEBASEDON $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#EFFECTIVE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVEPERIOD" /* $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#MAKEMESSAGEFROMCURRENTFILEEFFECTIVEDIRECTIVE */,
      findSpecificViolationMessage:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#FINDTHEMESSAGE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#EFFECTIVE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RULESBASEDON $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#EDBIPERIOD" /* $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#FINDSPECIFICVIOLATIONMESSAGE */,
      currentFileFlow:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#FLOWTHATBEGINS $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#EFFECTIVE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#OFCURRENTFILE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#EFFECTIVE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVES $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#OFFILESITIMPORTS" /* $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#CURRENTFILEFLOW */,
      importedFileFlow:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#FLOWIMPORTREEXPORT $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#EFFECTIVE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVEPERIOD" /* $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#IMPORTEDFILEFLOW */,
      importsFlow:
        "JSDOC#FORALIASVARIABLES#IMPORTSFLOW" /* $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#IMPORTSFLOW */,
      reExportsFlow:
        "The full flow for export traversals, shared between `ExportNamedDeclaration` and `ExportAllDeclaration`, to ensure same effective directive re-exports." /* $COMMENT#JSDOC#DEFINITIONS#AGNOSTIC20#REEXPORTSFLOW */,
    }),
    directive21: Object.freeze({
      makeDirective21Config:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#MAKESTHE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVE21 $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#CONFIGFORPLUGIN" /* $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#MAKEDIRECTIVE21CONFIG */,
      makeBlockedImport:
        "JSDOC#DEFINITIONS#AGNOSTIC20#MAKEBLOCKEDIMPORT" /* $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#MAKEBLOCKEDIMPORT */,
      detectQuoteType:
        "Detects whether a string is single- or double-quoted." /* $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#DETECTQUOTETYPE */,
      stripSingleQuotes:
        "Removes single quotes from a string known to be single-quoted." /* $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#STRIPSINGLEQUOTES */,
      stripDoubleQuotes:
        "Removes double quotes from a string known to be double-quoted." /* $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#STRIPDOUBLEQUOTES */,
      getCommentedDirectiveFromSourceCode1:
        "Gets the commented directive of a module from its ESLint `SourceCode` object." /* $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE1 */,
      getCommentedDirectiveFromSourceCode2:
        "Accepted directives for the default Directive-First Architecture are (single or double quotes included):" /* $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE2 */,
      getCommentedDirectiveFromCurrentModule1:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#GETCOMMENTEDDIRECTIVE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#CURRENTMODULEPERIOD" /* $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMCURRENTMODULE1 */,
      getCommentedDirectiveFromCurrentModule2:
        "JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE2" /* $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMCURRENTMODULE2 */,
      getCommentedDirectiveFromImportedModule1:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#GETCOMMENTEDDIRECTIVE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#IMPORTEDMODULEPERIOD" /* $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMIMPORTEDMODULE1 */,
      getCommentedDirectiveFromImportedModule2:
        "JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE2" /* $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMIMPORTEDMODULE2 */,
      getVerifiedCommentedDirective:
        "Ensures that a module's commented directive is consistent with its file extension (depending on whether it ends with 'x' for JSX)." /* $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETVERIFIEDCOMMENTEDDIRECTIVE */,
      getStrategizedDirective:
        "Gets the interpreted directive from a specified commented Strategy (such as `@serverLogics`) nested inside the import declaration for an import from an Agnostic Strategies Module." /* $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#GETSTRATEGIZEDDIRECTIVE */,
      addressDirectiveIfAgnosticStrategies:
        'Verifies the current node\'s export strategy if the current commented directive is `"use agnostic strategies"` by reporting `exportNotStrategized` in case an export is not strategized in an Agnostic Strategies Module.' /* $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#ADDRESSDIRECTIVEIFAGNOSTICSTRATEGIES */,
      isImportBlocked:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RETURNSDECIDING $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#COMMENTED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVEINCOMPATIBLE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#COMMENTED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVEPERIOD" /* $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#ISIMPORTBLOCKED */,
      makeMessageFromCurrentFileCommentedDirective:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#LISTSINMESSAGE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#COMMENTED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#MODULESINCOMPATIBLE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#COMMENTED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#MODULEBASEDON $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#COMMENTED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVEPERIOD" /* $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#MAKEMESSAGEFROMCURRENTFILECOMMENTEDDIRECTIVE */,
      findSpecificViolationMessage:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#FINDTHEMESSAGE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#COMMENTED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RULESBASEDON $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#CDBIPERIOD" /* $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#FINDSPECIFICVIOLATIONMESSAGE */,
      currentFileFlow:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#FLOWTHATBEGINS $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#VERIFIEDCOMMENTED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#OFCURRENTFILE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#VERIFIEDCOMMENTED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVES $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#OFFILESITIMPORTS" /* $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#CURRENTFILEFLOW */,
      importedFileFlow:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#FLOWIMPORTREEXPORT $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#COMMENTED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVEPERIOD" /* $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#IMPORTEDFILEFLOW */,
      importsFlow:
        "JSDOC#FORALIASVARIABLES#IMPORTSFLOW" /* $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#IMPORTSFLOW */,
      allExportsFlow:
        "The full flow for export traversals, shared between `ExportNamedDeclaration`, `ExportAllDeclaration`, and `ExportDefaultDeclaration`, to ensure same commented directive re-exports in modules that aren't Agnostic Strategies Modules, and enforce strategized exports specifically in Agnostic Strategies modules." /* $COMMENT#JSDOC#DEFINITIONS#DIRECTIVE21#ALLEXPORTSFLOW */,
    }),
    tests: Object.freeze({
      readFilesRecursively:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#READANYDEPTHS $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTORYPERIOD" /* $COMMENT#JSDOC#DEFINITIONS#TESTS#READFILESRECURSIVELY */,
      readValidFilesRecursively:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#READANYDEPTHS $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#VALIDFILES $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTORYPERIOD" /* $COMMENT#JSDOC#DEFINITIONS#TESTS#READVALIDFILESRECURSIVELY */,
      readInvalidFilesRecursively:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#READANYDEPTHS $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#INVALIDFILES $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTORYPERIOD" /* $COMMENT#JSDOC#DEFINITIONS#TESTS#READINVALIDFILESRECURSIVELY */,
      readInvalidFilesRecursively20:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#READANYDEPTHS $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#INVALIDFILES $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#FORAGNOSTIC20" /* $COMMENT#JSDOC#DEFINITIONS#TESTS#READINVALIDFILESRECURSIVELY20 */,
      readInvalidFilesRecursively21:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#READANYDEPTHS $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#INVALIDFILES $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#FORDIRECTIVE21" /* $COMMENT#JSDOC#DEFINITIONS#TESTS#READINVALIDFILESRECURSIVELY21 */,
    }),
  }),
  params: Object.freeze({
    validPath:
      "The directory for the valid paths." /* $COMMENT#JSDOC#PARAMS#VALIDPATH */,
    invalidPath:
      "The directory for the invalid paths." /* $COMMENT#JSDOC#PARAMS#INVALIDPATH */,
    contextA:
      "An ESLint rule's `context` object." /* $COMMENT#JSDOC#PARAMS#CONTEXTA */,
    contextB:
      "The ESLint rule's `context` object." /* $COMMENT#JSDOC#PARAMS#CONTEXTB */,
    resolvedDirectives_blockedImports:
      "The blocked imports object, either for agnostic20 or for directive21." /* $COMMENT#JSDOC#PARAMS#RESOLVEDDIRECTIVES_BLOCKEDIMPORTS */,
    currentFileResolvedDirectiveA:
      "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#THECURRENTFILE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RESOLVED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVEPERIOD" /* $COMMENT#JSDOC#PARAMS#CURRENTFILERESOLVEDDIRECTIVEA */,
    importedFileResolvedDirective:
      "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#THEIMPORTEDFILE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RESOLVED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVEPERIOD" /* $COMMENT#JSDOC#PARAMS#IMPORTEDFILERESOLVEDDIRECTIVE */,
    currentFileResolvedDirectiveB:
      'The "resolved" directive of the "resolved" module.' /* $COMMENT#JSDOC#PARAMS#CURRENTFILERESOLVEDDIRECTIVEB */,
    plugin:
      "The use-agnostic ESLint plugin itself." /* $COMMENT#JSDOC#PARAMS#PLUGIN */,
    resolvedPath:
      "The resolved path of the imported module." /* $COMMENT#JSDOC#PARAMS#RESOLVEDPATH */,
    extension:
      "The JavaScript (TypeScript) extension of the file." /* $COMMENT#JSDOC#PARAMS#EXTENSION */,
    node: "The ESLint `node` of the rule's current traversal." /* $COMMENT#JSDOC#PARAMS#NODE */,
    agnostic20: Object.freeze({
      currentFileEffectiveDirective:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#THECURRENTFILE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#EFFECTIVE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVEPERIOD" /* $COMMENT#JSDOC#PARAMS#AGNOSTIC20#CURRENTFILEEFFECTIVEDIRECTIVE */,
      importedFileEffectiveDirective:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#THEIMPORTEDFILE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#EFFECTIVE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVEPERIOD" /* $COMMENT#JSDOC#PARAMS#AGNOSTIC20#IMPORTEDFILEEFFECTIVEDIRECTIVE */,
      ast: "The module's AST (Abstract Syntax Tree)." /* $COMMENT#JSDOC#PARAMS#AGNOSTIC20#AST */,
      directive:
        'The directive as written on top of the file (`"no directive"` if no valid directive).' /* $COMMENT#JSDOC#PARAMS#AGNOSTIC20#DIRECTIVE */,
      effectiveDirective:
        "The effective directive of the effective module." /* $COMMENT#JSDOC#PARAMS#AGNOSTIC20#EFFECTIVEDIRECTIVE */,
    }),
    directive21: Object.freeze({
      currentFileCommentedDirective:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#THECURRENTFILE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#COMMENTED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVEPERIOD" /* $COMMENT#JSDOC#PARAMS#DIRECTIVE21#CURRENTFILECOMMENTEDDIRECTIVE */,
      importedFileCommentedDirective:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#THEIMPORTEDFILE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#COMMENTED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVEPERIOD" /* $COMMENT#JSDOC#PARAMS#DIRECTIVE21#IMPORTEDFILECOMMENTEDDIRECTIVE */,
      string:
        "The original string." /* $COMMENT#JSDOC#PARAMS#DIRECTIVE21#STRING */,
      sourceCode:
        "The ESLint SourceCode object." /* $COMMENT#JSDOC#PARAMS#DIRECTIVE21#SOURCECODE */,
      directive:
        "The commented directive as written on top of the file (cannot be `null` at that stage)." /* $COMMENT#JSDOC#PARAMS#DIRECTIVE21#DIRECTIVE */,
      commentedDirective:
        "The commented directive of the commented module." /* $COMMENT#JSDOC#PARAMS#DIRECTIVE21#COMMENTEDDIRECTIVE */,
    }),
    tests: Object.freeze({
      folderPath:
        "The provided directory." /* $COMMENT#JSDOC#PARAMS#TESTS#FOLDERPATH */,
      allFiles:
        "The accumulator array of file paths. Defaults to an empty array on the initial call, and is passed through each recursive call to be mutated and collect results." /* $COMMENT#JSDOC#PARAMS#TESTS#ALLFILES */,
      javaScriptErrorsLength:
        "The number of errors expected on JavaScript files." /* $COMMENT#JSDOC#PARAMS#TESTS#JAVASCRIPTERRORSLENGTH */,
      typeScriptErrorsLength:
        "The number of errors expected on TypeScript files." /* $COMMENT#JSDOC#PARAMS#TESTS#TYPESCRIPTERRORSLENGTH */,
      messageId:
        "The messageId of the errors expected." /* $COMMENT#JSDOC#PARAMS#TESTS#MESSAGEID */,
    }),
  }),
  details: Object.freeze({
    agnostic20: Object.freeze({
      nullDirective:
        "`null` denotes a server-by-default module, ideally a Server Module." /* $COMMENT#JSDOC#DETAILS#AGNOSTIC20#NULLDIRECTIVE */,
      useServer:
        "`'use server'` denotes a Server Functions Module." /* $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USESERVER */,
      useClient:
        "`'use client'` denotes a Client Module." /* $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USECLIENT */,
      useAgnostic:
        "`'use agnostic'` denotes an Agnostic Module (formerly Shared Module)." /* $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USEAGNOSTIC */,
      useServerLogics:
        "`'use server logics'` denotes a Server Logics Module." /* $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USESERVERLOGICS */,
      useServerComponents:
        "`'use server components'` denotes a Server Components Module." /* $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USESERVERCOMPONENTS */,
      useServerFunctions:
        "`'use server functions'` denotes a Server Functions Module." /* $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USESERVERFUNCTIONS */,
      useClientLogics:
        "`'use client logics'` denotes a Client Logics Module." /* $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USECLIENTLOGICS */,
      useClientComponents:
        "`'use client components'` denotes a Client Components Module." /* $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USECLIENTCOMPONENTS */,
      useAgnosticLogics:
        "`'use agnostic logics'` denotes an Agnostic Logics Module." /* $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USEAGNOSTICLOGICS */,
      useAgnosticComponents:
        "`'use agnostic components'` denotes an Agnostic Components Module." /* $COMMENT#JSDOC#DETAILS#AGNOSTIC20#USEAGNOSTICCOMPONENTS */,
    }),
    directive21: Object.freeze({
      useServerLogicsA:
        "`'use server logics'`, `\"use server logics\"` denoting a Server Logics Module." /* $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERLOGICSA */,
      useClientLogicsA:
        "`'use client logics'`, `\"use client logics\"` denoting a Client Logics Module." /* $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTLOGICSA */,
      useAgnosticLogicsA:
        "`'use agnostic logics'`, `\"use agnostic logics\"` denoting an Agnostic Logics Module." /* $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICLOGICSA */,
      useServerComponentsA:
        "`'use server components'`, `\"use server components\"` denoting a Server Components Module." /* $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERCOMPONENTSA */,
      useClientComponentsA:
        "`'use client components'`, `\"use client components\"` denoting a Client Components Module." /* $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTCOMPONENTSA */,
      useAgnosticComponentsA:
        "`'use agnostic components'`, `\"use agnostic components\"` denoting an Agnostic Components Module." /* $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCOMPONENTSA */,
      useServerFunctionsA:
        "`'use server functions'`, `\"use server functions\"` denoting a Server Functions Module." /* $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERFUNCTIONSA */,
      useClientContextsA:
        "`'use client contexts'`, `\"use client contexts\"` denoting a Client Contexts Module." /* $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTCONTEXTSA */,
      useAgnosticConditionsA:
        "`'use agnostic conditions'`, `\"use agnostic conditions\"` denoting an Agnostic Conditions Module." /* $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCONDITIONSA */,
      useAgnosticStrategiesA:
        "`'use agnostic strategies'`, `\"use agnostic strategies\"` denoting an Agnostic Strategies Module." /* $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICSTRATEGIESA */,
      useServerLogicsB:
        "`'use server logics'`: Server Logics Modules do NOT export JSX." /* $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERLOGICSB */,
      useClientLogicsB:
        "`'use client logics'`: Client Logics Modules do NOT export JSX." /* $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTLOGICSB */,
      useAgnosticLogicsB:
        "`'use agnostic logics'`: Agnostic Logics Modules do NOT export JSX." /* $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICLOGICSB */,
      useServerComponentsB:
        "`'use server components'`: Server Components Modules ONLY export JSX." /* $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERCOMPONENTSB */,
      useClientComponentsB:
        "`'use client components'`: Client Components Modules ONLY export JSX." /* $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTCOMPONENTSB */,
      useAgnosticComponentsB:
        "`'use agnostic components'`: Agnostic Components Modules ONLY export JSX." /* $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCOMPONENTSB */,
      useServerFunctionsB:
        "`'use server functions'`: Server Functions Modules do NOT export JSX." /* $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USESERVERFUNCTIONSB */,
      useClientContextsB:
        "`'use client contexts'`: Client Contexts Modules ONLY export JSX." /* $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USECLIENTCONTEXTSB */,
      useAgnosticConditionsB:
        "`'use agnostic conditions'`: Agnostic Conditions Modules ONLY export JSX." /* $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICCONDITIONSB */,
      useAgnosticStrategiesB:
        "`'use agnostic strategies'`: Agnostic Strategies Modules may export JSX." /* $COMMENT#JSDOC#DETAILS#DIRECTIVE21#USEAGNOSTICSTRATEGIESB */,
    }),
  }),
  returns: Object.freeze({
    makeTestFiles:
      "The paths of the files to be linted for agnostic20 and directive21." /* $COMMENT#JSDOC#RETURNS#MAKETESTFILES */,
    highlightFirstLineOfCode:
      "The `context.report` `loc`-compatible coordinates for the first line of code of a file." /* $COMMENT#JSDOC#RETURNS#HIGHLIGHTFIRSTLINEOFCODE */,
    isImportBlocked:
      "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#TRUEIFIMPORTBLOCKED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RESPECTIVE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RDBIPERIOD" /* $COMMENT#JSDOC#RETURNS#ISIMPORTBLOCKED */,
    makeIntroForSpecificViolationMessage:
      "\"[Current file 'resolved' modules] are not allowed to import [imported file 'resolved' modules].\"" /* $COMMENT#JSDOC#RETURNS#MAKEINTROFORSPECIFICVIOLATIONMESSAGE */,
    makeMessageFromCurrentFileResolvedDirective:
      "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#THEMESSAGELISTING $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RESOLVED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#MODULESPERIOD" /* $COMMENT#JSDOC#RETURNS#MAKEMESSAGEFROMCURRENTFILERESOLVEDDIRECTIVE */,
    findSpecificViolationMessage:
      "The corresponding `message`." /* $COMMENT#JSDOC#RETURNS#FINDSPECIFICVIOLATIONMESSAGE */,
    agnostic20: Object.freeze({
      makeAgnostic20Config:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#INITIALTHE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#AGNOSTIC20 $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#CONFIGSNAME" /* $COMMENT#JSDOC#RETURNS#AGNOSTIC20#MAKEAGNOSTIC20CONFIG */,
      makeBlockedImport:
        "The blockedImport object for the identified blocked import at hand." /* $COMMENT#JSDOC#RETURNS#AGNOSTIC20#MAKEBLOCKEDIMPORT */,
      makeBlockedImportSuggestingUseAgnostic:
        "The enhanced blockedImport object with the suggestion to use the `'use agnostic'` directive." /* $COMMENT#JSDOC#RETURNS#AGNOSTIC20#MAKEBLOCKEDIMPORTSUGGESTINGUSEAGNOSTIC */,
      getDirectiveFromModule:
        "The directive, or lack thereof via `null`. The lack of a directive is considered server-by-default." /* $COMMENT#JSDOC#RETURNS#AGNOSTIC20#GETDIRECTIVEFROMMODULE */,
      getDirectiveFromCurrentModule:
        "JSDOC#RETURNS#AGNOSTIC20#GETDIRECTIVEFROMMODULE" /* $COMMENT#JSDOC#RETURNS#AGNOSTIC20#GETDIRECTIVEFROMCURRENTMODULE */,
      getDirectiveFromImportedModule:
        "JSDOC#RETURNS#AGNOSTIC20#GETDIRECTIVEFROMMODULE" /* $COMMENT#JSDOC#RETURNS#AGNOSTIC20#GETDIRECTIVEFROMIMPORTEDMODULE */,
      getEffectiveDirective:
        "The effective directive, from which imports rules are applied." /* $COMMENT#JSDOC#RETURNS#AGNOSTIC20#GETEFFECTIVEDIRECTIVE */,
      isImportBlocked:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#TRUEIFIMPORTBLOCKED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#EDBIPERIOD" /* $COMMENT#JSDOC#RETURNS#AGNOSTIC20#ISIMPORTBLOCKED */,
      makeMessageFromCurrentFileEffectiveDirective:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#THEMESSAGELISTING $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#EFFECTIVE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#MODULESPERIOD" /* $COMMENT#JSDOC#RETURNS#AGNOSTIC20#MAKEMESSAGEFROMCURRENTFILEEFFECTIVEDIRECTIVE */,
      findSpecificViolationMessage:
        "JSDOC#RETURNS#FINDSPECIFICVIOLATIONMESSAGE" /* $COMMENT#JSDOC#RETURNS#AGNOSTIC20#FINDSPECIFICVIOLATIONMESSAGE */,
      currentFileFlow:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#EITHERSKIPTRUENONNULL $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#CFEDPERIOD" /* $COMMENT#JSDOC#RETURNS#AGNOSTIC20#CURRENTFILEFLOW */,
      importedFileFlow:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#EITHERSKIPTRUENONNULL $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#IFEDPERIOD" /* $COMMENT#JSDOC#RETURNS#AGNOSTIC20#IMPORTEDFILEFLOW */,
      importsFlow:
        "JSDOC#FORALIASVARIABLES#FLOWRETURNSEARLY" /* $COMMENT#JSDOC#RETURNS#AGNOSTIC20#IMPORTSFLOW */,
      reExportsFlow:
        "JSDOC#FORALIASVARIABLES#FLOWRETURNSEARLY" /* $COMMENT#JSDOC#RETURNS#AGNOSTIC20#REEXPORTSFLOW */,
    }),
    directive21: Object.freeze({
      makeDirective21Config:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#INITIALTHE $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVE21 $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#CONFIGSNAME" /* $COMMENT#JSDOC#RETURNS#DIRECTIVE21#MAKEDIRECTIVE21CONFIG */,
      makeBlockedImport:
        "JSDOC#RETURNS#AGNOSTIC20#MAKEBLOCKEDIMPORT" /* $COMMENT#JSDOC#RETURNS#DIRECTIVE21#MAKEBLOCKEDIMPORT */,
      detectQuoteType:
        "`true` if single-quoted, `false` if double-quoted, `null` if neither." /* $COMMENT#JSDOC#RETURNS#DIRECTIVE21#DETECTQUOTETYPE */,
      stripSingleQuotes:
        "The string with quotes removed." /* $COMMENT#JSDOC#RETURNS#DIRECTIVE21#STRIPSINGLEQUOTES */,
      stripDoubleQuotes:
        "JSDOC#RETURNS#DIRECTIVE21#STRIPSINGLEQUOTES" /* $COMMENT#JSDOC#RETURNS#DIRECTIVE21#STRIPDOUBLEQUOTES */,
      getCommentedDirectiveFromSourceCode:
        "The commented directive, or lack thereof via `null`. Given the strictness of this architecture, the lack of a directive is considered a mistake. (Though rules may provide the opportunity to declare a default, and configs with preset defaults may become provided.)" /* $COMMENT#JSDOC#RETURNS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE */,
      getCommentedDirectiveFromCurrentModule:
        "JSDOC#RETURNS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE" /* $COMMENT#JSDOC#RETURNS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMCURRENTMODULE */,
      getCommentedDirectiveFromImportedModule:
        "JSDOC#RETURNS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMSOURCECODE" /* $COMMENT#JSDOC#RETURNS#DIRECTIVE21#GETCOMMENTEDDIRECTIVEFROMIMPORTEDMODULE */,
      getVerifiedCommentedDirective:
        "The verified commented directive, from which imports rules are applied. Returns `null` if the verification failed, upon which an error will be reported depending on the commented directive, since the error logic here is strictly binary." /* $COMMENT#JSDOC#RETURNS#DIRECTIVE21#GETVERIFIEDCOMMENTEDDIRECTIVE */,
      getStrategizedDirective:
        "The interpreted directive, a.k.a. strategized directive, or lack thereof via `null`." /* $COMMENT#JSDOC#RETURNS#DIRECTIVE21#GETSTRATEGIZEDDIRECTIVE */,
      addressDirectiveIfAgnosticStrategies:
        "The commented directive, the addressed strategy (as a commented directive) or `null` in case of failure." /* $COMMENT#JSDOC#RETURNS#DIRECTIVE21#ADDRESSDIRECTIVEIFAGNOSTICSTRATEGIES */,
      isImportBlocked:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#TRUEIFIMPORTBLOCKED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#CDBIPERIOD" /* $COMMENT#JSDOC#RETURNS#DIRECTIVE21#ISIMPORTBLOCKED */,
      makeMessageFromCurrentFileCommentedDirective:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#THEMESSAGELISTING $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#COMMENTED $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#MODULESPERIOD" /* $COMMENT#JSDOC#RETURNS#DIRECTIVE21#MAKEMESSAGEFROMCURRENTFILECOMMENTEDDIRECTIVE */,
      findSpecificViolationMessage:
        "JSDOC#RETURNS#FINDSPECIFICVIOLATIONMESSAGE" /* $COMMENT#JSDOC#RETURNS#DIRECTIVE21#FINDSPECIFICVIOLATIONMESSAGE */,
      currentFileFlow:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#EITHERSKIPTRUENONNULL $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#VCDPERIOD" /* $COMMENT#JSDOC#RETURNS#DIRECTIVE21#CURRENTFILEFLOW */,
      importedFileFlow:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#EITHERSKIPTRUENONNULL $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#IFCDPERIOD" /* $COMMENT#JSDOC#RETURNS#DIRECTIVE21#IMPORTEDFILEFLOW */,
      importsFlow:
        "JSDOC#FORALIASVARIABLES#FLOWRETURNSEARLY" /* $COMMENT#JSDOC#RETURNS#DIRECTIVE21#IMPORTSFLOW */,
      allExportsFlow:
        "JSDOC#FORALIASVARIABLES#FLOWRETURNSEARLY" /* $COMMENT#JSDOC#RETURNS#DIRECTIVE21#ALLEXPORTSFLOW */,
    }),
    tests: Object.freeze({
      readFilesRecursively:
        "All files at any depths within the provided directory." /* $COMMENT#JSDOC#RETURNS#TESTS#READFILESRECURSIVELY */,
      readValidFilesRecursively:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RULETESTERARRAY $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#VALIDFILES $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#WITHNEEDEDPROPERTIESPERIOD" /* $COMMENT#JSDOC#RETURNS#TESTS#READVALIDFILESRECURSIVELY */,
      readInvalidFilesRecursively:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RULETESTERARRAY $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#INVALIDFILES $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#WITHNEEDEDPROPERTIESPERIOD" /* $COMMENT#JSDOC#RETURNS#TESTS#READINVALIDFILESRECURSIVELY */,
      readInvalidFilesRecursively20:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RULETESTERARRAY $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#INVALIDFILES $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#WITHNEEDEDPROPERTIES $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#FORAGNOSTIC20" /* $COMMENT#JSDOC#RETURNS#TESTS#READINVALIDFILESRECURSIVELY20 */,
      readInvalidFilesRecursively21:
        "$COMMENT#JSDOC#FORCOMPOSEDVARIABLES#RULETESTERARRAY $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#INVALIDFILES $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#WITHNEEDEDPROPERTIES $COMMENT#JSDOC#FORCOMPOSEDVARIABLES#FORDIRECTIVE21" /* $COMMENT#JSDOC#RETURNS#TESTS#READINVALIDFILESRECURSIVELY21 */,
    }),
  }),
  forAliasVariables,
  forComposedVariables,
});
