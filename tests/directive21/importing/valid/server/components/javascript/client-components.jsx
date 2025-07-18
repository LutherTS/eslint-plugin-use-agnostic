// "use server components"

// $COMMENT#TESTS#IMPORTINGA $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#MODULEPERIOD
import clientComponents from "../../../../../imported/javascript/client-components.jsx";

// $COMMENT#TESTS#IMPORTINGA $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#MODULE $COMMENT#TESTS#BYFOLDER
import clientComponentsFolder from "../../../../../imported/javascript/client-components-jsx";

// $COMMENT#TESTS#IMPORTING $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#KINDS $COMMENT#TESTS#VIASTRATEGYPERIOD
import {
  /* @clientComponents */ clientComponentsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// $COMMENT#TESTS#IMPORTING $COMMENT#DIRECTIVE21#USE_CLIENT_COMPONENTS#KINDS $COMMENT#TESTS#VIASTRATEGY $COMMENT#TESTS#BYFOLDER
import {
  /* @clientComponents */ clientLogicsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// $COMMENT#TESTS#VALID
// $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#USE_CLIENT_COMPONENTS
