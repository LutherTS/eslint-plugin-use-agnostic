import { EXTENSIONS } from "../../../library/_commons/constants/bases.js";

/**
 * $COMMENT#JSDOC#DEFINITIONS#MAKETESTFILES
 * @param {string} validPath $COMMENT#JSDOC#PARAMS#VALIDPATH
 * @param {string} invalidPath $COMMENT#JSDOC#PARAMS#INVALIDPATH
 * @returns $COMMENT#JSDOC#RETURNS#MAKETESTFILES
 */
export const makeTestFiles = (validPath, invalidPath) =>
  EXTENSIONS.map((e) => `**/*${e}`)
    .map((e) => {
      return [validPath + "/" + e, invalidPath + "/" + e];
    })
    .flat();
