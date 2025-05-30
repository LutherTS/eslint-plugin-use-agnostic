"use agnostic";
// That's an Agnostic Logics Module.

// ...Importing a Server Components Module (with extension).
import serverComponents from "../../../../../imported/typescript/server.tsx";
// Via alias.
import serverComponentsAlias from "@/tests/agnostic20/imported/typescript/server.tsx";
// Via baseUrl.
import serverComponentsBaseUrl from "tests/agnostic20/imported/typescript/server.tsx";

// ...Importing a Server Components Module by a folder.
import serverComponentsFolder from "../../../../../imported/typescript/server-tsx";
// Via alias.
import serverComponentsFolderAlias from "@/tests/agnostic20/imported/typescript/server-tsx";
// Via baseUrl.
import serverComponentsFolderBaseUrl from "tests/agnostic20/imported/typescript/server-tsx";

// Invalid.
// Server Components cannot be tinkered with on both the server and the client.
