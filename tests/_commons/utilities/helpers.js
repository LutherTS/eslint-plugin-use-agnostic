import fs from "fs";
import path from "path";

import {
  importBreaksEffectiveImportRulesMessageId,
  importBreaksCommentedImportRulesMessageId,
} from "../../../library/_commons/constants/bases.js";

/**
 * Reads file paths at any depths within a provided directory.
 * @param {string} folderPath $COMMENT#JSDOC#FOLDERPATH
 * @param {string[]} allFiles $COMMENT#JSDOC#ALLFILES
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
 * @param {string} folderPath $COMMENT#JSDOC#FOLDERPATH
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
 * @param {string} folderPath $COMMENT#JSDOC#FOLDERPATH
 * @param {number} javaScriptErrorsLength $COMMENT#JSDOC#JAVASCRIPTERRORSLENGTH
 * @param {number} typeScriptErrorsLength $COMMENT#JSDOC#TYPESCRIPTERRORSLENGTH
 * @param {string} messageId $COMMENT#JSDOC#MESSAGEID
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
 * @param {string} folderPath $COMMENT#JSDOC#FOLDERPATH
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
 * @param {string} folderPath $COMMENT#JSDOC#FOLDERPATH
 * @returns The RuleTester's array of invalid files with needed properties for directive21.
 */
export const readInvalidFilesRecursively21 = (folderPath) =>
  readInvalidFilesRecursively(
    folderPath,
    4,
    18,
    importBreaksCommentedImportRulesMessageId
  );
