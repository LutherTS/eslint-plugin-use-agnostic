// "use server logics"

// $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#IMPORTINGAMODULE
import clientContexts from "../../../../../imported/javascript/client-contexts.jsx";

// $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#IMPORTINGBYAFOLDER
import clientContextsFolder from "../../../../../imported/javascript/client-contexts-jsx";

// $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#IMPORTINGVIASTRATEGY
import {
  /* @clientContexts */ clientContextsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#IMPORTINGVIASTRATEGYBYAFOLDER
import {
  /* @clientContexts */ clientContextsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// $COMMENT#TESTS#INVALID
// $COMMENT#DIRECTIVE21#USE_SERVER_LOGICS#USE_CLIENT_CONTEXTS
