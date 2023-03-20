import React from 'react'
import styles from '../location/WeatherItem.css'
import Card from '../ui/Card'

function WeatherItem(props) {
  
  let Weather = props.Weather

  return (
    <Card>
    <div className={styles.WeatherItem}>
           <div className={styles.city}>{Weather.location}</div>

        <div className={styles.titleCol}>
            <div>{Weather.Description} </div>
        </div>

        <div className={styles.titleCol}>
            <div>{Weather.Temperature} </div>
        </div>
        <div className={styles.titleCol}>
            <div>{Weather.wind} </div>
        </div>


        <div className={styles.addCol}>
        <button >add to dashboard</button>

        </div>
   
    </div>
    </Card>
  )
  
}
export default WeatherItem