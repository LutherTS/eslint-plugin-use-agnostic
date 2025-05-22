import { RuleTester } from "eslint";

import { enforceCommentedDirectivesRuleName } from "../../library/_commons/constants/bases.js";

import enforceCommentedDirectivesImportRules from "../../library/directive21/_commons/rules/import-rules.js";

import { validPath21, invalidPath21 } from "../_commons/constants/bases.js";

import {
  readValidFilesRecursively,
  readInvalidFilesRecursively21,
} from "../_commons/utilities/helpers.js";

const validFiles = readValidFilesRecursively(validPath21);
const invalidFiles = readInvalidFilesRecursively21(invalidPath21);

const ruleTester = new RuleTester();

ruleTester.run(
  enforceCommentedDirectivesRuleName, // rule name
  enforceCommentedDirectivesImportRules, // rule code
  {
    // checks
    // 'valid' checks cases that should pass
    valid: validFiles,
    // 'invalid' checks cases that should not pass
    invalid: invalidFiles,
  }
);

console.log("All directive21 tests passed.");
