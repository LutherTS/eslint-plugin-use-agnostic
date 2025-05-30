// "use client logics"

// ...Importing a Lineal Agnostic Components Module.
import agnosticComponents from "../../../../../imported/typescript/agnostic-components";
// with extension
import agnosticComponentsExtension from "../../../../../imported/typescript/agnostic-components.tsx";
// Via alias.
import agnosticComponentsAlias from "@/tests/directive21/imported/typescript/agnostic-components";
// with extension
import agnosticComponentsAliasExtension from "@/tests/directive21/imported/typescript/agnostic-components.tsx";

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

// Valid.
// Lineal Agnostic Components can be composed with any Prime Environment Logics agnostically as long as the Prime Environment Logics Module, by convention, does not export React components.
