import {
  agnostic20ConfigName,
  USE_SERVER_LOGICS as COMMONS_USE_SERVER_LOGICS,
  USE_SERVER_COMPONENTS as COMMONS_USE_SERVER_COMPONENTS,
  USE_SERVER_FUNCTIONS as COMMONS_USE_SERVER_FUNCTIONS,
  USE_CLIENT_LOGICS as COMMONS_USE_CLIENT_LOGICS,
  USE_CLIENT_COMPONENTS as COMMONS_USE_CLIENT_COMPONENTS,
  USE_AGNOSTIC_LOGICS as COMMONS_USE_AGNOSTIC_LOGICS,
  USE_AGNOSTIC_COMPONENTS as COMMONS_USE_AGNOSTIC_COMPONENTS,
} from "../../../_commons/constants/bases.js";

import { makeIntroForSpecificViolationMessage } from "../../../_commons/utilities/helpers.js";

import jscommentsConfig from "../../../../comments.config.js";

/**
 * @typedef {import('../../../../types/agnostic20/_commons/typedefs.js').Directive} Directive
 * @typedef {import('../../../../types/agnostic20/_commons/typedefs.js').Directives} Directives
 * @typedef {import('../../../../types/agnostic20/_commons/typedefs.js').EffectiveDirective} EffectiveDirective
 * @typedef {import('../../../../types/agnostic20/_commons/typedefs.js').Directives_EffectiveDirectives} Directives_EffectiveDirectives
 */

// directives
export const NO_DIRECTIVE = "no directive";
export const USE_SERVER = "use server";
export const USE_CLIENT = "use client";
export const USE_AGNOSTIC = "use agnostic";

// directives array
/** @type {Directives} */
export const directivesArray = Object.freeze([
  USE_SERVER,
  USE_CLIENT,
  USE_AGNOSTIC,
]);

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

// module kinds
export const LOGICS = "logics";
export const COMPONENTS = "components";
export const FUNCTIONS = "functions";

// mapping directives with effective directives
/** @type {Directives_EffectiveDirectives} */
export const directives_effectiveDirectives = Object.freeze({
  [NO_DIRECTIVE]: Object.freeze({
    [LOGICS]: USE_SERVER_LOGICS,
    [COMPONENTS]: USE_SERVER_COMPONENTS,
    [FUNCTIONS]: null,
  }),
  [USE_SERVER]: Object.freeze({
    [LOGICS]: null,
    [COMPONENTS]: null,
    [FUNCTIONS]: USE_SERVER_FUNCTIONS,
  }),
  [USE_CLIENT]: Object.freeze({
    [LOGICS]: USE_CLIENT_LOGICS,
    [COMPONENTS]: USE_CLIENT_COMPONENTS,
    [FUNCTIONS]: null,
  }),
  [USE_AGNOSTIC]: Object.freeze({
    [LOGICS]: USE_AGNOSTIC_LOGICS,
    [COMPONENTS]: USE_AGNOSTIC_COMPONENTS,
    [FUNCTIONS]: null,
  }),
});

// message placeholders
export const currentFileEffectiveDirective = "currentFileEffectiveDirective";
export const importedFileEffectiveDirective = "importedFileEffectiveDirective";
export const effectiveDirectiveMessage = "effectiveDirectiveMessage";
export const specificViolationMessage = "specificViolationMessage";

/* effectiveDirectives_BlockedImports */

const SUGGEST_USE_AGNOSTIC =
  "If the module you're trying to import does not possess any server-side code however, please mark it with this plugin's own and eponymous 'use agnostic' directive to signal its compatibility across all environments.";

/**
 * Makes a blockedImport object for the identified blocked import at hand.
 * @template {EffectiveDirective} T
 * @template {EffectiveDirective} U
 * @param {T} currentFileEffectiveDirective The current file's effective directive.
 * @param {U} importedFileEffectiveDirective The imported file's effective directive.
 * @returns The blockedImport object for the identified blocked import at hand.
 */
export const makeBlockedImport = (
  currentFileEffectiveDirective,
  importedFileEffectiveDirective
) => {
  return Object.freeze({
    blockedImport: importedFileEffectiveDirective,
    message: `${makeIntroForSpecificViolationMessage(
      currentFileEffectiveDirective,
      importedFileEffectiveDirective
    )} ${
      jscommentsConfig[agnostic20ConfigName][currentFileEffectiveDirective][
        importedFileEffectiveDirective
      ]
    }`,
  });
};

/**
 * Makes a blockedImport object for the identified blocked import at hand enhanced with the suggestion to use the `'use agnostic'` directive.
 * @template {EffectiveDirective} T
 * @template {EffectiveDirective} U
 * @param {T} currentFileEffectiveDirective The current file's effective directive.
 * @param {U} importedFileEffectiveDirective The imported file's effective directive.
 * @returns The enhanced blockedImport object with the suggestion to use the `'use agnostic'` directive.
 */
const makeBlockedImportSuggestingUseAgnostic = (
  currentFileEffectiveDirective,
  importedFileEffectiveDirective
) => {
  const blockedImport = makeBlockedImport(
    currentFileEffectiveDirective,
    importedFileEffectiveDirective
  );
  /** @type {`${typeof blockedImport.message} \n${SUGGEST_USE_AGNOSTIC}`} */
  const blockedImportMessageSuggestingUseAgnostic = `${blockedImport.message} \n${SUGGEST_USE_AGNOSTIC}`;

  return Object.freeze({
    ...blockedImport,
    message: blockedImportMessageSuggestingUseAgnostic,
  });
};

export const effectiveDirectives_blockedImports = Object.freeze({
  [USE_SERVER_LOGICS]: Object.freeze([
    // USE_SERVER_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#USE_SERVER_LOGICS
    // USE_SERVER_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#USE_SERVER_COMPONENTS
    // USE_SERVER_FUNCTIONS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#USE_SERVER_FUNCTIONS
    makeBlockedImport(
      USE_SERVER_LOGICS,
      USE_CLIENT_LOGICS
    ) /* $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#USE_CLIENT_LOGICS */,
    makeBlockedImport(
      USE_SERVER_LOGICS,
      USE_CLIENT_COMPONENTS
    ) /* $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#USE_CLIENT_COMPONENTS */,
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#USE_AGNOSTIC_LOGICS
    // USE_AGNOSTIC_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#USE_AGNOSTIC_COMPONENTS
  ]),
  [USE_SERVER_COMPONENTS]: Object.freeze([
    // USE_SERVER_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#USE_SERVER_LOGICS
    // USE_SERVER_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#USE_SERVER_COMPONENTS
    // USE_SERVER_FUNCTIONS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#USE_SERVER_FUNCTIONS
    makeBlockedImport(
      USE_SERVER_COMPONENTS,
      USE_CLIENT_LOGICS
    ) /* $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#USE_CLIENT_LOGICS */,
    // USE_CLIENT_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#USE_CLIENT_COMPONENTS
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#USE_AGNOSTIC_LOGICS
    // USE_AGNOSTIC_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#USE_AGNOSTIC_COMPONENTS
  ]),
  [USE_SERVER_FUNCTIONS]: Object.freeze([
    // USE_SERVER_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_SERVER_LOGICS
    makeBlockedImport(
      USE_SERVER_FUNCTIONS,
      USE_SERVER_COMPONENTS
    ) /* $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_SERVER_COMPONENTS */,
    // USE_SERVER_FUNCTIONS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_SERVER_FUNCTIONS
    makeBlockedImport(
      USE_SERVER_FUNCTIONS,
      USE_CLIENT_LOGICS
    ) /* $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_CLIENT_LOGICS */,
    makeBlockedImport(
      USE_SERVER_FUNCTIONS,
      USE_CLIENT_COMPONENTS
    ) /* $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_CLIENT_COMPONENTS */,
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_LOGICS
    makeBlockedImport(
      USE_SERVER_FUNCTIONS,
      USE_AGNOSTIC_COMPONENTS
    ) /* $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_COMPONENTS */,
  ]),
  [USE_CLIENT_LOGICS]: Object.freeze([
    makeBlockedImportSuggestingUseAgnostic(
      USE_CLIENT_LOGICS,
      USE_SERVER_LOGICS
    ) /* $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_SERVER_LOGICS */,
    makeBlockedImportSuggestingUseAgnostic(
      USE_CLIENT_LOGICS,
      USE_SERVER_COMPONENTS
    ) /* $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_SERVER_COMPONENTS */,
    // USE_SERVER_FUNCTIONS allowed, because $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_SERVER_FUNCTIONS
    // USE_CLIENT_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_CLIENT_LOGICS
    // USE_CLIENT_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_CLIENT_COMPONENTS
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_AGNOSTIC_LOGICS
    // USE_AGNOSTIC_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_AGNOSTIC_COMPONENTS
  ]),
  [USE_CLIENT_COMPONENTS]: Object.freeze([
    makeBlockedImportSuggestingUseAgnostic(
      USE_CLIENT_LOGICS,
      USE_SERVER_LOGICS
    ) /* $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_SERVER_LOGICS */,
    makeBlockedImportSuggestingUseAgnostic(
      USE_CLIENT_LOGICS,
      USE_SERVER_COMPONENTS
    ) /* $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_SERVER_COMPONENTS */,
    // USE_SERVER_FUNCTIONS allowed, because $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_SERVER_FUNCTIONS
    // USE_CLIENT_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_CLIENT_LOGICS
    // USE_CLIENT_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_CLIENT_COMPONENTS
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_AGNOSTIC_LOGICS
    // USE_AGNOSTIC_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_AGNOSTIC_COMPONENTS
  ]),
  [USE_AGNOSTIC_LOGICS]: Object.freeze([
    makeBlockedImportSuggestingUseAgnostic(
      USE_AGNOSTIC_LOGICS,
      USE_SERVER_LOGICS
    ) /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_SERVER_LOGICS */,
    makeBlockedImportSuggestingUseAgnostic(
      USE_AGNOSTIC_LOGICS,
      USE_SERVER_COMPONENTS
    ) /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_SERVER_COMPONENTS */,
    makeBlockedImport(
      USE_AGNOSTIC_LOGICS,
      USE_SERVER_FUNCTIONS
    ) /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_SERVER_FUNCTIONS */,
    makeBlockedImport(
      USE_AGNOSTIC_LOGICS,
      USE_CLIENT_LOGICS
    ) /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_CLIENT_LOGICS */,
    makeBlockedImport(
      USE_AGNOSTIC_LOGICS,
      USE_CLIENT_COMPONENTS
    ) /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_CLIENT_COMPONENTS */,
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_AGNOSTIC_LOGICS
    // USE_AGNOSTIC_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_AGNOSTIC_COMPONENTS
  ]),
  [USE_AGNOSTIC_COMPONENTS]: Object.freeze([
    makeBlockedImportSuggestingUseAgnostic(
      USE_AGNOSTIC_COMPONENTS,
      USE_SERVER_LOGICS
    ) /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_SERVER_LOGICS */,
    makeBlockedImportSuggestingUseAgnostic(
      USE_AGNOSTIC_COMPONENTS,
      USE_SERVER_COMPONENTS
    ) /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_SERVER_COMPONENTS */,
    // USE_SERVER_FUNCTIONS allowed, because $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_SERVER_FUNCTIONS
    makeBlockedImport(
      USE_AGNOSTIC_COMPONENTS,
      USE_CLIENT_LOGICS
    ) /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_LOGICS */,
    // USE_CLIENT_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_COMPONENTS
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_AGNOSTIC_LOGICS
    // USE_AGNOSTIC_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_AGNOSTIC_COMPONENTS
  ]),
});
