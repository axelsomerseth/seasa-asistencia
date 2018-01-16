/*
The app.js file is the entry point to your application.
*/

require("./bundle-config");
//require("./text/encoding/UTF_8");
var application = require("application");

application.start({ moduleName: "main-page" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
