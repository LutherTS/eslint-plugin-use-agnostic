// "use server logics"

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
// (Special) Server Functions, being able to import one another, can compose and do so via Prime Server Logics, despite this method seeming superfluous at first glance. (Perhaps a preferrable use case for this has been found or could be found either today or in the future.)
