// add all dependencies 
var express = require("express");
var path = require("path");

//create express server
var app = express();
//var PORT = 3000; the port is dynamically assigned by the hosting environment so we write the code below
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require the routing files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  