// "use client logics"

// ...Importing a Lineal Client Components Module.
import clientComponents from "../../../../../imported/typescript/client-components";
// Via alias.
import clientComponentsAlias from "@/tests/directive21/imported/typescript/client-components";

// ...Importing Lineal Client Components via Special Agnostic Strategy.
import {
  /* @clientComponents */ clientComponentsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// Via alias.
import {
  /* @clientComponents */ clientComponentsStrategized as clientComponentsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";

// Valid.
// Lineal Client Components, like any Client Components, are OK to be composed with Prime Client Logics as long as the Prime Client Logics Module, by convention, does not export React components.
