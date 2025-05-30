// "use server components"

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

// ...Importing Special Agnostic Conditions via Special Agnostic Strategy.
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

// Valid.
// (Special) Agnostic Conditions Components, as if they were Lineal Agnostic Components themselves, can render safely on the server just like they can on the client.
