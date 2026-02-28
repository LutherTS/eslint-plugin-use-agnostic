// "use agnostic strategies"

// $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGAMODULE
import clientComponents from "../../../../../imported/javascript/client-components.jsx";

// $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGBYAFOLDER
import clientComponentsFolder from "../../../../../imported/javascript/client-components-jsx";

// $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGVIASTRATEGY
import {
  /* @clientComponents */ clientComponentsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#IMPORTINGVIASTRATEGYBYAFOLDER
import {
  /* @clientComponents */ clientLogicsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// $COMMENT#TESTS#VALID
// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#SPECIALS Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a `'use agnostic strategies'` importFileCommentedDirective.)
