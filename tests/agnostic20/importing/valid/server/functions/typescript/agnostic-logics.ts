"use server";
// That's a Server Functions Module.

// ...Importing an Agnostic Logics Module (with extension).
import agnosticLogics from "../../../../../imported/typescript/agnostic.ts";
// Via alias.
import agnosticLogicsAlias from "@/tests/agnostic20/imported/typescript/agnostic.ts";
// Via baseUrl.
import agnosticLogicsBaseUrl from "tests/agnostic20/imported/typescript/agnostic.ts";

// ...Importing an Agnostic Logics Module by a folder.
import agnosticLogicsFolder from "../../../../../imported/typescript/agnostic-ts";
// Via alias.
import agnosticLogicsFolderAlias from "@/tests/agnostic20/imported/typescript/agnostic-ts";
// Via baseUrl.
import agnosticLogicsFolderBaseUrl from "tests/agnostic20/imported/typescript/agnostic-ts";

// Valid.
// Agnostic Logics can run safely on the server just like they can on the client.
