// "use agnostic strategies"

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGAMODULE
import agnosticComponents from "../../../../../imported/javascript/agnostic-components.jsx";

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGBYAFOLDER
import agnosticComponentsFolder from "../../../../../imported/javascript/agnostic-components-jsx";

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGVIASTRATEGY
import {
  /* @agnosticComponents */ agnosticComponentsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#IMPORTINGVIASTRATEGYBYAFOLDER
import {
  /* @agnosticComponents */ agnosticLogicsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// $COMMENT#TESTS#VALID
// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_STRATEGIES#SPECIALS Modules can import all known modules, except themselves since they cannot be imported as they are, only as and via Strategies. (Since Agnostic Strategies Modules cannot be imported as they are, there is no such things as a `'use agnostic strategies'` importFileCommentedDirective.)
