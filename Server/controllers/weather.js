const axiosWrapper = require("../js/axiosWrapper");

const Geolocation = require("../models/geolocation.model.js");

// Retrieve a single weather according to geolication.
exports.getWeather = async(req, res) => {
    let response = await this.getWeatherFromAPI(req.query.lat, req.query.lon, req.query.appid, req.query.locationNameByUser);
    if (response.data)
    {
        res.send(response.data)
      } else
        res.status(500).send(response);
  };

  // Retrieve a single weather according to geolication.
  // will be used by multiple controllers so it is not called directly by the routing functions.
  // locationNameByUser is included in the result
  exports.getWeatherFromAPI = async(lat, lon, appid, locationNameByUser) => {
  let response;
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${appid}`
    console.log(url);          
    response = await axiosWrapper.makeGetRequest(url);
    if (response.data)
    {
      response.data = {
        locationNameByUser : locationNameByUser,
        ...response.data
      }
    }
    console.log(response);
  } catch (err) {
    const msg = "Some error occurred while retrieving Weahter."
    console.log(msg + "\n" + err.message)
    response = {
      message: msg
    };
  }
  return response;
};


// Retrieve a all weathers according to a list (SQL query results) of geolications.
exports.getAllWeathers = (req, res) => {
    Geolocation.findById(req.params.user, async (err, data) => {
      if (err)
      {  
        const msg = "Some error occurred while retrieving Stored locations"
        console.log(msg + "\n" + err.message)
        res.status(500).send({
          message: msg
        });
      } else {
        let promises = [];
        let weatherList = new Array();
        data.map((weather) =>
        { 
          promises.push(this.getWeatherFromAPI(weather.lat, weather.lon, req.query.appid, weather.locationNameByUser));
        });
        const promisesRes = await Promise.all(promises);
        promisesRes.forEach(promiseRes => {
          weatherList = [ ... weatherList, promiseRes.data];
        });
        res.send(weatherList);
      }
    });
  };
