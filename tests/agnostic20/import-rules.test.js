import { RuleTester } from "eslint";

import { validPath20, invalidPath20 } from "../_commons/constants/bases.js";

import {
  readValidFilesRecursively,
  readInvalidFilesRecursively20,
} from "../_commons/utilities/helpers.js";

import { enforceEffectiveDirectivesRuleName } from "../../library/_commons/constants/bases.js";

import enforceEffectiveDirectivesImportRules from "../../library/agnostic20/_commons/rules/import-rules.js";

const validFiles = readValidFilesRecursively(validPath20);
const invalidFiles = readInvalidFilesRecursively20(invalidPath20);

const ruleTester = new RuleTester();

ruleTester.run(
  enforceEffectiveDirectivesRuleName, // rule name
  enforceEffectiveDirectivesImportRules, // rule code
  {
    // checks
    // 'valid' checks cases that should pass
    valid: validFiles,
    // 'invalid' checks cases that should not pass
    invalid: invalidFiles,
  }
);

console.log("All agnostic20 tests passed.");
