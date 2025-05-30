// "use agnostic components"

// ...Importing a Prime Agnostic Logics Module.
import agnosticLogics from "../../../../../imported/typescript/agnostic-logics";
// with extension
import agnosticLogicsExtension from "../../../../../imported/typescript/agnostic-logics.ts";
// Via alias.
import agnosticLogicsAlias from "@/tests/directive21/imported/typescript/agnostic-logics";
// with extension
import agnosticLogicsAliasExtension from "@/tests/directive21/imported/typescript/agnostic-logics.ts";

// ...Importing Prime Agnostic Logics via Special Agnostic Strategy.
import {
  /* @agnosticLogics */ agnosticLogicsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// with extension
import {
  /* @agnosticLogics */ agnosticLogicsStrategized as agnosticLogicsStrategizedExtension,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";
// Via alias.
import {
  /* @agnosticLogics */ agnosticLogicsStrategized as agnosticLogicsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";
// with extension
import {
  /* @agnosticLogics */ agnosticLogicsStrategized as agnosticLogicsStrategizedAliasExtension,
} from "@/tests/directive21/imported/typescript/agnostic-strategies.tsx";

// Valid.
// Prime Agnostic Logics, being environment-agnostic logic, can safely support Agnostic Components.
