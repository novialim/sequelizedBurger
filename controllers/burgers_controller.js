var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  
  db.Burger.findAll({}).then(function(data){
    
    var hbsObject = {
      burger: data
    };

    res.render("index", hbsObject);
  })

});

router.post("/", function(req, res) {
  // burger.insertOne([
  //   "burger_name"
  // ], [
  //   req.body.name
  // ], function() {
  //   res.redirect("/");
  // });
  db.Burger.create({
    burger_name: req.body.name
  }).then(function() {
    res.redirect("/");
  });

});

router.post("/:id", function(req, res) {
  // var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  // burger.updateOne({
  //   devoured: req.body.devoured
  // }, condition, function() {
  //   res.redirect("/");
  // });

  console.log("THE PARAM VALUE IS: "+req.params.id);

  db.Burger.update({
    devoured: true
  }, {
      where: {
        id: req.params.id
      }
  }).then(function(){
      res.redirect("/");  
  });
});


// Export routes for server.js to use.
module.exports = router;
