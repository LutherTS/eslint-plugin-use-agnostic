// "use agnostic logics"

// ...Importing a Lineal Client Components Module.
import clientComponents from "../../../../../imported/typescript/client-components";
// with extension
import clientComponentsExtension from "../../../../../imported/typescript/client-components.tsx";
// Via alias.
import clientComponentsAlias from "@/tests/directive21/imported/typescript/client-components";
// with extension
import clientComponentsAliasExtension from "@/tests/directive21/imported/typescript/client-components.tsx";
// Via baseUrl.
import clientComponentsBaseUrl from "tests/directive21/imported/typescript/client-components";
// with extension
import clientComponentsBaseUrlExtension from "tests/directive21/imported/typescript/client-components.tsx";

// ...Importing Lineal Client Components via Special Agnostic Strategy.
import {
  /* @clientComponents */ clientComponentsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// with extension
import {
  /* @clientComponents */ clientComponentsStrategized as clientComponentsStrategizedExtension,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";
// Via alias.
import {
  /* @clientComponents */ clientComponentsStrategized as clientComponentsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";
// with extension
import {
  /* @clientComponents */ clientComponentsStrategized as clientComponentsStrategizedAliasExtension,
} from "@/tests/directive21/imported/typescript/agnostic-strategies.tsx";
// Via baseUrl.
import {
  /* @clientComponents */ clientComponentsStrategized as clientComponentsStrategizedBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies";
// with extension
import {
  /* @clientComponents */ clientComponentsStrategized as clientComponentsStrategizedBaseUrlExtension,
} from "tests/directive21/imported/typescript/agnostic-strategies.tsx";

// Invalid.
// Lineal Client Components, like any Client Components, cannot be tinkered with on both the server and the client.
