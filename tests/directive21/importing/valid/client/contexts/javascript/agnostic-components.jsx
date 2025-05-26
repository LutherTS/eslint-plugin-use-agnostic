// "use client contexts"

// ...Importing a Lineal Agnostic Components Module.
import agnosticComponents from "../../../../../imported/javascript/agnostic-components.jsx";

// ...Importing Lineal Agnostic Components via Special Agnostic Strategy.
import {
  /* @agnosticComponents */ agnosticComponentsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// Valid.
// Lineal Agnostic Components can render safely on the client just like they can on the server.
