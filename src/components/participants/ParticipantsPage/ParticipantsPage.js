import React, { Component } from 'react';
import Participant from '../Participant/Participant';

class ParticipantsPage extends Component{
      
      state ={

        participants : [

        {id :'1' , participants : [{name : 'Shrinish Vhanbatte',rollno:'19AG3001'},
                        {name : 'Aman Kant',rollno:'19AR10005'},
                        {name : 'Devaraj Sriram',rollno:'19AR10021'},
                        {name : 'Anudeeep Ramteke',rollno:'19AG30002'},
                        {name : 'Apoorv Bansal',rollno:'19AR30003'},
                        {name : 'Harsh Makhwana',rollno:'19AR30004'}]},
         
        {id:'2' , participants : [{name : 'Priyant Jain',rollno:'19CS10001'},
                        {name : 'Rishabh Goyal',rollno:'19CS10002'},
                        {name : 'Kishan Pandey',rollno:'19CS10003'},
                        {name : 'Nishant Sinha',rollno:'19CS10004'},
                        {name : 'Piyush Dhamane',rollno:'19CS10005'},
                        {name : 'Nikhil Jatiwal',rollno:'19CS10006'}]},  
                        
        {id: '3', participants : [{name : 'Ritik Singh',rollno:'19CS10007'},
                        {name : 'Satyam Jha',rollno:'19CS10008'},
                        {name : 'Pulkit Chauhan',rollno:'19CS10009'},
                        {name : 'Gaurav Samaria',rollno:'19CS10010'},
                        {name : 'Harsh Prakash',rollno:'19CS10011'},
                        {name : 'Vishal Patel',rollno:'19CS10012'}] }, 
                        
                        
        {id:'4', participants : [{name : 'Ujwal Nayak',rollno:'19CS10013'},
                        {name : 'Raunak Himmatramka',rollno:'19CS10014'},
                        {name : 'Shivam Hurkat',rollno:'19CS10015'},
                        {name : 'Shrey Sharma',rollno:'19CS10016'},
                        {name : 'Sachin Gurjar',rollno:'19CS10017'},
                        {name : 'Devraj Goswami',rollno:'19CS10018'}]} , 
                     
        {id :'5', participants : [{name : 'Satyajit Behera',rollno:'19CS10019'},
                        {name : 'Dibyendu Biswas',rollno:'19CS10020'},
                        {name : 'Amit Pote',rollno:'19CS10021'},
                        {name : 'Abhinandan De',rollno:'19CS10022'},
                        {name : 'Abhishek Gandhi',rollno:'19CS10023'},
                        {name : 'Audambar Chinchkar',rollno:'19CS10024'}] },

        {id:'6', participants : [{name : 'Aryan Mehta',rollno:'19CS10025'},
                        {name : 'Parth Jindal',rollno:'19CS10026'},
                        {name : 'Neil Butala',rollno:'19CS10027'},
                        {name : 'Khushal Katra',rollno:'19CS10028'},
                        {name : 'Ayan Kumar',rollno:'19CS10029'},
                        {name : 'Naman Sultania',rollno:'19CS10030'}]} ,                  

        {id:'7', participants : [{name : 'Vishal Maurya',rollno:'19CS10031'},
                        {name : 'Akshat Vijay',rollno:'19CS10032'},
                        {name : 'Rohit Shetty',rollno:'19CS100033'},
                        {name : 'Atharv Dastapure',rollno:'19CS10034'},
                        {name : 'Dhruv Rai',rollno:'19CS10035'},
                        {name : 'Jefferey Bassimalla',rollno:'19CS10036'}]} ,  
                        
        {id:'8', participants : [{name : 'Ankit Sharma',rollno:'19CS10037'},
                        {name : 'Rajhans Dale',rollno:'19CS10038'},
                        {name : 'Tanish Agarwal',rollno:'19CS10039'},
                        {name : 'Vinod Bagra',rollno:'19CS10040'},
                        {name : 'Yashvi Jain',rollno:'19CS10041'},
                        {name : 'Dev Agarwal',rollno:'19CS10042'}]} , 
                        
        {id:'9', participants : [{name : 'Rishabh Aggarwal',rollno:'19CS10043'},
                        {name : 'Nikhil Tudaha',rollno:'19CS10044'},
                        {name : 'Vitthal Agarwal',rollno:'19CS10045'},
                        {name : 'Duhita Wani',rollno:'19CS10046'},
                        {name : 'Pratik Korane',rollno:'19CS10047'},
                        {name : 'Roshni Kar',rollno:'19CS10048'}]} ,
                        
        {id:'10', participants : [{name : 'Aditya Devade',rollno:'19CS10049'},
                        {name : 'Harsh Kurane',rollno:'19CS10050'},
                        {name : 'Aditya Mallick',rollno:'19CS10051'},
                        {name : 'Gaurav Garg',rollno:'19CS10052'},
                        {name : 'Naman Jajani',rollno:'19CS10053'},
                        {name : 'Tejas Pote',rollno:'19CS10054'}]} ,
                        
        {id:'11', participants : [{name : 'Yash Agarwal',rollno:'19CS10055'},
                        {name : 'Atharv Choukse',rollno:'19CS10056'},
                        {name : 'Rishi Ratan Pathak',rollno:'19CS10057'},
                        {name : 'Gulshan Telkar',rollno:'19CS10058'},
                        {name : 'Karan Gupta',rollno:'19CS10059'},
                        {name : 'Pranav Rajput',rollno:'19CS10060'}]} ,
                        
        {id:'12', participants : [{name : 'Sai Vamshi',rollno:'19CS10061'},
                        {name : 'Shivam Jain ',rollno:'19CS10062'},
                        {name : 'Siddharth Gandhi',rollno:'19CS10063'},
                        {name : 'Yomesh Yadav',rollno:'19CS10064'},
                        {name : 'Shreyash Vaish',rollno:'19CS10065'},
                        {name : 'Sakshi Dwivedi',rollno:'19CS10066'}]} ,                 
        ] 
      }
      
      render() {

         return  (
             <div>
                 <h2>Participants Enrolled</h2>
                 {this.state.participants[this.props.match.params.id -1 ].participants.map(element => {
                     return <Participant name ={element.name} rollNo ={element.rollno} />
                 })}
                 <button>Add All Participants</button>
             </div>
         )
         
      }
         

}
export default ParticipantsPage;