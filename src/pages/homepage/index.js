import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import PageHeader from '../../components/pageheader';
const thisPageName = "YOTAM BARAM"



export default function HomePage(props) {
  return (
    
    <div id="home">
      <PageHeader pageName={thisPageName}/>
      <div className='row'>
        <div className=' col-12 col-lg-6 col-xl-8 border-dark' id='home-contant'>
        

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
              <li><strong>Television playout operator</strong>, MX1 Satellite services,  <small>2018-2019</small></li>
              <li><strong>Senior News Content Editor</strong>, Entertainment Channel, <small>2014-2017</small></li>
              <li><strong>Executive Producer and Content Editor</strong>, The Israeli Sports Channel, <small>2009-2014</small></li>
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

