import React from 'react';
import styles from './Subject.module.css';

const Subject = (props) => {
    return (
                <div onClick ={props.click} className={styles.card}>
                 <img className={styles.cardimage} alt='machinelearning' src = {props.img} />
                 <div className={styles.heading}>{props.name} </div>
                 <div className={styles.credits}> CREDITS : {props.credits}</div>
                 <div className={styles.semester}>Semester : {props.sem}</div>
                 <div className={styles.classroom}>CLASSROOM : {props.room}</div> 
               </div>
             
            
    )
}

export default Subject;

