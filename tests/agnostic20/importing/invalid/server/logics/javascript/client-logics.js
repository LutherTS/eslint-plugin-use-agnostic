// That's a Server Logics Module.

// ...Importing a Client Logics Module (with extension).
import clientLogics from "../../../../../imported/javascript/client.js";

// ...Importing a Client Logics Module by a folder.
import clientLogicsFolder from "../../../../../imported/javascript/client-js";

// Invalid.
// Client Logics should never leak to the server, such as  would be the case here in a Server Logics Module.
