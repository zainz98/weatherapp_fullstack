import React, { useRef } from 'react'
import PopWindow from '../../layouts/PopWindow'
import styles from './locationForm.css'
import { replacer } from '../js/utils'


function LocationForm(props) {
    const idFormRef = useRef()
    const cityFormRef = useRef()
    const countryFormRef = useRef()
    const stateFormRef = useRef()

    function SubmitHandler(event){
         event.preventDefault()
        let location;
        if (props.isDelete) {
            location = props.location
        } else {
            location = {
                city: cityFormRef.current.value,
                country: countryFormRef.current.value,
                state: stateFormRef.current.value,
            }
            if (props.isSearch) {
                location = {
                    id: idFormRef.current.value,
                    ...location
                }
            } else if (props.isUpdate) {
                location = {
                    _id: props.location._id,
                    ...location
                }
            }
        
        console.log(JSON.stringify(location, replacer))

    } 

       
    async function fetchData() {
        let res;
        try {
            let location;

            res = await props.fetchFunc(location)
            console.log(res)
            const data = await res.json();
            props.setlocationListFunc(data);
        } catch (err) {
            console.log(err)
        }
    }
    fetchData();
    props.closeWindowFunc()
}
const formName = "locationForm"

  return (
    <div>
        <PopWindow closeWindowFunc={props.closeWindowFunc} onOkFunc={props.onOkFunc}>
        <form id={formName} onSubmit={SubmitHandler}>

            <div className={styles.formRow}>
                <label htmlFor="city">city:</label>
                <input name="city" placeholder="city"/>
            </div>
            <div className={styles.formRow}>
                <label htmlFor="country">country:</label>
                <input name="country" placeholder="country"/>
            </div>
            <div className={styles.formRow}>
                <label htmlFor="state">state:</label>
                <input name="state" placeholder="state"/>
            </div>
            
        </form>
        </PopWindow>
    </div>
  )
}

export default LocationForm