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
} from "../../../library/_commons/constants/bases.js";

export const serverLogicsComments = Object.freeze({
  // $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#USE_SERVER_LOGICS
  [USE_SERVER_LOGICS]:
    /* valid */ "Prime Server Logics can compose with one another." /* $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#USE_SERVER_LOGICS */,
  [USE_CLIENT_LOGICS]:
    /* invalid */ "Prime Client Logics should never leak to the server, such as would be the case here in a Prime Server Logics Module." /* $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#USE_CLIENT_LOGICS */,
  [USE_AGNOSTIC_LOGICS]:
    /* valid */ "Prime Agnostic Logics can run safely on the server just like they can on the client, such as is the case here in a Prime Server Logics Module." /* $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#USE_AGNOSTIC_LOGICS */,
  [USE_SERVER_COMPONENTS]:
    /* valid */ "Lineal Server Components are OK to be composed with Prime Server Logics as long as the Prime Server Logics Module, by convention, does not export React components." /* $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#USE_SERVER_COMPONENTS */,
  [USE_CLIENT_COMPONENTS]:
    /* invalid */ "Lineal Client Components, like any Client Components, cannot be tinkered with on the server." /* $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#USE_CLIENT_COMPONENTS */,
  [USE_AGNOSTIC_COMPONENTS]:
    /* valid */ "Lineal Agnostic Components can be composed with any Prime Environment Logics agnostically, such as Prime Server Logics, as long as the Prime Environment Logics Module, by convention, does not export React components." /* $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#USE_AGNOSTIC_COMPONENTS */, //
  [USE_SERVER_FUNCTIONS]:
    /* valid */ "(Special) Server Functions, being able to import one another, can compose and do so via Prime Server Logics, despite this method seeming superfluous at first glance. (Perhaps a preferrable use case for this has been found or could be found either today or in the future.)" /* $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#USE_SERVER_FUNCTIONS */,
  [USE_CLIENT_CONTEXTS]:
    /* invalid */ "Client Contexts Components, like any Client Components, cannot be tinkered with on the server." /* $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#USE_CLIENT_CONTEXTS */,
  [USE_AGNOSTIC_CONDITIONS]:
    /* valid */ "(Special) Agnostic Conditions Components are able to safely render on the server, guaranteeing that only their `ComponentForServer` will be effectively involved in Prime Server Logics Modules." /* $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#USE_AGNOSTIC_CONDITIONS */,
  module:
    "Prime Server Logics Module" /* $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#MODULE */,
  modulePeriod:
    "Prime Server Logics Module." /* $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#MODULEPERIOD */,
  kinds:
    "Prime Server Logics" /* $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#KINDS */,
  importingAModule:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#MODULEPERIOD" /* $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#IMPORTINGAMODULE */,
  importingByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#IMPORTINGBYAFOLDER */,
  importingViaStrategy:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTING $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#VIASTRATEGYPERIOD" /* $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#IMPORTINGVIASTRATEGY */,
  importingViaStrategyByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTING $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#VIASTRATEGY $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#IMPORTINGVIASTRATEGYBYAFOLDER */,
});

export const clientLogicsComments = Object.freeze({
  [USE_SERVER_LOGICS]:
    /* invalid */ "Prime Server Logics should never leak to the client, such as would be the case here in a Prime Client Logics Module." /* $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#USE_SERVER_LOGICS */,
  [USE_CLIENT_LOGICS]:
    /* valid */ "Prime Client Logics can compose with one another." /* $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#USE_CLIENT_LOGICS */,
  [USE_AGNOSTIC_LOGICS]:
    /* valid */ "Prime Agnostic Logics can run safely on the client just like they can on the server, such as is the case here in a Prime Client Logics Module." /* $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#USE_AGNOSTIC_LOGICS */,
  [USE_SERVER_COMPONENTS]:
    /* invalid */ "Lineal Server Components cannot be thinkered with on the client." /* $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#USE_SERVER_COMPONENTS */,
  [USE_CLIENT_COMPONENTS]:
    /* valid */ "Lineal Client Components, like any Client Components, are OK to be composed with Prime Client Logics as long as the Prime Client Logics Module, by convention, does not export React components." /* $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#USE_CLIENT_COMPONENTS */,
  [USE_AGNOSTIC_COMPONENTS]:
    /* valid */ "Lineal Agnostic Components can be composed with any Prime Environment Logics agnostically, such as Prime Client Logics, as long as the Prime Environment Logics Module, by convention, does not export React components." /* $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#USE_AGNOSTIC_COMPONENTS */,
  [USE_SERVER_FUNCTIONS]:
    /* valid */ "(Special) Server Functions can technically be attached to Client Components that are being tinkered with within Client Logics Modules." /* $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#USE_SERVER_FUNCTIONS */,
  [USE_CLIENT_CONTEXTS]:
    /* valid */ "(Special) Client Contexts Components, like any Client Components, are OK to be composed with Prime Client Logics as long as the Prime Client Logics Module, by convention, does not export React components." /* $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#USE_CLIENT_CONTEXTS */,
  [USE_AGNOSTIC_CONDITIONS]:
    /* valid */ "(Special) Agnostic Conditions Components are able to safely render on the client, guaranteeing that only their `ComponentForClient` will be effectively involved in Prime Client Logics Modules." /* $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#USE_AGNOSTIC_CONDITIONS */,
  module:
    "Prime Client Logics Module" /* $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#MODULE */,
  modulePeriod:
    "Prime Client Logics Module." /* $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#MODULEPERIOD */,
  kinds:
    "Prime Client Logics" /* $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#KINDS */,
  importingAModule:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#MODULEPERIOD" /* $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#IMPORTINGAMODULE */,
  importingByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#IMPORTINGBYAFOLDER */,
  importingViaStrategy:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTING $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#VIASTRATEGYPERIOD" /* $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#IMPORTINGVIASTRATEGY */,
  importingViaStrategyByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTING $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#VIASTRATEGY $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#IMPORTINGVIASTRATEGYBYAFOLDER */,
});

export const agnosticLogicsComments = Object.freeze({
  [USE_SERVER_LOGICS]:
    /* invalid */ "Prime Server Logics cannot run on both the server and the client, such as would be the case here in a Prime Agnostic Logics Module." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_SERVER_LOGICS */,
  [USE_CLIENT_LOGICS]:
    /* invalid */ "Prime Client Logics cannot run on both the server and the client, such as would be the case here in a Prime Agnostic Logics Module." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_CLIENT_LOGICS */,
  [USE_AGNOSTIC_LOGICS]:
    /* valid */ "Prime Agnostic Logics can compose with one another." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_AGNOSTIC_LOGICS */,
  [USE_SERVER_COMPONENTS]:
    /* invalid */ "Lineal Server Components cannot be tinkered with on both the server and the client." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_SERVER_COMPONENTS */,
  [USE_CLIENT_COMPONENTS]:
    /* invalid */ "Lineal Client Components, like any Client Components, cannot be tinkered with on both the server and the client." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_CLIENT_COMPONENTS */,
  [USE_AGNOSTIC_COMPONENTS]:
    /* valid */ "Lineal Agnostic Components can be composed with any Prime Environment Logics agnostically, such as Prime Agnostic Logics, as long as the Prime Environment Logics Module, by convention, does not export React components." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_AGNOSTIC_COMPONENTS */,
  [USE_SERVER_FUNCTIONS]:
    /* invalid */ "(Special) Server Functions can be modified on the server and on the client, but their use cases on both environments are not one-to-one compatible, since they're being addressed as they are on the server and addressed as references on the client." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_SERVER_FUNCTIONS */,
  [USE_CLIENT_CONTEXTS]:
    /* invalid */ "(Special) Client Contexts Components, like any Client Components, cannot be tinkered with on both the server and the client." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_CLIENT_CONTEXTS */,
  [USE_AGNOSTIC_CONDITIONS]:
    /* valid */ "(Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can be composed with any Prime Environment Logics agnostically as long as the Prime Environment Logics Module, by convention, does not export React components." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_AGNOSTIC_CONDITIONS */,
  module:
    "Prime Agnostic Logics Module" /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#MODULE */,
  modulePeriod:
    "Prime Agnostic Logics Module." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#MODULEPERIOD */,
  kinds:
    "Prime Agnostic Logics" /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#KINDS */,
  importingAModule:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#MODULEPERIOD" /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#IMPORTINGAMODULE */,
  importingByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#IMPORTINGBYAFOLDER */,
  importingViaStrategy:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTING $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#VIASTRATEGYPERIOD" /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#IMPORTINGVIASTRATEGY */,
  importingViaStrategyByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTING $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#VIASTRATEGY $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#IMPORTINGVIASTRATEGYBYAFOLDER */,
});

export const serverComponentsComments = Object.freeze({
  [USE_SERVER_LOGICS]:
    /* valid */ "Prime Server Logics, being logic from the server, can safely support Lineal Server Components." /* $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#USE_SERVER_LOGICS */,
  [USE_CLIENT_LOGICS]:
    /* invalid */ "Prime Client Logics should never leak to the server, such as would be the case here in a Lineal Server Components Module." /* $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#USE_CLIENT_LOGICS */,
  [USE_AGNOSTIC_LOGICS]:
    /* valid */ "Prime Agnostic Logics can run safely on the server just like they can on the client, such as is the case here in a Lineal Server Components Module." /* $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#USE_AGNOSTIC_LOGICS */,
  [USE_SERVER_COMPONENTS]:
    /* valid */ "Lineal Server Components can compose with one another, now that thanks to the inclusion of Agnostic Components they are actual Server Components." /* $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#USE_SERVER_COMPONENTS */,
  [USE_CLIENT_COMPONENTS]:
    /* valid */ "Lineal Client Components can be nested inside Server Components to create client boundaries when the root of the application is planted on the server." /* $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#USE_CLIENT_COMPONENTS */,
  [USE_AGNOSTIC_COMPONENTS]:
    /* valid */ "Lineal Agnostic Components can render safely on the server just like they can on the client." /* $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#USE_AGNOSTIC_COMPONENTS */,
  [USE_SERVER_FUNCTIONS]:
    /* valid */ "(Special) Server Functions can be passed to imported Client Components within Lineal Server Components Modules, even though indeed Lineal Server Components Modules and Lineal Server Components can make their own Server Functions through inline 'use server' directives." /* $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#USE_SERVER_FUNCTIONS */,
  [USE_CLIENT_CONTEXTS]:
    /* valid */ "(Special) Client Contexts Components can be nested inside Server Components to wrap some of the tree with client state accessible through child Client Components, and to pass through Server Components when the root of the application is planted on the server." /* $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#USE_CLIENT_CONTEXTS */,
  [USE_AGNOSTIC_CONDITIONS]:
    /* valid */ "(Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can render safely on the server just like they can on the client." /* $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#USE_AGNOSTIC_CONDITIONS */,
  module:
    "Lineal Server Components Module" /* $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#MODULE */,
  modulePeriod:
    "Lineal Server Components Module." /* $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#MODULEPERIOD */,
  kinds:
    "Lineal Server Components" /* $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#KINDS */,
  importingAModule:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#MODULEPERIOD" /* $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#IMPORTINGAMODULE */,
  importingByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#IMPORTINGBYAFOLDER */,
  importingViaStrategy:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTING $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#VIASTRATEGYPERIOD" /* $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#IMPORTINGVIASTRATEGY */,
  importingViaStrategyByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTING $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#VIASTRATEGY $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#IMPORTINGVIASTRATEGYBYAFOLDER */,
});

export const clientComponentsComments = Object.freeze({
  [USE_SERVER_LOGICS]:
    /* invalid */ "Prime Server Logics should never leak to the client, such as would be the case here in a Lineal Client Components Module." /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_SERVER_LOGICS */,
  [USE_CLIENT_LOGICS]:
    /* valid */ "Prime Client Logics, being logic from the client, can safely support Lineal Client Components, like any Client Components." /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_CLIENT_LOGICS */,
  [USE_AGNOSTIC_LOGICS]:
    /* valid */ "Prime Agnostic Logics can run safely on the client just like they can on the server, such as is the case here in a Lineal Client Components Module." /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_AGNOSTIC_LOGICS */,
  [USE_SERVER_COMPONENTS]:
    /* invalid */ "Lineal Server Components cannot be the children of Lineal Client Components." /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_SERVER_COMPONENTS */,
  [USE_CLIENT_COMPONENTS]:
    /* valid */ "Lineal Client Components can compose with one another." /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_CLIENT_COMPONENTS */,
  [USE_AGNOSTIC_COMPONENTS]:
    /* valid */ "Lineal Agnostic Components can render safely on the client just like they can on the server, such as is the case here in a Lineal Client Components Module." /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_AGNOSTIC_COMPONENTS */,
  [USE_SERVER_FUNCTIONS]:
    /* valid */ "(Special) Server Functions are specifically triggered by Client Components, such as is the case here in a Lineal Client Components Module." /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_SERVER_FUNCTIONS */,
  [USE_CLIENT_CONTEXTS]:
    /* valid */ "(Special) Client Contexts Components can effectively become Lineal and only render their children on the client via this mechanism since, by a Client Contexts Component being the child of a Lineal Client Component, the Client Contexts Component's children become the grand-children of an ancestor Lineal Client Component, enforcing them to render exclusively on the client." /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_CLIENT_CONTEXTS */,
  [USE_AGNOSTIC_CONDITIONS]:
    /* valid */ "(Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can render safely on the client just like they can on the server." /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_AGNOSTIC_CONDITIONS */,
  module:
    "Lineal Client Components Module" /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#MODULE */,
  modulePeriod:
    "Lineal Client Components Module." /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#MODULEPERIOD */,
  kinds:
    "Lineal Client Components" /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#KINDS */,
  importingAModule:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#MODULEPERIOD" /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGAMODULE */,
  importingByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGBYAFOLDER */,
  importingViaStrategy:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTING $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#VIASTRATEGYPERIOD" /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGVIASTRATEGY */,
  importingViaStrategyByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTING $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#VIASTRATEGY $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGVIASTRATEGYBYAFOLDER */,
});

export const agnosticComponentsComments = Object.freeze({
  [USE_SERVER_LOGICS]:
    /* invalid */ "Prime Server Logics cannot run on both the server and the client, such as would be the case here in a Lineal Agnostic Components Module." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_SERVER_LOGICS */,
  [USE_CLIENT_LOGICS]:
    /* invalid */ "Prime Client Logics cannot run on both the server and the client, such as would be the case here in a Lineal Agnostic Components Module." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_LOGICS */,
  [USE_AGNOSTIC_LOGICS]:
    /* valid */ "Prime Agnostic Logics, being environment-agnostic logic, can safely support Agnostic Components." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_AGNOSTIC_LOGICS */,
  [USE_SERVER_COMPONENTS]:
    /* invalid */ "Lineal Server Components, unlike Lineal Client Components, cannot make silos of their own once on the opposing environment (the client in this case), and therefore cannot be executed from the client, making them unable to execute agnostically from both the server and the client." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_SERVER_COMPONENTS */,
  [USE_CLIENT_COMPONENTS]:
    /* valid */ "Lineal Client Components can be nested inside Agnostic Components to create client boundaries when the root of the application is planted on the server." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_COMPONENTS */,
  [USE_AGNOSTIC_COMPONENTS]:
    /* valid */ "Lineal Agnostic Components, can compose with one another." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_AGNOSTIC_COMPONENTS */,
  [USE_SERVER_FUNCTIONS]:
    /* valid */ "(Special) Server Functions can be passed to Client Components as props when Client Components are also legally imported into Agnostic Components Modules." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_SERVER_FUNCTIONS */,
  [USE_CLIENT_CONTEXTS]:
    /* valid */ "(Special) Client Contexts Components can be nested inside Agnostic Components to wrap some of the tree with client state accessible through child Client Components, and to pass through Server Components (if still on the Server Tree) when the root of the application is planted on the server." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_CONTEXTS */,
  [USE_AGNOSTIC_CONDITIONS]:
    /* valid */ "(Special) Agnostic Conditions Components can compose with Lineal Agnostic Components as if they were Lineal Agnostic Components themselves, making them a necessary mechanism for Server Components to be nested in Agnostic Components." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_AGNOSTIC_CONDITIONS */,
  module:
    "Lineal Agnostic Components Module" /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#MODULE */,
  modulePeriod:
    "Lineal Agnostic Components Module." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#MODULEPERIOD */,
  kinds:
    "Lineal Agnostic Components" /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#KINDS */,
  importingAModule:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#MODULEPERIOD" /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGAMODULE */,
  importingByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGBYAFOLDER */,
  importingViaStrategy:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTING $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#VIASTRATEGYPERIOD" /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGVIASTRATEGY */,
  importingViaStrategyByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTING $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#VIASTRATEGY $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGVIASTRATEGYBYAFOLDER */,
});

export const serverFunctionsComments = Object.freeze({
  [USE_SERVER_LOGICS]:
    /* valid */ "Prime Server Logics, being logic from the server, can safely support (Special) Server Functions." /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_SERVER_LOGICS */,
  [USE_CLIENT_LOGICS]:
    /* invalid */ "Prime Client Logics should never leak to the server, such as would be the case here in a Special Server Functions Module." /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_CLIENT_LOGICS */,
  [USE_AGNOSTIC_LOGICS]:
    /* valid */ "Prime Agnostic Logics can run safely on the server just like they can on the client, such as is the case here in a Special Server Functions Module." /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_LOGICS */,
  [USE_SERVER_COMPONENTS]:
    /* invalid */ "Lineal Server Components aren't allowed because (Special) Server Functions have no business working with React Components." /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_SERVER_COMPONENTS */,
  [USE_CLIENT_COMPONENTS]:
    /* invalid */ "Lineal Client Components aren't allowed because (Special) Server Functions have no business working with React Components." /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_CLIENT_COMPONENTS */,
  [USE_AGNOSTIC_COMPONENTS]:
    /* invalid */ "Lineal Agnostic Components aren't allowed because (Special) Server Functions have no business working with React Components." /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_COMPONENTS */,
  [USE_SERVER_FUNCTIONS]:
    /* valid */ "(Special) Server Functions, even though they don't need to import one another and the same results can be generated via Prime Server Logics for the outcome of a single Server Function, can still compose with one another. (Perhaps a preferrable use case for this has been found or could be found either today or in the future.)" /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_SERVER_FUNCTIONS */,
  [USE_CLIENT_CONTEXTS]:
    /* invalid */ "(Special) Client Contexts Components aren't allowed because (Special) Server Functions have no business working with React Components." /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_CLIENT_CONTEXTS */,
  [USE_AGNOSTIC_CONDITIONS]:
    /* invalid */ "(Special) Agnostic Conditions Components aren't allowed because (Special) Server Functions have no business working with React Components." /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_CONDITIONS */,
  module:
    "Special Server Functions Module" /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#MODULE */,
  modulePeriod:
    "Special Server Functions Module." /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#MODULEPERIOD */,
  kinds:
    "Special Server Functions" /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#KINDS */,
  importingAModule:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#MODULEPERIOD" /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#IMPORTINGAMODULE */,
  importingByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#IMPORTINGBYAFOLDER */,
  importingViaStrategy:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTING $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#VIASTRATEGYPERIOD" /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#IMPORTINGVIASTRATEGY */,
  importingViaStrategyByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTING $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#VIASTRATEGY $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#IMPORTINGVIASTRATEGYBYAFOLDER */,
});

export const clientContextsComments = Object.freeze({
  [USE_SERVER_LOGICS]:
    /* invalid */ "Prime Server Logics should never leak to the client, such as would be the case here in a Special Client Contexts Module." /* $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_SERVER_LOGICS */,
  [USE_CLIENT_LOGICS]:
    /* valid */ "Prime Client Logics, being logic from the client, can safely support (Special) Client Contexts Components, like any Client Components." /* $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_CLIENT_LOGICS */,
  [USE_AGNOSTIC_LOGICS]:
    /* valid */ "Prime Agnostic Logics can run safely on the client just like they can on the server, such as is the case here in a Special Client Contexts Module." /* $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_AGNOSTIC_LOGICS */,
  [USE_SERVER_COMPONENTS]:
    /* invalid */ "Lineal Server Components may only pass through (Special) Client Contexts Components via the children prop within Server Components Modules." /* $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_SERVER_COMPONENTS */,
  [USE_CLIENT_COMPONENTS]:
    /* valid */ "Lineal Client Components can create client boundaries within (Special) Client Contexts Components." /* $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_CLIENT_COMPONENTS */,
  [USE_AGNOSTIC_COMPONENTS]:
    /* valid */ "Lineal Agnostic Components can render safely on the client just like they can on the server, such as is the case here in a Special Client Contexts Module." /* $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_AGNOSTIC_COMPONENTS */,
  [USE_SERVER_FUNCTIONS]:
    /* valid */ "(Special) Server Functions are specifically triggered by Client Components, such as is the case here in a Special Client Contexts Module." /* $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_SERVER_FUNCTIONS */,
  [USE_CLIENT_CONTEXTS]:
    /* valid */ "(Special) Client Contexts Components can compose with one another." /* $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_CLIENT_CONTEXTS */,
  [USE_AGNOSTIC_CONDITIONS]:
    /* valid */ "(Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can render safely on the client just like they can on the server, in a mechanism that allows (Special) Client Contexts Components to safely and indirectly compose with child Server Components within Client Contexts Modules." /* $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_AGNOSTIC_CONDITIONS */,
  module:
    "Special Client Contexts Module" /* $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#MODULE */,
  modulePeriod:
    "Special Client Contexts Module." /* $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#MODULEPERIOD */,
  kinds:
    "Special Client Contexts" /* $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#KINDS */,
  importingAModule:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#MODULEPERIOD" /* $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#IMPORTINGAMODULE */,
  importingByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#IMPORTINGBYAFOLDER */,
  importingViaStrategy:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTING $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#VIASTRATEGYPERIOD" /* $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#IMPORTINGVIASTRATEGY */,
  importingViaStrategyByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTING $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#VIASTRATEGY $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#IMPORTINGVIASTRATEGYBYAFOLDER */,
});

export const agnosticConditionsComments = Object.freeze({
  [USE_SERVER_LOGICS]:
    /* invalid */ "Prime Server Logics cannot run on both the server and the client, such as would be the case here in a Special Agnostic Conditions Module." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_SERVER_LOGICS */,
  [USE_CLIENT_LOGICS]:
    /* invalid */ "Prime Client Logics cannot run on both the server and the client, such as would be the case here in a Special Agnostic Conditions Module." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_CLIENT_LOGICS */,
  [USE_AGNOSTIC_LOGICS]:
    /* valid */ "Prime Agnostic Logics, being environment-agnostic logic, can safely support Agnostic Components, including (Special) Agnostic Conditions Components. (In this case this is necessary for the import of the `conditionAgnosticComponent` function needed to make Agnostic Conditions Components.)" /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_AGNOSTIC_LOGICS */,
  [USE_SERVER_COMPONENTS]:
    /* valid */ "Lineal Server Components are to be paired as `ComponentForServer` components with `ComponentForClient` components to form (Special) Agnostic Conditions Components." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_SERVER_COMPONENTS */,
  [USE_CLIENT_COMPONENTS]:
    /* valid */ "Lineal Client Components are to be paired as `ComponentForClient` components with `ComponentForServer` components to form (Special) Agnostic Conditions Components." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_CLIENT_COMPONENTS */,
  [USE_AGNOSTIC_COMPONENTS]:
    /* valid */ "Lineal Agnostic Components can take the place of `ComponentForServer` and/or `ComponentForClient` components to form (Special) Agnostic Conditions Components." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_AGNOSTIC_COMPONENTS */,
  [USE_SERVER_FUNCTIONS]:
    /* invalid */ "(Special) Server Functions are not accepted because (Special) Agnostic Conditions Components only take finite, imported components as arguments in their making. As such, assigning props to these components, including Server Functions, is not made within Agnostic Conditions Modules." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_SERVER_FUNCTIONS */,
  [USE_CLIENT_CONTEXTS]:
    /* invalid */ "(Special) Client Contexts Components cannot be used as component arguments for (Special) Agnostic Conditions Components since they only take Lineal Components as arguments in their making." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_CLIENT_CONTEXTS */,
  [USE_AGNOSTIC_CONDITIONS]:
    /* valid */ "(Special) Agnostic Conditions Components, despite not being Lineal Components themselves, output components that can only be Lineal and compatible with their attributed rendering environments, making them acceptable arguments in the making of Agnostic Conditions Components." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_AGNOSTIC_CONDITIONS */,
  module:
    "Special Agnostic Conditions Module" /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#MODULE */,
  modulePeriod:
    "Special Agnostic Conditions Module." /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#MODULEPERIOD */,
  kinds:
    "Special Agnostic Conditions" /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#KINDS */,
  importingAModule:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#MODULEPERIOD" /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#IMPORTINGAMODULE */,
  importingByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#IMPORTINGBYAFOLDER */,
  importingViaStrategy:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTING $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#VIASTRATEGYPERIOD" /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#IMPORTINGVIASTRATEGY */,
  importingViaStrategyByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTING $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#VIASTRATEGY $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#IMPORTINGVIASTRATEGYBYAFOLDER */,
});
