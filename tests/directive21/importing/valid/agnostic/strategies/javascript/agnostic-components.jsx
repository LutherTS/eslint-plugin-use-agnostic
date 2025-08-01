// "use agnostic strategies"

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
// (Special) Agnostic Strategies Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a `'use agnostic strategies'` importFileCommentedDirective.)
