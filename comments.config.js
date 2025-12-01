import { jsDocComments } from "./jscomments/jsdoc/comments.js";
import { testsComments } from "./jscomments/tests/comments.js";
import { agnostic20Comments } from "./jscomments/agnostic20/comments.js";
import { directive21Comments } from "./jscomments/directive21/comments.js";

export const data = Object.freeze({
  jsDoc: jsDocComments,
  tests: testsComments,
  agnostic20: agnostic20Comments,
  directive21: directive21Comments,
});

const ignores = [];

const composedVariablesExclusives = [
  "JSDOC#FORCOMPOSEDVARIABLES#AGNOSTIC20",
  "JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVE21",
  "JSDOC#FORCOMPOSEDVARIABLES#RESOLVED",
  "JSDOC#FORCOMPOSEDVARIABLES#EFFECTIVE",
  "JSDOC#FORCOMPOSEDVARIABLES#COMMENTED",
  "JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVE",
  "JSDOC#FORCOMPOSEDVARIABLES#DIRECTIVES",
  "JSDOC#FORCOMPOSEDVARIABLES#INITIALTHE",
  "TESTS#FORCOMPOSEDVARIABLES#MODULE",
  "DIRECTIVE21#USE_SERVER_LOGICS#ATSTRATEGY",
  "DIRECTIVE21#USE_CLIENT_LOGICS#ATSTRATEGY",
  "DIRECTIVE21#USE_AGNOSTIC_LOGICS#ATSTRATEGY",
  "DIRECTIVE21#USE_SERVER_COMPONENTS#ATSTRATEGY",
  "DIRECTIVE21#USE_CLIENT_COMPONENTS#ATSTRATEGY",
  "DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#ATSTRATEGY",
  "DIRECTIVE21#USE_SERVER_FUNCTIONS#ATSTRATEGY",
  "DIRECTIVE21#USE_CLIENT_CONTEXTS#ATSTRATEGY",
  "DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#ATSTRATEGY",
  "DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#KINDSSIMPLE",
  // actual composed variables below
  "DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#MODULESIMPLE",
];

const config = {
  data,
  ignores,
  composedVariablesExclusives,
};

export default config;

/* Notes
comment: "comment", // $COMMENT#COMMENT in code, "comment" on hover when resolved by the VSCode extension JSComments (Comment Variables)
Aims of the VSCode extension JSComments: 
- automatically capitalizes keys, so here: 
  - config.comment would return $COMMENT#COMMENT
- automatically chain keys within keys, so here
  - config["agnostic20"] would return $COMMENT#AGNOSTIC20#*
  - config["directive21"] would return $COMMENT#DIRECTIVE21#*
- this way, instead doing a find-replace on a big documentation comment, the comment stays within the config and only the config placeholder is found and replaced for the same results
A working CLI is already on npm: comment-variables.
And the VS Code is also done now privately.
*/
