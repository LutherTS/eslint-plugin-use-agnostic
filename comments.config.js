import {
  agnostic20ConfigName,
  directive21ConfigName,
} from "./library/_commons/constants/bases.js";

import {
  jSDocComments,
  testsComments,
} from "./jscomments/_commons/constants/bases.js";
import { agnostic20Comments } from "./jscomments/agnostic20/constants/bases.js";
import { directive21Comments } from "./jscomments/directive21/constants/bases.js";

const config = Object.freeze({
  jsDoc: jSDocComments,
  tests: testsComments,
  [agnostic20ConfigName]: agnostic20Comments,
  [directive21ConfigName]: directive21Comments,
});

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
*/
