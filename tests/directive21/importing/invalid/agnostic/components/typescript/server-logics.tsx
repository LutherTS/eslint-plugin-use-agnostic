// "use agnostic components"

// ...Importing a Prime Server Logics Module.
import serverLogics from "../../../../../imported/typescript/server-logics";
// Via alias.
import serverLogicsAlias from "@/tests/directive21/imported/typescript/server-logics";

// ...Importing Prime Server Logics via Special Agnostic Strategy.
import {
  /* @serverLogics */ serverLogicsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// Via alias.
import {
  /* @serverLogics */ serverLogicsStrategized as serverLogicsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";

// Invalid.
// Prime Server Logics cannot run on both the server and the client.
