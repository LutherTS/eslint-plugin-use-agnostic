// "use agnostic conditions"

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
// Lineal Server Components are to be paired as `ComponentForServer` components with `ComponentForClient` components to form (Special) Agnostic Conditions Components.
