import React from 'react';
import styles from './Participant.module.css';
 
const Participant = (props) => {
      return (
        <div className={styles.column}>
            <h4 className={styles.studentName}>{props.name}</h4>
            <div className={styles.rollNo}>{props.rollNo}</div>
            <button className={styles.dereg}>Deregister</button>
        </div>
      );
}

export default Participant;


