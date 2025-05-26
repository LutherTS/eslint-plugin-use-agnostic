// "use agnostic conditions"

// ...Importing a Prime Server Logics Module.
import serverLogics from "../../../../../imported/javascript/server-logics.js";

// ...Importing Prime Server Logics via Special Agnostic Strategy.
import {
  /* @serverLogics */ serverLogicsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// Invalid.
// Prime Server Logics cannot run on both the server and the client.
