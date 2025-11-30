// "use agnostic conditions"

// $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#IMPORTINGAMODULE
import serverFunctions from "../../../../../imported/typescript/server-functions";
// $COMMENT#TESTS#WITHEXTENSION
import serverFunctionsExtension from "../../../../../imported/typescript/server-functions.ts";
// $COMMENT#TESTS#VIAALIAS
import serverFunctionsAlias from "@/tests/directive21/imported/typescript/server-functions";
// $COMMENT#TESTS#WITHEXTENSION
import serverFunctionsAliasExtension from "@/tests/directive21/imported/typescript/server-functions.ts";
// $COMMENT#TESTS#VIABASEURL
import serverFunctionsBaseUrl from "tests/directive21/imported/typescript/server-functions";
// $COMMENT#TESTS#WITHEXTENSION
import serverFunctionsBaseUrlExtension from "tests/directive21/imported/typescript/server-functions.ts";

// $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#IMPORTINGBYAFOLDER
import serverFunctionsFolder from "../../../../../imported/typescript/server-functions-ts";
// $COMMENT#TESTS#VIAALIAS
import serverFunctionsFolderAlias from "@/tests/directive21/imported/typescript/server-functions-ts";
// $COMMENT#TESTS#VIABASEURL
import serverFunctionsFolderBaseUrl from "tests/directive21/imported/typescript/server-functions-ts";

// $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#IMPORTINGVIASTRATEGY
import {
  /* @serverFunctions */ serverFunctionsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* @serverFunctions */ serverFunctionsStrategized as serverFunctionsStrategizedExtension,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";
// $COMMENT#TESTS#VIAALIAS
import {
  /* @serverFunctions */ serverFunctionsStrategized as serverFunctionsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* @serverFunctions */ serverFunctionsStrategized as serverFunctionsStrategizedAliasExtension,
} from "@/tests/directive21/imported/typescript/agnostic-strategies.tsx";
// $COMMENT#TESTS#VIABASEURL
import {
  /* @serverFunctions */ serverFunctionsStrategized as serverFunctionsStrategizedBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* @serverFunctions */ serverFunctionsStrategized as serverFunctionsStrategizedBaseUrlExtension,
} from "tests/directive21/imported/typescript/agnostic-strategies.tsx";

// $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#IMPORTINGVIASTRATEGYBYAFOLDER
import {
  /* @serverFunctions */ serverFunctionsStrategized as serverFunctionsStrategizedFolder,
} from "../../../../../imported/typescript/agnostic-strategies-tsx";
// $COMMENT#TESTS#VIAALIAS
import {
  /* @serverFunctions */ serverFunctionsStrategized as serverFunctionsStrategizedFolderAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies-tsx";
// $COMMENT#TESTS#VIABASEURL
import {
  /* @serverFunctions */ serverFunctionsStrategized as serverFunctionsStrategizedFolderBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies-tsx";

// $COMMENT#TESTS#INVALID
// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_SERVER_FUNCTIONS
