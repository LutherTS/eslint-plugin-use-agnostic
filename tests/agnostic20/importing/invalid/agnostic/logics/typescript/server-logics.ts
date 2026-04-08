"use agnostic";
// $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#THATSAMODULE

// $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#IMPORTINGWITHEXTENSION
import serverLogics from "../../../../../imported/typescript/server.ts";
// $COMMENT#TESTS#VIAALIAS
import serverLogicsAlias from "@/tests/agnostic20/imported/typescript/server.ts";
// $COMMENT#TESTS#VIABASEURL
import serverLogicsBaseUrl from "tests/agnostic20/imported/typescript/server.ts";

// $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#IMPORTINGBYAFOLDER
import serverLogicsFolder from "../../../../../imported/typescript/server-ts";
// $COMMENT#TESTS#VIAALIAS
import serverLogicsFolderAlias from "@/tests/agnostic20/imported/typescript/server-ts";
// $COMMENT#TESTS#VIABASEURL
import serverLogicsFolderBaseUrl from "tests/agnostic20/imported/typescript/server-ts";

// $COMMENT#TESTS#INVALID
// $COMMENT#AGNOSTIC20#FORALIASVARIABLES#SERVERLOGICSCANTBOTH
