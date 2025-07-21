"use agnostic";
// That's an Agnostic Logics Module.

// ...Importing a Client Logics Module (with extension).
import clientLogics from "../../../../../imported/typescript/client.ts";
// Via alias.
import clientLogicsAlias from "@/tests/agnostic20/imported/typescript/client.ts";
// Via baseUrl.
import clientLogicsBaseUrl from "tests/agnostic20/imported/typescript/client.ts";

// ...Importing a Client Logics Module by a folder.
import clientLogicsFolder from "../../../../../imported/typescript/client-ts";
// Via alias.
import clientLogicsFolderAlias from "@/tests/agnostic20/imported/typescript/client-ts";
// Via baseUrl.
import clientLogicsFolderBaseUrl from "tests/agnostic20/imported/typescript/client-ts";

// Invalid.
// Client Logics cannot run on both the server and the client, such as would be the case here in an Agnostic Logics Module.
