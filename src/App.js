import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './pages/projects';
import AboutMe from './pages/aboutme';
import Expertise from './pages/expertise';
import NavBar from './components/navbar';
import { myInfo } from './utils/API';
import { Row, Col, Container } from 'react-bootstrap';
import Id from './components/id';
import LinkCard from './components/linkcard';
import Footer from './components/footer';

function App() {


  return (
    <div className="app">
      <Router >
        <Row className="bg-dark">
          <NavBar />
        </Row>
        <Row id="all-content-older">
          <Col md={2} id="id-card-holder">
            <Id myInfo={myInfo.info} />
          </Col>
          <Col md={12} lg={7} className='border-dark shadow bg-white rounded d-flex container justify-content-center' style={{ marginTop:"4rem" }}>
            <Container fluid id="navfluid">
              <Switch>
                <Route exact path="/">
                  <AboutMe aboutMe={myInfo.about} myInfo={myInfo.info} />
                </Route>
                <Route exact path="/aboutme">
                  <AboutMe aboutMe={myInfo.about} myInfo={myInfo.info} />
                </Route>
                <Route exact path="/projects">
                  <Projects myInfo={myInfo.info} myProjects={myInfo.projects} />
                </Route>
                <Route exact path="/expertise">
                  <Expertise myInfo={myInfo} />
                </Route>
              </Switch>

            </Container>
          </Col>
          <Col md={2} >
            <LinkCard myLinks={myInfo.myLinks} />
          </Col>
        </Row>
        <Row className="bg-dark">
          <Footer myInfo={myInfo.info}/>
        </Row>
      </Router>
    </div>
  );
}

export default App;





