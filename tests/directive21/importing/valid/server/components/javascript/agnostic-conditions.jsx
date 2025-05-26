// "use server components"

// ...Importing a Special Agnostic Conditions Module.
import agnosticConditions from "../../../../../imported/javascript/agnostic-conditions.jsx";

// ...Importing Special Agnostic Conditions via Special Agnostic Strategy.
import {
  /* @agnosticConditions */ agnosticConditionsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// Valid.
// (Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can render safely on the server just like they can on the client.
