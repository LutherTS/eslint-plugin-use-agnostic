// "use client logics"

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
// (Special) Client Contexts Components, like any Client Components, are OK to be composed with Prime Client Logics as long as the Prime Client Logics Module, by convention, does not export React components.
