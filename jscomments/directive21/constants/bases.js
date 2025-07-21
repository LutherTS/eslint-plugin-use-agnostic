import {
  serverLogicsComments,
  clientLogicsComments,
  agnosticLogicsComments,
  serverComponentsComments,
  clientComponentsComments,
  agnosticComponentsComments,
  serverFunctionsComments,
  clientContextsComments,
  agnosticConditionsComments,
} from "./modules-comments.js";

import {
  USE_SERVER_LOGICS,
  USE_CLIENT_LOGICS,
  USE_AGNOSTIC_LOGICS,
  USE_SERVER_COMPONENTS,
  USE_CLIENT_COMPONENTS,
  USE_AGNOSTIC_COMPONENTS,
  USE_SERVER_FUNCTIONS,
  USE_CLIENT_CONTEXTS,
  USE_AGNOSTIC_CONDITIONS,
  USE_AGNOSTIC_STRATEGIES,
} from "../../../library/_commons/constants/bases.js";

export const directive21Comments = Object.freeze({
  [USE_SERVER_LOGICS]: serverLogicsComments,
  [USE_CLIENT_LOGICS]: clientLogicsComments,
  [USE_AGNOSTIC_LOGICS]: agnosticLogicsComments,
  [USE_SERVER_COMPONENTS]: serverComponentsComments,
  [USE_CLIENT_COMPONENTS]: clientComponentsComments,
  [USE_AGNOSTIC_COMPONENTS]: agnosticComponentsComments,
  [USE_SERVER_FUNCTIONS]: serverFunctionsComments,
  [USE_CLIENT_CONTEXTS]: clientContextsComments,
  [USE_AGNOSTIC_CONDITIONS]: agnosticConditionsComments,
  [USE_AGNOSTIC_STRATEGIES]:
    /* valid */ "(Special) Agnostic Strategies Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a 'use agnostic strategies' importFileCommentedDirective.)" /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_STRATEGIES */,
});
