// "use agnostic conditions"

// ...Importing a Special Server Functions Module.
import serverFunctions from "../../../../../imported/typescript/server-functions.ts";

// ...Importing Special Server Functions via Special Agnostic Strategy.
import {
  /* @serverFunctions */ serverFunctionsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";

// Invalid.
// (Special) Server Functions are not accepted because (Special) Agnostic Conditions Components only take finite, imported components as arguments in their making. As such, assigning props to these components, including Server Functions, is not made within Agnostic Conditions Modules.
