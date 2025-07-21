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
    clientNeverServer:
      "Client Logics should never leak to the server." /* $COMMENT#AGNOSTIC20#FORALIASVARIABLES#CLIENTNEVERSERVER */,
    serverNeverClient:
      "Server Logics should never leak to the client." /* $COMMENT#AGNOSTIC20#FORALIASVARIABLES#SERVERNEVERCLIENT */,
    agnosticCanServerClient:
      "Agnostic Logics can run safely on the server just like they can on the client." /* $COMMENT#AGNOSTIC20#FORALIASVARIABLES#AGNOSTICCANSERVERCLIENT */,
    agnosticCanClientServer:
      "Agnostic Logics can run safely on the client just like they can on the server." /* $COMMENT#AGNOSTIC20#FORALIASVARIABLES#AGNOSTICCANCLIENTSERVER */,
    serverCantServerClient:
      "$COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#SERVERLOGICS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTSERVERCLIENT" /* $COMMENT#AGNOSTIC20#FORALIASVARIABLES#SERVERCANTSERVERCLIENT */,
    clientCantServerClient:
      "$COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CLIENTLOGICS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTSERVERCLIENT" /* $COMMENT#AGNOSTIC20#FORALIASVARIABLES#CLIENTCANTSERVERCLIENT */,
    serverFunctionsNoComponents:
      "Server Functions have no business working with React Components." /* $COMMENT#AGNOSTIC20#FORALIASVARIABLES#SERVERFUNCTIONSNOCOMPONENTS */,
  }),
  forComposedVariables: Object.freeze({
    serverComponentsOKLogics:
      "Server Components are OK to be composed with Server Logics as long as the Server Logics Module," /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#SERVERCOMPONENTSOKLOGICS */,
    clientComponentsOKLogics:
      "Client Components are OK to be composed with Client Logics as long as the Client Logics Module," /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CLIENTCOMPONENTSOKLOGICS */,
    agnosticComponentsCanServer:
      "Agnostic Components can be composed with Logics on the server just like they can on the client, as long at the Server Logics Module," /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#AGNOSTICCOMPONENTSCANSERVER */,
    agnosticComponentsCanClient:
      "Agnostic Components can be composed with Logics on the client just like they can on the server, as long as the Client Logics Module," /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#AGNOSTICCOMPONENTSCANCLIENT */,
    agnosticComponentsCanAgnostic:
      "Agnostic Components can be composed with Logics agnostically as long as the Agnostic Logics Module," /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#AGNOSTICCOMPONENTSCANAGNOSTIC */,
    noExportComponents:
      "by convention, does not export React components." /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#NOEXPORTCOMPONENTS */,
    serverLogics:
      "Server Logics" /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#SERVERLOGICS */,
    clientLogics:
      "Client Logics" /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CLIENTLOGICS */,
    cantServerClient:
      "cannot run on both the server and the client." /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTSERVERCLIENT */,
  }),
});
