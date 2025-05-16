import fs from "fs";
import path from "path";

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

const readFilesRecursivelyWithFileCodes = (folderPath) =>
  readFilesRecursively(folderPath).map((e) => ({
    filePath: e,
    fileCode: fs.readFileSync(e, "utf8"),
  }));

const validFilesWithCodes = readFilesRecursivelyWithFileCodes(validPath);
const invalidFilesWithCodes = readFilesRecursivelyWithFileCodes(invalidPath);

console.log({ validFilesWithCodes, invalidFilesWithCodes });
