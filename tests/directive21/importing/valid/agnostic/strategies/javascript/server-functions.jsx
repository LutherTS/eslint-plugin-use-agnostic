// "use agnostic strategies"

// $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#IMPORTINGAMODULE
import serverFunctions from "../../../../../imported/javascript/server-functions.js";

// $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#IMPORTINGBYAFOLDER
import serverFunctionsFolder from "../../../../../imported/javascript/server-functions-js";

// $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#IMPORTINGVIASTRATEGY
import {
  /* @serverFunctions */ serverFunctionsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#IMPORTINGVIASTRATEGYBYAFOLDER
import {
  /* @serverFunctions */ serverFunctionsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// $COMMENT#TESTS#VALID
// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#SPECIALS Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a `'use agnostic strategies'` importFileCommentedDirective.)
