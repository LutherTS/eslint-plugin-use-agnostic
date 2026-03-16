// "use server components"

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
// $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#USE_CLIENT_COMPONENTS
