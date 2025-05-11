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

// The name of the rule is `verify-default-import-export-same-strategy`.
// This is the verify-default-import-export-same-strategy rule.

/** @type {import('@typescript-eslint/utils').TSESLint.RuleModule<string, []>} */ // string for now
const rule = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Verifies that a default import and export have the same strategy. ",
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
        // importedName (because stemming from the same makeConfig)
        type: "undefined",
      },
    ],
    messages: {},
  },
  create: (context) => {
    return {
      ExportDefaultDeclaration: (node) => {
        console.log("verify-default-import-export-same-strategy");
        console.log(node);
      },
    };
  },
};

export default rule; // verify-default-import-export-same-strategy
