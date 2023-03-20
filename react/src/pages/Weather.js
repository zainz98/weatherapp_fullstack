import React, { useState } from 'react'
import'./Weather.css';
import WeatherForm from'../components/location/locationForm'
import Background from '../layouts/Background'

function Weather() {
  const [searchlocIsOpen, setSearchlocIsOpen] = useState(false);
  function closeSearchloc() { setSearchlocIsOpen(false) }
  return (
    <div>
        <div ><h1>Weather location Dashboard</h1></div>
      {searchlocIsOpen && <WeatherForm closeWindowFunc={closeSearchloc}
          isSearch={true}
          />
        }
      {searchlocIsOpen && <Background closeWindowFunc={closeSearchloc} />}
      </div>
        
)}
export default Weather