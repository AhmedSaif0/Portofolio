import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Assets/Header.scss'
import {FaBars, FaTimes} from 'react-icons/fa'

const Header = () => {

const [faBars, setFaBars] = useState(true);
  return(
    // <header >
      // {/* <Navbar className={ `${faBars? "header-big":"header-small"} `} >
      //       <Navbar.Brand href="#home" className="navbar" > 
      //          Ahmed
      //       </Navbar.Brand>
      //       <Nav className="nav-links">
      //         <Nav.Link href="#about">About</Nav.Link>
      //         <Nav.Link href="#services">Services</Nav.Link> 
      //         <Nav.Link href="#contact">Contact</Nav.Link>
      //       </Nav>
      //         <div className='FaBars' >
      //           <button 
      //               className='btnbar' 
      //               onClick={()=>setFaBars(!faBars)}>
      //               { faBars ?  (<><FaBars size={25}/></>):(<><FaTimes size={25}/></>)}
      //           </button>
      //         </div>
      // </Navbar> */}


<Navbar collapseOnSelect expand="lg" className='section_nav sticky-top' >
      <Container>
        <Navbar.Brand href="#home">Ahmed</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto nav-links">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#projects">Project</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  // </header>
  )
}

export default Header
