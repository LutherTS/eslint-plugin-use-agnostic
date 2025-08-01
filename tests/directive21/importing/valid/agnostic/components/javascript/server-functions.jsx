// "use agnostic components"

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

// Valid.
// (Special) Server Functions can be passed to Client Components as props when Client Components are also legally imported into Agnostic Components Modules.
