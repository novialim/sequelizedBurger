// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // add route loads the add.html page,
  // where users can enter new characters to the db
  app.get("/addCustomer", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/customerform.html"));
  });


};
