// "use agnostic logics"

// $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#IMPORTINGAMODULE
import clientLogics from "../../../../../imported/javascript/client-logics.js";

// $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#IMPORTINGBYAFOLDER
import clientLogicsFolder from "../../../../../imported/javascript/client-logics-js";

// $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#IMPORTINGVIASTRATEGY
import {
  /* @clientLogics */ clientLogicsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// $COMMENT#DIRECTIVE21#USE_CLIENT_LOGICS#IMPORTINGVIASTRATEGYBYAFOLDER
import {
  /* @clientLogics */ clientLogicsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// $COMMENT#TESTS#INVALID
// $COMMENT#DIRECTIVE21#FORALIASVARIABLES#CLIENTLOGICSCANTBOTH
