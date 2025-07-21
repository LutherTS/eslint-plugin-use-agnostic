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
  forAliasVariables: Object.freeze({
    clientNeverServer: "Client Logics should never leak to the server.",
    agnosticCanServerClient:
      "Agnostic Logics can run safely on the server just like they can on the client.",
    serverFunctionsNoComponents:
      "Server Functions have no business working with React Components.",
    serverNeverClient: "Server Logics should never leak to the client.",
    agnosticCanClientServer:
      "Agnostic Logics can run safely on the client just like they can on the server",
    serverCantServerClient:
      "Server Logics cannot run on both the server and the client.",
    clientCantServerClient:
      "Client Logics cannot run on both the server and the client.",
  }),
  forComposedVariables: Object.freeze({
    serverComponentsOKLogics:
      "Server Components are OK to be composed with Server Logics as long as the Server Logics Module,",
    clientComponentsOKLogics:
      "Client Components are OK to be composed with Client Logics as long as the Client Logics Module,",
    agnosticComponentsCanServer:
      "Agnostic Components can be composed with Logics on the server just like they can on the client, as long at the Server Logics Module,",
    agnosticComponentsCanClient:
      "Agnostic Components can be composed with Logics on the client just like they can on the server, as long as the Client Logics Module,",
    agnosticComponentsCanAgnostic:
      "Agnostic Components can be composed with Logics agnostically as long as the Agnostic Logics Module,",
    noExportComponents: "by convention, does not export React components.",
    serverLogics: "Server Logics",
    clientLogics: "Client Logics",
    cantServerClient: "cannot run on both the server and the client.",
  }),
});
