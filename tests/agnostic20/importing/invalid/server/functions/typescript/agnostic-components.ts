"use server";
// That's a Server Functions Module.

// ...Importing a Agnostic Components Module (with extension).
import agnosticComponents from "../../../../../imported/typescript/agnostic.tsx";
// Via alias.
import agnosticComponentsAlias from "@/tests/agnostic20/imported/typescript/agnostic.tsx";
// Via baseUrl.
import agnosticComponentsBaseUrl from "tests/agnostic20/imported/typescript/agnostic.tsx";

// ...Importing a Agnostic Components Module by a folder.
import agnosticComponentsFolder from "../../../../../imported/typescript/agnostic-tsx";
// Via alias.
import agnosticComponentsFolderAlias from "@/tests/agnostic20/imported/typescript/agnostic-tsx";
// Via baseUrl.
import agnosticComponentsFolderBaseUrl from "tests/agnostic20/imported/typescript/agnostic-tsx";

// Invalid.
// $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_COMPONENTS
