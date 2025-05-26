// "use server components"

// ...Importing a Special Server Functions Module.
import serverFunctions from "../../../../../imported/javascript/server-functions.js";

// ...Importing Special Server Functions via Special Agnostic Strategy.
import {
  /* @serverFunctions */ serverFunctionsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// Valid.
// (Special) Server Functions can be passed to imported Client Components within Lineal Server Components Modules, even though indeed Lineal Server Components Modules and Lineal Server Components can make their own Server Functions through inline 'use server' directives.
