// "use client contexts"
"use client";

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGAMODULE
import agnosticComponents from "../../../../../imported/javascript/agnostic-components.jsx";

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGBYAFOLDER
import agnosticComponentsFolder from "../../../../../imported/javascript/agnostic-components-jsx";

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGVIASTRATEGY
import {
  /* @agnosticComponents */ agnosticComponentsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGVIASTRATEGYBYAFOLDER
import {
  /* @agnosticComponents */ agnosticLogicsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// $COMMENT#TESTS#VALID
// $COMMENT#DIRECTIVE21#FORALIASVARIABLES#AGNOSTICCOMPONENTSRENDERANY
