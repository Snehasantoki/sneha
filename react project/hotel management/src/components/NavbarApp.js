import React from 'react'
import o from "./img/Jadoo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';




export default function NavbarApp() {

 

  return (
    <>
    
    <Navbar bg="light" expand="lg" >

 
       <Container fluid >

        <Navbar.Brand><img src={o}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
        <Nav className="ms-auto absnavbar me-5 nav-link" id='home' >


        <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/Hotel">Hotel</Nav.Link>
            <Nav.Link href="/Bookings">Booking</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Sign up">Sign up</Nav.Link>
            
         
        </Nav>
        </Navbar.Collapse>
        
       </Container>

    </Navbar>

    
    <Outlet />
    
    </>
  )
}
