// "use client components"

// ...Importing a Lineal Agnostic Components Module.
import agnosticComponents from "../../../../../imported/typescript/agnostic-components";
// Via alias.
import agnosticComponentsAlias from "@/tests/directive21/imported/typescript/agnostic-components";

// ...Importing Lineal Agnostic Components via Special Agnostic Strategy.
import {
  /* @agnosticComponents */ agnosticComponentsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// Via alias.
import {
  /* @agnosticComponents */ agnosticComponentsStrategized as agnosticComponentsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";

// Valid.
// Lineal Agnostic Components can render safely on the client just like they can on the server.
