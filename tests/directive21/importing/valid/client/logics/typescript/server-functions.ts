// "use client logics"

// $COMMENT#TESTS#IMPORTINGA $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#MODULEPERIOD
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

// $COMMENT#TESTS#IMPORTINGA $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#MODULE $COMMENT#TESTS#BYFOLDER
import serverFunctionsFolder from "../../../../../imported/typescript/server-functions-ts";
// $COMMENT#TESTS#VIAALIAS
import serverFunctionsFolderAlias from "@/tests/directive21/imported/typescript/server-functions-ts";
// $COMMENT#TESTS#VIABASEURL
import serverFunctionsFolderBaseUrl from "tests/directive21/imported/typescript/server-functions-ts";

// $COMMENT#TESTS#IMPORTING $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#KINDS $COMMENT#TESTS#VIASTRATEGYPERIOD
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

// $COMMENT#TESTS#IMPORTING $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#KINDS $COMMENT#TESTS#VIASTRATEGY $COMMENT#TESTS#BYFOLDER
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

// $COMMENT#TESTS#VALID
// $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#USE_SERVER_FUNCTIONS
