// "use agnostic strategies"

// ...Importing a Lineal Server Components Module.
import serverComponents from "../../../../../imported/typescript/server-components";
// Via alias.
import serverComponentsAlias from "@/tests/directive21/imported/typescript/server-components";

// ...Importing Lineal Server Components via Special Agnostic Strategy.
import {
  /* @serverComponents */ serverComponentsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// Via alias.
import {
  /* @serverComponents */ serverComponentsStrategized as serverComponentsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";

// Valid.
// (Special) Agnostic Strategies Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a 'use agnostic strategies' importFileCommentedDirective.)
