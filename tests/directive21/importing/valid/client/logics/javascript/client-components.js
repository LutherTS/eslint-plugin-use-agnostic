// "use client logics"
"use client";

// $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGAMODULE
import clientComponents from "../../../../../imported/javascript/client-components.jsx";

// $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGBYAFOLDER
import clientComponentsFolder from "../../../../../imported/javascript/client-components-jsx";

// $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGVIASTRATEGY
import {
  /* @clientComponents */ clientComponentsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGVIASTRATEGYBYAFOLDER
import {
  /* @clientComponents */ clientLogicsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// $COMMENT#TESTS#VALID
// $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#KINDSCOMMA $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#LIKEANYCLIENTCOMPONENTSCOMMA $COMMENT#DIRECTIVE21#FORCOMPOSEDVARIABLES#OKCLIENTLOGICS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#NOEXPORTCOMPONENTS
