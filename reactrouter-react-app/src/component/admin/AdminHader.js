import React from 'react';

import {Container,Row,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AdminHeader() {
  return (
    <div>
      
    <Container fluid className="p-1 mt-0 bg-blue border-bottom-2 text-white">
        <Row>
          <div className="col-md-3 p-2 ms-5 ">
          
          <b className='fs-4'>&nbsp;&nbsp;Prit Dashboard</b>
          <p className='fs-6 ms-3 text-success'>Online</p>
          </div>
          <div className="col-md-4 p-3">
            <Form>
              <input
                type="text"
                name="search"
                placeholder="Search anything here!"
                className="form-control"
              />
            </Form>
          </div>
          <div className=' col-md-4 header-icon  d-lg-flex text-white  mt-3 ps-5'>
              
              <h5 className=''>Follow us:</h5>
              <span><i class="bi bi-facebook ps-3"></i></span>
              <span><i class="bi bi-twitter ps-3" ></i></span>
              <span><i class="bi bi-whatsapp ps-3"></i></span>
              <span><i class="bi bi-instagram ps-3"></i></span>
             
              <ul className='header-link'>
     <li className='dropdown'><Link to="#" className='dropdown-toggle' data-bs-toggle="dropdown">Welcome:Admin </Link>
     <ul className='dropdown-menu p-3' style={{width:"170px"}}>
     <li><Link to="#">Change Password</Link></li>
     <li><Link to="#">Logout </Link></li>
     </ul>
     </li>
     </ul>
     </div>
        </Row>
      </Container>

    </div>
  )
}