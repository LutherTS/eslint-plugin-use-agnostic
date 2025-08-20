// "use agnostic components"

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
// (Special) Agnostic Conditions Components can compose with Lineal Agnostic Components as if they were Lineal Agnostic Components themselves, making them a necessary mechanism for Lineal Server Components to be nested in any Agnostic Components.
