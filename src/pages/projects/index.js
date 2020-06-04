import React from 'react'
import "./style.css"
import Id from '../../components/id';
import LinkCard from '../../components/linkcard';
import ProjectCard from '../../components/projectcard';
import { Row, Col } from 'react-bootstrap';


export default function Projects(props) {
  return (
    <div id="progects">
        <Row>
          <Col md={3} id="id-card-holder">
            <Id />
          </Col>
          <Col md={7} id="id-card-holder">
           <ProjectCard myProjects={props.myProjects} /> 
          </Col>
          <Col md={2}> id="id='head-line'">
            <LinkCard />
          </Col>
        </Row>
        
    </div>
  )
}
