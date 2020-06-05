import React from 'react'
import "./style.css"
import Id from '../../components/id';
import LinkCard from '../../components/linkcard';
import ProjectCard from '../../components/projectcard';
import { Row, Col, Card } from 'react-bootstrap';


export default function Projects(props) {
  return (
      <Row id="progects">
      <Col md={12} className = "contant">
        <Card className = "project-card-holder">
          <Card.Body>
            <Card.Title><h5 className="sub">PROJECTS</h5></Card.Title>
          </Card.Body>
        </Card>
      

           <ProjectCard myProjects={props.myProjects} /> 
          </Col>
          
        </Row>

  )
}
