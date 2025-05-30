// "use agnostic strategies"

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

// Valid.
// (Special) Agnostic Strategies Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a 'use agnostic strategies' importFileCommentedDirective.)
