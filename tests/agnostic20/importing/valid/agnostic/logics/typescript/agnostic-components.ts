"use agnostic";
// That's an Agnostic Logics Module.

// ...Importing an Agnostic Components Module (with extension).
import agnosticComponents from "../../../../../imported/typescript/agnostic.tsx";
// Via alias.
import agnosticComponentsAlias from "@/tests/agnostic20/imported/typescript/agnostic.tsx";
// Via baseUrl.
import agnosticComponentsBaseUrl from "tests/agnostic20/imported/typescript/agnostic.tsx";

// ...Importing an Agnostic Components Module by a folder.
import agnosticComponentsFolder from "../../../../../imported/typescript/agnostic-tsx";
// Via alias.
import agnosticComponentsFolderAlias from "@/tests/agnostic20/imported/typescript/agnostic-tsx";
// Via baseUrl.
import agnosticComponentsFolderBaseUrl from "tests/agnostic20/imported/typescript/agnostic-tsx";

// Valid.
// Agnostic Components can be composed with Logics agnostically as long as the Agnostic Logics Module, by convention, does not export React components.
