"use client";
// That's a Client Logics Module.

// ...Importing a Server Logics Module.
import serverLogics from "../../../../../imported/javascript/server.js";

// Invalid.
// Server logic should never leak to the client.
