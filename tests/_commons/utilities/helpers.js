import fs from "fs";
import path from "path";

import {
  importBreaksEffectiveImportRulesMessageId,
  importBreaksCommentedImportRulesMessageId,
} from "../../../library/_commons/constants/bases.js";

/**
 * $COMMENT#JSDOC#DEFINITIONS#TESTS#READFILESRECURSIVELY
 * @param {string} folderPath $COMMENT#JSDOC#PARAMS#TESTS#FOLDERPATH
 * @param {string[]} allFiles $COMMENT#JSDOC#PARAMS#TESTS#ALLFILES
 * @returns $COMMENT#JSDOC#RETURNS#TESTS#READFILESRECURSIVELY
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
 * $COMMENT#JSDOC#DEFINITIONS#TESTS#READVALIDFILESRECURSIVELY
 * @param {string} folderPath $COMMENT#JSDOC#PARAMS#TESTS#FOLDERPATH
 * @returns $COMMENT#JSDOC#RETURNS#TESTS#READVALIDFILESRECURSIVELY
 */
export const readValidFilesRecursively = (folderPath) =>
  readFilesRecursively(folderPath).map((e) => ({
    name: e,
    filename: e,
    code: fs.readFileSync(e, "utf8"),
  }));

/**
 * $COMMENT#JSDOC#DEFINITIONS#TESTS#READINVALIDFILESRECURSIVELY
 * @param {string} folderPath $COMMENT#JSDOC#PARAMS#TESTS#FOLDERPATH
 * @param {number} javaScriptErrorsLength $COMMENT#JSDOC#PARAMS#TESTS#JAVASCRIPTERRORSLENGTH
 * @param {number} typeScriptErrorsLength $COMMENT#JSDOC#PARAMS#TESTS#TYPESCRIPTERRORSLENGTH
 * @param {string} messageId $COMMENT#JSDOC#PARAMS#TESTS#MESSAGEID
 * @returns $COMMENT#JSDOC#RETURNS#TESTS#READINVALIDFILESRECURSIVELY
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
 * $COMMENT#JSDOC#DEFINITIONS#TESTS#READINVALIDFILESRECURSIVELY20
 * @param {string} folderPath $COMMENT#JSDOC#PARAMS#TESTS#FOLDERPATH
 * @returns $COMMENT#JSDOC#RETURNS#TESTS#READINVALIDFILESRECURSIVELY20
 */
export const readInvalidFilesRecursively20 = (folderPath) =>
  readInvalidFilesRecursively(
    folderPath,
    2,
    6,
    importBreaksEffectiveImportRulesMessageId
  );

/**
 * $COMMENT#JSDOC#DEFINITIONS#TESTS#READINVALIDFILESRECURSIVELY21
 * @param {string} folderPath $COMMENT#JSDOC#PARAMS#TESTS#FOLDERPATH
 * @returns $COMMENT#JSDOC#RETURNS#TESTS#READINVALIDFILESRECURSIVELY21
 */
export const readInvalidFilesRecursively21 = (folderPath) =>
  readInvalidFilesRecursively(
    folderPath,
    4,
    18,
    importBreaksCommentedImportRulesMessageId
  );
