// "use agnostic logics"

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

// Invalid.
// Prime Server Logics cannot run on both the server and the client.
