// "use client logics"

// ...Importing a Lineal Client Components Module.
import clientComponents from "../../../../../imported/javascript/client-components.jsx";

// ...Importing Lineal Client Components via Special Agnostic Strategy.
import {
  /* @clientComponents */ clientComponentsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// Valid.
// Lineal Client Components, like any Client Components, are OK to be composed with Prime Client Logics as long as the Prime Client Logics Module, by convention, does not export React components.
