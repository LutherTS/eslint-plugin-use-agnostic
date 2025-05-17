import fs from "fs";
import path from "path";

import { RuleTester } from "eslint";

import {
  enforceEffectiveDirectivesRuleName,
  importBreaksEffectiveImportRulesMessageId,
} from "../../library/_commons/constants/bases.js";

import enforceEffectiveDirectivesImportRules from "../../library/agnostic20/_commons/rules/import-rules.js";

const validPath = "./tests/agnostic20/importing/valid";
const invalidPath = "./tests/agnostic20/importing/invalid";

const readFilesRecursively = (folderPath) =>
  fs.readdirSync(folderPath).reduce((allFiles, item) => {
    const fullPath = path.join(folderPath, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      return allFiles.concat(readFilesRecursively(fullPath));
    } else if (stats.isFile()) {
      return allFiles.concat(fullPath);
    } else {
      return allFiles;
    }
  }, []);

const readValidFilesRecursively = (folderPath) =>
  readFilesRecursively(folderPath).map((e) => ({
    name: e,
    filename: e,
    code: fs.readFileSync(e, "utf8"),
  }));

const readInvalidFilesRecursively = (folderPath) =>
  readFilesRecursively(folderPath).map((e) => ({
    name: e,
    filename: e,
    code: fs.readFileSync(e, "utf8"),
    // errors: 1,
    errors: [{ messageId: importBreaksEffectiveImportRulesMessageId }],
  }));

const validFiles = readValidFilesRecursively(validPath);
const invalidFiles = readInvalidFilesRecursively(invalidPath);

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

console.log("All tests passed.");
