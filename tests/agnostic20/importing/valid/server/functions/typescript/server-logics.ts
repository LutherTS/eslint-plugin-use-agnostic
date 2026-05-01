"use server";
// That's a Server Functions Module.

// ...Importing a Server Logics Module (with extension).
import serverLogics from "../../../../../imported/typescript/server.ts";
// Via alias.
import serverLogicsAlias from "@/tests/agnostic20/imported/typescript/server.ts";
// Via baseUrl.
import serverLogicsBaseUrl from "tests/agnostic20/imported/typescript/server.ts";

// ...Importing a Server Logics Module by a folder.
import serverLogicsFolder from "../../../../../imported/typescript/server-ts";
// Via alias.
import serverLogicsFolderAlias from "@/tests/agnostic20/imported/typescript/server-ts";
// Via baseUrl.
import serverLogicsFolderBaseUrl from "tests/agnostic20/imported/typescript/server-ts";

// Valid.
// Server Logics, being logic from the server, can safely support Server Functions.
