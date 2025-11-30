// "use client components"

// $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#IMPORTINGAMODULE
import serverComponents from "../../../../../imported/typescript/server-components";
// $COMMENT#TESTS#WITHEXTENSION
import serverComponentsExtension from "../../../../../imported/typescript/server-components.tsx";
// $COMMENT#TESTS#VIAALIAS
import serverComponentsAlias from "@/tests/directive21/imported/typescript/server-components";
// $COMMENT#TESTS#WITHEXTENSION
import serverComponentsAliasExtension from "@/tests/directive21/imported/typescript/server-components.tsx";
// $COMMENT#TESTS#VIABASEURL
import serverComponentsBaseUrl from "tests/directive21/imported/typescript/server-components";
// $COMMENT#TESTS#WITHEXTENSION
import serverComponentsBaseUrlExtension from "tests/directive21/imported/typescript/server-components.tsx";

// $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#IMPORTINGBYAFOLDER
import serverComponentsFolder from "../../../../../imported/typescript/server-components-tsx";
// $COMMENT#TESTS#VIAALIAS
import serverComponentsFolderAlias from "@/tests/directive21/imported/typescript/server-components-tsx";
// $COMMENT#TESTS#VIABASEURL
import serverComponentsFolderBaseUrl from "tests/directive21/imported/typescript/server-components-tsx";

// $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#IMPORTINGVIASTRATEGY
import {
  /* @serverComponents */ serverComponentsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* @serverComponents */ serverComponentsStrategized as serverComponentsStrategizedExtension,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";
// $COMMENT#TESTS#VIAALIAS
import {
  /* @serverComponents */ serverComponentsStrategized as serverComponentsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* @serverComponents */ serverComponentsStrategized as serverComponentsStrategizedAliasExtension,
} from "@/tests/directive21/imported/typescript/agnostic-strategies.tsx";
// $COMMENT#TESTS#VIABASEURL
import {
  /* @serverComponents */ serverComponentsStrategized as serverComponentsStrategizedBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* @serverComponents */ serverComponentsStrategized as serverComponentsStrategizedBaseUrlExtension,
} from "tests/directive21/imported/typescript/agnostic-strategies.tsx";

// $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#IMPORTINGVIASTRATEGYBYAFOLDER
import {
  /* @serverComponents */ serverComponentsStrategized as serverComponentsStrategizedFolder,
} from "../../../../../imported/typescript/agnostic-strategies-tsx";
// $COMMENT#TESTS#VIAALIAS
import {
  /* @serverComponents */ serverComponentsStrategized as serverComponentsStrategizedFolderAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies-tsx";
// $COMMENT#TESTS#VIABASEURL
import {
  /* @serverComponents */ serverComponentsStrategized as serverComponentsStrategizedFolderBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies-tsx";

// $COMMENT#TESTS#INVALID
// $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#USE_SERVER_COMPONENTS
