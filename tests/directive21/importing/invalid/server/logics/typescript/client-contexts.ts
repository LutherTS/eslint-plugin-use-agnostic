// "use server logics"

// ...Importing a Special Client Contexts Module.
import clientContexts from "../../../../../imported/typescript/client-contexts.tsx";

// ...Importing Special Client Contexts via Special Agnostic Strategy.
import {
  /* @clientContexts */ clientContextsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";

// Invalid.
// (Special) Client Contexts Components, like any Client Components, cannot be tinkered with on the server.`
