import {
  USE_SERVER_LOGICS as COMMONS_USE_SERVER_LOGICS,
  USE_SERVER_COMPONENTS as COMMONS_USE_SERVER_COMPONENTS,
  USE_SERVER_FUNCTIONS as COMMONS_USE_SERVER_FUNCTIONS,
  USE_CLIENT_LOGICS as COMMONS_USE_CLIENT_LOGICS,
  USE_CLIENT_COMPONENTS as COMMONS_USE_CLIENT_COMPONENTS,
  USE_AGNOSTIC_LOGICS as COMMONS_USE_AGNOSTIC_LOGICS,
  USE_AGNOSTIC_COMPONENTS as COMMONS_USE_AGNOSTIC_COMPONENTS,
  SERVER_LOGICS_MODULE as COMMONS_SERVER_LOGICS_MODULE,
  SERVER_COMPONENTS_MODULE as COMMONS_SERVER_COMPONENTS_MODULE,
  SERVER_FUNCTIONS_MODULE as COMMONS_SERVER_FUNCTIONS_MODULE,
  CLIENT_LOGICS_MODULE as COMMONS_CLIENT_LOGICS_MODULE,
  CLIENT_COMPONENTS_MODULE as COMMONS_CLIENT_COMPONENTS_MODULE,
  AGNOSTIC_LOGICS_MODULE as COMMONS_AGNOSTIC_LOGICS_MODULE,
  AGNOSTIC_COMPONENTS_MODULE as COMMONS_AGNOSTIC_COMPONENTS_MODULE,
} from "../../../_commons/constants/bases.js";

import { makeIntroForSpecificViolationMessage as commonsMakeIntroForSpecificViolationMessage } from "../../../_commons/utilities/helpers.js";

/**
 * @typedef {import('../../../../types/agnostic20/_commons/typedefs.js').Directive} Directive
 * @typedef {import('../../../../types/agnostic20/_commons/typedefs.js').Directives} Directives
 * @typedef {import('../../../../types/agnostic20/_commons/typedefs.js').EffectiveDirective} EffectiveDirective
 */

// directives
export const NO_DIRECTIVE = null;
export const USE_SERVER = "use server";
export const USE_CLIENT = "use client";
export const USE_AGNOSTIC = "use agnostic";

// directives array
/** @type {Directives} */
export const directivesArray = [USE_SERVER, USE_CLIENT, USE_AGNOSTIC];

// directives set
/** @type {ReadonlySet<Directive>} */
export const directivesSet = new Set(directivesArray); // no longer used exported to satisfy static type inference

// effective directives
export const USE_SERVER_LOGICS = COMMONS_USE_SERVER_LOGICS;
export const USE_SERVER_COMPONENTS = COMMONS_USE_SERVER_COMPONENTS;
export const USE_SERVER_FUNCTIONS = COMMONS_USE_SERVER_FUNCTIONS;
export const USE_CLIENT_LOGICS = COMMONS_USE_CLIENT_LOGICS;
export const USE_CLIENT_COMPONENTS = COMMONS_USE_CLIENT_COMPONENTS;
export const USE_AGNOSTIC_LOGICS = COMMONS_USE_AGNOSTIC_LOGICS;
export const USE_AGNOSTIC_COMPONENTS = COMMONS_USE_AGNOSTIC_COMPONENTS;

// effective modules
const SERVER_LOGICS_MODULE = COMMONS_SERVER_LOGICS_MODULE;
const SERVER_COMPONENTS_MODULE = COMMONS_SERVER_COMPONENTS_MODULE;
const SERVER_FUNCTIONS_MODULE = COMMONS_SERVER_FUNCTIONS_MODULE;
const CLIENT_LOGICS_MODULE = COMMONS_CLIENT_LOGICS_MODULE;
const CLIENT_COMPONENTS_MODULE = COMMONS_CLIENT_COMPONENTS_MODULE;
const AGNOSTIC_LOGICS_MODULE = COMMONS_AGNOSTIC_LOGICS_MODULE;
const AGNOSTIC_COMPONENTS_MODULE = COMMONS_AGNOSTIC_COMPONENTS_MODULE;

// mapping effective directives with effective modules
export const effectiveDirectives_effectiveModules = Object.freeze({
  [USE_SERVER_LOGICS]: SERVER_LOGICS_MODULE,
  [USE_SERVER_COMPONENTS]: SERVER_COMPONENTS_MODULE,
  [USE_SERVER_FUNCTIONS]: SERVER_FUNCTIONS_MODULE,
  [USE_CLIENT_LOGICS]: CLIENT_LOGICS_MODULE,
  [USE_CLIENT_COMPONENTS]: CLIENT_COMPONENTS_MODULE,
  [USE_AGNOSTIC_LOGICS]: AGNOSTIC_LOGICS_MODULE,
  [USE_AGNOSTIC_COMPONENTS]: AGNOSTIC_COMPONENTS_MODULE,
});

// message placeholders
export const currentFileEffectiveDirective = "currentFileEffectiveDirective";
export const importedFileEffectiveDirective = "importedFileEffectiveDirective";
export const effectiveDirectiveMessage = "effectiveDirectiveMessage";
export const specificViolationMessage = "specificViolationMessage";

/* effectiveDirectives_BlockedImports */

/**
 * Makes the intro for each specific import rule violation messages.
 * @param {EffectiveDirective} currentFileEffectiveDirective The current file's effective directive.
 * @param {EffectiveDirective} importedFileEffectiveDirective The imported file's effective directive.
 * @returns "[Current file effective modules] are not allowed to import [imported file effective modules]."
 */
const makeIntroForSpecificViolationMessage = (
  currentFileEffectiveDirective,
  importedFileEffectiveDirective
) =>
  commonsMakeIntroForSpecificViolationMessage(
    effectiveDirectives_effectiveModules,
    currentFileEffectiveDirective,
    importedFileEffectiveDirective
  );

const SUGGEST_USE_AGNOSTIC =
  "If the module you're trying to import does not possess any server-side code however, please mark it with this plugin's own and eponymous 'use agnostic' directive to signal its compatibility across all environments.";

export const effectiveDirectives_blockedImports = Object.freeze({
  [USE_SERVER_LOGICS]: [
    // USE_SERVER_LOGICS allowed, because Server Logics can compose with one another.
    // USE_SERVER_COMPONENTS allowed, because Server Components are OK to be composed with Server Logics as long as the Server Logics Module, by convention, does not export React components.
    // USE_SERVER_FUNCTIONS allowed, because Server Functions, being able to import one another, can compose and do so via Server Logics, despite this method seeming superfluous at first glance. (Perhaps a preferrable use case for this has been found or could be found either today or in the future.)
    {
      blockedImport: USE_CLIENT_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_LOGICS,
        USE_CLIENT_LOGICS
      )} Client Logics should never leak to the server.`,
    },
    {
      blockedImport: USE_CLIENT_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_LOGICS,
        USE_CLIENT_COMPONENTS
      )} Client Components cannot be tinkered with on the server.`,
    },
    // USE_AGNOSTIC_LOGICS allowed, because Agnostic Logics can run safely on the server just like they can on the client.
    // USE_AGNOSTIC_COMPONENTS allowed, because Agnostic Components can be composed with Logics on the server just like they can on the client, as long at the Server Logics Module, by convention, does not export React components.
  ],
  [USE_SERVER_COMPONENTS]: [
    // USE_SERVER_LOGICS allowed, because Server Logics, being logic from the server, can safely support Server Components.
    // USE_SERVER_COMPONENTS allowed, because Server Components can compose with one another, assuming thanks to the inclusion of the 'use agnostic' directive that they are actual Server Components.
    // USE_SERVER_FUNCTIONS allowed, because Server Functions can be passed to imported Client Components within Server Components Modules, even though indeed Server Components Modules and Server Components can make their own Server Functions through inline 'use server' directives.
    {
      blockedImport: USE_CLIENT_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_COMPONENTS,
        USE_CLIENT_LOGICS
      )} Client Logics should never leak to the server.`,
    },
    // USE_CLIENT_COMPONENTS allowed, because Client Components can be nested inside Server Components either to wrap some of the tree with client state accessible through child Client Components and pass through Server Components, or to create client boundaries when the root of the application is planted on the server.
    // USE_AGNOSTIC_LOGICS allowed, because Agnostic Logics can run safely on the server just like they can on the client.
    // USE_AGNOSTIC_COMPONENTS allowed, because Agnostic Components can render safely on the server just like they can on the client.
  ],
  [USE_SERVER_FUNCTIONS]: [
    // USE_SERVER_LOGICS allowed, because Server Logics, being logic from the server, can safely support Server Functions.
    {
      blockedImport: USE_SERVER_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_FUNCTIONS,
        USE_SERVER_COMPONENTS
      )} Server Components aren't allowed because Server Functions have no business working with React Components.`,
    },
    // USE_SERVER_FUNCTIONS allowed, because Server Functions, even though they don't need to import one another and the same results can be generated via Server Logics for the outcome of a single Server Function, can still compose with one another. (Perhaps a preferrable use case for this has been found or could be found either today or in the future.)
    {
      blockedImport: USE_CLIENT_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_FUNCTIONS,
        USE_CLIENT_LOGICS
      )} Client Logics should never leak to the server.`,
    },
    {
      blockedImport: USE_CLIENT_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_FUNCTIONS,
        USE_CLIENT_COMPONENTS
      )} Client Components aren't allowed because Server Functions have no business working with React Components.`,
    },
    // USE_AGNOSTIC_LOGICS allowed, because Agnostic Logics can run safely on the server just like they can on the client.
    {
      blockedImport: USE_AGNOSTIC_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_FUNCTIONS,
        USE_AGNOSTIC_COMPONENTS
      )} Agnostic Components aren't allowed because Server Functions have no business working with React Components.`,
    },
  ],
  [USE_CLIENT_LOGICS]: [
    {
      blockedImport: USE_SERVER_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_CLIENT_LOGICS,
        USE_SERVER_LOGICS
      )} Server Logics should never leak to the client. 
${SUGGEST_USE_AGNOSTIC}`,
    },
    {
      blockedImport: USE_SERVER_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_CLIENT_LOGICS,
        USE_SERVER_COMPONENTS
      )} Server Components cannot be thinkered with on the client. 
${SUGGEST_USE_AGNOSTIC}`,
    },
    // USE_SERVER_FUNCTIONS allowed, because Server Functions can technically be attached to Client Components that are being tinkered with within Client Logics Modules.
    // USE_CLIENT_LOGICS allowed, because Client Logics can compose with one another.
    // USE_CLIENT_COMPONENTS allowed, because Client Components are OK to be composed with Client Logics as long as the Client Logics Module, by convention, does not export React components.
    // USE_AGNOSTIC_LOGICS allowed, because Agnostic Logics can run safely on the client just like they can on the server.
    // USE_AGNOSTIC_COMPONENTS allowed, because Agnostic Components can be composed with Logics on the client just like they can on the server, as long as the Client Logics Module, by convention, does not export React components.
  ],
  [USE_CLIENT_COMPONENTS]: [
    {
      blockedImport: USE_SERVER_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_CLIENT_COMPONENTS,
        USE_SERVER_LOGICS
      )} Server Logics should never leak to the client. 
${SUGGEST_USE_AGNOSTIC}`,
    },
    {
      blockedImport: USE_SERVER_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_CLIENT_COMPONENTS,
        USE_SERVER_COMPONENTS
      )} Server Components may only pass through Client Components via the children prop within Server Components Modules. 
${SUGGEST_USE_AGNOSTIC}`,
    },
    // USE_SERVER_FUNCTIONS allowed, because Server Functions are specifically triggered by Client Components.
    // USE_CLIENT_LOGICS allowed, because Client Logics, being logic from the client, can safely support Client Components.
    // USE_CLIENT_COMPONENTS allowed, because Client Components can compose with one another.
    // USE_AGNOSTIC_LOGICS allowed, because Agnostic Logics can run safely on the client just like they can on the server.
    // USE_AGNOSTIC_COMPONENTS allowed, because Agnostic Components can render safely on the client just like they can on the server.
  ],
  [USE_AGNOSTIC_LOGICS]: [
    {
      blockedImport: USE_SERVER_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_LOGICS,
        USE_SERVER_LOGICS
      )} Server Logics cannot run on both the server and the client. 
${SUGGEST_USE_AGNOSTIC}`,
    },
    {
      blockedImport: USE_SERVER_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_LOGICS,
        USE_SERVER_COMPONENTS
      )} Server Components cannot be tinkered with on both the server and the client. 
${SUGGEST_USE_AGNOSTIC}`,
    },
    {
      blockedImport: USE_SERVER_FUNCTIONS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_LOGICS,
        USE_SERVER_FUNCTIONS
      )} Server Functions can be modified on the server and on the client, but their use cases on both environments are not one-to-one compatible, since they're being addressed as they are on the server and addressed as references on the client.`,
    },
    {
      blockedImport: USE_CLIENT_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_LOGICS,
        USE_CLIENT_LOGICS
      )} Client Logics cannot run on both the server and the client.`,
    },
    {
      blockedImport: USE_CLIENT_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_LOGICS,
        USE_CLIENT_COMPONENTS
      )} Client Components cannot be tinkered with on both the server and the client.`,
    },
    // USE_AGNOSTIC_LOGICS allowed, because Agnostic Logics can compose with one another.
    // USE_AGNOSTIC_COMPONENTS allowed, because Agnostic Components can be composed with Logics agnostically as long as the Agnostic Logics Module, by convention, does not export React components.
  ],
  [USE_AGNOSTIC_COMPONENTS]: [
    {
      blockedImport: USE_SERVER_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_COMPONENTS,
        USE_SERVER_LOGICS
      )} Server Logics cannot run on both the server and the client. 
${SUGGEST_USE_AGNOSTIC}`,
    },
    {
      blockedImport: USE_SERVER_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_COMPONENTS,
        USE_SERVER_COMPONENTS
      )} Server Components, unlike Client Components, cannot make silos of their own once on the opposing environment (the client in this case), and therefore cannot be executed from the client, making them unable to execute agnostically from both the server and the client. 
${SUGGEST_USE_AGNOSTIC}`,
    },
    // USE_SERVER_FUNCTIONS allowed, because Server Functions can be passed to Client Components as props when Client Components are also legally imported into Agnostic Components Modules.
    {
      blockedImport: USE_CLIENT_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_COMPONENTS,
        USE_CLIENT_LOGICS
      )} Client Logics cannot run on both the server and the client.`,
    },
    // USE_CLIENT_COMPONENTS allowed, because Client Components can be nested inside Agnostic Components either to wrap some of the tree with client state accessible through child Client Components and pass through Server Components (if still on the Server Tree), or to create client boundaries when the root of the application is planted on the server.
    // USE_AGNOSTIC_LOGICS allowed, because Agnostic Logics, being environment-agnostic logic, can safely support Agnostic Components.
    // USE_AGNOSTIC_COMPONENTS allowed, because Agnostic Components can compose with one another.
  ],
});
