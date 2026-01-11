import {
  reExportNotSameMessageId,
  importBreaksCommentedImportRulesMessageId,
  noCommentedDirectiveMessageId,
  commentedDirectiveVerificationFailedMessageId,
  commentedDirectiveReactDirectiveFailedMessageId,
  // importNotStrategizedMessageId,
  // exportNotStrategizedMessageId,
  cantChainImportAcrossEnvironmentsMessageId,
  forbiddenChildrenMessageId,
  missingChildrenMessageId,
  noRenderPropMessageId,
} from "../../../_commons/constants/bases.js";
import {
  currentFileCommentedDirective,
  importedFileCommentedDirective,
  commentedDirectiveMessage,
  specificViolationMessage,
  specificFailure,
  verifiedCommentedDirective,
  expectedReactDirectiveAsText,
  currentFileEnvironment,
  importedFileEnvironment,
} from "../constants/bases.js";

import {
  currentFileFlow,
  importsFlow,
  allExportsFlow,
  importsFlowRequire,
  functionDeclarationFlow,
  jsxElementFlow,
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
      [noCommentedDirectiveMessageId]: `No commented directive detected.
All targeted modules need to be marked with their respective directives (\`// "use server logics"\`, etc.) for the purpose of this linting rule, evaluated from the first JavaScript comment starting on the first column within the first three lines of a module. `,
      [commentedDirectiveVerificationFailedMessageId]: `The commented directive could not pass verification due to an incompatible combination with its file extension.
In this context, {{ ${specificFailure} }} `,
      [commentedDirectiveReactDirectiveFailedMessageId]: `Commented directive "{{ ${verifiedCommentedDirective} }}" requires {{ ${expectedReactDirectiveAsText} }} directive in order to communicate accordingly with the React architecture at hand. `,
      //       [importNotStrategizedMessageId]: `Imports from Agnostic Strategies Modules must be strategized (\`/* @serverLogics */\`, etc.).
      // Please include a Strategy that corresponds to the kind of module this import would be mapped to. `,
      //       [exportNotStrategizedMessageId]: `Exports from Agnostic Strategies Modules must be strategized (\`/* @serverLogics */\`, etc.).
      // Please include a Strategy that corresponds to the kind of module this export would be mapped to. `,
      [cantChainImportAcrossEnvironmentsMessageId]: `Because imports are actually references instead of modules across environments, it is not possible to chain-import between the {{ ${currentFileEnvironment} }} environment and the {{ ${importedFileEnvironment} }} environment. In these cases, only direct imports apply. `,

      [forbiddenChildrenMessageId]:
        "Client Lineals Components (Lineal Client Components) must be child-free, meaning they must not declare a `children` prop. ",
      [missingChildrenMessageId]:
        "Client Contexts Components must be children-bearing, meaning they must explicitly declare a `children` prop. ",
      [noRenderPropMessageId]:
        'Render props should only be used inside (Lineal) Client Components Modules in order to avoid "Functions are not valid as a child of Client Components" errors. ',
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
      CallExpression: (node) =>
        importsFlowRequire(context, node, verifiedCommentedDirective),

      FunctionDeclaration: (node) =>
        functionDeclarationFlow(context, node, verifiedCommentedDirective),
      JSXElement: (node) =>
        jsxElementFlow(context, node, verifiedCommentedDirective),
    };
  },
};

export default rule; // enforce-commented-directives-import-rules
