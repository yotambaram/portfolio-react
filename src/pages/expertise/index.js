import React from 'react'
import "./style.css"
import ExperienceCard from '../../components/experiencecard';
import PageHeader from '../../components/pageheader';
import { Row } from 'react-bootstrap';
const thisPageName = "EXPERTISE"

export default function Expertise(props) {
  return (
    <Row id="aboutme">
      <PageHeader pageName={thisPageName} />
      <ExperienceCard myInfo={props.myInfo} />
    </Row>
  )
}
