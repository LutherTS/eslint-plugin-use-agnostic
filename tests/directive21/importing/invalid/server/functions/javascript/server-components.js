// "use server functions"

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

// $COMMENT#TESTS#INVALID
// $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_SERVER_COMPONENTS
