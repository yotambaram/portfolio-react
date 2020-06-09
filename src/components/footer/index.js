import React from 'react'
import "./style.css"
import {Navbar,  Nav, NavbarBrand} from 'react-bootstrap';

export default function Footer(props) {
  const my = props.myInfo

  

  return (
    <div className="fixed-bottom">  
    <Navbar>
  <NavbarBrand> <Nav className="mr-auto d-block navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom footer-style" role="navigation">{my.name}  |  {my.title}  |  {my.email}</Nav></NavbarBrand>
    </Navbar>
</div>
  )
}







