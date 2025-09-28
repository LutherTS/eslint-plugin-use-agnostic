// "use client contexts"

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
// Prime Client Logics, being logic from the client, can safely support (Special) Client Contexts Components, like any Client Components.
