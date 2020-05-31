import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';

export default function NavBar(props) {
  //const menu = ["homeBtn", "portfolioBtn", "aboutMe"]


  return (
    <header className="App-header">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto d-block navbar-dark">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" role="navigation">
              <div className="container-fluid" id="navfluid">
                <ul className="nav navbar-nav d-flex justify-content-center">
                  <li className="nav-item">
                    <Nav.Item>
                      <Nav.Link eventKey="1" as={Link} to="/aboutme">
                        ABOUT ME
                     </Nav.Link>
                    </Nav.Item>
                  </li>
                  <li className="nav-item">
                    <Nav.Item>
                      <Nav.Link eventKey="2" as={Link} to="/projects">
                        PROJECTS
                      </Nav.Link>
                    </Nav.Item>
                  </li>

                  <li className="nav-item">
                    <Nav.Item>
                      <Nav.Link eventKey="3" as={Link} to="/experience">
                        EXPERTISE
                      </Nav.Link>
                    </Nav.Item>
                  </li>
                </ul>
              </div>
            </nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>



    </header>
  )
}







