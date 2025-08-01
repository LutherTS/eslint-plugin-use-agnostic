export const serverLogicsComments = Object.freeze({
  "use server logics":
    /* valid */ "$COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#KINDS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANCOMPOSEONEANOTHER" /* $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#USE_SERVER_LOGICS */,
  "use server components":
    /* valid */ "$COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#SERVERCOMPONENTSOKLOGICS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#NOEXPORTCOMPONENTS" /* $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#USE_SERVER_COMPONENTS */,
  "use server functions":
    /* valid */ "Server Functions, being able to import one another, can compose and do so via Server Logics, despite this method seeming superfluous at first glance. (Perhaps a preferrable use case for this has been found or could be found either today or in the future.)" /* $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#USE_SERVER_FUNCTIONS */,
  "use client logics":
    /* invalid */ "AGNOSTIC20#FORALIASVARIABLES#CLIENTNEVERSERVER" /* $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#USE_CLIENT_LOGICS */,
  "use client components":
    /* invalid */ "$COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#KINDS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTTINKEREDSERVER" /* $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#USE_CLIENT_COMPONENTS */,
  "use agnostic logics":
    /* valid */ "AGNOSTIC20#FORALIASVARIABLES#AGNOSTICCANSERVERCLIENT" /* $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#USE_AGNOSTIC_LOGICS */,
  "use agnostic components":
    /* valid */ "$COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#AGNOSTICCOMPONENTSCANSERVER $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#NOEXPORTCOMPONENTS" /* $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#USE_AGNOSTIC_COMPONENTS */,
  kinds: "Server Logics" /* $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#KINDS */,
  kindsComma:
    "Server Logics," /* $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#KINDSCOMMA */,
  kindsPeriod:
    "Server Logics." /* $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#KINDSPERIOD */,
  thatsAModule:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#THATSA $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#MODULEPERIOD" /* $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#THATSAMODULE */,
  importingWithExtension:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#WITHEXTENSIONPARENTHESES" /* $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#IMPORTINGWITHEXTENSION */,
  importingByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#IMPORTINGBYAFOLDER */,
});

export const serverComponentsComments = Object.freeze({
  "use server logics":
    /* valid */ "$COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#KINDSCOMMA $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#BEINGLOGICSERVER $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANSAFELYSUPPORT $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#KINDSPERIOD" /* $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#USE_SERVER_LOGICS */,
  "use server components":
    /* valid */ "Server Components can compose with one another, assuming thanks to the inclusion of the 'use agnostic' directive that they are actual Server Components." /* $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#USE_SERVER_COMPONENTS */,
  "use server functions":
    /* valid */ "Server Functions can be passed to imported Client Components within Server Components Modules, even though indeed Server Components Modules and Server Components can make their own Server Functions through inline `'use server'` directives." /* $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#USE_SERVER_FUNCTIONS */,
  "use client logics":
    /* invalid */ "AGNOSTIC20#FORALIASVARIABLES#CLIENTNEVERSERVER" /* $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#USE_CLIENT_LOGICS */,
  "use client components":
    /* valid */ "$COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#KINDS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANBENESTEDINSIDE $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#KINDS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#EITHERWRAPTREE $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#ORCREATEBOUNDARIES" /* $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#USE_CLIENT_COMPONENTS */,
  "use agnostic logics":
    /* valid */ "AGNOSTIC20#FORALIASVARIABLES#AGNOSTICCANSERVERCLIENT" /* $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#USE_AGNOSTIC_LOGICS */,
  "use agnostic components":
    /* valid */ "Agnostic Components can render safely on the server just like they can on the client." /* $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#USE_AGNOSTIC_COMPONENTS */,
  kinds:
    "Server Components" /* $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#KINDS */,
  kindsComma:
    "Server Components," /* $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#KINDSCOMMA */,
  kindsPeriod:
    "Server Components." /* $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#KINDSPERIOD */,
  thatsAModule:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#THATSA $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#MODULEPERIOD" /* $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#THATSAMODULE */,
  importingWithExtension:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#WITHEXTENSIONPARENTHESES" /* $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#IMPORTINGWITHEXTENSION */,
  importingByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#IMPORTINGBYAFOLDER */,
});

export const serverFunctionsComments = Object.freeze({
  "use server logics":
    /* valid */ "$COMMENT#AGNOSTIC20#USE_SERVER_LOGICS#KINDSCOMMA $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#BEINGLOGICSERVER $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANSAFELYSUPPORT $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#KINDSPERIOD" /* $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_SERVER_LOGICS */,
  "use server components":
    /* invalid */ "$COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#KINDS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#ARENTALLOWED $COMMENT#AGNOSTIC20#FORALIASVARIABLES#SERVERFUNCTIONSNOCOMPONENTS" /* $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_SERVER_COMPONENTS */,
  "use server functions":
    /* valid */ "Server Functions, even though they don't need to import one another and the same results can be generated via Server Logics for the outcome of a single Server Function, can still compose with one another. (Perhaps a preferrable use case for this has been found or could be found either today or in the future.)" /* $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_SERVER_FUNCTIONS */,
  "use client logics":
    /* invalid */ "AGNOSTIC20#FORALIASVARIABLES#CLIENTNEVERSERVER" /* $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_CLIENT_LOGICS */,
  "use client components":
    /* invalid */ "$COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#KINDS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#ARENTALLOWED $COMMENT#AGNOSTIC20#FORALIASVARIABLES#SERVERFUNCTIONSNOCOMPONENTS" /* $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_CLIENT_COMPONENTS */,
  "use agnostic logics":
    /* valid */ "AGNOSTIC20#FORALIASVARIABLES#AGNOSTICCANSERVERCLIENT" /* $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_LOGICS */,
  "use agnostic components":
    /* invalid */ "$COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#KINDS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#ARENTALLOWED $COMMENT#AGNOSTIC20#FORALIASVARIABLES#SERVERFUNCTIONSNOCOMPONENTS" /* $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#USE_AGNOSTIC_COMPONENTS */,
  kinds:
    "Server Functions" /* $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#KINDS */,
  kindsComma:
    "Server Functions," /* $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#KINDSCOMMA */,
  kindsPeriod:
    "Server Functions." /* $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#KINDSPERIOD */,
  thatsAModule:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#THATSA $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#MODULEPERIOD" /* $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#THATSAMODULE */,
  importingWithExtension:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#WITHEXTENSIONPARENTHESES" /* $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#IMPORTINGWITHEXTENSION */,
  importingByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#AGNOSTIC20#USE_SERVER_FUNCTIONS#IMPORTINGBYAFOLDER */,
});

export const clientLogicsComments = Object.freeze({
  "use server logics":
    /* invalid */ "AGNOSTIC20#FORALIASVARIABLES#SERVERNEVERCLIENT" /* $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_SERVER_LOGICS */,
  "use server components":
    /* invalid */ "$COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#KINDS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTTINKEREDCLIENT" /* $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_SERVER_COMPONENTS */,
  "use server functions":
    /* valid */ "Server Functions can technically be attached to Client Components that are being tinkered with within Client Logics Modules." /* $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_SERVER_FUNCTIONS */,
  "use client logics":
    /* valid */ "$COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#KINDS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANCOMPOSEONEANOTHER" /* $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_CLIENT_LOGICS */,
  "use client components":
    /* valid */ "$COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CLIENTCOMPONENTSOKLOGICS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#NOEXPORTCOMPONENTS" /* $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_CLIENT_COMPONENTS */,
  "use agnostic logics":
    /* valid */ "AGNOSTIC20#FORALIASVARIABLES#AGNOSTICCANCLIENTSERVER" /* $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_AGNOSTIC_LOGICS */,
  "use agnostic components":
    /* valid */ "$COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#AGNOSTICCOMPONENTSCANCLIENT $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#NOEXPORTCOMPONENTS" /* $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#USE_AGNOSTIC_COMPONENTS */,
  kinds: "Client Logics" /* $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#KINDS */,
  kindsComma:
    "Client Logics," /* $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#KINDSCOMMA */,
  kindsPeriod:
    "Client Logics." /* $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#KINDSPERIOD */,
  thatsAModule:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#THATSA $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#MODULEPERIOD" /* $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#THATSAMODULE */,
  importingWithExtension:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#WITHEXTENSIONPARENTHESES" /* $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#IMPORTINGWITHEXTENSION */,
  importingByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#IMPORTINGBYAFOLDER */,
});

export const clientComponentsComments = Object.freeze({
  "use server logics":
    /* invalid */ "AGNOSTIC20#FORALIASVARIABLES#SERVERNEVERCLIENT" /* $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_SERVER_LOGICS */,
  "use server components":
    /* invalid */ "Server Components may only pass through Client Components via the children prop within Server Components Modules." /* $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_SERVER_COMPONENTS */,
  "use server functions":
    /* valid */ "Server Functions can specifically be triggered by Client Components." /* $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_SERVER_FUNCTIONS */,
  "use client logics":
    /* valid */ "$COMMENT#AGNOSTIC20#USE_CLIENT_LOGICS#KINDSCOMMA $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#BEINGLOGICCLIENT $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANSAFELYSUPPORT $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#KINDSPERIOD" /* $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_CLIENT_LOGICS */,
  "use client components":
    /* valid */ "$COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#KINDS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANCOMPOSEONEANOTHER" /* $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_CLIENT_COMPONENTS */,
  "use agnostic logics":
    /* valid */ "AGNOSTIC20#FORALIASVARIABLES#AGNOSTICCANCLIENTSERVER" /* $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_AGNOSTIC_LOGICS */,
  "use agnostic components":
    /* valid */ "Agnostic Components can render safely on the client just like they can on the server." /* $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#USE_AGNOSTIC_COMPONENTS */,
  kinds:
    "Client Components" /* $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#KINDS */,
  kindsComma:
    "Client Components," /* $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#KINDSCOMMA */,
  kindsPeriod:
    "Client Components." /* $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#KINDSPERIOD */,
  thatsAModule:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#THATSA $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#MODULEPERIOD" /* $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#THATSAMODULE */,
  importingWithExtension:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#WITHEXTENSIONPARENTHESES" /* $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#IMPORTINGWITHEXTENSION */,
  importingByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGA $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#IMPORTINGBYAFOLDER */,
});

export const agnosticLogicsComments = Object.freeze({
  "use server logics":
    /* invalid */ "AGNOSTIC20#FORALIASVARIABLES#SERVERLOGICSCANTBOTH" /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_SERVER_LOGICS */,
  "use server components":
    /* invalid */ "$COMMENT#AGNOSTIC20#USE_SERVER_COMPONENTS#KINDS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTTINKEREDBOTH" /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_SERVER_COMPONENTS */,
  "use server functions":
    /* invalid */ "Server Functions can be modified on the server and on the client, but their use cases on both environments are not one-to-one compatible, since they're being addressed as they are on the server and addressed as references on the client." /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_SERVER_FUNCTIONS */,
  "use client logics":
    /* invalid */ "AGNOSTIC20#FORALIASVARIABLES#CLIENTLOGICSCANTBOTH" /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_CLIENT_LOGICS */,
  "use client components":
    /* invalid */ "$COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#KINDS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANTTINKEREDBOTH" /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_CLIENT_COMPONENTS */,
  "use agnostic logics":
    /* valid */ "$COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#KINDS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANCOMPOSEONEANOTHER" /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_AGNOSTIC_LOGICS */,
  "use agnostic components":
    /* valid */ "$COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#AGNOSTICCOMPONENTSCANAGNOSTIC $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#NOEXPORTCOMPONENTS" /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#USE_AGNOSTIC_COMPONENTS */,
  kinds: "Agnostic Logics" /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#KINDS */,
  kindsComma:
    "Agnostic Logics," /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#KINDSCOMMA */,
  kindsPeriod:
    "Agnostic Logics." /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#KINDSPERIOD */,
  thatsAModule:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#THATSAN $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#MODULEPERIOD" /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#THATSAMODULE */,
  importingWithExtension:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGAN $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#WITHEXTENSIONPARENTHESES" /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#IMPORTINGWITHEXTENSION */,
  importingByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGAN $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#IMPORTINGBYAFOLDER */,
});

export const agnosticComponentsComments = Object.freeze({
  "use server logics":
    /* invalid */ "AGNOSTIC20#FORALIASVARIABLES#SERVERLOGICSCANTBOTH" /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_SERVER_LOGICS */,
  "use server components":
    /* invalid */ "Server Components, unlike Client Components, cannot make silos of their own once on the opposing environment (the client in this case), and therefore cannot be executed from the client, making them unable to execute agnostically from both the server and the client." /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_SERVER_COMPONENTS */,
  "use server functions":
    /* valid */ "Server Functions can be passed to Client Components as props when Client Components are also legally imported into Agnostic Components Modules." /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_SERVER_FUNCTIONS */,
  "use client logics":
    /* invalid */ "AGNOSTIC20#FORALIASVARIABLES#CLIENTLOGICSCANTBOTH" /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_LOGICS */,
  "use client components":
    /* valid */ "$COMMENT#AGNOSTIC20#USE_CLIENT_COMPONENTS#KINDS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANBENESTEDINSIDE $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#KINDS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#EITHERWRAPTREE $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#IFSTILLONSERVERTREE $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#ORCREATEBOUNDARIES" /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_CLIENT_COMPONENTS */,
  "use agnostic logics":
    /* valid */ "$COMMENT#AGNOSTIC20#USE_AGNOSTIC_LOGICS#KINDSCOMMA $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#BEINGLOGICAGNOSTIC $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANSAFELYSUPPORT $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#KINDSPERIOD" /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_AGNOSTIC_LOGICS */,
  "use agnostic components":
    /* valid */ "$COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#KINDS $COMMENT#AGNOSTIC20#FORCOMPOSEDVARIABLES#CANCOMPOSEONEANOTHER" /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#USE_AGNOSTIC_COMPONENTS */,
  kinds:
    "Agnostic Components" /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#KINDS */,
  kindsComma:
    "Agnostic Components," /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#KINDSCOMMA */,
  kindsPeriod:
    "Agnostic Components." /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#KINDSPERIOD */,
  thatsAModule:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#THATSAN $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#MODULEPERIOD" /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#THATSAMODULE */,
  importingWithExtension:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGAN $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#WITHEXTENSIONPARENTHESES" /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#IMPORTINGWITHEXTENSION */,
  importingByAFolder:
    "$COMMENT#TESTS#FORCOMPOSEDVARIABLES#IMPORTINGAN $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#KINDS $COMMENT#TESTS#FORCOMPOSEDVARIABLES#MODULE $COMMENT#TESTS#FORCOMPOSEDVARIABLES#BYFOLDER" /* $COMMENT#AGNOSTIC20#USE_AGNOSTIC_COMPONENTS#IMPORTINGBYAFOLDER */,
});
