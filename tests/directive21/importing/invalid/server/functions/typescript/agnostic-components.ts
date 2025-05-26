// "use server functions"

// ...Importing a Lineal Agnostic Components Module.
import agnosticComponents from "../../../../../imported/typescript/agnostic-components.tsx";

// ...Importing Lineal Agnostic Components via Special Agnostic Strategy.
import {
  /* @agnosticComponents */ agnosticComponentsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";

// Invalid.
// Lineal Agnostic Components aren't allowed because (Special) Server Functions have no business working with React Components.
