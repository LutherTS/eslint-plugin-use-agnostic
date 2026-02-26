// "use server logics"

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

// $COMMENT#TESTS#VALID
// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#SPECIALS are able to safely render on the server, guaranteeing that only their `ComponentForServer` will be effectively involved in $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#KINDS Modules.
