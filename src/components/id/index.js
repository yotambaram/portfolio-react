import React from 'react'
import "./style.css"

export default function Id() {
  return (
      <div className='card border-dark shadow bg-white rounded img-thumbnail' id='id-card'>
        <img src={require('../../public/jpg/yotam2.jpg')} className='card-img-top border' alt='profilepic' value="propic" />
        <div className="card-body">
          <div className="card-text">
            <h3>Yotam Baram</h3>
            <strong>Full Stack Developer</strong><br /><br />
            <h6 className="small-gray">yotambaram@gmail.com</h6>
            <h6 className="small-gray">Bellevue, WA USA</h6><br />
          </div>
        </div>
      </div>
  )
}
