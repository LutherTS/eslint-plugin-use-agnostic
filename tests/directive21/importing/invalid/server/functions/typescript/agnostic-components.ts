// "use server functions"

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

// Invalid.
// Lineal Agnostic Components aren't allowed because (Special) Server Functions have no business working with React Components.
