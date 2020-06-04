import React from 'react'
import "./style.css"
import { Row, Card, CardColumns } from 'react-bootstrap';


export default function ProjectCard(props) {

  console.log("props", props.myProjects[0])
  const projects = props.myProjects

  return (

    <div>
      <Row>
        <div className="col-12 border-dark project-card-holder">
          <div className='card border-dark mb-8 mb-2 shadow mt-1.5 bg-white rounded img-thumbnail'>
            <div className='card-header border-dark gen-red bold-text text-center'>
              <h5 className="sub">PROJECTS</h5>
            </div>
          </div>
        </div>
      </Row>
      <ul className="list-group ">
        {projects.map(project => (
          <li className="list-group-item" key={project.name}>
            <Card className= "project-card-holder" style={{ width: '100%' }}>
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
                      <small className="text-muted">
                        <Card.Link href={lnk.link} target="_blank"> {lnk.linkName}</Card.Link>
                      </small>)
                  } else {
                    return (
                      <small className="text-muted">
                        <Card.Link href={lnk.link} target="_blank"> {lnk.linkName} |</Card.Link>
                      </small>)
                  }
                })}
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
