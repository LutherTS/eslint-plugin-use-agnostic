// "use server functions"
"use server";

// ...Importing a Lineal Agnostic Components Module.
import agnosticComponents from "../../../../../imported/javascript/agnostic-components.jsx";

// ...Importing a Lineal Agnostic Components Module by a folder.
import agnosticComponentsFolder from "../../../../../imported/javascript/agnostic-components-jsx";

// ...Importing Lineal Agnostic Components via Special Agnostic Strategy.
import {
  /* @agnosticComponents */ agnosticComponentsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// ...Importing Lineal Agnostic Components via Special Agnostic Strategy by a folder.
import {
  /* @agnosticComponents */ agnosticLogicsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// Invalid.
// Lineal Agnostic Components aren't allowed because (Special) Server Functions have no business working with React Components.
