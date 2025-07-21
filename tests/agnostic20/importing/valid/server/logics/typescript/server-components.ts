// That's a Server Logics Module.

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

// Valid.
// Server Components are OK to be composed with Server Logics as long as the Server Logics Module, by convention, does not export React components.
