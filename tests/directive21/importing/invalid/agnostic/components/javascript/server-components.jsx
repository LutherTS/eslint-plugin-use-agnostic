// "use agnostic components"

// $COMMENT#TESTS#IMPORTINGA $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#MODULEPERIOD
import serverComponents from "../../../../../imported/javascript/server-components.jsx";

// $COMMENT#TESTS#IMPORTINGA $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#MODULE $COMMENT#TESTS#BYFOLDER
import serverComponentsFolder from "../../../../../imported/javascript/server-components-jsx";

// $COMMENT#TESTS#IMPORTING $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#KINDS $COMMENT#TESTS#VIASTRATEGYPERIOD
import {
  /* @serverComponents */ serverComponentsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// $COMMENT#TESTS#IMPORTING $COMMENT#DIRECTIVE21#USE_SERVER_COMPONENTS#KINDS $COMMENT#TESTS#VIASTRATEGY $COMMENT#TESTS#BYFOLDER
import {
  /* @serverComponents */ serverLogicsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// $COMMENT#TESTS#INVALID
// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_COMPONENTS#USE_SERVER_COMPONENTS
