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

export const directive21Comments = Object.freeze({
  USE_SERVER_LOGICS: serverLogicsComments,
  USE_CLIENT_LOGICS: clientLogicsComments,
  USE_AGNOSTIC_LOGICS: agnosticLogicsComments,
  USE_SERVER_COMPONENTS: serverComponentsComments,
  USE_CLIENT_COMPONENTS: clientComponentsComments,
  USE_AGNOSTIC_COMPONENTS: agnosticComponentsComments,
  USE_SERVER_FUNCTIONS: serverFunctionsComments,
  USE_CLIENT_CONTEXTS: clientContextsComments,
  USE_AGNOSTIC_CONDITIONS: agnosticConditionsComments,
  USE_AGNOSTIC_STRATEGIES:
    /* valid */ "(Special) Agnostic Strategies Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a `'use agnostic strategies'` importFileCommentedDirective.)" /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_STRATEGIES */,
  forAliasVariables: Object.freeze({
    serverNeverClient:
      "Prime Server Logics should never leak to the client." /* $COMMENT#DIRECTIVE21#FORALIASVARIABLES#SERVERNEVERCLIENT */,
    clientNeverServer:
      "Prime Client Logics should never leak to the server." /* $COMMENT#DIRECTIVE21#FORALIASVARIABLES#CLIENTNEVERSERVER */,
    agnosticCanServerClient:
      "Prime Agnostic Logics can run safely on the server just like they can on the client." /* $COMMENT#DIRECTIVE21#FORALIASVARIABLES#AGNOSTICCANSERVERCLIENT */,
    agnosticCanClientServer:
      "Prime Agnostic Logics can run safely on the client just like they can on the server." /* $COMMENT#DIRECTIVE21#FORALIASVARIABLES#AGNOSTICCANCLIENTSERVER */,
    serverFunctionsNoComponents:
      "(Special) Server Functions have no business working with React Components." /* $COMMENT#DIRECTIVE21#FORALIASVARIABLES#SERVERFUNCTIONSNOCOMPONENTS */,
    serverLogicsCantBoth:
      "$COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#KINDS $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#CANTSERVERCLIENT" /* $COMMENT#DIRECTIVE21#FORALIASVARIABLES#SERVERLOGICSCANTBOTH */,
    clientLogicsCantBoth:
      "$COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#KINDS $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#CANTSERVERCLIENT" /* $COMMENT#DIRECTIVE21#FORALIASVARIABLES#CLIENTLOGICSCANTBOTH */,
    agnosticComponentsCanAny:
      "$COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#KINDS $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#CANANYPRIMELOGICS $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#NOEXPORTCOMPONENTS" /* $COMMENT#DIRECTIVE21#FORALIASVARIABLES#AGNOSTICCOMPONENTSCANANY */,
  }),
  forComposedVariables: Object.freeze({
    canComposeOneAnother:
      "AGNOSTIC20#FORCOMPOSEDVARIABLES#CANCOMPOSEONEANOTHER" /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#CANCOMPOSEONEANOTHER */,
    cantTinkeredServer:
      "AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTTINKEREDSERVER" /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#CANTTINKEREDSERVER */,
    cantTinkeredClient:
      "AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTTINKEREDCLIENT" /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#CANTTINKEREDCLIENT */,
    cantTinkeredBoth:
      "AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTTINKEREDBOTH" /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#CANTTINKEREDBOTH */,
    serverComponentsOKLogics:
      "Lineal Server Components are OK to be composed with Prime Server Logics as long as the Prime Server Logics Module," /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#SERVERCOMPONENTSOKLOGICS */,
    likeAnyClientComponents:
      "like any Client Components," /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#LIKEANYCLIENTCOMPONENTS */,
    okClientLogics:
      "are OK to be composed with Prime Client Logics as long as the Prime Client Logics Module," /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#OKCLIENTLOGICS */,
    agnosticComponentsCanAny:
      "Lineal Agnostic Components can be composed with any Prime Environment Logics agnostically, as long as the Prime Environment Logics Module," /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#AGNOSTICCOMPONENTSCANANY */,
    asIfLinealAgnostic:
      "as if they were Lineal Agnostic Components themselves," /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#ASIFLINEALAGNOSTIC */,
    canAnyPrimeLogics:
      "can be composed with any Prime Environment Logics agnostically, as long as the Prime Environment Logics Module," /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#CANANYPRIMELOGICS */,
    noExportComponents:
      "AGNOSTIC20#FORCOMPOSEDVARIABLES#NOEXPORTCOMPONENTS" /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#NOEXPORTCOMPONENTS */,
    cantServerClient:
      "AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTSERVERCLIENT" /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#CANTSERVERCLIENT */,
    arentAllowed:
      "AGNOSTIC20#FORCOMPOSEDVARIABLES#ARENTALLOWED" /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#ARENTALLOWED */,
    allowedBecause:
      "AGNOSTIC20#FORCOMPOSEDVARIABLES#ALLOWEDBECAUSE" /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#ALLOWEDBECAUSE */,
  }),
});
