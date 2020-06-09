import React from 'react'
import "./style.css"
import { Row, Col, Card } from 'react-bootstrap';
import PageHeader from '../../components/pageheader';
const thisPageName = "YOTAM BARAM"

export default function aboutMe(props) {
  const aboutMeData = props.aboutMe
  const info = props.myInfo
  return (
    <Row style={{margin: "0 auto"}}>
      <PageHeader pageName={thisPageName} />
      <Col md={12} id='picture-holder' >
      <Card style={{margin: "0 auto"}}>
      <Card.Img variant="top" src={require(`../../public/jpg/${info.picture}`)} />
    </Card>
    </Col>
      <Col id='home-contant' >
        {aboutMeData.map((about) => {
          if (typeof (about.content) === "string") {
            return (
              <Row key={about.headline} style={{ marginBottom: "25px" }} >
                <Col >
                  <h6>{about.headline}</h6>
                  <span>{about.content}</span>
                </Col>
              </Row>
            )
          } else {
            return (
              <Row key={about.cardid} style={{ marginBottom: "10px" }} >
                <Col>
                  <h6>{about.headline}</h6>
                  <ul >
                    {about.content.map(element => {
                      return (<li key={element}>{element}</li>)
                    })}
                  </ul>
                </Col>
              </Row>
            )
          }
        })}
      </Col>
    </Row>
  )
};
