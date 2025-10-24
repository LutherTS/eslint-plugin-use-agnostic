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
  /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#ATSTRATEGY */ clientComponentsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#ATSTRATEGY */ clientComponentsStrategized as clientComponentsStrategizedExtension,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";
// $COMMENT#TESTS#VIAALIAS
import {
  /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#ATSTRATEGY */ clientComponentsStrategized as clientComponentsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#ATSTRATEGY */ clientComponentsStrategized as clientComponentsStrategizedAliasExtension,
} from "@/tests/directive21/imported/typescript/agnostic-strategies.tsx";
// $COMMENT#TESTS#VIABASEURL
import {
  /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#ATSTRATEGY */ clientComponentsStrategized as clientComponentsStrategizedBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#ATSTRATEGY */ clientComponentsStrategized as clientComponentsStrategizedBaseUrlExtension,
} from "tests/directive21/imported/typescript/agnostic-strategies.tsx";

// $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGVIASTRATEGYBYAFOLDER
import {
  /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#ATSTRATEGY */ clientComponentsStrategized as clientComponentsStrategizedFolder,
} from "../../../../../imported/typescript/agnostic-strategies-tsx";
// $COMMENT#TESTS#VIAALIAS
import {
  /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#ATSTRATEGY */ clientComponentsStrategized as clientComponentsStrategizedFolderAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies-tsx";
// $COMMENT#TESTS#VIABASEURL
import {
  /* $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#ATSTRATEGY */ clientComponentsStrategized as clientComponentsStrategizedFolderBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies-tsx";

// $COMMENT#TESTS#VALID
// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#VALID
