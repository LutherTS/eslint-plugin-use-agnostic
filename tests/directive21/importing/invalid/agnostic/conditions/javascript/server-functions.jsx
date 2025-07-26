// "use agnostic conditions"

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
// (Special) Server Functions are not accepted because (Special) Agnostic Conditions Components only take finite, imported components as arguments in their making. As such, assigning props to these components, including Server Functions, is not made within Agnostic Conditions Modules.
