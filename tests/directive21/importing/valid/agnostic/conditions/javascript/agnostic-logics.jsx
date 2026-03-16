// "use agnostic conditions"

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#IMPORTINGAMODULE
import agnosticLogics from "../../../../../imported/javascript/agnostic-logics.js";

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#IMPORTINGBYAFOLDER
import agnosticLogicsFolder from "../../../../../imported/javascript/agnostic-logics-js";

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#IMPORTINGVIASTRATEGY
import {
  /* @agnosticLogics */ agnosticLogicsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#IMPORTINGVIASTRATEGYBYAFOLDER
import {
  /* @agnosticLogics */ agnosticLogicsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// $COMMENT#TESTS#VALID
// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_LOGICS#KINDSCOMMA $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#BEINGLOGICAGNOSTIC $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANSAFELYSUPPORT any $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#KINDSCOMMA including $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#SPECIALSPERIOD (In this case this is necessary for the import of the `conditionAgnosticComponent` function needed to make $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#KINDSSIMPLE Components.)
