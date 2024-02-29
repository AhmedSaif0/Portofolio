import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Assets/Header.scss'
import {FaBars, FaTimes} from 'react-icons/fa'

const Header = () => {

const [faBars, setFaBars] = useState(true);
  return(

    <Navbar collapseOnSelect expand="lg" className='section_nav sticky-top' >
      <Container>
        <Navbar.Brand href="#home">Ahmed</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='d-flex flex-row justify-content-lg-end'>
          <Nav className="me-3 nav-links" >
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header






// import React, { useState } from 'react';
// import { Navbar, Container, Nav } from 'react-bootstrap';
// import { useMediaQuery } from 'react-responsive';

// function NavigationBar() {
//   const [showLinks, setShowLinks] = useState(false); // State to track link visibility

//   // Define a media query for small screens
//   const isSmallScreen = useMediaQuery({ maxWidth: 768 });

//   // Function to toggle link visibility
//   const toggleLinks = () => {
//     setShowLinks(!showLinks);
//   };

//   return (
//     <Navbar collapseOnSelect expand="lg" className='section_nav sticky-top'>
//       <Container>
//         <Navbar.Brand href="#home">Ahmed</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleLinks} />
//         <Navbar.Collapse id="responsive-navbar-nav" className='d-flex flex-row justify-content-lg-end'>
//           {/* Conditionally render the Nav based on screen size and showLinks state */}
//           {(isSmallScreen || showLinks) && (
//             <Nav className="me-3 nav-links">
//               <Nav.Link href="#about">About</Nav.Link>
//               <Nav.Link href="#services">Services</Nav.Link>
//               <Nav.Link href="#projects">Projects</Nav.Link>
//               <Nav.Link href="#contact">Contact</Nav.Link>
//             </Nav>
//           )}
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;
