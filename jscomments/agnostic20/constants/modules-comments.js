import {
  USE_SERVER_LOGICS,
  USE_CLIENT_LOGICS,
  USE_AGNOSTIC_LOGICS,
  USE_SERVER_COMPONENTS,
  USE_CLIENT_COMPONENTS,
  USE_AGNOSTIC_COMPONENTS,
  USE_SERVER_FUNCTIONS,
} from "../../../library/_commons/constants/bases.js";

export const serverLogicsComments = Object.freeze({
  // $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#USE_SERVER_LOGICS
  [USE_SERVER_LOGICS]:
    /* valid */ "Server Logics can compose with one another.",
  [USE_SERVER_COMPONENTS]:
    /* valid */ "Server Components are OK to be composed with Server Logics as long as the Server Logics Module, by convention, does not export React components.",
  [USE_SERVER_FUNCTIONS]:
    /* valid */ "Server Functions, being able to import one another, can compose and do so via Server Logics, despite this method seeming superfluous at first glance. (Perhaps a preferrable use case for this has been found or could be found either today or in the future.)",
  [USE_CLIENT_LOGICS]:
    /* invalid */ "Client Logics should never leak to the server, such as would be the case here in a Server Logics Module.",
  [USE_CLIENT_COMPONENTS]:
    /* invalid */ "Client Components cannot be tinkered with on the server.",
  [USE_AGNOSTIC_LOGICS]:
    /* valid */ "Agnostic Logics can run safely on the server just like they can on the client, such as is the case here in a Server Logics Module.",
  [USE_AGNOSTIC_COMPONENTS]:
    /* valid */ "Agnostic Components can be composed with Logics on the server just like they can on the client, as long at the Server Logics Module, by convention, does not export React components.",
  module: "Server Logics Module",
  modulePeriod: "Server Logics Module.",
});

export const serverComponentsComments = Object.freeze({
  [USE_SERVER_LOGICS]:
    /* valid */ "Server Logics, being logic from the server, can safely support Server Components.",
  [USE_SERVER_COMPONENTS]:
    /* valid */ "Server Components can compose with one another, assuming thanks to the inclusion of the 'use agnostic' directive that they are actual Server Components.",
  [USE_SERVER_FUNCTIONS]:
    /* valid */ "Server Functions can be passed to imported Client Components within Server Components Modules, even though indeed Server Components Modules and Server Components can make their own Server Functions through inline 'use server' directives.",
  [USE_CLIENT_LOGICS]:
    /* invalid */ "Client Logics should never leak to the server, such as would be the case here in a Server Components Module.",
  [USE_CLIENT_COMPONENTS]:
    /* valid */ "Client Components can be nested inside Server Components either to wrap some of the tree with client state accessible through child Client Components and pass through Server Components, or to create client boundaries when the root of the application is planted on the server.",
  [USE_AGNOSTIC_LOGICS]:
    /* valid */ "Agnostic Logics can run safely on the server just like they can on the client, such as is the case here in a Server Components Module.",
  [USE_AGNOSTIC_COMPONENTS]:
    /* valid */ "Agnostic Components can render safely on the server just like they can on the client.",
  module: "Server Components Module",
  modulePeriod: "Server Components Module.",
});

export const serverFunctionsComments = Object.freeze({
  [USE_SERVER_LOGICS]:
    /* valid */ "Server Logics, being logic from the server, can safely support Server Functions.",
  [USE_SERVER_COMPONENTS]:
    /* invalid */ "Server Components aren't allowed because Server Functions have no business working with React Components.",
  [USE_SERVER_FUNCTIONS]:
    /* valid */ "Server Functions, even though they don't need to import one another and the same results can be generated via Server Logics for the outcome of a single Server Function, can still compose with one another. (Perhaps a preferrable use case for this has been found or could be found either today or in the future.)",
  [USE_CLIENT_LOGICS]:
    /* invalid */ "Client Logics should never leak to the server, such as would be the case here in a Server Functions Module.",
  [USE_CLIENT_COMPONENTS]:
    /* invalid */ "Client Components aren't allowed because Server Functions have no business working with React Components.",
  [USE_AGNOSTIC_LOGICS]:
    /* valid */ "Agnostic Logics can run safely on the server just like they can on the client, such as is the case here in a Server Functions Module.",
  [USE_AGNOSTIC_COMPONENTS]:
    /* invalid */ "Agnostic Components aren't allowed because Server Functions have no business working with React Components.",
  module: "Server Functions Module",
  modulePeriod: "Server Functions Module.",
});

export const clientLogicsComments = Object.freeze({
  [USE_SERVER_LOGICS]:
    /* invalid */ "Server Logics should never leak to the client, such as would be the case here in a Client Logics Module.",
  [USE_SERVER_COMPONENTS]:
    /* invalid */ "Server Components cannot be thinkered with on the client.",
  [USE_SERVER_FUNCTIONS]:
    /* valid */ "Server Functions can technically be attached to Client Components that are being tinkered with within Client Logics Modules.",
  [USE_CLIENT_LOGICS]:
    /* valid */ "Client Logics can compose with one another.",
  [USE_CLIENT_COMPONENTS]:
    /* valid */ "Client Components are OK to be composed with Client Logics as long as the Client Logics Module, by convention, does not export React components.",
  [USE_AGNOSTIC_LOGICS]:
    /* valid */ "Agnostic Logics can run safely on the client just like they can on the server, such as is the case here in a Client Logics Module.",
  [USE_AGNOSTIC_COMPONENTS]:
    /* valid */ "Agnostic Components can be composed with Logics on the client just like they can on the server, as long as the Client Logics Module, by convention, does not export React components.",
  module: "Client Logics Module",
  modulePeriod: "Client Logics Module.",
});

export const clientComponentsComments = Object.freeze({
  [USE_SERVER_LOGICS]:
    /* invalid */ "Server Logics should never leak to the client, such as would be the case here in a Client Components Module.",
  [USE_SERVER_COMPONENTS]:
    /* invalid */ "Server Components may only pass through Client Components via the children prop within Server Components Modules.",
  [USE_SERVER_FUNCTIONS]:
    /* valid */ "Server Functions are specifically triggered by Client Components.",
  [USE_CLIENT_LOGICS]:
    /* valid */ "Client Logics, being logic from the client, can safely support Client Components.",
  [USE_CLIENT_COMPONENTS]:
    /* valid */ "Client Components can compose with one another.",
  [USE_AGNOSTIC_LOGICS]:
    /* valid */ "Agnostic Logics can run safely on the client just like they can on the server, such as is the case here in a Client Components Module.",
  [USE_AGNOSTIC_COMPONENTS]:
    /* valid */ "Agnostic Components can render safely on the client just like they can on the server.",
  module: "Client Components Module",
  modulePeriod: "Client Components Module.",
});

export const agnosticLogicsComments = Object.freeze({
  [USE_SERVER_LOGICS]:
    /* invalid */ "Server Logics cannot run on both the server and the client, such as would be the case here in an Agnostic Logics Module.",
  [USE_SERVER_COMPONENTS]:
    /* invalid */ "Server Components cannot be tinkered with on both the server and the client.",
  [USE_SERVER_FUNCTIONS]:
    /* invalid */ "Server Functions can be modified on the server and on the client, but their use cases on both environments are not one-to-one compatible, since they're being addressed as they are on the server and addressed as references on the client.",
  [USE_CLIENT_LOGICS]:
    /* invalid */ "Client Logics cannot run on both the server and the client, such as would be the case here in an Agnostic Logics Module.",
  [USE_CLIENT_COMPONENTS]:
    /* invalid */ "Client Components cannot be tinkered with on both the server and the client.",
  [USE_AGNOSTIC_LOGICS]:
    /* valid */ "Agnostic Logics can compose with one another.",
  [USE_AGNOSTIC_COMPONENTS]:
    /* valid */ "Agnostic Components can be composed with Logics agnostically as long as the Agnostic Logics Module, by convention, does not export React components.",
  module: "Agnostic Logics Module",
  modulePeriod: "Agnostic Logics Module.",
});

export const agnosticComponentsComments = Object.freeze({
  [USE_SERVER_LOGICS]:
    /* invalid */ "Server Logics cannot run on both the server and the client, such as would be the case here in an Agnostic Components Module.",
  [USE_SERVER_COMPONENTS]:
    /* invalid */ "Server Components, unlike Client Components, cannot make silos of their own once on the opposing environment (the client in this case), and therefore cannot be executed from the client, making them unable to execute agnostically from both the server and the client.",
  [USE_SERVER_FUNCTIONS]:
    /* valid */ "Server Functions can be passed to Client Components as props when Client Components are also legally imported into Agnostic Components Modules.",
  [USE_CLIENT_LOGICS]:
    /* invalid */ "Client Logics cannot run on both the server and the client, such as would be the case here in an Agnostic Components Module.",
  [USE_CLIENT_COMPONENTS]:
    /* valid */ "Client Components can be nested inside Agnostic Components either to wrap some of the tree with client state accessible through child Client Components and pass through Server Components (if still on the Server Tree), or to create client boundaries when the root of the application is planted on the server.",
  [USE_AGNOSTIC_LOGICS]:
    /* valid */ "Agnostic Logics, being environment-agnostic logic, can safely support Agnostic Components.",
  [USE_AGNOSTIC_COMPONENTS]:
    /* valid */ "Agnostic Components can compose with one another.",
  module: "Agnostic Components Module",
  modulePeriod: "Agnostic Components Module.",
});
