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

import {
  makeIntroForSpecificViolationMessage as commonsMakeIntroForSpecificViolationMessage,
  makeBlockedImport as commonsMakeBlockedImport,
} from "../../../_commons/utilities/helpers.js";

import jscommentsConfig from "../../../../comments.config.js";

/**
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').CommentedDirective} CommentedDirective
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').CommentedDirectiveWithoutUseAgnosticStrategies} CommentedDirectiveWithoutUseAgnosticStrategies
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').CommentedDirectives} CommentedDirectives
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').CommentedStrategy} CommentedStrategy
 * @typedef {import('../../../../types/directive21/_commons/typedefs.js').CommentedStrategies} CommentedStrategies
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
export const commentedDirectives_extensionRules = {
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
};

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

/* commentedDirectives_4RawImplementations */

// all formatting styles as an array of [prefix, quote, suffix]
const commentStyles = [
  [`// `, `'`, ``], // V1: `// 'directive'`
  [`// `, `"`, ``], // V2: `// "directive"`
  [`/* `, `'`, ` */`], // V3: `/* 'directive' */`
  [`/* `, `"`, ` */`], // V4: `/* "directive" */`
]; // further inference optimation can be made but is overkill...

/**
 * Makes the array of all four accepted commented directive implementations on a directive basis.
 * @param {CommentedDirective} directive The commented directive.
 * @returns The array of formatted commented directives.
 */
const make4RawImplementations = (directive) =>
  commentStyles.map(
    ([prefix, quote, suffix]) =>
      `${prefix}${quote}${directive}${quote}${suffix}`
  ); // ...further inference optimation could be an extra challenge but would probably require TypeScript for comfort

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
 * Makes the intro for each specific import rule violation messages.
 * @template {CommentedDirectiveWithoutUseAgnosticStrategies} T
 * @param {T} currentFileCommentedDirective The current file's commented directive.
 * @param {T} importedFileCommentedDirective The imported file's commented directive.
 * @returns "[Current file commented modules] are not allowed to import [imported file commented modules]."
 */
const makeIntroForSpecificViolationMessage = (
  currentFileCommentedDirective,
  importedFileCommentedDirective
) =>
  commonsMakeIntroForSpecificViolationMessage(
    currentFileCommentedDirective,
    importedFileCommentedDirective
  );

/* TEST START */

/**
 * Makes a blockedImport object for the identified blocked import at hand.
 * @template {CommentedDirectiveWithoutUseAgnosticStrategies} T
 * @param {T} currentFileCommentedDirective The current file's commented directive.
 * @param {T} importedFileCommentedDirective The imported file's commented directive.
 * @returns The blockedImport object for the identified blocked import at hand.
 */
const makeBlockedImport = (
  currentFileCommentedDirective,
  importedFileCommentedDirective
) =>
  commonsMakeBlockedImport(
    currentFileCommentedDirective,
    importedFileCommentedDirective,
    makeIntroForSpecificViolationMessage,
    directive21ConfigName
  );

/* TEST END */

export const commentedDirectives_blockedImports = {
  [USE_SERVER_LOGICS]: [
    // USE_SERVER_LOGICS allowed, because $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#USE_SERVER_LOGICS
    {
      blockedImport: USE_CLIENT_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_LOGICS,
        USE_CLIENT_LOGICS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_SERVER_LOGICS][
          USE_CLIENT_LOGICS
        ] // $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#USE_CLIENT_LOGICS
      }`,
    },
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#USE_AGNOSTIC_LOGICS
    // USE_SERVER_COMPONENTS allowed, because $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#USE_SERVER_COMPONENTS
    {
      blockedImport: USE_CLIENT_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_LOGICS,
        USE_CLIENT_COMPONENTS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_SERVER_LOGICS][
          USE_CLIENT_COMPONENTS
        ] // $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#USE_CLIENT_COMPONENTS
      }`,
    },
    // USE_AGNOSTIC_COMPONENTS allowed, because $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#USE_AGNOSTIC_COMPONENTS
    // USE_SERVER_FUNCTIONS allowed, because $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#USE_SERVER_FUNCTIONS
    {
      blockedImport: USE_CLIENT_CONTEXTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_LOGICS,
        USE_CLIENT_CONTEXTS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_SERVER_LOGICS][
          USE_CLIENT_CONTEXTS
        ] // $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#USE_CLIENT_CONTEXTS
      }`,
    },
    // USE_AGNOSTIC_CONDITIONS allowed, because $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#USE_AGNOSTIC_CONDITIONS
  ],
  [USE_CLIENT_LOGICS]: [
    {
      blockedImport: USE_SERVER_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_CLIENT_LOGICS,
        USE_SERVER_LOGICS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_CLIENT_LOGICS][
          USE_SERVER_LOGICS
        ] // $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#USE_SERVER_LOGICS
      }`,
    },
    // USE_CLIENT_LOGICS allowed, because $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#USE_CLIENT_LOGICS
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#USE_AGNOSTIC_LOGICS
    {
      blockedImport: USE_SERVER_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_CLIENT_LOGICS,
        USE_SERVER_COMPONENTS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_CLIENT_LOGICS][
          USE_SERVER_COMPONENTS
        ] // $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#USE_SERVER_COMPONENTS
      }`,
    },
    // USE_CLIENT_COMPONENTS allowed, because $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#USE_CLIENT_COMPONENTS
    // USE_AGNOSTIC_COMPONENTS allowed, because $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#USE_AGNOSTIC_COMPONENTS
    // USE_SERVER_FUNCTIONS allowed, because $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#USE_SERVER_FUNCTIONS
    // USE_CLIENT_CONTEXTS allowed, because $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#USE_CLIENT_CONTEXTS
    // USE_AGNOSTIC_CONDITIONS allowed, because $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#USE_AGNOSTIC_CONDITIONS
  ],
  [USE_AGNOSTIC_LOGICS]: [
    {
      blockedImport: USE_SERVER_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_LOGICS,
        USE_SERVER_LOGICS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_AGNOSTIC_LOGICS][
          USE_SERVER_LOGICS
        ] // $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_SERVER_LOGICS
      }`,
    },
    {
      blockedImport: USE_CLIENT_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_LOGICS,
        USE_CLIENT_LOGICS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_AGNOSTIC_LOGICS][
          USE_CLIENT_LOGICS
        ] // $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_CLIENT_LOGICS
      }`,
    },
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_AGNOSTIC_LOGICS
    {
      blockedImport: USE_SERVER_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_LOGICS,
        USE_SERVER_COMPONENTS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_AGNOSTIC_LOGICS][
          USE_SERVER_COMPONENTS
        ] // $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_SERVER_COMPONENTS
      }`,
    },
    {
      blockedImport: USE_CLIENT_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_LOGICS,
        USE_CLIENT_COMPONENTS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_AGNOSTIC_LOGICS][
          USE_CLIENT_COMPONENTS
        ] // $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_CLIENT_COMPONENTS
      }`,
    },
    // USE_AGNOSTIC_COMPONENTS allowed, because $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_AGNOSTIC_COMPONENTS
    {
      blockedImport: USE_SERVER_FUNCTIONS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_LOGICS,
        USE_SERVER_FUNCTIONS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_AGNOSTIC_LOGICS][
          USE_SERVER_FUNCTIONS
        ] // $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_SERVER_FUNCTIONS
      }`,
    },
    {
      blockedImport: USE_CLIENT_CONTEXTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_LOGICS,
        USE_CLIENT_CONTEXTS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_AGNOSTIC_LOGICS][
          USE_CLIENT_CONTEXTS
        ] // $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_CLIENT_CONTEXTS
      }`,
    },
    // USE_AGNOSTIC_CONDITIONS allowed, because $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#USE_AGNOSTIC_CONDITIONS
  ],
  [USE_SERVER_COMPONENTS]: [
    // USE_SERVER_LOGICS allowed, because $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#USE_SERVER_LOGICS
    {
      blockedImport: USE_CLIENT_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_COMPONENTS,
        USE_CLIENT_LOGICS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_SERVER_COMPONENTS][
          USE_CLIENT_LOGICS
        ] // $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#USE_CLIENT_LOGICS
      }`,
    },
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#USE_AGNOSTIC_LOGICS
    // USE_SERVER_COMPONENTS allowed, because $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#USE_SERVER_COMPONENTS
    // USE_CLIENT_COMPONENTS allowed, because $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#USE_CLIENT_COMPONENTS
    // USE_AGNOSTIC_COMPONENTS allowed, because $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#USE_AGNOSTIC_COMPONENTS
    // USE_SERVER_FUNCTIONS allowed, because $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#USE_SERVER_FUNCTIONS
    // USE_CLIENT_CONTEXTS allowed, because $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#USE_CLIENT_CONTEXTS
    // USE_AGNOSTIC_CONDITIONS allowed, because $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#USE_AGNOSTIC_CONDITIONS
  ],
  [USE_CLIENT_COMPONENTS]: [
    {
      blockedImport: USE_SERVER_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_CLIENT_COMPONENTS,
        USE_SERVER_LOGICS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_CLIENT_COMPONENTS][
          USE_SERVER_LOGICS
        ] // $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_SERVER_LOGICS
      }`,
    },
    // USE_CLIENT_LOGICS allowed, because $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_CLIENT_LOGICS
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_AGNOSTIC_LOGICS
    {
      blockedImport: USE_SERVER_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_CLIENT_COMPONENTS,
        USE_SERVER_COMPONENTS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_CLIENT_COMPONENTS][
          USE_SERVER_COMPONENTS
        ] // $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_SERVER_COMPONENTS
      }`,
    },
    // USE_CLIENT_COMPONENTS allowed, because $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_CLIENT_COMPONENTS
    // USE_AGNOSTIC_COMPONENTS allowed, because $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_AGNOSTIC_COMPONENTS
    // USE_SERVER_FUNCTIONS allowed, because $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_SERVER_FUNCTIONS
    // USE_CLIENT_CONTEXTS allowed, because $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_CLIENT_CONTEXTS
    // USE_AGNOSTIC_CONDITIONS allowed, because $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_AGNOSTIC_CONDITIONS
  ],
  [USE_AGNOSTIC_COMPONENTS]: [
    {
      blockedImport: USE_SERVER_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_COMPONENTS,
        USE_SERVER_LOGICS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_AGNOSTIC_COMPONENTS][
          USE_SERVER_LOGICS
        ] // $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_SERVER_LOGICS
      }`,
    },
    {
      blockedImport: USE_CLIENT_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_COMPONENTS,
        USE_CLIENT_LOGICS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_AGNOSTIC_COMPONENTS][
          USE_CLIENT_LOGICS
        ] // $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_LOGICS
      }`,
    },
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_AGNOSTIC_LOGICS
    {
      blockedImport: USE_SERVER_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_COMPONENTS,
        USE_SERVER_COMPONENTS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_AGNOSTIC_COMPONENTS][
          USE_SERVER_COMPONENTS
        ] // $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_SERVER_COMPONENTS
      }`,
    },
    // USE_CLIENT_COMPONENTS allowed, because $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_COMPONENTS
    // USE_AGNOSTIC_COMPONENTS allowed, because $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_AGNOSTIC_COMPONENTS
    // USE_SERVER_FUNCTIONS allowed, because $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_SERVER_FUNCTIONS
    // USE_CLIENT_CONTEXTS allowed, because $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_CONTEXTS
    // USE_AGNOSTIC_CONDITIONS allowed, because $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_AGNOSTIC_CONDITIONS
  ],
  [USE_SERVER_FUNCTIONS]: [
    // USE_SERVER_LOGICS allowed, because $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_SERVER_LOGICS
    {
      blockedImport: USE_CLIENT_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_FUNCTIONS,
        USE_CLIENT_LOGICS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_SERVER_FUNCTIONS][
          USE_CLIENT_LOGICS
        ] // $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_CLIENT_LOGICS
      }`,
    },
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_LOGICS
    {
      blockedImport: USE_SERVER_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_FUNCTIONS,
        USE_SERVER_COMPONENTS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_SERVER_FUNCTIONS][
          USE_SERVER_COMPONENTS
        ] // $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_SERVER_COMPONENTS
      }`,
    },
    {
      blockedImport: USE_CLIENT_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_FUNCTIONS,
        USE_CLIENT_COMPONENTS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_SERVER_FUNCTIONS][
          USE_CLIENT_COMPONENTS
        ] // $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_CLIENT_COMPONENTS
      }`,
    },
    {
      blockedImport: USE_AGNOSTIC_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_FUNCTIONS,
        USE_AGNOSTIC_COMPONENTS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_SERVER_FUNCTIONS][
          USE_AGNOSTIC_COMPONENTS
        ] // $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_COMPONENTS
      }`,
    },
    // USE_SERVER_FUNCTIONS allowed, because $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_SERVER_FUNCTIONS
    {
      blockedImport: USE_CLIENT_CONTEXTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_FUNCTIONS,
        USE_CLIENT_CONTEXTS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_SERVER_FUNCTIONS][
          USE_CLIENT_CONTEXTS
        ] // $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_CLIENT_CONTEXTS
      }`,
    },
    {
      blockedImport: USE_AGNOSTIC_CONDITIONS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_SERVER_FUNCTIONS,
        USE_AGNOSTIC_CONDITIONS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_SERVER_FUNCTIONS][
          USE_AGNOSTIC_CONDITIONS
        ] // $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_CONDITIONS
      }`,
    },
  ],
  [USE_CLIENT_CONTEXTS]: [
    {
      blockedImport: USE_SERVER_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_CLIENT_CONTEXTS,
        USE_SERVER_LOGICS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_CLIENT_CONTEXTS][
          USE_SERVER_LOGICS
        ] // $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_SERVER_LOGICS
      }`,
    },
    // USE_CLIENT_LOGICS allowed, because $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_CLIENT_LOGICS
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_AGNOSTIC_LOGICS
    {
      blockedImport: USE_SERVER_COMPONENTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_CLIENT_CONTEXTS,
        USE_SERVER_COMPONENTS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_CLIENT_CONTEXTS][
          USE_SERVER_COMPONENTS
        ] // $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_SERVER_COMPONENTS
      }`,
    },
    // USE_CLIENT_COMPONENTS allowed, because $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_CLIENT_COMPONENTS
    // USE_AGNOSTIC_COMPONENTS allowed, because $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_AGNOSTIC_COMPONENTS
    // USE_SERVER_FUNCTIONS allowed, because $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_SERVER_FUNCTIONS
    // USE_CLIENT_CONTEXTS allowed, because $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_CLIENT_CONTEXTS
    // USE_AGNOSTIC_CONDITIONS allowed, because $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#USE_AGNOSTIC_CONDITIONS
  ],
  [USE_AGNOSTIC_CONDITIONS]: [
    {
      blockedImport: USE_SERVER_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_CONDITIONS,
        USE_SERVER_LOGICS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_AGNOSTIC_CONDITIONS][
          USE_SERVER_LOGICS
        ] // $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_SERVER_LOGICS
      }`,
    },
    {
      blockedImport: USE_CLIENT_LOGICS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_CONDITIONS,
        USE_CLIENT_LOGICS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_AGNOSTIC_CONDITIONS][
          USE_CLIENT_LOGICS
        ] // $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_CLIENT_LOGICS
      }`,
    },
    // USE_AGNOSTIC_LOGICS allowed, because $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_AGNOSTIC_LOGICS
    // USE_SERVER_COMPONENTS allowed, because $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_SERVER_COMPONENTS
    // USE_CLIENT_COMPONENTS allowed, because $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_CLIENT_COMPONENTS
    // USE_AGNOSTIC_COMPONENTS allowed, because $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_AGNOSTIC_COMPONENTS
    {
      blockedImport: USE_SERVER_FUNCTIONS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_CONDITIONS,
        USE_SERVER_FUNCTIONS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_AGNOSTIC_CONDITIONS][
          USE_SERVER_FUNCTIONS
        ] // $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_SERVER_FUNCTIONS
      }`,
    },
    {
      blockedImport: USE_CLIENT_CONTEXTS,
      message: `${makeIntroForSpecificViolationMessage(
        USE_AGNOSTIC_CONDITIONS,
        USE_CLIENT_CONTEXTS
      )} ${
        jscommentsConfig[directive21ConfigName][USE_AGNOSTIC_CONDITIONS][
          USE_CLIENT_CONTEXTS
        ] // $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_CLIENT_CONTEXTS
      }`,
    },
    // USE_AGNOSTIC_CONDITIONS allowed, because $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_AGNOSTIC_CONDITIONS
  ],
  [USE_AGNOSTIC_STRATEGIES]: [
    // $COMMENT#DIRECTIVE21#USE_AGNOSTIC_STRATEGIES
  ],
};
