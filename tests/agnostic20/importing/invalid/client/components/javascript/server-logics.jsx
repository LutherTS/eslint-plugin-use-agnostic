"use client";
// That's a Client Components Module.

// ...Importing a Server Logics Module (with extension).
import serverLogics from "../../../../../imported/javascript/server.js";

// ...Importing a Server Logics Module by a folder.
import serverLogicsFolder from "../../../../../imported/javascript/server-js";

// Invalid.
// Server Logics should never leak to the client, such as would be the case here in a Client Components Module.
