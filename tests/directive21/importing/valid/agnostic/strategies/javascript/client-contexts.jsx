// "use agnostic strategies"

// $COMMENT#TESTS#IMPORTINGA $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#MODULEPERIOD
import clientContexts from "../../../../../imported/javascript/client-contexts.jsx";

// $COMMENT#TESTS#IMPORTINGA $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#MODULE $COMMENT#TESTS#BYFOLDER
import clientContextsFolder from "../../../../../imported/javascript/client-contexts-jsx";

// $COMMENT#TESTS#IMPORTING $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#KINDS $COMMENT#TESTS#VIASTRATEGYPERIOD
import {
  /* @clientContexts */ clientContextsStrategized,
} from "../../../../../imported/javascript/agnostic-strategies.jsx";

// $COMMENT#TESTS#IMPORTING $COMMENT#DIRECTIVE21#USE_CLIENT_CONTEXTS#KINDS $COMMENT#TESTS#VIASTRATEGY $COMMENT#TESTS#BYFOLDER
import {
  /* @clientContexts */ clientContextsStrategizedFolder,
} from "../../../../../imported/javascript/agnostic-strategies-jsx";

// $COMMENT#TESTS#VALID
// $COMMENT#DIRECTIVE21#USE_AGNOSTIC_STRATEGIES
