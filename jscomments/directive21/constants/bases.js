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

export const directive21Comments = {
  // $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#USE_SERVER_LOGICS
  [USE_SERVER_LOGICS]: {
    [USE_SERVER_LOGICS]:
      /* valid */ "Prime Server Logics can compose with one another.",
    [USE_CLIENT_LOGICS]:
      /* invalid */ "Prime Client Logics should never leak to the server.",
    [USE_AGNOSTIC_LOGICS]:
      /* valid */ "Prime Agnostic Logics can run safely on the server just like they can on the client.",
    [USE_SERVER_COMPONENTS]:
      /* valid */ "Lineal Server Components are OK to be composed with Prime Server Logics as long as the Prime Server Logics Module, by convention, does not export React components.",
    [USE_CLIENT_COMPONENTS]:
      /* invalid */ "Lineal Client Components, like any Client Components, cannot be tinkered with on the server.",
    [USE_AGNOSTIC_COMPONENTS]:
      /* valid */ "Lineal Agnostic Components can be composed with any Prime Environment Logics agnostically as long as the Prime Environment Logics Module, by convention, does not export React components.",
    [USE_SERVER_FUNCTIONS]:
      /* valid */ "(Special) Server Functions, being able to import one another, can compose and do so via Prime Server Logics, despite this method seeming superfluous at first glance. (Perhaps a preferrable use case for this has been found or could be found either today or in the future.)",
    [USE_CLIENT_CONTEXTS]:
      /* invalid */ "Client Contexts Components, like any Client Components, cannot be tinkered with on the server.",
    [USE_AGNOSTIC_CONDITIONS]:
      /* valid */ "(Special) Agnostic Conditions Components are able to safely render on the server, guaranteeing that only their `ComponentForServer` will be effectively involved in Prime Server Logics Modules.",
  },
  [USE_CLIENT_LOGICS]: {
    [USE_SERVER_LOGICS]:
      /* invalid */ "Prime Server Logics should never leak to the client.",
    [USE_CLIENT_LOGICS]:
      /* valid */ "Prime Client Logics can compose with one another.",
    [USE_AGNOSTIC_LOGICS]:
      /* valid */ "Prime Agnostic Logics can run safely on the client just like they can on the server.",
    [USE_SERVER_COMPONENTS]:
      /* invalid */ "Lineal Server Components cannot be thinkered with on the client.",
    [USE_CLIENT_COMPONENTS]:
      /* valid */ "Lineal Client Components, like any Client Components, are OK to be composed with Prime Client Logics as long as the Prime Client Logics Module, by convention, does not export React components.",
    [USE_AGNOSTIC_COMPONENTS]:
      /* valid */ "Lineal Agnostic Components can be composed with any Prime Environment Logics agnostically as long as the Prime Environment Logics Module, by convention, does not export React components.",
    [USE_SERVER_FUNCTIONS]:
      /* valid */ "(Special) Server Functions can technically be attached to Client Components that are being tinkered with within Client Logics Modules.",
    [USE_CLIENT_CONTEXTS]:
      /* valid */ "(Special) Client Contexts Components, like any Client Components, are OK to be composed with Prime Client Logics as long as the Prime Client Logics Module, by convention, does not export React components.",
    [USE_AGNOSTIC_CONDITIONS]:
      /* valid */ "(Special) Agnostic Conditions Components are able to safely render on the client, guaranteeing that only their `ComponentForClient` will be effectively involved in Prime Client Logics Modules.",
  },
  [USE_AGNOSTIC_LOGICS]: {
    [USE_SERVER_LOGICS]:
      /* invalid */ "Prime Server Logics cannot run on both the server and the client.",
    [USE_CLIENT_LOGICS]:
      /* invalid */ "Prime Client Logics cannot run on both the server and the client.",
    [USE_AGNOSTIC_LOGICS]:
      /* valid */ "Prime Agnostic Logics can compose with one another.",
    [USE_SERVER_COMPONENTS]:
      /* invalid */ "Lineal Server Components cannot be tinkered with on both the server and the client.",
    [USE_CLIENT_COMPONENTS]:
      /* invalid */ "Lineal Client Components, like any Client Components, cannot be tinkered with on both the server and the client.",
    [USE_AGNOSTIC_COMPONENTS]:
      /* valid */ "Lineal Agnostic Components can be composed with any Prime Environment Logics agnostically as long as the Prime Environment Logics Module, by convention, does not export React components.",
    [USE_SERVER_FUNCTIONS]:
      /* invalid */ "(Special) Server Functions can be modified on the server and on the client, but their use cases on both environments are not one-to-one compatible, since they're being addressed as they are on the server and addressed as references on the client.",
    [USE_CLIENT_CONTEXTS]:
      /* invalid */ "(Special) Client Contexts Components, like any Client Components, cannot be tinkered with on both the server and the client.",
    [USE_AGNOSTIC_CONDITIONS]:
      /* valid */ "(Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can be composed with any Prime Environment Logics agnostically as long as the Prime Environment Logics Module, by convention, does not export React components.",
  },
  [USE_SERVER_COMPONENTS]: {
    [USE_SERVER_LOGICS]:
      /* valid */ "Prime Server Logics, being logic from the server, can safely support Lineal Server Components.",
    [USE_CLIENT_LOGICS]:
      /* invalid */ "Prime Client Logics should never leak to the server.",
    [USE_AGNOSTIC_LOGICS]:
      /* valid */ "Prime Agnostic Logics can run safely on the server just like they can on the client.",
    [USE_SERVER_COMPONENTS]:
      /* valid */ "Lineal Server Components can compose with one another, now that thanks to the inclusion of Agnostic Components they are actual Server Components.",
    [USE_CLIENT_COMPONENTS]:
      /* valid */ "Lineal Client Components can be nested inside Server Components to create client boundaries when the root of the application is planted on the server.",
    [USE_AGNOSTIC_COMPONENTS]:
      /* valid */ "Lineal Agnostic Components can render safely on the server just like they can on the client.",
    [USE_SERVER_FUNCTIONS]:
      /* valid */ "(Special) Server Functions can be passed to imported Client Components within Lineal Server Components Modules, even though indeed Lineal Server Components Modules and Lineal Server Components can make their own Server Functions through inline 'use server' directives.",
    [USE_CLIENT_CONTEXTS]:
      /* valid */ "(Special) Client Contexts Components can be nested inside Server Components to wrap some of the tree with client state accessible through child Client Components, and to pass through Server Components when the root of the application is planted on the server.",
    [USE_AGNOSTIC_CONDITIONS]:
      /* valid */ "(Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can render safely on the server just like they can on the client.",
  },
  [USE_CLIENT_COMPONENTS]: {
    [USE_SERVER_LOGICS]:
      /* invalid */ "Prime Server Logics should never leak to the client.",
    [USE_CLIENT_LOGICS]:
      /* valid */ "Prime Client Logics, being logic from the client, can safely support Lineal Client Components, like any Client Components.",
    [USE_AGNOSTIC_LOGICS]:
      /* valid */ "Prime Agnostic Logics can run safely on the client just like they can on the server.",
    [USE_SERVER_COMPONENTS]:
      /* invalid */ "Lineal Server Components cannot be the children of Lineal Client Components.",
    [USE_CLIENT_COMPONENTS]:
      /* valid */ "Lineal Client Components can compose with one another.",
    [USE_AGNOSTIC_COMPONENTS]:
      /* valid */ "Lineal Agnostic Components can render safely on the client just like they can on the server.",
    [USE_SERVER_FUNCTIONS]:
      /* valid */ "(Special) Server Functions are specifically triggered by Client Components.",
    [USE_CLIENT_CONTEXTS]:
      /* valid */ "(Special) Client Contexts Components can effectively become Lineal and only render their children on the client via this mechanism since, by a Client Contexts Component being the child of a Lineal Client Component, the Client Contexts Component's children become the grand-children of an ancestor Lineal Client Component, enforcing them to render exclusively on the client.",
    [USE_AGNOSTIC_CONDITIONS]:
      /* valid */ "(Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can render safely on the client just like they can on the server.",
  },
  [USE_AGNOSTIC_COMPONENTS]: {
    [USE_SERVER_LOGICS]:
      /* invalid */ "Prime Server Logics cannot run on both the server and the client.",
    [USE_CLIENT_LOGICS]:
      /* invalid */ "Prime Client Logics cannot run on both the server and the client.",
    [USE_AGNOSTIC_LOGICS]:
      /* valid */ "Prime Agnostic Logics, being environment-agnostic logic, can safely support Agnostic Components.",
    [USE_SERVER_COMPONENTS]:
      /* invalid */ "Lineal Server Components, unlike Lineal Client Components, cannot make silos of their own once on the opposing environment (the client in this case), and therefore cannot be executed from the client, making them unable to execute agnostically from both the server and the client.",
    [USE_CLIENT_COMPONENTS]:
      /* valid */ "Lineal Client Components can be nested inside Agnostic Components to create client boundaries when the root of the application is planted on the server.",
    [USE_AGNOSTIC_COMPONENTS]:
      /* valid */ "Lineal Agnostic Components, can compose with one another.",
    [USE_SERVER_FUNCTIONS]:
      /* valid */ "(Special) Server Functions can be passed to Client Components as props when Client Components are also legally imported into Agnostic Components Modules.",
    [USE_CLIENT_CONTEXTS]:
      /* valid */ "(Special) Client Contexts Components can be nested inside Agnostic Components to wrap some of the tree with client state accessible through child Client Components, and to pass through Server Components (if still on the Server Tree) when the root of the application is planted on the server.",
    [USE_AGNOSTIC_CONDITIONS]:
      /* valid */ "(Special) Agnostic Conditions Components can compose with Lineal Agnostic Components as if they were Lineal Agnostic Components themselves, making them a necessary mechanism for Server Components to be nested in Agnostic Components.",
  },
  [USE_SERVER_FUNCTIONS]: {
    [USE_SERVER_LOGICS]:
      /* valid */ "Prime Server Logics, being logic from the server, can safely support (Special) Server Functions.",
    [USE_CLIENT_LOGICS]:
      /* invalid */ "Prime Client Logics should never leak to the server.",
    [USE_AGNOSTIC_LOGICS]:
      /* valid */ "Prime Agnostic Logics can run safely on the server just like they can on the client.",
    [USE_SERVER_COMPONENTS]:
      /* invalid */ "Lineal Server Components aren't allowed because (Special) Server Functions have no business working with React Components.",
    [USE_CLIENT_COMPONENTS]:
      /* invalid */ "Lineal Client Components aren't allowed because (Special) Server Functions have no business working with React Components.",
    [USE_AGNOSTIC_COMPONENTS]:
      /* invalid */ "Lineal Agnostic Components aren't allowed because (Special) Server Functions have no business working with React Components.",
    [USE_SERVER_FUNCTIONS]:
      /* valid */ "(Special) Server Functions, even though they don't need to import one another and the same results can be generated via Prime Server Logics for the outcome of a single Server Function, can still compose with one another. (Perhaps a preferrable use case for this has been found or could be found either today or in the future.)",
    [USE_CLIENT_CONTEXTS]:
      /* invalid */ "(Special) Client Contexts Components aren't allowed because (Special) Server Functions have no business working with React Components.",
    [USE_AGNOSTIC_CONDITIONS]:
      /* invalid */ "(Special) Agnostic Conditions Components aren't allowed because (Special) Server Functions have no business working with React Components.",
  },
  [USE_CLIENT_CONTEXTS]: {
    [USE_SERVER_LOGICS]:
      /* invalid */ "Prime Server Logics should never leak to the client.",
    [USE_CLIENT_LOGICS]:
      /* valid */ "Prime Client Logics, being logic from the client, can safely support (Special) Client Contexts Components, like any Client Components.",
    [USE_AGNOSTIC_LOGICS]:
      /* valid */ "Prime Agnostic Logics can run safely on the client just like they can on the server.",
    [USE_SERVER_COMPONENTS]:
      /* invalid */ "Lineal Server Components may only pass through (Special) Client Contexts Components via the children prop within Server Components Modules.",
    [USE_CLIENT_COMPONENTS]:
      /* valid */ "Lineal Client Components can create client boundaries within (Special) Client Contexts Components.",
    [USE_AGNOSTIC_COMPONENTS]:
      /* valid */ "Lineal Agnostic Components can render safely on the client just like they can on the server.",
    [USE_SERVER_FUNCTIONS]:
      /* valid */ "(Special) Server Functions are specifically triggered by Client Components.",
    [USE_CLIENT_CONTEXTS]:
      /* valid */ "(Special) Client Contexts Components can compose with one another.",
    [USE_AGNOSTIC_CONDITIONS]:
      /* valid */ "(Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can render safely on the client just like they can on the server, in a mechanism that allows (Special) Client Contexts Components to safely and indirectly compose with child Server Components within Client Contexts Modules.",
  },
  [USE_AGNOSTIC_CONDITIONS]: {
    [USE_SERVER_LOGICS]:
      /* invalid */ "Prime Server Logics cannot run on both the server and the client.",
    [USE_CLIENT_LOGICS]:
      /* invalid */ "Prime Client Logics cannot run on both the server and the client.",
    [USE_AGNOSTIC_LOGICS]:
      /* valid */ "Prime Agnostic Logics, being environment-agnostic logic, can safely support Agnostic Components, including (Special) Agnostic Conditions Components. (In this case this is necessary for the import of the `conditionAgnosticComponent` function needed to make Agnostic Conditions Components.)",
    [USE_SERVER_COMPONENTS]:
      /* valid */ "Lineal Server Components are to be paired as `ComponentForServer` components with `ComponentForClient` components to form (Special) Agnostic Conditions Components.",
    [USE_CLIENT_COMPONENTS]:
      /* valid */ "Lineal Client Components are to be paired as `ComponentForClient` components with `ComponentForServer` components to form (Special) Agnostic Conditions Components.",
    [USE_AGNOSTIC_COMPONENTS]:
      /* valid */ "Lineal Agnostic Components can take the place of `ComponentForServer` and/or `ComponentForClient` components to form (Special) Agnostic Conditions Components.",
    [USE_SERVER_FUNCTIONS]:
      /* invalid */ "(Special) Server Functions are not accepted because (Special) Agnostic Conditions Components only take finite, imported components as arguments in their making. As such, assigning props to these components, including Server Functions, is not made within Agnostic Conditions Modules.",
    [USE_CLIENT_CONTEXTS]:
      /* invalid */ "(Special) Client Contexts Components cannot be used as component arguments for (Special) Agnostic Conditions Components since they only take Lineal Components as arguments in their making.",
    [USE_AGNOSTIC_CONDITIONS]:
      /* valid */ "(Special) Agnostic Conditions Components, despite not being Lineal Components themselves, output components that can only be Lineal and compatible with their attributed rendering environments, making them acceptable arguments in the making of Agnostic Conditions Components.",
  },
  [USE_AGNOSTIC_STRATEGIES]:
    /* valid */ "(Special) Agnostic Strategies Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a 'use agnostic strategies' importFileCommentedDirective.)",
};
