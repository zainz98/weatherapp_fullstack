import styles from './PopWindow.module.css'
function PopWindow(props) {

    function onClose(){
        props.closeWindowFunc()
    }
    function onOk(){
        props.closeWindowFunc()
        props.onOkFunc()
    }
  
    return (
    <div className={styles.popWindow}>
        {props.children}
        <h1 className={styles.buttonOk} onClick={onOk}>location save </h1>
        <button className={styles.buttonClose} onClick={onClose}>ok</button>
    </div>
  )
}

export default PopWindow