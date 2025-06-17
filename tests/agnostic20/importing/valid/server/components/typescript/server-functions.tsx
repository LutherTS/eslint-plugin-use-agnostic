// That's a Server Components Module.

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
// Server Functions can be passed to imported Client Components within Server Components Modules, even though indeed Server Components Modules and Server Components can make their own Server Functions through inline 'use server' directives.
