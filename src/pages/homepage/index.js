import React from 'react'
import "./style.css"



export default function HomePage() {
  return (
    <div id="home">
      <div className='row'>
        <div className='col-12 col-md-12 border-dark backgraund-test' id='home-cover-color'>
          <img src={require('../../public/jpg/yotam2.jpg')} alt="profilepic" id='home-profile-pic' className='img-thumbnail position-absolute' value="propic" />
        </div>
      </div>
      <div className='row'>
        <div className='col-12  col-lg-5 col-xl-4' id='home-place-holder'></div>
        <div className=' col-12 col-lg-6 col-xl-6 border-dark' id='home-content'>
          <div>
            <h1>Yotam Baram</h1>
          </div>
          <div>
            <h3>Full Stack Developer</h3><br />
            <a><a className="h5">ABOUT ME</a><br />
            10 years experience in broadcast and commercial production as an executive producer and content editor for various tv channels. Pre and post production; live remote production.
            I’ve played key roles in creating high exposure content and producing major events.
            </a><br />
            <a>During March 2019 I’ve relocated from Israel to Seattle,     WA, due to my wife’s relocation job. 
              I took advantage of this major change as an opportunity to learn software development and to route myself into a career change which I was hoping for a long back. 
              Since our move, I’ve been dedicated and targeted to gain knowledge, learning and developing my skills as a full stack developer. I’ve learnt independently and also completed successfully formal crossovers (certificates).  
              Now I’m ready to take it to the next level and leverage the knowledge and experience I gained at my next role. 
            </a><br /><br />
            <a><a className="h5">CAREER PATH</a><br />
              MX1 Satellite services, Television playout operator, 2018-2019
              Entertainment Channel, Senior News Content Editor, 2014-2017
              The Israeli Sports Channel, Executive Producer and Content Editor,  2009-2014
            </a><br /><br />
            <a><a className="h5">PERSONAL LIFE</a><br />
              From Israel, relocated to US with my family in march 2019.
              Married to Ayelet and father to Adam (5) and Eleanor (2).
              We love to spend family time together, travel around mainly in nature.
            </a><br /><br /> 
              <a><a className="h5">PERSONAL LIFE</a><br />
              Planning & driving schedule
              Results-oriented go-getter
              Partner management & team work 
              Brainstorming and innovation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
};

