// "use client logics"

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGAMODULE
import agnosticComponents from "../../../../../imported/typescript/agnostic-components";
// $COMMENT#TESTS#WITHEXTENSION
import agnosticComponentsExtension from "../../../../../imported/typescript/agnostic-components.tsx";
// $COMMENT#TESTS#VIAALIAS
import agnosticComponentsAlias from "@/tests/directive21/imported/typescript/agnostic-components";
// $COMMENT#TESTS#WITHEXTENSION
import agnosticComponentsAliasExtension from "@/tests/directive21/imported/typescript/agnostic-components.tsx";
// $COMMENT#TESTS#VIABASEURL
import agnosticComponentsBaseUrl from "tests/directive21/imported/typescript/agnostic-components";
// $COMMENT#TESTS#WITHEXTENSION
import agnosticComponentsBaseUrlExtension from "tests/directive21/imported/typescript/agnostic-components.tsx";

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGBYAFOLDER
import agnosticComponentsFolder from "../../../../../imported/typescript/agnostic-components-tsx";
// $COMMENT#TESTS#VIAALIAS
import agnosticComponentsFolderAlias from "@/tests/directive21/imported/typescript/agnostic-components-tsx";
// $COMMENT#TESTS#VIABASEURL
import agnosticComponentsFolderBaseUrl from "tests/directive21/imported/typescript/agnostic-components-tsx";

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGVIASTRATEGY
import {
  /* @agnosticComponents */ agnosticComponentsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* @agnosticComponents */ agnosticComponentsStrategized as agnosticComponentsStrategizedExtension,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";
// $COMMENT#TESTS#VIAALIAS
import {
  /* @agnosticComponents */ agnosticComponentsStrategized as agnosticComponentsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";
import {
  /* @agnosticComponents */ agnosticComponentsStrategized as agnosticComponentsStrategizedAliasExtension,
} from "@/tests/directive21/imported/typescript/agnostic-strategies.tsx";
// $COMMENT#TESTS#VIABASEURL
import {
  /* @agnosticComponents */ agnosticComponentsStrategized as agnosticComponentsStrategizedBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies";
import {
  /* @agnosticComponents */ agnosticComponentsStrategized as agnosticComponentsStrategizedBaseUrlExtension,
} from "tests/directive21/imported/typescript/agnostic-strategies.tsx";

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGVIASTRATEGYBYAFOLDER
import {
  /* @agnosticComponents */ agnosticComponentsStrategized as agnosticComponentsStrategizedFolder,
} from "../../../../../imported/typescript/agnostic-strategies-tsx";
// $COMMENT#TESTS#VIAALIAS
import {
  /* @agnosticComponents */ agnosticComponentsStrategized as agnosticComponentsStrategizedFolderAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies-tsx";
// $COMMENT#TESTS#VIABASEURL
import {
  /* @agnosticComponents */ agnosticComponentsStrategized as agnosticComponentsStrategizedFolderBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies-tsx";

// $COMMENT#TESTS#VALID
// $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#USE_AGNOSTIC_COMPONENTS
