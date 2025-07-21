// comment variables for JSDoc definitions
export const jSDocComments = Object.freeze({
  // library/_commons/utilities/helpers.js
  basePath:
    "The absolute import path with its extension yet resolved." /* $COMMENT#JSDOC#BASEPATH */,
  currentDir:
    "The directory of the file containing the import, such as from `path.dirname(context.filename)`." /* $COMMENT#JSDOC#CURRENTDIR */,
  importPath:
    "The import specifier (e.g., `@/components/Button` or `./utils`), such as one from the current node." /* $COMMENT#JSDOC#IMPORTPATH */,
  cwd: "The project root, such as from `context.cwd`." /* $COMMENT#JSDOC#CWD */,
  fileResolvedPath:
    "The resolved path of the file." /* $COMMENT#JSDOC#FILERESOLVEDPATH */,
  aContext: "An ESLint rule's `context` object." /* $COMMENT#JSDOC#ACONTEXT */,
  resolvedDirectives_blockedImports:
    "The blocked imports object, either for agnostic20 or for directive21." /* $COMMENT#JSDOC#RESOLVEDDIRECTIVES_BLOCKEDIMPORTS */,
  currentFileResolvedDirective:
    'The current file\'s "resolved" directive.' /* $COMMENT#JSDOC#CURRENTFILERESOLVEDDIRECTIVE */,
  importedFileResolvedDirective:
    'The imported file\'s "resolved" directive.' /* $COMMENT#JSDOC#IMPORTEDFILERESOLVEDDIRECTIVE */,
  theCurrentFileResolvedDirective:
    'The "resolved" directive of the "resolved" module.' /* $COMMENT#JSDOC#THECURRENTFILERESOLVEDDIRECTIVE */,
  // library/ ... /config.js
  plugin: "The use-agnostic ESLint plugin itself." /* $COMMENT#JSDOC#PLUGIN */,
  // library/agnostic20/_commons/constants/bases.js
  currentFileEffectiveDirective:
    "The current file's effective directive." /* $COMMENT#JSDOC#CURRENTFILEEFFECTIVEDIRECTIVE */,
  importedFileEffectiveDirective:
    "The imported file's effective directive." /* $COMMENT#JSDOC#IMPORTEDFILEEFFECTIVEDIRECTIVE */,
  // library/ ... /flows.js
  context: "The ESLint rule's `context` object." /* $COMMENT#JSDOC#CONTEXT */,
  node: "The ESLint `node` of the rule's current traversal." /* $COMMENT#JSDOC#NODE */,
  // library/ ... /helpers.js
  extension:
    "The JavaScript (TypeScript) extension of the file." /* $COMMENT#JSDOC#EXTENSION */,
  resolvedPath:
    "The resolved path of the imported module." /* $COMMENT#JSDOC#RESOLVEDPATH */,
  // library/agnostic20/_commons/utilities/helpers.js
  ast: "The module's AST (Abstract Syntax Tree)." /* $COMMENT#JSDOC#AST */,
  directiveA20:
    'The directive as written on top of the file (`"no directive"` if no valid directive).' /* $COMMENT#JSDOC#DIRECTIVEA20 */,
  effectiveDirective:
    "The effective directive of the effective module." /* $COMMENT#JSDOC#EFFECTIVEDIRECTIVE */,
  serverByDefault:
    "`null` denotes a server-by-default module, ideally a Server Module." /* $COMMENT#JSDOC#SERVERBYDEFAULT */,
  useServer:
    "`'use server'` denotes a Server Functions Module." /* $COMMENT#JSDOC#USESERVER */,
  useClient:
    "`'use client'` denotes a Client Module." /* $COMMENT#JSDOC#USECLIENT */,
  useAgnostic:
    "`'use agnostic'` denotes an Agnostic Module (formerly Shared Module)." /* $COMMENT#JSDOC#USEAGNOSTIC */,
  useServerLogics20:
    "`'use server logics'` denotes a Server Logics Module." /* $COMMENT#JSDOC#USESERVERLOGICS20 */,
  useServerComponents20:
    "`'use server components'` denotes a Server Components Module." /* $COMMENT#JSDOC#USESERVERCOMPONENTS20 */,
  useServerFunctions20:
    "`'use server functions'` denotes a Server Functions Module." /* $COMMENT#JSDOC#USESERVERFUNCTIONS20 */,
  useClientLogics20:
    "`'use client logics'` denotes a Client Logics Module." /* $COMMENT#JSDOC#USECLIENTLOGICS20 */,
  useClientComponents20:
    "`'use client components'` denotes a Client Components Module." /* $COMMENT#JSDOC#USECLIENTCOMPONENTS20 */,
  useAgnosticLogics20:
    "`'use agnostic logics'` denotes an Agnostic Logics Module." /* $COMMENT#JSDOC#USEAGNOSTICLOGICS20 */,
  useAgnosticComponents20:
    "`'use agnostic components'` denotes an Agnostic Components Module." /* $COMMENT#JSDOC#USEAGNOSTICCOMPONENTS20 */,
  // library/directive21/_commons/constants/bases.js
  currentFileCommentedDirective:
    "The current file's commented directive." /* $COMMENT#JSDOC#CURRENTFILECOMMENTEDDIRECTIVE */,
  importedFileCommentedDirective:
    "The imported file's commented directive." /* $COMMENT#JSDOC#IMPORTEDFILECOMMENTEDDIRECTIVE */,
  // library/directive21/_commons/utilities/helpers.js
  string: "The original string." /* $COMMENT#JSDOC#STRING */,
  sourceCode: "The ESLint SourceCode object." /* $COMMENT#JSDOC#SOURCECODE */,
  directiveD21:
    "The commented directive as written on top of the file (cannot be `null` at that stage)." /* $COMMENT#JSDOC#DIRECTIVED21 */,
  commentedDirective:
    "The commented directive of the commented module." /* $COMMENT#JSDOC#COMMENTEDDIRECTIVE */,
  useServerLogics21:
    "`'use server logics'`, `\"use server logics\"` denoting a Server Logics Module." /* $COMMENT#JSDOC#USESERVERLOGICS21 */,
  useClientLogics21:
    "`'use client logics'`, `\"use client logics\"` denoting a Client Logics Module." /* $COMMENT#JSDOC#USECLIENTLOGICS21 */,
  useAgnosticLogics21:
    "`'use agnostic logics'`, `\"use agnostic logics\"` denoting an Agnostic Logics Module." /* $COMMENT#JSDOC#USEAGNOSTICLOGICS21 */,
  useServerComponents21:
    "`'use server components'`, `\"use server components\"` denoting a Server Components Module." /* $COMMENT#JSDOC#USESERVERCOMPONENTS21 */,
  useClientComponents21:
    "`'use client components'`, `\"use client components\"` denoting a Client Components Module." /* $COMMENT#JSDOC#USECLIENTCOMPONENTS21 */,
  useAgnosticComponents21:
    "`'use agnostic components'`, `\"use agnostic components\"` denoting an Agnostic Components Module." /* $COMMENT#JSDOC#USEAGNOSTICCOMPONENTS21 */,
  useServerFunctions21:
    "`'use server functions'`, `\"use server functions\"` denoting a Server Functions Module." /* $COMMENT#JSDOC#USESERVERFUNCTIONS21 */,
  useClientContexts21:
    "`'use client contexts'`, `\"use client contexts\"` denoting a Client Contexts Module." /* $COMMENT#JSDOC#USECLIENTCONTEXTS21 */,
  useAgnosticConditions21:
    "`'use agnostic conditions'`, `\"use agnostic conditions\"` denoting an Agnostic Conditions Module." /* $COMMENT#JSDOC#USEAGNOSTICCONDITIONS21 */,
  useAgnosticStrategies21:
    "`'use agnostic strategies'`, `\"use agnostic strategies\"` denoting an Agnostic Strategies Module." /* $COMMENT#JSDOC#USEAGNOSTICSTRATEGIES21 */,
  useServerLogicsExtensionRule:
    "`'use server logics'`: Server Logics Modules do NOT export JSX." /* $COMMENT#JSDOC#USESERVERLOGICSEXTENSIONRULE */,
  useClientLogicsExtensionRule:
    "`'use client logics'`: Client Logics Modules do NOT export JSX." /* $COMMENT#JSDOC#USECLIENTLOGICSEXTENSIONRULE */,
  useAgnosticLogicsExtensionRule:
    "`'use agnostic logics'`: Agnostic Logics Modules do NOT export JSX." /* $COMMENT#JSDOC#USEAGNOSTICLOGICSEXTENSIONRULE */,
  useServerComponentsExtensionRule:
    "`'use server components'`: Server Components Modules ONLY export JSX." /* $COMMENT#JSDOC#USESERVERCOMPONENTSEXTENSIONRULE */,
  useClientComponentsExtensionRule:
    "`'use client components'`: Client Components Modules ONLY export JSX." /* $COMMENT#JSDOC#USECLIENTCOMPONENTSEXTENSIONRULE */,
  useAgnosticComponentsExtensionRule:
    "`'use agnostic components'`: Agnostic Components Modules ONLY export JSX." /* $COMMENT#JSDOC#USEAGNOSTICCOMPONENTSEXTENSIONRULE */,
  useServerFunctionsExtensionRule:
    "`'use server functions'`: Server Functions Modules do NOT export JSX." /* $COMMENT#JSDOC#USESERVERFUNCTIONSEXTENSIONRULE */,
  useClientContextsExtensionRule:
    "`'use client contexts'`: Client Contexts Modules ONLY export JSX." /* $COMMENT#JSDOC#USECLIENTCONTEXTSEXTENSIONRULE */,
  useAgnosticConditionsExtensionRule:
    "`'use agnostic conditions'`: Agnostic Conditions Modules ONLY export JSX." /* $COMMENT#JSDOC#USEAGNOSTICCONDITIONSEXTENSIONRULE */,
  useAgnosticStrategiesExtensionRule:
    "`'use agnostic strategies'`: Agnostic Strategies Modules may export JSX." /* $COMMENT#JSDOC#USEAGNOSTICSTRATEGIESEXTENSIONRULE */,
  // tests/_commons/utilities/helpers.js
  folderPath: "The provided directory." /* $COMMENT#JSDOC#FOLDERPATH */,
  allFiles:
    "The accumulator array of file paths. Defaults to an empty array on the initial call, and is passed through each recursive call to be mutated and collect results." /* $COMMENT#JSDOC#ALLFILES */,
  javaScriptErrorsLength:
    "The number of errors expected on JavaScript files." /* $COMMENT#JSDOC#JAVASCRIPTERRORSLENGTH */,
  typeScriptErrorsLength:
    "The number of errors expected on TypeScript files." /* $COMMENT#JSDOC#TYPESCRIPTERRORSLENGTH */,
  messageId:
    "The messageId of the errors expected." /* $COMMENT#JSDOC#MESSAGEID */,
});

// comment variables for tests flavor texts
export const testsComments = Object.freeze({
  thatsA: "That's a" /* $COMMENT#TESTS#THATSA */,
  thatsAn: "That's an" /* $COMMENT#TESTS#THATSAN */,
  importingA: "...Importing a" /* $COMMENT#TESTS#IMPORTINGA */,
  importingAn: "...Importing an" /* $COMMENT#TESTS#IMPORTINGAN */,
  withExtension: "with extension" /* $COMMENT#TESTS#WITHEXTENSION */,
  withExtensionParentheses:
    "(with extension)." /* $COMMENT#TESTS#WITHEXTENSIONPARENTHESES */,
  byFolder: "by a folder." /* $COMMENT#TESTS#BYFOLDER */,
  importing: "...Importing" /* $COMMENT#TESTS#IMPORTING */,
  viaStrategy: "via Special Agnostic Strategy" /* $COMMENT#TESTS#VIASTRATEGY */,
  viaStrategyPeriod:
    "via Special Agnostic Strategy." /* $COMMENT#TESTS#VIASTRATEGYPERIOD */,
  viaAlias: "Via alias." /* $COMMENT#TESTS#VIAALIAS */,
  viaBaseUrl: "Via baseUrl." /* $COMMENT#TESTS#VIABASEURL */,
  valid: "Valid." /* $COMMENT#TESTS#VALID */,
  invalid: "Invalid." /* $COMMENT#TESTS#INVALID */,
});
