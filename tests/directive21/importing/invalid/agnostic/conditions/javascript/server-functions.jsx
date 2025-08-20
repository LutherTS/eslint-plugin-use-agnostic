// "use agnostic conditions"

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

// $COMMENT#TESTS#INVALID
// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_CONDITIONS#USE_SERVER_FUNCTIONS
