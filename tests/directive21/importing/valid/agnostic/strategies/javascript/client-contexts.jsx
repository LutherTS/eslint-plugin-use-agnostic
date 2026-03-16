// "use agnostic strategies"

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

// $COMMENT#TESTS#VALID
// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#SPECIALS Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a `'use agnostic strategies'` importFileCommentedDirective.)
