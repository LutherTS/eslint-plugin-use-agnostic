"use agnostic";
// That's an Agnostic Components Module.

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
// Agnostic Logics, being environment-agnostic logic, can safely support Agnostic Components.
