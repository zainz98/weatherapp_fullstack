var express = require('express');
var router = express.Router();
const weatherAPI = require("../controllers/weather.js");

// get a single weather
router.get('/', weatherAPI.getWeather );

// get all weathers per user
router.get('/all/:user', weatherAPI.getAllWeathers );

module.exports = router;