import React from 'react'
import "./style.css"

export default function LinkCard() {
  return (
    <div className="row">
      <div className="col-12 col-md-12 border-dark">
        <div className='card border-dark mb-1 shadow bg-white rounded extra-cantant img-thumbnail'
          id='right-card-two'>
          <img src={require('../../public/jpg/linkedin.png')} className='card-img-top border' alt='linkedin' />
          <div className="card-body">
            <p className="card-text center-content"><a href="https://www.linkedin.com/in/yotambaram" value="linkedin" target="_blank" title="Yotams linkedin"> Visit My Linkedin</a></p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-12 border-dark">
        <div className='card border-dark mb-1 shadow bg-white rounded extra-cantant img-thumbnail'
          id='right-card-one'>
          <img src={require('../../public/jpg/github.png')} className='card-img-top border' alt='github' value="githublogo" />
          <div className="card-body">
            <p className="card-text center-content"><a href={"https://github.com/yotambaram"} value="githublink" target="_blank" title="Yotams github"> Visit My GitHub</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}