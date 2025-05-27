// "use server logics"

// ...Importing a Lineal Server Components Module.
import serverComponents from "../../../../../imported/typescript/server-components";

// ...Importing Lineal Server Components via Special Agnostic Strategy.
import {
  /* @serverComponents */ serverComponentsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";

// Valid.
// Lineal Server Components are OK to be composed with Prime Server Logics as long as the Prime Server Logics Module, by convention, does not export React components.
