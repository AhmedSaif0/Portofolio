import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Assets/Header.scss'
import {FaBars, FaTimes} from 'react-icons/fa'

const Header = () => {

const [faBars, setFaBars] = useState(true);

  return(
  <section className='section_nav'>
      <Navbar className={ `${faBars? "header-nav":"header-navshow"} `} >
          <Container>
            <Navbar.Brand href="#home" className="me-0 ps-4 ml-auto navbar" > Ahmed</Navbar.Brand>
            <Nav className="me-4   left">
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#features">Services</Nav.Link> 
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
              <div className='FaBars' >
                <button className='btnbar' onClick={()=>setFaBars(!faBars)}>{ faBars ?  (<><FaBars size={25}/></>):(<><FaTimes size={25}/></>)}</button>
              </div>
          </Container>
      </Navbar>
  </section>
  )

}

export default Header
