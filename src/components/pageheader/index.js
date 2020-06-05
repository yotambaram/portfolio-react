import React from 'react'
import "./style.css"
import { Col, Row } from 'react-bootstrap';


export default function PageHeader(props) {
  return (
      <Col md={12} className="head-card-holder">
        <h3>{props.pageName}</h3>
      </Col>

  )
}
