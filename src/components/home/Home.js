import React from 'react';
import styles from './Home.module.css';
import {Link} from 'react-router-dom';

function Home () {
    return (
        <div className={styles.background}>
          <div className={styles.textbox}>
              <span className={styles.headingPrimary}>GradeAssist</span>  
              <span className={styles.description}>BUILDING A BETTER WORLD FOR TEACHERS</span>
              <Link to='/subjects'>
                <button className={styles.subjectButton}>Subjects</button>
              </Link>  
          </div>
        </div>
    )
}
export default Home ;