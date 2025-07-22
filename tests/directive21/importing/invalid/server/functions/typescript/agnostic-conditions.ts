// "use server functions"

// ...Importing a Special Agnostic Conditions Module.
import agnosticConditions from "../../../../../imported/typescript/agnostic-conditions";
// with extension
import agnosticConditionsExtension from "../../../../../imported/typescript/agnostic-conditions.tsx";
// Via alias.
import agnosticConditionsAlias from "@/tests/directive21/imported/typescript/agnostic-conditions";
// with extension
import agnosticConditionsAliasExtension from "@/tests/directive21/imported/typescript/agnostic-conditions.tsx";
// Via baseUrl.
import agnosticConditionsBaseUrl from "tests/directive21/imported/typescript/agnostic-conditions";
// with extension
import agnosticConditionsBaseUrlExtension from "tests/directive21/imported/typescript/agnostic-conditions.tsx";

// ...Importing a Special Agnostic Conditions Module by a folder.
import agnosticConditionsFolder from "../../../../../imported/typescript/agnostic-conditions-tsx";
// Via alias.
import agnosticConditionsFolderAlias from "@/tests/directive21/imported/typescript/agnostic-conditions-tsx";
// Via baseUrl.
import agnosticConditionsFolderBaseUrl from "tests/directive21/imported/typescript/agnostic-conditions-tsx";

// ...Importing (Special) Agnostic Conditions Components via Special Agnostic Strategy.
import {
  /* @agnosticConditions */ agnosticConditionsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// with extension
import {
  /* @agnosticConditions */ agnosticConditionsStrategized as agnosticConditionsStrategizedExtension,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";
// Via alias.
import {
  /* @agnosticConditions */ agnosticConditionsStrategized as agnosticConditionsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";
// with extension
import {
  /* @agnosticConditions */ agnosticConditionsStrategized as agnosticConditionsStrategizedAliasExtension,
} from "@/tests/directive21/imported/typescript/agnostic-strategies.tsx";
// Via baseUrl.
import {
  /* @agnosticConditions */ agnosticConditionsStrategized as agnosticConditionsStrategizedBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies";
// with extension
import {
  /* @agnosticConditions */ agnosticConditionsStrategized as agnosticConditionsStrategizedBaseUrlExtension,
} from "tests/directive21/imported/typescript/agnostic-strategies.tsx";

// ...Importing (Special) Agnostic Conditions Components via Special Agnostic Strategy by a folder.
import {
  /* @agnosticConditions */ agnosticConditionsStrategized as agnosticConditionsStrategizedFolder,
} from "../../../../../imported/typescript/agnostic-strategies-tsx";
// Via alias.
import {
  /* @agnosticConditions */ agnosticConditionsStrategized as agnosticConditionsStrategizedFolderAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies-tsx";
// Via baseUrl.
import {
  /* @agnosticConditions */ agnosticConditionsStrategized as agnosticConditionsStrategizedFolderBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies-tsx";

// Invalid.
// (Special) Agnostic Conditions Components aren't allowed because (Special) Server Functions have no business working with React Components.
