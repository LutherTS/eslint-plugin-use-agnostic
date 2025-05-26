// "use agnostic logics"

// ...Importing a Lineal Server Components Module.
import serverComponents from "../../../../../imported/javascript/server-components.jsx";

// ...Importing Lineal Server Components via Special Agnostic Strategy.
import {
  /* @serverComponents */ serverComponentsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// Invalid.
// Lineal Server Components cannot be tinkered with on both the server and the client.
