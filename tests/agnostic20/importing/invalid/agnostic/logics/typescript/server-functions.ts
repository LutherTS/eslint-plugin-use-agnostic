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
// Server Functions can be modified on the server and on the client, but their use cases on both environments are not one-to-one compatible, since they're being addressed as they are on the server and addressed as references on the client.
