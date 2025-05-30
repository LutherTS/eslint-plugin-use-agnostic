// "use client components"

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
// (Special) Client Contexts Components can effectively become Lineal and only render their children on the client via this mechanism since, by a Client Contexts Component being the child of a Lineal Client Component, the Client Contexts Component's children become the grand-children of an ancestor Lineal Client Component, enforcing them to render exclusively on the client.
