import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './pages/projects';
import HomePage from './pages/homepage';
import AboutMe from './pages/aboutme';
import NavBar from './components/navbar';
import {myInfo} from './utils/API';



function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />  
          <div className='container border-dark shadow bg-white rounded d-flex justify-content-center' id="containerID">
          <Switch>
          <Route exact path="/">
              <HomePage />
             </Route>
        
          <Route exact path="/aboutme">
              <HomePage />
             </Route>
            <Route exact path="/projects">
              <Projects myProjects={myInfo.projects}/>
             </Route>
            <Route exact path="/experience">
              <AboutMe />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;





