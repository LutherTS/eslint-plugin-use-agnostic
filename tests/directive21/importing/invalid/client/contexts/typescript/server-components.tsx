// "use client contexts"

// ...Importing a Lineal Server Components Module.
import serverComponents from "../../../../../imported/typescript/server-components.tsx";

// ...Importing Lineal Server Components via Special Agnostic Strategy.
import {
  /* @serverComponents */ serverComponentsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";

// Invalid.
// Lineal Server Components may only pass through (Special) Client Contexts Components via the children prop within Server Components Modules.
