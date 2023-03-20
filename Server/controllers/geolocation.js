const Geolocation = require("../models/geolocation.model.js");
const axiosWrapper = require("../js/axiosWrapper");
const { getWeatherFromAPI } = require("./weather.js");
// Create and Save a new Geolocation

// Create a geolocation row in the DB
exports.create = async (req, res) => {
    // Validate request
    console.log(req);
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    
    // Create a Geolocation Model instance    
    const location = new Geolocation({
      user: req.params.user,
      locationNameByUser: req.body.locationNameByUser,
      lat: req.body.lat,
      lon: req.body.lon,
      country: req.body.country || "",
      state: req.body.state || ""
    });

    // Save Geolocation in the database
    Geolocation.create(location, (err, data) => {
      if (err)
      {
        const msg = "Some error occurred while creating the Geolocation."
        console.log(msg + "\n" + err.message)
        res.status(500).send({
          message: msg
        });
      }
      else res.send(data);
    });
  };

// Retrieve all Geolocations matching the location as it was specified by the user
exports.findAll = async(req, res) => {
  try {
        let url = `https://api.openweathermap.org/geo/1.0/direct?q=${req.query.location}&limit=5&appid=${req.query.appid}`
        
        let response = await axiosWrapper.makeGetRequest(url);
        let data = [];
        response.data.forEach(loc => {
          data.push({ locationNameByUser : req.query.location,
                      appid : req.query.appid,
                    ...loc});
        });
        res.send(data)
    } catch (err) {
      {
        const msg = "Some error occurred while retrieving locations."
        console.log(msg + "\n" + err.message)
        res.status(500).send({
          message: msg
        });
      }
    }
};

