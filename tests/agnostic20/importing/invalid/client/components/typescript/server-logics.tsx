"use client";
// That's a Client Components Module.

// ...Importing a Server Logics Module.
import serverLogics from "../../../../../imported/typescript/server.ts";

// Invalid.
// Server logic should never leak to the client.
