// "use server functions"
"use server";

// ...Importing a Lineal Agnostic Components Module.
import agnosticComponents from "../../../../../imported/typescript/agnostic-components";
// with extension
import agnosticComponentsExtension from "../../../../../imported/typescript/agnostic-components.tsx";
// Via alias.
import agnosticComponentsAlias from "@/tests/directive21/imported/typescript/agnostic-components";
// with extension
import agnosticComponentsAliasExtension from "@/tests/directive21/imported/typescript/agnostic-components.tsx";
// Via baseUrl.
import agnosticComponentsBaseUrl from "tests/directive21/imported/typescript/agnostic-components";
// with extension
import agnosticComponentsBaseUrlExtension from "tests/directive21/imported/typescript/agnostic-components.tsx";

// ...Importing a Lineal Agnostic Components Module by a folder.
import agnosticComponentsFolder from "../../../../../imported/typescript/agnostic-components-tsx";
// Via alias.
import agnosticComponentsFolderAlias from "@/tests/directive21/imported/typescript/agnostic-components-tsx";
// Via baseUrl.
import agnosticComponentsFolderBaseUrl from "tests/directive21/imported/typescript/agnostic-components-tsx";

// ...Importing Lineal Agnostic Components via Special Agnostic Strategy.
import {
  /* @agnosticComponents */ agnosticComponentsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// with extension
import {
  /* @agnosticComponents */ agnosticComponentsStrategized as agnosticComponentsStrategizedExtension,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";
// Via alias.
import {
  /* @agnosticComponents */ agnosticComponentsStrategized as agnosticComponentsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";
import {
  /* @agnosticComponents */ agnosticComponentsStrategized as agnosticComponentsStrategizedAliasExtension,
} from "@/tests/directive21/imported/typescript/agnostic-strategies.tsx";
// Via baseUrl.
import {
  /* @agnosticComponents */ agnosticComponentsStrategized as agnosticComponentsStrategizedBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies";
import {
  /* @agnosticComponents */ agnosticComponentsStrategized as agnosticComponentsStrategizedBaseUrlExtension,
} from "tests/directive21/imported/typescript/agnostic-strategies.tsx";

// ...Importing Lineal Agnostic Components via Special Agnostic Strategy by a folder.
import {
  /* @agnosticComponents */ agnosticComponentsStrategized as agnosticComponentsStrategizedFolder,
} from "../../../../../imported/typescript/agnostic-strategies-tsx";
// Via alias.
import {
  /* @agnosticComponents */ agnosticComponentsStrategized as agnosticComponentsStrategizedFolderAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies-tsx";
// Via baseUrl.
import {
  /* @agnosticComponents */ agnosticComponentsStrategized as agnosticComponentsStrategizedFolderBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies-tsx";

// Invalid.
// Lineal Agnostic Components aren't allowed because (Special) Server Functions have no business working with React Components.
