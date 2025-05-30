// "use agnostic strategies"

// ...Importing a Special Server Functions Module.
import serverFunctions from "../../../../../imported/typescript/server-functions";
// with extension
import serverFunctionsExtension from "../../../../../imported/typescript/server-functions.ts";
// Via alias.
import serverFunctionsAlias from "@/tests/directive21/imported/typescript/server-functions";
// with extension
import serverFunctionsAliasExtension from "@/tests/directive21/imported/typescript/server-functions.ts";
// Via baseUrl.
import serverFunctionsBaseUrl from "tests/directive21/imported/typescript/server-functions";
// with extension
import serverFunctionsBaseUrlExtension from "tests/directive21/imported/typescript/server-functions.ts";

// ...Importing Special Server Functions via Special Agnostic Strategy.
import {
  /* @serverFunctions */ serverFunctionsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// with extension
import {
  /* @serverFunctions */ serverFunctionsStrategized as serverFunctionsStrategizedExtension,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";
// Via alias.
import {
  /* @serverFunctions */ serverFunctionsStrategized as serverFunctionsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";
// with extension
import {
  /* @serverFunctions */ serverFunctionsStrategized as serverFunctionsStrategizedAliasExtension,
} from "@/tests/directive21/imported/typescript/agnostic-strategies.tsx";
// Via baseUrl.
import {
  /* @serverFunctions */ serverFunctionsStrategized as serverFunctionsStrategizedBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies";
// with extension
import {
  /* @serverFunctions */ serverFunctionsStrategized as serverFunctionsStrategizedBaseUrlExtension,
} from "tests/directive21/imported/typescript/agnostic-strategies.tsx";

// Valid.
// (Special) Agnostic Strategies Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a 'use agnostic strategies' importFileCommentedDirective.)
