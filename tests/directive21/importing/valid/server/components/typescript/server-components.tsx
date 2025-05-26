// "use server components"

// ...Importing a Lineal Server Components Module.
import serverComponents from "../../../../../imported/typescript/server-components.tsx";

// ...Importing Lineal Server Components via Special Agnostic Strategy.
import {
  /* @serverComponents */ serverComponentsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";

// Valid.
// Lineal Server Components can compose with one another, now that thanks to the inclusion of Agnostic Components they are actual Server Components.
