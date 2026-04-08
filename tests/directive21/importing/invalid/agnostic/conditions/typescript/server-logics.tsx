// "use agnostic conditions"

// $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#IMPORTINGAMODULE
import serverLogics from "../../../../../imported/typescript/server-logics";
// $COMMENT#TESTS#WITHEXTENSION
import serverLogicsExtension from "../../../../../imported/typescript/server-logics.ts";
// $COMMENT#TESTS#VIAALIAS
import serverLogicsAlias from "@/tests/directive21/imported/typescript/server-logics";
// $COMMENT#TESTS#WITHEXTENSION
import serverLogicsAliasExtension from "@/tests/directive21/imported/typescript/server-logics.ts";
// $COMMENT#TESTS#VIABASEURL
import serverLogicsBaseUrl from "tests/directive21/imported/typescript/server-logics";
// $COMMENT#TESTS#WITHEXTENSION
import serverLogicsBaseUrlExtension from "tests/directive21/imported/typescript/server-logics.ts";

// $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#IMPORTINGBYAFOLDER
import serverLogicsFolder from "../../../../../imported/typescript/server-logics-ts";
// $COMMENT#TESTS#VIAALIAS
import serverLogicsFolderAlias from "@/tests/directive21/imported/typescript/server-logics-ts";
// $COMMENT#TESTS#VIABASEURL
import serverLogicsFolderBaseUrl from "tests/directive21/imported/typescript/server-logics-ts";

// $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#IMPORTINGVIASTRATEGY
import {
  /* @serverLogics */ serverLogicsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* @serverLogics */ serverLogicsStrategized as serverLogicsStrategizedExtension,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";
// $COMMENT#TESTS#VIAALIAS
import {
  /* @serverLogics */ serverLogicsStrategized as serverLogicsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* @serverLogics */ serverLogicsStrategized as serverLogicsStrategizedAliasExtension,
} from "@/tests/directive21/imported/typescript/agnostic-strategies.tsx";
// $COMMENT#TESTS#VIABASEURL
import {
  /* @serverLogics */ serverLogicsStrategized as serverLogicsStrategizedBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* @serverLogics */ serverLogicsStrategized as serverLogicsStrategizedBaseUrlExtension,
} from "tests/directive21/imported/typescript/agnostic-strategies.tsx";

// $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#IMPORTINGVIASTRATEGYBYAFOLDER
import {
  /* @serverLogics */ serverLogicsStrategized as serverLogicsStrategizedFolder,
} from "../../../../../imported/typescript/agnostic-strategies-tsx";
// $COMMENT#TESTS#VIAALIAS
import {
  /* @serverLogics */ serverLogicsStrategized as serverLogicsStrategizedFolderAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies-tsx";
// $COMMENT#TESTS#VIABASEURL
import {
  /* @serverLogics */ serverLogicsStrategized as serverLogicsStrategizedFolderBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies-tsx";

// $COMMENT#TESTS#INVALID
// $COMMENT#DIRECTIVE21#FORALIASVARIABLES#SERVERLOGICSCANTBOTH
