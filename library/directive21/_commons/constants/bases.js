import {
  directive21ConfigName,
  USE_SERVER_LOGICS as COMMONS_USE_SERVER_LOGICS,
  USE_CLIENT_LOGICS as COMMONS_USE_CLIENT_LOGICS,
  USE_AGNOSTIC_LOGICS as COMMONS_USE_AGNOSTIC_LOGICS,
  USE_SERVER_COMPONENTS as COMMONS_USE_SERVER_COMPONENTS,
  USE_CLIENT_COMPONENTS as COMMONS_USE_CLIENT_COMPONENTS,
  USE_AGNOSTIC_COMPONENTS as COMMONS_USE_AGNOSTIC_COMPONENTS,
  USE_SERVER_FUNCTIONS as COMMONS_USE_SERVER_FUNCTIONS,
  USE_CLIENT_CONTEXTS as COMMONS_USE_CLIENT_CONTEXTS,
  USE_AGNOSTIC_CONDITIONS as COMMONS_USE_AGNOSTIC_CONDITIONS,
  USE_AGNOSTIC_STRATEGIES as COMMONS_USE_AGNOSTIC_STRATEGIES,
} from "../../../_commons/constants/bases.js";

import { makeIntroForSpecificViolationMessage } from "../../../_commons/utilities/helpers.js";

import { resolvedConfigData } from "../../../../jscomments/_commons/constants/bases.js";

/**
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').CommentedDirective} CommentedDirective
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').CommentedDirectiveWithoutUseAgnosticStrategies} CommentedDirectiveWithoutUseAgnosticStrategies
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').CommentedDirectives} CommentedDirectives
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').CommentedStrategy} CommentedStrategy
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').CommentedStrategies} CommentedStrategies
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').CommentStyles} CommentStyles
 */

// commented directives
export const USE_SERVER_LOGICS = COMMONS_USE_SERVER_LOGICS;
export const USE_CLIENT_LOGICS = COMMONS_USE_CLIENT_LOGICS;
export const USE_AGNOSTIC_LOGICS = COMMONS_USE_AGNOSTIC_LOGICS;
export const USE_SERVER_COMPONENTS = COMMONS_USE_SERVER_COMPONENTS;
export const USE_CLIENT_COMPONENTS = COMMONS_USE_CLIENT_COMPONENTS;
export const USE_AGNOSTIC_COMPONENTS = COMMONS_USE_AGNOSTIC_COMPONENTS;
export const USE_SERVER_FUNCTIONS = COMMONS_USE_SERVER_FUNCTIONS;
export const USE_CLIENT_CONTEXTS = COMMONS_USE_CLIENT_CONTEXTS;
export const USE_AGNOSTIC_CONDITIONS = COMMONS_USE_AGNOSTIC_CONDITIONS;
export const USE_AGNOSTIC_STRATEGIES = COMMONS_USE_AGNOSTIC_STRATEGIES;

// commented directives array
/** @type {CommentedDirectives} */
export const commentedDirectivesArray = Object.freeze([
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
]);

// commented directives set
/** @type {ReadonlySet<CommentedDirective>} */
export const commentedDirectivesSet = new Set(commentedDirectivesArray); // no longer used exported to satisfy static type inference

// mapped commented directives to their extension rules
export const commentedDirectives_extensionRules = Object.freeze({
  [USE_SERVER_LOGICS]: false, // Must not end with 'x'
  [USE_CLIENT_LOGICS]: false,
  [USE_AGNOSTIC_LOGICS]: false,
  [USE_SERVER_COMPONENTS]: true, // Must end with 'x'
  [USE_CLIENT_COMPONENTS]: true,
  [USE_AGNOSTIC_COMPONENTS]: true,
  [USE_SERVER_FUNCTIONS]: false,
  [USE_CLIENT_CONTEXTS]: true,
  [USE_AGNOSTIC_CONDITIONS]: true,
  [USE_AGNOSTIC_STRATEGIES]: null, // Any extension allowed
});

// commented strategies
export const AT_SERVER_LOGICS = "@serverLogics";
export const AT_CLIENT_LOGICS = "@clientLogics";
export const AT_AGNOSTIC_LOGICS = "@agnosticLogics";
export const AT_SERVER_COMPONENTS = "@serverComponents";
export const AT_CLIENT_COMPONENTS = "@clientComponents";
export const AT_AGNOSTIC_COMPONENTS = "@agnosticComponents";
export const AT_SERVER_FUNCTIONS = "@serverFunctions";
export const AT_CLIENT_CONTEXTS = "@clientContexts";
export const AT_AGNOSTIC_CONDITIONS = "@agnosticConditions";

// commented strategies array
/** @type {CommentedStrategies} */
export const strategiesArray = Object.freeze([
  AT_SERVER_LOGICS,
  AT_CLIENT_LOGICS,
  AT_AGNOSTIC_LOGICS,
  AT_SERVER_COMPONENTS,
  AT_CLIENT_COMPONENTS,
  AT_AGNOSTIC_COMPONENTS,
  AT_SERVER_FUNCTIONS,
  AT_CLIENT_CONTEXTS,
  AT_AGNOSTIC_CONDITIONS,
]);

// commented strategies set
/** @type {ReadonlySet<CommentedStrategy>} */
export const strategiesSet = new Set(strategiesArray); // no longer used exported to satisfy static type inference

// mapped commented strategies to their commented directives
export const commentedStrategies_commentedDirectives = Object.freeze({
  [AT_SERVER_LOGICS]: USE_SERVER_LOGICS,
  [AT_CLIENT_LOGICS]: USE_CLIENT_LOGICS,
  [AT_AGNOSTIC_LOGICS]: USE_AGNOSTIC_LOGICS,
  [AT_SERVER_COMPONENTS]: USE_SERVER_COMPONENTS,
  [AT_CLIENT_COMPONENTS]: USE_CLIENT_COMPONENTS,
  [AT_AGNOSTIC_COMPONENTS]: USE_AGNOSTIC_COMPONENTS,
  [AT_SERVER_FUNCTIONS]: USE_SERVER_FUNCTIONS,
  [AT_CLIENT_CONTEXTS]: USE_CLIENT_CONTEXTS,
  [AT_AGNOSTIC_CONDITIONS]: USE_AGNOSTIC_CONDITIONS,
});

// message placeholders
export const currentFileCommentedDirective = "currentFileCommentedDirective";
export const importedFileCommentedDirective = "importedFileCommentedDirective";
export const commentedDirectiveMessage = "commentedDirectiveMessage";
export const specificViolationMessage = "specificViolationMessage";
export const specificFailure = "specificFailure";

/* commentedDirectives_verificationReports */

const MODULES_MARKED_WITH_THE_ = "modules marked with the";
const _DIRECTIVE_MUST_HAVE_A_NON_JSX_FILE_EXTENSION =
  "directive must have a non-JSX file extension";
const _DIRECTIVE_MUST_HAVE_A_JSX_FILE_EXTENSION =
  "directive must have a JSX file extension";

export const commentedDirectives_verificationReports = Object.freeze({
  [USE_SERVER_LOGICS]: `${MODULES_MARKED_WITH_THE_} "${USE_SERVER_LOGICS}" ${_DIRECTIVE_MUST_HAVE_A_NON_JSX_FILE_EXTENSION}.`,
  [USE_CLIENT_LOGICS]: `${MODULES_MARKED_WITH_THE_} "${USE_CLIENT_LOGICS}" ${_DIRECTIVE_MUST_HAVE_A_NON_JSX_FILE_EXTENSION}.`,
  [USE_AGNOSTIC_LOGICS]: `${MODULES_MARKED_WITH_THE_} "${USE_AGNOSTIC_LOGICS}" ${_DIRECTIVE_MUST_HAVE_A_NON_JSX_FILE_EXTENSION}.`,
  [USE_SERVER_COMPONENTS]: `${MODULES_MARKED_WITH_THE_} "${USE_SERVER_COMPONENTS}" ${_DIRECTIVE_MUST_HAVE_A_JSX_FILE_EXTENSION}.`,
  [USE_CLIENT_COMPONENTS]: `${MODULES_MARKED_WITH_THE_} "${USE_CLIENT_COMPONENTS}" ${_DIRECTIVE_MUST_HAVE_A_JSX_FILE_EXTENSION}.`,
  [USE_AGNOSTIC_COMPONENTS]: `${MODULES_MARKED_WITH_THE_} "${USE_AGNOSTIC_COMPONENTS}" ${_DIRECTIVE_MUST_HAVE_A_JSX_FILE_EXTENSION}.`,
  [USE_SERVER_FUNCTIONS]: `${MODULES_MARKED_WITH_THE_} "${USE_SERVER_FUNCTIONS}" ${_DIRECTIVE_MUST_HAVE_A_NON_JSX_FILE_EXTENSION}.`,
  [USE_CLIENT_CONTEXTS]: `${MODULES_MARKED_WITH_THE_} "${USE_CLIENT_CONTEXTS}" ${_DIRECTIVE_MUST_HAVE_A_JSX_FILE_EXTENSION}.`,
  [USE_AGNOSTIC_CONDITIONS]: `${MODULES_MARKED_WITH_THE_} "${USE_AGNOSTIC_CONDITIONS}" ${_DIRECTIVE_MUST_HAVE_A_JSX_FILE_EXTENSION}.`,
  [USE_AGNOSTIC_STRATEGIES]: `${MODULES_MARKED_WITH_THE_} "${USE_AGNOSTIC_STRATEGIES}" directive are free to have the file extension of their choosing. (This is not a problem and should never surface.)`,
});

/* commentedDirectives_blockedImports */

/**
 * Makes a blockedImport object for the identified blocked import at hand.
 * @template {CommentedDirectiveWithoutUseAgnosticStrategies} T
 * @template {CommentedDirectiveWithoutUseAgnosticStrategies} U
 * @param {T} currentFileCommentedDirective The current file's commented directive.
 * @param {U} importedFileCommentedDirective The imported file's commented directive.
 * @returns The blockedImport object for the identified blocked import at hand.
 */
export const makeBlockedImport = (
  currentFileCommentedDirective,
  importedFileCommentedDirective
) => {
  return Object.freeze({
    blockedImport: importedFileCommentedDirective,
    message: `${makeIntroForSpecificViolationMessage(
      currentFileCommentedDirective,
      importedFileCommentedDirective
    )} ${
      resolvedConfigData[directive21ConfigName][currentFileCommentedDirective][
        importedFileCommentedDirective
      ].value
    }`,
  });
};

export const commentedDirectives_blockedImports = Object.freeze({
  [USE_SERVER_LOGICS]: Object.freeze([
    // USE_SERVER_LOGICS allowed, because Prime Server Logics can compose with one another.
    makeBlockedImport(
      USE_SERVER_LOGICS,
      USE_CLIENT_LOGICS
    ) /* Prime Client Logics should never leak to the server. */,
    // USE_AGNOSTIC_LOGICS allowed, because Prime Agnostic Logics can run safely on the server just like they can on the client.
    // USE_SERVER_COMPONENTS allowed, because Lineal Server Components are OK to be composed with Prime Server Logics as long as the Prime Server Logics Module, by convention, does not export React components.
    makeBlockedImport(
      USE_SERVER_LOGICS,
      USE_CLIENT_COMPONENTS
    ) /* Lineal Client Components, like any Client Components, cannot be tinkered with on the server. */,
    // USE_AGNOSTIC_COMPONENTS allowed, because Lineal Agnostic Components can be composed with any Prime Environment Logics agnostically, as long as the Prime Environment Logics Module, by convention, does not export React components.
    // USE_SERVER_FUNCTIONS allowed, because (Special) Server Functions, being able to import one another, can compose and do so via Prime Server Logics, despite this method seeming superfluous at first glance. (Perhaps a preferrable use case for this has been found or could be found either today or in the future.)
    makeBlockedImport(
      USE_SERVER_LOGICS,
      USE_CLIENT_CONTEXTS
    ) /* (Special) Client Contexts Components, like any Client Components, cannot be tinkered with on the server. */,
    // USE_AGNOSTIC_CONDITIONS allowed, because (Special) Agnostic Conditions Components are able to safely render on the server, guaranteeing that only their `ComponentForServer` will be effectively involved in Prime Server Logics Modules.
  ]),
  [USE_CLIENT_LOGICS]: Object.freeze([
    makeBlockedImport(
      USE_CLIENT_LOGICS,
      USE_SERVER_LOGICS
    ) /* Prime Server Logics should never leak to the client. */,
    // USE_CLIENT_LOGICS allowed, because Prime Client Logics can compose with one another.
    // USE_AGNOSTIC_LOGICS allowed, because Prime Agnostic Logics can run safely on the client just like they can on the server.
    makeBlockedImport(
      USE_CLIENT_LOGICS,
      USE_SERVER_COMPONENTS
    ) /* Lineal Server Components cannot be tinkered with on the client. */,
    // USE_CLIENT_COMPONENTS allowed, because Prime Client Logics, like any Client Components, are OK to be composed with Prime Client Logics as long as the Prime Client Logics Module, by convention, does not export React components.
    // USE_AGNOSTIC_COMPONENTS allowed, because Lineal Agnostic Components can be composed with any Prime Environment Logics agnostically, as long as the Prime Environment Logics Module, by convention, does not export React components.
    // USE_SERVER_FUNCTIONS allowed, because (Special) Server Functions can technically be attached to any Client Components that are being tinkered with within Client Logics Modules.
    // USE_CLIENT_CONTEXTS allowed, because (Special) Client Contexts Components, like any Client Components, are OK to be composed with Prime Client Logics as long as the Prime Client Logics Module, by convention, does not export React components.
    // USE_AGNOSTIC_CONDITIONS allowed, because (Special) Agnostic Conditions Components are able to safely render on the client, guaranteeing that only their `ComponentForClient` will be effectively involved in Prime Client Logics Modules.
  ]),
  [USE_AGNOSTIC_LOGICS]: Object.freeze([
    makeBlockedImport(
      USE_AGNOSTIC_LOGICS,
      USE_SERVER_LOGICS
    ) /* Prime Server Logics cannot run on both the server and the client. */,
    makeBlockedImport(
      USE_AGNOSTIC_LOGICS,
      USE_CLIENT_LOGICS
    ) /* Prime Client Logics cannot run on both the server and the client. */,
    // USE_AGNOSTIC_LOGICS allowed, because Prime Agnostic Logics can compose with one another.
    makeBlockedImport(
      USE_AGNOSTIC_LOGICS,
      USE_SERVER_COMPONENTS
    ) /* Lineal Server Components cannot be tinkered with on both the server and the client. */,
    makeBlockedImport(
      USE_AGNOSTIC_LOGICS,
      USE_CLIENT_COMPONENTS
    ) /* Lineal Client Components, like any Client Components, cannot be tinkered with on both the server and the client. */,
    // USE_AGNOSTIC_COMPONENTS allowed, because Lineal Agnostic Components can be composed with any Prime Environment Logics agnostically, as long as the Prime Environment Logics Module, by convention, does not export React components.
    makeBlockedImport(
      USE_AGNOSTIC_LOGICS,
      USE_SERVER_FUNCTIONS
    ) /* (Special) Server Functions can be modified on the server and on the client, but their use cases on both environments are not one-to-one compatible, since they're being addressed as they are on the server and addressed as references on the client. */,
    makeBlockedImport(
      USE_AGNOSTIC_LOGICS,
      USE_CLIENT_CONTEXTS
    ) /* (Special) Client Contexts Components, like any Client Components, cannot be tinkered with on both the server and the client. */,
    // USE_AGNOSTIC_CONDITIONS allowed, because (Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can be composed with any Prime Environment Logics agnostically, as long as the Prime Environment Logics Module, by convention, does not export React components.
  ]),
  [USE_SERVER_COMPONENTS]: Object.freeze([
    // USE_SERVER_LOGICS allowed, because Prime Server Logics, being logic from the server, can safely support Lineal Server Components.
    makeBlockedImport(
      USE_SERVER_COMPONENTS,
      USE_CLIENT_LOGICS
    ) /* Prime Client Logics should never leak to the server. */,
    // USE_AGNOSTIC_LOGICS allowed, because Prime Agnostic Logics can run safely on the server just like they can on the client.
    // USE_SERVER_COMPONENTS allowed, because Lineal Server Components can compose with one another, now that thanks to the inclusion of Agnostic Components they are actual Server Components.
    // USE_CLIENT_COMPONENTS allowed, because Lineal Client Components can be nested inside Lineal Server Components to create client boundaries when the root of the application is planted on the server.
    // USE_AGNOSTIC_COMPONENTS allowed, because Lineal Agnostic Components can render safely on the server just like they can on the client.
    // USE_SERVER_FUNCTIONS allowed, because (Special) Server Functions can be passed to imported Client Components within Lineal Server Components Modules, even though indeed Lineal Server Components Modules and Lineal Server Components can make their own Server Functions through inline `'use server'` directives.
    // USE_CLIENT_CONTEXTS allowed, because (Special) Client Contexts Components can be nested inside Lineal Server Components to wrap some of the tree with client state accessible through child Client Components, and to pass through Server Components when the root of the application is planted on the server.
    // USE_AGNOSTIC_CONDITIONS allowed, because (Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can render safely on the server just like they can on the client.
  ]),
  [USE_CLIENT_COMPONENTS]: Object.freeze([
    makeBlockedImport(
      USE_CLIENT_COMPONENTS,
      USE_SERVER_LOGICS
    ) /* Prime Server Logics should never leak to the client. */,
    // USE_CLIENT_LOGICS allowed, because Prime Client Logics, being logic from the client, can safely support Lineal Client Components, like any Client Components.
    // USE_AGNOSTIC_LOGICS allowed, because Prime Agnostic Logics can run safely on the client just like they can on the server.
    makeBlockedImport(
      USE_CLIENT_COMPONENTS,
      USE_SERVER_COMPONENTS
    ) /* Lineal Server Components cannot be the children of Lineal Client Components. */,
    // USE_CLIENT_COMPONENTS allowed, because Lineal Client Components can compose with one another.
    // USE_AGNOSTIC_COMPONENTS allowed, because Lineal Agnostic Components can render safely on the client just like they can on the server.
    // USE_SERVER_FUNCTIONS allowed, because (Special) Server Functions can be specifically triggered by Client Components.
    // USE_CLIENT_CONTEXTS allowed, because (Special) Client Contexts Components can effectively become Lineal and only render their children on the client via this mechanism since, by a Client Contexts Component being the child of a Lineal Client Component, the Client Contexts Component's children become the grandchildren of an ancestor Lineal Client Component, enforcing them to render exclusively on the client.
    // USE_AGNOSTIC_CONDITIONS allowed, because (Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can render safely on the client just like they can on the server.
  ]),
  [USE_AGNOSTIC_COMPONENTS]: Object.freeze([
    makeBlockedImport(
      USE_AGNOSTIC_COMPONENTS,
      USE_SERVER_LOGICS
    ) /* Prime Server Logics cannot run on both the server and the client. */,
    makeBlockedImport(
      USE_AGNOSTIC_COMPONENTS,
      USE_CLIENT_LOGICS
    ) /* Prime Client Logics cannot run on both the server and the client. */,
    // USE_AGNOSTIC_LOGICS allowed, because Prime Agnostic Logics, being environment-agnostic logic, can safely support any Agnostic Components.
    makeBlockedImport(
      USE_AGNOSTIC_COMPONENTS,
      USE_SERVER_COMPONENTS
    ) /* Lineal Server Components, unlike Lineal Client Components, cannot make silos of their own once on the opposing environment (the client in this case), and therefore cannot be executed from the client, making them unable to execute agnostically from both the server and the client. */,
    // USE_CLIENT_COMPONENTS allowed, because Lineal Client Components can be nested inside Lineal Agnostic Components to create client boundaries when the root of the application is planted on the server.
    // USE_AGNOSTIC_COMPONENTS allowed, because Lineal Agnostic Components can compose with one another.
    // USE_SERVER_FUNCTIONS allowed, because (Special) Server Functions can be passed to Client Components as props when Client Components are also legally imported into Agnostic Components Modules.
    // USE_CLIENT_CONTEXTS allowed, because (Special) Client Contexts Components can be nested inside Lineal Agnostic Components to wrap some of the tree with client state accessible through child Client Components, and to pass through Server Components — if still on the Server Tree — when the root of the application is planted on the server.
    // USE_AGNOSTIC_CONDITIONS allowed, because (Special) Agnostic Conditions Components can compose with Lineal Agnostic Components as if they were Lineal Agnostic Components themselves, making them a necessary mechanism for Lineal Server Components to be nested in any Agnostic Components.
  ]),
  [USE_SERVER_FUNCTIONS]: Object.freeze([
    // USE_SERVER_LOGICS allowed, because Prime Server Logics, being logic from the server, can safely support (Special) Server Functions.
    makeBlockedImport(
      USE_SERVER_FUNCTIONS,
      USE_CLIENT_LOGICS
    ) /* Prime Client Logics should never leak to the server. */,
    // USE_AGNOSTIC_LOGICS allowed, because Prime Agnostic Logics can run safely on the server just like they can on the client.
    makeBlockedImport(
      USE_SERVER_FUNCTIONS,
      USE_SERVER_COMPONENTS
    ) /* Lineal Server Components aren't allowed because (Special) Server Functions have no business working with React Components. */,
    makeBlockedImport(
      USE_SERVER_FUNCTIONS,
      USE_CLIENT_COMPONENTS
    ) /* Lineal Client Components aren't allowed because (Special) Server Functions have no business working with React Components. */,
    makeBlockedImport(
      USE_SERVER_FUNCTIONS,
      USE_AGNOSTIC_COMPONENTS
    ) /* Lineal Agnostic Components aren't allowed because (Special) Server Functions have no business working with React Components. */,
    // USE_SERVER_FUNCTIONS allowed, because (Special) Server Functions, even though they don't need to import one another and the same results can be generated via Prime Server Logics for the outcome of a single Server Function, can still compose with one another. (Perhaps a preferrable use case for this has been found or could be found either today or in the future.)
    makeBlockedImport(
      USE_SERVER_FUNCTIONS,
      USE_CLIENT_CONTEXTS
    ) /* (Special) Client Contexts Components aren't allowed because (Special) Server Functions have no business working with React Components. */,
    makeBlockedImport(
      USE_SERVER_FUNCTIONS,
      USE_AGNOSTIC_CONDITIONS
    ) /* (Special) Agnostic Conditions Components aren't allowed because (Special) Server Functions have no business working with React Components. */,
  ]),
  [USE_CLIENT_CONTEXTS]: Object.freeze([
    makeBlockedImport(
      USE_CLIENT_CONTEXTS,
      USE_SERVER_LOGICS
    ) /* Prime Server Logics should never leak to the client. */,
    // USE_CLIENT_LOGICS allowed, because Prime Client Logics, being logic from the client, can safely support (Special) Client Contexts Components, like any Client Components.
    // USE_AGNOSTIC_LOGICS allowed, because Prime Agnostic Logics can run safely on the client just like they can on the server.
    makeBlockedImport(
      USE_CLIENT_CONTEXTS,
      USE_SERVER_COMPONENTS
    ) /* Lineal Server Components may only pass through (Special) Client Contexts Components via the children prop within Server Components Modules. */,
    // USE_CLIENT_COMPONENTS allowed, because Lineal Client Components can create client boundaries within (Special) Client Contexts Components.
    // USE_AGNOSTIC_COMPONENTS allowed, because Lineal Agnostic Components can render safely on the client just like they can on the server.
    // USE_SERVER_FUNCTIONS allowed, because (Special) Server Functions can be specifically triggered by Client Components.
    // USE_CLIENT_CONTEXTS allowed, because (Special) Client Contexts Components can compose with one another.
    // USE_AGNOSTIC_CONDITIONS allowed, because (Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can render safely on the client just like they can on the server, in a mechanism that allows Client Contexts Components to safely and indirectly compose with child Server Components within Client Contexts Modules.
  ]),
  [USE_AGNOSTIC_CONDITIONS]: Object.freeze([
    makeBlockedImport(
      USE_AGNOSTIC_CONDITIONS,
      USE_SERVER_LOGICS
    ) /* Prime Server Logics cannot run on both the server and the client. */,
    makeBlockedImport(
      USE_AGNOSTIC_CONDITIONS,
      USE_CLIENT_LOGICS
    ) /* Prime Client Logics cannot run on both the server and the client. */,
    // USE_AGNOSTIC_LOGICS allowed, because Prime Agnostic Logics, being environment-agnostic logic, can safely support any Agnostic Components, including (Special) Agnostic Conditions Components. (In this case this is necessary for the import of the `conditionAgnosticComponent` function needed to make Agnostic Conditions Components.)
    // USE_SERVER_COMPONENTS allowed, because Lineal Server Components are to be paired as `ComponentForServer` components with `ComponentForClient` components to form (Special) Agnostic Conditions Components.
    // USE_CLIENT_COMPONENTS allowed, because Lineal Client Components are to be paired as `ComponentForClient` components with `ComponentForServer` components to form (Special) Agnostic Conditions Components.
    // USE_AGNOSTIC_COMPONENTS allowed, because Lineal Agnostic Components can take the place of `ComponentForServer` and/or `ComponentForClient` components to form (Special) Agnostic Conditions Components.
    makeBlockedImport(
      USE_AGNOSTIC_CONDITIONS,
      USE_SERVER_FUNCTIONS
    ) /* (Special) Server Functions are not accepted because (Special) Agnostic Conditions Components only take finite, imported components as arguments in their making. As such, assigning props to these components, including Server Functions, is not made within Agnostic Conditions Modules. */,
    makeBlockedImport(
      USE_AGNOSTIC_CONDITIONS,
      USE_CLIENT_CONTEXTS
    ) /* (Special) Client Contexts Components cannot be used as component arguments for (Special) Agnostic Conditions Components since they only take Lineal Components as arguments in their making. */,
    // USE_AGNOSTIC_CONDITIONS allowed, because (Special) Agnostic Conditions Components, despite not being Lineal Components themselves, output components that can only be Lineal and compatible with their attributed rendering environments, making them acceptable arguments in the making of Agnostic Conditions Components.
  ]),
});
