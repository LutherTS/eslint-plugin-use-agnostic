"use agnostic";
// That's an Agnostic Components Module.

// ...Importing a Server Components Module.
import serverComponents from "../../../../../imported/javascript/server.jsx";

// Invalid.
// Server Components, unlike Client Components, cannot make silos of their own once on the opposing environment (the client in this case), and therefore cannot be executed from the client, making them unable to execute agnostically from both the server and the client.
