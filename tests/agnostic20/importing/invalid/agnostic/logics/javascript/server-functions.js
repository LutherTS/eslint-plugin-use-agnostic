"use agnostic";
// That's an Agnostic Logics Module.

// ...Importing a Server Functions Module (with extension).
import serverFunctions from "../../../../../imported/javascript/server-functions.js";

// ...Importing a Server Functions Module by a folder.
import serverFunctionsFolder from "../../../../../imported/javascript/server-functions-js";

// Invalid.
// Server Functions can be modified on the server and on the client, but their use cases on both environments are not one-to-one compatible, since they're being addressed as they are on the server and addressed as references on the client.
