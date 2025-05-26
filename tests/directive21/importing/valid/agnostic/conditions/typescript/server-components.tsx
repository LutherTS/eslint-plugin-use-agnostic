// "use agnostic conditions"

// ...Importing a Lineal Server Components Module.
import serverComponents from "../../../../../imported/typescript/server-components.tsx";

// ...Importing Lineal Server Components via Special Agnostic Strategy.
import {
  /* @serverComponents */ serverComponentsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";

// Valid.
// Lineal Server Components are to be paired as `ComponentForServer` components with `ComponentForClient` components to form (Special) Agnostic Conditions Components.
