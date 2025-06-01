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

import {
  makeIntroForSpecificViolationMessage as commonsMakeIntroForSpecificViolationMessage,
  makeBlockedImport as commonsMakeBlockedImport,
} from "../../../_commons/utilities/helpers.js";

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
export const directives_effectiveDirectives = {
  [NO_DIRECTIVE]: {
    [LOGICS]: USE_SERVER_LOGICS,
    [COMPONENTS]: USE_SERVER_COMPONENTS,
    [FUNCTIONS]: null,
  },
  [USE_SERVER]: {
    [LOGICS]: null,
    [COMPONENTS]: null,
    [FUNCTIONS]: USE_SERVER_FUNCTIONS,
  },
  [USE_CLIENT]: {
    [LOGICS]: USE_CLIENT_LOGICS,
    [COMPONENTS]: USE_CLIENT_COMPONENTS,
    [FUNCTIONS]: null,
  },
  [USE_AGNOSTIC]: {
    [LOGICS]: USE_AGNOSTIC_LOGICS,
    [COMPONENTS]: USE_AGNOSTIC_COMPONENTS,
    [FUNCTIONS]: null,
  },
};

// message placeholders
export const currentFileEffectiveDirective = "currentFileEffectiveDirective";
export const importedFileEffectiveDirective = "importedFileEffectiveDirective";
export const effectiveDirectiveMessage = "effectiveDirectiveMessage";
export const specificViolationMessage = "specificViolationMessage";

/* effectiveDirectives_BlockedImports */

/**
 * Makes the intro for each specific import rule violation messages.
 * @template {EffectiveDirective} T
 * @param {T} currentFileEffectiveDirective The current file's effective directive.
 * @param {T} importedFileEffectiveDirective The imported file's effective directive.
 * @returns "[Current file effective modules] are not allowed to import [imported file effective modules]."
 */
const makeIntroForSpecificViolationMessage = (
  currentFileEffectiveDirective,
  importedFileEffectiveDirective
) =>
  commonsMakeIntroForSpecificViolationMessage(
    currentFileEffectiveDirective,
    importedFileEffectiveDirective
  );

const SUGGEST_USE_AGNOSTIC =
  "If the module you're trying to import does not possess any server-side code however, please mark it with this plugin's own and eponymous 'use agnostic' directive to signal its compatibility across all environments.";

/* TEST START */

/**
 * Makes a blockedImport object for the identified blocked import at hand.
 * @template {EffectiveDirective} T
 * @param {T} currentFileEffectiveDirective The current file's effective directive.
 * @param {T} importedFileEffectiveDirective The imported file's effective directive.
 * @returns The blockedImport object for the identified blocked import at hand.
 */
const makeBlockedImport = (
  currentFileEffectiveDirective,
  importedFileEffectiveDirective
) =>
  commonsMakeBlockedImport(
    currentFileEffectiveDirective,
    importedFileEffectiveDirective,
    makeIntroForSpecificViolationMessage,
    agnostic20ConfigName
  );

/**
 * Makes a blockedImport object for the identified blocked import at hand enhanced with the suggestion to use the `'use agnostic'` directive.
 * @param {*} currentFileEffectiveDirective The current file's effective directive.
 * @param {*} importedFileEffectiveDirective The imported file's effective directive.
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

  return {
    ...blockedImport,
    message: `${blockedImport.message} 
${SUGGEST_USE_AGNOSTIC}`,
  };
};

/* TEST END */

export const effectiveDirectives_blockedImports = {
  [USE_SERVER_LOGICS]: [
    // USE_SERVER_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#USE_SERVER_LOGICS
    // USE_SERVER_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#USE_SERVER_COMPONENTS
    // USE_SERVER_FUNCTIONS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#USE_SERVER_FUNCTIONS
    {
      blockedImport: USE_CLIENT_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_LOGICS,
        USE_CLIENT_LOGICS
      )} ${
        jscommentsConfig[agnostic20ConfigName][USE_SERVER_LOGICS][
          USE_CLIENT_LOGICS
        ] // $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#USE_CLIENT_LOGICS
      }`,
    },
    {
      blockedImport: USE_CLIENT_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_LOGICS,
        USE_CLIENT_COMPONENTS
      )} ${
        jscommentsConfig[agnostic20ConfigName][USE_SERVER_LOGICS][
          USE_CLIENT_COMPONENTS
        ] // $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#USE_CLIENT_COMPONENTS
      }`,
    },
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#USE_AGNOSTIC_LOGICS
    // USE_AGNOSTIC_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#USE_AGNOSTIC_COMPONENTS
  ],
  [USE_SERVER_COMPONENTS]: [
    // USE_SERVER_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#USE_SERVER_LOGICS
    // USE_SERVER_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#USE_SERVER_COMPONENTS
    // USE_SERVER_FUNCTIONS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#USE_SERVER_FUNCTIONS
    {
      blockedImport: USE_CLIENT_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_COMPONENTS,
        USE_CLIENT_LOGICS
      )} ${
        jscommentsConfig[agnostic20ConfigName][USE_SERVER_COMPONENTS][
          USE_CLIENT_LOGICS
        ] // $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#USE_CLIENT_LOGICS
      }`,
    },
    // USE_CLIENT_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#USE_CLIENT_COMPONENTS
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#USE_AGNOSTIC_LOGICS
    // USE_AGNOSTIC_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#USE_AGNOSTIC_COMPONENTS
  ],
  [USE_SERVER_FUNCTIONS]: [
    // USE_SERVER_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_SERVER_LOGICS
    {
      blockedImport: USE_SERVER_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_FUNCTIONS,
        USE_SERVER_COMPONENTS
      )} ${
        jscommentsConfig[agnostic20ConfigName][USE_SERVER_FUNCTIONS][
          USE_SERVER_COMPONENTS
        ] // $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_SERVER_COMPONENTS
      }`,
    },
    // USE_SERVER_FUNCTIONS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_SERVER_FUNCTIONS
    {
      blockedImport: USE_CLIENT_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_FUNCTIONS,
        USE_CLIENT_LOGICS
      )} ${
        jscommentsConfig[agnostic20ConfigName][USE_SERVER_FUNCTIONS][
          USE_CLIENT_LOGICS
        ] // $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_CLIENT_LOGICS
      }`,
    },
    {
      blockedImport: USE_CLIENT_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_FUNCTIONS,
        USE_CLIENT_COMPONENTS
      )} ${
        jscommentsConfig[agnostic20ConfigName][USE_SERVER_FUNCTIONS][
          USE_CLIENT_COMPONENTS
        ] // $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_CLIENT_COMPONENTS
      }`,
    },
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_LOGICS
    {
      blockedImport: USE_AGNOSTIC_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_FUNCTIONS,
        USE_AGNOSTIC_COMPONENTS
      )} ${
        jscommentsConfig[agnostic20ConfigName][USE_SERVER_FUNCTIONS][
          USE_AGNOSTIC_COMPONENTS
        ] // $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_COMPONENTS
      }`,
    },
  ],
  [USE_CLIENT_LOGICS]: [
    {
      blockedImport: USE_SERVER_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_CLIENT_LOGICS,
        USE_SERVER_LOGICS
      )} ${
        jscommentsConfig[agnostic20ConfigName][USE_CLIENT_LOGICS][
          USE_SERVER_LOGICS
        ] // $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_SERVER_LOGICS
      } 
${SUGGEST_USE_AGNOSTIC}`,
    },
    {
      blockedImport: USE_SERVER_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_CLIENT_LOGICS,
        USE_SERVER_COMPONENTS
      )} ${
        jscommentsConfig[agnostic20ConfigName][USE_CLIENT_LOGICS][
          USE_SERVER_COMPONENTS
        ] // $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_SERVER_COMPONENTS
      } 
${SUGGEST_USE_AGNOSTIC}`,
    },
    // USE_SERVER_FUNCTIONS allowed, because $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_SERVER_FUNCTIONS
    // USE_CLIENT_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_CLIENT_LOGICS
    // USE_CLIENT_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_CLIENT_COMPONENTS
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_AGNOSTIC_LOGICS
    // USE_AGNOSTIC_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_AGNOSTIC_COMPONENTS
  ],
  [USE_CLIENT_COMPONENTS]: [
    {
      blockedImport: USE_SERVER_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_CLIENT_COMPONENTS,
        USE_SERVER_LOGICS
      )} ${
        jscommentsConfig[agnostic20ConfigName][USE_CLIENT_COMPONENTS][
          USE_SERVER_LOGICS
        ] // $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_SERVER_LOGICS
      } 
${SUGGEST_USE_AGNOSTIC}`,
    },
    {
      blockedImport: USE_SERVER_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_CLIENT_COMPONENTS,
        USE_SERVER_COMPONENTS
      )} ${
        jscommentsConfig[agnostic20ConfigName][USE_CLIENT_COMPONENTS][
          USE_SERVER_COMPONENTS
        ] // $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_SERVER_COMPONENTS
      } 
${SUGGEST_USE_AGNOSTIC}`,
    },
    // USE_SERVER_FUNCTIONS allowed, because $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_SERVER_FUNCTIONS
    // USE_CLIENT_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_CLIENT_LOGICS
    // USE_CLIENT_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_CLIENT_COMPONENTS
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_AGNOSTIC_LOGICS
    // USE_AGNOSTIC_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_AGNOSTIC_COMPONENTS
  ],
  [USE_AGNOSTIC_LOGICS]: [
    {
      blockedImport: USE_SERVER_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_LOGICS,
        USE_SERVER_LOGICS
      )} ${
        jscommentsConfig[agnostic20ConfigName][USE_AGNOSTIC_LOGICS][
          USE_SERVER_LOGICS
        ] // $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_SERVER_LOGICS
      } 
${SUGGEST_USE_AGNOSTIC}`,
    },
    {
      blockedImport: USE_SERVER_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_LOGICS,
        USE_SERVER_COMPONENTS
      )} ${
        jscommentsConfig[agnostic20ConfigName][USE_AGNOSTIC_LOGICS][
          USE_SERVER_COMPONENTS
        ] // $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_SERVER_COMPONENTS
      } 
${SUGGEST_USE_AGNOSTIC}`,
    },
    {
      blockedImport: USE_SERVER_FUNCTIONS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_LOGICS,
        USE_SERVER_FUNCTIONS
      )} ${
        jscommentsConfig[agnostic20ConfigName][USE_AGNOSTIC_LOGICS][
          USE_SERVER_FUNCTIONS
        ] // $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_SERVER_FUNCTIONS
      }`,
    },
    {
      blockedImport: USE_CLIENT_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_LOGICS,
        USE_CLIENT_LOGICS
      )} ${
        jscommentsConfig[agnostic20ConfigName][USE_AGNOSTIC_LOGICS][
          USE_CLIENT_LOGICS
        ] // $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_CLIENT_LOGICS
      }`,
    },
    {
      blockedImport: USE_CLIENT_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_LOGICS,
        USE_CLIENT_COMPONENTS
      )} ${
        jscommentsConfig[agnostic20ConfigName][USE_AGNOSTIC_LOGICS][
          USE_CLIENT_COMPONENTS
        ] // $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_CLIENT_COMPONENTS
      }`,
    },
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_AGNOSTIC_LOGICS
    // USE_AGNOSTIC_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_AGNOSTIC_COMPONENTS
  ],
  [USE_AGNOSTIC_COMPONENTS]: [
    {
      blockedImport: USE_SERVER_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_COMPONENTS,
        USE_SERVER_LOGICS
      )} ${
        jscommentsConfig[agnostic20ConfigName][USE_AGNOSTIC_COMPONENTS][
          USE_SERVER_LOGICS
        ] // $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_SERVER_LOGICS
      } 
${SUGGEST_USE_AGNOSTIC}`,
    },
    {
      blockedImport: USE_SERVER_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_COMPONENTS,
        USE_SERVER_COMPONENTS
      )} ${
        jscommentsConfig[agnostic20ConfigName][USE_AGNOSTIC_COMPONENTS][
          USE_SERVER_COMPONENTS
        ] // $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_SERVER_COMPONENTS
      } 
${SUGGEST_USE_AGNOSTIC}`,
    },
    // USE_SERVER_FUNCTIONS allowed, because $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_SERVER_FUNCTIONS
    {
      blockedImport: USE_CLIENT_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_COMPONENTS,
        USE_CLIENT_LOGICS
      )} ${
        jscommentsConfig[agnostic20ConfigName][USE_AGNOSTIC_COMPONENTS][
          USE_CLIENT_LOGICS
        ] // $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_LOGICS
      }`,
    },
    // USE_CLIENT_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_COMPONENTS
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_AGNOSTIC_LOGICS
    // USE_AGNOSTIC_COMPONENTS allowed, because $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_AGNOSTIC_COMPONENTS
  ],
};
