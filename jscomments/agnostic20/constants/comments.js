import {
  serverLogicsComments,
  serverComponentsComments,
  serverFunctionsComments,
  clientLogicsComments,
  clientComponentsComments,
  agnosticLogicsComments,
  agnosticComponentsComments,
} from "./modules-comments.js";

export const agnostic20Comments = Object.freeze({
  USE_SERVER_LOGICS: serverLogicsComments,
  USE_SERVER_COMPONENTS: serverComponentsComments,
  USE_SERVER_FUNCTIONS: serverFunctionsComments,
  USE_CLIENT_LOGICS: clientLogicsComments,
  USE_CLIENT_COMPONENTS: clientComponentsComments,
  USE_AGNOSTIC_LOGICS: agnosticLogicsComments,
  USE_AGNOSTIC_COMPONENTS: agnosticComponentsComments,
  forAliasVariables: Object.freeze({
    serverNeverClient:
      "Server Logics should never leak to the client." /* $COMMENT#AGNOSTIC20#FORALIASVARIABLES#SERVERNEVERCLIENT */,
    clientNeverServer:
      "Client Logics should never leak to the server." /* $COMMENT#AGNOSTIC20#FORALIASVARIABLES#CLIENTNEVERSERVER */,
    agnosticCanServerClient:
      "Agnostic Logics can run safely on the server just like they can on the client." /* $COMMENT#AGNOSTIC20#FORALIASVARIABLES#AGNOSTICCANSERVERCLIENT */,
    agnosticCanClientServer:
      "Agnostic Logics can run safely on the client just like they can on the server." /* $COMMENT#AGNOSTIC20#FORALIASVARIABLES#AGNOSTICCANCLIENTSERVER */,
    serverFunctionsNoComponents:
      "Server Functions have no business working with React Components." /* $COMMENT#AGNOSTIC20#FORALIASVARIABLES#SERVERFUNCTIONSNOCOMPONENTS */,
    serverLogicsCantBoth:
      "$COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#KINDS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTSERVERCLIENT" /* $COMMENT#AGNOSTIC20#FORALIASVARIABLES#SERVERLOGICSCANTBOTH */,
    clientLogicsCantBoth:
      "$COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#KINDS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTSERVERCLIENT" /* $COMMENT#AGNOSTIC20#FORALIASVARIABLES#CLIENTLOGICSCANTBOTH */,
  }),
  forComposedVariables: Object.freeze({
    canComposeOneAnother:
      "can compose with one another." /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANCOMPOSEONEANOTHER */,
    cantTinkeredServer:
      "cannot be tinkered with on the server." /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTTINKEREDSERVER */,
    cantTinkeredClient:
      "cannot be tinkered with on the client." /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTTINKEREDCLIENT */,
    cantTinkeredBoth:
      "cannot be tinkered with on both the server and the client." /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTTINKEREDBOTH */,
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
    cantServerClient:
      "cannot run on both the server and the client." /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTSERVERCLIENT */,
    arentAllowed:
      "aren't allowed because" /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#ARENTALLOWED */,
    beingLogicServer: "being logic from the server," /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#BEINGLOGICSERVER */,
    beingLogicClient: "being logic from the client," /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#BEINGLOGICCLIENT */,
    beingLogicAgnostic: "being environment-agnostic logic," /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#BEINGLOGICAGNOSTIC */,
    canSafelySupport: "can safely support" /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANSAFELYSUPPORT */,
    canBeNestedInside: "can be nested inside" /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANBENESTEDINSIDE */,
    eitherWrapTree:
      "either to wrap some of the tree with client state accessible through child Client Components and pass through Server Components" /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#EITHERWRAPTREE */,
    ifStillOnServerTree: "— if still on the Server Tree —" /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#IFSTILLONSERVERTREE */,
    orCreateBoundaries:
      "or to create client boundaries when the root of the application is planted on the server." /* $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#ORCREATEBOUNDARIES */,
  }),
});

// being logic from the server,
// being logic from the client,
// being environment-agnostic logic,
// can safely support
// can be nested inside
// either to wrap some of the tree with client state accessible through child Client Components and pass through Server Components
// — if still on the Server Tree —
// or to create client boundaries when the root of the application is planted on the server.
