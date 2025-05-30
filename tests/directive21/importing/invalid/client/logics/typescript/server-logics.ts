// "use client logics"

// ...Importing a Prime Server Logics Module.
import serverLogics from "../../../../../imported/typescript/server-logics";
// with extension
import serverLogicsExtension from "../../../../../imported/typescript/server-logics.ts";
// Via alias.
import serverLogicsAlias from "@/tests/directive21/imported/typescript/server-logics";
// with extension
import serverLogicsAliasExtension from "@/tests/directive21/imported/typescript/server-logics.ts";
// Via baseUrl.
import serverLogicsBaseUrl from "tests/directive21/imported/typescript/server-logics";
// with extension
import serverLogicsBaseUrlExtension from "tests/directive21/imported/typescript/server-logics.ts";

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
// Via baseUrl.
import {
  /* @serverLogics */ serverLogicsStrategized as serverLogicsStrategizedBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies";
// with extension
import {
  /* @serverLogics */ serverLogicsStrategized as serverLogicsStrategizedBaseUrlExtension,
} from "tests/directive21/imported/typescript/agnostic-strategies.tsx";

// Invalid.
// Prime Server Logics should never leak to the client.
