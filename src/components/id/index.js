import React from 'react'
import "./style.css"
import { Card } from 'react-bootstrap';

export default function Id(props) {
  const info = props.myInfo;
  return (
    <Card id='id-card'>
      <Card.Img variant="top" src={require(`../../public/jpg/${info.picture}`)} />
      <Card.Body>
        <Card.Title>{info.name}</Card.Title>
        <Card.Text>
          <strong>{info.title}</strong><br /><br />
          <small className="small-gray">{info.email}</small><br />
          <small className="small-gray">{info.address}</small><br />
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
