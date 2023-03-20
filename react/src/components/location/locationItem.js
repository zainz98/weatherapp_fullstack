import React from 'react'
import styles from './locationItem.css'
import Card from '../ui/Card'


function LocationItem(props) {
  
  
  let Location = props.Location

  
  return (
    <Card>
    <div className={styles.LocationItem}>
      
        

        <div className={styles.city}>
            <div>{Location.city} </div>
        </div>



        <div className={styles.country}>
            <div>{Location.country} </div>
        </div>
        <div className={styles.state}>
            <div>{Location.state} </div>
        </div>


        <div className={styles.selectCol}>
            <button >select</button>
        </div>
   
        
    </div>
    </Card>
  )
}

export default LocationItem