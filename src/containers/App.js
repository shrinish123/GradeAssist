import React, { Component } from 'react';
import './App.css';
import Home from '../components/home/Home';
import  Navbar from '../components/navbar/Navbar' ;
import  SubjectsPage from '../components/subjects/SubjectsPage/SubjectsPage.js';
import {BrowserRouter as Router,Route} from  'react-router-dom';

import ParticipantsPage from '../components/participants/ParticipantsPage/ParticipantsPage';

class App extends Component {
   

  render(){
    return (
    
      <Router>
        <div className="App">
          <Navbar />
             <Route path ="/GradeAssist" exact component ={Home}/>
             <Route path ="/subjects"  exact component ={SubjectsPage} />
             <Route path='/subjects/:id'  component ={ParticipantsPage} />
        </div>
      </Router>
      
    );
  }
  
}

export default App;
