import React  from 'react'
import'./weatherHome.css'
import{Link} from "react-router-dom";

function WeatherHome() {
  return (
  <div >
      <h1>Weather Dashboard</h1>
      <div >
          <h5>search and add locations</h5>
          <Link to="/WeatherSearch"><button  >Search</button></Link>
      </div>  
      <div >
          <h5>display Dashboard locations</h5>
          <Link to="/WeatherSave"><button >Display</button></Link>
      </div>
     </div>
)}
export default WeatherHome