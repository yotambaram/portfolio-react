import React from 'react'
import "./style.css"
import Id from '../../components/id';
import LinkCard from '../../components/linkcard';
import ProjectCard from '../../components/projectcard';


export default function Projects() {
  return (
    <div id="progects">
      <div id="content" >
        <div className="row">
          <div className="col-12 col-md-3 border-dark" id="id-card-holder">
            <Id />
          </div>
          <div className="col-12 col-md-7 border-dark" id='head-line'>

          </div>
          <div className="col-12 col-md-2 border-dark contant-one">
            <LinkCard />
          </div>
        </div>
        <ProjectCard />
      </div>
    </div>
  )
}
