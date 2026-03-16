// "use agnostic logics"
"use agnostic";

// ...Importing a Special Server Functions Module.
import serverFunctions from "../../../../../imported/javascript/server-functions.js";

// ...Importing a Special Server Functions Module by a folder.
import serverFunctionsFolder from "../../../../../imported/javascript/server-functions-js";

// ...Importing (Special) Server Functions via Special Agnostic Strategy.
import {
  /* @serverFunctions */ serverFunctionsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// ...Importing (Special) Server Functions via Special Agnostic Strategy by a folder.
import {
  /* @serverFunctions */ serverFunctionsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// Invalid.
// (Special) Server Functions can be modified on the server and on the client, but their use cases on both environments are not one-to-one compatible, since they're being addressed as they are on the server and addressed as references on the client.
