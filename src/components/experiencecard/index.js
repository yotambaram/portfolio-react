import React from 'react'
import "./style.css"
import { Col, Card } from 'react-bootstrap';

export default function ExperienceCard(props) {
  const myData = props.myInfo;
  const info = props.myInfo.info;
  return (
    <Col md={12} style={{ paddingTop: "20px" }}>
      <Card className="experCard">
        <Card.Body>
          <Card.Title>{info.title.toUpperCase()}</Card.Title>
          <Card.Text>
            {myData.summary}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="experCard">
        <Card.Body>
          <Card.Title>WORK EXPERIENCE</Card.Title>
          <ul className="list-group">
            {myData.workExp.map(work => (
              <li className="list-group-item" key={work.company}>
                <strong> {work.company} | {work.roll}</strong><br />
                <small className="card-text text-secondary">{work.address} {work.staerYear}-{work.endYear}</small><br />
                <small>{work.description}</small>
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
      <Card className="experCard">
        <Card.Body>
          <Card.Title>TECHNICAL TOOLS</Card.Title>
          <Card.Text>
            {myData.skills.map(skill => (
              <span key={skill}>{skill} | </span>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="experCard">
        <Card.Body>
          <Card.Title>LINKS</Card.Title>
          <ul>
            {myData.myLinks.map(link => (
              <li className="list-group-item" key={link.linkName}>
                <Card.Text>
                  <Card.Link href="https://github.com/yotambaram" target="_blank">
                    Visit My {link.linkName}
                  </Card.Link>
                </Card.Text>
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Col>
  )
}
