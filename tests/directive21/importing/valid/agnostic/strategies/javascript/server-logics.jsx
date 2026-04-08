// "use agnostic strategies"

// $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#IMPORTINGAMODULE
import serverLogics from "../../../../../imported/javascript/server-logics.js";

// $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#IMPORTINGBYAFOLDER
import serverLogicsFolder from "../../../../../imported/javascript/server-logics-js";

// $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#IMPORTINGVIASTRATEGY
import {
  /* @serverLogics */ serverLogicsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#IMPORTINGVIASTRATEGYBYAFOLDER
import {
  /* @serverLogics */ serverLogicsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// $COMMENT#TESTS#VALID
// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#SPECIALS Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a `'use agnostic strategies'` importFileCommentedDirective.)
