// "use agnostic strategies"

// $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGAMODULE
import clientComponents from "../../../../../imported/typescript/client-components";
// $COMMENT#TESTS#WITHEXTENSION
import clientComponentsExtension from "../../../../../imported/typescript/client-components.tsx";
// $COMMENT#TESTS#VIAALIAS
import clientComponentsAlias from "@/tests/directive21/imported/typescript/client-components";
// $COMMENT#TESTS#WITHEXTENSION
import clientComponentsAliasExtension from "@/tests/directive21/imported/typescript/client-components.tsx";
// $COMMENT#TESTS#VIABASEURL
import clientComponentsBaseUrl from "tests/directive21/imported/typescript/client-components";
// $COMMENT#TESTS#WITHEXTENSION
import clientComponentsBaseUrlExtension from "tests/directive21/imported/typescript/client-components.tsx";

// $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGBYAFOLDER
import clientComponentsFolder from "../../../../../imported/typescript/client-components-tsx";
// $COMMENT#TESTS#VIAALIAS
import clientComponentsFolderAlias from "@/tests/directive21/imported/typescript/client-components-tsx";
// $COMMENT#TESTS#VIABASEURL
import clientComponentsFolderBaseUrl from "tests/directive21/imported/typescript/client-components-tsx";

// $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGVIASTRATEGY
import {
  /* @clientComponents */ clientComponentsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* @clientComponents */ clientComponentsStrategized as clientComponentsStrategizedExtension,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";
// $COMMENT#TESTS#VIAALIAS
import {
  /* @clientComponents */ clientComponentsStrategized as clientComponentsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* @clientComponents */ clientComponentsStrategized as clientComponentsStrategizedAliasExtension,
} from "@/tests/directive21/imported/typescript/agnostic-strategies.tsx";
// $COMMENT#TESTS#VIABASEURL
import {
  /* @clientComponents */ clientComponentsStrategized as clientComponentsStrategizedBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* @clientComponents */ clientComponentsStrategized as clientComponentsStrategizedBaseUrlExtension,
} from "tests/directive21/imported/typescript/agnostic-strategies.tsx";

// $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGVIASTRATEGYBYAFOLDER
import {
  /* @clientComponents */ clientComponentsStrategized as clientComponentsStrategizedFolder,
} from "../../../../../imported/typescript/agnostic-strategies-tsx";
// $COMMENT#TESTS#VIAALIAS
import {
  /* @clientComponents */ clientComponentsStrategized as clientComponentsStrategizedFolderAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies-tsx";
// $COMMENT#TESTS#VIABASEURL
import {
  /* @clientComponents */ clientComponentsStrategized as clientComponentsStrategizedFolderBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies-tsx";

// $COMMENT#TESTS#VALID
// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#SPECIALS Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a `'use agnostic strategies'` importFileCommentedDirective.)
