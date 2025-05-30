// "use server components"

// ...Importing a Prime Server Logics Module.
import serverLogics from "../../../../../imported/typescript/server-logics";
// with extension
import serverLogicsExtension from "../../../../../imported/typescript/server-logics.ts";
// Via alias.
import serverLogicsAlias from "@/tests/directive21/imported/typescript/server-logics";
// with extension
import serverLogicsAliasExtension from "@/tests/directive21/imported/typescript/server-logics.ts";

// ...Importing Prime Server Logics via Special Agnostic Strategy.
import {
  /* @serverLogics */ serverLogicsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// with extension
import {
  /* @serverLogics */ serverLogicsStrategized as serverLogicsStrategizedExtension,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";
// Via alias.
import {
  /* @serverLogics */ serverLogicsStrategized as serverLogicsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";
// with extension
import {
  /* @serverLogics */ serverLogicsStrategized as serverLogicsStrategizedAliasExtension,
} from "@/tests/directive21/imported/typescript/agnostic-strategies.tsx";

// Valid.
// Prime Server Logics, being logic from the server, can safely support Lineal Server Components.
