import React, { useRef } from 'react'
import PopWindow from '../../layouts/PopWindow'
import styles from '../Weather/WeatherForm.css'
import { replacer } from '../js/utils'


function WeatherForm(props) {
    const idFormRef = useRef()
    const locationFormRef = useRef()
    const DescriptionFormRef = useRef()
    const TemperatureFormRef = useRef()
    const windFormRef = useRef()


    function SubmitHandler(event){
         event.preventDefault()
        let Weather;
        if (props.isDelete) {
            Weather = props.Weather
        } else {
            Weather = {
                location: locationFormRef.current.value,
                Description: DescriptionFormRef.current.value,
                Temperature: TemperatureFormRef.current.value,
                wind: windFormRef.current.value,

            }
            if (props.isSearch) {
                Weather = {
                    id: idFormRef.current.value,
                    ...Weather
                }
            } else if (props.isUpdate) {
                Weather = {
                    _id: props.Weather._id,
                    ...Weather
                }
            }
        
        console.log(JSON.stringify(Weather, replacer))

    } 

       
    async function fetchData() {
        let res;
        try {
            let Weather;

            res = await props.fetchFunc(Weather)
            console.log(res)
            const data = await res.json();
            props.setWeatherListFunc(data);
        } catch (err) {
            console.log(err)
        }
    }
    fetchData();
    props.closeWindowFunc()

}
const formName = "WeatherForm"



  return (
    <div>
        <PopWindow closeWindowFunc={props.closeWindowFunc} onOkFunc={props.onOkFunc}>
        <form>
            <div id={formName} onSubmit={SubmitHandler}>
                <label htmlFor="location">location:</label>
                <input name="location" placeholder="location"/>
            </div>
            <div className={styles.formRow}>
                <label htmlFor="Description">Description:</label>
                <input name="Description" placeholder="Description"/>
            </div>
            <div className={styles.formRow}>
                <label htmlFor="Temperature">Temperature:</label>
                <input name="Temperature" placeholder="Temperature"/>
            </div>
            <div className={styles.formRow}>
                <label htmlFor="wind">wind:</label>
                <input name="wind" placeholder="wind"/>
            </div>
           
           
        </form>
        </PopWindow>
    </div>
  )
}

export default WeatherForm