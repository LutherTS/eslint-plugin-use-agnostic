"use client";
// That's a Client Logics Module.

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

// Invalid.
// $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_SERVER_LOGICS
