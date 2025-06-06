// "use server components"

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

// Valid.
// Lineal Agnostic Components can render safely on the server just like they can on the client.
