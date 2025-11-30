// "use server components"

// $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#IMPORTINGAMODULE
import clientContexts from "../../../../../imported/typescript/client-contexts";
// $COMMENT#TESTS#WITHEXTENSION
import clientContextsExtension from "../../../../../imported/typescript/client-contexts.tsx";
// $COMMENT#TESTS#VIAALIAS
import clientContextsAlias from "@/tests/directive21/imported/typescript/client-contexts";
// $COMMENT#TESTS#WITHEXTENSION
import clientContextsAliasExtension from "@/tests/directive21/imported/typescript/client-contexts.tsx";
// $COMMENT#TESTS#VIABASEURL
import clientContextsBaseUrl from "tests/directive21/imported/typescript/client-contexts";
// $COMMENT#TESTS#WITHEXTENSION
import clientContextsBaseUrlExtension from "tests/directive21/imported/typescript/client-contexts.tsx";

// $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#IMPORTINGBYAFOLDER
import clientContextsFolder from "../../../../../imported/typescript/client-contexts-tsx";
// $COMMENT#TESTS#VIAALIAS
import clientContextsFolderAlias from "@/tests/directive21/imported/typescript/client-contexts-tsx";
// $COMMENT#TESTS#VIABASEURL
import clientContextsFolderBaseUrl from "tests/directive21/imported/typescript/client-contexts-tsx";

// $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#IMPORTINGVIASTRATEGY
import {
  /* @clientContexts */ clientContextsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* @clientContexts */ clientContextsStrategized as clientContextsStrategizedExtension,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";
// $COMMENT#TESTS#VIAALIAS
import {
  /* @clientContexts */ clientContextsStrategized as clientContextsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* @clientContexts */ clientContextsStrategized as clientContextsStrategizedAliasExtension,
} from "@/tests/directive21/imported/typescript/agnostic-strategies.tsx";
// $COMMENT#TESTS#VIABASEURL
import {
  /* @clientContexts */ clientContextsStrategized as clientContextsStrategizedBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* @clientContexts */ clientContextsStrategized as clientContextsStrategizedBaseUrlExtension,
} from "tests/directive21/imported/typescript/agnostic-strategies.tsx";

// $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#IMPORTINGVIASTRATEGYBYAFOLDER
import {
  /* @clientContexts */ clientContextsStrategized as clientContextsStrategizedFolder,
} from "../../../../../imported/typescript/agnostic-strategies-tsx";
// $COMMENT#TESTS#VIAALIAS
import {
  /* @clientContexts */ clientContextsStrategized as clientContextsStrategizedFolderAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies-tsx";
// $COMMENT#TESTS#VIABASEURL
import {
  /* @clientContexts */ clientContextsStrategized as clientContextsStrategizedFolderBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies-tsx";

// $COMMENT#TESTS#VALID
// $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#USE_CLIENT_CONTEXTS
