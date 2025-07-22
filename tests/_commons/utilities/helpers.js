import fs from "fs";
import path from "path";

import {
  importBreaksEffectiveImportRulesMessageId,
  importBreaksCommentedImportRulesMessageId,
} from "../../../library/_commons/constants/bases.js";

/**
 * Reads file paths at any depths within a provided directory.
 * @param {string} folderPath The provided directory.
 * @param {string[]} allFiles The accumulator array of file paths. Defaults to an empty array on the initial call, and is passed through each recursive call to be mutated and collect results.
 * @returns All files at any depths within the provided directory.
 */
const readFilesRecursively = (folderPath, allFiles = []) => {
  const items = fs.readdirSync(folderPath);

  for (const item of items) {
    const fullPath = path.join(folderPath, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      readFilesRecursively(fullPath, allFiles);
    } else if (stats.isFile()) {
      allFiles.push(fullPath);
    }
  }

  return allFiles;
};

/**
 * Reads file paths at any depths within a provided valid files directory.
 * @param {string} folderPath The provided directory.
 * @returns The RuleTester's array of valid files with needed properties.
 */
export const readValidFilesRecursively = (folderPath) =>
  readFilesRecursively(folderPath).map((e) => ({
    name: e,
    filename: e,
    code: fs.readFileSync(e, "utf8"),
  }));

/**
 * Reads file paths at any depths within a provided invalid files directory.
 * @param {string} folderPath The provided directory.
 * @param {number} javaScriptErrorsLength The number of errors expected on JavaScript files.
 * @param {number} typeScriptErrorsLength The number of errors expected on TypeScript files.
 * @param {string} messageId The messageId of the errors expected.
 * @returns The RuleTester's array of invalid files with needed properties.
 */
const readInvalidFilesRecursively = (
  folderPath,
  javaScriptErrorsLength,
  typeScriptErrorsLength,
  messageId
) =>
  readFilesRecursively(folderPath).map((e) => {
    const length = e.includes("javascript")
      ? javaScriptErrorsLength
      : typeScriptErrorsLength;

    return {
      name: e,
      filename: e,
      code: fs.readFileSync(e, "utf8"),
      errors: Array.from({ length }, () => ({
        messageId,
      })),
    };
  });

/**
 * Reads file paths at any depths within a provided invalid files directory for agnostic20.
 * @param {string} folderPath The provided directory.
 * @returns The RuleTester's array of invalid files with needed properties for agnostic20.
 */
export const readInvalidFilesRecursively20 = (folderPath) =>
  readInvalidFilesRecursively(
    folderPath,
    2,
    6,
    importBreaksEffectiveImportRulesMessageId
  );

/**
 * Reads file paths at any depths within a provided invalid files directory for directive21.
 * @param {string} folderPath The provided directory.
 * @returns The RuleTester's array of invalid files with needed properties for directive21.
 */
export const readInvalidFilesRecursively21 = (folderPath) =>
  readInvalidFilesRecursively(
    folderPath,
    4,
    18,
    importBreaksCommentedImportRulesMessageId
  );
