import React, { useState } from 'react'
import'./WeatherSearch.css';
import Background from '../layouts/Background'
import WeatherForm from'../components/location/locationForm'
import LocationForm from '../components/location/locationForm'

export async function city(){
  var city = document.getElementById("locat").value;
  console.log(city);
  location(city);
}
export async function location(city) {
 const locdata= await fetch(`http://localhost:9000/geolocations?location=${city}&appid={d390b23bb52cdc4232a245ef2b407ad7} `);
 const data = await locdata.json()
console.log(data)
}
export async function Weather(lat,lon,city) {
 const Weather= await fetch(`http://localhost:9000/weather?lat=${lat}&lon=${lon}&locationNameByUser=${city}&appid={d390b23bb52cdc4232a245ef2b407ad7}&units=metric`);
 const data = await Weather.json()
 console.log(data)

}
function WeatherSearch() {
  const [searchlocIsOpen, setSearchlocIsOpen] = useState(false);
  function closeSearchloc() { setSearchlocIsOpen(false) }
  return (
    <div>
        <div className='Search'><h3>Search location</h3></div>

        <div className='Enter'><h6>Enter city name woridwide</h6></div>
        <div>
          <input type="text" id="locat"></input>
        </div>
        <div>
          <button onClick={city } >Search </button>
        </div>
        
        <div>
        {searchlocIsOpen && <LocationForm closeWindowFunc={closeSearchloc}
          isSearch={true}
          />
        }
      {searchlocIsOpen && <Background closeWindowFunc={closeSearchloc} />}
      
      {searchlocIsOpen && <WeatherForm closeWindowFunc={closeSearchloc}
          isSearch={true}
          />
        }
      {searchlocIsOpen && <Background closeWindowFunc={closeSearchloc} />}
      </div>
    </div>
  )
}


export default WeatherSearch