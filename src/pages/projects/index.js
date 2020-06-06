import React from 'react'
import "./style.css"
import PageHeader from '../../components/pageheader';
//import LinkCard from '../../components/linkcard';
import ProjectCard from '../../components/projectcard';
import { Row } from 'react-bootstrap';
const thisPageName = "PROJECTS"

export default function Projects(props) {
  return (
    <Row>
      <PageHeader pageName={thisPageName}/>
      
        <ProjectCard myProjects={props.myProjects}/>
      
    </Row>
  )
}
