"use client";
// That's a Client Components Module.

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
// Server Functions can specifically be triggered by Client Components.
