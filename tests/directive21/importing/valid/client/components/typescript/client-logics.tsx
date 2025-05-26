// "use client components"

// ...Importing a Prime Client Logics Module.
import clientLogics from "../../../../../imported/typescript/client-logics.ts";

// ...Importing Prime Client Logics via Special Agnostic Strategy.
import {
  /* @clientLogics */ clientLogicsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";

// Valid.
// Prime Client Logics, being logic from the client, can safely support Lineal Client Components, like any Client Components.
