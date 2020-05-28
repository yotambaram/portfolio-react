import React from 'react'
import "./style.css"



export default function HomePage() {
  return (
    <div id="home">
      <div className='row'>
        <div className='col-12 col-md-12 border-dark backgraund-test' id='home-cover-color'>
          <img src={require('../../public/jpg/yotam2.jpg')} alt="profile picture" id='home-profile-pic' className='img-thumbnail position-absolute' />
        </div>
      </div>
      <div className='row'>
        <div className='col-12  col-lg-5 col-xl-4' id='home-place-holder'></div>
        <div className=' col-12 col-lg-6 col-xl-6 border-dark' id='home-content'>
          <div>
            <h1>Yotam Baram</h1>
          </div>
          <div>
            <h3>Full Stack Developer</h3><br /><br />
            <a>My name is and i'm from and you will know more after the career services will tell me what can i tell you
              and what not</a>
            <a>My main goal here is to put together a collection of clichés but nicely and neatly without writing about
              a wise man who once told<br /> me that a little bit of text is not good and a lot of it is not good so
              everything in life is in the middle and I just wanted to fill<br /> in lines here So I wrote a little
              nonsense to see what was happening.
            </a>
            <a>The applicant must grow, but not grow too much because everything in life is in the middle.</a>
            <a>Thanks to Google translate that I haven't even tested and probably the logical difference between
              languages has created something special here.<br /> One-time.
            </a>
            <a>If you've called here, it's not too late to stop and stop if it's right away.
              It is advisable to read everything upside down now.<br /> At the end you will find that Paul is still
              alive.
            </a>
            <a></a>
          </div>
        </div>
      </div>
    </div>
  )
};

