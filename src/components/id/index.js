import React from 'react'
import "./style.css"

export default function Id() {
  return (
    <div className="col-12 col-md-3 border-dark" id="id-card-holder">
      <div className='card border-dark mb-3 shadow mb-5 bg-white rounded img-thumbnail' id='id-card'>
        <img src={require('../../public/jpg/yotam2.jpg')} className='card-img-top border' alt='profilepic' id="" value="propic" />
        <div className="card-body">
          <div className="card-text">
            <h3><strong>Yotam Baram</strong></h3>
            <a><strong>Full Stack Developer</strong></a><br />
            <a><strong>what else? $%$</strong></a><br />
            <a className="small-gray">Bellevue, WA USA</a><br />
          </div>
        </div>
      </div>
    </div>
  )
}
