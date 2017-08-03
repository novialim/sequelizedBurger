var db = require("../models");

module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  app.get("/api/customers", function(req, res) {
    db.Customer.findAll({}).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  app.post("/api/customer", function(req, res) {

    console.log("REACHED");
     // Create an Author with the data available to us in req.body
    console.log(req.body);
    db.Customer.create(req.body).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

};
