// "use agnostic components"

// ...Importing a Prime Client Logics Module.
import clientLogics from "../../../../../imported/typescript/client-logics";
// with extension
import clientLogicsExtension from "../../../../../imported/typescript/client-logics.ts";
// Via alias.
import clientLogicsAlias from "@/tests/directive21/imported/typescript/client-logics";
// with extension
import clientLogicsAliasExtension from "@/tests/directive21/imported/typescript/client-logics.ts";

// ...Importing Prime Client Logics via Special Agnostic Strategy.
import {
  /* @clientLogics */ clientLogicsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// with extension
import {
  /* @clientLogics */ clientLogicsStrategized as clientLogicsStrategizedExtension,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";
// Via alias.
import {
  /* @clientLogics */ clientLogicsStrategized as clientLogicsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";
// with extension
import {
  /* @clientLogics */ clientLogicsStrategized as clientLogicsStrategizedAliasExtension,
} from "@/tests/directive21/imported/typescript/agnostic-strategies.tsx";

// Invalid.
// Prime Client Logics cannot run on both the server and the client.
