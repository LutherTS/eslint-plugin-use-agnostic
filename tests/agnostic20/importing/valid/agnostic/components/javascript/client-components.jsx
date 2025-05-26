"use agnostic";
// That's an Agnostic Components Module.

// ...Importing a Client Components Module.
import clientComponents from "../../../../../imported/javascript/client.jsx";

// Valid.
// Client Components can be nested inside Agnostic Components either to wrap some of the tree with client state accessible through child Client Components and pass through Server Components (if still on the Server Tree), or to create client boundaries when the root of the application is planted on the server.
