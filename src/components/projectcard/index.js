import React from 'react'
import "./style.css"
//import { Link } from 'react-router-dom'


export default function ProjectCard() {

  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-3 border-dark" id="Flixlists-card-holder">
        </div>
        <div className="col-12 col-md-7 border-dark port-card">
          <div className="card card border-dark shadow mb-2 bg-white rounded img-thumbnail">
            <a href="https://www.herokuapp.com" target="_blank" title="project on" rel="noopener noreferrer" value="yoututorheroku2" >
              <img src={require('../../public/jpg/findtutor.JPG')} className="full-width border" alt="flixlists" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Find Tutor</h5>
              <span className="card-text">A social network that allows you to choose skills you need help to learn and find tutor or with skills you are good on and can be a tutor, you can find the learning people who needs help</span><br />
             <small className="text-muted">
                <a href={"https://www.yoututor2020.herokuapp.com"} value="yoututorheroku" target={"_blank"} >Find A Tutor App</a>
                <a href={"https://www.github.com/OlgaSadova/FinalProject"} value="yoututorgithubfront" target={"_blank"} > | Find Tutor GitHub Frontend Repo</a>
                <a href={"https://www.github.com/OlgaSadova/FinalProjectBackEnd"} value="yoututorgithubback" target={"_blank"}> | Find Tutor GitHub Backend Repo</a>
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
            <a href={"https://www.flixlists.herokuapp.com/login"} target={"_blank"} title="project on" value="yoututot">
              <img src={require('../../public/jpg/flixlists.JPG')} className="full-width border" alt="flixlists" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Flixlists</h5>
              <span className="card-text">Full stack web application that allows users to search the Open Movie Database for information about films and to keep lists of their favorite ones. Each user his her own login and password and her lists are stored persistently in a MySql database.</span><br />
              <small className="text-muted">
                <a href={"https://www.flixlists.herokuapp.com/movies"} value="flixlistsheroku" target={"_blank"}>flixlists Website </a>
                <a href={"https://www.github.com/yotambaram/Flixlists"} value="flixlistsgithub" target={"_blank"}> | flixlists GitHub Repo</a>
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
            <a href={"https://www.yotambaram.github.io/Weather-Dashboard"} value="Weather-Dashboard-github1" target={"_blank"} title="Weather Dashboard">
              <img src={require('../../public/jpg/weather-deshboard.JPG')} className="full-width border" alt="Weather Dashboarde" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <span className="card-text">The weather app is simple, accessible and easy to use. Receives the weather API details and passes them to a site visitor based on their location or location searched for Fahrenheit or Celsius of your choice.</span><br />
              <small className="text-muted">
                <a href={"https://www.yotambaram.github.io/Weather-Dashboard"} value="Weather-Dashboard" target={"_blank"} >| Weather Dashboard |</a></small><small className="text-muted">
                <a href={"https://www.github.com/yotambaram/Weather-Dashboard"} value="Weather-Dashboard-github" target={"_blank"} > Weather Dashboard GitHab repo |</a>
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
            <a href={"https://www.commiewalker.github.io/Findr"} value="finder-github" target={"_blank"} title="project three">
              <img src={require('../../public/jpg/finder.JPG')} className="full-width border" alt="Findr" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Findr</h5>
              <span className="card-text">My first project in code studies, a month after I started. Not a project that showcases its capabilities but it is my first "product" and has sentimental value to me. The app lets you choose a place to eat by picture. The user's location information and entertainment content come from two third-party APIs.</span><br />
              <small className="text-muted">
                <a href={"https://www.commiewalker.github.io/Findr"} value="finder-github1" target={"_blank"} title="project three">| Findr Githab |</a></small><small className="text-muted">
                <a href={"https://www.github.com/commiewalker/Findr"} value="finder-github2" target={"_blank"} title="project three">| Findr GitHab repo |</a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
