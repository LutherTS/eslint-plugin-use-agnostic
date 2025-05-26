"use client";
// That's a Client Logics Module.

// ...Importing a Server Logics Module.
import serverLogics from "../../../../../imported/typescript/server.ts";

// Invalid.
// Server logic should never leak to the client.
