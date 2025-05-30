// "use server logics"

// ...Importing a Special Agnostic Conditions Module.
import agnosticConditions from "../../../../../imported/typescript/agnostic-conditions";
// Via alias.
import agnosticConditionsAlias from "@/tests/directive21/imported/typescript/agnostic-conditions";

// ...Importing Special Agnostic Conditions via Special Agnostic Strategy.
import {
  /* @agnosticConditions */ agnosticConditionsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// Via alias.
import {
  /* @agnosticConditions */ agnosticConditionsStrategized as agnosticConditionsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";

// Valid.
// (Special) Agnostic Conditions Components are able to safely render on the server, guaranteeing that only their `ComponentForServer` will be effectively involved in Prime Server Logics Modules.
