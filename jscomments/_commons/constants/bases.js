export const jSDocComments = Object.freeze({
  // library/_commons/utilities/helpers.js
  basePath: "The absolute import path with extension yet resolved.",
  currentDir:
    "The directory of the file containing the import (from `path.dirname(context.filename)`).",
  importPath:
    "The import specifier (e.g., `@/components/Button` or `./utils`), from the current node.",
  cwd: "The project root (from `context.cwd`).",
  fileResolvedPath: "The resolved path of the file.",
  aContext: "An ESLint rule's `context` object.",
  resolvedDirectives_blockedImports: `The blocked imports object, either for agnostic20 or for directive21.`,
  currentFileResolvedDirective: `The current file's "resolved" directive.`,
  importedFileResolvedDirective: `The imported file's "resolved" directive.`,
  theCurrentFileResolvedDirective: `The "resolved" directive of the "resolved" module.`,
  // library/ ... /config.js
  plugin: "The use-agnostic ESLint plugin itself.",
  // library/agnostic20/_commons/constants/bases.js
  currentFileEffectiveDirective: "The current file's effective directive.",
  importedFileEffectiveDirective: "The imported file's effective directive.",
  // library/ ... /flows.js
  context: "The ESLint rule's `context` object.",
  node: "The ESLint `node` of the rule's current traversal.",
  // library/ ... /helpers.js
  extension: "The JavaScript (TypeScript) extension of the file.",
  resolvedPath: "The resolved path of the imported module.",
  // library/agnostic20/_commons/utilities/helpers.js
  serverByDefault: `\`null\` denotes a server-by-default module, ideally a Server Module.`,
  useServer: `\`'use server'\` denotes a Server Functions Module.`,
  useClient: `\`'use client'\` denotes a Client Module.`,
  useAgnostic: `\`'use agnostic'\` denotes an Agnostic Module (formerly Shared Module).`,
  useServerLogics20: `\`'use server logics'\` denotes a Server Logics Module.`,
  useServerComponents20: `\`'use server components'\` denotes a Server Components Module.`,
  useServerFunctions20: `\`'use server functions'\` denotes a Server Functions Module.`,
  useClientLogics20: `\`'use client logics'\` denotes a Client Logics Module.`,
  useClientComponents20: `\`'use client components'\` denotes a Client Components Module.`,
  useAgnosticLogics20: `\`'use agnostic logics'\` denotes an Agnostic Logics Module.`,
  useAgnosticComponents20: `\`'use agnostic components'\` denotes an Agnostic Components Module.`,
  // library/directive21/_commons/constants/bases.js
  currentFileCommentedDirective: "The current file's commented directive.",
  importedFileCommentedDirective: "The imported file's commented directive.",
  // library/directive21/_commons/utilities/helpers.js
  string: "The original string.",
  sourceCode: "The ESLint SourceCode object.",
  useServerLogics21: `\`'use server logics'\`, \`"use server logics"\` denoting a Server Logics Module.`,
  useClientLogics21: `\`'use client logics'\`, \`"use client logics"\` denoting a Client Logics Module.`,
  useAgnosticLogics21: `\`'use agnostic logics'\`, \`"use agnostic logics"\` denoting an Agnostic Logics Module.`,
  useServerComponents21: `\`'use server components'\`, \`"use server components"\` denoting a Server Components Module.`,
  useClientComponents21: `\`'use client components'\`, \`"use client components"\` denoting a Client Components Module.`,
  useAgnosticComponents21: `\`'use agnostic components'\`, \`"use agnostic components"\` denoting an Agnostic Components Module.`,
  useServerFunctions21: `\`'use server functions'\`, \`"use server functions"\` denoting a Server Functions Module.`,
  useClientContexts21: `\`'use client contexts'\`, \`"use client contexts"\` denoting a Client Contexts Module.`,
  useAgnosticConditions21: `\`'use agnostic conditions'\`, \`"use agnostic conditions"\` denoting an Agnostic Conditions Module.`,
  useAgnosticStrategies21: `\`'use agnostic strategies'\`, \`"use agnostic strategies"\` denoting an Agnostic Strategies Module.`,
  useServerLogicsExtensionRule: `\`'use server logics'\`: Server Logics Modules do NOT export JSX.`,
  useClientLogicsExtensionRule: `\`'use client logics'\`: Client Logics Modules do NOT export JSX.`,
  useAgnosticLogicsExtensionRule: `\`'use agnostic logics'\`: Agnostic Logics Modules do NOT export JSX.`,
  useServerComponentsExtensionRule: `\`'use server components'\`: Server Components Modules ONLY export JSX.`,
  useClientComponentsExtensionRule: `\`'use client components'\`: Client Components Modules ONLY export JSX.`,
  useAgnosticComponentsExtensionRule: `\`'use agnostic components'\`: Agnostic Components Modules ONLY export JSX.`,
  useServerFunctionsExtensionRule: `\`'use server functions'\`: Server Functions Modules do NOT export JSX.`,
  useClientContextsExtensionRule: `\`'use client contexts'\`: Client Contexts Modules ONLY export JSX.`,
  useAgnosticConditionsExtensionRule: `\`'use agnostic conditions'\`: Agnostic Conditions Modules ONLY export JSX.`,
  useAgnosticStrategiesExtensionRule: `\`'use agnostic strategies'\`: Agnostic Strategies Modules may export JSX.`,
  // tests/_commons/utilities/helpers.js
  folderPath: "The provided directory.",
  allFiles:
    "The accumulator array of file paths. Defaults to an empty array on the initial call, and is passed through each recursive call to be mutated and collect results.",
});

export const testsComments = Object.freeze({
  thatsA: "That's a",
  thatsAn: "That's an",
  importingA: "...Importing a",
  withExtension: "with extension",
  withExtensionParentheses: "(with extension).",
  byFolder: "by a folder.",
  importing: "...Importing",
  viaStrategy: "via Special Agnostic Strategy",
  viaStrategyPeriod: "via Special Agnostic Strategy.",
  viaAlias: "Via alias.",
  viaBaseUrl: "Via baseUrl.",
  valid: "Valid.",
  invalid: "Invalid.",
});
