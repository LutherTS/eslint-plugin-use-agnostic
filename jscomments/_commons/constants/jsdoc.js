export const jSDocComments = Object.freeze({
  definitions: Object.freeze({
    makeTestFiles:
      "Makes the paths of the files to be linted for agnostic20 and directive21.",
    highlightFirstLineOfCode:
      "Gets the coordinates for the first line of code of a file.",
  }),
  params: Object.freeze({
    validPath: "The directory for the valid paths.",
    invalidPath: "The directory for the invalid paths.",
    aContext: "An ESLint rule's `context` object.",
  }),
  details: Object.freeze({}),
  returns: Object.freeze({
    makeTestFiles:
      "The paths of the files to be linted for agnostic20 and directive21.",
    highlightFirstLineOfCode:
      "The `context.report` `loc`-compatible coordinates for the first line of code of a file.",
  }),
});
