import React from 'react'
import styles from './locationList.css'
import LocationItem from './locationItem'

function LocationList(props) {
  return (
    <ul className={styles.courseList}>
        {props.Location.map((Location) => <li key={Location._id}>
          <LocationItem Location={Location}/></li>)}
    </ul>
  )
}
export default LocationList