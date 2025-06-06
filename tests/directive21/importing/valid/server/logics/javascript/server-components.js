// "use server logics"

// ...Importing a Lineal Server Components Module.
import serverComponents from "../../../../../imported/javascript/server-components.jsx";

// ...Importing a Lineal Server Components Module by a folder.
import serverComponentsFolder from "../../../../../imported/javascript/server-components-jsx";

// ...Importing Lineal Server Components via Special Agnostic Strategy.
import {
  /* @serverComponents */ serverComponentsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// ...Importing Lineal Server Components via Special Agnostic Strategy by a folder.
import {
  /* @serverComponents */ serverLogicsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// Valid.
// Lineal Server Components are OK to be composed with Prime Server Logics as long as the Prime Server Logics Module, by convention, does not export React components.
