import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import 'animate.css';



function Navs() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand  class="animate__animated animate__rollIn animate__delay-3s	3s"><Image  src=	"	https://logos-world.net/wp-content/uploads/2022/04/BMW-M-Logo-500x281.png" height={50} /></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Navs
