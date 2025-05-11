import {
  verifySpecifierImportRuleName,
  verifyDefaultImportRuleName,
  verifyNamespaceImportRuleName,
} from "../../../../_commons/constants/bases.js";

import verifySpecifierImportExportSameStrategy from "../rules/specifiers.js";
import verifyDefaultImportExportSameStrategy from "../rules/defaults.js";
import verifyNamespaceImportExportSomeStrategy from "../rules/namespaces.js";

// The name of the plugin is `strategies`.
// This is the strategies plugin.

/** @type {import('eslint').ESLint.Plugin} */
const plugin = {
  rules: {
    [verifySpecifierImportRuleName]: verifySpecifierImportExportSameStrategy,
    [verifyDefaultImportRuleName]: verifyDefaultImportExportSameStrategy,
    [verifyNamespaceImportRuleName]: verifyNamespaceImportExportSomeStrategy,
  },
};

export default plugin;
