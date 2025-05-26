// "use agnostic logics"

// ...Importing a Lineal Server Components Module.
import serverComponents from "../../../../../imported/typescript/server-components.tsx";

// ...Importing Lineal Server Components via Special Agnostic Strategy.
import {
  /* @serverComponents */ serverComponentsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";

// Invalid.
// Lineal Server Components cannot be tinkered with on both the server and the client.
