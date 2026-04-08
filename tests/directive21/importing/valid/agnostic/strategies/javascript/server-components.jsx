// "use agnostic strategies"

// $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#IMPORTINGAMODULE
import serverComponents from "../../../../../imported/javascript/server-components.jsx";

// $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#IMPORTINGBYAFOLDER
import serverComponentsFolder from "../../../../../imported/javascript/server-components-jsx";

// $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#IMPORTINGVIASTRATEGY
import {
  /* @serverComponents */ serverComponentsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#IMPORTINGVIASTRATEGYBYAFOLDER
import {
  /* @serverComponents */ serverLogicsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// $COMMENT#TESTS#VALID
// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#SPECIALS Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a `'use agnostic strategies'` importFileCommentedDirective.)
