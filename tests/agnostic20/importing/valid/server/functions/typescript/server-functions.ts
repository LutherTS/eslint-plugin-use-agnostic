"use server";
// That's a Server Functions Module.

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

// Valid.
// $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_SERVER_FUNCTIONS
