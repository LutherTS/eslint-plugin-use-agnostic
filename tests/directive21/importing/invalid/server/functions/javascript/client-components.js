// "use server functions"
"use server";

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

// Invalid.
// Lineal Client Components aren't allowed because (Special) Server Functions have no business working with React Components.
