// "use server functions"

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

// Invalid.
// (Special) Agnostic Conditions Components aren't allowed because (Special) Server Functions have no business working with React Components.
