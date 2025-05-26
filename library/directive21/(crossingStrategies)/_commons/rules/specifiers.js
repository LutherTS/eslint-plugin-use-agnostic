import {
  USE_SERVER_LOGICS,
  USE_CLIENT_LOGICS,
  USE_AGNOSTIC_LOGICS,
  USE_SERVER_COMPONENTS,
  USE_CLIENT_COMPONENTS,
  USE_AGNOSTIC_COMPONENTS,
  USE_SERVER_FUNCTIONS,
  USE_CLIENT_CONTEXTS,
  USE_AGNOSTIC_CONDITIONS,
} from "../../../_commons/constants/bases.js";

// The name of the rule is `verify-specifier-import-export-same-strategy`.
// This is the verify-specifier-import-export-same-strategy rule.

/** @type {import('@typescript-eslint/utils').TSESLint.RuleModule<string, []>} */ // string for now
const rule = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Verifies that a specifier's import and export have the same strategy. ",
    },
    schema: [
      {
        // importingFileCommentedDirective
        enum: [
          USE_SERVER_LOGICS,
          USE_CLIENT_LOGICS,
          USE_AGNOSTIC_LOGICS,
          USE_SERVER_COMPONENTS,
          USE_CLIENT_COMPONENTS,
          USE_AGNOSTIC_COMPONENTS,
          USE_SERVER_FUNCTIONS,
          USE_CLIENT_CONTEXTS,
          USE_AGNOSTIC_CONDITIONS,
        ],
      },
      {
        // importedName
        type: "string",
      },
    ],
    messages: {},
  },
  create: (context) => {
    return {
      // for hobbyists
      ExportSpecifier: (node) => {
        console.log("verify-specifier-import-export-same-strategy");
        console.log(node.exported.name);
        console.log(node);
      },
      // for people who drink their coffee black and their ASTs recursive
      ExportNamedDeclaration: (node) => {
        console.log("verify-specifier-import-export-same-strategy");
        console.log("ExportNamedDeclaration");
        console.log(node);
      },
    };
  },
};

export default rule; // verify-specifier-import-export-same-strategy
