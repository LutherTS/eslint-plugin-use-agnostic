import {
  reExportNotSameMessageId,
  importBreaksCommentedImportRulesMessageId,
  noCommentedDirective,
  commentedDirectiveVerificationFailed,
  importNotStrategized,
  exportNotStrategized,
} from "../../../_commons/constants/bases.js";
import {
  currentFileCommentedDirective,
  importedFileCommentedDirective,
  commentedDirectiveMessage,
  specificViolationMessage,
  specificFailure,
} from "../constants/bases.js";

import {
  currentFileFlow,
  importsFlow,
  allExportsFlow,
} from "../utilities/flows.js";

/**
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').Rule} Rule
 */

/** @type {Rule} */
const rule = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Enforces import rules based on the file's commented directive. ",
    },
    schema: [],
    messages: {
      [reExportNotSameMessageId]: `The commented directives of this file (or Strategy) and this re-export are dissimilar.
Here, "{{ ${currentFileCommentedDirective} }}" and "{{ ${importedFileCommentedDirective} }}" are not the same. Please re-export only from modules that have the same commented directive as the current module. `,
      [importBreaksCommentedImportRulesMessageId]: `{{ ${commentedDirectiveMessage} }} 
In this case, {{ ${specificViolationMessage} }} `,
      [noCommentedDirective]: `No commented directive detected.
All targeted modules need to be marked with their respective directives (\`// "use server logics"\`, etc.) for the purpose of this linting rule, evaluated from the first JavaScript comment starting on the first column within the first three lines of a module. `,
      [commentedDirectiveVerificationFailed]: `The commented directive could not pass verification due to an incompatible combination with its file extension.
In this context, {{ ${specificFailure} }} `,
      [importNotStrategized]: `Imports from Agnostic Strategies Modules must be strategized (\`/* @serverLogics */\`, etc.).  
Please include a Strategy that corresponds to the kind of module this import would be mapped to. `,
      [exportNotStrategized]: `Exports from Agnostic Strategies Modules must be strategized (\`/* @serverLogics */\`, etc.).  
Please include a Strategy that corresponds to the kind of module this export would be mapped to. `,
    },
  },
  create: (context) => {
    const result = currentFileFlow(context);

    if (result.skip) return {};
    const { verifiedCommentedDirective } = result;

    return {
      ImportDeclaration: (node) =>
        importsFlow(context, node, verifiedCommentedDirective),
      ImportExpression: (node) =>
        importsFlow(context, node, verifiedCommentedDirective),
      ExportNamedDeclaration: (node) =>
        allExportsFlow(context, node, verifiedCommentedDirective),
      ExportAllDeclaration: (node) =>
        allExportsFlow(context, node, verifiedCommentedDirective),
      ExportDefaultDeclaration: (node) =>
        allExportsFlow(context, node, verifiedCommentedDirective),
    };
  },
};

export default rule; // enforce-commented-directives-import-rules
