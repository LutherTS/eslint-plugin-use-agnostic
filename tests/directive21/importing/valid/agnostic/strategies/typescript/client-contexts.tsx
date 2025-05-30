// "use agnostic strategies"

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
// (Special) Agnostic Strategies Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a 'use agnostic strategies' importFileCommentedDirective.)
