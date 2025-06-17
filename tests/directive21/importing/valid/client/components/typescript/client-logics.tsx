// "use client components"

// ...Importing a Prime Client Logics Module.
import clientLogics from "../../../../../imported/typescript/client-logics";
// with extension
import clientLogicsExtension from "../../../../../imported/typescript/client-logics.ts";
// Via alias.
import clientLogicsAlias from "@/tests/directive21/imported/typescript/client-logics";
// with extension
import clientLogicsAliasExtension from "@/tests/directive21/imported/typescript/client-logics.ts";
// Via baseUrl.
import clientLogicsBaseUrl from "tests/directive21/imported/typescript/client-logics";
// with extension
import clientLogicsBaseUrlExtension from "tests/directive21/imported/typescript/client-logics.ts";

// ...Importing a Prime Client Logics Module by a folder.
import clientLogicsFolder from "../../../../../imported/typescript/client-logics-ts";
// Via alias.
import clientLogicsFolderAlias from "@/tests/directive21/imported/typescript/client-logics-ts";
// Via baseUrl.
import clientLogicsFolderBaseUrl from "tests/directive21/imported/typescript/client-logics-ts";

// ...Importing Prime Client Logics via Special Agnostic Strategy.
import {
  /* @clientLogics */ clientLogicsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// with extension
import {
  /* @clientLogics */ clientLogicsStrategized as clientLogicsStrategizedExtension,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";
// Via alias.
import {
  /* @clientLogics */ clientLogicsStrategized as clientLogicsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";
// with extension
import {
  /* @clientLogics */ clientLogicsStrategized as clientLogicsStrategizedAliasExtension,
} from "@/tests/directive21/imported/typescript/agnostic-strategies.tsx";
// Via baseUrl.
import {
  /* @clientLogics */ clientLogicsStrategized as clientLogicsStrategizedBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies";
// with extension
import {
  /* @clientLogics */ clientLogicsStrategized as clientLogicsStrategizedBaseUrlExtension,
} from "tests/directive21/imported/typescript/agnostic-strategies.tsx";

// ...Importing Prime Client Logics via Special Agnostic Strategy by a folder.
import {
  /* @clientLogics */ clientLogicsStrategized as clientLogicsStrategizedFolder,
} from "../../../../../imported/typescript/agnostic-strategies-tsx";
// Via alias.
import {
  /* @clientLogics */ clientLogicsStrategized as clientLogicsStrategizedFolderAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies-tsx";
// Via baseUrl.
import {
  /* @clientLogics */ clientLogicsStrategized as clientLogicsStrategizedFolderBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies-tsx";

// Valid.
// Prime Client Logics, being logic from the client, can safely support Lineal Client Components, like any Client Components.
