"use server";
// $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#THATSAMODULE

// $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#IMPORTINGWITHEXTENSION
import serverComponents from "../../../../../imported/typescript/server.tsx";
// $COMMENT#TESTS#VIAALIAS
import serverComponentsAlias from "@/tests/agnostic20/imported/typescript/server.tsx";
// $COMMENT#TESTS#VIABASEURL
import serverComponentsBaseUrl from "tests/agnostic20/imported/typescript/server.tsx";

// $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#IMPORTINGBYAFOLDER
import serverComponentsFolder from "../../../../../imported/typescript/server-tsx";
// $COMMENT#TESTS#VIAALIAS
import serverComponentsFolderAlias from "@/tests/agnostic20/imported/typescript/server-tsx";
// $COMMENT#TESTS#VIABASEURL
import serverComponentsFolderBaseUrl from "tests/agnostic20/imported/typescript/server-tsx";

// $COMMENT#TESTS#INVALID
// $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_SERVER_COMPONENTS
