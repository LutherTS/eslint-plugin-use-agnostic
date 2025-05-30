// "use client contexts"

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
// Lineal Client Components can create client boundaries within (Special) Client Contexts Components.
