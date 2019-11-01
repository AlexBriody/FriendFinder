
// DEPENDENCIES
var express = require("express");
var path = require('path');

// Create an "express" server
var app = express();

// Sets up a port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//points to routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//server listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
