import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './pages/projects';
import HomePage from './pages/homepage';
import AboutMe from './pages/aboutme';
import NavBar from './components/navbar';




function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />  
          <div className='container border-dark shadow bg-white rounded ' id="containerID">
          <Switch>
          <Route exact path="/">
              <HomePage />
             </Route>
        
          <Route exact path="/homepage">
              <HomePage />
             </Route>
            <Route exact path="/projects">
              <Projects />
             </Route>
            <Route exact path="/aboutme">
              <AboutMe />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;





