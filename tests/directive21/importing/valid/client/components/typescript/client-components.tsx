// "use client components"

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

// ...Importing a Lineal Client Components Module by a folder.
import clientComponentsFolder from "../../../../../imported/typescript/client-components-tsx";
// Via alias.
import clientComponentsFolderAlias from "@/tests/directive21/imported/typescript/client-components-tsx";
// Via baseURL.
import clientComponentsFolderBaseUrl from "tests/directive21/imported/typescript/client-components-tsx";

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

// ...Importing Lineal Client Components via Special Agnostic Strategy by a folder.
import {
  /* @clientComponents */ clientComponentsStrategized as clientComponentsStrategizedFolder,
} from "../../../../../imported/typescript/agnostic-strategies-tsx";
// Via alias.
import {
  /* @clientComponents */ clientComponentsStrategized as clientComponentsStrategizedFolderAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies-tsx";
// Via baseURL.
import {
  /* @clientComponents */ clientComponentsStrategized as clientComponentsStrategizedFolderBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies-tsx";

// Valid.
// Lineal Client Components can compose with one another.
