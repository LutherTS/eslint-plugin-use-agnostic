// "use agnostic logics"
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

// Invalid.
// (Special) Client Contexts Components, like any Client Components, cannot be tinkered with on both the server and the client.
