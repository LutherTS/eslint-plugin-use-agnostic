import fs from "fs";
import { Linter } from "eslint";
import tseslint from "typescript-eslint";

import { directivesArray } from "./library/agnostic20/_commons/constants/bases.js";

const linter = new Linter();

const textJS = fs.readFileSync(
  "/Users/Luther/Code/eslint-plugin-use-agnostic/tests/agnostic20/importing/valid/server/functions/javascript/agnostic-logics.js",
  "utf8"
);
const textTS = fs.readFileSync(
  "/Users/Luther/Code/eslint-plugin-use-agnostic/tests/agnostic20/importing/invalid/agnostic/logics/typescript/server-components.ts",
  "utf8"
);

// console.log({ textJS, textTS });

const verifyTextJS = linter.verify(textJS, {
  languageOptions: {
    // for compatibility with .ts and .tsx
    parser: tseslint.parser,
  },
});
const code = linter.getSourceCode();
const ast = code.ast;

console.log({ ast });

function testing() {
  // the AST body to check for the top-of-the-file directive
  const { body } = ast;

  // the first statement from the source code's Abstract Syntax Tree
  const firstStatement = body[0];

  // the value of that first statement or null
  const value =
    firstStatement?.type === "ExpressionStatement" &&
    firstStatement.expression?.type === "Literal"
      ? firstStatement.expression.value
      : null;

  // considers early a null value as the absence of a directive
  if (value === null) return value;

  // the value to be exactly 'use client', 'use server' or 'use agnostic' in order not to be considered null by default, or server-by-default
  const currentFileDirective =
    directivesArray.find((directive) => directive === value) ?? null;

  return currentFileDirective;
}

console.log(testing());
