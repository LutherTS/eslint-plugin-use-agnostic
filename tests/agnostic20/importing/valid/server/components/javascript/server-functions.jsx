// That's a Server Components Module.

// ...Importing a Server Functions Module (with extension).
import serverFunctions from "../../../../../imported/javascript/server-functions.js";

// ...Importing a Server Functions Module by a folder.
import serverFunctionsFolder from "../../../../../imported/javascript/server-functions-js";

// Valid.
// Server Functions can be passed to imported Client Components within Server Components Modules, even though indeed Server Components Modules and Server Components can make their own Server Functions through inline 'use server' directives.
