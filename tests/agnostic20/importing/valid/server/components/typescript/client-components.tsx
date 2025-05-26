// That's a Server Components Module.

// ...Importing a Client Components Module.
import clientComponents from "../../../../../imported/typescript/client.tsx";

// Valid.
// Client Components can be nested inside Server Components either to wrap some of the tree with client state accessible through child Client Components and pass through Server Components, or to create client boundaries when the root of the application is planted on the server.
