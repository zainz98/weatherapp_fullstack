import styles from './ClickMe.module.css';

function ClickMe(props) {

    function clickHandler() {
        console.log("Clicked " + props.button_text);
    }
    
    return(

        
        <div>
            <h2 className={styles.h2}> {props.h2_text}</h2>
            <button className={styles.clickButton} onClick={clickHandler}> {props.button_text}</button>
        </div>
    );
}
export default ClickMe