import {
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
  SERVER_LOGICS_MODULE as COMMONS_SERVER_LOGICS_MODULE,
  CLIENT_LOGICS_MODULE as COMMONS_CLIENT_LOGICS_MODULE,
  AGNOSTIC_LOGICS_MODULE as COMMONS_AGNOSTIC_LOGICS_MODULE,
  SERVER_COMPONENTS_MODULE as COMMONS_SERVER_COMPONENTS_MODULE,
  CLIENT_COMPONENTS_MODULE as COMMONS_CLIENT_COMPONENTS_MODULE,
  AGNOSTIC_COMPONENTS_MODULE as COMMONS_AGNOSTIC_COMPONENTS_MODULE,
  SERVER_FUNCTIONS_MODULE as COMMONS_SERVER_FUNCTIONS_MODULE,
  CLIENT_CONTEXTS_MODULE as COMMONS_CLIENT_CONTEXTS_MODULE,
  AGNOSTIC_CONDITIONS_MODULE as COMMONS_AGNOSTIC_CONDITIONS_MODULE,
  AGNOSTIC_STRATEGIES_MODULE as COMMONS_AGNOSTIC_STRATEGIES_MODULE,
} from "../../_commons/constants/bases.js";

import { makeIntroForSpecificViolationMessage as commonsMakeIntroForSpecificViolationMessage } from "../../_commons/utilities/helpers.js";

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

// commented modules
const SERVER_LOGICS_MODULE = COMMONS_SERVER_LOGICS_MODULE;
const CLIENT_LOGICS_MODULE = COMMONS_CLIENT_LOGICS_MODULE;
const AGNOSTIC_LOGICS_MODULE = COMMONS_AGNOSTIC_LOGICS_MODULE;
const SERVER_COMPONENTS_MODULE = COMMONS_SERVER_COMPONENTS_MODULE;
const CLIENT_COMPONENTS_MODULE = COMMONS_CLIENT_COMPONENTS_MODULE;
const AGNOSTIC_COMPONENTS_MODULE = COMMONS_AGNOSTIC_COMPONENTS_MODULE;
const SERVER_FUNCTIONS_MODULE = COMMONS_SERVER_FUNCTIONS_MODULE;
const CLIENT_CONTEXTS_MODULE = COMMONS_CLIENT_CONTEXTS_MODULE;
const AGNOSTIC_CONDITIONS_MODULE = COMMONS_AGNOSTIC_CONDITIONS_MODULE;
const AGNOSTIC_STRATEGIES_MODULE = COMMONS_AGNOSTIC_STRATEGIES_MODULE;

// mapping commented directives with commented modules
export const commentedDirectives_CommentedModules = Object.freeze({
  [USE_SERVER_LOGICS]: SERVER_LOGICS_MODULE,
  [USE_CLIENT_LOGICS]: CLIENT_LOGICS_MODULE,
  [USE_AGNOSTIC_LOGICS]: AGNOSTIC_LOGICS_MODULE,
  [USE_SERVER_COMPONENTS]: SERVER_COMPONENTS_MODULE,
  [USE_CLIENT_COMPONENTS]: CLIENT_COMPONENTS_MODULE,
  [USE_AGNOSTIC_COMPONENTS]: AGNOSTIC_COMPONENTS_MODULE,
  [USE_SERVER_FUNCTIONS]: SERVER_FUNCTIONS_MODULE,
  [USE_CLIENT_CONTEXTS]: CLIENT_CONTEXTS_MODULE,
  [USE_AGNOSTIC_CONDITIONS]: AGNOSTIC_CONDITIONS_MODULE,
  [USE_AGNOSTIC_STRATEGIES]: AGNOSTIC_STRATEGIES_MODULE,
});

// message placeholders

export const currentFileCommentedDirective = "currentFileCommentedDirective";
export const importedFileCommentedDirective = "importedFileCommentedDirective";
export const commentedDirectiveMessage = "commentedDirectiveMessage";
export const specificViolationMessage = "specificViolationMessage";
export const specificFailure = "specificFailure";

/* from the getCommentedDirectiveFromCurrentModule utility */

export const directivesSet = new Set([
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

/* from the getCommentedDirectiveFromImportedModule utility */

export const directivesArray = Array.from(directivesSet);

/* commentedDirectives_4RawImplementations */

// make all four accepted commented directive implementations
const makeRawCommentedDirectiveV1of4 = (directive) => `// '${directive}'`;
const makeRawCommentedDirectiveV2of4 = (directive) => `// "${directive}"`;
const makeRawCommentedDirectiveV3of4 = (directive) => `/* '${directive}' */`;
const makeRawCommentedDirectiveV4of4 = (directive) => `/* "${directive}" */`;

/**
 * Makes the array of all four accepted commented directive implementations on a directive basis.
 * @param {USE_SERVER_LOGICS | USE_CLIENT_LOGICS | USE_AGNOSTIC_LOGICS | USE_SERVER_COMPONENTS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_CONTEXTS | USE_AGNOSTIC_CONDITIONS | USE_AGNOSTIC_STRATEGIES} directive
 * @returns
 */
const make4RawImplementations = (directive) => [
  makeRawCommentedDirectiveV1of4(directive),
  makeRawCommentedDirectiveV2of4(directive),
  makeRawCommentedDirectiveV3of4(directive),
  makeRawCommentedDirectiveV4of4(directive),
];

// mapped commented directives to their 4 raw implementations
export const commentedDirectives_4RawImplementations = Object.freeze({
  [USE_SERVER_LOGICS]: make4RawImplementations(USE_SERVER_LOGICS),
  [USE_CLIENT_LOGICS]: make4RawImplementations(USE_CLIENT_LOGICS),
  [USE_AGNOSTIC_LOGICS]: make4RawImplementations(USE_AGNOSTIC_LOGICS),
  [USE_SERVER_COMPONENTS]: make4RawImplementations(USE_SERVER_COMPONENTS),
  [USE_CLIENT_COMPONENTS]: make4RawImplementations(USE_CLIENT_COMPONENTS),
  [USE_AGNOSTIC_COMPONENTS]: make4RawImplementations(USE_AGNOSTIC_COMPONENTS),
  [USE_SERVER_FUNCTIONS]: make4RawImplementations(USE_SERVER_FUNCTIONS),
  [USE_CLIENT_CONTEXTS]: make4RawImplementations(USE_CLIENT_CONTEXTS),
  [USE_AGNOSTIC_CONDITIONS]: make4RawImplementations(USE_AGNOSTIC_CONDITIONS),
  [USE_AGNOSTIC_STRATEGIES]: make4RawImplementations(USE_AGNOSTIC_STRATEGIES),
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

// mapped commented strategies to their commented directives
export const commentedStrategies_CommentedDirectives = Object.freeze({
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

/* from the isImportBlocked utility */

/**
 * Makes the intro for each specific import rule violation messages.
 * @param {USE_SERVER_LOGICS | USE_CLIENT_LOGICS | USE_AGNOSTIC_LOGICS | USE_SERVER_COMPONENTS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_CONTEXTS | USE_AGNOSTIC_CONDITIONS | USE_AGNOSTIC_STRATEGIES} currentFileCommentedDirective The current file's commented directive.
 * @param {USE_SERVER_LOGICS | USE_CLIENT_LOGICS | USE_AGNOSTIC_LOGICS | USE_SERVER_COMPONENTS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_CONTEXTS | USE_AGNOSTIC_CONDITIONS} importedFileCommentedDirective The imported file's commented directive.
 * @returns {string} Returns "[Current file commented modules] are not allowed to import [imported file commented modules]".
 */
const makeIntroForSpecificViolationMessage = (
  currentFileCommentedDirective,
  importedFileCommentedDirective
) =>
  commonsMakeIntroForSpecificViolationMessage(
    commentedDirectives_CommentedModules,
    currentFileCommentedDirective,
    importedFileCommentedDirective
  );

export const commentedDirectives_BlockedImports = Object.freeze({
  [USE_SERVER_LOGICS]: [
    // USE_SERVER_LOGICS allowed, because Server Logics can compose with one another.
    {
      blockedImport: USE_CLIENT_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_LOGICS,
        USE_CLIENT_LOGICS
      )} Client logic should never leak to the server.`,
    },
    // USE_AGNOSTIC_LOGICS allowed, because Agnostic Logic can run safely on the server just like it can on the client.
    // USE_SERVER_COMPONENTS allowed, because Server Components are OK to be composed with Server Logics as long as the Server Logics Module, by convention, does not export React components.
    {
      blockedImport: USE_CLIENT_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_LOGICS,
        USE_CLIENT_COMPONENTS
      )} Client Components cannot be tinkered with on the server.`,
    },
    // USE_AGNOSTIC_COMPONENTS allowed, because Agnostic Components can be composed with Logics on the server just like they can on the client, again, as long at the Server Logics Module, by convention, does not export React components.
    // USE_SERVER_FUNCTIONS allowed, because as Server Functions can import one another, it is only natural that they could compose through Server Logics.
    {
      blockedImport: USE_CLIENT_CONTEXTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_LOGICS,
        USE_CLIENT_CONTEXTS
      )} Client Components cannot be tinkered with on the server, including Client Contexts Components.`,
    },
    // USE_AGNOSTIC_CONDITIONS allowed, because though it would make sense to import their own `ComponentForServer` instead, Agnostic Conditions Components are still able to safely render on the server, guaranteeing that only their `ComponentForServer` will be effectively involved in Server Logics Modules.
  ],
  [USE_CLIENT_LOGICS]: [
    {
      blockedImport: USE_SERVER_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_CLIENT_LOGICS,
        USE_SERVER_LOGICS
      )} Server logic should never leak to the client.`,
    },
    // USE_CLIENT_LOGICS allowed, because Client Logics can compose with one another.
    // USE_AGNOSTIC_LOGICS allowed, because Agnostic Logic can run safely on the client just like it can on the server.
    {
      blockedImport: USE_SERVER_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_CLIENT_LOGICS,
        USE_SERVER_COMPONENTS
      )} Server Components cannot be thinkered with on the client.`,
    },
    // USE_CLIENT_COMPONENTS allowed, because Client Components are OK to be composed with Client Logics as long as the Client Logics Module, by convention, does not export React components.
    // USE_AGNOSTIC_COMPONENTS allowed, because Agnostic Components can be composed with Logics on the client just like they can on the server, again, as long at the Client Logics Module, by convention, does not export React components.
    // USE_SERVER_FUNCTIONS allowed, because it is technically feasible to tinker with a Client Component within a Client Logics Module and attach to said Client Component a Server Function to be triggered on the client.
    // USE_CLIENT_CONTEXTS allowed, because Client Components are OK to be composed with Client Logics as long as the Client Logics Module, by convention, does not export React components, including Client Contexts Components.
    // USE_AGNOSTIC_CONDITIONS allowed, because though it would make sense to import their own `ComponentForClient` instead, Agnostic Conditions Components are still able to safely render on the client, guaranteeing that only their `ComponentForClient` will be effectively involved in Client Logics Modules.
  ],
  [USE_AGNOSTIC_LOGICS]: [
    {
      blockedImport: USE_SERVER_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_LOGICS,
        USE_SERVER_LOGICS
      )} Server Logic cannot run in both the server and the client.`,
    },
    {
      blockedImport: USE_CLIENT_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_LOGICS,
        USE_CLIENT_LOGICS
      )} Client Logic cannot run in both the server and the client.`,
    },
    // USE_AGNOSTIC_LOGICS allowed, because Agnostic Logics can compose with one another.
    {
      blockedImport: USE_SERVER_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_LOGICS,
        USE_SERVER_COMPONENTS
      )} Server Components cannot be tinkered with on both the server and the client.`,
    },
    {
      blockedImport: USE_CLIENT_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_LOGICS,
        USE_CLIENT_COMPONENTS
      )} Client Components cannot be tinkered with on both the server and the client.`,
    },
    // USE_AGNOSTIC_COMPONENTS allowed, because Agnostic Components can be composed with Logics agnostically as long as the Agnostic Logics Module, by convention, does not export React components.
    {
      blockedImport: USE_SERVER_FUNCTIONS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_LOGICS,
        USE_SERVER_FUNCTIONS
      )} Though Server Functions can be tinkered with on the server and on the client, use cases on both environments are not compatible.`,
    },
    {
      blockedImport: USE_CLIENT_CONTEXTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_LOGICS,
        USE_CLIENT_CONTEXTS
      )} Client Components cannot be tinkered with on both the server and the client, including Client Contexts Components.`,
    },
    // USE_AGNOSTIC_CONDITIONS allowed, because Agnostic Components can be composed with Logics agnostically as long as the Agnostic Logics Module, by convention, does not export React components, including Agnostic Conditions Components.
  ],
  [USE_SERVER_COMPONENTS]: [
    // USE_SERVER_LOGICS allowed, because logic from the server can safely support Server Components.
    {
      blockedImport: USE_CLIENT_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_COMPONENTS,
        USE_CLIENT_LOGICS
      )} Client logic should never leak to the server.`,
    },
    // USE_AGNOSTIC_LOGICS allowed, because Agnostic Logic can run safely on the server just like it can on the client.
    // USE_SERVER_COMPONENTS allowed, because Server Components can compose with one another, now that thanks to the inclusion of Agnostic Components they are actual Server Components.
    // USE_CLIENT_COMPONENTS allowed, because Client Components (Lineal Client Components) can be nested inside Server Components to create client boundaries when the root of the application is planted on the server.
    // USE_AGNOSTIC_COMPONENTS allowed, because Agnostic Components can render safely on the server just like they can on the client.
    // USE_SERVER_FUNCTIONS allowed, because as Server Components Modules can import Client Components, they are able to pass them Server Functions as props as well, even though indeed Server Components Modules can make their own Server Functions through inline 'use server' directives.
    // USE_CLIENT_CONTEXTS allowed, because Client Components (Client Contexts Components) can be nested inside Server Components to wrap some of the tree with client state accessible through child Client Components and pass through Server Components when the root of the application is planted on the server.
    // USE_AGNOSTIC_CONDITIONS allowed, because Agnostic Components can render safely on the server just like they can on the client, including Agnostic Conditions Components.
  ],
  [USE_CLIENT_COMPONENTS]: [
    {
      blockedImport: USE_SERVER_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_CLIENT_COMPONENTS,
        USE_SERVER_LOGICS
      )} Server logic should never leak to the client.`,
    },
    // USE_CLIENT_LOGICS allowed, because logic from the client can safely support Client Components.
    // USE_AGNOSTIC_LOGICS allowed, because Agnostic Logic can run safely on the client just like it can on the server.
    {
      blockedImport: USE_SERVER_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_CLIENT_COMPONENTS,
        USE_SERVER_COMPONENTS
      )} Server Components cannot be the children of Lineal Client Components.`,
    },
    // USE_CLIENT_COMPONENTS allowed, because Client Components can compose with one another.
    // USE_AGNOSTIC_COMPONENTS allowed, because Agnostic Components can render safely on the client just like they can on the server.
    // USE_SERVER_FUNCTIONS allowed, because Server Functions are specifically triggered by Client Components.
    // USE_CLIENT_CONTEXTS allowed, because that mechanism allows Client Contexts Components to effectively become Lineal and only render their children on the client since they would be the grand-children of a grand-parent Lineal Client Component.
    // USE_AGNOSTIC_CONDITIONS allowed, because Agnostic Components can render safely on the client just like they can on the server, including Agnostic Conditions Components.
  ],
  [USE_AGNOSTIC_COMPONENTS]: [
    {
      blockedImport: USE_SERVER_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_COMPONENTS,
        USE_SERVER_LOGICS
      )} Server Logic cannot run in both the server and the client.`,
    },
    {
      blockedImport: USE_CLIENT_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_COMPONENTS,
        USE_CLIENT_LOGICS
      )} Client Logic cannot run in both the server and the client.`,
    },
    // USE_AGNOSTIC_LOGICS allowed, because environment-agnostic logic can safely support Agnostic Components.
    {
      blockedImport: USE_SERVER_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_COMPONENTS,
        USE_SERVER_COMPONENTS
      )} Unlike Client Components, Server Components cannot make silos of their own once on the client, and can therefore not be executed from the client.`,
    },
    // USE_CLIENT_COMPONENTS allowed, because Client Components (Lineal Client Components) can be nested inside Agnostic Components to create client boundaries when the root of the application is planted on the server.
    // USE_AGNOSTIC_COMPONENTS allowed, because Agnostic Components can compose with one another.
    // USE_SERVER_FUNCTIONS allowed, because as Agnostic Components Modules can import Client Components, they are able to pass them Server Functions as props as well.
    // USE_CLIENT_CONTEXTS allowed, because Client Components (Client Contexts Components) can be nested inside Agnostic Components to wrap some of the tree with client state accessible through child Client Components and pass through Server Components (if still on the Server Tree) when the root of the application is planted on the server.
    // USE_AGNOSTIC_COMPONENTS allowed, because Agnostic Components can compose with one another, including with Agnostic Conditions Components, making this a necessary mechanism for Server Components to be nested in Agnostic Components.
  ],
  [USE_SERVER_FUNCTIONS]: [
    // USE_SERVER_LOGICS allowed, because logic from the server can safely support Server Functions.
    {
      blockedImport: USE_CLIENT_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_FUNCTIONS,
        USE_CLIENT_LOGICS
      )} Client logic should never leak to the server.`,
    },
    // USE_AGNOSTIC_LOGICS allowed, because Agnostic Logic can run safely on the server just like it can on the client.
    {
      blockedImport: USE_SERVER_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_FUNCTIONS,
        USE_SERVER_COMPONENTS
      )} Server Functions have no business working with React Components.`,
    },
    {
      blockedImport: USE_CLIENT_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_FUNCTIONS,
        USE_CLIENT_COMPONENTS
      )} Server Functions have no business working with React Components.`,
    },
    {
      blockedImport: USE_AGNOSTIC_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_FUNCTIONS,
        USE_AGNOSTIC_COMPONENTS
      )} Server Functions have no business working with React Components.`,
    },
    // USE_SERVER_FUNCTIONS allowed, because even though Server Functions don't need to import one another and the same results can be generated via Server Logic alone for the outcome of a single Server Function, a rational use case could be found for composing Server Functions with one another either today or in the future.
    {
      blockedImport: USE_CLIENT_CONTEXTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_FUNCTIONS,
        USE_CLIENT_CONTEXTS
      )} Server Functions have no business working with React Components.`,
    },
    {
      blockedImport: USE_AGNOSTIC_CONDITIONS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_FUNCTIONS,
        USE_AGNOSTIC_CONDITIONS
      )} Server Functions have no business working with React Components.`,
    },
  ],
  [USE_CLIENT_CONTEXTS]: [
    {
      blockedImport: USE_SERVER_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_CLIENT_CONTEXTS,
        USE_SERVER_LOGICS
      )} Server logic should never leak to the client.`,
    },
    // USE_CLIENT_LOGICS allowed, because logic from the client can safely support Client Components, including Client Contexts Components.
    // USE_AGNOSTIC_LOGICS allowed, because Agnostic Logic can run safely on the client just like it can on the server.
    {
      blockedImport: USE_SERVER_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_CLIENT_CONTEXTS,
        USE_SERVER_COMPONENTS
      )} Server Components may only pass through Client Contexts Components through the children prop within Server Components Modules.`,
    },
    // USE_CLIENT_COMPONENTS allowed, because Lineal Client Components can create client boundaries within Client Contexts Components.
    // USE_AGNOSTIC_COMPONENTS allowed, because Agnostic Components can render safely on the client just like they can on the server.
    // USE_SERVER_FUNCTIONS allowed, because Server Functions are specifically triggered by Client Components, including Client Contexts Components.
    // USE_CLIENT_CONTEXTS allowed, because Client Contexts Components can compose with one another.
    // USE_AGNOSTIC_CONDITIONS allowed, because Agnostic Components can render safely on the client just like they can on the server, including Agnostic Conditions Components, in a mechanism that allows Client Contexts Components to indirectly compose with child Server Components within Client Contexts Modules.
  ],
  [USE_AGNOSTIC_CONDITIONS]: [
    {
      blockedImport: USE_SERVER_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_CONDITIONS,
        USE_SERVER_LOGICS
      )} Server Logic cannot run in both the server and the client.`,
    },
    {
      blockedImport: USE_CLIENT_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_CONDITIONS,
        USE_CLIENT_LOGICS
      )} Client Logic cannot run in both the server and the client.`,
    },
    // USE_AGNOSTIC_LOGICS allowed, because environment-agnostic logic can safely support Agnostic Components, including Agnostic Conditions Components. (In this case this is necessary for the import of the conditionAgnosticComponent function needed to make Agnostic Conditions Components.)
    // USE_SERVER_COMPONENTS allowed, because they are to be paired with `ComponentForClient` components to form Agnostic Conditions Components.
    // USE_CLIENT_COMPONENTS allowed, because they are to be paired with `ComponentForServer` components to form Agnostic Conditions Components.
    // USE_AGNOSTIC_COMPONENTS allowed, because they can take the place of `ComponentForServer` and/or `ComponentForClient` components to form Agnostic Conditions Components.
    {
      blockedImport: USE_SERVER_FUNCTIONS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_CONDITIONS,
        USE_SERVER_FUNCTIONS
      )} Agnostic Conditions Components only take finite, imported components as arguments in their making. As such, assigning props to these components, including Server Functions, is not made within Agnostic Conditions Modules.`,
    },
    {
      blockedImport: USE_CLIENT_CONTEXTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_CONDITIONS,
        USE_CLIENT_CONTEXTS
      )} Agnostic Conditions Components only take Lineal Components as arguments in their making.`,
    },
    // USE_AGNOSTIC_CONDITIONS allowed, because despite not being Lineal Components themselves, their output components can only be Lineal and compatible with their attributed rendering environments, making them acceptable arguments in the making of Agnostic Conditions Components.
  ],
  [USE_AGNOSTIC_STRATEGIES]: [
    // Agnostic Strategies Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a 'use agnostic strategies' importFileCommentedDirective.)
  ],
});

/* from the currentFileFlow flow */

export const commentedDirectives_VerificationReports = Object.freeze({
  // somehow doing it by hand is better for type inference
  [USE_SERVER_LOGICS]: `modules marked with the "${USE_SERVER_LOGICS}" directive must have a non-JSX file extension.`,
  [USE_CLIENT_LOGICS]: `modules marked with the "${USE_CLIENT_LOGICS}" directive must have a non-JSX file extension.`,
  [USE_AGNOSTIC_LOGICS]: `modules marked with the "${USE_AGNOSTIC_LOGICS}" directive must have a non-JSX file extension.`,
  [USE_SERVER_COMPONENTS]: `modules marked with the "${USE_SERVER_COMPONENTS}" directive must have a JSX file extension.`,
  [USE_CLIENT_COMPONENTS]: `modules marked with the "${USE_CLIENT_COMPONENTS}" directive must have a JSX file extension.`,
  [USE_AGNOSTIC_COMPONENTS]: `modules marked with the "${USE_AGNOSTIC_COMPONENTS}" directive must have a JSX file extension.`,
  [USE_SERVER_FUNCTIONS]: `modules marked with the "${USE_SERVER_FUNCTIONS}" directive must have a non-JSX file extension.`,
  [USE_CLIENT_CONTEXTS]: `modules marked with the "${USE_CLIENT_CONTEXTS}" directive must have a JSX file extension.`,
  [USE_AGNOSTIC_CONDITIONS]: `modules marked with the "${USE_AGNOSTIC_CONDITIONS}" directive must have a JSX file extension.`,
  [USE_AGNOSTIC_STRATEGIES]: `modules marked with the "${USE_AGNOSTIC_STRATEGIES}" directive are free to have the file extension of their choosing. (This is not a problem and should never surface.)`,
});
