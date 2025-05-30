// "use client contexts"

// ...Importing a Prime Agnostic Logics Module.
import agnosticLogics from "../../../../../imported/typescript/agnostic-logics";
// Via alias.
import agnosticLogicsAlias from "@/tests/directive21/imported/typescript/agnostic-logics";

// ...Importing Prime Agnostic Logics via Special Agnostic Strategy.
import {
  /* @agnosticLogics */ agnosticLogicsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// Via alias.
import {
  /* @agnosticLogics */ agnosticLogicsStrategized as agnosticLogicsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";

// Valid.
// Prime Agnostic Logics can run safely on the client just like they can on the server.
