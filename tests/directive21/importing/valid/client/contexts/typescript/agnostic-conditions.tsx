// "use client contexts"

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
// (Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can render safely on the client just like they can on the server, in a mechanism that allows (Special) Client Contexts Components to safely and indirectly compose with child Server Components within Client Contexts Modules.
