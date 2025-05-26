// "use client logics"

// ...Importing a Special Server Functions Module.
import serverFunctions from "../../../../../imported/javascript/server-functions.js";

// ...Importing Special Server Functions via Special Agnostic Strategy.
import {
  /* @serverFunctions */ serverFunctionsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// Valid.
// (Special) Server Functions can technically be attached to Client Components that are being tinkered with within Client Logics Modules.
