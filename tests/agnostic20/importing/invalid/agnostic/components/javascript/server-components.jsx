"use agnostic";
// That's an Agnostic Components Module.

// ...Importing a Server Components Module.
import serverComponents from "../../../../../imported/javascript/server.jsx";

// Invalid.
// Unlike Client Components, Server Components cannot make silos of their own once on the client, and can therefore not be executed from the client.
