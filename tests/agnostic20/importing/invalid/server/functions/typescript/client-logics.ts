"use server";
// That's a Server Functions Module.

// ...Importing a Client Logics Module.
import clientLogics from "../../../../../imported/typescript/client.ts";

// Invalid.
// Client Logics should never leak to the server.
