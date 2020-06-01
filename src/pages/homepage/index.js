import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'



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
            <h2>Yotam Baram</h2>
          </div>

          <h5>Full Stack Developer</h5><br />
          <ul className = "nonliststyle">
            <li><h6>ABOUT ME</h6>
                10 years experience in broadcast and commercial production as an executive producer and content editor for various tv channels. Pre and post production; live remote production.
                I’ve played key roles in creating high exposure content and producing major events.
                <br />
                During March 2019 I’ve relocated from Israel to Seattle, WA, due to my wife’s relocation job.
                I took advantage of this major change as an opportunity to learn software development and to route myself into a career change which I was hoping for a long back.
                Since our move, I’ve been dedicated and targeted to gain knowledge, learning and developing my skills as a full stack developer. I’ve learnt independently and also completed successfully formal crossovers (certificates).
                Now I’m ready to take it to the next level and leverage the knowledge and experience I gained at my next role.
              </li><br />
            <li><h6>PERSONAL LIFE</h6>
                From Israel, relocated to US with my family in march 2019.
                Married to Ayelet and father to Adam (5) and Eleanor (2).
                We love to spend family time together, travel around mainly in nature.
              </li><br />




            <h6>CAREER PATH</h6>
            <ul>
              <li><bold>Television playout operator</bold>, MX1 Satellite services,  <small>2018-2019</small></li>
              <li><bold>Senior News Content Editor</bold>, Entertainment Channel, <small>2014-2017</small></li>
              <li><bold>Executive Producer and Content Editor</bold>, The Israeli Sports Channel, <small>2009-2014</small></li>
              <Link to={`/experience`} className="expertise" ><small>My Expertise Page</small></Link>
            </ul>
            <br />

            <h6>I'M GOOD AT</h6>
            <ul>
              <li>Planning & driving schedule</li>
              <li> Results-oriented go-getter</li>
              <li> Partner management & team work</li>
              <li> Brainstorming and innovation</li>
            </ul>
            
          </ul>
        </div>
      </div>
    </div>

  )
};

