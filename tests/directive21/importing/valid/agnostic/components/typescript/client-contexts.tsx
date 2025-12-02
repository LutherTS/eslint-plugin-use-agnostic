// "use agnostic components"

// ...Importing a Special Client Contexts Module.
import clientContexts from "../../../../../imported/typescript/client-contexts";
// with extension
import clientContextsExtension from "../../../../../imported/typescript/client-contexts.tsx";
// Via alias.
import clientContextsAlias from "@/tests/directive21/imported/typescript/client-contexts";
// with extension
import clientContextsAliasExtension from "@/tests/directive21/imported/typescript/client-contexts.tsx";
// Via baseUrl.
import clientContextsBaseUrl from "tests/directive21/imported/typescript/client-contexts";
// with extension
import clientContextsBaseUrlExtension from "tests/directive21/imported/typescript/client-contexts.tsx";

// ...Importing a Special Client Contexts Module by a folder.
import clientContextsFolder from "../../../../../imported/typescript/client-contexts-tsx";
// Via alias.
import clientContextsFolderAlias from "@/tests/directive21/imported/typescript/client-contexts-tsx";
// Via baseUrl.
import clientContextsFolderBaseUrl from "tests/directive21/imported/typescript/client-contexts-tsx";

// ...Importing (Special) Client Contexts Components via Special Agnostic Strategy.
import {
  /* @clientContexts */ clientContextsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// with extension
import {
  /* @clientContexts */ clientContextsStrategized as clientContextsStrategizedExtension,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";
// Via alias.
import {
  /* @clientContexts */ clientContextsStrategized as clientContextsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";
// with extension
import {
  /* @clientContexts */ clientContextsStrategized as clientContextsStrategizedAliasExtension,
} from "@/tests/directive21/imported/typescript/agnostic-strategies.tsx";
// Via baseUrl.
import {
  /* @clientContexts */ clientContextsStrategized as clientContextsStrategizedBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies";
// with extension
import {
  /* @clientContexts */ clientContextsStrategized as clientContextsStrategizedBaseUrlExtension,
} from "tests/directive21/imported/typescript/agnostic-strategies.tsx";

// ...Importing (Special) Client Contexts Components via Special Agnostic Strategy by a folder.
import {
  /* @clientContexts */ clientContextsStrategized as clientContextsStrategizedFolder,
} from "../../../../../imported/typescript/agnostic-strategies-tsx";
// Via alias.
import {
  /* @clientContexts */ clientContextsStrategized as clientContextsStrategizedFolderAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies-tsx";
// Via baseUrl.
import {
  /* @clientContexts */ clientContextsStrategized as clientContextsStrategizedFolderBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies-tsx";

// Valid.
// (Special) Client Contexts Components can be nested inside Lineal Agnostic Components to wrap some of the tree with client state accessible through child Client Components, and to pass through Server Components — if still on the Server Tree — when the root of the application is planted on the server.
