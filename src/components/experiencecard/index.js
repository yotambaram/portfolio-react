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
          <Card.Title className="head-line-content">{info.title.toUpperCase()}</Card.Title>
          <Card.Text>
            {myData.summary}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="experCard">
        <Card.Body>
          <Card.Title className="head-line-content">WORK EXPERIENCE</Card.Title>
          <ul className="list-group">
            {myData.workExp.map(work => (
              <li className="list-group-item" key={work.company}>
                <strong> {work.company} | {work.roll}</strong><br />
                <span className="card-text text-secondary">{work.address} {work.staerYear}-{work.endYear}</span><br />
                <span>{work.description}</span>
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
      <Card className="experCard">
        <Card.Body>
          <Card.Title className="head-line-content">TECHNICAL TOOLS</Card.Title>
          <Card.Text className="head-line-content">
            {myData.skills.map(skill => (
              <span key={skill}>{skill} | </span>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="experCard">
        <Card.Body>
          <Card.Title className="head-line-content">LINKS</Card.Title>
          <ul style={{padding: "0"}}>
            {myData.myLinks.map(link => (
              <li className="list-group-item head-line-content" key={link.linkName} style={{padding: "0 1px"}}>
                <Card.Text>
                  <Card.Link href="https://github.com/yotambaram" target="_blank" >
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
