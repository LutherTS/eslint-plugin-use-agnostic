"use agnostic";
// That's an Agnostic Logics Module.

// ...Importing a Server Functions Module.
import serverFunctions from "../../../../../imported/typescript/server-functions.ts";

// Invalid.
// Server Functions can be modified on the server and on the client, but their use cases on both environments are not one-to-one compatible, since they're being addressed as they are on the server and addressed as references on the client.
