import React, { Component } from 'react';
import styles from './SubjectsPage.module.css';
import Subject from'../Subject/Subject';
import {Link} from 'react-router-dom';

import MLimg from '../../../assets/MLimg.jpg';
import ALGOimg from '../../../assets/ALGOimg.jpg';
import SCimg from '../../../assets/SCimg.jpg';
import DSimg from '../../../assets/DSimg.jpg';

import ADimg from '../../../assets/ADimg.jpg';
import AIimg from '../../../assets/AIimg.jpg';
import COMimg from '../../../assets/COMimg.jpg';
import DBMSimg from '../../../assets/DBMSimg.jpg';

import OSimg from '../../../assets/OSimg.jpg';
import WDimg from '../../../assets/WDimg.jpg';
import VRimg from '../../../assets/VRimg.jpg';
import DLimg from '../../../assets/DLimg.jpg';



 
class  SubjectsPage extends Component {

    state = {
        subjects : [{id:'1',name:'Machine Learning', Credits:'3-1-0',Sem:'3RD',roomno:'NC313',Img :MLimg},
                        {id:'2',name:'Data Structures & Algorithms', Credits:'3-1-1',Sem:'4TH',roomno:'NC222',Img :ALGOimg},
                        {id:'3',name:'Switching Circuits', Credits:'3-0-1',Sem:'3RD',roomno:'NC129',Img :SCimg},
                        {id:'4',name:'Discrete Structures', Credits:'2-1-1',Sem:'4TH',roomno:'NR234',Img :DSimg},
                        {id:'5',name:'Android Development', Credits:'3-1-0',Sem:'5TH',roomno:'NC245',Img :ADimg},
                        {id:'6',name:'Artificial Intelligence', Credits:'3-2-1',Sem:'6TH',roomno:'NC222',Img :AIimg},
                        {id:'7',name:'Compiler Theory', Credits:'3-1-1',Sem:'5TH',roomno:'NC219',Img :COMimg},
                        {id:'8',name:'Database Management', Credits:'3-1-1',Sem:'6TH',roomno:'NR421',Img :DBMSimg},
                        {id:'9',name:'Operating Systems', Credits:'3-1-1',Sem:'7TH',roomno:'NC311',Img :OSimg},
                        {id:'10',name:'Web Development', Credits:'3-0-1',Sem:'8TH',roomno:'NC254',Img :WDimg},
                        {id:'11',name:'Virtual Reality', Credits:'3-2-1',Sem:'7TH',roomno:'NC324',Img :VRimg},
                        {id:'12',name:'Deep Learning', Credits:'2-2-1',Sem:'8TH',roomno:'NR214',Img :DLimg}]
        }
        
        

         render(){
            return (
                <div className ={styles.background}>
                    <div className ={styles.header}>
                        Subjects Enrolled
                    </div>
                    <div>
                        {this.state.subjects.map(element=>{
                         return <Link to={'/subjects/' + element.id}>    <Subject  key ={element.id} name ={element.name} credits ={element.Credits}
                              sem={element.Sem} room ={element.roomno} img={element.Img}  /></Link> 
               
                         })}
                    </div>
                </div>
            )
         }
    
}


export default SubjectsPage ;

