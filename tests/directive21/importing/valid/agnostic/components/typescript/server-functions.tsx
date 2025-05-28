// "use agnostic components"

// ...Importing a Special Server Functions Module.
import serverFunctions from "../../../../../imported/typescript/server-functions";

// ...Importing Special Server Functions via Special Agnostic Strategy.
import {
  /* @serverFunctions */ serverFunctionsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";

// Valid.
// (Special) Server Functions can be passed to Client Components as props when Client Components are also legally imported into Agnostic Components Modules.
