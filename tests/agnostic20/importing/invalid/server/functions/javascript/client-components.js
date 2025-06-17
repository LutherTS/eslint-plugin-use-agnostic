"use server";
// That's a Server Functions Module.

// ...Importing a Client Components Module (with extension).
import clientComponents from "../../../../../imported/javascript/client.jsx";

// ...Importing a Client Components Module by a folder.
import clientComponentsFolder from "../../../../../imported/javascript/client-jsx";

// Invalid.
// Client Components aren't allowed because Server Functions have no business working with React Components.
