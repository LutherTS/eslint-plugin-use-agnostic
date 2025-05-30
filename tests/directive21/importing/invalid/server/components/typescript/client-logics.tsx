// "use server components"

// ...Importing a Prime Client Logics Module.
import clientLogics from "../../../../../imported/typescript/client-logics";
// Via alias.
import clientLogicsAlias from "@/tests/directive21/imported/typescript/client-logics";

// ...Importing Prime Client Logics via Special Agnostic Strategy.
import {
  /* @clientLogics */ clientLogicsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// Via alias.
import {
  /* @clientLogics */ clientLogicsStrategized as clientLogicsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";

// Invalid.
// Prime Client Logics should never leak to the server.
