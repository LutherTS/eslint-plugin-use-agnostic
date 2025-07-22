// "use server components"

// $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#IMPORTINGAMODULE
import clientLogics from "../../../../../imported/typescript/client-logics";
// $COMMENT#TESTS#WITHEXTENSION
import clientLogicsExtension from "../../../../../imported/typescript/client-logics.ts";
// $COMMENT#TESTS#VIAALIAS
import clientLogicsAlias from "@/tests/directive21/imported/typescript/client-logics";
// $COMMENT#TESTS#WITHEXTENSION
import clientLogicsAliasExtension from "@/tests/directive21/imported/typescript/client-logics.ts";
// $COMMENT#TESTS#VIABASEURL
import clientLogicsBaseUrl from "tests/directive21/imported/typescript/client-logics";
// $COMMENT#TESTS#WITHEXTENSION
import clientLogicsBaseUrlExtension from "tests/directive21/imported/typescript/client-logics.ts";

// $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#IMPORTINGBYAFOLDER
import clientLogicsFolder from "../../../../../imported/typescript/client-logics-ts";
// $COMMENT#TESTS#VIAALIAS
import clientLogicsFolderAlias from "@/tests/directive21/imported/typescript/client-logics-ts";
// $COMMENT#TESTS#VIABASEURL
import clientLogicsFolderBaseUrl from "tests/directive21/imported/typescript/client-logics-ts";

// $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#IMPORTINGVIASTRATEGY
import {
  /* @clientLogics */ clientLogicsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* @clientLogics */ clientLogicsStrategized as clientLogicsStrategizedExtension,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";
// $COMMENT#TESTS#VIAALIAS
import {
  /* @clientLogics */ clientLogicsStrategized as clientLogicsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* @clientLogics */ clientLogicsStrategized as clientLogicsStrategizedAliasExtension,
} from "@/tests/directive21/imported/typescript/agnostic-strategies.tsx";
// $COMMENT#TESTS#VIABASEURL
import {
  /* @clientLogics */ clientLogicsStrategized as clientLogicsStrategizedBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* @clientLogics */ clientLogicsStrategized as clientLogicsStrategizedBaseUrlExtension,
} from "tests/directive21/imported/typescript/agnostic-strategies.tsx";

// $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#IMPORTINGVIASTRATEGYBYAFOLDER
import {
  /* @clientLogics */ clientLogicsStrategized as clientLogicsStrategizedFolder,
} from "../../../../../imported/typescript/agnostic-strategies-tsx";
// $COMMENT#TESTS#VIAALIAS
import {
  /* @clientLogics */ clientLogicsStrategized as clientLogicsStrategizedFolderAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies-tsx";
// $COMMENT#TESTS#VIABASEURL
import {
  /* @clientLogics */ clientLogicsStrategized as clientLogicsStrategizedFolderBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies-tsx";

// $COMMENT#TESTS#INVALID
// $COMMENT#DIRECTIVE21#FORALIASVARIABLES#CLIENTNEVERSERVER
