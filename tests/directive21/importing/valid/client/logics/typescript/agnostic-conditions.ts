// "use client logics"
"use client";

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#IMPORTINGAMODULE
import agnosticConditions from "../../../../../imported/typescript/agnostic-conditions";
// $COMMENT#TESTS#WITHEXTENSION
import agnosticConditionsExtension from "../../../../../imported/typescript/agnostic-conditions.tsx";
// $COMMENT#TESTS#VIAALIAS
import agnosticConditionsAlias from "@/tests/directive21/imported/typescript/agnostic-conditions";
// $COMMENT#TESTS#WITHEXTENSION
import agnosticConditionsAliasExtension from "@/tests/directive21/imported/typescript/agnostic-conditions.tsx";
// $COMMENT#TESTS#VIABASEURL
import agnosticConditionsBaseUrl from "tests/directive21/imported/typescript/agnostic-conditions";
// $COMMENT#TESTS#WITHEXTENSION
import agnosticConditionsBaseUrlExtension from "tests/directive21/imported/typescript/agnostic-conditions.tsx";

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#IMPORTINGBYAFOLDER
import agnosticConditionsFolder from "../../../../../imported/typescript/agnostic-conditions-tsx";
// $COMMENT#TESTS#VIAALIAS
import agnosticConditionsFolderAlias from "@/tests/directive21/imported/typescript/agnostic-conditions-tsx";
// $COMMENT#TESTS#VIABASEURL
import agnosticConditionsFolderBaseUrl from "tests/directive21/imported/typescript/agnostic-conditions-tsx";

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#IMPORTINGVIASTRATEGY
import {
  /* @agnosticConditions */ agnosticConditionsStrategized,
} from "../../../../../imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* @agnosticConditions */ agnosticConditionsStrategized as agnosticConditionsStrategizedExtension,
} from "../../../../../imported/typescript/agnostic-strategies.tsx";
// $COMMENT#TESTS#VIAALIAS
import {
  /* @agnosticConditions */ agnosticConditionsStrategized as agnosticConditionsStrategizedAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* @agnosticConditions */ agnosticConditionsStrategized as agnosticConditionsStrategizedAliasExtension,
} from "@/tests/directive21/imported/typescript/agnostic-strategies.tsx";
// $COMMENT#TESTS#VIABASEURL
import {
  /* @agnosticConditions */ agnosticConditionsStrategized as agnosticConditionsStrategizedBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies";
// $COMMENT#TESTS#WITHEXTENSION
import {
  /* @agnosticConditions */ agnosticConditionsStrategized as agnosticConditionsStrategizedBaseUrlExtension,
} from "tests/directive21/imported/typescript/agnostic-strategies.tsx";

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#IMPORTINGVIASTRATEGYBYAFOLDER
import {
  /* @agnosticConditions */ agnosticConditionsStrategized as agnosticConditionsStrategizedFolder,
} from "../../../../../imported/typescript/agnostic-strategies-tsx";
// $COMMENT#TESTS#VIAALIAS
import {
  /* @agnosticConditions */ agnosticConditionsStrategized as agnosticConditionsStrategizedFolderAlias,
} from "@/tests/directive21/imported/typescript/agnostic-strategies-tsx";
// $COMMENT#TESTS#VIABASEURL
import {
  /* @agnosticConditions */ agnosticConditionsStrategized as agnosticConditionsStrategizedFolderBaseUrl,
} from "tests/directive21/imported/typescript/agnostic-strategies-tsx";

// $COMMENT#TESTS#VALID
// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#SPECIALS are able to safely render on the client, guaranteeing that only their `ComponentForClient` will be effectively involved in $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#KINDS Modules.
