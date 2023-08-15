import React from 'react'
import { Container, Row ,Col } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';




const   NavbarApp = () => {
  return (
    <>
       <div className='header-top-bar'>
         <Row className='align-items-center  d-lg-flex d-none'>
            <Col lg={9} >
              <div className='header-icon  d-lg-flex d-none text-white ps-5 justify-content-left align-items-center py-1'>
              
              <h5 className=''>Follow us:</h5>
              <span><i class="bi bi-facebook ps-3"></i></span>
              <span><i class="bi bi-twitter ps-3" ></i></span>
              <span><i class="bi bi-whatsapp ps-3"></i></span>
              <span><i class="bi bi-instagram ps-3"></i></span>
              </div>
            </Col>
            <Col lg={3} > 
            <div className='header-numbar text-white  text-center py-2'>
               <span className=' fw-bold '><i class="bi bi-telephone-fill"> </i> Call Us :</span>
               <span className=' fw-bold '> +9099525868</span>
               </div>
            </Col> 
         </Row>
      </div> 




      {/* NAVBAR START */}
    <Navbar   expand="lg" className='m-0 p-0 navbar-app'>
    
        <Navbar.Brand href="#home" className='logo ps-5 text-white  fw-bold fs-1'>Industry
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="ms-auto nav-app ps-sm-2 p-lg-0 nav">
            <Nav.Link ><Link className='ps-lg-5   active ' to="/Home">Home</Link></Nav.Link>
            <Nav.Link ><Link className='ps-lg-5 active' to="/About">About</Link></Nav.Link>
            <Nav.Link ><Link className='ps-lg-5  active' to="/Service">Service</Link></Nav.Link>
            <NavDropdown className='ps-lg-5 active'title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item >
                <Link className='active ' to="/project">Project</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link className=' active' to="/Features">Features</Link>
              </NavDropdown.Item>
              <NavDropdown.Item ><Link className=' active' to="/Our">Our Team</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><Link className='ps-lg-5 active' to="/Contact">Contact</Link></Nav.Link>  
          </Nav>
          <a href="" class="btn text-white bg-Primary px-3 ms-5 me-5 d-none d-lg-block ">Get A Quote</a>
        </Navbar.Collapse>
    </Navbar>
    <Outlet/>
    </>
  )
}

export default NavbarApp ;