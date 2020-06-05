import React from 'react'
import "./style.css"
import ExperienceCard from '../../components/experiencecard';


export default function AboutMe(props) {
  return (
    <div id="aboutme">
      <div className="row">
        <div className="col-12 col-md-3 border-dark ExperienceCard"></div>
        <ExperienceCard />
      </div>
    </div>
  )
}
