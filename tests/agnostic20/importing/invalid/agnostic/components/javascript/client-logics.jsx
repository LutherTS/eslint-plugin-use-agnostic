"use agnostic";
// That's an Agnostic Components Module.

// ...Importing a Client Logics Module (with extension).
import clientLogics from "../../../../../imported/javascript/client.js";

// ...Importing a Client Logics Module by a folder.
import clientLogicsFolder from "../../../../../imported/javascript/client-js";

// Invalid.
// Client Logics cannot run on both the server and the client, such as would be the case here in an Agnostic Components Module.
