// "use server functions"

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

// ...Importing a Special Server Functions Module by a folder.
import serverFunctionsFolder from "../../../../../imported/typescript/server-functions-ts";
// Via alias.
import serverFunctionsFolderAlias from "@/tests/directive21/imported/typescript/server-functions-ts";
// Via baseUrl.
import serverFunctionsFolderBaseUrl from "tests/directive21/imported/typescript/server-functions-ts";

// ...Importing (Special) Server Functions via Special Agnostic Strategy.
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

// ...Importing (Special) Server Functions via Special Agnostic Strategy by a folder.
import {
  /* @serverFunctions */ serverFunctionsStrategized as serverFunctionsStrategizedFolder,
} from "../../../../../imported/typescript/agnostic-strategies-tsx";
// Via alias.
import {
  /* @serverFunctions */ serverFunctionsStrategized as serverFunctionsStrategizedFolderAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies-tsx";
// Via baseUrl.
import {
  /* @serverFunctions */ serverFunctionsStrategized as serverFunctionsStrategizedFolderBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies-tsx";

// Valid.
// (Special) Server Functions, even though they don't need to import one another and the same results can be generated via Prime Server Logics for the outcome of a single Server Function, can still compose with one another. (Perhaps a preferrable use case for this has been found or could be found either today or in the future.)
