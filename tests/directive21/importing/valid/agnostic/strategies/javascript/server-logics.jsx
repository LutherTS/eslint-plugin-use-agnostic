// "use agnostic strategies"

// ...Importing a Prime Server Logics Module.
import serverLogics from "../../../../../imported/javascript/server-logics.js";

// ...Importing a Prime Server Logics Module by a folder.
import serverLogicsFolder from "../../../../../imported/javascript/server-logics-js";

// ...Importing Prime Server Logics via Special Agnostic Strategy.
import {
  /* @serverLogics */ serverLogicsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// ...Importing Prime Server Logics via Special Agnostic Strategy by a folder.
import {
  /* @serverLogics */ serverLogicsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// Valid.
// (Special) Agnostic Strategies Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a `'use agnostic strategies'` importFileCommentedDirective.)
