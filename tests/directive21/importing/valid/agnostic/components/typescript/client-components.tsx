// "use agnostic components"

// ...Importing a Lineal Client Components Module.
import clientComponents from "../../../../../imported/typescript/client-components.tsx";

// ...Importing Lineal Client Components via Special Agnostic Strategy.
import {
  /* @clientComponents */ clientComponentsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";

// Valid.
// Lineal Client Components can be nested inside Agnostic Components to create client boundaries when the root of the application is planted on the server.
