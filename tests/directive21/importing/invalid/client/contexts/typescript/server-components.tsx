// "use client contexts"

// ...Importing a Lineal Server Components Module.
import serverComponents from "../../../../../imported/typescript/server-components";
// with extension
import serverComponentsExtension from "../../../../../imported/typescript/server-components.tsx";
// Via alias.
import serverComponentsAlias from "@/tests/directive21/imported/typescript/server-components";
// with extension
import serverComponentsAliasExtension from "@/tests/directive21/imported/typescript/server-components.tsx";
// Via baseUrl.
import serverComponentsBaseUrl from "tests/directive21/imported/typescript/server-components";
// with extension
import serverComponentsBaseUrlExtension from "tests/directive21/imported/typescript/server-components.tsx";

// ...Importing a Lineal Server Components Module by a folder.
import serverComponentsFolder from "../../../../../imported/typescript/server-components-tsx";
// Via alias.
import serverComponentsFolderAlias from "@/tests/directive21/imported/typescript/server-components-tsx";
// Via baseUrl.
import serverComponentsFolderBaseUrl from "tests/directive21/imported/typescript/server-components-tsx";

// ...Importing Lineal Server Components via Special Agnostic Strategy.
import {
  /* @serverComponents */ serverComponentsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// with extension
import {
  /* @serverComponents */ serverComponentsStrategized as serverComponentsStrategizedExtension,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";
// Via alias.
import {
  /* @serverComponents */ serverComponentsStrategized as serverComponentsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";
// with extension
import {
  /* @serverComponents */ serverComponentsStrategized as serverComponentsStrategizedAliasExtension,
} from "@/tests/directive21/imported/typescript/agnostic-strategies.tsx";
// Via baseUrl.
import {
  /* @serverComponents */ serverComponentsStrategized as serverComponentsStrategizedBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies";
// with extension
import {
  /* @serverComponents */ serverComponentsStrategized as serverComponentsStrategizedBaseUrlExtension,
} from "tests/directive21/imported/typescript/agnostic-strategies.tsx";

// ...Importing Lineal Server Components via Special Agnostic Strategy by a folder.
import {
  /* @serverComponents */ serverComponentsStrategized as serverComponentsStrategizedFolder,
} from "../../../../../imported/typescript/agnostic-strategies-tsx";
// Via alias.
import {
  /* @serverComponents */ serverComponentsStrategized as serverComponentsStrategizedFolderAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies-tsx";
// Via baseUrl.
import {
  /* @serverComponents */ serverComponentsStrategized as serverComponentsStrategizedFolderBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies-tsx";

// Invalid.
// Lineal Server Components may only pass through (Special) Client Contexts Components via the children prop within Server Components Modules.
