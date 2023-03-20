const express = require('express');
const path = require('path');
const cors = require('cors');
const geolocationRouter = require('./routes/geolocation');
const weatherRouter = require('./routes/weather');


const app = express();

const port = process.env.PORT || 9000

// view engine setup
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
app.use('/geolocations', geolocationRouter);

app.use('/weather', weatherRouter);


app.listen(port, () => {
    console.log(`Listening on port: http://localhost:${port}`);
})



module.exports = app;