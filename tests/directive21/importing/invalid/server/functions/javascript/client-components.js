// "use server functions"
"use server";

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

// $COMMENT#TESTS#INVALID
// $COMMENT#DIRECTIVE21#USE_SERVER_FUNCTIONS#USE_CLIENT_COMPONENTS
