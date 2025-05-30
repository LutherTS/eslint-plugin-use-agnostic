// "use agnostic conditions"

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
// Lineal Server Components are to be paired as `ComponentForServer` components with `ComponentForClient` components to form (Special) Agnostic Conditions Components.
