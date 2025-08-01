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
  agnosticStrategiesComments,
} from "./modules-comments.js";

export const directive21Comments = Object.freeze({
  "use server logics": serverLogicsComments,
  "use client logics": clientLogicsComments,
  "use agnostic logics": agnosticLogicsComments,
  "use server components": serverComponentsComments,
  "use client components": clientComponentsComments,
  "use agnostic components": agnosticComponentsComments,
  "use server functions": serverFunctionsComments,
  "use client contexts": clientContextsComments,
  "use agnostic conditions": agnosticConditionsComments,
  "use agnostic strategies": agnosticStrategiesComments,
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
    agnosticComponentsRenderAny:
      "$COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#KINDS $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#CANCLIENTLIKESERVER" /* $COMMENT#DIRECTIVE21#FORALIASVARIABLES#AGNOSTICCOMPONENTSRENDERANY */,
    serverFunctionsClient:
      "$COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#SPECIALS $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#CANCLIENTCOMPONENTS" /* $COMMENT#DIRECTIVE21#FORALIASVARIABLES#SERVERFUNCTIONSCLIENT */,
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
    likeAnyClientComponentsComma:
      "like any Client Components," /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#LIKEANYCLIENTCOMPONENTSCOMMA */,
    likeAnyClientComponentsPeriod:
      "like any Client Components." /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#LIKEANYCLIENTCOMPONENTSPERIOD */,
    anyAgnosticComponentsPeriod:
      "any Agnostic Components." /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#ANYAGNOSTICCOMPONENTSPERIOD */,
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
    beingLogicServer:
      "AGNOSTIC20#FORCOMPOSEDVARIABLES#BEINGLOGICSERVER" /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#BEINGLOGICSERVER */,
    beingLogicClient:
      "AGNOSTIC20#FORCOMPOSEDVARIABLES#BEINGLOGICCLIENT" /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#BEINGLOGICCLIENT */,
    beingLogicAgnostic:
      "AGNOSTIC20#FORCOMPOSEDVARIABLES#BEINGLOGICAGNOSTIC" /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#BEINGLOGICAGNOSTIC */,
    canSafelySupport:
      "AGNOSTIC20#FORCOMPOSEDVARIABLES#CANSAFELYSUPPORT" /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#CANSAFELYSUPPORT */,
    canBeNestedInside:
      "AGNOSTIC20#FORCOMPOSEDVARIABLES#CANBENESTEDINSIDE" /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#CANBENESTEDINSIDE */,
    toCreateBoundaries:
      "to create client boundaries" /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#TOCREATEBOUNDARIES */,
    towrapTree:
      "to wrap some of the tree with client state accessible through child Client Components, and to pass through Server Components" /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#TOWRAPTREE */,
    ifStillOnServerTree:
      "AGNOSTIC20#FORCOMPOSEDVARIABLES#IFSTILLONSERVERTREE" /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#IFSTILLONSERVERTREE */,
    whenRootOnServer:
      "when the root of the application is planted on the server." /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#WHENROOTONSERVER */,
    canClientComponents:
      "can be specifically triggered by Client Components." /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#CANCLIENTCOMPONENTS */,
    canServerLikeClient:
      "can render safely on the server just like they can on the client." /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#CANSERVERLIKECLIENT */,
    canClientLikeServer:
      "can render safely on the client just like they can on the server." /* $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#CANCLIENTLIKESERVER */,
  }),
});
