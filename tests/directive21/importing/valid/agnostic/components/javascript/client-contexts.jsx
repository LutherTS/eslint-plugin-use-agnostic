// "use agnostic components"
"use agnostic";

// ...Importing a Special Client Contexts Module.
import clientContexts from "../../../../../imported/javascript/client-contexts.jsx";

// ...Importing a Special Client Contexts Module by a folder.
import clientContextsFolder from "../../../../../imported/javascript/client-contexts-jsx";

// ...Importing (Special) Client Contexts Components via Special Agnostic Strategy.
import {
  /* @clientContexts */ clientContextsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// ...Importing (Special) Client Contexts Components via Special Agnostic Strategy by a folder.
import {
  /* @clientContexts */ clientContextsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// Valid.
// (Special) Client Contexts Components can be nested inside Lineal Agnostic Components to wrap some of the tree with client state accessible through child Client Components, and to pass through Server Components — if still on the Server Tree — when the root of the application is planted on the server.
