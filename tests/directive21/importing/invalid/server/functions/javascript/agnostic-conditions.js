// "use server functions"
"use server";

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#IMPORTINGAMODULE
import agnosticConditions from "../../../../../imported/javascript/agnostic-conditions.jsx";

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#IMPORTINGBYAFOLDER
import agnosticConditionsFolder from "../../../../../imported/javascript/agnostic-conditions-jsx";

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#IMPORTINGVIASTRATEGY
import {
  /* @agnosticConditions */ agnosticConditionsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#IMPORTINGVIASTRATEGYBYAFOLDER
import {
  /* @agnosticConditions */ agnosticConditionsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// $COMMENT#TESTS#INVALID
// $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_CONDITIONS
