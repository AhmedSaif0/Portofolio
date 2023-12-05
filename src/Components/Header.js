import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Assets/Header.scss'
import {FaBars, FaTimes} from 'react-icons/fa'

const Header = () => {

const [faBars, setFaBars] = useState(true);

  return(
    <header className='section_nav'>
      <Navbar className={ `${faBars? "header-nav":"header-navshow"} `} >
            <Navbar.Brand href="#home" className="navbar" > 
               Ahmed
            </Navbar.Brand>
            <Nav className="nav-links">
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#features">Services</Nav.Link> 
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
              <div className='FaBars' >
                <button className='btnbar' onClick={()=>setFaBars(!faBars)}>{ faBars ?  (<><FaBars size={25}/></>):(<><FaTimes size={25}/></>)}</button>
              </div>
       
      </Navbar>
  </header>
  )
}

export default Header
