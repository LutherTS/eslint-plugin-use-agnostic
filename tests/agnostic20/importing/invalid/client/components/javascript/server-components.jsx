"use client";
// That's a Client Components Module.

// ...Importing a Server Components Module.
import serverComponents from "../../../../../imported/javascript/server.jsx";

// Invalid.
// Server Components may only pass through Client Components via the children prop within Server Components Modules.
