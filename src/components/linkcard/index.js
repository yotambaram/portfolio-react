import React from 'react'
import "./style.css"
import { Col, Row, Card } from 'react-bootstrap';

export default function LinkCard(props) {
  return (
    <Row className="linkcard-holder" >
      <Col md={12} className="link-card-holder">
        {props.myLinks.map(link => (
          <Card className="linkcard border" key={link.linkName}>
            <Card.Link className="card-text center-content" href={link.link} value={link.linkName.toLowerCase()} target="_blank" title={link.linkName}>
              <Card.Img className="border" variant="top" src={require(`../../public/jpg/${link.linkName.toLowerCase()}.png`)} />
              <Card.Body>
                <Card.Title>
                  Visit My {link.linkName}
                </Card.Title>
              </Card.Body>
            </Card.Link>
          </Card>
        ))}
      </Col>
    </Row>
  )
}
