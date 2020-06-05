import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './pages/projects';
import HomePage from './pages/homepage';
import AboutMe from './pages/aboutme';
import NavBar from './components/navbar';
import {myInfo} from './utils/API';
import {Row, Col} from 'react-bootstrap';
import Id from './components/id';
import LinkCard from './components/linkcard';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />  
        <Row>
          <Col md={2} id="id-card-holder">
            <Id myInfo={myInfo.info}/>
          </Col>
          <Col md={7}className='container border-dark shadow bg-white rounded d-flex justify-content-center' id="containerID">
          <Switch>
          <Route exact path="/">
              <HomePage />
             </Route>
        
          <Route exact path="/aboutme">
              <HomePage myInfo={myInfo.info} aboutMe={myInfo.about} />
             </Route>
            <Route exact path="/projects">
              <Projects myInfo={myInfo.info} myProjects={myInfo.projects} myInfo={myInfo.info}/>
             </Route>
            <Route exact myInfo={myInfo.info} path="/experience">
              <AboutMe />
            </Route>
          </Switch>
        </Col>
        <Col md={2} className="links-card-holder">
           <LinkCard myInfo={myInfo.info}/>
          </Col>
        </Row>
      </div>
    </Router>

  );
}

export default App;





