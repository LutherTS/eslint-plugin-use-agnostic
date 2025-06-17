"use client";
// That's a Client Components Module.

import serverComponents from "../../../../../imported/javascript/server.jsx";

// ...Importing a Server Components Module by a folder.
import serverComponentsFolder from "../../../../../imported/javascript/server-jsx";

// Invalid.
// Server Components may only pass through Client Components via the children prop within Server Components Modules.
