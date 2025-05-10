import {
  reExportNotSameMessageId,
  importBreaksEffectiveImportRulesMessageId,
  useServerJSXMessageId,
} from "../../../_commons/constants/bases.js";
import {
  currentFileEffectiveDirective,
  importedFileEffectiveDirective,
  effectiveDirectiveMessage,
  specificViolationMessage,
} from "../constants/bases.js";

import {
  currentFileFlow,
  importsFlow,
  reExportsFlow,
} from "../utilities/flows.js";

/** @type {import('@typescript-eslint/utils').TSESLint.RuleModule<typeof reExportNotSameMessageId | typeof importBreaksEffectiveImportRulesMessageId | typeof useServerJSXMessageId, []>} */
const rule = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Enforces import rules based on the file's effective directive. ",
    },
    schema: [],
    messages: {
      [reExportNotSameMessageId]: `The effective directives of this file and this re-export are dissimilar.
Here, "{{ ${currentFileEffectiveDirective} }}" and "{{ ${importedFileEffectiveDirective} }}" are not the same. Please re-export only from modules that have the same effective directive as the current module. `,
      [importBreaksEffectiveImportRulesMessageId]: `{{ ${effectiveDirectiveMessage} }} 
In this case, {{ ${specificViolationMessage} }} `,
      [useServerJSXMessageId]: `Modules marked with the 'use server' directive are not allowed to have JSX file extensions.  
Indeed, Server Functions Modules have no business exporting JSX. `,
    },
  },
  create: (context) => {
    const result = currentFileFlow(context);

    if (result.skip) return {};
    const { currentFileEffectiveDirective } = result;

    return {
      ImportDeclaration: (node) =>
        importsFlow(context, node, currentFileEffectiveDirective),
      ExportNamedDeclaration: (node) =>
        reExportsFlow(context, node, currentFileEffectiveDirective),
      ExportAllDeclaration: (node) =>
        reExportsFlow(context, node, currentFileEffectiveDirective),
    };
  },
};

export default rule; // enforce-effective-directives-import-rules
