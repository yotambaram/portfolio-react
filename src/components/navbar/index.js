import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import { Nav, Navbar, Container } from 'react-bootstrap';

export default function NavBar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto d-block navbar navbar-expand-lg navbar-dark bg-dark fixed-top" role="navigation">
          <Container fluid id="navfluid">
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
                  <Nav.Link eventKey="3" as={Link} to="/expertise">
                    EXPERTISE
                      </Nav.Link>
                </Nav.Item>
              </li>
            </ul>
          </Container>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}







