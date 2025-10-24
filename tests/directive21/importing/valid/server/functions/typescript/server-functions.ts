// "use server functions"

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
  /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#ATSTRATEGY */ serverFunctionsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#ATSTRATEGY */ serverFunctionsStrategized as serverFunctionsStrategizedExtension,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";
// $COMMENT#TESTS#VIAALIAS
import {
  /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#ATSTRATEGY */ serverFunctionsStrategized as serverFunctionsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#ATSTRATEGY */ serverFunctionsStrategized as serverFunctionsStrategizedAliasExtension,
} from "@/tests/directive21/imported/typescript/agnostic-strategies.tsx";
// $COMMENT#TESTS#VIABASEURL
import {
  /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#ATSTRATEGY */ serverFunctionsStrategized as serverFunctionsStrategizedBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#ATSTRATEGY */ serverFunctionsStrategized as serverFunctionsStrategizedBaseUrlExtension,
} from "tests/directive21/imported/typescript/agnostic-strategies.tsx";

// $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#IMPORTINGVIASTRATEGYBYAFOLDER
import {
  /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#ATSTRATEGY */ serverFunctionsStrategized as serverFunctionsStrategizedFolder,
} from "../../../../../imported/typescript/agnostic-strategies-tsx";
// $COMMENT#TESTS#VIAALIAS
import {
  /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#ATSTRATEGY */ serverFunctionsStrategized as serverFunctionsStrategizedFolderAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies-tsx";
// $COMMENT#TESTS#VIABASEURL
import {
  /* $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#ATSTRATEGY */ serverFunctionsStrategized as serverFunctionsStrategizedFolderBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies-tsx";

// $COMMENT#TESTS#VALID
// $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_SERVER_FUNCTIONS
