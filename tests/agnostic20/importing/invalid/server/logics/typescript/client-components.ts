// That's a Server Logics Module.

// ...Importing a Client Components Module (with extension).
import clientComponents from "../../../../../imported/typescript/client.tsx";
// Via alias.
import clientComponentsAlias from "@/tests/agnostic20/imported/typescript/client.tsx";
// Via baseUrl.
import clientComponentsBaseUrl from "tests/agnostic20/imported/typescript/client.tsx";

// ...Importing a Client Components Module by a folder.
import clientComponentsFolder from "../../../../../imported/typescript/client-tsx";
// Via alias.
import clientComponentsFolderAlias from "@/tests/agnostic20/imported/typescript/client-tsx";
// Via baseUrl.
import clientComponentsFolderBaseUrl from "tests/agnostic20/imported/typescript/client-tsx";

// Invalid.
// Client Components cannot be tinkered with on the server.
