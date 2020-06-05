import React from 'react'
import "./style.css"
import {Card} from 'react-bootstrap';

export default function Id(props) {
  const info = props.myInfo;
  return (

<Card id='id-card'>
  <Card.Img variant="top" src={require(`../../public/jpg/${info.picture}`)} />
  <Card.Body>
    <Card.Title><h3>{info.name}</h3></Card.Title>
    <Card.Text>
    
        <strong>{info.title}</strong><br /><br />
        <h6 className="small-gray">{info.email}</h6>
        <h6 className="small-gray">{info.address}</h6><br />
    </Card.Text>
  
  </Card.Body>
</Card>

  )
}
