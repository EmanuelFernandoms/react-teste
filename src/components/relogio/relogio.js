import React, {useState, useEffect} from "react";
import styles from './relogio.module.css'

function Relogio (){
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        
        const intervalID = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => clearInterval(intervalID)
    }, []);
    
    return (
        <div className = {styles.divRelogio}>
            <h1 className={styles.titulo}>Horario Atual:</h1>
            <h3 className={styles.relogio}> {time} </h3>
        </div>
    );
}

export default Relogio