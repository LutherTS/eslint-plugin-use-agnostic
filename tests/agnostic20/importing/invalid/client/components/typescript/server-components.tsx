"use client";
// $COMMENT#TESTS#THATSA $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#MODULEPERIOD

// $COMMENT#TESTS#IMPORTINGA $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#MODULE $COMMENT#TESTS#WITHEXTENSIONPARENTHESES
import serverComponents from "../../../../../imported/typescript/server.tsx";
// $COMMENT#TESTS#VIAALIAS
import serverComponentsAlias from "@/tests/agnostic20/imported/typescript/server.tsx";
// $COMMENT#TESTS#VIABASEURL
import serverComponentsBaseUrl from "tests/agnostic20/imported/typescript/server.tsx";

// $COMMENT#TESTS#IMPORTINGA $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#MODULE $COMMENT#TESTS#BYFOLDER
import serverComponentsFolder from "../../../../../imported/typescript/server-tsx";
// $COMMENT#TESTS#VIAALIAS
import serverComponentsFolderAlias from "@/tests/agnostic20/imported/typescript/server-tsx";
// $COMMENT#TESTS#VIABASEURL
import serverComponentsFolderBaseUrl from "tests/agnostic20/imported/typescript/server-tsx";

// $COMMENT#TESTS#INVALID
// $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_SERVER_COMPONENTS
