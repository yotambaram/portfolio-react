import React from 'react'
import "./style.css"

export default function ExperienceCard() {

  return (
    <div className="col-12 col-md-7 border-dark" id='about-me-holder full-width margin-fix'>
      <div className='card border-dark mb-8 shadow mt-1.5 bg-white rounded img-thumbnail'>
        <div className='card-header border-dark gen-red bold-text text-center'>
          <h3>Full Stuck Web Developer</h3>
        </div>
        <div className="card-body">
          <a className="card-text">Full-stack developer effective at combining problem solving and creativity to build fascinating, user-friendly. 9 years of experience with bringing an idea to the product as a teamwork.</a>
        </div>
      </div>
      <div className='card border-dark mb-8 shadow mt-2 bg-white rounded img-thumbnail'>
        <div className='card-header border-dark gen-red bold-text text-center'>
          <h3>work experience</h3>
        </div>
        <div className="card-body">
          <a className="card-text"><strong>MX1 Satellite services  | Television playout operator </strong><br />
            <a className="card-text text-secondary"><small>Beit Shemesh Israel 2018-2019</small> </a><br />
          </a>
          <a className="card-text">Operation and maintenance of the various control systems for satellite. Providing technical support to resolve issues in real time and ensuring continuous transmission.</a>
        </div>
        <div className="card-body">
          <a className="card-text"><strong>Entertainment Channel | Senior News Content Editor </strong><br />
            <a className="card-text text-secondary"><small>Tel Aviv Israel 2014-2017</small> </a><br />
          </a>
          <a className="card-text">Defined work plans for short/long term, implemented work procedures. Explore content for coverage on the TV show and managing the coverage teams.</a>
        </div>
        <div className="card-body">
          <a className="card-text"><strong>The Israeli Sports Channel | Executive Producer and Content Editor</strong><br />
            <a className="card-text text-secondary"><small>Tel Aviv Israel 2009 – 2014</small> </a><br />
          </a>
          <a className="card-text">Explore and create content items and directing VTR for TV shows end to end in real time.<a className="card-text">Produce and edit live broadcasts, perform real-time decision making.</a></a>
        </div>
      </div>
      <div className='card border-dark mb-8 shadow mt-2 bg-white rounded img-thumbnail'>
        <div className='card-header border-dark gen-red bold-text text-center'>
          <h3>Technical Tools</h3>
        </div>
        <div className="card-body text-center">
          <a className="card-text ">HTML | CSS | JavaScript | jQuery | Responsive Design | Bootstrap | Handlebars | Cookies, Local Storage | React.js | Node.js |Express | Security and Session Storage | User Authentication | MERN Stack | MySQL | MongoDB | Git | Heroku | Adobe Premiere Pro | Final Cut Pro</a>

        </div>
      </div>
    </div>
  )
}
