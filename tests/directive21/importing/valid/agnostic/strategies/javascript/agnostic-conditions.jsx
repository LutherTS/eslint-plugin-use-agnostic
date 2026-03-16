// "use agnostic strategies"

// ...Importing a Special Agnostic Conditions Module.
import agnosticConditions from "../../../../../imported/javascript/agnostic-conditions.jsx";

// ...Importing a Special Agnostic Conditions Module by a folder.
import agnosticConditionsFolder from "../../../../../imported/javascript/agnostic-conditions-jsx";

// ...Importing (Special) Agnostic Conditions Components via Special Agnostic Strategy.
import {
  /* @agnosticConditions */ agnosticConditionsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// ...Importing (Special) Agnostic Conditions Components via Special Agnostic Strategy by a folder.
import {
  /* @agnosticConditions */ agnosticConditionsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// Valid.
// (Special) Agnostic Strategies Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a `'use agnostic strategies'` importFileCommentedDirective.)
