"use agnostic";
// $COMMENT#TESTS#THATSAN $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#MODULEPERIOD

// $COMMENT#TESTS#IMPORTINGA $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#MODULE $COMMENT#TESTS#WITHEXTENSIONPARENTHESES
import serverLogics from "../../../../../imported/typescript/server.ts";
// $COMMENT#TESTS#VIAALIAS
import serverLogicsAlias from "@/tests/agnostic20/imported/typescript/server.ts";
// $COMMENT#TESTS#VIABASEURL
import serverLogicsBaseUrl from "tests/agnostic20/imported/typescript/server.ts";

// $COMMENT#TESTS#IMPORTINGA $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#MODULE $COMMENT#TESTS#BYFOLDER
import serverLogicsFolder from "../../../../../imported/typescript/server-ts";
// $COMMENT#TESTS#VIAALIAS
import serverLogicsFolderAlias from "@/tests/agnostic20/imported/typescript/server-ts";
// $COMMENT#TESTS#VIABASEURL
import serverLogicsFolderBaseUrl from "tests/agnostic20/imported/typescript/server-ts";

// $COMMENT#TESTS#INVALID
// $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_SERVER_LOGICS
