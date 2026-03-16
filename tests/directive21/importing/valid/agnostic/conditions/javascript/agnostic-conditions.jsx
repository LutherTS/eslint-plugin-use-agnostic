// "use agnostic conditions"

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
// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#SPECIALSCOMMA despite not being Lineal Components themselves, output components that can only be Lineal and compatible with their attributed rendering environments, making them acceptable arguments in the making of $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#KINDSSIMPLE Components.
