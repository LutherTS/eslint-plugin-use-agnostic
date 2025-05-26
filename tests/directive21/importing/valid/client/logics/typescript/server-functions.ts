// "use client logics"

// ...Importing a Special Server Functions Module.
import serverFunctions from "../../../../../imported/typescript/server-functions.ts";

// ...Importing Special Server Functions via Special Agnostic Strategy.
import {
  /* @serverFunctions */ serverFunctionsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";

// Valid.
// (Special) Server Functions can technically be attached to Client Components that are being tinkered with within Client Logics Modules.
