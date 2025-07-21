// "use agnostic strategies"

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
// (Special) Agnostic Strategies Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a 'use agnostic strategies' importFileCommentedDirective.)
