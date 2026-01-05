// "use agnostic strategies"

// ...Importing a Prime Agnostic Logics Module.
import agnosticLogics from "../../../../../imported/javascript/agnostic-logics.js";

// ...Importing a Prime Agnostic Logics Module by a folder.
import agnosticLogicsFolder from "../../../../../imported/javascript/agnostic-logics-js";

// ...Importing Prime Agnostic Logics via Special Agnostic Strategy.
import {
  /* @agnosticLogics */ agnosticLogicsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// ...Importing Prime Agnostic Logics via Special Agnostic Strategy by a folder.
import {
  /* @agnosticLogics */ agnosticLogicsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// Valid.
// (Special) Agnostic Strategies Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a `'use agnostic strategies'` importFileCommentedDirective.)
