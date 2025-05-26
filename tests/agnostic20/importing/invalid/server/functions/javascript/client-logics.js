"use server";
// That's a Server Functions Module.

// ...Importing a Client Logics Module.
import clientLogics from "../../../../../imported/javascript/client.js";

// Invalid.
// Client logic should never leak to the server.
