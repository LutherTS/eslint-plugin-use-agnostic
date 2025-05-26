// "use client contexts"

// ...Importing a Lineal Client Components Module.
import clientComponents from "../../../../../imported/typescript/client-components.tsx";

// ...Importing Lineal Client Components via Special Agnostic Strategy.
import {
  /* @clientComponents */ clientComponentsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";

// Valid.
// Lineal Client Components can create client boundaries within (Special) Client Contexts Components.
