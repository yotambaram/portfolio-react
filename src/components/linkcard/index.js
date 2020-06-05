import React from 'react'
import "./style.css"
import { Col, Row, Card } from 'react-bootstrap';

export default function LinkCard(props) {
  const myInfo = props.myInfo
  return (
    <Row>
      <Col id="right-card-one">
      <Card  className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="yotambaram" style={{ width: '15.5rem'}}>
        <a classNames="LI-simple-link" href='https://www.linkedin.com/in/yotambaram?trk=profile-badge'>
          </a></Card>


      </Col>
      
     
      <Col id="right-card-two" sm={12} >
        <Card  className = "github-card">
          <Card.Img variant="top" src={require('../../public/jpg/github.png')} />
          <Card.Body>
          </Card.Body>
          <Card.Body>
            <Card.Link className="card-text center-content" href="https://github.com/yotambaram" value="githublink" target="_blank" title="Yotams github"> Visit My GitHub</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}


/*
<div className="col-12 col-md-12 border-dark">
  <div className='card border-dark mb-1 shadow bg-white rounded extra-cantant img-thumbnail'
    id='right-card-two'>
    <img src={require('../../public/jpg/linkedin.png')} className='card-img-top border' alt='linkedin' />
    <div className="card-body">
      <p className="card-text center-content"><a href="https://linkedin.com/in/yotambaram" value="linkedin" target="_blank" title="Yotams linkedin"> Visit My Linkedin</a></p>
    </div>
  </div>
</div>
  <div className="col-12 col-md-12 border-dark">
    <div className='card border-dark mb-1 shadow bg-white rounded extra-cantant img-thumbnail'
      id='right-card-one'>
      <img src={require('../../public/jpg/github.png')} className='card-img-top border' alt='github' value="githublogo" />
      <div className="card-body">
        <p className="card-text center-content"><a href={"https://github.com/yotambaram"} value="githublink" target="_blank" title="Yotams github"> Visit My GitHub</a></p>
      </div>
    </div>
  </div>
  */