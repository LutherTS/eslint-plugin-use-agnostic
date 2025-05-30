// "use client logics"

// ...Importing a Special Server Functions Module.
import serverFunctions from "../../../../../imported/typescript/server-functions";
// Via alias.
import serverFunctionsAlias from "@/tests/directive21/imported/typescript/server-functions";

// ...Importing Special Server Functions via Special Agnostic Strategy.
import {
  /* @serverFunctions */ serverFunctionsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// Via alias.
import {
  /* @serverFunctions */ serverFunctionsStrategized as serverFunctionsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";

// Valid.
// (Special) Server Functions can technically be attached to Client Components that are being tinkered with within Client Logics Modules.
