"use agnostic";
// That's an Agnostic Logics Module.

// ...Importing a Server Functions Module (with extension).
import serverFunctions from "../../../../../imported/typescript/server-functions.ts";
// Via alias.
import serverFunctionsAlias from "@/tests/agnostic20/imported/typescript/server-functions.ts";
// Via baseUrl.
import serverFunctionsBaseUrl from "tests/agnostic20/imported/typescript/server-functions.ts";

// ...Importing a Server Functions Module by a folder.
import serverFunctionsFolder from "../../../../../imported/typescript/server-functions-ts";
// Via alias.
import serverFunctionsFolderAlias from "@/tests/agnostic20/imported/typescript/server-functions-ts";
// Via baseUrl.
import serverFunctionsFolderBaseUrl from "tests/agnostic20/imported/typescript/server-functions-ts";

// Invalid.
// $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_SERVER_FUNCTIONS
