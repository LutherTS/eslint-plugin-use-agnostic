import { EXTENSIONS } from "../../../library/_commons/constants/bases.js";

/**
 * Makes the paths of the files to be linted for agnostic20 and directive21.
 * @param {string} validPath The directory for the valid paths.
 * @param {string} invalidPath The directory for the invalid paths.
 * @returns The paths of the files to be linted for agnostic20 and directive21.
 */
export const makeTestFiles = (validPath, invalidPath) =>
  EXTENSIONS.map((e) => `**/*${e}`)
    .map((e) => {
      return [validPath + "/" + e, invalidPath + "/" + e];
    })
    .flat();
