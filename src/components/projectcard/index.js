import React from 'react'
import "./style.css"

export default function ProjectCard() {

  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-3 border-dark" id="Flixlists-card-holder">
        </div>
        <div className="col-12 col-md-7 border-dark port-card" id='project-one'>
          <div className="card mb-3 card border-dark mb-3 shadow mb-5 bg-white rounded img-thumbnail">
            <a href="https://yoututor2020.herokuapp.com" target="_blank" title="project on">
              <img src={require('../../public/jpg/findtutor.JPG')} className="full-width border" alt="flixlists picture" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Find Tutor</h5>
              <a className="card-text">A social network that allows you to choose skills you need help to learn and find tutor or with skills you are good on and can be a tutor, you can find the learning people who needs help</a><br />
              <a className="card-text"><small className="text-muted">
                <a href="https://yoututor2020.herokuapp.com" target="_blank title" Find Tutor>Find Tutor app</a>
                <a href="https://github.com/OlgaSadova/FinalProject" target="_blank title" Find Tutor> | Find Tutor GitHub Frontend Repo</a>
                <a href="https://github.com/OlgaSadova/FinalProjectBackEnd" target="_blank title" Find Tutor> | Find Tutor GitHub Backend Repo</a></small>
              </a>
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
        <div className="col-12 col-md-7 border-dark port-card" id='project-one'>
          <div className="card mb-3 card border-dark shadow mb-3 bg-white rounded img-thumbnail">
            <a href="https://yoututor2020.herokuapp.com" target="_blank" title="project on">
              <img src={require('../../public/jpg/flixlists.JPG')} className="full-width border" alt="flixlists picture" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Flixlists</h5>
              <a className="card-text">Full stack web application that allows users to search the Open Movie Database for information about films and to keep lists of their favorite ones. Each user his her own login and password and her lists are stored persistently in a MySql database.</a><br />
              <a className="card-text"><small className="text-muted">
                <a href="https://flixlists.herokuapp.com/movies" target="_blank title" project one>flixlists Website </a>
                <a href="https://github.com/yotambaram/Flixlists" target="_blank title"> | flixlists GitHub Repo</a></small>
              </a>
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
        <div className="col-12 col-md-7 border-dark port-card" id='project-one'>
          <div className="card card border-dark shadow mb-3 bg-white rounded img-thumbnail">
            <a href="https://yotambaram.github.io/Weather-Dashboard" target="_blank" title="project on">
              <img src={require('../../public/jpg/weather-deshboard.JPG')} className="full-width border" alt="project one picture" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <a className="card-text">The weather app is simple, accessible and easy to use. Receives the weather API details and passes them to a site visitor based on their location or location searched for Fahrenheit or Celsius of your choice.</a><br />
              <a className="card-text"><small className="text-muted">
                <a href="https://yotambaram.github.io/Weather-Dashboard" target="_blank title=">| Weather Dashboard |</a></small><small className="text-muted">
                  <a href="https://github.com/yotambaram/Weather-Dashboard" target="_blank title=" > Weather Dashboard GitHab repo |</a></small>
              </a>
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
        <div className="col-12 col-md-7 border-dark port-card" id='project-three'>
          <div className="card card border-dark shadow mb-3 bg-white rounded img-thumbnail">
            <a href="https://commiewalker.github.io/Findr/" target="_blank" title="project three">
              <img src={require('../../public/jpg/finder.JPG')} className="full-width border" alt="project three picture" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Findr</h5>
              <a className="card-text">My first project in code studies, a month after I started. Not a project that showcases its capabilities but it is my first "product" and has sentimental value to me. The app lets you choose a place to eat by picture. The user's location information and entertainment content come from two third-party APIs.</a><br />
              <a className="card-text"><small className="text-muted">
                <a href="https://commiewalker.github.io/Findr" target="_blank" title="project three">| Findr Githab |</a></small><small className="text-muted">
                  <a href="https://github.com/commiewalker/Findr" target="_blank" title="project three">| Findr GitHab repo |</a></small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
