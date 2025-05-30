// "use server functions"

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

// Invalid.
// Lineal Server Components aren't allowed because (Special) Server Functions have no business working with React Components.
