import React from 'react'
import "./style.css"
import { Card, Row, Col } from 'react-bootstrap';

export default function ProjectCard(props) {
  const projects = props.myProjects
  return (
    <Col >
      <Row >
        <ul className="list-group" key={projects.name}>
          {projects.map(project => (
            <li className="list-group-item" key={project.id} >
              <Card className="justify-content-md-center">
                <Card.Img variant="top" src={require(`../../public/jpg/${project.picture}`)} />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>
                    {project.description}
                  </Card.Text>
                </Card.Body>
                <Card.Body >
                  {project.links.map((lnk, i) => {
                    if (project.links.length - 1 === i) {
                      return (
                        <small className="text-muted" key={lnk.linkName}>
                          <Card.Link href={lnk.link} target="_blank"> {lnk.linkName} |</Card.Link>
                        </small>)
                    } else {
                      return (
                        <small className="text-muted" key={lnk.linkName}>
                          <Card.Link href={lnk.link} target="_blank"> {lnk.linkName} |</Card.Link>
                        </small>
                      )
                    }
                  })}
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
      </Row>
    </Col>
  )
}