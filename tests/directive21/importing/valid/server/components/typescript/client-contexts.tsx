// "use server components"

// ...Importing a Special Client Contexts Module.
import clientContexts from "../../../../../imported/typescript/client-contexts";
// Via alias.
import clientContextsAlias from "@/tests/directive21/imported/typescript/client-contexts";

// ...Importing Special Client Contexts via Special Agnostic Strategy.
import {
  /* @clientContexts */ clientContextsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// Via alias.
import {
  /* @clientContexts */ clientContextsStrategized as clientContextsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";

// Valid.
// (Special) Client Contexts Components can be nested inside Server Components to wrap some of the tree with client state accessible through child Client Components, and to pass through Server Components when the root of the application is planted on the server.
