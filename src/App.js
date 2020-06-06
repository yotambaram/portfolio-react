import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './pages/projects';
import AboutMe from './pages/aboutme';
import Expertise from './pages/expertise';
import NavBar from './components/navbar';
import { myInfo } from './utils/API';
import { Row, Col } from 'react-bootstrap';
import Id from './components/id';
import LinkCard from './components/linkcard';

function App() {


  return (
    <Router>
    <Row>
        <NavBar />
        </Row>
        
        <Row>
          <Col md={2} id="id-card-holder">
            <Id myInfo={myInfo.info} />
          </Col>
          <Col md={12} lg={7} className='container border-dark shadow bg-white rounded d-flex justify-content-center' id="containerID">
          
            <Switch>
              <Route exact path="/">
                <AboutMe />
              </Route>

              <Route exact path="/aboutme">
                <AboutMe aboutMe={myInfo.about} />
              </Route>
              <Route exact path="/projects">
                <Projects myInfo={myInfo.info} myProjects={myInfo.projects} />
              </Route>
              <Route exact path="/experience">
                <Expertise myInfo={myInfo} />
              </Route>
            </Switch>
         
          </Col>
          <Col md={2} >
               <LinkCard myLinks={myInfo.myLinks} /> 
          </Col>
        </Row>
      
    
      
    </Router>

  );
}

export default App;





