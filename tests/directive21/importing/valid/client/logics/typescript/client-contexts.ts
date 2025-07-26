// "use client logics"

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
// (Special) Client Contexts Components, like any Client Components, are OK to be composed with Prime Client Logics as long as the Prime Client Logics Module, by convention, does not export React components.
