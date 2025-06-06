// "use client components"

// ...Importing a Lineal Client Components Module.
import clientComponents from "../../../../../imported/javascript/client-components.jsx";

// ...Importing a Lineal Client Components Module by a folder.
import clientComponentsFolder from "../../../../../imported/javascript/client-components-jsx";

// ...Importing Lineal Client Components via Special Agnostic Strategy.
import {
  /* @clientComponents */ clientComponentsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// ...Importing Lineal Client Components via Special Agnostic Strategy by a folder.
import {
  /* @clientComponents */ clientLogicsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// Valid.
// Lineal Client Components can compose with one another.
