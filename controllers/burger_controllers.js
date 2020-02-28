var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/add", (req, res) => {
  var name = req.body.name;
  console.log(`burger name: ${name}`);
  burger.create(name, data => {
    res.json(data);
  });
});

module.exports = router;
