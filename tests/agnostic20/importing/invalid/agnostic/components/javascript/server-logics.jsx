"use agnostic";
// That's an Agnostic Components Module.

// ...Importing a Server Logics Module (with extension).
import serverLogics from "../../../../../imported/javascript/server.js";

// ...Importing a Server Logics Module by a folder.
import serverLogicsFolder from "../../../../../imported/javascript/server-js";

// Invalid.
// Server Logics cannot run on both the server and the client, such as would be the case here in an Agnostic Components Module.
