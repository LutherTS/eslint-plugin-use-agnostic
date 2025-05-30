// "use agnostic conditions"

// ...Importing a Lineal Agnostic Components Module.
import agnosticComponents from "../../../../../imported/typescript/agnostic-components";
// Via alias.
import agnosticComponentsAlias from "@/tests/directive21/imported/typescript/agnostic-components";

// ...Importing Lineal Agnostic Components via Special Agnostic Strategy.
import {
  /* @agnosticComponents */ agnosticComponentsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// Via alias.
import {
  /* @agnosticComponents */ agnosticComponentsStrategized as agnosticComponentsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";

// Valid.
// Lineal Agnostic Components can take the place of `ComponentForServer` and/or `ComponentForClient` components to form (Special) Agnostic Conditions Components.
