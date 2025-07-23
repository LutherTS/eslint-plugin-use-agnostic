import url from "url";
import path from "path";

import { makeResolvedConfigData } from "comment-variables-resolve-config";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));
const jsCommentsConfigPath = path.join(dirname, "../../../comments.config.js");

const makeResolvedConfigDataResults = await makeResolvedConfigData(
  jsCommentsConfigPath
);

if (!makeResolvedConfigDataResults.success) {
  makeResolvedConfigDataResults.errors.forEach((e) => {
    console.error(e.message);
  });
  throw new Error("Failed to resolve config data.");
}

export const resolvedConfigData =
  makeResolvedConfigDataResults.resolvedConfigData;
