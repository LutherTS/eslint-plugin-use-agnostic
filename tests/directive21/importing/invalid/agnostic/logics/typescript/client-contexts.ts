// "use agnostic logics"

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

// ...Importing Special Client Contexts via Special Agnostic Strategy.
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

// Invalid.
// (Special) Client Contexts Components, like any Client Components, cannot be tinkered with on both the server and the client.
