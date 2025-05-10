import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

import {
  strategiesPluginName,
  verifySpecifierImportRuleName,
  verifyDefaultImportRuleName,
  verifyNamespaceImportRuleName,
} from "../../_commons/constants/bases.js";
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
} from "../_commons/constants/bases.js";

import strategies from "./_commons/plugins/strategies.js";

// The name of the config is `crossingStrategies`.
// This is the crossingStrategies config.

/**
 * Makes the crossingStrategies config for specifiers, defaults, and namespaces.
 * @param {"specifiers" | "defaults" | "namespaces"} type The type of the returned config, either "specifiers", "defaults", or "namespaces".
 * @param {USE_SERVER_LOGICS | USE_CLIENT_LOGICS | USE_AGNOSTIC_LOGICS | USE_SERVER_COMPONENTS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_CONTEXTS | USE_AGNOSTIC_CONDITIONS} option1 importingFileCommentedDirective as option 1. (The strategy on the importing file.)
 * @param {string | null} option2 importedName as option2 (The specifier's name on the importing file. Undefined when unnecessary.)
 */
export const makeCrossingStrategiesConfig = (type, option1, option2) => {
  let ruleName = "";

  switch (type) {
    case "specifiers":
      ruleName = verifySpecifierImportRuleName;
      break;
    case "defaults":
      ruleName = verifyDefaultImportRuleName;
      break;
    case "namespaces":
      ruleName = verifyNamespaceImportRuleName;
      break;
    default:
      console.error(
        "Type should only be 'specifiers', 'defaults', or 'namespaces'. This error should never be printed."
      );
      return [];
  }

  return defineConfig([
    {
      plugins: {
        [strategiesPluginName]: strategies,
      },
      rules: {
        [`${strategiesPluginName}/${ruleName}`]: ["warn", option1, option2],
      },
      languageOptions: {
        // for compatibility with .ts and .tsx
        parser: tseslint.parser,
      },
    },
  ]);
};
