const sql = require("./db.js");
// constructor
const Geolocation = function(geolocation) {
  this.user = geolocation.user;
  this.locationNameByUser = geolocation.locationNameByUser;
  this.lat = geolocation.lat;
  this.lon = geolocation.lon;
  this.country = geolocation.country;
  this.state = geolocation.state;
};

Geolocation.create = (newgeolocation, result) => {
  sql.query("INSERT INTO geolocations SET ?", newgeolocation, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created geolocation: ", { id: res.insertId, ...newgeolocation });
    result(null, { id: res.insertId, ...newgeolocation });
  });
};
Geolocation.findById = (user, result) => {
  try {
    let quesryStr = 'SELECT * FROM geolocations WHERE user = "'+user+'"'; 
    sql.query(quesryStr, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found geolocation: ", res);
        result(null, res);
        return;
      }
      // not found geolocation with the id
      result(null, []);
    });
  } catch (err)
  {
    console.log(err);
  }
};
Geolocation.getAll = (result) => {
  let query = "SELECT * FROM geolocations";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("geolocations: ", res);
      result(null, res);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

Geolocation.remove = (id, result) => {
    sql.query("DELETE FROM geolocations WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found geolocation with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted geolocation with id: ", id);
      result(null, res);
    });
  };
  Geolocation.removeAll = result => {
    sql.query("DELETE FROM geolocations", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log(`deleted ${res.affectedRows} geolocations`);
      result(null, res);
    });
  };

module.exports = Geolocation;