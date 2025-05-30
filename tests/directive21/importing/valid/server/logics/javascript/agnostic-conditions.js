// "use server logics"

// ...Importing a Special Agnostic Conditions Module.
import agnosticConditions from "../../../../../imported/javascript/agnostic-conditions.jsx";

// ...Importing a Special Agnostic Conditions Module by a folder.
import agnosticConditionsFolder from "../../../../../imported/javascript/agnostic-conditions-jsx";

// ...Importing Special Agnostic Conditions via Special Agnostic Strategy.
import {
  /* @agnosticConditions */ agnosticConditionsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// ...Importing Special Agnostic Conditions via Special Agnostic Strategy by a folder.
import {
  /* @agnosticConditions */ agnosticConditionsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// Valid.
// (Special) Agnostic Conditions Components are able to safely render on the server, guaranteeing that only their `ComponentForServer` will be effectively involved in Prime Server Logics Modules.
