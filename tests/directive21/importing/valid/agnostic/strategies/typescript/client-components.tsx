// "use agnostic strategies"

// ...Importing a Lineal Client Components Module.
import clientComponents from "../../../../../imported/typescript/client-components";
// Via alias.
import clientComponentsAlias from "@/tests/directive21/imported/typescript/client-components";

// ...Importing Lineal Client Components via Special Agnostic Strategy.
import {
  /* @clientComponents */ clientComponentsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// Via alias.
import {
  /* @clientComponents */ clientComponentsStrategized as clientComponentsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";

// Valid.
// (Special) Agnostic Strategies Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a 'use agnostic strategies' importFileCommentedDirective.)
