import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Assets/Header.scss'
import {FaBars, FaTimes} from 'react-icons/fa'

const Header = () => {

const [faBars, setFaBars] = useState(false);

  return(
  <>
        <Navbar className="header-nav" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home" className="me-0 ps-4 ml-auto">Ahmed </Navbar.Brand>
            <Nav className="me-0 ps-4 ml-auto">
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#features">Services</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
              <div className='FaBars' >
                <FaBars />
                <FaTimes />
              </div>
          </Container>
      </Navbar>
  </>
  )

}

export default Header
