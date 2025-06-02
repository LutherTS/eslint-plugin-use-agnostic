import {
  serverLogicsComments,
  serverComponentsComments,
  serverFunctionsComments,
  clientLogicsComments,
  clientComponentsComments,
  agnosticLogicsComments,
  agnosticComponentsComments,
} from "./modules-comments.js";

import {
  USE_SERVER_LOGICS,
  USE_CLIENT_LOGICS,
  USE_AGNOSTIC_LOGICS,
  USE_SERVER_COMPONENTS,
  USE_CLIENT_COMPONENTS,
  USE_AGNOSTIC_COMPONENTS,
  USE_SERVER_FUNCTIONS,
} from "../../../library/_commons/constants/bases.js";

export const agnostic20Comments = Object.freeze({
  [USE_SERVER_LOGICS]: serverLogicsComments,
  [USE_SERVER_COMPONENTS]: serverComponentsComments,
  [USE_SERVER_FUNCTIONS]: serverFunctionsComments,
  [USE_CLIENT_LOGICS]: clientLogicsComments,
  [USE_CLIENT_COMPONENTS]: clientComponentsComments,
  [USE_AGNOSTIC_LOGICS]: agnosticLogicsComments,
  [USE_AGNOSTIC_COMPONENTS]: agnosticComponentsComments,
});
