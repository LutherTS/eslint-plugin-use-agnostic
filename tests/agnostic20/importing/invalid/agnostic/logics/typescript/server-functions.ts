"use agnostic";
// $COMMENT#TESTS#THATSAN $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#MODULEPERIOD

// $COMMENT#TESTS#IMPORTINGA $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#MODULE $COMMENT#TESTS#WITHEXTENSIONPARENTHESES
import serverFunctions from "../../../../../imported/typescript/server-functions.ts";
// $COMMENT#TESTS#VIAALIAS
import serverFunctionsAlias from "@/tests/agnostic20/imported/typescript/server-functions.ts";
// $COMMENT#TESTS#VIABASEURL
import serverFunctionsBaseUrl from "tests/agnostic20/imported/typescript/server-functions.ts";

// $COMMENT#TESTS#IMPORTINGA $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#MODULE $COMMENT#TESTS#BYFOLDER
import serverFunctionsFolder from "../../../../../imported/typescript/server-functions-ts";
// $COMMENT#TESTS#VIAALIAS
import serverFunctionsFolderAlias from "@/tests/agnostic20/imported/typescript/server-functions-ts";
// $COMMENT#TESTS#VIABASEURL
import serverFunctionsFolderBaseUrl from "tests/agnostic20/imported/typescript/server-functions-ts";

// $COMMENT#TESTS#INVALID
// $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_SERVER_FUNCTIONS
