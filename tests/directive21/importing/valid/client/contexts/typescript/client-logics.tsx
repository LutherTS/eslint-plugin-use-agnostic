// "use client contexts"

// ...Importing a Prime Client Logics Module.
import clientLogics from "../../../../../imported/typescript/client-logics";

// ...Importing Prime Client Logics via Special Agnostic Strategy.
import {
  /* @clientLogics */ clientLogicsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";

// Valid.
// Prime Client Logics, being logic from the client, can safely support (Special) Client Contexts Components, like any Client Components.
