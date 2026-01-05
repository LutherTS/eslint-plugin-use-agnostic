// "use agnostic strategies"

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
// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#SPECIALS Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a `'use agnostic strategies'` importFileCommentedDirective.)
