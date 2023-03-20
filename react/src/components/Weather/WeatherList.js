import React from 'react'
import styles from '../Weather/WeatherItem.css'
import WeatherItem from './Weatheritem'

function WeatherList(props) {
  return (
    <ul className={styles.WeatherList}>
        {props.Weather.map((Weather) => <li >
          <WeatherItem course={Weather}/></li>)}
    </ul>
  )
  
}

export default WeatherList