// "use agnostic strategies"

// ...Importing a Prime Client Logics Module.
import clientLogics from "../../../../../imported/javascript/client-logics.js";

// ...Importing a Prime Client Logics Module by a folder.
import clientLogicsFolder from "../../../../../imported/javascript/client-logics-js";

// ...Importing Prime Client Logics via Special Agnostic Strategy.
import {
  /* @clientLogics */ clientLogicsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// ...Importing Prime Client Logics via Special Agnostic Strategy by a folder.
import {
  /* @clientLogics */ clientLogicsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// Valid.
// (Special) Agnostic Strategies Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a 'use agnostic strategies' importFileCommentedDirective.)
