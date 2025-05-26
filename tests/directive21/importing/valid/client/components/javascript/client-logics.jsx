// "use client components"

// ...Importing a Prime Client Logics Module.
import clientLogics from "../../../../../imported/javascript/client-logics.js";

// ...Importing Prime Client Logics via Special Agnostic Strategy.
import {
  /* @clientLogics */ clientLogicsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// Valid.
// Prime Client Logics, being logic from the client, can safely support Lineal Client Components, like any Client Components.
