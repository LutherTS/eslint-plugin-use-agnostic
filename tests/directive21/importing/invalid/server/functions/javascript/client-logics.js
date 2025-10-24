// "use server functions"

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

// Invalid.
// Prime Client Logics should never leak to the server.
