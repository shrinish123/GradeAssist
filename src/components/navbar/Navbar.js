import React from 'react';
import styles from'./Navbar.module.css';
import {Link} from 'react-router-dom';
 
 function Navbar (){
     return (
         <nav >
            <h3 className={styles.logo}>GradeAssist</h3>
            <ul>
               <Link className ={styles.linkstyle} to="/">
                  <li>Home</li>
               </Link>
                <Link className={styles.linkstyle} to="/subjects">
                  <li>Subjects</li>
                </Link>
                
            </ul> 
         </nav>
     )
 }
 
 export default Navbar;
 
 
 
 