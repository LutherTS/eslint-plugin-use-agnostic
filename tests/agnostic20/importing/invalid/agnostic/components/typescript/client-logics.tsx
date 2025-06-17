"use agnostic";
// That's an Agnostic Components Module.

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
// $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_LOGICS
