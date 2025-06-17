import {
  agnostic20ConfigName,
  directive21ConfigName,
} from "./library/_commons/constants/bases.js";

import { testsComments } from "./jscomments/_commons/constants/bases.js";
import { agnostic20Comments } from "./jscomments/agnostic20/constants/bases.js";
import { directive21Comments } from "./jscomments/directive21/constants/bases.js";

const config = Object.freeze({
  comment: "comment", // $COMMENT#COMMENT in code, "comment" on hover when resolved by the VSCode extension JSComments
  ...testsComments,
  // _commons/utilities/helpers.js
  resolvedDirectives_blockedImports: `The blocked imports object, either for agnostic20 or for directive21.`,
  currentFileResolvedDirective: `The current file's "resolved" directive.`,
  importedFileResolvedDirective: `The imported file's "resolved" directive.`,
  // config.js
  forPlugin: "for the use-agnostic ESLint plugin.",
  plugin: "The use-agnostic ESLint plugin itself.",
  asKeyAsValue: "as a key and its config as its value.",
  // agnostic20/_commons/constants/bases.js
  currentFileEffectiveDirective: "The current file's effective directive.",
  importedFileEffectiveDirective: "The imported file's effective directive.",
  // flows.js
  context: "The ESLint rule's `context` object.",
  node: "The ESLint `node` of the rule's current traversal.",
  // helpers.js
  extension: "The JavaScript (TypeScript) extension of the file.",
  resolvedPath: "The resolved path of the imported module.",
  // agnostic20/_commons/utilities/helpers.js
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
  [agnostic20ConfigName]: agnostic20Comments,
  [directive21ConfigName]: directive21Comments,
});

export default config;

/* Notes
Aims of the VSCode extension JSComments: 
- automatically capitalizes keys, so here: 
  - config.comment would return $COMMENT#COMMENT
- automatically chain keys within keys, so here
  - config["agnostic20"] would return $COMMENT#AGNOSTIC20#*
  - config["directive21"] would return $COMMENT#DIRECTIVE21#*
- this way, instead doing a find-replace on a big documentation comment, the comment stays within the config and only the config placeholder is found and replaced for the same results 
...
#JSDOC#
*/
