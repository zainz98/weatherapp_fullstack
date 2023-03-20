var express = require('express');
var router = express.Router();
const locations = require("../controllers/geolocation.js");

// Add Geolocation per user
  router.post("/:user/", locations.create);
  
  // general geolocations search by name
  router.get("/:location?", locations.findAll);


module.exports = router;
