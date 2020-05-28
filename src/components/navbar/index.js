import React from 'react'
import "./style.css"
import { NavLink } from 'react-router-dom'

export default function NavBar(props) {
  //const menu = ["homeBtn", "portfolioBtn", "aboutMe"]


  return (
    <header className="App-header">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
     
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav-1" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav-1">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/homepage" className="main-nav nav-item nav-link" activeClassName="main-nav-active">HOME<span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="main-nav nav-item nav-link" activeClassName="main-nav-active">PROJECTS</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/aboutme" className="main-nav nav-item nav-link" activeClassName="main-nav-active">ABOUT ME </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}







