import React from 'react'
import "./style.css"
import {Card} from 'react-bootstrap';


export default function ProjectCard(props) {
  const projects = props.myProjects
  return (
    <div>
      <ul className="list-group">
        {projects.map(project => (
          <li className="list-group-item" key={project.name}>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={require(`../../public/jpg/${project.picture}`)} />
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>
                  {project.description}
                </Card.Text>
              </Card.Body>
              <Card.Body >
                {project.links.map((lnk, i) => {
                  if(project.links.length-1 === i) {
                    return (
                      <small className="text-muted">
                        <Card.Link href={lnk.link} target="_blank"> { lnk.linkName }</Card.Link>
                      </small>)
                  } else {
                     return (
                      <small className="text-muted">
                        <Card.Link href={lnk.link} target="_blank"> { lnk.linkName }</Card.Link>
                      </small>)

                  }
                  
                  
                })}
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>











    </div>




  )
}




/*
<div>
      <div className="row">
        <div className="col-12 col-md-3 border-dark" id="Flixlists-card-holder">
        </div>
        <div className="col-12 col-md-7 border-dark port-card">


        <div className='card border-dark mb-8 mb-2 shadow mt-1.5 bg-white rounded img-thumbnail'>
        <div className='card-header border-dark gen-red bold-text text-center'>
          <h5 className = "sub">PROJECTS</h5>
        </div>

      </div>




          <div className="card card border-dark shadow mb-2 bg-white rounded img-thumbnail">
            <a href="https://yoututor2020.herokuapp.com" target="_blank" title="project on" rel="noopener noreferrer" value="yoututorheroku2" >
              <img src={require('../../public/jpg/findtutor.JPG')} className="full-width border" alt="flixlists" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Find Tutor</h5>
              <span className="card-text">A social network that allows you to choose skills you need help to learn and find tutor or with skills you are good on and can be a tutor, you can find the learning people who needs help</span><br />
             <small className="text-muted">
                <a href={"https://yoututor2020.herokuapp.com"} value="yoututorheroku" target={"_blank"} >Find A Tutor Web</a>
                <a href={"https://github.com/OlgaSadova/FinalProject"} value="yoututorgithubfront" target={"_blank"} > | GitHub Frontend </a>
                <a href={"https://github.com/OlgaSadova/FinalProjectBackEnd"} value="yoututorgithubback" target={"_blank"}> | GitHub Backend </a>
              </small>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-2 border-dark contant-one">
          <div className="row">
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-3 border-dark" id="Flixlists-card-holder">
        </div>
        <div className="col-12 col-md-7 border-dark port-card">
          <div className="card card border-dark shadow mb-2 bg-white rounded img-thumbnail">
            <a href={"https://flixlists.herokuapp.com/login"} target={"_blank"} title="project on" value="yoututot">
              <img src={require('../../public/jpg/flixlists.JPG')} className="full-width border" alt="flixlists" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Flixlists</h5>
              <span className="card-text">Full stack web application that allows users to search the Open Movie Database for information about films and to keep lists of their favorite ones. Each user his her own login and password and her lists are stored persistently in a MySql database.</span><br />
              <small className="text-muted">
                <a href={"https://flixlists.herokuapp.com/movies"} value="flixlistsheroku" target={"_blank"}>flixlists Web </a>
                <a href={"https://github.com/yotambaram/Flixlists"} value="flixlistsgithub" target={"_blank"}> | GitHub </a>
              </small>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-2 border-dark contant-one">
          <div className="row">
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-3 border-dark" id="Weather-Dashboard-card-holder">
        </div>
        <div className="col-12 col-md-7 border-dark port-card">
          <div className="card card border-dark shadow mb-2 bg-white rounded img-thumbnail">
            <a href={"https://yotambaram.github.io/Weather-Dashboard"} value="Weather-Dashboard-github1" target={"_blank"} title="Weather Dashboard">
              <img src={require('../../public/jpg/weather-deshboard.JPG')} className="full-width border" alt="Weather Dashboarde" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <span className="card-text">The weather app is simple, accessible and easy to use. Receives the weather API details and passes them to a site visitor based on their location or location searched for Fahrenheit or Celsius of your choice.</span><br />
              <small className="text-muted">
                <a href={"https://yotambaram.github.io/Weather-Dashboard"} value="Weather-Dashboard" target={"_blank"} >Weather Dashboard Web |</a></small><small className="text-muted">
                <a href={"https://github.com/yotambaram/Weather-Dashboard"} value="Weather-Dashboard-github" target={"_blank"} > GitHab </a>
              </small>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-2 border-dark contant-one">
          <div className="row">
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-3 border-dark"></div>
        <div className="col-12 col-md-7 border-dark port-card">
         <div className="card card border-dark shadow mb-2 bg-white rounded img-thumbnail">
            <a href={"https://commiewalker.github.io/Findr"} value="finder-github" target={"_blank"} title="project three">
              <img src={require('../../public/jpg/finder.JPG')} className="full-width border" alt="Findr" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Findr</h5>
              <span className="card-text">My first project in code studies, a month after I started. Not a project that showcases its capabilities but it is my first "product" and has sentimental value to me. The app lets you choose a place to eat by picture. The user's location information and entertainment content come from two third-party APIs.</span><br />
              <small className="text-muted">
                <a href={"https://commiewalker.github.io/Findr"} value="finder-github1" target={"_blank"} title="project three"> Findr Web |</a></small><small className="text-muted">
                <a href={"https://github.com/commiewalker/Findr"} value="finder-github2" target={"_blank"} title="project three"> GitHab </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
    */